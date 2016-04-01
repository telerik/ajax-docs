---
title: Performing Calculations in Group Header
page_title: Performing Calculations in Group Header | RadGrid for ASP.NET AJAX Documentation
description: Performing Calculations in Group Header
slug: grid/how-to/grouping/performing-calculations-in-group-header
previous_url: grid/functionality/grouping/how-to/performing-calculations-in-group-header
tags: performing,calculations,in,group,header
published: True
position: 2
---

# Performing Calculations in Group Header



##

Although you can add aggregations to group expressions so that the group headers in **RadGrid** display aggregated values, there may be times when you want to display other calculated values that are not included in the standard aggregations. You can use the **ItemDataBound** event to calculate your own values and add them to the group headers.

The following example illustrates how this is done. It uses the "Sum" and "Count" aggregated values to calculate an average and adds this calculated value to the **DataCell.Text** property of the grid header item:



````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" Width="100%"
  PageSize="10" AllowSorting="True" AllowPaging="True" ShowGroupPanel="True">
  <MasterTableView>
    <GroupByExpressions>
      <telerik:GridGroupByExpression>
        <SelectFields>
          <telerik:GridGroupByField FieldAlias="Country" FieldName="Country" />
          <telerik:GridGroupByField FieldAlias="Total" Aggregate="Sum" FieldName="TotalAmount" />
          <telerik:GridGroupByField FieldAlias="Count" Aggregate="Count" FieldName="CustomerID" />
        </SelectFields>
        <GroupByFields>
          <telerik:GridGroupByField FieldAlias="Country" FieldName="Country" />
        </GroupByFields>
      </telerik:GridGroupByExpression>
    </GroupByExpressions>
  </MasterTableView>
  <ClientSettings>
    <Resizing AllowColumnResize="True"></Resizing>
  </ClientSettings>
  <PagerStyle Mode="NumericPages" />
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
          SelectCommand="SELECT Customers.CustomerID, Country, City, CompanyName, ContactName, Count(Orders.OrderID) as TotalOrders,
                         Sum(OD.Quantity * OD.UnitPrice - Discount) as TotalAmount
                         FROM Customers, Orders, [Order Details] OD
                         WHERE (Orders.CustomerID = Customers.CustomerID) and
                         (OD.OrderID = Orders.OrderID)
                         Group By Customers.CustomerID, Country, City, CompanyName, ContactName">
</asp:SqlDataSource>
````
````C#
protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem)
    {
        GridGroupHeaderItem item = (GridGroupHeaderItem)e.Item;
        DataRowView groupDataRow = (DataRowView)e.Item.DataItem;
        item.DataCell.Text += "; Avg: ";
        item.DataCell.Text += ((System.Decimal)groupDataRow["Total"] / (int.Parse(groupDataRow["Count"].ToString()))).ToString();
    }
}
````
````VB
Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)

    If TypeOf e.Item Is GridGroupHeaderItem Then
        Dim item As GridGroupHeaderItem = CType(e.Item, GridGroupHeaderItem)
        Dim groupDataRow As DataRowView = CType(e.Item.DataItem, DataRowView)
        item.DataCell.Text = (item.DataCell.Text + "; Avg: ")
        item.DataCell.Text = (item.DataCell.Text + (CType(groupDataRow("total"), Decimal) / Integer.Parse(groupDataRow("count").ToString)).ToString)
    End If
End Sub
````

