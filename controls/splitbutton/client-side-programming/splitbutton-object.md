---
title: SplitButton Object
page_title: SplitButton Object - RadSplitButton
description: Check our Web Forms article about SplitButton Object.
slug: splitbutton/client-side-programming/splitbutton-object
tags: splitbutton,object
published: True
position: 1
---

# SplitButton Object

This article lists the client-side API of **RadSplitButton** and shows how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var splitButtonObject = $find("<%=RadSplitButton1.ClientID %>");
````

Once you have reference to the RadSplitButton, you can use the get_contextMenu() function to reach the embedded RadContextMenu use its own Client-side API. For the further use of the embedded ContextMenu on the client-side, check out the article dedicated to [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%}).

The following table lists the most important properties of the **RadSplitButton** client-side object.

>caption Public Properties

| Name | Description |
| ------ | ------ |
| **.get_text()** |The text displayed in the RadSplitButton control.|
| **.set_text()** |Sets the text displayed in the RadSplitButton control.|
| **.get_contextMenu()** |Gets the client-side control object of the embedded RadContextMenu.|
| **.get_toolTip()** |Gets the text displayed when the mouse pointer hovers over the RadSplitButton control.|
| **.set_toolTip()** |Sets the text displayed when the mouse pointer hovers over the RadSplitButton control.|
| **.get_iconElement()** |Gets a reference to the HTML element that holds the icon.|
| **.get_textElement()** |Gets a reference to the HTML element that holds the text of the RadSplitButton control.|
| **.get_commandName()** |Gets the command name associated with the RadSplitButton control that is passed to the Command event.|
| **.set_commandName()** |Sets the command name associated with the RadSplitButton control that is passed to the Command event.|
| **.get_commandArgument()** |Gets an optional parameter passed to the Command event along with the associated CommandName.|
| **.set_commandArgument()** |Sets an optional parameter passed to the Command event along with the associated CommandName|
| **.get_singleClick()** |Gets a bool value indicating whether the RadSplitButton control will be immediately disabled after the user has clicks it.(i.e. enables/disables "Single Click" functionality)|
| **.get_singleClickText()** |Gets the text displayed in the RadSplitButton control after the button is being clicked and disabled. (i.e. the text used for the 'Single Click' functionality)|

>caption Public Methods

| Name | Description |
| ------ | ------ |
| **.focus()** |Brings the focus to the RadSplitButton control.|
| **.click()** |Executes programmatic button click. Accepts an optional boolean parameter that specifies whether the client-side [clicking event]({%slug splitbutton/client-side-programming/events/onclientclicking%}) of RadSplitButton will be fired when the control is clicked programmatically. If the function is called without parameter,	the clicking event will not be fired.|
| **.enableAfterSingleClick()** |Enables the button and restores the button's text, after it has been disabled by a single click.|


# See Also

 * [Client-side Programming Overview]({%slug splitbutton/client-side-programming/overview%})
 


