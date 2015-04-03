---
title: Server-side Selecting with a Select Button
page_title: Server-side Selecting with a Select Button | UI for ASP.NET AJAX Documentation
description: Server-side Selecting with a Select Button
slug: grid/functionality/selecting/selecting-rows/server-side-selecting-with-a-select-button
tags: server-side,selecting,with,a,select,button
published: True
position: 2
---

# Server-side Selecting with a Select Button



## 

You can add __GridButtonColumn__ columns to a grid to handle the selection and de-selection of grid rows. The __RadGrid__[Command API]({%slug grid/control-lifecycle/command-reference-%}) can automatically handle the select and de-select commands: you need only add the __GridButtonColumn__ objects to the __Commands__ collection and set their __CommandName__ property:

![](images/SelectButtonColumns.png)

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" PageSize="5" Skin="Silk"
	    DataSourceID="SqlDataSource1" AllowMultiRowSelection="True">
	    <MasterTableView DataSourceID="AccessDataSource1">
	      <Columns>
	        <telerik:GridButtonColumn CommandName="Select" Text="Select" UniqueName="Select">
	        </telerik:GridButtonColumn>
	        <telerik:GridButtonColumn CommandName="Deselect" Text="Deselect" UniqueName="Deselect">
	        </telerik:GridButtonColumn>
	      </Columns>
	    </MasterTableView></telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT [CustomerID], [CompanyName], [ContactName], [Country] FROM [Customers]">
	    </asp:SqlDataSource>
````



You can access the selected rows using the __SelectedItems__ collection of the __RadGrid__ object. In addition, you can handle the __SelectedIndexChanged__ server event of the grid to detect when a row's selection changes perform additional operations if needed.

For a live example showing server-side selection, see [Server-side row selection](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/SelectRowWithCheckBox/DefaultCS.aspx).
