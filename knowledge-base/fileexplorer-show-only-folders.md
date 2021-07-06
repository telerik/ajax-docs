---
title: Show only folders in RadFileExplorer
description: See how to display only folders in RadFileExplorer for ASP.NET AJAX. Check it now!
type: how-to
page_title: Show only folders in RadFileExplorer
slug: fileexplorer-show-only-folders
ticketid: 1526366
res_type: kb
---


## Description

In this article you will see how to configure RadFileExplorer to show only the folders inside the passed path to the end user.

## Solution

#### Option 1

A way to achieve the described scenario is to show only the folders' tree to the users, by configuring the FileExplorer's `VisibleControls` property by removing the right grid view of the control:

````ASP.NET
<telerik:RadFileExplorer ID="FileExplorer1" runat="server" EnableCopy="true" VisibleControls="Toolbar,TreeView,ContextMenus,AddressBox">
    <Configuration ViewPaths="~/" DeletePaths="~/" UploadPaths="~/"/>
</telerik:RadFileExplorer>
````

#### Option 2

Another possible approach, in case you want to keep visible both the TreeView and the Grid, is to handle the `ExplorerPopulated` server-side event event of RadFileExplorer. Inthis event you have access to all items bound to the grid, so you can remove the files from the items collection like follows:

````ASP.NET
<telerik:RadFileExplorer ID="FileExplorer1" runat="server" EnableCopy="true" OnExplorerPopulated="RadFileExplorer1_ExplorerPopulated">
	<Configuration ViewPaths="~/" DeletePaths="~/" UploadPaths="~/" />
</telerik:RadFileExplorer>
````

````C#
protected void RadFileExplorer1_ExplorerPopulated(object sender, RadFileExplorerPopulatedEventArgs e)
{
    List<FileBrowserItem> items = e.List;
 
    if (e.ControlName == "grid")
    {
        int i = 0;
        while (i < items.Count)
        {
            if (items[i] is FileItem)
            {
                items.Remove(items[i]);
            }
            else
            {
                i++;
            }
        }
    }
}
````
````VB
Protected Sub RadFileExplorer1_ExplorerPopulated(ByVal sender As Object, ByVal e As RadFileExplorerPopulatedEventArgs)
    Dim items As List(Of FileBrowserItem) = e.List

    If e.ControlName = "grid" Then
        Dim i As Integer = 0

        While i < items.Count
            If TypeOf items(i) Is FileItem Then
                items.Remove(items(i))
            Else
                i += 1
            End If
        End While
    End If
End Sub
````

## See Also

* [Implement a File Selector Dialog in RadFileExplorer - demo](https://demos.telerik.com/aspnet-ajax/fileexplorer/examples/client-sideapi/fileselectordialog/defaultcs.aspx)