---
title: Aligning Items in GroupHeader
page_title: Aligning Items in GroupHeader | RadGrid for ASP.NET AJAX Documentation
description: Aligning Items in GroupHeader
slug: grid/functionality/grouping/how-to/aligning-items-in-groupheader
tags: aligning,items,in,groupheader
published: True
position: 1
---

# Aligning Items in GroupHeader



## 

Sometimes it is necessary to align an item in the GroupHeader of the grid, so that it is positioned beneath a given column cell. For example, let us assume that we have a grid with four columns - "ProductID", "ProductName", "UnitPrice" and "UnitsInStock". Then, if the user groups on the "UnitPrice" column, it will be positioned in the left-most part of the group header. In some situations, however, it is visually more intuitive to position this item beneath the "UnitPrice" column header cell. The code below demonstrates one similar setup, along with the code required to handle this logic.

````ASP.NET
<telerik:RadGrid ShowGroupPanel="true" AutoGenerateColumns="false" ID="RadGrid1"
  DataSourceID="SqlDataSource1" AllowFilteringByColumn="True" AllowSorting="True"
  ShowFooter="True" runat="server" GridLines="None" AllowPaging="true" OnItemCreated="RadGrid1_ItemCreated">
  <PagerStyle Mode="NextPrevAndNumeric" />
  <MasterTableView AllowMultiColumnSorting="true">
    <Columns>
      <telerik:GridBoundColumn DataField="ProductID" HeaderText="Product
      ID">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product
      name" SortExpression="ProductName" UniqueName="ProductName">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="UnitPrice" UniqueName="UnitPrice" HeaderText="Unit price">
      </telerik:GridBoundColumn>
      <telerik:GridBoundColumn DataField="UnitsInStock" HeaderText="Units in
      stock">
      </telerik:GridBoundColumn>
    </Columns>
    <GroupByExpressions>
      <telerik:GridGroupByExpression>
        <GroupByFields>
          <telerik:GridGroupByField FieldName="UnitPrice" />
        </GroupByFields>
        <SelectFields>
          <telerik:GridGroupByField FieldName="UnitPrice" HeaderText="Unit price" />
        </SelectFields>
      </telerik:GridGroupByExpression>
    </GroupByExpressions>
  </MasterTableView>
  <ClientSettings AllowDragToGroup="true" />
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
   SelectCommand="SELECT * FROM Products Where UnitPrice > 9.50">
</asp:SqlDataSource>  
````
````C#
protected void RadGrid1_ItemCreated(object sender, GridItemEventArgs e)
{
    if (e.Item is GridGroupHeaderItem)
    {
        (e.Item as GridGroupHeaderItem).DataCell.Visible
        = false;
        e.Item.PreRender += new EventHandler(Item_PreRender);
    }
}
void Item_PreRender(object sender, EventArgs e)
{
    string text = ((GridGroupHeaderItem)sender).DataCell.Text;
    for (int i = 3;
    i < ((GridGroupHeaderItem)sender).OwnerTableView.RenderColumns.Length; i++)
    {
        TableCell cell = new
        TableCell();
        if (((GridGroupHeaderItem)sender).OwnerTableView.RenderColumns[i].UniqueName == "UnitPrice")
        {
            cell.Text = text;
        }
        ((GridGroupHeaderItem)sender).Cells.Add(cell);
    }
}
````
````VB
Protected Sub RadGrid1_ItemCreated(ByVal sender As Object, ByVal e As GridItemEventArgs)
    If TypeOf e.Item Is GridGroupHeaderItem Then
      (TryCast(e.Item, GridGroupHeaderItem)).DataCell.Visible = False
        AddHandler e.Item.PreRender, AddressOf Item_PreRender
    End If
End Sub
Sub Item_PreRender(ByVal sender As Object, ByVal e As EventArgs)
    Dim text As String = (DirectCast(sender, GridGroupHeaderItem)).DataCell.Text
    Dim i As Integer = 3
    While i < (DirectCast(sender, GridGroupHeaderItem)).OwnerTableView.RenderColumns.Length
        Dim cell As New TableCell()
        If (DirectCast(sender, GridGroupHeaderItem)).OwnerTableView.RenderColumns(i).UniqueName = "UnitPrice" Then
            cell.Text = text
        End If
      (DirectCast(sender, GridGroupHeaderItem)).Cells.Add(cell)System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
    End While
End Sub
````


