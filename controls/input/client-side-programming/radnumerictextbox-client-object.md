---
title: RadNumericTextBox Client Object
page_title: RadNumericTextBox Client Object | UI for ASP.NET AJAX Documentation
description: RadNumericTextBox Client Object
slug: input/client-side-programming/radnumerictextbox-client-object
tags: radnumerictextbox,client,object
published: True
position: 2
---

# RadNumericTextBox Client Object



## 

The following table lists the most important properties/methods of the __RadNumericTextBox__ client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_value__ |none|number|Returns the value of the text box.|
| __set_value__ |number|none|Sets the value of the text box.|
| __get_editValue__ |none|string|Gets the value of the text box as it is formatted when the text box has focus.|
| __get_displayValue__ |none|string|Gets the value of the text box as it is formatted when the text box does not have focus.|
| __get_textBoxValue__ |none|string|Gets the text that is displayed in the text box.|
| __set_textBoxValue__ |string|none|Sets the text that will be displayed in the text box.|
| __get_caretPosition__ |none|integer|Returns the current position of the caret.|
| __set_caretPosition__ |integer|none|Sets the position of the caret.|
| __get_styles__ |none|[InputStyles]({%slug input/client-side-programming/inputstyles-client-object%})|Returns the InputStyles Client object, which can be used to change the appearance of the text box when it is first loaded.|
| __get_autoPostBack__ |none|boolean|Returns the value of the __AutoPostBack__ property.|
| __set_autoPostBack__ |boolean|none|Enables or disables postbacks when the user changes the text in the text box.|
| __get_enabled__ |none|boolean|Returns __true__ if the text box is enabled.|
| __get_showButton__ |none|boolean|Returns __true__ if the text box has an associated image button.|
| __get_showSpinButtons__ |none|boolean|Returns true if the text box has an associated pair of spin buttons.|
| __get_selectionOnFocus__ |none|enumeration|Returns the value of the __SelectionOnFocus__ property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| __set_selectionOnFocus__ |enumeration|none|Sets the __SelectionOnFocus__ property.|
| __get_emptyMessage__ |none|string|Returns the message that appears when the text box value is an empty string.|
| __set_emptyMessage__ |string|none|Sets the message that appears when the text box value is an empty string.|
| __get_element__ |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| __get_wrapperElement__ |none|HTML element|Gets the DOM element for the wrapper element.|
| __get_incrementSettings__ |none|[IncrementSettings]({%slug input/client-side-programming/incrementsettings-client-object%})|Returns the Increment Settings object, which you can use to change the way the text box responds to arrow keys, the mouse wheel, and (if they are showing) the spin buttons.|
| __get_numberFormat__ |none|[NumberFormat]({%slug input/client-side-programming/numberformat-client-object%})|Returns the Number format client object, which you can use to change the way the text box formats its value when it does not have focus.|
| __get_maxValue__ |none|number|Returns the maximum value the user can enter.|
| __set_maxValue__ |number|none|Sets the maximum value the user can enter.|
| __get_minValue__ |none|number|Returns the minimum value the user can enter.|
| __set_minValue__ |number|none|Sets the minimum value the user can enter.|
| __get_visible__ |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| __set_visible__ |boolean|none|Sets the input element as hidden on the client|

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __enable__ |none|none|Enables the numeric text box.|
| __disable__ |none|none|Disables the numeric text box.|
| __focus__ |none|none|Sets focus to the text box so that the user can edit its value.|
| __blur__ |none|none|Removes focus from the text box, moving it to the next control in the tab order of the page.|
| __clear__ |none|none|Sets the value of the text box to an empty string.|
| __selectAllText__ |none|none|Selects all text in the text box.|
| __selectText__ |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| __isNegative__ |none|boolean|Returns __true__ if the value of the text box is a negative number.|
| __isReadOnly__ |none|boolean|Returns __true__ of the text box is read-only.|
| __isEmpty__ |none|boolean|Returns __true__ if the value of the text box has not been set.|
