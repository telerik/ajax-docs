---
title: Telerik.Web.UI.Calendar.View.MonthView
page_title: Telerik.Web.UI.Calendar.View.MonthView
description: Telerik.Web.UI.Calendar.View.MonthView
---

# Telerik.Web.UI.Calendar.View.MonthView

MonthView object that represents the current View, corresponding to the specified day to render.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Calendar.View.CalendarView
* Telerik.Web.UI.Calendar.View.MonthView

## Properties

###  ChildViews `CalendarViewCollection`

Gets the current  child 
            views as a .

###  ColumnHeaderImage `String`

Gets or sets the column header image.

###  ColumnHeaderText `String`

Gets or sets the column header text.

###  ConditionsErrorMessage `String`

Gets or sets the conditions error message which will 
            be displayed if there any errors in the settings.

###  CurrentViewBeginDate `DateTime`

Gets or sets the current view begin date.

###  CurrentViewEndDate `DateTime`

Gets or sets the current view end date.

###  DefaultColumn `Int32`

Gets the default column index.

###  DefaultRow `Int32`

Gets the default row index.

###  EnableMultiSelect `Boolean`

Gets or sets if the multi selection of dates will be enabled\disabled.

###  EnableMultiView `Boolean`

Gets or sets if MultiView Mode is enabled\disabled.

###  EnableViewSelector `Boolean`

Gets or sets if the view selector is enabled.

###  HeaderSettings `TableItemStyle`

Gets or sets the header .

###  ID `String`

Gets or sets the ID of the .
            Returns the parent  ClientID if 
            the view is TopView.

###  IsHidden `Boolean`

Gets or sets if the  is hidden.

###  IsInitialized `Boolean`

Gets or sets if the calendar view is initialized.

###  IsSingleView `Boolean`

Gets if the MultiView Mode is enabled.

###  IsTopView `Boolean`

Gets if the view the top view or part of the child  views.

###  MonthEndDate `DateTime`

Gets the month end date.

###  MonthStartDate `DateTime`

Gets the month start date.

###  MultiViewColumns `Int32`

Gets the number of columns for the multi view.

###  MultiViewRows `Int32`

Gets the number of rows for the multi view.

###  NextView `CalendarView`

Gets the next .

###  Orientation `Orientation`

RenderInRows - Renders the calendar data row after row.
            RenderInColumns - Renders the calendar data column after column.
            None - Enforces fallback to the default Orientation for Telerik RadCalendar.

###  Parent `CalendarView`

Gets or sets the parent .

###  ParentCalendar `RadCalendar`

Gets or sets the parent  controls.

###  PresentationType `PresentationType`

The presentation type which describes how RadCalendar will handle its layout, and how will
            react to user interaction. Interactive - user is allowed to select dates, navigate,
            etc. Preview - does not allow user interaction, for presentation purposes only.

###  PreviousView `CalendarView`

Gets the previous .

###  RowHeaderImage `String`

Gets or sets the row header image.

###  RowSelectorText `String`

Gets or sets the row selector text.

###  ShowCalendarViewHeader `Boolean`

Gets or sets if the calendar view header will be visible.

###  ShowColumnHeaders `Boolean`

Gets or sets if the column headers will be visible.

###  ShowRowHeaders `Boolean`

Gets or sets if the row headers will be visible.

###  SingleViewColumns `Int32`

Gets the single view columns.

###  SingleViewHeight `Unit`

Gets or sets the height of the single view.

###  SingleViewRows `Int32`

Gets the number of rows in the .

###  SingleViewWidth `Unit`

Gets or sets the width of the single view.

###  Title `String`

Gets or sets the calendar view title.

###  TitleAlign `HorizontalAlign`

Gets or sets the title alignment.

###  TitleContent `String`

Gets the title text.

###  TitleFormat `String`

Gets or sets the string format of the title.

###  UseColumnHeadersAsSelectors `Boolean`

Gets or sets if the column headers will be used as selectors.

###  UseRowHeadersAsSelectors `Boolean`

Gets or sets if the row headers will be used as selectors.

###  ViewEndDate `DateTime`

Gets or sets the view end date.

###  ViewSelectorImage `String`

Gets or sets the view selector image.

###  ViewSelectorText `String`

Gets or sets the view selector text.

###  ViewSettings `TableItemStyle`

Gets or sets the view .

###  ViewStartDate `DateTime`

Gets or sets the view start date.

## Methods

###  GetClientData

Returns an ArrayList of all properties of RadCalendar that are to be exported on the client.

#### Returns

`System.Collections.ArrayList` 

###  GetEffectiveVisibleDate

GetEffectiveVisibleDate method. Returns the effective visible date.
            Usage is demonstrated in the Title Customization topic

#### Returns

`System.DateTime` DateTime object

###  GetEffectiveVisibleDate

GetEffectiveVisibleDate method. Returns the effective visible date.
            Usage is demonstrated in the Title Customization topic

#### Returns

`System.DateTime` DateTime object

