---
title: RadDateInput Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: input/raddateinput/overview
tags: overview
published: True
position: 0
---

# RadDateInput Overview



__RadDateInput__ is a free-form date and time editing control. It shares the [common properties of all RadInput controls]({%slug input/server-side-programming/overview%}), including support for skins, styles for different states, empty message support, conditional postback on text change, flexible caret and button positioning, labels, and so on.

__RadDateInput__ assists the user in date and time entry by accepting various date and time formats and tries to recognize them and convert them into valid dates. If the entry is successfully recognized, it is formatted according to the current __DateFormat__ and __DisplayDateFormat__ property settings and displayed to the user. Erroneous output is signalled to the user by keeping the original text and applying a different, "error" CSS style.

## Specifying the date format

__RadDateInput__ uses standard ASP.NET date format strings to format its value. These are described in [Formatting Dates]({%slug input/raddateinput/formatting-dates%}). The date input control uses two different format strings:

* The __DateFormat__ property is the format string for the value of the date input control when it has focus (when the user is editing the date).

* The __DisplayDateFormat__ property is the format string for the value of the date input control when it does not have focus. If __DisplayDateFormat__ is not set, the control uses the value of __DateFormat__.

You can set the __DateFormat__ and __DisplayDateFormat__ properties by typing an ASP.NET format string directly into the properties pane, or you can use the __RadDateInput__[Smart Tag]({%slug input/design-time/smart-tag%}) to launch the [Date Format Dialog]({%slug input/design-time/date-format-dialog%}) for more assistance. The __Date Format Dialog__ lets you choose from pre-defined date/time format strings or view a preview of the effects of a custom format string.

Two other properties influence the way the date format strings are applied:

* The __Culture__ property determines the value of culture-dependent symbols in the date format string, such as the names of the days of the week.

* The __ShortYearCenturyEnd__ property determines how year values are mapped to two-digit representations. When you set the __ShortYearCenturyEnd__ property, the value of the __ShortYearCenturyStart__ property is automatically set to a value that is 99 years less. Dates with years falling between __ShortYearCenturyStart__ and __ShortYearCenturyEnd__ (inclusive) can be displayed using the last two digits of the year portion. Dates that fall outside that range generate an error.

## Parsing input

The user does not need to conform to the format that is the value of the __DateFormat__ property when entering values. The __RadDateInput__ control tries to parse any input according to the value of the __Culture__ property and the __ShortYearCenturyEnd__ property (as needed). For details on how __RadDateInput__parses user input, see [Parsing Dates]({%slug input/raddateinput/parsing-dates%}).

## Increment controls

In addition to typing numbers directly into the date input control, you can also let users increment or decrement the current value using the arrow keys or mouse wheel. The __IncrementSettings__ property controls how the date input control changes its value in response to the arrow keys or mouse wheel. __IncrementSettings__ is a composite property with the following sub-properties:

* __InterceptArrowKeys__: When __InterceptArrowKeys__ is __True__, the user can use the arrow keys to change the value.See [Keyboard Support]({%slug input/accessibility-and-internationalization/keyboard-support%}) for details.

* __InterceptMouseWheel__: When __InterceptMouseWheel__ is __True__, the user can use the mouse wheel to change the value. See [Mouse Wheel Support]({%slug input/accessibility-and-internationalization/mouse-wheel-support%}) for details.

* __Step__: Step specifies the magnitude by which the value changes with each click of an arrow key or movement of the mouse wheel.

## Limiting the range

Use the __MaxDate__ and __MinDate__ properties to specify a range for the date input control. If the user tries to enter a value that is greater than the value of the __MaxDate__property or less than the __MinDate__ property, the date input control signals the user that there is a problem by applying the "error" CSS style and does not update its value.

## Date input value

__RadDateInput__uses the __SelectedDate__property to represent its value.

# See Also

 * [RadDateInput Client Object]({%slug input/client-side-programming/raddateinput-client-object%})
