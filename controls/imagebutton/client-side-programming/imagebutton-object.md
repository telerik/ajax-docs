---
title: ImageButton Object
page_title: ImageButton Object - RadImageButton
description: Check our Web Forms article about ImageButton Object.
slug: imagebutton/client-side-programming/imagebutton-object
tags: imagebutton,object
published: True
position: 1
---

# ImageButton Object

The following table lists the most important members of the client-side RadImageButton object:

>caption Public Properties

| Name | Description |
| ------ | ------ |
| **.add_load()** |The name of the JavaScript function called when the control loads.|
| **.remove_load()** |Removes a handler for the load event.|
| **.add_clicking()** |The name of the JavaScript function called when the RadImageButton control is clicked.|
| **.remove_clicking()** |Removes a handler for the clicking event.|
| **.add_clicked()** |The name of the JavaScript function called when the RadImageButton control is clicked.|
| **.remove_clicked()** |Removes a handler for the clicked event.|
| **.add_mouseOver()** |The name of the JavaScript function called when the mouse hovers over the control.|
| **.remove_mouseOver()** |Removes a handler for the mouseOver event.|
| **.add_mouseOut()** |The name of the JavaScript function when the mouse leaves the control.|
| **.remove_mouseOut()** |Removes a handler for the mouseOut event.|
| **.get_imageUrl()** |Gets the location of the button's image.|
| **.set_imageUrl()** |Sets the location of the button's image.|
| **.get_disabledImageUrl()** |Gets the location of the disabled button's image.|
| **.set_disabledImageUrl()** |Sets the location of the disabled button's image.|
| **.get_hoveredImageUrl()** |Gets the location of the hovered button's image.|
| **.set_hoveredImageUrl()** |Sets the location of the hovered button's image.|
| **.get_pressedImageUrl()** |Gets the location of the pressed button's image|
| **.set_pressedImageUrl()** |Sets the location of the pressed button's image|
| **.get_enabled()** |Returns a value, indicating whether the button control is enabled.|
| **.set_enabled()** |Sets whether the button is enabled.|
| **.get_text()** |The text displayed in the RadImageButton control.|
| **.set_text()** |Sets the text displayed in the RadImageButton control.|
| **.get_toolTip()** |Gets the text displayed when the mouse pointer hovers over the RadImageButton control.|
| **.set_toolTip()** |Sets the text displayed when the mouse pointer hovers over the RadImageButton control.|
| **.get_uniqueID()** |Gets the unique, hierarchically qualified identifier for the RadImageButton control.|
| **.get_textElement()** |Gets a reference to the HTML element that holds the text of the RadImageButton control.|
| **.get_cssClass()** |Gets the Cascading Style Sheet (CSS) class rendered by the RadImageButton control on the client.|
| **.get_commandName()** |Gets the command name associated with the RadImageButton control that is passed to the Command event.|
| **.set_commandName()** |Sets the command name associated with the RadImageButton control that is passed to the Command event.|
| **.get_commandArgument()** |Gets an optional parameter passed to the Command event along with the associated CommandName.|
| **.set_commandArgument()** |Sets an optional parameter passed to the Command event along with the associated CommandName.|
| **.get_autoPostBack()** |Gets a bool value indicating whether the RadImageButton control automatically posts back to the server when clicked.|
| **.set_autoPostBack()** |Sets a bool value indicating whether the RadImageButton control automatically posts back to the server when clicked.|
| **.get_height()** |Gets the height of the RadImageButton control.|
| **.get_width()** |Gets the width of the RadImageButton control.|
| **.get_singleClick()** |Gets a bool value indicating whether the RadImageButton control will be immediately disabled after the user has clicks it.|
| **.get_singleClickText()** |Gets the text displayed in the RadImageButton control after the button is being clicked and disabled.|
| **.enableAfterSingleClick()** |Enables the button and restores the button's text after it has been disabled by a single click.|
| **.get_visible()** |Gets a bool value indicating whether the button is visible.|
| **.set_visible()** |Shows/hides the button.|
| **.get_validationGroup()** |Gets the name of the ValidationGroup to which RadImageButton is assigned.|
| **.set_validationGroup()** |Sets the validation group to which you want to assign RadImageButton.|


>caption Public Methods

| Name | Description |
| ------ | ------ |
| **.focus()** |Brings the focus to the RadImageButton control.|
| **.click()** |Executes programmatic button click. Accepts an optional boolean parameter that specifies whether the client-side [clicking event]({%slug imagebutton/client-side-programming/events/onclientclicking%}) of RadImageButton will be fired when the control is clicked programmatically. If the function is called without parameter,	the clicking event will not be fired.|

## See Also

 * [Client-side Programming Overview]({%slug imagebutton/client-side-programming/overview%})
 
