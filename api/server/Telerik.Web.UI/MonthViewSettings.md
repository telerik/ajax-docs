---
title: Telerik.Web.UI.MonthViewSettings
page_title: Telerik.Web.UI.MonthViewSettings
description: Telerik.Web.UI.MonthViewSettings
---

# Telerik.Web.UI.MonthViewSettings

Represents settings for RadScheduler's Month view.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.ViewSettings
* Telerik.Web.UI.GroupableViewSettings
* Telerik.Web.UI.MonthViewSettings

## Properties

###  AdaptiveRowHeight `Boolean`

Gets or sets a value indicating whether the height of each row
            	should be adjusted to match the height of its content.

#### Remarks
By default, all rows are rendered with the same height.
            	This property allows you to change this behaviour.

###  ColumnHeaderDateFormat `String`

Gets or sets the column header date format string in Month View.

#### Remarks
For additional information, please read this
            MSDN article.

###  DayHeaderDateFormat `String`

Gets or sets the day header date format string in Month View.

#### Remarks
For additional information, please read this
            MSDN article.

###  FirstDayHeaderDateFormat `String`

Gets or sets the first day of month header date format in Month View.

#### Remarks
For additional information, please read this
            MSDN article.

###  GroupBy `String`

Gets or sets the resource to group by.

###  GroupingDirection `GroupingDirection`

Gets or sets the resource grouping direction.

###  HeaderDateFormat `String`

Gets or sets the RadScheduler's header date format string in Month View.

#### Remarks
For additional information, please read this
            MSDN article.

###  MinimumRowHeight `Int32`

Gets or sets a value indicating the minimum row height in month view.

#### Remarks
This property is ignored when AdaptiveRowHeight
            	is set to true.

###  ReadOnly `Boolean`

Gets or sets a value indicating whether the view is in read-only mode.

#### Remarks
By default the user is able to insert, edit and delete appointments. Use the ReadOnly to disable the editing capabilities of RadScheduler.

###  ShowDateHeaders `Boolean`

Gets or sets a value indicating whether to render date headers for the current view.

###  ShowResourceHeaders `Boolean`

Gets or sets a value indicating whether to render resource headers for the current view.

###  UserSelectable `Boolean`

Gets or sets a value indicating whether to render a tab for the current view in the view chooser.

###  VisibleAppointmentsPerDay `Int32`

Gets or sets a value indicating the number of visible appointments per day in month view.

#### Remarks
A link button navigating to the specific date will be rendered when
            	the number of appointments exceeds this value.

