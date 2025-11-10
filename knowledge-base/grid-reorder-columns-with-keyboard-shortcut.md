---
title: Reordering Grid Columns Using Keyboard Shortcut in UI for ASP.NET AJAX
description: Learn how to implement keyboard shortcuts for reordering columns in Telerik UI for ASP.NET AJAX Grid.
type: how-to
page_title: How to Reorder Grid Columns Using Keyboard Navigation in UI for ASP.NET AJAX
meta_title: How to Reorder Grid Columns Using Keyboard Navigation in UI for ASP.NET AJAX
slug: grid-reorder-columns-with-keyboard-shortcut
tags: grid, ui for asp.net ajax, reordercolumns, swapcolumns, keyboard navigation, accessibility, wcag
res_type: kb
ticketid: 1703191
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>
UI for ASP.NET AJAX Grid
</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to implement keyboard shortcuts for reordering columns in the [Grid](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/overview) to enable accessibility for users who cannot use a mouse.

This knowledge base article also answers the following questions:

- How to reorder columns using keyboard shortcuts in the Grid?
- Can I implement column reordering without using a mouse in the Grid?
- How to provide WCAG-compliant column reordering for the Grid?

## Solution

The Grid does not support built-in keyboard shortcuts for column reordering. Column reordering is available through mouse drag-and-drop by default or by utilizing the [reorderColumns](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/client-side-programming/gridtableview-object/methods/reordercolumns#reordercolumns) and [swapColumns](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/client-side-programming/gridtableview-object/methods/swapcolumns#swapcolumns) API methods. However, you can achieve keyboard-based column reordering using custom JavaScript.

Steps to Implement Keyboard Column Reordering

First, you will need to enable client-side column reordering by setting the following Grid properties:
   - `AllowColumnsReorder`="true"
   - `ReorderColumnsOnClient`="true"
   - `ColumnsReorderMethod`="Reorder"

   Example Grid markup:

   ````ASP.NET
   <telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
       <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
           <Columns>
               <telerik:GridBoundColumn DataField="OrderID" HeaderText="OrderID" UniqueName="OrderID"></telerik:GridBoundColumn>
               <telerik:GridDateTimeColumn DataField="OrderDate" HeaderText="OrderDate" UniqueName="OrderDate"></telerik:GridDateTimeColumn>
               <telerik:GridNumericColumn DataField="Freight" HeaderText="Freight" UniqueName="Freight"></telerik:GridNumericColumn>
               <telerik:GridBoundColumn DataField="ShipName" HeaderText="ShipName" UniqueName="ShipName"></telerik:GridBoundColumn>
               <telerik:GridBoundColumn DataField="ShipCountry" HeaderText="ShipCountry" UniqueName="ShipCountry"></telerik:GridBoundColumn>
           </Columns>
       </MasterTableView>
       <ClientSettings AllowColumnsReorder="true" ReorderColumnsOnClient="true" ColumnsReorderMethod="Reorder">
           <ClientEvents OnGridCreated="OnGridCreated" />
       </ClientSettings>
   </telerik:RadGrid>
   ````

   Include the data source in the code-behind:

   ````C#
   protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
   {
       (sender as RadGrid).DataSource = OrdersTable();
   }

   private DataTable OrdersTable()
   {
       DataTable dt = new DataTable();
       dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
       dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
       dt.Columns.Add(new DataColumn("Freight", typeof(double)));
       dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
       dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

       for (int i = 0; i < 5; i++)
       {
           DataRow row = dt.NewRow();
           row["OrderID"] = i + 1;
           row["OrderDate"] = DateTime.Now.AddDays(i + 1);
           row["Freight"] = (i + 1) * 0.01;
           row["ShipName"] = $"Name {i + 1}";
           row["ShipCountry"] = $"Country {i + 1}";
           dt.Rows.Add(row);
       }

       return dt;
   }
   ````

After that, implement custom JavaScript for keyboard-based column reordering. Use the following code snippet:

   ````JavaScript
   let currentSelectedColumn = 0;
   let totalColumns = 0;

   function OnGridCreated(sender, args) {
       let { grid, gridElement, masterTable, columns } = getGridInfo();
       totalColumns = columns.length;

       gridElement.tabIndex = 0;
       gridElement.addEventListener('keydown', handleGridKeyDown);
       addColumnHeadersAccessibility();
   }

   function handleGridKeyDown(event) {
       switch (event.code) {
           case "ArrowLeft":
               event.preventDefault();
               moveSelection('left');
               break;
           case "ArrowRight":
               event.preventDefault();
               moveSelection('right');
               break;
           case "Period":
               if (event.ctrlKey) {
                   event.preventDefault();
                   moveColumn('right');
               }
               break;
           case "Comma":
               if (event.ctrlKey) {
                   event.preventDefault();
                   moveColumn('left');
               }
               break;
       }
   }

   function moveSelection(direction) {
       if (direction === 'left' && currentSelectedColumn > 0) {
           currentSelectedColumn--;
           updateColumnSelection();
           focusColumnHeader();
       } else if (direction === 'right' && currentSelectedColumn < totalColumns - 1) {
           currentSelectedColumn++;
           updateColumnSelection();
           focusColumnHeader();
       }
   }

   function moveColumn(direction) {
       let { masterTable, columns } = getGridInfo();

       if (direction === 'left' && currentSelectedColumn > 0) {
           let currentColumn = columns[currentSelectedColumn].get_uniqueName();
           let targetColumn = columns[currentSelectedColumn - 1].get_uniqueName();

           masterTable.reorderColumns(currentColumn, targetColumn);
           currentSelectedColumn--;
           updateColumnSelection();
       } else if (direction === 'right' && currentSelectedColumn < totalColumns - 1) {
           let currentColumn = columns[currentSelectedColumn].get_uniqueName();
           let targetColumn = columns[currentSelectedColumn + 1].get_uniqueName();

           masterTable.reorderColumns(targetColumn, currentColumn);
           currentSelectedColumn++;
           updateColumnSelection();
       }
   }

   function addColumnHeadersAccessibility() {
       let headers = getHeaderElements();

       headers.forEach(function (header, index) {
           header.setAttribute('tabindex', '0');
           header.setAttribute('data-column-index', index);

           header.addEventListener('focus', function () {
               currentSelectedColumn = index;
               updateColumnSelection();
           });
       });
   }

   function updateColumnSelection() {
       let headers = getHeaderElements();

       headers.forEach(function (header, index) {
           if (index === currentSelectedColumn) {
               header.style.backgroundColor = 'red';
               header.style.color = 'red';
           } else {
               header.style.backgroundColor = '';
               header.style.color = '';
           }
       });
   }

   function getGridInfo() {
       let grid = $find("<%= RadGrid1.ClientID %>");
       let gridElement = grid.get_element();
       let masterTable = grid.get_masterTableView();
       let columns = masterTable.get_columns();

       return { grid, gridElement, masterTable, columns };
   }

   function getHeaderElements() {
       let { gridElement } = getGridInfo();
       let headerRow = gridElement.querySelector('tr');
       let headers = headerRow.querySelectorAll('th');

       return headers;
   }

   function focusColumnHeader() {
       let headers = getHeaderElements();

       if (headers[currentSelectedColumn]) {
           headers[currentSelectedColumn].focus();
       }
   }
   ````

Test the implementation by navigating and reordering columns using the keyboard. This solution ensures accessibility for users who cannot use a mouse.


