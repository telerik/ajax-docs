---
title: Overview
page_title: Overview | RadDateInput for ASP.NET AJAX Documentation
description: Overview
slug: input/raddateinput/overview
tags: overview
published: True
position: 0
---

# RadDateInput Overview



**RadDateInput** is a free-form date and time editing control. It shares the [common properties of all RadInput controls]({%slug input/server-side-programming/overview%}), including support for skins, styles for different states, empty message support, conditional postback on text change, flexible caret and button positioning, labels, and so on.

**RadDateInput** assists the user in date and time entry by accepting various date and time formats and tries to recognize them and convert them into valid dates. If the entry is successfully recognized, it is formatted according to the current **DateFormat** and **DisplayDateFormat** property settings and displayed to the user. Erroneous output is signalled to the user by keeping the original text and applying a different, "error" CSS style.

## Specifying the date format

**RadDateInput** uses standard ASP.NET date format strings to format its value. These are described in [Formatting Dates]({%slug input/raddateinput/formatting-dates%}). The date input control uses two different format strings:

* The **DateFormat** property is the format string for the value of the date input control when it has focus (when the user is editing the date).

* The **DisplayDateFormat** property is the format string for the value of the date input control when it does not have focus. If **DisplayDateFormat** is not set, the control uses the value of **DateFormat**.

You can set the **DateFormat** and **DisplayDateFormat** properties by typing an ASP.NET format string directly into the properties pane, or you can use the **RadDateInput** [Smart Tag]({%slug input/design-time/smart-tag%}) to launch the [Date Format Dialog]({%slug input/design-time/date-format-dialog%}) for more assistance. The **Date Format Dialog** lets you choose from pre-defined date/time format strings or view a preview of the effects of a custom format string.

Two other properties influence the way the date format strings are applied:

* The **Culture** property determines the value of culture-dependent symbols in the date format string, such as the names of the days of the week.

* The **ShortYearCenturyEnd** property determines how year values are mapped to two-digit representations. When you set the **ShortYearCenturyEnd** property, the value of the **ShortYearCenturyStart** property is automatically set to a value that is 99 years less. Dates with years falling between **ShortYearCenturyStart** and **ShortYearCenturyEnd** (inclusive) can be displayed using the last two digits of the year portion. Dates that fall outside that range generate an error.

## Parsing input

The user does not need to conform to the format that is the value of the **DateFormat** property when entering values. The **RadDateInput** control tries to parse any input according to the value of the **Culture** property and the **ShortYearCenturyEnd** property (as needed). For details on how **RadDateInput** parses user input, see [Parsing Dates]({%slug input/raddateinput/parsing-dates%}).

## Increment controls

In addition to typing numbers directly into the date input control, you can also let users increment or decrement the current value using the arrow keys or mouse wheel. The **IncrementSettings** property controls how the date input control changes its value in response to the arrow keys or mouse wheel. **IncrementSettings** is a composite property with the following sub-properties:

* **InterceptArrowKeys**: When **InterceptArrowKeys** is **True**, the user can use the arrow keys to change the value.See [Keyboard Support]({%slug input/accessibility-and-internationalization/keyboard-support%}) for details.

* **InterceptMouseWheel**: When **InterceptMouseWheel** is **True**, the user can use the mouse wheel to change the value. See [Mouse Wheel Support]({%slug input/accessibility-and-internationalization/mouse-wheel-support%}) for details.

* **Step**: Step specifies the magnitude by which the value changes with each click of an arrow key or movement of the mouse wheel.

## Limiting the range

Use the **MaxDate** and **MinDate** properties to specify a range for the date input control. If the user tries to enter a value that is greater than the value of the **MaxDate** property or less than the **MinDate** property, the date input control signals the user that there is a problem by applying the "error" CSS style and does not update its value.

## Date input value

**RadDateInput** uses the **SelectedDate** property to represent its value.

# See Also

 * [RadDateInput Client Object]({%slug input/client-side-programming/raddateinput-client-object%})
