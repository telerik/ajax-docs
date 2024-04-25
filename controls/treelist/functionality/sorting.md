---
title: Sorting
page_title: Sorting - RadTreeList
description: Check our Web Forms article about Sorting.
slug: treelist/functionality/sorting
tags: sorting
published: True
position: 1
---

# Sorting



As expected from a sophisticated databound control, **RadTreeList** offers sorting capabilities that allows the users to conveniently order the items in the desired direction. To enable this functionality you just have to set **AllowSorting** property to **true** and the control will handle the sorting operations automatically.

There are three sort modes:

* **Ascending** - orders the items in ascending order.

* **Descending** - orders the items in descending order.

* **None** - the items are ordered in the way they came from the data source ("Natural" sort).

**RadTreeList** also supports sorting by multiple data fields - this is the so-called **Multi-column sorting**. To enable this mode, set the **AllowMultiColumnSorting** to **true**.

## Sorting in RadTreeList

Due to the self-referencing nature of the control, the sorting takes effect "per-level". Basically,this means that each level of the hierarchical structure is sorted independently. The screenshot below illustrates this behavior:![RadTreeList Sorting](images/treelist_sorting.jpg)

## Sorting API

**RadTreeList** exposes the following properties and methods:




| Property | Description |
| ------ | ------ |
| **AllowMultiColumnSorting** |Determines whether the multi-column sorting functionality is enabled.|
| **AllowNaturalSort** |Enables or disables the "natural" sort mode where the items are ordered in the way they came from the data source.|
| **AllowSorting** |Enables the sorting functionality in RadTreeList.|
| **SortExpressions** |SortExpressions collection. Contains the expressions that are applied to the control.|


Example 1: Declarative Approach of setting the SortExpressions

````ASPX
<telerik:RadTreeList ID="RadTreeList1" runat="server" DataSourceID="SqlDataSource1" AllowSorting="True" ...>
    <SortExpressions>
        <telerik:TreeListSortExpression FieldName="EmployeeName" SortOrder="Ascending" />
    </SortExpressions>
</telerik:RadTreeList>
````

Example 2: Programmatic Approach of setting the SortExpressions

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        TreeListSortExpression sortExpr = new TreeListSortExpression();
        sortExpr.FieldName = "EmployeeName";
        sortExpr.SortOrder = TreeListSortOrder.Ascending;
        RadTreeList1.SortExpressions.AddSortExpression(sortExpr);
        
        RadTreeList1.Rebind();
    }
}
````
````VB.NET
Protected Sub Page_Load(sender As Object, e As EventArgs)
    If Not IsPostBack Then
        Dim sortExpr As New TreeListSortExpression()
        sortExpr.FieldName = "EmployeeName"
        sortExpr.SortOrder = TreeListSortOrder.Ascending
        RadTreeList1.SortExpressions.AddSortExpression(sortExpr)
        
        RadTreeList1.Rebind()
    End If
End Sub
````
   
 
