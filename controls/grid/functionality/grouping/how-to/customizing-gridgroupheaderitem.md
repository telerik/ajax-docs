---
title: Customizing GridGroupHeaderItem
page_title: Customizing GridGroupHeaderItem | RadGrid for ASP.NET AJAX Documentation
description: Customizing GridGroupHeaderItem
slug: grid/functionality/grouping/how-to/customizing-gridgroupheaderitem
tags: customizing,gridgroupheaderitem
published: True
position: 0
---

# Customizing GridGroupHeaderItem



## 

You can have complete control over the display of the fields in a **GridGroupHeaderItem** and even [perform calculations]({%slug grid/functionality/grouping/how-to/performing-calculations-in-group-header%}) and display the results in the group header.

To change the string that appears in the group header, set the **DataCell.Text** property of the **GridGroupHeaderItem** instance.

The **DataItem** property of the **GridGroupHeaderItem** lets you access the column values you might want to display in the header. The **DataItem** of **GridGroupHeaderItem** is always of type **DataRowView** and contains all the columns that represent fields from the **GridGroupByExpression** for the group. These include both the fields that are included in the **SelectFields** collection and the fields that are included in the **GroupByFields** collection. For a description of the **GridGroupByExpression** object, see [Declarative definition]({%slug grid/functionality/grouping/group-by-expressions/declarative-definition%}).

You can access the values for the fields in the **DataItem** by indexing on the name of the field. If you have assigned an alias to the field (set the **FieldAlias** property of the **GridgroupByField**), then you must index using the alias rather than the field name.

The following example illustrates how you can customize the formatting of the group header using the grid's **ItemDataBound** event:



````ASPNET
<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" OnItemDataBound="RadGrid1_ItemDataBound">
  <MasterTableView DataSourceID="SqlDataSource1">
    <GroupByExpressions>
      <telerik:GridGroupByExpression>
        <SelectFields>
          <telerik:GridGroupByField FieldName="UnitPrice" HeaderText="Price" />
          <telerik:GridGroupByField FieldName="UnitsInStock" FieldAlias="InStock" Aggregate="Sum" />
        </SelectFields>
        <GroupByFields>
          <telerik:GridGroupByField FieldName="UnitPrice" SortOrder="Descending" />
        </GroupByFields>
      </telerik:GridGroupByExpression>
    </GroupByExpressions>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
  SelectCommand="SELECT [ProductName], [QuantityPerUnit], [UnitPrice], [UnitsInStock] FROM [Products]">
</asp:SqlDataSource>
````
````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem)
    {
        GridGroupHeaderItem item = (GridGroupHeaderItem)e.Item;
        DataRowView groupDataRow = (DataRowView)e.Item.DataItem;
        item.DataCell.Text = "$" + groupDataRow["UnitPrice"].ToString() + " (" + groupDataRow["InStock"].ToString() + ")";
    }
}
````
````VB.NET
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridGroupHeaderItem Then
        Dim item As GridGroupHeaderItem = CType(e.Item, GridGroupHeaderItem)
        Dim groupDataRow As DataRowView = CType(e.Item.DataItem, DataRowView)
        item.DataCell.Text = "$" + groupDataRow("UnitPrice").ToString() + " (" + groupDataRow("InStock").ToString() + ")"
    End If
End Sub
````

