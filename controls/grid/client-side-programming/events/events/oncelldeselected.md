---
title: OnCellDeselected
page_title: OnCellDeselected | UI for ASP.NET AJAX Documentation
description: OnCellDeselected
slug: grid/client-side-programming/events/events/oncelldeselected
tags: oncelldeselected
published: True
position: 3
---

# OnCellDeselected



## 

Telerik.Web.UI.GridColumnEventArgs OnCellDeselected Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a cell is deselected.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __cellIndexHierarchical__ - returns the hierarchical index of the cell __column__ - returns a reference to the corresponding[GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})object __gridDataItem__ - returns a reference to the corresponding GridDataItem object __row__ - returns a reference to the correspong table row element __tableView__ - returns a reference to the corresponding GridTableView object __cancel__ - gets or sets the canceled status of the event|
| __Can be canceled__ |No|

Example:

````JavaScript
	        function cellDeselected(sender, args) {
	            var selectedRow = args.get_row();
	            var selectedColumn = args.get_column();
	            var dataItem = args.get_gridDataItem();
	            var tableView = args.get_tableView();
	            var cellIndex = args.get_cellIndexHierarchical();            
	            var output = String.format("The selected cell is located in column with name: " + selectedColumn.get_uniqueName() + " and in row with index: " +
	             dataItem.get_itemIndexHierarchical() + ". This cell has index " + cellIndex + " and it is part from " + tableView.get_name() + ".");
	            alert(output);
	        }
````



````ASPNET
	        <ClientSettings>
	                <Selecting CellSelectionMode="MultiCell" />
	                <Scrolling AllowScroll="true" UseStaticHeaders="true" />
	                <ClientEvents OnCellDeselecting="cellDeselected" />
	        </ClientSettings>
````



A list of the possible options for the CellSelectionMode property could be found [here.]({%slug grid/functionality/selecting/selecting-cells-and-columns%})
