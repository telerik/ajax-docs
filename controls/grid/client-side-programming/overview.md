---
title: Client-Side Programming Overview
page_title: Overview | RadGrid for ASP.NET AJAX Documentation
description: Overview
slug: grid/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



## Client-side Object Model

Telerik **RadGrid** provides the following objects on the client-side:


|  **Classes/properties**  |  **Description**  |
| ------ | ------ |
| ** *RadGrid* ** |This is the main class. You can use it to access the whole grid object.|
| **[.get_masterTableView()]({%slug grid/client-side-programming/radgrid-object/properties/get_mastertableview()%})** |This is an object of type **GridTableView** . Use this object to access the root table in hierarchical structures.|
| **[.get_masterTableViewHeader()]({%slug grid/client-side-programming/radgrid-object/properties/get_mastertableviewheader()%})** |Returns the master table header instance for the respective grid client object.|
| **[.get_masterTableViewFooter()]({%slug grid/client-side-programming/radgrid-object/properties/get_mastertableviewfooter()%})** |Returns the master table footer instance for the respective grid client object.|
| **[.get_detailTables()]({%slug grid/client-side-programming/radgrid-object/properties/get_detailtables()%})** |This collection represents the detail tables when you have a hierarchical structured grid. Every table is of type **GridTableView** .|
| **[.get_editItems()]({%slug grid/client-side-programming/radgrid-object/properties/get_edititems()%})** |This property retrieves all **GridDataItem** objects that are in edit mode accross all grid tables.|
| **[.get_allowMultiRowSelection()]({%slug grid/client-side-programming/radgrid-object/properties/get_allowmultirowselection()%})** |This property is of type Boolean. When set to **true** , you can select multiple rows on the client.|
| **[.set_activeRow()]({%slug grid/client-side-programming/radgrid-object/properties/set_activerow()%})** |Property which marks the row passed as an argument as active and highlighted.|
| **[.get_element()]({%slug grid/client-side-programming/radgrid-object/properties/get_element()%})** |Property that returns the DOM element of the grid div.|
| **[.get_id()]({%slug grid/client-side-programming/radgrid-object/properties/get_id()%})** |Property that returns the id of the grid client object.|
| **[.get_selectedItems()]({%slug grid/client-side-programming/radgrid-object/properties/get_selecteditems()%})** |Property that returns an array of the grid rows selected on the client (and all sub-levels in the hierarchical grid structure).|
| **[.get_headerMenu()]({%slug grid/client-side-programming/radgrid-object/properties/get_headermenu()%})** |Property that returns the client object of the[grid header context menu](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/headercontextmenu/defaultcs.aspx). Useful when you would like to customize the items in it on the client (see the JavaScript logic at the top of[this help topic](http://www.telerik.com/help/aspnet-ajax/grdreducingfiltermenuoptions.html)for reference).|
| **[.get_allowActiveRow()]({%slug grid/client-side-programming/radgrid-object/properties/get_allowactiverowcycle()%})** |Property that returns the value for the respective server property of the control (ClientSettings -> KeyboardNavigationSettings -> AllowActiveRowCycle).|
| **[.get_visible()]({%slug grid/client-side-programming/radgrid-object/properties/get_visible()%})** |Property that determines whether the grid is visible on the client or not (style="display:none").|
| **[.set_visible()]({%slug grid/client-side-programming/radgrid-object/properties/set_visible()%})** |Property that sets the grid as visible or not on the client (changing the *style-> display* value of the grid div).|
| ** *GridTableView* ** |Class that wraps the client-side features of the **GridTableView** object. Each GridTableView client instance has **GridColumn** and **GridDataItem** objects for manipulating the grid's items and columns client-side.|
| **[.get_allowMultiColumnSorting()]({%slug grid/client-side-programming/gridtableview-object/properties/get_allowmulticolumnsorting()%})** |Returns a **Boolean** value indicating whether multi-column sorting is enabled for the grid instance.|
| **[.set_allowMultiColumnSorting()]({%slug grid/client-side-programming/gridtableview-object/properties/set_allowmulticolumnsorting()%})** |Sets whether multi-column sorting is enabled for the grid instance.|
| **[.get_owner()]({%slug grid/client-side-programming/gridtableview-object/properties/get_owner()%})** |This property is of type **RadGrid** and presents the parent of the current object.|
| **[.get_element()]({%slug grid/client-side-programming/gridtableview-object/properties/get_element()%})** |Returns the HTML table that represents the respective table for the **GridTableView** object rendered on the client.|
| **[.get_dataItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_dataitems()%})** |A collection that holds all data items (objects of type **GridDataItem** ) in the respective table.|
| **[.get_selectedItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_selecteditems()%})** |A collection which holds all selected items (objects of type **GridDataItem** ) in the respective table. This collection will include the selected items from the table's child tables (meaningful in a hierarchical grid only).|
| **[.get_editItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_edititems()%})** |This property retrieves the **GridDataItem** objects of the current table view that are in edit mode.|
| **[.get_insertItem()]({%slug grid/client-side-programming/gridtableview-object/properties/get_insertitem()%})** |This property retrieves the HTML element of the currently inserted item.|
| **[.get_columns()]({%slug grid/client-side-programming/gridtableview-object/properties/get_columns()%})** |A collection that holds objects of type **GridColumn** (the client-side objects) in the respective table.|
| **[.get_name()]({%slug grid/client-side-programming/gridtableview-object/properties/get_name()%})** |String that represents the **Name** property (set on the server) for the corresponding GridTableView client object. It can be used to identify a table in a grid hierarchy on the client-side.|
| **[.get_isItemInserted()]({%slug grid/client-side-programming/gridtableview-object/properties/get_isiteminserted()%})** |A Boolean property. It gets a value indicating if the **GridTableView** is currently in insert mode.|
| **[.get_pageSize()]({%slug grid/client-side-programming/gridtableview-object/properties/get_pagesize()%})** |Returns the page size for the respective **GridTableView** object.|
| **[.set_pageSize()]({%slug grid/client-side-programming/gridtableview-object/properties/set_pagesize()%})** |Sets the page size for the respective **GridTableView** object.|
| **[.get_currentPageIndex()]({%slug grid/client-side-programming/gridtableview-object/properties/get_currentpageindex()%})** |Returns the current page index for the respective **GridTableView** object.|
| **[.set_currentPageIndex()]({%slug grid/client-side-programming/gridtableview-object/properties/set_currentpageindex()%})** |Sets the current page index for the respective **GridTableView** object.|
| **[.get_pageCount()]({%slug grid/client-side-programming/gridtableview-object/properties/get_pagecount()%})** |Returns the page count for the respective **GridTableView** object.|
| **[.get_clientDataKeyNames()]({%slug grid/client-side-programming/gridtableview-object/properties/get_clientdatakeynames()%})** |A one-dimensional array that holds the key fields set through the **ClientDataKeyNames** property of **GridTableView** on the server. To extract the key values you can use the *eventArgs.getDataKeyValue* inside any row-related client event handler of **RadGrid** .|
| **[.get_parentView()]({%slug grid/client-side-programming/gridtableview-object/properties/get_parentview()%})** |If called from a nested table view, it returns the parent table view (of type **GridTableView** ) in the grid hierarchy; it returns null if called from the **MasterTableView** .|
| **[.get_parentRow()]({%slug grid/client-side-programming/gridtableview-object/properties/get_parentrow()%})** |If called from a nested table view, it returns the parent row (HTML table row - <tr>) for the current nested hierarchical table view; it returns null if called from the **MasterTableView** .|
| **[.get_virtualItemCount()]({%slug grid/client-side-programming/gridtableview-object/properties/get_virtualitemcount()%})** |Gets the virtual item count value for the respective **GridTableView** object. Applies to client-side bound grid only.|
| **[.set_virtualItemCount()]({%slug grid/client-side-programming/gridtableview-object/properties/set_virtualitemcount()%})** |Sets the virtual item count value for the respective **GridTableView** object. Applies to client-side bound grid only.|

>note For performance reasons, the <GridTableViewInstance>.get_dataItems() collection will be available only when you enable specific client features/events for the rows in the grid (such as **AllowRowResize** , **AllowRowSelect** , **OnRowClick** , etc.).
>


>note If you want to reference the client object of a grid row inside a client event handler of **RadGrid** , make sure that you attach the **RowCreated** event of the control specifying an empty event handler,
>otherwise *eventArgs.get_gridDataItem()* will return null. This is due to performance reasons (avoiding the client serialization of grid items by default).
>An alternative method to reference a grid row client-side is through the[get_dataItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_dataitems()%})collection.
>


## Client-side Events

Inside each **RadGrid** client event handler the first argument passed (sender) will point to the grid client object. The second argument (eventArgs) will hold reference properties/objects dependable on the respective client event.

## RadGrid Events


|  **Event**  |  **Description**  |
| ------ | ------ |
| **[OnGridCreating]({%slug grid/client-side-programming/events/events/ongridcreating%})** |This event is fired before the grid is created.|
| **[OnGridCreated]({%slug grid/client-side-programming/events/events/ongridcreated%})** |This event is fired after the grid is created.|
| **[OnGridDestroying]({%slug grid/client-side-programming/events/events/ongriddestroying%})** |This event is fired when the **RadGrid** object is destroyed, (i.e. on each *window.onunload* ).|
| **[OnMasterTableViewCreating]({%slug grid/client-side-programming/events/events/onmastertableviewcreating%})** |This event is fired before the **MasterTableView** is created.|
| **[OnMasterTableViewCreated]({%slug grid/client-side-programming/events/events/onmastertableviewcreated%})** |This event is fired after the **MasterTableView** is created.|
|| ** *Table Creation* ** |
| **[OnTableCreating]({%slug grid/client-side-programming/events/events/ontablecreating%})** |This event is fired before the table is created.|
| **[OnTableCreated]({%slug grid/client-side-programming/events/events/ontablecreated%})** |This event is fired after the table is created.|
| **[OnTableDestroying]({%slug grid/client-side-programming/events/events/ontabledestroying%})** |This event is fired when table object is destroyed.|
|| * **Column Creation** * |
| **[OnColumnCreating]({%slug grid/client-side-programming/events/events/oncolumncreating%})** |This event is fired before column is created on client-side.|
| **[OnColumnCreated]({%slug grid/client-side-programming/events/events/oncolumncreated%})** |This event is fired after a column is created on client-side.|
| **[OnColumnDestroying]({%slug grid/client-side-programming/events/events/oncolumndestroying%})** |This event is fired when a column object is destroyed.|
|| ** *Column Resizing* ** |
| **[OnColumnResizing]({%slug grid/client-side-programming/events/events/oncolumnresizing%})** |This event is fired before a column is resized.|
| **[OnColumnResized]({%slug grid/client-side-programming/events/events/oncolumnresized%})** |This event is fired after a column is resized.|
|| ** *Columns Ordering* ** |
| **[OnColumnSwaping]({%slug grid/client-side-programming/events/events/oncolumnswapping%})** |This event is fired before two columns are swapped.|
| **[OnColumnSwaped]({%slug grid/client-side-programming/events/events/oncolumnswapped%})** |This event is fired after two columns are swapped.|
| **[OnColumnMovingToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovingtoleft%})** |This event is fired before a column is moved to the left.|
| **[OnColumnMovedToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovedtoleft%})** |This event is fired after a column is moved to the left.|
| **[OnColumnMovingToRight]({%slug grid/client-side-programming/events/events/oncolumnmovingtoright%})** |This event is fired before a column is moved to the right.|
| **[OnColumnMovedToRight]({%slug grid/client-side-programming/events/events/oncolumnmovedtoright%})** |This event is fired after a column is moved to the right.|
|| ** *Row Creation* ** |
| **[OnRowCreating]({%slug grid/client-side-programming/events/events/onrowcreating%})** |This event is fired before a row available client-side is created.|
| **[OnRowCreated]({%slug grid/client-side-programming/events/events/onrowcreated%})** |This event is fired after a row available client-side is created.|
| **[OnRowDestroying]({%slug grid/client-side-programming/events/events/onrowdestroying%})** |This event is fired when a row object is destroyed.|
|| ** *Row Resizing* ** |
| **[OnRowResizing]({%slug grid/client-side-programming/events/events/onrowresizing%})** |This event is fired before a row is resized.|
| **[OnRowResized]({%slug grid/client-side-programming/events/events/onrowresized%})** |This event is fired after a row is resized.|
|| ** *Row Selection* ** |
| **[OnRowSelecting]({%slug grid/client-side-programming/events/events/onrowselecting%})** |This event is fired before row selection.|
| **[OnRowSelected]({%slug grid/client-side-programming/events/events/onrowselected%})** |This event is fired after row selection.|
| **[OnRowDeselecting]({%slug grid/client-side-programming/events/events/onrowdeselecting%})** |This event is fired before row deselection.|
| **[OnRowDeselected]({%slug grid/client-side-programming/events/events/onrowdeselected%})** |This event is fired after row deselection.|
|| ** *OnClick and OnDblClick Events* ** |
| **[OnRowClick]({%slug grid/client-side-programming/events/events/onrowclick%})** |This event is fired when a row is clicked.|
| **[OnRowDblClick]({%slug grid/client-side-programming/events/events/onrowdblclick%})** |This event is fired when a row is double-clicked.|
| **[OnColumnClick]({%slug grid/client-side-programming/events/events/oncolumnclick%})** |This event is fired when a column is clicked.|
| **[OnColumnDblClick]({%slug grid/client-side-programming/events/events/oncolumndblclick%})** |This event is fired when a column is double-clicked.|
|| ** *Mouse Events* ** |
| **[OnRowMouseOver]({%slug grid/client-side-programming/events/events/onrowmouseover%})** |This event is fired when the mouse hovers over a row.|
| **[OnRowMouseOut]({%slug grid/client-side-programming/events/events/onrowmouseout%})** |This event is fired when the mouse leaves a row.|
| **[OnColumnMouseOver]({%slug grid/client-side-programming/events/events/oncolumnmouseover%})** |This event is fired when the mouse hovers over a column.|
| **[OnColumnMouseOut]({%slug grid/client-side-programming/events/events/oncolumnmouseout%})** |This event is fired when the mouse leaves a column.|
|| ** *Context Menus* ** |
| **[OnColumnContextMenu]({%slug grid/client-side-programming/events/events/oncolumncontextmenu%})** |This event is fired when the context menu for a column is called.|
| ** **[OnRowContextMenu]({%slug grid/client-side-programming/events/events/onrowcontextmenu%})** ** |This event is fired when the context menu for a row is called.|
|| ** *Column Visibility* ** |
| **[OnColumnHiding]({%slug grid/client-side-programming/events/events/oncolumnhiding%})** |This event is fired before a column is hidden.|
| **[OnColumnHidden]({%slug grid/client-side-programming/events/events/oncolumnhidden%})** |This event is fired after a column is hidden.|
|| ** *Row Visibility* ** |
| ** **[OnRowHiding]({%slug grid/client-side-programming/events/events/onrowhiding%})** ** |This event is fired before a row is hidden.|
| ** **[OnRowHidden]({%slug grid/client-side-programming/events/events/onrowhidden%})** ** |This event is fired after a row is hidden.|
|| ** *Row Deletion* ** |
| ** **[OnRowDeleting]({%slug grid/client-side-programming/events/events/onrowdeleting%})** ** |This event is fired before a row is deleted (client-side delete).|
| ** **[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})** ** |This event is fired after a row is deleted (client-side delete).|
| ** **[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})** ** | ** *Hierarchy Expansion* ** |
| ** **[OnHierarchyExpanding]({%slug grid/client-side-programming/events/events/onhierarchyexpanding%})** ** |This event is fired when the hierarchy is being expanded.|
| ** **[OnHierarchyExpanded]({%slug grid/client-side-programming/events/events/onhierarchyexpanded%})** ** |This event is fired when the hierarchy has been expanded.|
| ** **[OnHierarchyCollapsing]({%slug grid/client-side-programming/events/events/onhierarchycollapsing%})** ** |This event is fired when the hierarchy is being collapsed.|
| ** **[OnHierarchyCollapsed]({%slug grid/client-side-programming/events/events/onhierarchycollapsed%})** ** |This event is fired when the hierarchy has been collapsed.|
| ** **[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})** ** | ** *Group Expansion* ** |
| ** **[OnGroupExpanding]({%slug grid/client-side-programming/events/events/ongroupexpanding%})** ** |This event is fired when the group is being expanded.|
| ** **[OnGroupExpanded]({%slug grid/client-side-programming/events/events/ongroupexpanded%})** ** |This event is fired when the group has been expanded.|
| ** **[OnGroupCollapsing]({%slug grid/client-side-programming/events/events/ongroupcollapsing%})** ** |This event is fired when the group is being collapsed.|
| ** **[OnGroupCollapsed]({%slug grid/client-side-programming/events/events/ongroupcollapsed%})** ** |This event is fired when the group has been collapsed.|
|| ** *PopUp* ** |
| ** **[OnPopUpShowing]({%slug grid/client-side-programming/events/events/onpopupshowing%})** ** |This event is fired when the pop-up edit form is being shown.|
|| ** *Column Showing* ** |
| ** **[OnColumnShowing]({%slug grid/client-side-programming/events/events/oncolumnshowing%})** ** |This event is fired before a column is shown.|
| ** **[OnColumnShown]({%slug grid/client-side-programming/events/events/oncolumnshown%})** ** |This event is fired after a column is shown.|
|| ** *Row Showing* ** |
| ** **[OnRowShowing]({%slug grid/client-side-programming/events/events/onrowshowing%})** ** |This event is fired before a row is shown.|
| ** **[OnRowShown]({%slug grid/client-side-programming/events/events/onrowshown%})** ** |This event is fired when the row is shown.|
|| ** *Row Drag and Drop* ** |
| ** **[OnRowDragStarted]({%slug grid/client-side-programming/events/events/onrowdragstarted%})** ** |This event is fired when a row is about to be dragged.|
| ** **[OnRowDropping]({%slug grid/client-side-programming/events/events/onrowdropping%})** ** |This event is fired before a row is dropped.|
| ** **[OnRowDropped]({%slug grid/client-side-programming/events/events/onrowdropped%})** ** |This event is fired after a row is dropped.|
|| ** *Active Row Changing* ** |
| ** **[OnActiveRowChanging]({%slug grid/client-side-programming/events/events/onactiverowchanging%})** ** |This event is fired before the active row is changed.|
| ** **[OnActiveRowChanged]({%slug grid/client-side-programming/events/events/onactiverowchanged%})** ** |This event is fired after the active row is changed.|
|| ** *Filter Menu* ** |
| ** **[OnFilterMenuShowing]({%slug grid/client-side-programming/events/events/onfiltermenushowing%})** ** |This event is fired before the filtering menu is rendered.|
|| ** *Data Binding* ** |
| ** **[OnRowDataBound]({%slug grid/client-side-programming/events/events/onrowdatabound%})** ** |This event is fired when a row is about to be bound on the client.|
| ** **[OnDataBinding]({%slug grid/client-side-programming/events/events/ondatabinding%})** ** |This event is fired when the grid is about to be bound on the client.|
| ** **[OnDataBound]({%slug grid/client-side-programming/events/events/ondatabound%})** ** |This event is fired right after the grid is bound on the client.|
|| ** *Bating Editing* ** |
| ** **[OnBatchEditOpening]({%slug grid/client-side-programming/events/events/onbatcheditopening%})** ** |This event is fired when a cell is opening for edit.|
| ** **[OnBatchEditOpened]({%slug grid/client-side-programming/events/events/onbatcheditopened%})** ** |This event is fired after a cell is opened for edit.|
| ** **[OnBatchEditClosing]({%slug grid/client-side-programming/events/events/onbatcheditclosing%})** ** |This event is fired when a cell is closing.|
| ** **[OnBatchEditClosed]({%slug grid/client-side-programming/events/events/onbatcheditclosed%})** ** |This event is fired after the cell is closed.|
| ** **[OnBatchEditCellValueChanging]({%slug grid/client-side-programming/events/events/onbatcheditcellvaluechanging%})** ** |This event is fired when a cell's value is being changed.|
| ** **[OnBatchEditCellValueChanged]({%slug grid/client-side-programming/events/events/onbatcheditcellvaluechanged%})** ** |This event is fired once a cell has been edited.|
| ** **[OnBatchEditGetCellValue]({%slug grid/client-side-programming/events/events/onbatcheditgetcellvalue%})** ** |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the **EditItemTemplate** of a **GridTemplateColumn** ).|
| ** **[OnBatchEditSetCellValue]({%slug grid/client-side-programming/events/events/onbatcheditsetcellvalue%})** ** |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the **EditItemTemplate** of a **GridTemplateColumn** ).|
| ** **[OnBatchEditSetEditorValue]({%slug grid/client-side-programming/events/events/onbatcheditseteditorvalue%})** ** |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the **EditItemTemplate** of a **GridTemplateColumn** ).|
| ** **[OnBatchEditGetEditorValue]({%slug grid/client-side-programming/events/events/onbatcheditgeteditorvalue%})** ** |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the **EditItemTemplate** of a **GridTemplateColumn** ).|
|| ** *Scrolling* ** |
| ** **[OnScroll]({%slug grid/client-side-programming/events/events/onscroll%})** ** |This event is fired when you scroll the grid.|
|| ** *Command* ** |
| ** **[OnCommand]({%slug grid/client-side-programming/events/events/oncommand%})** ** |This event is fired for each grid command which is about to be triggered (sorting, paging, filtering, editing, etc.) before postback/ajax request .|

## Obtaining GridTableView Elements

You can refer to the elements of the **RadGridTable** using the functions below:

* **<GridTableViewInstance>.get_columns()[n].get_element() ->** the real HTML table column for the **n**-th column****(**<th>** for header cell)

* **<GridTableViewInstance>.get_dataItems()[n].get_element() ->** the real HTML table row for the **n**-th row (**<tr>** element)

## Manipulating GridTableView Elements

In thelist below you can find links to the **GridTableView**, **GridColumn** and **GridDataItem** classmembers articles that list the varioust methods and properties which you can use for execution additional logic.

* [GridTableView]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

* [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})

* [GridDataItem]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})
