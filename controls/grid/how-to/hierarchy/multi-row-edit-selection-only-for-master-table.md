---
title: Multi-row Edit/Selection Only for Master Table
page_title: Multi-row edit/selection only for master table in hierarchical grid - RadGrid
description: Check our Web Forms article about Multi-row edit/selection only for master table in hierarchical grid.
slug: grid/how-to/hierarchy/multi-row-edit-selection-only-for-master-table
previous_url: controls/grid/hierarchical-grid-types-and-load-modes/how-to/multi-row-edit-selection-only-for-master-table
tags: multi-row,edit/selection,only,for,master,table,in,hierarchical,grid
published: True
position: 5
---

# Multi-row edit/selection only for master table in hierarchical grid


If you enable multi-row selection and editing by setting the **RadGrid AllowMultiRowSelection** and **AllowMultiRowEdit** properties to **True**, in a hierarchical grid, all the tables in the hierarchy allow multi-row selection and editing. If you want to disable these features for the nested tables, you need to do the following:

To disable multi-row editing on detail tables:

1. Handle the **ItemCommand** event of the grid.

1. When **e.CommandName** is **RadGrid.EditCommandName**, identify whether you are on the master table view.

1. If you are not on the master table view, traverse the items in the detail table and set their **Edit** property to **False**.

To disable multi-row selection on detail tables:

1. Handle the **RowSelecting** client event of the grid.

1. Verify that the clicked table is a child table by referencing a column from the table.

1. If the **SelectedRows** collection length is equal to 1, iterate through the rows in the table and deselect them if they were previously selected.

The following code illustrates this technique on a two-level hierarchy.

>note This technique can be extended for higher level hierarchies as well.
>


````C#
<script type="text/javascript">
function RowSelecting(sender, eventArgs) {
    var tableView = eventArgs.get_tableView();
    if (eventArgs.get_tableView().get_name() != "Customers") {
      if (tableView.get_selectedItems().length == 1) {
        for (var i = 0; i < tableView.get_dataItems().length; i++) {
          if (tableView.get_dataItems()[i].get_selected()) {
            tableView.selectItem(tableView.get_dataItems()[i].get_element(), false);
          }
        }
      }
    }
  }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowMultiRowEdit="true" AllowSorting="true"
  DataSourceID="SqlDataSource1" AllowPaging="true" PageSize="3" AllowMultiRowSelection="true"
  OnItemCommand="RadGrid1_ItemCommand">
  <MasterTableView DataKeyNames="CustomerID" Name="Customers">
    <Columns>
      <telerik:GridEditCommandColumn />
    </Columns>
    <DetailTables>
      <telerik:GridTableView DataKeyNames="OrderID,CustomerID" DataSourceID="SqlDataSource2"
        Name="Orders">
        <ParentTableRelation>
          <telerik:GridRelationFields DetailKeyField="CustomerID" MasterKeyField="CustomerID" />
        </ParentTableRelation>
        <Columns>
          <telerik:GridEditCommandColumn />
        </Columns>
      </telerik:GridTableView>
    </DetailTables>
  </MasterTableView>
  <ClientSettings>
    <Selecting AllowRowSelect="true" EnableDragToSelectRows="true" />
    <ClientEvents OnRowSelecting="RowSelecting" />
  </ClientSettings>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
  ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Customers"
  runat="server"></asp:SqlDataSource>
<asp:SqlDataSource ID="SqlDataSource2" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
  ProviderName="System.Data.SqlClient" SelectCommand="SELECT * FROM Orders Where CustomerID = @CustomerID"
  runat="server">
  <SelectParameters>
    <asp:Parameter Name="CustomerID" SessionField="CustomerID" Type="string" />
  </SelectParameters>
</asp:SqlDataSource>
````





````C#
protected void RadGrid1_ItemCommand(object source, Telerik.Web.UI.GridCommandEventArgs e)
{
    if (e.CommandName == RadGrid.EditCommandName && e.Item.OwnerTableView.Name != "Customers")
    {
        foreach (GridItem item in e.Item.OwnerTableView.Items)
        {
            item.Edit = false;
        }
    }
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal source As Object, ByVal e As Telerik.Web.UI.GridCommandEventArgs) Handles RadGrid1.ItemCommand
    If e.CommandName = RadGrid.EditCommandName AndAlso Not e.Item.OwnerTableView.Name = "Customers" Then
        Dim item As GridItem
        For Each item In e.Item.OwnerTableView.Items
            item.Edit = False
        Next
    End If
End Sub
````

