---
title: Telerik.Web.UI.TimelineViewSettings
page_title: Telerik.Web.UI.TimelineViewSettings
description: Telerik.Web.UI.TimelineViewSettings
---

# Telerik.Web.UI.TimelineViewSettings

Represents settings for the time line view.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.ViewSettings
* Telerik.Web.UI.GroupableViewSettings
* Telerik.Web.UI.TimelineViewSettings

## Properties

###  StartTime `TimeSpan`

The starting time of the Timeline view.

###  NumberOfSlots `Int32`

The number of slots to display in timeline view.

###  SlotDuration `TimeSpan`

The duration of each slot in timeline view.

###  HeaderDateFormat `String`

Gets or sets the Timeline view header date format string.

#### Remarks
For additional information, please read this
            MSDN article.

###  ColumnHeaderDateFormat `String`

Gets or sets the timeline column header date format string.

#### Remarks
For additional information, please read this
            MSDN article.

###  TimeLabelSpan `Int32`

Gets or sets the number of rows/columns each time label spans.

###  SortingMode `AppointmentSortingMode`

Gets or sets a value that specifies the sorting mode to use when rendering the appointments.

###  ShowInsertArea `Boolean`

Gets or sets a boolean value that specifies whether to
            	show an empty area at the end of each time slot that can
            	be used to insert appointments.

#### Remarks
The insert area is not visible if the scheduler is in read-only mode or
            	AllowInsert is false.
            	
            	If all time slots are full and this property is set to false,
            	the user will not be able to insert appointments.

###  EnableExactTimeRendering `Boolean`

Gets or sets a value indicating whether the appointment start and end time should be rendered exactly.

###  GroupBy `String`

Gets or sets the resource to group by.

###  GroupingDirection `GroupingDirection`

Gets or sets the resource grouping direction.

###  ShowResourceHeaders `Boolean`

Gets or sets a value indicating whether to render resource headers for the current view.

###  ReadOnly `Boolean`

Gets or sets a value indicating whether the view is in read-only mode.

#### Remarks
By default the user is able to insert, edit and delete appointments. Use the ReadOnly to disable the editing capabilities of RadScheduler.

###  ShowDateHeaders `Boolean`

Gets or sets a value indicating whether to render date headers for the current view.

###  UserSelectable `Boolean`

Gets or sets a value indicating whether to render a tab for the current view in the view chooser.

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

