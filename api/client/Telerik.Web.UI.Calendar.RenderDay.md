---
title: Telerik.Web.UI.Calendar.RenderDay
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.Calendar.RenderDay  

## Methods

###  IsRecurring

Indicates the recurrence patterns that include the day. The value is one of the following: 1: DayInMonth, 2: DayAndMonth, 4: Week, 8: WeekAndMonth, 16: Today, 32: None

#### Parameters

##### compareDate `Array`

##### calendarView `Number`

#### Returns

`None` 

###  get_date

Returns the triplet for the day represented by the render day object.

#### Parameters

#### Returns

`Array` 

###  get_isSelectable

Returns true if the day can be selected.

#### Parameters

#### Returns

`Boolean` 

###  get_isSelected

returns true if the day is selected.

#### Parameters

#### Returns

`Boolean` 

###  get_isToday

Returns true if the day has today's date

#### Parameters

#### Returns

`Boolean` 

###  get_isWeekend

Returns true if the day falls on a weekend.

#### Parameters

#### Returns

`Boolean` 

###  set_date

Sets the date of the render day object to the date encoded by the triplet.

#### Parameters

##### value `Array`

#### Returns

`None` 


