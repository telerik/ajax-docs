---
title: Telerik.Web.UI.Calendar.MonthYearFastNavigation
title_prefix: Client-side API Reference
description: Telerik.Web.UI.Calendar.MonthYearFastNavigation
slug: Telerik.Web.UI.Calendar.MonthYearFastNavigation
---

# Telerik.Web.UI.Calendar.MonthYearFastNavigation  

## Inheritance Hierarchy

* *[Telerik.Web.UI.Calendar.MonthYearFastNavigation]({%slug Telerik.Web.UI.Calendar.MonthYearFastNavigation%})*


## Methods

###  AddMonthCell

Add cell for the specified month.

#### Parameters

##### row `Element`

The TR element to wchich the cell will be added.

##### monthIndex `Number`

The index of the month in which the cell will be added.

#### Returns

`None` 

### CreateButton

Creates a button with specified elementId, text, onClick event handler and append it to the parentNode element.

#### Parameters

##### elementId `String`

The ID to be used for the input.

##### parentNode `Element`

The parent element to which the input will be attached.

##### text `String`

The text that will be set as a value to the input element.

##### onclickFunc `Function`

The event handler for the OnClick function.

#### Returns

`None` 

### CreateLayout

Creates the base layout for RadCalendar.

#### Parameters

##### style `String`

The style to be used for the table.

#### Returns

`None` 

### FillYears

Fill the available years in the fast navigation section.

#### Parameters

#### Returns

`None` 

### GetMonth

Returns the current month.

#### Parameters

#### Returns

`Date` DateTime object that represents the current month.

### GetYear

Returns the current year.

#### Parameters

#### Returns

`Date` DateTime object that represents the current year.

### ScrollYears

Scrolls to the specified year.

#### Parameters

##### step `Number`

How many years should be added to the current one.

#### Returns

`None` 

### SelectCell

Selects or deselects the specified cell.

#### Parameters

##### cell `Element`

The element to be selected

##### selected `Boolean`

Boolean value to indicate whether the cell should be selected or not.

#### Returns

`None` 

### SelectMonth

Selects the specified month.

#### Parameters

##### month `Date`

The month to be selected.

#### Returns

`None` 

### SelectYear

Selects the specified year.

#### Parameters

##### year `Date`

#### Returns

`None` 

### SetNavCells

set the navigation cells.

#### Parameters

#### Returns

`None` 

### Show

Shows the pop up window.

#### Parameters

##### popup `Object`

The window that will hold the content of the pop up.

##### x `Number`

The X coordinate of the window.

##### y `Number`

The Y coordinate of the window.

##### month `Date`

##### year `Date`

The year to be displayed.

##### exitFunc `Function`

Function that should be executed on exit.

##### style `String`

String containing the style attributes that will be applied to the table element.

#### Returns

`None` 

### ShowMonthYearView

Displays the month-year view.

#### Parameters

##### popup `Object`

The window that will hold the content of the pop up.

##### x `Number`

The X coordinate of the window.

##### y `Number`

The Y coordinate of the window.

##### month `Date`

The month to be displayed.

##### year `Date`

The year to be displayed.

##### exitFunc `Function`

Function that should be executed on exit.

##### style `String`

String containing the style attributes that will be applied to the table element.

##### ownerId `String`

The ID fo of the wrapper element.

#### Returns

`None` 



