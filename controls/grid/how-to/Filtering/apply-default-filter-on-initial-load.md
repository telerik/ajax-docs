---
title: Apply Default Filter on Initial Load
page_title: Apply Default Filter on Initial Load - RadGrid
description: Check our Web Forms article about Apply Default Filter on Initial Load.
slug: grid/how-to/filtering/apply-default-filter-on-initial-load
previous_url: controls/grid/functionality/filtering/how-to/apply-default-filter-on-initial-load
tags: apply,default,filter,on,initial,load
published: True
position: 4
---

# Apply Default Filter on Initial Load



You can set the initial filter for a **RadGrid** control so that when the Web page is first loaded, it presents an already-filtered set of data. To specify the initial filter,

* set the **FilterExpression** property of the **MasterTableView** (or detail **GridTableView**). The value of the **FilterExpression** property is a string that represents the text of a WHERE clause for filtering items. It operates in the same way as the **DataView.Filter** property.

* Set the **CurrentFilterFunction** and **CurrentFilterValue** properties of a column you want to use for filtering.

## Setting the initial filter declaratively

The following example shows a grid that sets an initial filter so that when the Web page first appears, the only items that are displayed are from Germany:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowFilteringByColumn="True" AutoGenerateColumns="False"
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



>note You can set the initial filter declaratively, as shown above, even when using the **NeedDataSource** event to populate the grid.
>


## Setting the initial filter in the code-behind

You can use the grid's **PreRender** event to specify an initial filter. Note that after setting the filter, you must rebind the grid:



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
````VB
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


>note With the .NET 3.5 build of RadGrid for ASP.NET AJAX and LINQ filter expressions enabled (EnableLinqExpressions = true), the filter expressions set for the grid either internally by its filtering mechanism or manually in code should conform to the LINQ expression syntax instead of the old T-SQL syntax. Only thus they will be evaluated properly by the control.
>


>note If you are binding the grid using the **NeedDataSource** event, you can set the initial filter in the **NeedDataSource** event handler and omit the call to the **Rebind** method. The code for setting the filter must still be placed inside an if statement that checks that **Page.IsPostBack** is **False** . Note that this is applicable for non auto generated columns.
>


## Setting FilterExpression for check box columns

When the grid contains a **GridCheckBoxColumn**, the syntax for the **FilterExpression** is slightly different, as shown in the following example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowFilteringByColumn="True" AutoGenerateColumns="False"
  OnNeedDataSource="RadGrid1_NeedDataSource">
  <MasterTableView FilterExpression="([chkBoxColumnDataField] = True)">
    <Columns>
      <telerik:GridCheckBoxColumn UniqueName="BoolField" HeaderText="CheckBox Column" DataField="BoolField"
        AllowSorting="true" CurrentFilterFunction="EqualTo" CurrentFilterValue="True">
      </telerik:GridCheckBoxColumn>
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
````


