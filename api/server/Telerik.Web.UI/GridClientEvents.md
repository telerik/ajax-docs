---
title: Telerik.Web.UI.GridClientEvents
page_title: Telerik.Web.UI.GridClientEvents
description: Telerik.Web.UI.GridClientEvents
---

# Telerik.Web.UI.GridClientEvents

The class holding all client-side events associated with the Telerik.Web.UI.RadGrid control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridClientEvents

## Properties

###  OnDataBinding `String`

This event is fired when the grid request data using client-side data-binding.

###  OnDataBindingFailed `String`

This event is fired if request for data fails when using client-side data-binding.

###  OnDataSourceResolved `String`

This event is fired when the grid client-side data is retrieved from the server.

###  OnDataBound `String`

This event is fired when the grid client-side data-binding is finished.

###  OnGridCreating `String`

This client-side event is fired before grid creation.

#### Remarks
This event is fired before grid creation.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnGridCreating="GridCreating" ...JavaScript<script>function
            GridCreating(){alert("Creting grid with ClientID: " + this.ClientID);}</script>

###  OnHeaderMenuShowing `String`

Gets or sets the client-side event which is fired when  header
             fires its 'Showing' event.

###  OnRowDropping `String`

Gets or sets the client-side event which is fired when a  row is dropping.

###  OnRowDropped `String`

Gets or sets the client-side event which is fired when a  row is dropped.

###  OnRowDragging `String`

Gets or sets the client-side event which will be fired when a  row is being dragged.

###  OnRowDragStarted `String`

Gets or sets the client-side event which will be fired when a  row drag starts.

###  OnGridCreated `String`

This client-side event is fired after the grid is created.

#### Remarks
This event is fired after the grid is created.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnGridCreated="GridCreated" ...JavaScript<script>function GridCreated(){alert("Grid with ClientID: " + this.ClientID + " was created");}</script>

###  OnGridDestroying `String`

This client-side event is fired when RadGrid object is
            destroyed, i.e. on each window.onunload

#### Remarks
This event is fired when RadGrid object is destroyed, i.e. on each
            window.onunloadFired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnGridCreating="GridDestroying" ...JavaScript<script>function
            GridDestroying(){alert("Destroying grid with ClientID: " + this.ClientID);}</script>

###  OnMasterTableViewCreating `String`

This client-side event is fired before the MasterTableView is created.

#### Remarks
This event is fired before the MasterTableView is created.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnMasterTableViewCreating="MasterTableViewCreating" ...JavaScript<script>function
            MasterTableViewCreating(){alert("Creating MasterTableView");}</script>

###  OnMasterTableViewCreated `String`

This client-side event is fired after the MasterTableView is created.

#### Remarks
This event is fired after the MasterTableView is created.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnMasterTableViewCreated="MasterTableViewCreated" ...JavaScript<script>function
            MasterTableViewCreated(){alert("MasterTableView was created");}</script>

###  OnTableCreating `String`

This client-side event is fired before table creation.

#### Remarks
This event is fired before table creation.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnTableCreating="TableCreating" ...JavaScript<script>function
            TableCreating(){alert("Creating DetailTable");}</script>

###  OnTableCreated `String`

This client-side event is fired after the table is created.

#### Remarks
This event is fired after the table is created.Fired byRadGridArgumentsRadGridTable ObjectCan be canceledNoExamplesascx/aspx<ClientEvents
            OnTableCreated="TableCreated" ...JavaScript<script>function
            TableCreated(tableObject){alert("DetailTable with ClientID: " + tableObject.ClientID + " was
            created");}</script>

###  OnTableDestroying `String`

This client-side event is fired when table object is destroyed.

#### Remarks
This event is fired when table object is destroyed.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnTableDestroying="TableDestroying" ...JavaScript<script>function
            TableDestroying(){alert("Destroing DetailTable with ClientID: " + this.ClientID);}</script>

###  OnCellSelecting `String`

This client-side event is fired before a column cell is selected client-side.

#### Remarks
This event is fired before a column cell is selected client-side.Fired byRadGridArgumentsN/ACan be canceledYesExamplesascx/aspx<ClientEvents
            OnCellSelecting="CellSelecting" ...JavaScript<script>function
            CellSelecting(){alert("Selecting column cell!");}</script>

###  OnCellSelected `String`

This client-side event is after a column cell is selected client-side.

#### Remarks
This event is fired after a column cell is selected client-side.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnCellSelected="CellSelected" ...JavaScript<script>function
            CellSelected(){alert("Cell selected!");}</script>

###  OnCellDeselecting `String`

This client-side event is before a column cell is deselected client-side.

#### Remarks
This event is fired before a column cell has been deselected client-side.Fired byRadGridArgumentsN/ACan be canceledYesExamplesascx/aspx<ClientEvents
            OnCellDeselecting="CellDeselecting" ...JavaScript<script>function
            CellDeselecting(){alert("Cell deselecting!");}</script>

###  OnCellDeselected `String`

This client-side event is after a column cell is deselected client-side.

#### Remarks
This event is fired after a column cell has been deselected client-side.Fired byRadGridArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnCellDeselected="CellDeselected" ...JavaScript<script>function
            CellDeselected(){alert("Cell deselected!");}</script>

###  OnColumnCreating `String`

This client-side event is fired before column available at client-side
            creation.

#### Remarks
This event is fired before column available at client-side creation.Fired byRadGridTableArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnColumnCreating="ColumnCreating" ...JavaScript<script>function
            ColumnCreating(){alert("Creating column);}</script>

###  OnColumnCreated `String`

This client-side event is fired after a column available at client-side is
            created.

#### Remarks
This event is fired after a column available at client-side is created.Fired byRadGridTableArgumentsRadGridTableColumn objectCan be canceledNoExamplesascx/aspx<ClientEvents
            OnColumnCreated="ColumnCreated" ...JavaScript<script>function
            ColumnCreated(columnObject){alert("Column with Index: " + columnObject.Index + " was created");}</script>

###  OnColumnDestroying `String`

This client-side event is fired when a column object is destroyed.

#### Remarks
This event is fired when a column object is destroyed.Fired byRadGridTableArgumentsN/ACan be canceledNoExamplesascx/aspx<ClientEvents
            OnColumnDestroying="ColumnDestroying" ...JavaScript<script>function
            ColumnDestroying(){alert("Destroing column with Index: " + this.Index);}</script>

###  OnColumnResizing `String`

This client-side event is fired before a column is resized.

#### Remarks
This event is fired before a column is resized.Fired byRadGridTableArgumentscolumnIndex, columnWidthCan be canceledYes, return false to cancelExamplesascx/aspx<ClientEvents
            OnColumnResizing="ColumnResizing" ...JavaScript<script>function
            ColumnResizing(columnIndex, columnWidth){alert("Resizng column with Index: " + columnIndex + ", width: " +
            columnWidth);}ORfunction
            ColumnResizing(columnIndex, columnWidth){return false; //cancel ColumnResizing event}</script>

###  OnColumnResized `String`

Gets or sets the client-side event which will be fired when a column have been resized.

###  OnColumnSwapping `String`

Gets or sets the client-side event which will be fired before a column have been swapped.

###  OnColumnSwapped `String`

Gets or sets the client-side event which will be fired when a column have been swaped.

###  OnColumnMovingToLeft `String`

Gets or sets the clint-side event which will be fired before a column have been moved to the left.

###  OnColumnMovedToLeft `String`

Gets or sets the client-side event which will be fired after a column have been moved to the left.

###  OnColumnMovingToRight `String`

Gets or sets the clint-side event which will be fired before a column have been moved to the right.

###  OnColumnMovedToRight `String`

Gets or sets the client-side event which will be fired after a column have been moved to the right.

###  OnColumnHiding `String`

Gets or sets the client-side event which is fired before a column have been hidden.

###  OnColumnHidden `String`

Gets or sets the client-side event which is fired when a column have been hidden.

###  OnColumnShowing `String`

Gets or sets the client-side event which will be fired before a column have been shown.

###  OnColumnShown `String`

Gets or sets the client-side event which will be fired when a column is shown.

###  OnRowCreating `String`

Gets or sets the client-side event which will be fired before a row have been created.

###  OnRowCreated `String`

Gets or sets the client-side event which will be fired when a row have been created.

###  OnRowDestroying `String`

Gets or sets the client-side event which will be fired when a row have been destroyed.

###  OnRowResizing `String`

Gets or sets the client-side event which will be fired before a row have been resized.

###  OnRowResized `String`

Gets or sets the client-side event which is fired when a row have been resized.

###  OnRowHiding `String`

Gets or sets the client-side event which will be fired before a row is hidden.

###  OnRowHidden `String`

Gets or sets the client-side event which will be fired when a row have been hidden.

###  OnRowShowing `String`

Gets or sets the client-side event which will be fired before a row is shown.

###  OnRowShown `String`

Gets or sets the client-side event which will be fired when a row have been shown.

###  OnRowClick `String`

Gets or sets the client-side event which will be fired when a row have been clicked.

###  OnRowDblClick `String`

Gets or sets the client-side event which will be fired when a row have been double clicked.

###  OnColumnClick `String`

Gets or sets the client-side event which will be fired when a colum have been clicked.

###  OnColumnDblClick `String`

Gets or sets the client-side event which will be fired when a column have been double clicked.

###  OnRowSelecting `String`

Gets or sets the client-side event which will be fired before a row is selected.

###  OnRowSelected `String`

Gets or sets the client-side event which will be fired when a row have been selected.

###  OnRowDeselecting `String`

Gets or sets the client-side event which will be fired before a row is deselected.

###  OnRowDeselected `String`

Gets or sets the client-side event which will be fired when a row have been deselected.

###  OnRowMouseOver `String`

Gets or sets the client-side event which will be fired when a mouse hovers over a row element.

###  OnRowMouseOut `String`

Gets or sets the client-side event which will be fired when a mouse leaves a row element.

###  OnColumnMouseOver `String`

Gets or sets the client-side event which will be fired when a mouse hovers over a column element.

###  OnColumnMouseOut `String`

Gets or sets the client-side event which will be fired when a mouse leaves a column element.

###  OnColumnContextMenu `String`

Gets or sets the client-side event which will be fired when a column is right clicked.

###  OnRowContextMenu `String`

#### Remarks
The client-side script
                for RadGrid.ClientSettings.ClientEvents.OnRowContextMenu kills any exceptions that
                occur in the event handler. This can make bugs hard to track down because it
                appears that nothing happens when actually the exception was killed before it
                becomes visible.You can avoid this problem by putting a try/catch block around the
                event handler that sends an alert if an exception was thrown:
            RadGrid1.ClientSettings.ClientEvents.OnRowContextMenu = " try { ... my event handling code ... } catch (exp) { alert(exp.message); }";

###  OnScroll `String`

Gets or sets the client-side event which will be fired when  is scrolled.

###  OnKeyPress `String`

Gets or sets the client-side event which will be fired when the grid is foused and a key is pressed.

###  OnHierarchyExpanding `String`

Gets or sets the client-side event which is fired before a hierarchy is expanded.

###  OnHierarchyExpanded `String`

Gets or sets the client-side event which is fired after a hierarchy have been expanded.

###  OnHierarchyCollapsing `String`

Gets or sets the client-side event which will be fired before a hierarchy is collapsed.

###  OnHierarchyCollapsed `String`

Gets or sets the client-side event which will be fired after a hierarchy have have been collapsed.

###  OnGroupExpanding `String`

Gets or sets the client-side event which is fired before a group is expanded.

###  OnGroupExpanded `String`

Gets or sets the client-side event which is fired after a group have been expanded.

###  OnGroupCollapsing `String`

Gets or sets the client-side event which is fired before a group is collapsed.

###  OnGroupCollapsed `String`

Gets or sets the client-side event which is fired after a group have been collapsed.

###  OnActiveRowChanging `String`

Gets or sets the client-side event which will be fired before a active row changes.

###  OnActiveRowChanged `String`

Gets or sets the client-side event which will be fired after active row have changed.

###  OnRowDeleting `String`

Gets or sets the client-side event which will be fired before 
            row have been deleted with GridClientDeleteColumn or deleteItem method.

###  OnRowDeleted `String`

Gets or sets the client-side event which will be fired after a 
            row have been deleted with GridClientDeleteColumn or deleteItem method.

###  OnFilterMenuShowing `String`

Gets or sets the client-side event which will be fired before the filter menu is shown.

###  OnPopUpShowing `String`

Gets or sets the client-side event which will fired before a popup is shown.

###  OnCommand `String`

Gets or sets the client-side event which will be fired when a  command occurs.

###  OnUserAction `String`

Gets or sets the client-side event which will be fired when a user performs an action
            to the  control which will cause a postback or change the data.
            The event could be used to popup a dialog and verify if the user is certain in performing
            the current action.

###  OnRowDataBound `String`

Gets or sets the client-side event which will be fired when a
            row is data bound. Note that the event could only be used in 
            client-side data binding scenario.

###  OnBatchEditGetEditorValue `String`

Gets or sets a client-side event which helps in custom implementation of the batch editing functionality.
            Gets the value from the edit control which is positioned in the GridTemplateColumn.EditItemTemplate.

###  OnBatchEditGetCellValue `String`

Gets or sets a client-side event which helps in custom implementation of the batch editing functionality.
            Gets the value from the cell which is positioned in the GridTemplateColumn.ItemTemplate.

###  OnBatchEditSetEditorValue `String`

Gets or sets a client-side event which helps in custom implementation of the batch editing functionality.
            Sets the value from the edit control which is positioned in the GridTemplateColumn.EditItemTemplate.

###  OnBatchEditSetCellValue `String`

Gets or sets a client-side event which helps in custom implementation of the batch editing functionality.
            Sets the value from the cell which is positioned in the GridTemplateColumn.ItemTemplate.

###  OnBatchEditCellValueChanging `String`

Gets or sets the client-side event which will be fired when the  is Batch
            and a cell value is changing. The event could be canceled.

###  OnBatchEditCellValueChanged `String`

Gets or sets the client-side event which will be fired when the  is Batch
            and a cell value have been changed.

###  OnBatchEditOpening `String`

Gets or sets the client-side event which will be fired before opening a cell for edit.

###  OnBatchEditOpened `String`

Gets or sets the client-side event which will be fired after a cell have been opened for edit.

###  OnBatchEditClosing `String`

Gets or sets the client-side event which will be fired before closing a cell for edit.

###  OnBatchEditClosed `String`

Gets or sets the client-side event which will be fired after a cell have been closed for edit.

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

