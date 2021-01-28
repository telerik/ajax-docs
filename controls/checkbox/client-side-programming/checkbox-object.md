---
title: CheckBox Object
page_title: CheckBox Object - RadCheckBox
description: Check our Web Forms article about CheckBox Object.
slug: checkbox/client-side-programming/checkbox-object
tags: checkbox,object
published: True
position: 1
---

# CheckBox Object

The following table lists the most important members of the client-side RadCheckBox object:

>caption Public Properties

| Name | Description |
| ------ | ------ |
| **get_checked** |Returns a bool value, indicating whether the checkbox is checked.|
| **set_checked** |Sets a nullable boolean value that indicates whether the checkbox is checked. When a null value is set, the value will default to false.|
| **get_enabled** |Returns a value, indicating whether the checkbox control is enabled.|
| **set_enabled** |Sets whether the checkbox is enabled.|
| **get_text** |The text displayed in the RadCheckBox control.|
| **set_text** |Sets the text displayed in the RadCheckBox control.|
| **get_toolTip** |Gets the text displayed when the mouse pointer hovers over the RadCheckBox control.|
| **set_toolTip** |Sets the text displayed when the mouse pointer hovers over the RadCheckBox control.|
| **get_uniqueID** |Gets the unique, hierarchically qualified identifier for the RadCheckBox control.|
| **get_textElement** |Gets a reference to the HTML element that holds the text of the RadCheckBox control.|
| **get_cssClass** |Gets the Cascading Style Sheet (CSS) class rendered by the RadCheckBox control on the client.|
| **get_disabledCssClass** |Gets the CSS class applied when the control is disabled.|
| **get_hoveredCssClass** |Gets the CSS class applied to the RadCheckBox control when the mouse pointer is over the control.|
| **get_pressedCssClass** |Gets the CSS class applied to the RadCheckBox control when the control is pressed.|
| **get_commandName** |Gets the command name associated with the RadCheckBox control that is passed to the Command event.|
| **set_commandName** |Sets the command name associated with the RadCheckBox control that is passed to the Command event.|
| **get_commandArgument** |Gets an optional parameter passed to the Command event along with the associated CommandName.|
| **set_commandArgument** |Sets an optional parameter passed to the Command event along with the associated CommandName.|
| **get_autoPostBack** |Gets a bool value indicating whether the RadCheckBox control automatically posts back to the server when clicked.|
| **set_autoPostBack** |Sets a bool value indicating whether the RadCheckBox control automatically posts back to the server when clicked.| <<Comment: Please verify that the sentence should begin "Sets a bool value">>
| **get_height** |Gets the height of the RadCheckBox control.|
| **get_width** |Gets the width of the RadCheckBox control.|
| **get_visible** |Gets a bool value indicating whether the checkbox is visible.|
| **set_visible** |Shows/hides the checkbox.|
| **get_validationGroup** |Gets the name of ValidationGroup to which RadCheckBox is assigned.|
| **set_validationGroup** |Sets the validation group to which RadCheckBox should be assigned.|

>caption Public Methods

| Name | Description |
| ------ | ------ |
| **focus** |Brings the focus to the RadCheckBox control.|
| **click** |Executes programmatic checkbox click. Accepts an optional boolean parameter that specifies whether the client-side [clicking event]({%slug checkbox/client-side-programming/events/onclientclicking%}) of RadCheckBox will be fired when the control is clicked programmatically. If the function is called without parameter, the clicking event will not be fired.|

>caption Methods for Modifying Client-side Event Handlers Dynamically

| Name | Description |
| ------ | ------ |
| **add_load** |The name of the JavaScript function called when the control loads.|
| **remove_load** |Removes a handler for the load event.|
| **add_clicking** |The name of the JavaScript function called when the RadCheckBox control is clicked.|
| **remove_clicking** |Removes a handler for the clicking event.|
| **add_checkedChanging** |The name of the JavaScript function called before the checked state of the checkbox is changed.|
| **remove_checkedChanging** |Removes a handler for the checkedChanging event.|
| **add_checkedChanged** |The name of the JavaScript function called when the checked state of the checkbox is changed.|
| **remove_checkedChanged** |Removes a handler for the checkedChanged event.|
| **add_clicked** |The name of the JavaScript function called when the RadCheckBox control is clicked.|
| **remove_clicked** |Removes a handler for the clicked event.|
| **add_mouseOver** |The name of the JavaScript function called when the mouse hovers over the control.|
| **remove_mouseOver** |Removes a handler for the mouseOver event.|
| **add_mouseOut** |The name of the JavaScript function when the mouse leaves the control.|
| **remove_mouseOut** |Removes a handler for the mouseOut event.|

You can read more on the subject in the [Setting Client Event Handlers by Using JavaScript]({%slug checkbox/client-side-programming/events/setting-event-handlers-via-javascript%}) help article.

## See Also

 * [Client-side Programming Overview]({%slug checkbox/client-side-programming/overview%})
 
