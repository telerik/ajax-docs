---
title: Telerik.Web.UI.Calendar.View.MonthView
page_title: Telerik.Web.UI.Calendar.View.MonthView
description: Telerik.Web.UI.Calendar.View.MonthView
---

# Telerik.Web.UI.Calendar.View.MonthView

Summary description for CalendarView.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Calendar.View.CalendarView
* Telerik.Web.UI.Calendar.View.MonthView

## Properties

###  MonthStartDate `DateTime`

Gets the month start date.

###  MonthEndDate `DateTime`

Gets the month end date.

###  TitleFormat `String`

Gets or sets the string format of the title.

###  ParentCalendar `RadCalendar`

Gets or sets the parent  controls.

###  Parent `CalendarView`

Gets or sets the parent .

###  ID `String`

Gets or sets the ID of the .
            Returns the parent  ClientID if 
            the view is TopView.

###  ChildViews `CalendarViewCollection`

Gets the current  child 
            views as a .

###  Orientation `Orientation`

RenderInRows - Renders the calendar data row after row.
            RenderInColumns - Renders the calendar data column after column.
            None - Enforces fallback to the default Orientation for Telerik RadCalendar.

###  TitleContent `String`

Gets the title text.

###  IsHidden `Boolean`

Gets or sets if the  is hidden.

###  PresentationType `PresentationType`

The presentation type which describes how RadCalendar will handle its layout, and how will
            react to user interaction. Interactive - user is allowed to select dates, navigate,
            etc. Preview - does not allow user interaction, for presentation purposes only.

###  ShowCalendarViewHeader `Boolean`

Gets or sets if the calendar view header will be visible.

###  ShowColumnHeaders `Boolean`

Gets or sets if the column headers will be visible.

###  ShowRowHeaders `Boolean`

Gets or sets if the row headers will be visible.

###  UseRowHeadersAsSelectors `Boolean`

Gets or sets if the row headers will be used as selectors.

###  UseColumnHeadersAsSelectors `Boolean`

Gets or sets if the column headers will be used as selectors.

###  EnableViewSelector `Boolean`

Gets or sets if the view selector is enabled.

###  EnableMultiView `Boolean`

Gets or sets if MultiView Mode is enabled\disabled.

###  EnableMultiSelect `Boolean`

Gets or sets if the multi selection of dates will be enabled\disabled.

###  IsSingleView `Boolean`

Gets if the MultiView Mode is enabled.

###  IsTopView `Boolean`

Gets if the view the top view or part of the child  views.

###  IsInitialized `Boolean`

Gets or sets if the calendar view is initialized.

###  MultiViewRows `Int32`

Gets the number of rows for the multi view.

###  MultiViewColumns `Int32`

Gets the number of columns for the multi view.

###  DefaultRow `Int32`

Gets the default row index.

###  DefaultColumn `Int32`

Gets the default column index.

###  SingleViewWidth `Unit`

Gets or sets the width of the single view.

###  SingleViewHeight `Unit`

Gets or sets the height of the single view.

###  HeaderSettings `TableItemStyle`

Gets or sets the header .

###  ViewSettings `TableItemStyle`

Gets or sets the view .

###  TitleAlign `HorizontalAlign`

Gets or sets the title alignment.

###  CurrentViewBeginDate `DateTime`

Gets or sets the current view begin date.

###  CurrentViewEndDate `DateTime`

Gets or sets the current view end date.

###  PreviousView `CalendarView`

Gets the previous .

###  NextView `CalendarView`

Gets the next .

###  Title `String`

Gets or sets the calendar view title.

###  ConditionsErrorMessage `String`

Gets or sets the conditions error message which will 
            be displayed if there any errors in the settings.

###  SingleViewRows `Int32`

Gets the number of rows in the .

###  SingleViewColumns `Int32`

Gets the single view columns.

###  RowSelectorText `String`

Gets or sets the row selector text.

###  RowHeaderImage `String`

Gets or sets the row header image.

###  ColumnHeaderText `String`

Gets or sets the column header text.

###  ColumnHeaderImage `String`

Gets or sets the column header image.

###  ViewSelectorText `String`

Gets or sets the view selector text.

###  ViewSelectorImage `String`

Gets or sets the view selector image.

###  ViewStartDate `DateTime`

Gets or sets the view start date.

###  ViewEndDate `DateTime`

Gets or sets the view end date.

## Methods

###  CreateCalendarView

#### Returns

`Telerik.Web.UI.Calendar.View.CalendarView` 

###  EnsureRenderSettings

#### Returns

`System.Void` 

###  EnsureRenderSettings

#### Returns

`System.Void` 

###  CreateCalendarView

#### Returns

`Telerik.Web.UI.Calendar.View.CalendarView` 

###  GetClientData

Returns an ArrayList of all properties of RadCalendar that are to be exported on the client.

#### Returns

`System.Collections.ArrayList` 

