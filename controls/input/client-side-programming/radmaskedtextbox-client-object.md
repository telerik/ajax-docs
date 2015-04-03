---
title: RadMaskedTextBox Client Object
page_title: RadMaskedTextBox Client Object | UI for ASP.NET AJAX Documentation
description: RadMaskedTextBox Client Object
slug: input/client-side-programming/radmaskedtextbox-client-object
tags: radmaskedtextbox,client,object
published: True
position: 3
---

# RadMaskedTextBox Client Object



## 

The following table lists the most important properties/methods of the __RadMaskedTextBox__ client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_value__ |none|string|Returns the value of the text box. This is the string without any prompt characters or literals.|
| __set_value__ |string|none|Sets the value of the text box.|
| __get_valueWithPrompt__ |none|string|Returns the value of the text box, including the prompt characters.|
| __get_valueWithLiterals__ |none|string|Returns the value of the text box, including the literal characters from the mask.|
| __get_valueWithPromptAndLiterals__ |none|string|Returns the value of the text box, including the prompt characters and literal characters from the mask.|
| __get_editValue__ |none|string|Gets the value of the text box as it is formatted when the text box has focus (including prompts and literals).|
| __get_displayValue__ |none|string|Gets the value of the text box as it is formatted when the text box does not have focus (including display prompts and literals).|
| __get_textBoxValue__ |none|string|Gets the string that the user typed into the text box with any prompts and literals from the mask.|
| __get_promptChar__ |none|character|Returns the prompt character.|
| __set_promptChar__ |string|none|Sets the prompt char of the mask.|
| __get_displayPromptChar__ |none|character|Returns the prompt character that is used when the text box does not have focus.|
| __get_caretPosition__ |none|integer|Returns the current position of the caret.|
| __set_caretPosition__ |integer|none|Sets the position of the caret.|
| __get_styles__ |none|[InputStyles]({%slug input/client-side-programming/inputstyles-client-object%})|Returns the InputStyles Client object, which can be used to change the appearance of the text box when it is first loaded.|
| __get_autoPostBack__ |none|boolean|Returns the value of the __AutoPostBack__ property.|
| __set_autoPostBack__ |boolean|none|Enables or disables postbacks when the user changes the text in the text box.|
| __get_enabled__ |none|boolean|Returns __true__ if the text box is enabled.|
| __get_showButton__ |none|boolean|Returns __true__ if the text box has an associated image button.|
| __get_selectionOnFocus__ |none|Telerik.Web.UI.SelectionOnFocus|Returns the value of the SelectionOnFocus property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| __set_selectionOnFocus__ |Telerik.Web.UI.SelectionOnFocus|none|Sets the SelectionOnFocus property.|
| __get_emptyMessage__ |none|string|Returns the message that appears when the text box value is an empty string and __HideOnBlur__ is true.|
| __set_emptyMessage__ |string|none|Sets the message that appears when the text box value is an empty string and __HideOnBlur__ is true.|
| __get_element__ |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| __get_wrapperElement__ |none|HTML element|Gets the DOM element for the wrapper element.|
| __get_allowEmptyEnumerations__ |none|boolean|Returns __true__ if enumerated mask parts can be set to an empty string.|
| __set_allowEmptyEnumerations__ |boolean|none|Sets whether enumerated mask parts can be set to an empty string.|
| __get_hideOnBlur__ |none|boolean|Returns __true__ if the prompt characters and literals are not displayed when the text box is empty and does not have focus.|
| __set_hideOnBlur__ |boolean|none|Sets whether the prompt characters and literals are not displayed when the text box is empty and does not have focus.|
| __get_visible__ |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| __set_visible__ |boolean|none|Sets the input element as hidden on the client|

## Methods


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
