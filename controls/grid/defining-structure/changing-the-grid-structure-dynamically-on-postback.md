---
title: Changing the Grid Structure Dynamically on Postback
page_title: Changing the Grid Structure Dynamically on Postback | UI for ASP.NET AJAX Documentation
description: Changing the Grid Structure Dynamically on Postback
slug: grid/defining-structure/changing-the-grid-structure-dynamically-on-postback
tags: changing,the,grid,structure,dynamically,on,postback
published: True
position: 3
---

# Changing the Grid Structure Dynamically on Postback



## 

You can modify the columns collection of a __RadGrid__ dynamically on postback request, giving your user the freedom to alter the grid column structure when needed. For example, you could change the structure of the grid when the user chooses an option from a control that resides outside of the grid.

The first option would be to use auto-generated columns for the grid and merely change its data source and invoke its Rebind() method on postback. Thus the [NeedDataSource event]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%}) of the grid will be raised explicitly and the control will be populated with the new data.

The second approach will require changing the grid column structure programmatically. There are two points to keep in mind when modifying the grid columns on postback:

* You must ensure that the entire grid, including its columns collection, is modified on __Page_Init__ so that the control __ViewState__ remains consistent. Otherwise, built-in features such as sorting, paging, and so on will not function as expected.

* You should set the __EnableColumnViewState__ property to __False__, so that the grid knows that the columns may vary at some stage of the page lifecycle.

The following code snippets illustrate how to change the columns in a dynamically created grid, based on a drop-down list selection. Note that the code which constructs the grid fetches the selected value from the drop-down list by referencing the combobox using __Request.Form.Get(controlId)__ method of the ASP.NET AJAX framework (an alternative solution would be to use the __Request.Form.Keys__ collection to identify whether the combobox triggered the submit, more info on this approach can be gathered from [here](http://forums.asp.net/p/1159322/1912061.aspx)):

>tabbedCode

````ASPNET
	  <asp:PlaceHolder ID="PlaceHolder1" runat="server" />
	  <br />
	  <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="true" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
	    <asp:ListItem Text="empty grid" Value="0" />
	    <asp:ListItem Text="1 column grid" Value="1" />
	    <asp:ListItem Text="2 column grid" Value="2" />
	    <asp:ListItem Text="3 column grid" Value="3" />
	  </asp:DropDownList>
	  <br />
	  <asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/App_Data/Nwind.mdb"
	    SelectCommand="SELECT ContactName, ContactTitle, Address FROM [Customers]" />
````
````C#
	    protected void Page_Init(object sender, System.EventArgs e)
	    {
	        PopulateGridOnPageInit();
	    }
	    protected void PopulateGridOnPageInit()
	    {
	        string ddlValue = Request.Form.Get("DropDownList1");
	        RadGrid grid = new RadGrid();
	        grid.ID = "grid";
	        grid.Width = Unit.Pixel(400);
	        grid.AllowSorting = true;
	        grid.PagerStyle.Mode = GridPagerMode.NextPrevAndNumeric;
	        grid.AllowPaging = true;
	        grid.Skin = "Sunset";
	        grid.DataSourceID = "AccessDataSource1";
	        grid.MasterTableView.AutoGenerateColumns = false;
	        grid.MasterTableView.EnableColumnsViewState = false;
	        GridBoundColumn boundColumn;
	        if (ddlValue != null)
	        {
	            switch (ddlValue)
	            {
	                case "0":
	                    grid.DataSourceID = "";
	                    grid.DataSource = new object[0];
	                    break;
	                case "1":
	                    boundColumn = new GridBoundColumn();
	                    boundColumn.HeaderText = "ContactName";
	                    boundColumn.DataField = "ContactName";
	                    boundColumn.UniqueName = "ContactName";
	                    grid.MasterTableView.Columns.Add(boundColumn);
	                    break;
	                case "2":
	                    boundColumn = new GridBoundColumn();
	                    boundColumn.HeaderText = "ContactName";
	                    boundColumn.DataField = "ContactName";
	                    boundColumn.UniqueName = "ContactName";
	                    grid.MasterTableView.Columns.Add(boundColumn);
	                    boundColumn = new GridBoundColumn();
	                    boundColumn.HeaderText = "ContactTitle";
	                    boundColumn.DataField = "ContactTitle";
	                    boundColumn.UniqueName = "ContactTitle";
	                    grid.MasterTableView.Columns.Add(boundColumn);
	                    break;
	                case "3":
	                    boundColumn = new GridBoundColumn();
	                    boundColumn.HeaderText = "ContactName";
	                    boundColumn.DataField = "ContactName";
	                    boundColumn.UniqueName = "ContactName";
	                    grid.MasterTableView.Columns.Add(boundColumn);
	                    boundColumn = new GridBoundColumn();
	                    boundColumn.HeaderText = "ContactTitle";
	                    boundColumn.DataField = "ContactTitle";
	                    boundColumn.UniqueName = "ContactTitle";
	                    grid.MasterTableView.Columns.Add(boundColumn);
	                    boundColumn = new GridBoundColumn();
	                    boundColumn.HeaderText = "Address";
	                    boundColumn.DataField = "Address";
	                    boundColumn.UniqueName = "Address";
	                    grid.MasterTableView.Columns.Add(boundColumn);
	                    break;
	            }
	        }
	        else
	        {
	            grid.DataSourceID = "";
	            grid.DataSource = new object[0];
	        }
	        PlaceHolder1.Controls.Add(grid);
	    }
	    protected void DropDownList1_SelectedIndexChanged(object sender, EventArgs e)
	    {
	        RadGrid grid = PlaceHolder1.FindControl("grid") as RadGrid;
	        grid.Rebind();
	    }
````
````VB.NET
	    Protected Sub Page_Init(ByVal sender As Object, _
	          ByVal e As System.EventArgs) Handles Me.Init
	        PopulateGridOnPageInit()
	    End Sub
	    Protected Sub PopulateGridOnPageInit()
	        Dim ddlValue As String = Request.Form.Get("DropDownList1")
	        Dim grid As RadGrid = New RadGrid
	        grid.ID = "grid"
	        grid.Width = Unit.Pixel(400)
	        grid.AllowSorting = True
	        grid.PagerStyle.Mode = GridPagerMode.NextPrevAndNumeric
	        grid.AllowPaging = True
	        grid.Skin = "Sunset"
	        grid.DataSourceID = "AccessDataSource1"
	        grid.MasterTableView.AutoGenerateColumns = False
	        grid.MasterTableView.EnableColumnsViewState = False
	        Dim boundColumn As GridBoundColumn
	        If Not (ddlValue Is Nothing) Then
	            Select Case ddlValue
	                Case "0"
	                    grid.DataSourceID = ""
	                    grid.DataSource = New Object() {}
	                Case "1"
	                    boundColumn = New GridBoundColumn
	                    boundColumn.HeaderText = "ContactName"
	                    boundColumn.DataField = "ContactName"
	                    boundColumn.UniqueName = "ContactName"
	                    grid.MasterTableView.Columns.Add(boundColumn)
	                Case "2"
	                    boundColumn = New GridBoundColumn
	                    boundColumn.HeaderText = "ContactName"
	                    boundColumn.DataField = "ContactName"
	                    boundColumn.UniqueName = "ContactName"
	                    grid.MasterTableView.Columns.Add(boundColumn)
	                    boundColumn = New GridBoundColumn
	                    boundColumn.HeaderText = "ContactTitle"
	                    boundColumn.DataField = "ContactTitle"
	                    boundColumn.UniqueName = "ContactTitle"
	                    grid.MasterTableView.Columns.Add(boundColumn)
	                Case "3"
	                    boundColumn = New GridBoundColumn
	                    boundColumn.HeaderText = "ContactName"
	                    boundColumn.DataField = "ContactName"
	                    boundColumn.UniqueName = "ContactName"
	                    grid.MasterTableView.Columns.Add(boundColumn)
	                    boundColumn = New GridBoundColumn
	                    boundColumn.HeaderText = "ContactTitle"
	                    boundColumn.DataField = "ContactTitle"
	                    boundColumn.UniqueName = "ContactTitle"
	                    grid.MasterTableView.Columns.Add(boundColumn)
	                    boundColumn = New GridBoundColumn
	                    boundColumn.HeaderText = "Address"
	                    boundColumn.DataField = "Address"
	                    boundColumn.UniqueName = "Address"
	                    grid.MasterTableView.Columns.Add(boundColumn)
	            End Select
	        Else
	            grid.DataSourceID = ""
	            grid.DataSource = New Object() {}
	        End If
	        PlaceHolder1.Controls.Add(grid)
	    End Sub
	    Protected Sub DropDownList1_SelectedIndexChanged( _
	                   ByVal sender As Object, _
	                   ByVal e As EventArgs) _
	             Handles DropDownList1.SelectedIndexChanged
	        Dim grid As RadGrid = CType(PlaceHolder1.FindControl("grid"), RadGrid)
	        grid.Rebind()
	    End Sub
````
>end
