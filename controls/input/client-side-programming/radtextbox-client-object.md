---
title: RadTextBox Client Object
page_title: RadTextBox Client Object | UI for ASP.NET AJAX Documentation
description: RadTextBox Client Object
slug: input/client-side-programming/radtextbox-client-object
tags: radtextbox,client,object
published: True
position: 1
---

# RadTextBox Client Object



## 

The following tables lists the most important properties/methods of the __RadTextBox__ client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_value__ |none|string|Returns the value of the text box.|
| __set_value__ |string|none|Sets the value of the text box.|
| __get_editValue__ |none|string|Gets the value of the text box as it is formatted when the text box has focus.|
| __get_displayValue__ |none|string|Gets the value of the text box as it is formatted when the text box does not have focus.|
| __get_textBoxValue__ |none|string|Gets the string that the user typed into the text box.|
| __get_caretPosition__ |none|integer|Returns the current position of the caret.|
| __set_caretPosition__ |integer|none|Sets the position of the caret.|
| __get_styles__ |none|[InputStyles]({%slug input/client-side-programming/inputstyles-client-object%})|Returns the InputStyles Client object, which can be used to change the appearance of the text box when it is first loaded.|
| __get_autoPostBack__ |none|boolean|Returns the value of the __AutoPostBack__ property.|
| __set_autoPostBack__ |boolean|none|Enables or disables postbacks when the user changes the text in the text box.|
| __get_enabled__ |none|boolean|Returns __true__ if the text box is enabled.|
| __get_showButton__ |none|boolean|Returns __true__ if the text box has an associated image button.|
| __get_selectionOnFocus__ |none|Telerik.Web.UI.SelectionOnFocus|Returns the value of the SelectionOnFocus property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| __set_selectionOnFocus__ |Telerik.Web.UI.SelectionOnFocus|none|Sets the SelectionOnFocus property.|
| __get_emptyMessage__ |none|string|Returns the message that appears when the text box value is an empty string.|
| __set_emptyMessage__ |string|none|Sets the message that appears when the text box value is an empty string.|
| __get_element__ |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| __get_wrapperElement__ |none|HTML element|Gets the DOM element for the wrapper element.|
| __get_visible__ |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| __set_visible__ |boolean|none|Sets the input element as hidden on the client|
| __set_displayValue__ |string|none|Sets the value of the text box as it isformatted when the text box does not have focus.|

Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __selectAllText__ |none|none|Selects all text in the text box.|
| __selectText__ |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| __enable__ |none|none|Enables the text box.|
| __disable__ |none|none|Disables the text box.|
| __focus__ |none|none|Sets focus to the text box so that the user can edit its value.|
| __blur__ |none|none|Removes focus from the text box, moving it to the next control in the tab order of the page.|
| __clear__ |none|none|Sets the value of the text box to an empty string.|
| __isMultiLine__ |none|boolean|Returns __true__ if the text mode is MultiLine.|
| __isReadOnly__ |none|boolean|Returns __true__ of the text box is read-only.|
| __isEmpty__ |none|boolean|Returns __true__ if the value of the text box is an empty string.|
