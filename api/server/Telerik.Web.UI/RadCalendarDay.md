---
title: Telerik.Web.UI.RadCalendarDay
page_title: Telerik.Web.UI.RadCalendarDay
description: Telerik.Web.UI.RadCalendarDay
---

# Telerik.Web.UI.RadCalendarDay

RadCalendarDay represents a object that maps date value to corresponding visual settings.
            Also the object implements Boolean properties that represent the nature of the selected date - 
            whether it is a weekend, disabled or selected in the context of the calendar. Mostly the values
            of those properties are set at runtime when a RadCalendarDay instance is constructed and passed
            to the DayRender event.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Calendar.Persistence.PropertiesObject : IStateManager
* Telerik.Web.UI.Calendar.View.RichUITemplateControl
* Telerik.Web.UI.RadCalendarDay

## Properties

###  Date `DateTime`

Gets or sets the date represented by this RadCalendarDay.

###  ItemStyle `TableItemStyle`

Gets the style properties for the RadCalendarDay
            instance.

###  IsSelectable `Boolean`

Gets or sets a value indicating whether the RadCalendarDay is qualified as available for selection.

###  IsSelected `Boolean`

Gets or sets a value indicating whether the RadCalendarDay is selected

###  IsDisabled `Boolean`

Gets or sets a value indicating whether the RadCalendarDay is disabled

###  IsToday `Boolean`

Gets or sets a value indicating whether the RadCalendarDay represents the current date.

###  Repeatable `RecurringEvents`

Gets or sets a value indicating whether the RadCalendarDay settings are repeated/recurring through out the valid
            date range displayed by the calendar.

#### Remarks
The RecurringEvents enumeration determines which part of the date is handled (day or day and month).

###  IsWeekend `Boolean`

Gets or sets a value indicating whether the RadCalendarDay is mapped to a date that represents a non working
            day/weekend.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the calendar day.

###  TemplateID `String`

Persists the ID of the template used by this instance of RichUITemplateControl if 
            any. The TemplateID could be used to index the Templates collection and instantiate
            the required template.

## Methods

###  IsRecurring

Determines whether the specified compare time is recurring.

#### Parameters

#### compareTime `System.DateTime`

The compare time.

#### currentCalendar `Telerik.Web.UI.RadCalendar`

The current calendar.

#### Returns

`Telerik.Web.UI.Calendar.RecurringEvents` 

###  GetClientData

#### Returns

`System.Collections.ArrayList` 

###  Reset

Reset all properties to their defaults.

#### Returns

`System.Void` 

###  GetClientData

#### Returns

`System.Collections.ArrayList` 

