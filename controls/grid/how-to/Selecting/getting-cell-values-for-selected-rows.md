---
title: Getting Cell Values for Selected Rows Client-side
page_title: Getting Cell Values for Selected Rows Client-side | RadGrid for ASP.NET AJAX Documentation
description: Getting Cell Values for Selected Rows Client-side
slug: grid/how-to/selecting/getting-cell-values-for-selected-rows
previous_url: grid/functionality/selecting/how-to/getting-cell-values-for-selected-rows
tags: client-side,selecting,values,rows
published: True
position: 0
---

# Getting Cell Values for Selected Rows Client-side



##

A fairly common task is to retrieve the values of column cells when the row that contains them is selected. You can do this using the **getCellByColumnUniqueName** method of the **GridTableView** client-side object. This method takes two parameters: a row object and the **UniqueName** of a column. It returns the corresponding cell from the grid table.

The following example illustrates this process. It gets the cell in two cases:

* At the point when the row is selected (in the RowSelected event hander)

* From the OnClick handler of a button placed outside the grid.


>note This example works for a grid that allows multi-row selection.
>

````ASP.NET
<script type="text/javascript">
  function RowSelected(sender, eventArgs) {
    var grid = sender;
    var MasterTable = grid.get_masterTableView(); var row = MasterTable.get_dataItems()[eventArgs.get_itemIndexHierarchical()];
    var cell = MasterTable.getCellByColumnUniqueName(row, "CategoryID");
    //here cell.innerHTML holds the value of the cell  
  }
  function GetSelectedNames() {
    var grid = $find("<%=RadGrid1.ClientID %>");
    var MasterTable = grid.get_masterTableView();
    var selectedRows = MasterTable.get_selectedItems();
    for (var i = 0; i < selectedRows.length; i++) {
      var row = selectedRows[i];
      var cell = MasterTable.getCellByColumnUniqueName(row, "CategoryID")
      //here cell.innerHTML holds the value of the cell    
    }
  }
</script>
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowMultiRowSelection="True" DataSourceID="dsProducts">
  <ClientSettings>
    <Selecting AllowRowSelect="True" />
    <ClientEvents OnRowSelected="RowSelected" />
  </ClientSettings>
</telerik:RadGrid><input onclick="GetSelectedNames();" type="button" value="Get selected rows contact names">
````



