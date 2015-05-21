---
title: Telerik.Web.UI.RadPivotGrid
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadPivotGrid
---

# Telerik.Web.UI.RadPivotGrid : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadPivotGrid]({%slug Telerik.Web.UI.RadPivotGrid%})*

## Methods

### expandColumnGroupsAtLevel

Expands all column groups at the specified level.

#### Parameters

##### level `Number`

The level which to expand.

#### Returns

`None` 

### get_filterDialog

Gets the RadWindow client-side object for the RadPivotGrid Filtering window dialog.

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` Returns the RadWindow client

### rebind

Performs postback and calls Rebind on the RadPivotGrid.

#### Parameters

#### Returns

`None` 

### get_fieldsWindow

Gets the RadWindow client-side object for the RadPivotGrid FieldsWindow.

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` The RadWindow client

### page

Executes a page command depending on the provided commandName value. The supported values are: "Next", "Prev", "First", "Last".

#### Parameters

##### commandName `String`

The page command name which will be executed.

#### Returns

`None` 

### collapseColumnGroupsAtLevel

Collapses all column groups at the specified level.

#### Parameters

##### level `Number`

The level which to collapse.

#### Returns

`None` 

### get_hzScrollDiv

Returns the DIV element which holds the horizontal scrollbar of the control.

#### Parameters

#### Returns

`None` 

### show

A method which hides the field it is called upon.

#### Parameters

#### Returns

`None` 

### get_verticalScrollDiv

Returns the DIV element which holds the vertical scrollbar of the control.

#### Parameters

#### Returns

`None` 

### get_fieldSettingsWindow

Gets the RadWindow client-side object for the RadPivotGrid field settings window.

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` Returns the RadWindow client

### hide

A method which hides the field it is called upon.

#### Parameters

#### Returns

`None` 

### get_enableToolTips

Gets a value indicating whether toolTips for PivotGrid are enable or not (default is false).

#### Parameters

#### Returns

`Boolean` true if the toolTips are enabled

### get_columnZone

Gets the zone element where all not hidden PivotGridColumnField's are placed.

#### Parameters

#### Returns

`Element` The the zone element where all not hidden PivotGridColumnField

### get_filterWindow

Gets the RadWindow client-side object for the RadPivotGrid Filtering window.

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow` Returns the RadWindow client

### get_fieldSettings

Gets the object holding all properties associated with the field settings window.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridFieldSettings` Returns the object holding all properties associated with the field settings window.

### getFieldByUniqueName

Performs postback and shows the provided field.

#### Parameters

##### fieldOrUniqueName `String`

 The field unique name

#### Returns

`Telerik.Web.UI.PivotGridField`  

### get_zoneContextMenu

EnableZoneContextMenu

#### Parameters

#### Returns

`None` 

### get_columnGroupDescriptionsCount

Returns a number representing the count of the column group descriptions.

#### Parameters

#### Returns

`None` 

### get_pageSize

Gets the maximum number of items that would appear in a page, when paging is enabled by AllowPaging property. Default value is 10.

#### Parameters

#### Returns

`Number` The maximum number of items that could appear in a page.

### expandAllRowGroups

Expands all row groups at the zero level.

#### Parameters

#### Returns

`None` 

### fireCommand

Method which triggers specific command for the pivot grid when executed. The method is called for the RadPivotGrid client instance and its arguments depend on the command which will be processed.

#### Parameters

##### comandName `String`

The name of the command.

##### commandArgument `String`

 The argument of the command otherwise empty string.

#### Returns

`None` 

### set_pageSize

Sets the maximum number of items that would appear in a page, when paging is enabled by AllowPaging property.

#### Parameters

#### Returns

`None` 

### get_currentPageIndex

Gets a value indicating the index of the currently active page in case paging is enabled.

#### Parameters

#### Returns

`Number` The index of the current page.

### get_uniqueID

The UniqueID of the RadPivotGrid instance.

#### Parameters

#### Returns

`String` Returns the UniqueID of the RadPivotGrid instance.

### get_zoneType

Returns a numeric value which corresponds to a member of the Telerik.Web.UI.PivotGridFieldZoneType enumeration

                            which has the following values: "Filter" (1), "Aggregate" (2), "Column" (4), "Row" (8).

#### Parameters

#### Returns

`None` 

### get_pageCount

Gets the number of pages required to display the records of the data source in the RadPivotGrid control.

#### Parameters

#### Returns

`Number` The number of pages required to display the records of the data source.

### collapseAllColumnGroups

Collapses all column groups at the zero level.

#### Parameters

#### Returns

`None` 

### get_configurationPanel

Gets the PivotGridConfigurationPanel client-side object for the RadPivotGrid.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridConfigurationPanel` The PivotGridConfigurationPanel client

### expandRowGroupsAtLevel

Expands all row groups at the specified level.

#### Parameters

##### level `Number`

The level which to expand.

#### Returns

`None` 

### get_rowZone

Gets the zone element where all not hidden PivotGridRowField's are placed.

#### Parameters

#### Returns

`Element` The the zone element where all not hidden PivotGridRowField

### get_owner

A property which gets a reference to the owner RadPivotGrid object.

#### Parameters

#### Returns

`None` 

### get_toolTipManager

Gets the RadToolTipManager client-side object for the PivotGridToolTipManager.

#### Parameters

#### Returns

`Telerik.Web.UI.RadToolTipManager` The RadToolTipManager client

### get_dataTable

The pivot table data table element.

#### Parameters

#### Returns

`Element` The pivot table data table element.

### expandAllColumnGroups

Expands all column groups at the zero level.

#### Parameters

#### Returns

`None` 

### collapseRowGroupsAtLevel

Collapses all row groups at the specified level.

#### Parameters

##### level `Number`

The level which to collapse.

#### Returns

`None` 

### get_aggregateZone

Gets the zone element where all not hidden PivotGridAggregateField's are placed.

#### Parameters

#### Returns

`Element` The the zone element where all not hidden PivotGridAggregateField

### get_contextMenu

Gets the RadMenu client-side object for the RadPivotGrid ContextMenu.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenu` The RadMenu client

### get_uniqueName

A property which returns the unique name of the field.

#### Parameters

#### Returns

`None` 

### set_currentPageIndex

Sets a value indicating the index of the currently active page in case paging is enabled.

#### Parameters

#### Returns

`None` 

### get_scrollHeight

The actual scoll height of the RadPivotGrid client-side element.

#### Parameters

#### Returns

`Number` Returns the actual scoll height of the RadPivotGrid client

### get_rowHeaderTable

The row header table element.

#### Parameters

#### Returns

`Element` Returns the row header table element.

### get_zoneIndex

A property which returns the zone index of the field.

#### Parameters

#### Returns

`None` 

### sort

Sorts the field with optionally provided order.

#### Parameters

##### fieldOrUniqueName `String`

The PivotGridField.UniqueName value or the Telerik.Web.UI.PivotGridField client

##### order `String`

 The order that the field will be sorted. The parameter is optional and if not passed the field will swap its order.

#### Returns

`None` 

### hideField

Performs postback and hides the provided field.

#### Parameters

##### fieldOrUniqueName `String`

 The field unique name

#### Returns

`None` 

### showField

Performs postback and shows the provided field.

#### Parameters

##### fieldOrUniqueName `String`

 The field unique name

#### Returns

`None` 

### get_enableAriaSupport

Gets a value indicating whether WAI-ARIA for RadPivotGrid is enabled or not (default is false).

#### Parameters

#### Returns

`Boolean` true if the WAI

### get_filterZone

Gets the zone element where all not hidden PivotGridReportFilterField's are placed.

#### Parameters

#### Returns

`Element` The the zone element where all not hidden PivotGridReportFilterField

### collapseAllRowGroups

Collapses all row groups at the zero level.

#### Parameters

#### Returns

`None` 

### repaint

Redraws the client side element on the client.

#### Parameters

#### Returns

`None` 

### get_fields

Gets the collection of Telerik.Web.UI.PivotGridField items which are part of the RadPivotGrid.

#### Parameters

#### Returns

`Array`  The collection of Telerik.Web.UI.PivotGridField items which are part of the RadPivotGrid. 

### get_columnHeaderTable

The column header table element.

#### Parameters

#### Returns

`Element` Returns the column header table element.

### get_clientSettings

The RadPivotGrid client settings for the current instance.

#### Parameters

#### Returns

`Object` Returns the RadPivotGrid client settings for the current instance.

### tryReorderField

Tries to reorder the specified field with new ZoneType and/or new ZoneIndex.

#### Parameters

##### fieldOrUniqueName `String`

 The field unique name

##### zoneType `Telerik.Web.UI.PivotGridFieldZoneType`

 The new ZoneType for the field

##### zoneIndex `Number`

The new ZoneIndex for the field

#### Returns

`Boolean` If the reorder happened or not which could happen if the zoneType and zoneIndex are the same

### tryReorder

Telerik.Web.UI.PivotGridFieldZoneType

#### Parameters

#### Returns

`None` 

## Events

### pivotGridCreating

This event is fired when the RadPivotGrid client component is initializing.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### pivotGridCreated

This event is fired when the RadPivotGrid client component is initialized.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### pivotGridDestroying

This event is fired when the RadPivotGrid client component is about to be disposed.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### command

This event will be raised when a client command is executed in RadPivotGrid. The command can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridCommandCancelEventArgs`

The event arguments.

### toolTipShow

The event is raised immediately before the tooltip is shown on the client. Cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridToolTipShowEventArgs`

The event arguments.

### cellClick

The event is raised when the user clicks on a cell from the RadPivotGrid.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridCellEventArgs`

The event arguments.

### cellMouseOver

The event is raised when the user moves the mouse pointer over a cell from the RadPivotGrid.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridCellEventArgs`

The event arguments.

### cellMouseOut

The event is raised when the user moves the mouse pointer out of a cell from the RadPivotGrid.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridCellEventArgs`

The event arguments.

### cellDoubleClick

The event is raised when the user double clicks on a cell from the RadPivotGrid.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridCellEventArgs`

The event arguments.

### cellContextMenu

The event is raised when the user clicks with the right mouse button on a cell from the RadPivotGrid.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridCellEventArgs`

The event arguments.

### menuShowing

The event is raised when the RadContextMenu is about to be shown. The event is cancellable.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridMenuShowingEventArgs`

The event arguments.

### menuShown

The event is raised when the RadContextMenu is shown. The event is not cancellable.

#### Event Data

##### sender `Telerik.Web.UI.RadPivotGrid`

The instance of the RadPivotGrid raised the event.

##### args `Telerik.Web.UI.PivotGridMenuShownEventArgs`

The event arguments.