---
title: Editing RadGrid Records with RadWindow
page_title: Editing RadGrid Records with RadWindow | RadGrid for ASP.NET AJAX Documentation
description: Editing RadGrid Records with RadWindow
slug: grid/application-scenarios/editing-radgrid-records-with-radwindow
tags: editing,radgrid,records,with,radwindow
published: True
position: 3
---

# Editing RadGrid Records with RadWindow



The [Window Editing](http://demos.telerik.com/aspnet-ajax/Controls/Examples/Integration/GridAndWindow/DefaultCS.aspx) demo shows how to use **RadWindow** for editing **RadGrid** records.

The demo uses a **GridTemplateColumn** that contains a **HyperLink** control to launch the window for editing, and a [CommandItemTemplate]({%slug grid/data-editing/commanditem/command-item-template%}) to add a link that launches the window for inserts.

>note In Master page/UserControl scenario RadGrid should be ajaxified from the true RadAjaxManager but the RadAjaxManagerProxy.
>


Depending on the edit operation, **RadGrid** uses a different mechanism for launching the **RadWindow** object, initializing data values, and then assigning edited values back to the grid when editing is complete:

## Edit/Update

1. Using the grid's **ItemCreated** event, locate the HyperLink in the template column for each **GridDataItem**.

1. Attach a javascript function to the **onclick** attribute of the **HyperLink** that opens **RadWindow** (passing the primary key for the currently created item as an argument).

1. In the **onclick** handler, open the popup window calling **window.radopen**() and passing the primary key in the query string of the new window.

1. In the content page of **RadWindow** retrieve the cell values from the grid source that corresponds to the primary key from the query string and display them in editable text boxes.

1. When the user clicks the "Update" control in the window, update the selected row in the grid data source, close the popup window, and call a javascript function on the main page to rebind the grid.

1. In the javascript function for rebinding the grid, generate an AJAX request using the **RadAjaxManager.ajaxRequest** method.

1. In the Web page, intercept the manager's **AjaxRequest** event to handle the ajax request. In its handler, rebind the grid.

## Insert

1. In the **CommandItemTemplate** of the grid, add an anchor element (<a>) for inserting items. (Don't forget to set the **CommandItemDisplay** property of the grid so that the command item appears in the grid.)

1. Attach an **onclick** handler to the anchor for opening the insertion form.

1. In the **onclick** handler, open the popup window calling **window.radopen**() with no query parameters.

1. When the user clicks the "Insert" control in the window, add a new row in the grid source, close the popup window, and call a javascript function on the main page to rebind the grid and navigate to the new record.

1. In the javascript function for rebinding the grid, generate an AJAX request using the **RadAjaxManager.ajaxRequest** method.

1. In the Web page, intercept the manager's **AjaxRequest**event to handle the ajax request. In its handler, rebind the grid and move to the last page so that the inserted record is visible.![](images/grdWindowEditing_thumb.PNG)

````JavaScript
	
	    function ShowEditForm(id, rowIndex) {
	      var grid = $find("<%= RadGrid1.ClientID %>");
	      var rowControl = grid.get_masterTableView().get_dataItems()[rowIndex].get_element(); grid.get_masterTableView().selectItem(rowControl, true);
	      window.radopen("EditForm.aspx?EmployeeID=" + id, "UserListDialog");
	      return false;
	    }
	    function ShowInsertForm() {
	      window.radopen("EditFormCS.aspx", "UserListDialog");
	      return false;
	    }
	    function refreshGrid(arg) {
	      if (!arg) {
	        $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest("Rebind");
	      }
	      else {
	        $find("<%= RadAjaxManager1.ClientID %>").ajaxRequest("RebindAndNavigate");
	      }
	    }
````





````ASPNET
	  <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	    <AjaxSettings>
	      <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
	        <UpdatedControls>
	          <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
	        </UpdatedControls>
	      </telerik:AjaxSetting>
	    </AjaxSettings>
	  </telerik:RadAjaxManager>
	  <telerik:RadGrid OnItemCreated="RadGrid1_ItemCreated" ID="RadGrid1" runat="server"
	    Skin="Vista" AllowPaging="True" Width="97%" DataSourceID="SqlDataSource1">
	    <PagerStyle Mode="NumericPages" />
	    <MasterTableView AutoGenerateColumns="False" DataKeyNames="EmployeeID" Width="100%"
	      CommandItemDisplay="Top" PageSize="5">
	      <Columns>
	        <telerik:GridBoundColumn DataField="EmployeeID" HeaderText="EmployeeID" ReadOnly="True"
	          SortExpression="EmployeeID" UniqueName="EmployeeID">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="FirstName" HeaderText="FirstName" SortExpression="FirstName"
	          UniqueName="FirstName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="LastName" HeaderText="LastName" SortExpression="LastName"
	          UniqueName="LastName">
	        </telerik:GridBoundColumn>
	        <telerik:GridBoundColumn DataField="Title" HeaderText="Title" SortExpression="Title"
	          UniqueName="Title">
	        </telerik:GridBoundColumn>
	        <telerik:GridTemplateColumn UniqueName="TemplateEditColumn">
	          <ItemTemplate>
	            <asp:HyperLink ID="EditLink" runat="server" Text="Edit"></asp:HyperLink>
	          </ItemTemplate>
	        </telerik:GridTemplateColumn>
	      </Columns>
	      <CommandItemTemplate>
	        <a href="#" onclick="return ShowInsertForm();">Add New Record</a>
	      </CommandItemTemplate>
	    </MasterTableView>
	    <ClientSettings>
	      <Selecting AllowRowSelect="true" />
	    </ClientSettings>
	  </telerik:RadGrid>
	  <telerik:RadWindowManager ID="RadWindowManager1" runat="server" Skin="Vista">
	    <Windows>
	      <telerik:RadWindow Skin="Vista" ID="UserListDialog" runat="server" Title="User List Dialog"
	        Height="400px" Width="300px" Left="150px" ReloadOnShow="true" Modal="true" />
	    </Windows>
	  </telerik:RadWindowManager>
	  <asp:SqlDataSource ID="SqlDataSource1" 
	    runat="server" SelectCommand="SELECT [EmployeeID], [FirstName], [LastName], [Title] FROM [Employees]"
	    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>">
	  </asp:SqlDataSource>
````
````C#
	    protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
	    {
	        if (e.Item is GridDataItem)
	        {
	            HyperLink editLink = (HyperLink)e.Item.FindControl("EditLink");
	            editLink.Attributes["href"] = "#";
	            editLink.Attributes["onclick"] = String.Format("return ShowEditForm('{0}','{1}');", e.Item.OwnerTableView.DataKeyValues[e.Item.ItemIndex]["EmployeeID"], e.Item.ItemIndex);
	        }
	    }
	    protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
	    {
	        if (e.Argument == "Rebind")
	        {
	            RadGrid1.MasterTableView.SortExpressions.Clear();
	            RadGrid1.MasterTableView.GroupByExpressions.Clear();
	            RadGrid1.Rebind();
	        }
	        else if (e.Argument == "RebindAndNavigate")
	        {
	            RadGrid1.MasterTableView.SortExpressions.Clear();
	            RadGrid1.MasterTableView.GroupByExpressions.Clear();
	            RadGrid1.MasterTableView.CurrentPageIndex = RadGrid1.MasterTableView.PageCount - 1;
	            RadGrid1.Rebind();
	        }
	    }
````
````VB.NET
	    Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemCreated
	        If TypeOf e.Item Is GridDataItem Then
	            Dim editLink As HyperLink = DirectCast(e.Item.FindControl("EditLink"), HyperLink)
	            editLink.Attributes("href") = "#"
	            editLink.Attributes("onclick") = [String].Format("return ShowEditForm('{0}','{1}');", e.Item.OwnerTableView.DataKeyValues(e.Item.ItemIndex)("EmployeeID"), e.Item.ItemIndex)
	        End If
	    End Sub
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
	        If e.Argument = "Rebind" Then
	            RadGrid1.MasterTableView.SortExpressions.Clear()
	            RadGrid1.MasterTableView.GroupByExpressions.Clear()
	            RadGrid1.Rebind()
	        ElseIf e.Argument = "RebindAndNavigate" Then
	            RadGrid1.MasterTableView.SortExpressions.Clear()
	            RadGrid1.MasterTableView.GroupByExpressions.Clear()
	            RadGrid1.MasterTableView.CurrentPageIndex = RadGrid1.MasterTableView.PageCount - 1
	            RadGrid1.Rebind()
	        End If
	    End Sub
````




````ASPNET
	  <script type="text/javascript">    function CloseAndRebind(args) {
	      GetRadWindow().Close();
	      GetRadWindow().BrowserWindow.refreshGrid(args);
	    }
	    function GetRadWindow() {
	      var oWindow = null; if (window.radWindow)
	        oWindow = window.radWindow; //Will work in Moz in all cases, including classic dialog  
	      else if (window.frameElement.radWindow)
	        oWindow = window.frameElement.radWindow; //IE (and Moz as well)          
	      return oWindow;
	    }
	    function CancelEdit() {
	      GetRadWindow().Close();
	    }
	  </script>
	  <asp:DetailsView ID="DetailsView1" DataKeyNames="EmployeeID" runat="server" AutoGenerateRows="False"
	    DataSourceID="SqlDataSource1" Height="50px" Width="125px" OnItemCommand="DetailsView1_ItemCommand">
	    <Fields>
	      <asp:BoundField DataField="FirstName" HeaderText="FirstName" SortExpression="FirstName" />
	      <asp:BoundField DataField="LastName" HeaderText="LastName" SortExpression="LastName" />
	      <asp:BoundField DataField="Title" HeaderText="Title" SortExpression="Title" />
	      <asp:CommandField ShowEditButton="True" />
	      <asp:CommandField ShowInsertButton="True" />
	    </Fields>
	  </asp:DetailsView>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" SelectCommand="SELECT [EmployeeID], [FirstName], [LastName], [Title] FROM [Employees] WHERE ([EmployeeID] = @EmployeeID)"
	    UpdateCommand="UPDATE [Employees] SET [FirstName] = @FirstName, [LastName] = @LastName, [Title] = @Title WHERE [EmployeeID] = @EmployeeID"
	    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>">
	    <UpdateParameters>
	       <asp:Parameter Name="FirstName" Type="String" />
	       <asp:Parameter Name="LastName" Type="String" />
	       <asp:Parameter Name="Title" Type="String" />
	       <asp:Parameter Name="EmployeeID" Type="Int32" />
	    </UpdateParameters>
	    <SelectParameters>
	       <asp:QueryStringParameter Name="EmployeeID" QueryStringField="EmployeeID" Type="Int32" />
	    </SelectParameters>
	  </asp:SqlDataSource>
````



````C#
	    protected void Page_Init(object sender, EventArgs e)
	    {
	        if (Request.QueryString["EmployeeId"] == null)
	        {
	            DetailsView1.DefaultMode = DetailsViewMode.Insert;
	        }
	        else
	        {
	            DetailsView1.DefaultMode = DetailsViewMode.Edit;
	        }
	    }
	    protected void DetailsView1_ItemCommand(object sender, System.Web.UI.WebControls.DetailsViewCommandEventArgs e)
	    {
	        if (e.CommandName == "Update")
	        {
	            ClientScript.RegisterStartupScript(Page.GetType(), "mykey", "CloseAndRebind();",
	                true);
	        }
	        else if (e.CommandName == "Insert")
	        {
	            ClientScript.RegisterStartupScript(Page.GetType(),
	                "mykey", "CloseAndRebind('navigateToInserted');", true);
	        }
	        else
	        {
	            ClientScript.RegisterStartupScript(Page.GetType(),
	                "mykey", "CancelEdit();", true);
	        }
	    }
````



````VB.NET
	    Protected Sub DetailsView1_ItemCommand(ByVal sender As Object, ByVal e As System.Web.UI.WebControls.DetailsViewCommandEventArgs) Handles DetailsView1.ItemCommand
	        If (e.CommandName = "Update") Then
	            ClientScript.RegisterStartupScript(Page.GetType(), "mykey", "CloseAndRebind();", True)
	        ElseIf (e.CommandName = "Insert") Then
	            ClientScript.RegisterStartupScript(Page.GetType(), "mykey", "CloseAndRebind('navigateToInserted');", True)
	        Else
	            ClientScript.RegisterStartupScript(Page.GetType(), "mykey", "CancelEdit();", True)
	        End If
	    End Sub
	
	    Protected Sub Page_Init(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Init
	        If Request.QueryString("EmployeeId") Is Nothing Then
	            DetailsView1.DefaultMode = DetailsViewMode.Insert
	        Else
	            DetailsView1.DefaultMode = DetailsViewMode.Edit
	        End If
	    End Sub
````



