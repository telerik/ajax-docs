---
title: Client-Side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: grid/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



## Client-side Object Model

Telerik __RadGrid__ provides the following objects on the client-side:


|  __Classes/properties__  |  __Description__  |
| ------ | ------ |
| __ *RadGrid* __ |This is the main class. You can use it to access the whole grid object.|
| __[.get_masterTableView()]({%slug grid/client-side-programming/radgrid-object/properties/get_mastertableview()%})__ |This is an object of type __GridTableView__ . Use this object to access the root table in hierarchical structures.|
| __[.get_masterTableViewHeader()]({%slug grid/client-side-programming/radgrid-object/properties/get_mastertableviewheader()%})__ |Returns the master table header instance for the respective grid client object.|
| __[.get_masterTableViewFooter()]({%slug grid/client-side-programming/radgrid-object/properties/get_mastertableviewfooter()%})__ |Returns the master table footer instance for the respective grid client object.|
| __[.get_detailTables()]({%slug grid/client-side-programming/radgrid-object/properties/get_detailtables()%})__ |This collection represents the detail tables when you have a hierarchical structured grid. Every table is of type __GridTableView__ .|
| __[.get_editItems()]({%slug grid/client-side-programming/radgrid-object/properties/get_edititems()%})__ |This property retrieves all __GridDataItem__ objects that are in edit mode accross all grid tables.|
| __[.get_allowMultiRowSelection()]({%slug grid/client-side-programming/radgrid-object/properties/get_allowmultirowselection()%})__ |This property is of type Boolean. When set to __true__ , you can select multiple rows on the client.|
| __[.set_activeRow()]({%slug grid/client-side-programming/radgrid-object/properties/set_activerow()%})__ |Property which marks the row passed as an argument as active and highlighted.|
| __[.get_element()]({%slug grid/client-side-programming/radgrid-object/properties/get_element()%})__ |Property that returns the DOM element of the grid div.|
| __[.get_id()]({%slug grid/client-side-programming/radgrid-object/properties/get_id()%})__ |Property that returns the id of the grid client object.|
| __[.get_selectedItems()]({%slug grid/client-side-programming/radgrid-object/properties/get_selecteditems()%})__ |Property that returns an array of the grid rows selected on the client (and all sub-levels in the hierarchical grid structure).|
| __[.get_headerMenu()]({%slug grid/client-side-programming/radgrid-object/properties/get_headermenu()%})__ |Property that returns the client object of the[grid header context menu](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/headercontextmenu/defaultcs.aspx). Useful when you would like to customize the items in it on the client (see the JavaScript logic at the top of[this help topic](http://www.telerik.com/help/aspnet-ajax/grdreducingfiltermenuoptions.html)for reference).|
| __[.get_allowActiveRow()]({%slug grid/client-side-programming/radgrid-object/properties/get_allowactiverowcycle()%})__ |Property that returns the value for the respective server property of the control (ClientSettings -> KeyboardNavigationSettings -> AllowActiveRowCycle).|
| __[.get_visible()]({%slug grid/client-side-programming/radgrid-object/properties/get_visible()%})__ |Property that determines whether the grid is visible on the client or not (style="display:none").|
| __[.set_visible()]({%slug grid/client-side-programming/radgrid-object/properties/set_visible()%})__ |Property that sets the grid as visible or not on the client (changing the *style-> display* value of the grid div).|
| __ *GridTableView* __ |Class that wraps the client-side features of the __GridTableView__ object. Each GridTableView client instance has __GridColumn__ and __GridDataItem__ objects for manipulating the grid's items and columns client-side.|
| __[.get_allowMultiColumnSorting()]({%slug grid/client-side-programming/gridtableview-object/properties/get_allowmulticolumnsorting()%})__ |Returns a __Boolean__ value indicating whether multi-column sorting is enabled for the grid instance.|
| __[.set_allowMultiColumnSorting()]({%slug grid/client-side-programming/gridtableview-object/properties/set_allowmulticolumnsorting()%})__ |Sets whether multi-column sorting is enabled for the grid instance.|
| __[.get_owner()]({%slug grid/client-side-programming/gridtableview-object/properties/get_owner()%})__ |This property is of type __RadGrid__ and presents the parent of the current object.|
| __[.get_element()]({%slug grid/client-side-programming/gridtableview-object/properties/get_element()%})__ |Returns the HTML table that represents the respective table for the __GridTableView__ object rendered on the client.|
| __[.get_dataItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_dataitems()%})__ |A collection that holds all data items (objects of type __GridDataItem__ ) in the respective table.|
| __[.get_selectedItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_selecteditems()%})__ |A collection which holds all selected items (objects of type __GridDataItem__ ) in the respective table. This collection will include the selected items from the table's child tables (meaningful in a hierarchical grid only).|
| __[.get_editItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_edititems()%})__ |This property retrieves the __GridDataItem__ objects of the current table view that are in edit mode.|
| __[.get_insertItem()]({%slug grid/client-side-programming/gridtableview-object/properties/get_insertitem()%})__ |This property retrieves the HTML element of the currently inserted item.|
| __[.get_columns()]({%slug grid/client-side-programming/gridtableview-object/properties/get_columns()%})__ |A collection that holds objects of type __GridColumn__ (the client-side objects) in the respective table.|
| __[.get_name()]({%slug grid/client-side-programming/gridtableview-object/properties/get_name()%})__ |String that represents the __Name__ property (set on the server) for the corresponding GridTableView client object. It can be used to identify a table in a grid hierarchy on the client-side.|
| __[.get_isItemInserted()]({%slug grid/client-side-programming/gridtableview-object/properties/get_isiteminserted()%})__ |A Boolean property. It gets a value indicating if the __GridTableView__ is currently in insert mode.|
| __[.get_pageSize()]({%slug grid/client-side-programming/gridtableview-object/properties/get_pagesize()%})__ |Returns the page size for the respective __GridTableView__ object.|
| __[.set_pageSize()]({%slug grid/client-side-programming/gridtableview-object/properties/set_pagesize()%})__ |Sets the page size for the respective __GridTableView__ object.|
| __[.get_currentPageIndex()]({%slug grid/client-side-programming/gridtableview-object/properties/get_currentpageindex()%})__ |Returns the current page index for the respective __GridTableView__ object.|
| __[.set_currentPageIndex()]({%slug grid/client-side-programming/gridtableview-object/properties/set_currentpageindex()%})__ |Sets the current page index for the respective __GridTableView__ object.|
| __[.get_pageCount()]({%slug grid/client-side-programming/gridtableview-object/properties/get_pagecount()%})__ |Returns the page count for the respective __GridTableView__ object.|
| __[.get_clientDataKeyNames()]({%slug grid/client-side-programming/gridtableview-object/properties/get_clientdatakeynames()%})__ |A one-dimensional array that holds the key fields set through the __ClientDataKeyNames__ property of __GridTableView__ on the server. To extract the key values you can use the *eventArgs.getDataKeyValue* inside any row-related client event handler of __RadGrid__ .|
| __[.get_parentView()]({%slug grid/client-side-programming/gridtableview-object/properties/get_parentview()%})__ |If called from a nested table view, it returns the parent table view (of type __GridTableView__ ) in the grid hierarchy; it returns null if called from the __MasterTableView__ .|
| __[.get_parentRow()]({%slug grid/client-side-programming/gridtableview-object/properties/get_parentrow()%})__ |If called from a nested table view, it returns the parent row (HTML table row - <tr>) for the current nested hierarchical table view; it returns null if called from the __MasterTableView__ .|
| __[.get_virtualItemCount()]({%slug grid/client-side-programming/gridtableview-object/properties/get_virtualitemcount()%})__ |Gets the virtual item count value for the respective __GridTableView__ object. Applies to client-side bound grid only.|
| __[.set_virtualItemCount()]({%slug grid/client-side-programming/gridtableview-object/properties/set_virtualitemcount()%})__ |Sets the virtual item count value for the respective __GridTableView__ object. Applies to client-side bound grid only.|

>note For performance reasons, the <GridTableViewInstance>.get_dataItems() collection will be available only when you enable specific client features/events for the rows in the grid (such as __AllowRowResize__ , __AllowRowSelect__ , __OnRowClick__ , etc.).
>


>note If you want to reference the client object of a grid row inside a client event handler of __RadGrid__ , make sure that you attach the __RowCreated__ event of the control specifying an empty event handler,
>otherwise *eventArgs.get_gridDataItem()* will return null. This is due to performance reasons (avoiding the client serialization of grid items by default).
>An alternative method to reference a grid row client-side is through the[get_dataItems()]({%slug grid/client-side-programming/gridtableview-object/properties/get_dataitems()%})collection.
>


## Client-side Events

Inside each __RadGrid__ client event handler the first argument passed (sender) will point to the grid client object. The second argument (eventArgs) will hold reference properties/objects dependable on the respective client event.

## RadGrid Events


|  __Event__  |  __Description__  |
| ------ | ------ |
| __[OnGridCreating]({%slug grid/client-side-programming/events/events/ongridcreating%})__ |This event is fired before the grid is created.|
| __[OnGridCreated]({%slug grid/client-side-programming/events/events/ongridcreated%})__ |This event is fired after the grid is created.|
| __[OnGridDestroying]({%slug grid/client-side-programming/events/events/ongriddestroying%})__ |This event is fired when the __RadGrid__ object is destroyed, (i.e. on each *window.onunload* ).|
| __[OnMasterTableViewCreating]({%slug grid/client-side-programming/events/events/onmastertableviewcreating%})__ |This event is fired before the __MasterTableView__ is created.|
| __[OnMasterTableViewCreated]({%slug grid/client-side-programming/events/events/onmastertableviewcreated%})__ |This event is fired after the __MasterTableView__ is created.|
|| __ *Table Creation* __ |
| __[OnTableCreating]({%slug grid/client-side-programming/events/events/ontablecreating%})__ |This event is fired before the table is created.|
| __[OnTableCreated]({%slug grid/client-side-programming/events/events/ontablecreated%})__ |This event is fired after the table is created.|
| __[OnTableDestroying]({%slug grid/client-side-programming/events/events/ontabledestroying%})__ |This event is fired when table object is destroyed.|
|| * __Column Creation__ * |
| __[OnColumnCreating]({%slug grid/client-side-programming/events/events/oncolumncreating%})__ |This event is fired before column is created on client-side.|
| __[OnColumnCreated]({%slug grid/client-side-programming/events/events/oncolumncreated%})__ |This event is fired after a column is created on client-side.|
| __[OnColumnDestroying]({%slug grid/client-side-programming/events/events/oncolumndestroying%})__ |This event is fired when a column object is destroyed.|
|| __ *Column Resizing* __ |
| __[OnColumnResizing]({%slug grid/client-side-programming/events/events/oncolumnresizing%})__ |This event is fired before a column is resized.|
| __[OnColumnResized]({%slug grid/client-side-programming/events/events/oncolumnresized%})__ |This event is fired after a column is resized.|
|| __ *Columns Ordering* __ |
| __[OnColumnSwaping]({%slug grid/client-side-programming/events/events/oncolumnswapping%})__ |This event is fired before two columns are swapped.|
| __[OnColumnSwaped]({%slug grid/client-side-programming/events/events/oncolumnswapped%})__ |This event is fired after two columns are swapped.|
| __[OnColumnMovingToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovingtoleft%})__ |This event is fired before a column is moved to the left.|
| __[OnColumnMovedToLeft]({%slug grid/client-side-programming/events/events/oncolumnmovedtoleft%})__ |This event is fired after a column is moved to the left.|
| __[OnColumnMovingToRight]({%slug grid/client-side-programming/events/events/oncolumnmovingtoright%})__ |This event is fired before a column is moved to the right.|
| __[OnColumnMovedToRight]({%slug grid/client-side-programming/events/events/oncolumnmovedtoright%})__ |This event is fired after a column is moved to the right.|
|| __ *Row Creation* __ |
| __[OnRowCreating]({%slug grid/client-side-programming/events/events/onrowcreating%})__ |This event is fired before a row available client-side is created.|
| __[OnRowCreated]({%slug grid/client-side-programming/events/events/onrowcreated%})__ |This event is fired after a row available client-side is created.|
| __[OnRowDestroying]({%slug grid/client-side-programming/events/events/onrowdestroying%})__ |This event is fired when a row object is destroyed.|
|| __ *Row Resizing* __ |
| __[OnRowResizing]({%slug grid/client-side-programming/events/events/onrowresizing%})__ |This event is fired before a row is resized.|
| __[OnRowResized]({%slug grid/client-side-programming/events/events/onrowresized%})__ |This event is fired after a row is resized.|
|| __ *Row Selection* __ |
| __[OnRowSelecting]({%slug grid/client-side-programming/events/events/onrowselecting%})__ |This event is fired before row selection.|
| __[OnRowSelected]({%slug grid/client-side-programming/events/events/onrowselected%})__ |This event is fired after row selection.|
| __[OnRowDeselecting]({%slug grid/client-side-programming/events/events/onrowdeselecting%})__ |This event is fired before row deselection.|
| __[OnRowDeselected]({%slug grid/client-side-programming/events/events/onrowdeselected%})__ |This event is fired after row deselection.|
|| __ *OnClick and OnDblClick Events* __ |
| __[OnRowClick]({%slug grid/client-side-programming/events/events/onrowclick%})__ |This event is fired when a row is clicked.|
| __[OnRowDblClick]({%slug grid/client-side-programming/events/events/onrowdblclick%})__ |This event is fired when a row is double-clicked.|
| __[OnColumnClick]({%slug grid/client-side-programming/events/events/oncolumnclick%})__ |This event is fired when a column is clicked.|
| __[OnColumnDblClick]({%slug grid/client-side-programming/events/events/oncolumndblclick%})__ |This event is fired when a column is double-clicked.|
|| __ *Mouse Events* __ |
| __[OnRowMouseOver]({%slug grid/client-side-programming/events/events/onrowmouseover%})__ |This event is fired when the mouse hovers over a row.|
| __[OnRowMouseOut]({%slug grid/client-side-programming/events/events/onrowmouseout%})__ |This event is fired when the mouse leaves a row.|
| __[OnColumnMouseOver]({%slug grid/client-side-programming/events/events/oncolumnmouseover%})__ |This event is fired when the mouse hovers over a column.|
| __[OnColumnMouseOut]({%slug grid/client-side-programming/events/events/oncolumnmouseout%})__ |This event is fired when the mouse leaves a column.|
|| __ *Context Menus* __ |
| __[OnColumnContextMenu]({%slug grid/client-side-programming/events/events/oncolumncontextmenu%})__ |This event is fired when the context menu for a column is called.|
| __ __[OnRowContextMenu]({%slug grid/client-side-programming/events/events/onrowcontextmenu%})__ __ |This event is fired when the context menu for a row is called.|
|| __ *Column Visibility* __ |
| __[OnColumnHiding]({%slug grid/client-side-programming/events/events/oncolumnhiding%})__ |This event is fired before a column is hidden.|
| __[OnColumnHidden]({%slug grid/client-side-programming/events/events/oncolumnhidden%})__ |This event is fired after a column is hidden.|
|| __ *Row Visibility* __ |
| __ __[OnRowHiding]({%slug grid/client-side-programming/events/events/onrowhiding%})__ __ |This event is fired before a row is hidden.|
| __ __[OnRowHidden]({%slug grid/client-side-programming/events/events/onrowhidden%})__ __ |This event is fired after a row is hidden.|
|| __ *Row Deletion* __ |
| __ __[OnRowDeleting]({%slug grid/client-side-programming/events/events/onrowdeleting%})__ __ |This event is fired before a row is deleted (client-side delete).|
| __ __[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})__ __ |This event is fired after a row is deleted (client-side delete).|
| __ __[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})__ __ | __ *Hierarchy Expansion* __ |
| __ __[OnHierarchyExpanding]({%slug grid/client-side-programming/events/events/onhierarchyexpanding%})__ __ |This event is fired when the hierarchy is being expanded.|
| __ __[OnHierarchyExpanded]({%slug grid/client-side-programming/events/events/onhierarchyexpanded%})__ __ |This event is fired when the hierarchy has been expanded.|
| __ __[OnHierarchyCollapsing]({%slug grid/client-side-programming/events/events/onhierarchycollapsing%})__ __ |This event is fired when the hierarchy is being collapsed.|
| __ __[OnHierarchyCollapsed]({%slug grid/client-side-programming/events/events/onhierarchycollapsed%})__ __ |This event is fired when the hierarchy has been collapsed.|
| __ __[OnRowDeleted]({%slug grid/client-side-programming/events/events/onrowdeleted%})__ __ | __ *Group Expansion* __ |
| __ __[OnGroupExpanding]({%slug grid/client-side-programming/events/events/ongroupexpanding%})__ __ |This event is fired when the group is being expanded.|
| __ __[OnGroupExpanded]({%slug grid/client-side-programming/events/events/ongroupexpanded%})__ __ |This event is fired when the group has been expanded.|
| __ __[OnGroupCollapsing]({%slug grid/client-side-programming/events/events/ongroupcollapsing%})__ __ |This event is fired when the group is being collapsed.|
| __ __[OnGroupCollapsed]({%slug grid/client-side-programming/events/events/ongroupcollapsed%})__ __ |This event is fired when the group has been collapsed.|
|| __ *PopUp* __ |
| __ __[OnPopUpShowing]({%slug grid/client-side-programming/events/events/onpopupshowing%})__ __ |This event is fired when the pop-up edit form is being shown.|
|| __ *Column Showing* __ |
| __ __[OnColumnShowing]({%slug grid/client-side-programming/events/events/oncolumnshowing%})__ __ |This event is fired before a column is shown.|
| __ __[OnColumnShown]({%slug grid/client-side-programming/events/events/oncolumnshown%})__ __ |This event is fired after a column is shown.|
|| __ *Row Showing* __ |
| __ __[OnRowShowing]({%slug grid/client-side-programming/events/events/onrowshowing%})__ __ |This event is fired before a row is shown.|
| __ __[OnRowShown]({%slug grid/client-side-programming/events/events/onrowshown%})__ __ |This event is fired when the row is shown.|
|| __ *Row Drag and Drop* __ |
| __ __[OnRowDragStarted]({%slug grid/client-side-programming/events/events/onrowdragstarted%})__ __ |This event is fired when a row is about to be dragged.|
| __ __[OnRowDropping]({%slug grid/client-side-programming/events/events/onrowdropping%})__ __ |This event is fired before a row is dropped.|
| __ __[OnRowDropped]({%slug grid/client-side-programming/events/events/onrowdropped%})__ __ |This event is fired after a row is dropped.|
|| __ *Active Row Changing* __ |
| __ __[OnActiveRowChanging]({%slug grid/client-side-programming/events/events/onactiverowchanging%})__ __ |This event is fired before the active row is changed.|
| __ __[OnActiveRowChanged]({%slug grid/client-side-programming/events/events/onactiverowchanged%})__ __ |This event is fired after the active row is changed.|
|| __ *Filter Menu* __ |
| __ __[OnFilterMenuShowing]({%slug grid/client-side-programming/events/events/onfiltermenushowing%})__ __ |This event is fired before the filtering menu is rendered.|
|| __ *Data Binding* __ |
| __ __[OnRowDataBound]({%slug grid/client-side-programming/events/events/onrowdatabound%})__ __ |This event is fired when a row is about to be bound on the client.|
| __ __[OnDataBinding]({%slug grid/client-side-programming/events/events/ondatabinding%})__ __ |This event is fired when the grid is about to be bound on the client.|
| __ __[OnDataBound]({%slug grid/client-side-programming/events/events/ondatabound%})__ __ |This event is fired right after the grid is bound on the client.|
|| __ *Bating Editing* __ |
| __ __[OnBatchEditOpening]({%slug grid/client-side-programming/events/events/onbatcheditopening%})__ __ |This event is fired when a cell is opening for edit.|
| __ __[OnBatchEditOpened]({%slug grid/client-side-programming/events/events/onbatcheditopened%})__ __ |This event is fired after a cell is opened for edit.|
| __ __[OnBatchEditClosing]({%slug grid/client-side-programming/events/events/onbatcheditclosing%})__ __ |This event is fired when a cell is closing.|
| __ __[OnBatchEditClosed]({%slug grid/client-side-programming/events/events/onbatcheditclosed%})__ __ |This event is fired after the cell is closed.|
| __ __[OnBatchEditCellValueChanging]({%slug grid/client-side-programming/events/events/onbatcheditcellvaluechanging%})__ __ |This event is fired when a cell's value is being changed.|
| __ __[OnBatchEditCellValueChanged]({%slug grid/client-side-programming/events/events/onbatcheditcellvaluechanged%})__ __ |This event is fired once a cell has been edited.|
| __ __[OnBatchEditGetCellValue]({%slug grid/client-side-programming/events/events/onbatcheditgetcellvalue%})__ __ |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the __EditItemTemplate__ of a __GridTemplateColumn__ ).|
| __ __[OnBatchEditSetCellValue]({%slug grid/client-side-programming/events/events/onbatcheditsetcellvalue%})__ __ |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the __EditItemTemplate__ of a __GridTemplateColumn__ ).|
| __ __[OnBatchEditSetEditorValue]({%slug grid/client-side-programming/events/events/onbatcheditseteditorvalue%})__ __ |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the __EditItemTemplate__ of a __GridTemplateColumn__ ).|
| __ __[OnBatchEditGetEditorValue]({%slug grid/client-side-programming/events/events/onbatcheditgeteditorvalue%})__ __ |This event is fired when the grid obtains the value from the editor in order to later set in in the HTML(Should be handled handled when multiplecontrols which contain an input element are placed inside the __EditItemTemplate__ of a __GridTemplateColumn__ ).|
|| __ *Scrolling* __ |
| __ __[OnScroll]({%slug grid/client-side-programming/events/events/onscroll%})__ __ |This event is fired when you scroll the grid.|
|| __ *Command* __ |
| __ __[OnCommand]({%slug grid/client-side-programming/events/events/oncommand%})__ __ |This event is fired for each grid command which is about to be triggered (sorting, paging, filtering, editing, etc.) before postback/ajax request .|

## Obtaining GridTableView Elements

You can refer to the elements of the __RadGridTable__ using the functions below:

* __<GridTableViewInstance>.get_columns()[n].get_element() ->__ the real HTML table column for the __n__-th column____(__<th>__ for header cell)

* __<GridTableViewInstance>.get_dataItems()[n].get_element() ->__ the real HTML table row for the __n__-th row (__<tr>__ element)

## Manipulating GridTableView Elements

In thelist below you can find links to the __GridTableView__, __GridColumn__ and __GridDataItem__ classmembers articles that list the varioust methods and properties which you can use for execution additional logic.

* [GridTableView]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})

* [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%})

* [GridDataItem]({%slug grid/client-side-programming/griddataitem-object/griddataitem-class-members%})
