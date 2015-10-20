---
title: Overview
page_title: Client-side Programming Overview | RadLinkButton for ASP.NET AJAX Documentation
description: Overview
slug: linkbutton/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadLinkButton** provides a flexible client-side API. You can easily interact with the button in the browser using the RadLinkButton client-side object. In addition to a variety of client-side events, the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadLinkButton client-side object

**RadLinkButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var button = $find("<%= RadLinkButton1.ClientID %>");
````

````JavaScript
var button = $telerik.findlinkbutton("<%= RadLinkButton1.ClientID %>");
````

## Client-side Object Model

Telerik **RadLinkButton** provides the following objects on the client-side:

| Events and Properties | Description |
| ------ | ------ |
| **.add_load()** |The name of the javascript function called when the control loads.|
| **.remove_load()** |Removes a handler for the load event|
| **.add_clicking()** |The name of the javascript function called when the RadLinkButton control is clicked.|
| **.remove_clicking()** |Removes a handler for the clicking event.|
| **.add_clicked()** |The name of the javascript function called when the RadLinkButton control is clicked.|
| **.remove_clicked()** |Removes a handler for the clicked event.|
| **.add_mouseOver()** |The name of the javascript function called when the mouse hovers over the control.|
| **.remove_mouseOver()** |Removes a handler for the mouseOver event.|
| **.add_mouseOut()** |The name of the javascript function when the mouse leaves the control.|
| **.remove_mouseOut()** |Removes a handler for the mouseOut event.|
| **.focus()** |Brings the focus to the RadLinkButton control.|
| **.click()** |Executes programmatic button click. Accepts an optional boolean parameter that specifies whether the client-side [clicking event]({%slug button/client-side-programming/events/onclientclicking%}) of RadLinkButton will be fired when the control is clicked programmatically. If the function is called without parameter,	the clicking event will not be fired.|
| **.get_enabled()** |Returns a value, indicating whether the button control is enabled.|
| **.set_enabled()** |Sets whether the button is enabled.|
| **.get_text()** |The text displayed in the RadLinkButton control.|
| **.set_text()** |Sets the text displayed in the RadLinkButton control.|
| **.get_toolTip()** |Gets the text displayed when the mouse pointer hovers over the RadLinkButton control.|
| **.set_toolTip()** |Sets the text displayed when the mouse pointer hovers over the RadLinkButton control.|
| **.get_uniqueID()** |Gets the unique, hierarchically qualified identifier for the RadLinkButton control.|
| **.get_iconElement()** |Gets a reference to the HTML element that holds the icon.|
| **.get_textElement()** |Gets a reference to the HTML element that holds the text of the RadLinkButton control.|
| **.get_cssClass()** |Gets the Cascading Style Sheet (CSS) class rendered by the RadLinkButton control on the client.|
| **.get_disabledCssClass()** |Gets the CSS class applied when the control is disabled.|
| **.get_hoveredCssClass()** |Gets the CSS class applied to the RadLinkButton control when the mouse pointer is over the control.|
| **.get_pressedCssClass()** |Gets the CSS class applied to the RadLinkButton control when the control is pressed.|
| **.get_commandName()** |Gets the command name associated with the RadLinkButton control that is passed to the Command event.|
| **.set_commandName()** |Sets the command name associated with the RadLinkButton control that is passed to the Command event.|
| **.get_commandArgument()** |Gets an optional parameter passed to the Command event along with the associated CommandName.|
| **.set_commandArgument()** |Sets an optional parameter passed to the Command event along with the associated CommandName|
| **.get_autoPostBack()** |Gets a bool value indicating whether the RadLinkButton control automatically posts back to the server when clicked.|
| **.set_autoPostBack()** |Sets or sets a bool value indicating whether the RadLinkButton control automatically posts back to the server when clicked.|
| **.get_height()** |Gets the height of the RadLinkButton control.|
| **.get_width()** |Gets the width of the RadLinkButton control.|
| **.IsInputTypeSubmit()** |Gets a bool value indicating whether the button is a submit button|
| **.get_singleClick()** |Gets a bool value indicating whether the RadLinkButton control will be immediately disabled after the user has clicks it.(i.e. enables/disables "Single Click" functionality)|
| **.get_singleClickText()** |Gets the text displayed in the RadLinkButton control after the button is being clicked and disabled. (i.e. the text used for the 'Single Click' functionality)|
| **.enableAfterSingleClick()** |Enables the button and restores the button's text, after it has been disabled by a single click.|
| **.get_visible()** |Gets a bool value indicating whether the button is visible.|
| **.set_visible()** |Shows/hides the button.|
| **.get_validationGroup()** |Gets the name of ValidationGroup to which RadLinkButton is assigned.|
| **.set_validationGroup()** |Sets the validation group to which RadLinkButton should be assigned.|


