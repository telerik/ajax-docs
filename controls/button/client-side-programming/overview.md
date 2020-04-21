---
title: Overview
page_title: Client-side Programming Overview | RadButton for ASP.NET AJAX Documentation
description: Overview
slug: button/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadButton** provides a flexible client-side API. You can easily interact with the button in the browser using the RadButton client-side object. In addition to a variety of client-side events, the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadButton client-side object

**RadButton** creates a client-side object with the **ClientID** of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
var button = $find("<%= RadButton1.ClientID %>");
````



````JavaScript
var button = $telerik.findButton("<%= RadButton1.ClientID %>");
````

## Client-side Object Model

Telerik **RadButton** provides the following objects on the client-side:

| Events and Properties | Description |
| ------ | ------ |
| **.add_load()** |The name of the javascript function called when the control loads.|
| **.remove_load()** |Removes a handler for the load event|
| **.add_clicking()** |The name of the javascript function called when the RadButton control is clicked.|
| **.remove_clicking()** |Removes a handler for the clicking event.|
| **.add_clicked()** |The name of the javascript function called when the RadButton control is clicked.|
| **.remove_clicked()** |Removes a handler for the clicked event.|
| **.add_mouseOver()** |The name of the javascript function called when the mouse hovers over the control.|
| **.remove_mouseOver()** |Removes a handler for the mouseOver event.|
| **.add_mouseOut()** |The name of the javascript function when the mouse leaves the control.|
| **.remove_mouseOut()** |Removes a handler for the mouseOut event.|
| **.add_checkedChanging()** |The name of the javascript function called when the Checked property of the RadButton control is about to be changed.|
| **.remove_checkedChanging()** |Removes a handler for the checkedChanging event.|
| **.add_checkedChanged()** |The name of the javascript function called after the Checked property of the RadButton control is changed.|
| **.remove_checkedChanged()** |Removes a handler for the checkedChanged event.|
| **.add_toggleStateChanging()** |The name of the javascript function called when the SelectedToggleStateIndex property of the RadButton control is about to be changed.|
| **.remove_toggleStateChanging()** |Removes a handler for the toggleStateChanging event.|
| **.add_toggleStateChanged()** |The name of the javascript function called after the SelectedToggleStateIndex property of the RadButton control is changed.|
| **.remove_toggleStateChanged()** |Removes a handler for the toggleStateChanged event.|
| **.clearCheckedRadios()** |Clears the checked state of the Radio buttons with the specified GroupName.|
| **.focus()** |Brings the focus to the RadButton control.|
| **.click()** |Executes programmatic button click. Accepts an optional boolean parameter that specifies whether the client-side[clicking event]({%slug button/client-side-programming/events/onclientclicking%})ofRadButton will be fired when the control is clicked programmatically. If the function is called without parameter,	the clicking event will not be fired.|
| **.get_enabled()** |Returns a value, indicating whether the button control is enabled.|
| **.set_enabled()** |Sets whether the button is enabled. Set the true param to enable, or false to disable the button|
| **.get_readOnly()** |Returns a value, indicating whether the button control is in read-only mode.|
| **.set_readOnly()** |Sets a value, indicating whether the button control is in read-only mode.|
| **.get_text()** |The text displayed in the RadButton control.|
| **.set_text()** |Sets the text displayed in the RadButton control.|
| **.get_toolTip()** |Gets the text displayed when the mouse pointer hovers over the RadButton control.|
| **.set_toolTip()** |Sets the text displayed when the mouse pointer hovers over the RadButton control.|
| **.get_uniqueID()** |Gets the unique, hierarchically qualified identifier for the RadButton control.|
| **.get_checked()** |Gets a bool value indicating whether the RadButton control is checked.|
| **.set_checked()** |Sets a bool value indicating whether the RadButton control is checked.|
| **.get_buttonType()** |Gets the type of the button.|
| **.get_toggleType()** |Gets the toggle type of the RadButton when used as a toggle button.|
| **.get_target()** |Gets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.	This property is specific for a **RadButton** configured as a **LinkButton** ( **ButtonType="LinkButton"** ).|
| **.set_target()** |Sets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.	This property is specific for a **RadButton** configured as a **LinkButton** ( **ButtonType="LinkButton"** ).|
| **.get_navigateUrl()** |Gets the URL to link to when the RadButton control is clicked.	This property is specific for a **RadButton** configured as a **LinkButton** ( **ButtonType="LinkButton"** ).|
| **.set_navigateUrl()** |Sets the URL to link to when the RadButton control is clicked.	This property is specific for a **RadButton** configured as a **LinkButton** ( **ButtonType="LinkButton"** ).|
| **.get_primaryIconElement()** |Gets a reference to the HTML element that holds the primary icon.|
| **.get_secondaryIconElement()** |Gets a reference to the HTML element that holds the secondary icon.|
| **.get_textElement()** |Gets a reference to the HTML element that holds the text of the RadButton control.|
| **.get_cssClass()** |Gets the Cascading Style Sheet (CSS) class rendered by the RadButton control on the client.|
| **.get_disabledCssClass()** |Gets the CSS class applied when the control is disabled.|
| **.get_hoveredCssClass()** |Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.|
| **.get_pressedCssClass()** |Gets the CSS class applied to the RadButton control when the control is pressed.|
| **.get_commandName()** |Gets the command name associated with the RadButton control that is passed to the Command event.|
| **.set_commandName()** |Sets the command name associated with the RadButton control that is passed to the Command event.|
| **.get_commandArgument()** |Gets an optional parameter passed to the Command event along with the associated CommandName.|
| **.set_commandArgument()** |Sets an optional parameter passed to the Command event along with the associated CommandName|
| **.get_autoPostBack()** |Gets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.|
| **.set_autoPostBack()** |Sets or sets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.|
| **.get_toggleStates()** |Gets a collection of RadButtonToggleState objects that belong to the RadButton control.|
| **.get_selectedToggleState()** |Gets the currently selected ToggleState of the RadButton control when used as a custom toggle button.|
| **.get_selectedToggleStateIndex()** |Gets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.|
| **.set_selectedToggleStateIndex()** |Sets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.|
| **.get_groupName()** |Gets the name of the group that the RadButton of ToggleType=Radio, belongs to.|
| **.get_height()** |Gets the height of the RadButton control.|
| **.get_width()** |Gets the width of the RadButton control.|
| **.get_enableSplitButton()** |Specifies whether the 'Split Button' functionality is Enabled/Disabled.|
| **.IsImageButton()** |Gets a bool value indicating whether the button is an image button|
| **.IsInputTypeSubmit()** |Gets a bool value indicating whether the button is a submit button|
| **.get_singleClick()** |Gets a bool value indicating whether the RadButton control will be immediately disabled after the user has clicks it.(i.e. enables/disables "Single Click" functionality)|
| **.get_singleClickText()** |Gets the text displayed in the RadButton control after the button is being clicked and disabled. (i.e. the text used for the 'Single Click' functionality)|
| **.enableAfterSingleClick()** |Enables the button and restores the button's text, after it has been disabled by a single click.|
| **.get_visible()** |Gets a bool value indicating whether the button is visible.|
| **.set_visible()** |Shows/hides the button.|
| **.get_validationGroup()** |Gets the name of ValidationGroup to which RadButton is assigned.|
| **.set_validationGroup()** |Sets the validation group to which RadButton should be assigned.|

**RadButtonToggleState**

| Properties | Description |
| ------ | ------ |
| **.get_index()** |Gets the 0-based index of the ToggleState object in the ToggleStates collection.|
| **.get_text()** |Gets the text displayed in the RadButton control.|
| **.get_cssClass()** |Gets the CSS class applied to the RadButton control.|
| **.get_hoveredCssClass()** |Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.|
| **.get_pressedCssClass()** |Gets the CSS class applied to the RadButton control when the control is pressed.|
| **.get_height()** |Gets the height of the RadButton control.|
| **.get_width()** |Gets the width of the RadButton control.|
| **.get_primaryIconCssClass()** |Gets the CSS class applied to the Primary Icon.|
| **.get_primaryIconUrl()** |Gets the URL to the image used as Primary Icon.|
| **.get_primaryHoveredIconUrl()** |Gets the URL to the image showed when the Primary Icon is hovered.|
| **.get_primaryPressedIconUrl()** |Gets the URL to the image showed when the Primary Icon is pressed.|
| **.get_primaryIconHeight()** |Gets the Height of the Primary Icon.|
| **.get_primaryIconWidth()** |Gets the Width of the Primary Icon.|
| **.get_primaryIconTop()** |Gets the top edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| **.get_primaryIconLeft()** |Gets the left edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| **.get_primaryIconBottom()** |Gets the bottom edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| **.get_primaryIconRight()** |Gets the right edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| **.get_secondaryIconCssClass()** |Gets the CSS class applied to the Secondary Icon.|
| **.get_secondaryIconUrl()** |Gets the URL to the image used as Secondary Icon.|
| **.get_secondaryHoveredIconUrl()** |Gets the URL to the image showed when the Secondary Icon is hovered.|
| **.get_secondaryPressedIconUrl()** |Gets the URL to the image showed when the Secondary Icon is pressed.|
| **.get_secondaryIconHeight()** |Gets the Height of the Secondary Icon.|
| **.get_secondaryIconWidth()** |Gets the Width of the Secondary Icon.|
| **.get_secondaryIconTop()** |Gets the top edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| **.get_secondaryIconLeft()** |Gets the left edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| **.get_secondaryIconBottom()** |Gets the bottom edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| **.get_secondaryIconRight()** |Gets the right edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| **.get_isBackgroundImage()** |Gets a bool value indicating how the iImage is used - i.e. as a background image or as an Image Button.|
| **.get_imageUrl()** |Gets the location of an image to display in the RadButton control.|
| **.get_hoveredImageUrl()** |Gets the location of an image to display in the RadButton control, when the mouse pointer is over the control.|
| **.get_pressedImageUrl()** |Gets the location of an image to display in the RadButton control, when the control is pressed.|


