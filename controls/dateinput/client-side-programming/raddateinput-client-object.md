---
title: RadDateInput Client Object
page_title: RadDateInput Client Object | RadDateInput for ASP.NET AJAX Documentation
description: RadDateInput Client Object
slug: raddateinput/client-side-programming/raddateinput-client-object
tags: raddateinput,client,object
published: True
position: 4
---

# RadDateInput Client Object



##

The following table lists the most important properties/methods of the **RadDateInput**client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_value** |none|string|Returns the value of the control as a string.|
| **set_value** |string, Date|none|Sets the value of the control.|
| **get_editValue** |none|string|Gets the value of the control as it is formatted when the control has focus.|
| **get_displayValue** |none|string|Gets the value of the control as it is formatted when the control does not have focus.|
| **get_textBoxValue** |none|string|Gets the string that the user typed into the control.|
| **get_selectedDate** |none|Date|Gets the value of the control as a Date value.|
| **set_selectedDate** |Date|none|Sets the value of the control.|
| **get_caretPosition** |none|integer|Returns the current position of the caret.|
| **set_caretPosition** |integer|none|Sets the position of the caret.|
| **get_styles** |none|InputStyles|Returns the InputStyles Client object, which can be used to change the appearance of the input control when it is first loaded.|
| **get_autoPostBack** |none|boolean|Returns the value of the **AutoPostBack** property.|
| **set_autoPostBack** |boolean|none|Enables or disables postbacks when the user changes the text in the input control.|
| **get_enabled** |none|boolean|Returns **true** if the input control is enabled.|
| **get_showButton** |none|boolean|Returns **true** if the input control has an associated image button.|
| **get_selectionOnFocus** |none|Telerik.Web.UI.SelectionOnFocus|Returns the value of the SelectionOnFocus property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| **set_selectionOnFocus** |Telerik.Web.UI.SelectionOnFocus|none|Sets the SelectionOnFocus property.|
| **get_emptyMessage** |none|string|Returns the message that appears when the value is not set.|
| **set_emptyMessage** |string|none|Sets the message that appears when the value is not set.|
| **get_element** |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| **get_wrapperElement** |none|HTML element|Gets the DOM element for the wrapper element.|
| **get_dateFormat** |none|string|Returns the format string for the control when it has focus.|
| **get_displayDateFormat** |none|string|Returns the format string for the control when it does not have focus.|
| **get_dateFormatInfo** |none|[DateFormatInfo]({%slug raddateinput/client-side-programming/dateformatinfo-client-object%})|Returns the Date Format Info object, which includes the settings used to parse date values.|
| **get_minDate** |none|Date|Returns the earliest valid date value.|
| **set_minDate** |Date|none|Sets the earliest date the user can enter.|
| **get_maxDate** |none|Date|Returns the latest valid date value.|
| **set_maxDate** |Date|none|Sets the latest date the user can enter.|
| **get_incrementSettings** |none|IncrementSettings|Returns the Increment Settings object, which you can use to change the way the control responds to arrow keys and the mouse wheel.|
| **get_visible** |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| **set_visible** |boolean|none|Sets the input element as hidden on the client|

Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **parseDate** |string|Date|Parses a string using the DateFormatInfo object and returns the resulting date.|
| **selectAllText** |none|none|Selects all text in the control.|
| **selectText** |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| **isReadOnly** |none|boolean|Returns **true** of the control is read-only.|
| **isEmpty** |none|boolean|Returns **true** if the value has not been set.|
| **enable** |none|none|Enables the date input control.|
| **disable** |none|none|Disables the date input control.|
| **focus** |none|none|Sets focus to the control so that the user can edit its value.|
| **blur** |none|none|Removes focus from the control, moving it to the next control in the tab order of the page.|
| **clear** |none|none|Clears the value of the control.|
