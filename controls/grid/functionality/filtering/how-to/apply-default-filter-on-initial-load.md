---
title: Apply Default Filter on Initial Load
page_title: Apply Default Filter on Initial Load | UI for ASP.NET AJAX Documentation
description: Apply Default Filter on Initial Load
slug: grid/functionality/filtering/how-to/apply-default-filter-on-initial-load
tags: apply,default,filter,on,initial,load
published: True
position: 4
---

# Apply Default Filter on Initial Load



You can set the initial filter for a __RadGrid__ control so that when the Web page is first loaded, it presents an already-filtered set of data. To specify the initial filter,

* set the __FilterExpression__ property of the __MasterTableView__ (or detail __GridTableView__). The value of the __FilterExpression__ property is a string that represents the text of a WHERE clause for filtering items. It operates in the same way as the __DataView.Filter__ property.

* Set the __CurrentFilterFunction__ and __CurrentFilterValue__ properties of a column you want to use for filtering.

## Setting the initial filter declaratively

The following example shows a grid that sets an initial filter so that when the Web page first appears, the only items that are displayed are from Germany:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowFilteringByColumn="True" AutoGenerateColumns="False"
	    DataSourceID="SqlDataSource1">
	       <MasterTableView FilterExpression="([Country] LIKE '%Germany%')">
	          <Columns>
	            <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="CustomerID"
	                HeaderText="ID" UniqueName="CustomerID">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="CompanyName"
	                HeaderText="Company" UniqueName="CompanyName">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn CurrentFilterFunction="NoFilter" DataField="ContactName"
	                HeaderText="Contact" UniqueName="ContactName">
	            </telerik:GridBoundColumn>
	            <telerik:GridBoundColumn CurrentFilterFunction="Contains" CurrentFilterValue="Germany"
	                DataField="Country" HeaderText="Country" UniqueName="Country">
	            </telerik:GridBoundColumn>
	         </Columns>
	       </MasterTableView>
	    </telerik:RadGrid>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT * FROM [Customers]" />
````



>note You can set the initial filter declaratively, as shown above, even when using the __NeedDataSource__ event to populate the grid.
>


## Setting the initial filter in the code-behind

You can use the grid's __PreRender__ event to specify an initial filter. Note that after setting the filter, you must rebind the grid:

>tabbedCode

````C#
	    protected void RadGrid1_PreRender(object sender, System.EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            RadGrid1.MasterTableView.FilterExpression = "([Country] LIKE \'%Germany%\') ";
	            GridColumn column = RadGrid1.MasterTableView.GetColumnSafe("Country");
	            column.CurrentFilterFunction = GridKnownFunction.Contains;
	            column.CurrentFilterValue = "Germany";
	            RadGrid1.MasterTableView.Rebind();
	        }
	    }
````
````VB.NET
	
	
	    Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.PreRender
	        If (Not Page.IsPostBack) Then
	            RadGrid1.MasterTableView.FilterExpression = "([Country] LIKE '%Germany%') "
	            Dim column As GridColumn = RadGrid1.MasterTableView.GetColumnSafe("Country")
	            column.CurrentFilterFunction = GridKnownFunction.Contains
	            column.CurrentFilterValue = "Germany"
	            RadGrid1.MasterTableView.Rebind()
	        End If
	    End Sub
	
````
>end

>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>


>note If you are binding the grid using the __NeedDataSource__ event, you can set the initial filter in the __NeedDataSource__ event handler and omit the call to the __Rebind__ method. The code for setting the filter must still be placed inside an if statement that checks that __Page.IsPostBack__ is __False__ . Note that this is applicable for non auto generated columns.
>


## Setting FilterExpression for check box columns

When the grid contains a __GridCheckBoxColumn__, the syntax for the __FilterExpression__ is slightly different, as shown in the following example:

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" AllowFilteringByColumn="True" AutoGenerateColumns="False"
	    OnNeedDataSource="RadGrid1_NeedDataSource">
	    <MasterTableView FilterExpression="([chkBoxColumnDataField] = True)">
	      <Columns>
	        <telerik:GridCheckBoxColumn UniqueName="BoolField" HeaderText="CheckBox Column" DataField="BoolField"
	          AllowSorting="true" CurrentFilterFunction="EqualTo" CurrentFilterValue="True">
	        </telerik:GridCheckBoxColumn>
	      </Columns>
	    </MasterTableView></telerik:RadGrid>
````


