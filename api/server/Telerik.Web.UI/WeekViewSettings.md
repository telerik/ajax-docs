---
title: Telerik.Web.UI.WeekViewSettings
page_title: Telerik.Web.UI.WeekViewSettings
description: Telerik.Web.UI.WeekViewSettings
---

# Telerik.Web.UI.WeekViewSettings

Represents settings for RadScheduler's week view.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.ViewSettings
* Telerik.Web.UI.GroupableViewSettings
* Telerik.Web.UI.BaseMultiDayViewSettings
* Telerik.Web.UI.WeekViewSettings

## Properties

###  HeaderDateFormat `String`

Gets or sets the week header date format string.

#### Remarks
For additional information, please read this
            MSDN article.

###  ColumnHeaderDateFormat `String`

Gets or sets the week column header date format string.

#### Remarks
For additional information, please read this
            MSDN article.

###  HeaderDateFormat `String`

Gets or sets the header date format.

###  DayStartTime `TimeSpan`

Gets or sets the time used to denote the start of the day.

###  DayEndTime `TimeSpan`

Gets or sets the time used to denote the end of the day.

###  WorkDayStartTime `TimeSpan`

Gets or sets the time used to denote the start of the work day.

#### Remarks
The effect from this property is only visual.

###  WorkDayEndTime `TimeSpan`

Gets or sets the time used to denote the end of the work day.

#### Remarks
The effect from this property is only visual.

###  ShowHoursColumn `Boolean`

Gets or sets a value indicating whether to render the hours column in day and week view.

###  ShowHiddenAppointmentsIndicator `Boolean`

Gets or sets a value indicating whether to render indicator for appointments
            that are not visible when displaying only working hours, but will become visible when
            displaying the full day.

###  ShowAllDayInsertArea `Boolean`

Gets or sets a boolean value that specifies whether to
            	show an empty area at the end of each AllDay time slot that can
            	be used to insert appointments.

#### Remarks
The insert area is not visible if the scheduler is in read-only mode or
            	AllowInsert is false.
            	
            	If all time slots are full and this property is set to false,
            	the user will not be able to insert appointments.

###  ShowInsertArea `Boolean`

Gets or sets a boolean value that specifies whether to
            	show an empty area at the end of each time slot that can
            	be used to insert appointments.

#### Remarks
The insert area is not visible if the scheduler is in read-only mode or
            	AllowInsert is false.

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

