---
title: Recursive Search in FileExplorer
description: See hot to simulate recursive search/filtering through the files in RadFileExplorer
type: how-to
page_title: Simulate recursive search with RadFileExplorer
slug: fileexplorer-recursive-search
position: 
tags: 
ticketid: 1440603
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadFileExplorer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
RadFileExplorer loads the content of its folders on demand, this is why currently it supports filtering only through the files in the currently loaded folder (but not the nested ones). Nevertheless, it is possible to simulate recursive search by traversing directly the items in the file system (applicable only when the default content provider is used) using the [System.IO.Directory](https://docs.microsoft.com/en-us/dotnet/api/system.io.directory?view=netframework-4.8) class and the client-side API of RadFileExplorer.

For this purpose, you can go through the following steps:
1. Add RadWindow control on the page, having a RadGrid inside it client-template (we will show the search results in it)
1. Add RadAjaxManager and update the Grid to updates itself.
1. Handle the FileExplorer's `OnClientFilter` event, cancel its event arguments and `show()` the added RadWindow instead. Here you can keep the searched value into a hidden field and access it later on the server-side.
1. Handle the RadWindow's `OnClientBeforeShow` event and call the `rebind()` method of the Grid there.
1. Handle the RadGrid's `OnNeedDataSource` event, execute the server-side searching there and set a result as a datasource for the Grid.
1. Handle the Grid client-side OnRowClick event in order to pass the path of the choosen (clicked) file to RadFileExplorer. You can use the RadFileExplorer's `set_currentDirectory()` and `selectFileByName()` methods for this purpose.

You can see a sample implementation of the above described approach below:

## Solution
````ASP.NET
        <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
            <AjaxSettings>
                <telerik:AjaxSetting AjaxControlID="ResultsGrid">
                    <UpdatedControls>
                        <telerik:AjaxUpdatedControl ControlID="ResultsGrid"/>
                    </UpdatedControls>
                </telerik:AjaxSetting>
            </AjaxSettings>
        </telerik:RadAjaxManager>

        <telerik:RadFileExplorer ID="RadFileExplorer1" runat="server" EnableFilterTextBox="true"
            OnClientFilter="onFilter" FilterTextBoxLabel="Search (press Enter):">
        </telerik:RadFileExplorer>
        <asp:HiddenField ID="SearchValue" runat="server" />
        <asp:HiddenField ID="SearchPath" runat="server" />

        <telerik:RadWindow ID="modalPopup" runat="server" Width="900px" Height="700px" Modal="true" Behaviors="Close" Title="Search Results"
            OnClientBeforeShow="OnClientBeforeShow">
            <ContentTemplate>
                <div style="padding: 10px; margin: 20px">
                    <p style="font-size: 16px; color: red;">Select a file:</p>
                    <telerik:RadGrid ID="ResultsGrid" runat="server" AutoGenerateColumns="False" OnNeedDataSource="ResultsGrid_NeedDataSource">
                        <ClientSettings EnableRowHoverStyle="true">
                            <ClientEvents OnRowClick="onRowClick" />
                            <Selecting AllowRowSelect="true" />
                        </ClientSettings>
                        <MasterTableView ClientDataKeyNames="Path, FileName" DataKeyNames="Filename">
                            <Columns>
                                <telerik:GridBoundColumn HeaderText="Filename" DataField="Filename" UniqueName="Filename"></telerik:GridBoundColumn>
                                <telerik:GridBoundColumn HeaderText="Path" DataField="Path" UniqueName="Path"></telerik:GridBoundColumn>
                            </Columns>
                        </MasterTableView>
                    </telerik:RadGrid>
                </div>
            </ContentTemplate>
        </telerik:RadWindow>
        
        <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
            <script type="text/javascript">
                function onRowClick(sender, eventArgs) {
                    var wnd = $find("<%=modalPopup.ClientID %>");
                    var explorer = $find("<%=RadFileExplorer1.ClientID %>");
                    var path = eventArgs.getDataKeyValue("Path");
                    var fileName = eventArgs.getDataKeyValue("FileName");
                    var fileList = explorer.get_fileList();

                    explorer.set_currentDirectory(path, true);
                    explorer.refresh();
                    wnd.close();

                    setTimeout(function () {
                        fileList.clearSelection();
                        fileList.selectFileByName(fileName);
                    }, 200);
                }

                function onFilter(fileExplorer, args) {
                    args.set_cancel(true);
                    console.log(event.keyCode);
                    if (event.keyCode == 13) {
                        var searchField = $get("<%=SearchValue.ClientID%>");
                        var searchPath = $get("<%=SearchPath.ClientID%>");

                        var wnd = $find("<%=modalPopup.ClientID %>");

                        searchField.value = args.get_text();
                        searchPath.value = "~" + fileExplorer.get_currentDirectory();
                        wnd.show();
                    }
                }
                function OnClientBeforeShow(wnd, args) {
                    var grid = $find("<%=ResultsGrid.ClientID %>");
                    grid.get_masterTableView().rebind();
                }
            </script>
        </telerik:RadScriptBlock>
````

````C#
    public string rootPath = "";
    
    protected void Page_Load(object sender, EventArgs e)
    {
        rootPath = "~/Root";
        RadFileExplorer1.Configuration.ViewPaths = new string[] { rootPath };
    }

    public void ResultsGrid_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
    {
        string searchKey = SearchValue.Value.ToLower();
        string searchPath = SearchPath.Value.ToLower() != string.Empty ? SearchPath.Value.ToLower() : rootPath;
        string test = SearchPath.Value.ToLower();
        var allFiles = Directory.EnumerateFiles(Server.MapPath(searchPath), "*.*", SearchOption.AllDirectories);

        var result = allFiles
            .Where(f => new FileInfo(f).Name.ToLower().Contains(searchKey))
            .Select(f => new
            {
                Filename = new FileInfo(f).Name,
                Path = GetPath(new FileInfo(f)),
            });

        ResultsGrid.DataSource = result;
    }

    public string GetPath(FileInfo file)
    {
        string fromPath = Server.MapPath(rootPath);
        string toPath = file.FullName;
        string root = VirtualPathUtility.ToAbsolute(rootPath);
        string filePath = Path.GetFullPath(toPath).Substring(Path.GetFullPath(fromPath).Length + 1);
        return Path.Combine(root, filePath).Replace("\\", "/");
    }
````

## See Also
 * [RadFileExplorer Client-side Overview]({%slug fileexplorer/client-side-programming/overview%})
 * [RadFileExplorer Client-side Events]({%slug fileexplorer/client-side-programming/events%})
 * [RadGrid Server-side Events]({%slug grid/server-side-programming/overview%})
 * [RadGrid OnRowClick Client-side Event]({%slug grid/client-side-programming/events/onrowclick%})
 * [RadWindow Client-side Overview]({%slug window/client-side-programming/overview%})
 * [RadWindow OnClientBeforeShow Client-side Event]({%slug window/client-side-programming/events/onclientbeforeshow%})
 * [System.IO.Directory Class](https://docs.microsoft.com/en-us/dotnet/api/system.io.directory)
 * [System.IO.FileInfo Class](https://docs.microsoft.com/en-us/dotnet/api/system.io.fileinfo)
