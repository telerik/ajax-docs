---
title: RadDateInput Client Object
page_title: RadDateInput Client Object | UI for ASP.NET AJAX Documentation
description: RadDateInput Client Object
slug: input/client-side-programming/raddateinput-client-object
tags: raddateinput,client,object
published: True
position: 4
---

# RadDateInput Client Object



## 

The following table lists the most important properties/methods of the __RadDateInput__client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_value__ |none|string|Returns the value of the control as a string.|
| __set_value__ |string, Date|none|Sets the value of the control.|
| __get_editValue__ |none|string|Gets the value of the control as it is formatted when the control has focus.|
| __get_displayValue__ |none|string|Gets the value of the control as it is formatted when the control does not have focus.|
| __get_textBoxValue__ |none|string|Gets the string that the user typed into the control.|
| __get_selectedDate__ |none|Date|Gets the value of the control as a Date value.|
| __set_selectedDate__ |Date|none|Sets the value of the control.|
| __get_caretPosition__ |none|integer|Returns the current position of the caret.|
| __set_caretPosition__ |integer|none|Sets the position of the caret.|
| __get_styles__ |none|[InputStyles]({%slug input/client-side-programming/inputstyles-client-object%})|Returns the InputStyles Client object, which can be used to change the appearance of the input control when it is first loaded.|
| __get_autoPostBack__ |none|boolean|Returns the value of the __AutoPostBack__ property.|
| __set_autoPostBack__ |boolean|none|Enables or disables postbacks when the user changes the text in the input control.|
| __get_enabled__ |none|boolean|Returns __true__ if the input control is enabled.|
| __get_showButton__ |none|boolean|Returns __true__ if the input control has an associated image button.|
| __get_selectionOnFocus__ |none|Telerik.Web.UI.SelectionOnFocus|Returns the value of the SelectionOnFocus property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| __set_selectionOnFocus__ |Telerik.Web.UI.SelectionOnFocus|none|Sets the SelectionOnFocus property.|
| __get_emptyMessage__ |none|string|Returns the message that appears when the value is not set.|
| __set_emptyMessage__ |string|none|Sets the message that appears when the value is not set.|
| __get_element__ |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| __get_wrapperElement__ |none|HTML element|Gets the DOM element for the wrapper element.|
| __get_dateFormat__ |none|string|Returns the format string for the control when it has focus.|
| __get_displayDateFormat__ |none|string|Returns the format string for the control when it does not have focus.|
| __get_dateFormatInfo__ |none|[DateFormatInfo]({%slug input/client-side-programming/dateformatinfo-client-object%})|Returns the Date Format Info object, which includes the settings used to parse date values.|
| __get_minDate__ |none|Date|Returns the earliest valid date value.|
| __set_minDate__ |Date|none|Sets the earliest date the user can enter.|
| __get_maxDate__ |none|Date|Returns the latest valid date value.|
| __set_maxDate__ |Date|none|Sets the latest date the user can enter.|
| __get_incrementSettings__ |none|[IncrementSettings]({%slug input/client-side-programming/incrementsettings-client-object%})|Returns the Increment Settings object, which you can use to change the way the control responds to arrow keys and the mouse wheel.|
| __get_visible__ |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| __set_visible__ |boolean|none|Sets the input element as hidden on the client|

Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __parseDate__ |string|Date|Parses a string using the DateFormatInfo object and returns the resulting date.|
| __selectAllText__ |none|none|Selects all text in the control.|
| __selectText__ |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| __isReadOnly__ |none|boolean|Returns __true__ of the control is read-only.|
| __isEmpty__ |none|boolean|Returns __true__ if the value has not been set.|
| __enable__ |none|none|Enables the date input control.|
| __disable__ |none|none|Disables the date input control.|
| __focus__ |none|none|Sets focus to the control so that the user can edit its value.|
| __blur__ |none|none|Removes focus from the control, moving it to the next control in the tab order of the page.|
| __clear__ |none|none|Clears the value of the control.|
