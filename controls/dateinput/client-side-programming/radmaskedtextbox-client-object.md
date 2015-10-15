---
title: RadMaskedTextBox Client Object
page_title: RadMaskedTextBox Client Object | RadInput for ASP.NET AJAX Documentation
description: RadMaskedTextBox Client Object
slug: input/client-side-programming/radmaskedtextbox-client-object
tags: radmaskedtextbox,client,object
published: True
position: 3
---

# RadMaskedTextBox Client Object



## 

The following table lists the most important properties/methods of the **RadMaskedTextBox** client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_value** |none|string|Returns the value of the text box. This is the string without any prompt characters or literals.|
| **set_value** |string|none|Sets the value of the text box.|
| **get_valueWithPrompt** |none|string|Returns the value of the text box, including the prompt characters.|
| **get_valueWithLiterals** |none|string|Returns the value of the text box, including the literal characters from the mask.|
| **get_valueWithPromptAndLiterals** |none|string|Returns the value of the text box, including the prompt characters and literal characters from the mask.|
| **get_editValue** |none|string|Gets the value of the text box as it is formatted when the text box has focus (including prompts and literals).|
| **get_displayValue** |none|string|Gets the value of the text box as it is formatted when the text box does not have focus (including display prompts and literals).|
| **get_textBoxValue** |none|string|Gets the string that the user typed into the text box with any prompts and literals from the mask.|
| **get_promptChar** |none|character|Returns the prompt character.|
| **set_promptChar** |string|none|Sets the prompt char of the mask.|
| **get_displayPromptChar** |none|character|Returns the prompt character that is used when the text box does not have focus.|
| **get_caretPosition** |none|integer|Returns the current position of the caret.|
| **set_caretPosition** |integer|none|Sets the position of the caret.|
| **get_styles** |none|[InputStyles]({%slug input/client-side-programming/inputstyles-client-object%})|Returns the InputStyles Client object, which can be used to change the appearance of the text box when it is first loaded.|
| **get_autoPostBack** |none|boolean|Returns the value of the **AutoPostBack** property.|
| **set_autoPostBack** |boolean|none|Enables or disables postbacks when the user changes the text in the text box.|
| **get_enabled** |none|boolean|Returns **true** if the text box is enabled.|
| **get_showButton** |none|boolean|Returns **true** if the text box has an associated image button.|
| **get_selectionOnFocus** |none|Telerik.Web.UI.SelectionOnFocus|Returns the value of the SelectionOnFocus property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| **set_selectionOnFocus** |Telerik.Web.UI.SelectionOnFocus|none|Sets the SelectionOnFocus property.|
| **get_emptyMessage** |none|string|Returns the message that appears when the text box value is an empty string and **HideOnBlur** is true.|
| **set_emptyMessage** |string|none|Sets the message that appears when the text box value is an empty string and **HideOnBlur** is true.|
| **get_element** |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| **get_wrapperElement** |none|HTML element|Gets the DOM element for the wrapper element.|
| **get_allowEmptyEnumerations** |none|boolean|Returns **true** if enumerated mask parts can be set to an empty string.|
| **set_allowEmptyEnumerations** |boolean|none|Sets whether enumerated mask parts can be set to an empty string.|
| **get_hideOnBlur** |none|boolean|Returns **true** if the prompt characters and literals are not displayed when the text box is empty and does not have focus.|
| **set_hideOnBlur** |boolean|none|Sets whether the prompt characters and literals are not displayed when the text box is empty and does not have focus.|
| **get_visible** |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| **set_visible** |boolean|none|Sets the input element as hidden on the client|

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **selectAllText** |none|none|Selects all text in the text box.|
| **selectText** |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| **enable** |none|none|Enables the text box.|
| **disable** |none|none|Disables the text box.|
| **focus** |none|none|Sets focus to the text box so that the user can edit its value.|
| **blur** |none|none|Removes focus from the text box, moving it to the next control in the tab order of the page.|
| **clear** |none|none|Sets the value of the text box to an empty string.|
| **isMultiLine** |none|boolean|Returns **true** if the text mode is MultiLine.|
| **isReadOnly** |none|boolean|Returns **true** of the text box is read-only.|
| **isEmpty** |none|boolean|Returns **true** if the value of the text box is an empty string.|
