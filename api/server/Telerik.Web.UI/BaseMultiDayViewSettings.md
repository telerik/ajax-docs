---
title: Telerik.Web.UI.BaseMultiDayViewSettings
page_title: Telerik.Web.UI.BaseMultiDayViewSettings
description: Telerik.Web.UI.BaseMultiDayViewSettings
---

# Telerik.Web.UI.BaseMultiDayViewSettings

This abstract class defines the Bas eMultiDayView Settings.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.ViewSettings
* Telerik.Web.UI.GroupableViewSettings
* Telerik.Web.UI.BaseMultiDayViewSettings

## Properties

###  DayEndTime `TimeSpan`

Gets or sets the time used to denote the end of the day.

###  DayStartTime `TimeSpan`

Gets or sets the time used to denote the start of the day.

###  EnableExactTimeRendering `Boolean`

Gets or sets a value indicating whether the appointment start and end time should be rendered exactly.

###  GroupBy `String`

Gets or sets the resource to group by.

###  GroupingDirection `GroupingDirection`

Gets or sets the resource grouping direction.

###  HeaderDateFormat `String`

Gets or sets the header date format.

###  ReadOnly `Boolean`

Gets or sets a value indicating whether the view is in read-only mode.

#### Remarks
By default the user is able to insert, edit and delete appointments. Use the ReadOnly to disable the editing capabilities of RadScheduler.

###  ShowAllDayInsertArea `Boolean`

Gets or sets a boolean value that specifies whether to
            	show an empty area at the end of each AllDay time slot that can
            	be used to insert appointments.

#### Remarks
The insert area is not visible if the scheduler is in read-only mode or
            	AllowInsert is false.
            	
            	If all time slots are full and this property is set to false,
            	the user will not be able to insert appointments.

###  ShowDateHeaders `Boolean`

Gets or sets a value indicating whether to render date headers for the current view.

###  ShowHiddenAppointmentsIndicator `Boolean`

Gets or sets a value indicating whether to render indicator for appointments
            that are not visible when displaying only working hours, but will become visible when
            displaying the full day.

###  ShowHoursColumn `Boolean`

Gets or sets a value indicating whether to render the hours column in day and week view.

###  ShowInsertArea `Boolean`

Gets or sets a boolean value that specifies whether to
            	show an empty area at the end of each time slot that can
            	be used to insert appointments.

#### Remarks
The insert area is not visible if the scheduler is in read-only mode or
            	AllowInsert is false.

###  ShowResourceHeaders `Boolean`

Gets or sets a value indicating whether to render resource headers for the current view.

###  UserSelectable `Boolean`

Gets or sets a value indicating whether to render a tab for the current view in the view chooser.

###  WorkDayEndTime `TimeSpan`

Gets or sets the time used to denote the end of the work day.

#### Remarks
The effect from this property is only visual.

###  WorkDayStartTime `TimeSpan`

Gets or sets the time used to denote the start of the work day.

#### Remarks
The effect from this property is only visual.

