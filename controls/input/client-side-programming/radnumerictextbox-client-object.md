---
title: RadNumericTextBox Client Object
page_title: RadNumericTextBox Client Object | RadInput for ASP.NET AJAX Documentation
description: RadNumericTextBox Client Object
slug: input/client-side-programming/radnumerictextbox-client-object
tags: radnumerictextbox,client,object
published: True
position: 2
---

# RadNumericTextBox Client Object



## 

The following table lists the most important properties/methods of the **RadNumericTextBox** client-side object:

Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_value** |none|number|Returns the value of the text box.|
| **set_value** |number|none|Sets the value of the text box.|
| **get_editValue** |none|string|Gets the value of the text box as it is formatted when the text box has focus.|
| **get_displayValue** |none|string|Gets the value of the text box as it is formatted when the text box does not have focus.|
| **get_textBoxValue** |none|string|Gets the text that is displayed in the text box.|
| **set_textBoxValue** |string|none|Sets the text that will be displayed in the text box.|
| **get_caretPosition** |none|integer|Returns the current position of the caret.|
| **set_caretPosition** |integer|none|Sets the position of the caret.|
| **get_styles** |none|[InputStyles]({%slug input/client-side-programming/inputstyles-client-object%})|Returns the InputStyles Client object, which can be used to change the appearance of the text box when it is first loaded.|
| **get_autoPostBack** |none|boolean|Returns the value of the **AutoPostBack** property.|
| **set_autoPostBack** |boolean|none|Enables or disables postbacks when the user changes the text in the text box.|
| **get_enabled** |none|boolean|Returns **true** if the text box is enabled.|
| **get_showButton** |none|boolean|Returns **true** if the text box has an associated image button.|
| **get_showSpinButtons** |none|boolean|Returns true if the text box has an associated pair of spin buttons.|
| **get_selectionOnFocus** |none|enumeration|Returns the value of the **SelectionOnFocus** property. Possible values are Telerik.Web.UI.SelectionOnFocus.CaretToBeginning, Telerik.Web.UI.SelectionOnFocus.CaretToEnd, Telerik.Web.UI.SelectionOnFocus.None, and Telerik.Web.UI.SelectionOnFocus.SelectAll.|
| **set_selectionOnFocus** |enumeration|none|Sets the **SelectionOnFocus** property.|
| **get_emptyMessage** |none|string|Returns the message that appears when the text box value is an empty string.|
| **set_emptyMessage** |string|none|Sets the message that appears when the text box value is an empty string.|
| **get_element** |none|HTML element|Gets the DOM element for the input element that holds the edit value.|
| **get_wrapperElement** |none|HTML element|Gets the DOM element for the wrapper element.|
| **get_incrementSettings** |none|[IncrementSettings]({%slug input/client-side-programming/incrementsettings-client-object%})|Returns the Increment Settings object, which you can use to change the way the text box responds to arrow keys, the mouse wheel, and (if they are showing) the spin buttons.|
| **get_numberFormat** |none|[NumberFormat]({%slug input/client-side-programming/numberformat-client-object%})|Returns the Number format client object, which you can use to change the way the text box formats its value when it does not have focus.|
| **get_maxValue** |none|number|Returns the maximum value the user can enter.|
| **set_maxValue** |number|none|Sets the maximum value the user can enter.|
| **get_minValue** |none|number|Returns the minimum value the user can enter.|
| **set_minValue** |number|none|Sets the minimum value the user can enter.|
| **get_visible** |none|boolean|Returns whether the input element is rendered as hidden or not. Does not apply if the control is inside another hidden html element.|
| **set_visible** |boolean|none|Sets the input element as hidden on the client|

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **enable** |none|none|Enables the numeric text box.|
| **disable** |none|none|Disables the numeric text box.|
| **focus** |none|none|Sets focus to the text box so that the user can edit its value.|
| **blur** |none|none|Removes focus from the text box, moving it to the next control in the tab order of the page.|
| **clear** |none|none|Sets the value of the text box to an empty string.|
| **selectAllText** |none|none|Selects all text in the text box.|
| **selectText** |integer, integer|none|Selects the text in the specified range of positions. The first parameter is the start of the range and the second is the end of the range.|
| **isNegative** |none|boolean|Returns **true** if the value of the text box is a negative number.|
| **isReadOnly** |none|boolean|Returns **true** of the text box is read-only.|
| **isEmpty** |none|boolean|Returns **true** if the value of the text box has not been set.|
