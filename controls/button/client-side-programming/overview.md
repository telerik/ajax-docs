---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: button/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview





__RadButton__ provides a flexible client-side API. You can easily interact with the button in the browser using the RadButton client-side object. In addition to a variety of client-side events, the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadButton client-side object

__RadButton__ creates a client-side object with the __ClientID__ of the button. You can obtain the reference using the following JavaScript code:

````JavaScript
	
			var button = $find("<%= RadButton1.ClientID %>");
	
````



````JavaScript
	
			var button = $telerik.findButton("<%= RadButton1.ClientID %>");
	
````



## Client-side Object Model

Telerik __RadButton__ provides the following objects on the client-side:


>caption  

| Events and Properties | Description |
| ------ | ------ |
| __.add_load()__ |The name of the javascript function called when the control loads.|
| __.remove_load()__ |Removes a handler for the load event|
| __.add_clicking()__ |The name of the javascript function called when the RadButton control is clicked.|
| __.remove_clicking()__ |Removes a handler for the clicking event.|
| __.add_clicked()__ |The name of the javascript function called when the RadButton control is clicked.|
| __.remove_clicked()__ |Removes a handler for the clicked event.|
| __.add_mouseOver()__ |The name of the javascript function called when the mouse hovers over the control.|
| __.remove_mouseOver()__ |Removes a handler for the mouseOver event.|
| __.add_mouseOut()__ |The name of the javascript function when the mouse leaves the control.|
| __.remove_mouseOut()__ |Removes a handler for the mouseOut event.|
| __.add_checkedChanging()__ |The name of the javascript function called when the Checked property of the RadButton control is about to be changed.|
| __.remove_checkedChanging()__ |Removes a handler for the checkedChanging event.|
| __.add_checkedChanged()__ |The name of the javascript function called after the Checked property of the RadButton control is changed.|
| __.remove_checkedChanged()__ |Removes a handler for the checkedChanged event.|
| __.add_toggleStateChanging()__ |The name of the javascript function called when the SelectedToggleStateIndex property of the RadButton control is about to be changed.|
| __.remove_toggleStateChanging()__ |Removes a handler for the toggleStateChanging event.|
| __.add_toggleStateChanged()__ |The name of the javascript function called after the SelectedToggleStateIndex property of the RadButton control is changed.|
| __.remove_toggleStateChanged()__ |Removes a handler for the toggleStateChanged event.|
| __.clearCheckedRadios()__ |Clears the checked state of the Radio buttons with the specified GroupName.|
| __.focus()__ |Brings the focus to the RadButton control.|
| __.click()__ |Executes programmatic button click. Accepts an optional boolean parameter that specifies whether the client-side[clicking event]({%slug button/client-side-programming/events/onclientclicking%})ofRadButton will be fired when the control is clicked programmatically. If the function is called without parameter,	the clicking event will not be fired.|
| __.get_enabled()__ |Returns a value, indicating whether the button control is enabled.|
| __.set_enabled()__ |Sets whether the button is enabled.|
| __.get_readOnly()__ |Returns a value, indicating whether the button control is in read-only mode.|
| __.set_readOnly()__ |Sets a value, indicating whether the button control is in read-only mode.|
| __.get_text()__ |The text displayed in the RadButton control.|
| __.set_text()__ |Sets the text displayed in the RadButton control.|
| __.get_toolTip()__ |Gets the text displayed when the mouse pointer hovers over the RadButton control.|
| __.set_toolTip()__ |Sets the text displayed when the mouse pointer hovers over the RadButton control.|
| __.get_uniqueID()__ |Gets the unique, hierarchically qualified identifier for the RadButton control.|
| __.get_checked()__ |Gets a bool value indicating whether the RadButton control is checked.|
| __.set_checked()__ |Sets a bool value indicating whether the RadButton control is checked.|
| __.get_buttonType()__ |Gets the type of the button.|
| __.get_toggleType()__ |Gets the toggle type of the RadButton when used as a toggle button.|
| __.get_target()__ |Gets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.	This property is specific for a __RadButton__ configured as a __LinkButton__ ( __ButtonType="LinkButton"__ ).|
| __.set_target()__ |Sets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.	This property is specific for a __RadButton__ configured as a __LinkButton__ ( __ButtonType="LinkButton"__ ).|
| __.get_navigateUrl()__ |Gets the URL to link to when the RadButton control is clicked.	This property is specific for a __RadButton__ configured as a __LinkButton__ ( __ButtonType="LinkButton"__ ).|
| __.set_navigateUrl()__ |Sets the URL to link to when the RadButton control is clicked.	This property is specific for a __RadButton__ configured as a __LinkButton__ ( __ButtonType="LinkButton"__ ).|
| __.get_primaryIconElement()__ |Gets a reference to the HTML element that holds the primary icon.|
| __.get_secondaryIconElement()__ |Gets a reference to the HTML element that holds the secondary icon.|
| __.get_textElement()__ |Gets a reference to the HTML element that holds the text of the RadButton control.|
| __.get_cssClass()__ |Gets the Cascading Style Sheet (CSS) class rendered by the RadButton control on the client.|
| __.get_disabledCssClass()__ |Gets the CSS class applied when the control is disabled.|
| __.get_hoveredCssClass()__ |Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.|
| __.get_pressedCssClass()__ |Gets the CSS class applied to the RadButton control when the control is pressed.|
| __.get_commandName()__ |Gets the command name associated with the RadButton control that is passed to the Command event.|
| __.set_commandName()__ |Sets the command name associated with the RadButton control that is passed to the Command event.|
| __.get_commandArgument()__ |Gets an optional parameter passed to the Command event along with the associated CommandName.|
| __.set_commandArgument()__ |Sets an optional parameter passed to the Command event along with the associated CommandName|
| __.get_autoPostBack()__ |Gets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.|
| __.set_autoPostBack()__ |Sets or sets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.|
| __.get_toggleStates()__ |Gets a collection of RadButtonToggleState objects that belong to the RadButton control.|
| __.get_selectedToggleState()__ |Gets the currently selected ToggleState of the RadButton control when used as a custom toggle button.|
| __.get_selectedToggleStateIndex()__ |Gets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.|
| __.set_selectedToggleStateIndex()__ |Sets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.|
| __.get_groupName()__ |Gets the name of the group that the RadButton of ToggleType=Radio, belongs to.|
| __.get_height()__ |Gets the height of the RadButton control.|
| __.get_width()__ |Gets the width of the RadButton control.|
| __.get_enableSplitButton()__ |Specifies whether the 'Split Button' functionality is Enabled/Disabled.|
| __.IsImageButton()__ |Gets a bool value indicating whether the button is an image button|
| __.IsInputTypeSubmit()__ |Gets a bool value indicating whether the button is a submit button|
| __.get_singleClick()__ |Gets a bool value indicating whether the RadButton control will be immediately disabled after the user has clicks it.(i.e. enables/disables "Single Click" functionality)|
| __.get_singleClickText()__ |Gets the text displayed in the RadButton control after the button is being clicked and disabled. (i.e. the text used for the 'Single Click' functionality)|
| __.enableAfterSingleClick()__ |Enables the button and restores the button's text, after it has been disabled by a single click.|
| __.get_visible()__ |Gets a bool value indicating whether the button is visible.|
| __.set_visible()__ |Shows/hides the button.|
| __.get_validationGroup()__ |Gets the name of ValidationGroup to which RadButton is assigned.|
| __.set_validationGroup()__ |Sets the validation group to which RadButton should be assigned.|

__RadButtonToggleState__


>caption  

| Properties | Description |
| ------ | ------ |
| __.get_index()__ |Gets the 0-based index of the ToggleState object in the ToggleStates collection.|
| __.get_text()__ |Gets the text displayed in the RadButton control.|
| __.get_cssClass()__ |Gets the CSS class applied to the RadButton control.|
| __.get_hoveredCssClass()__ |Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.|
| __.get_pressedCssClass()__ |Gets the CSS class applied to the RadButton control when the control is pressed.|
| __.get_height()__ |Gets the height of the RadButton control.|
| __.get_width()__ |Gets the width of the RadButton control.|
| __.get_primaryIconCssClass()__ |Gets the CSS class applied to the Primary Icon.|
| __.get_primaryIconUrl()__ |Gets the URL to the image used as Primary Icon.|
| __.get_primaryHoveredIconUrl()__ |Gets the URL to the image showed when the Primary Icon is hovered.|
| __.get_primaryPressedIconUrl()__ |Gets the URL to the image showed when the Primary Icon is pressed.|
| __.get_primaryIconHeight()__ |Gets the Height of the Primary Icon.|
| __.get_primaryIconWidth()__ |Gets the Width of the Primary Icon.|
| __.get_primaryIconTop()__ |Gets the top edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| __.get_primaryIconLeft()__ |Gets the left edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| __.get_primaryIconBottom()__ |Gets the bottom edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| __.get_primaryIconRight()__ |Gets the right edge of the Primary Icon, relative to the RadButton control's wrapper element.|
| __.get_secondaryIconCssClass()__ |Gets the CSS class applied to the Secondary Icon.|
| __.get_secondaryIconUrl()__ |Gets the URL to the image used as Secondary Icon.|
| __.get_secondaryHoveredIconUrl()__ |Gets the URL to the image showed when the Secondary Icon is hovered.|
| __.get_secondaryPressedIconUrl()__ |Gets the URL to the image showed when the Secondary Icon is pressed.|
| __.get_secondaryIconHeight()__ |Gets the Height of the Secondary Icon.|
| __.get_secondaryIconWidth()__ |Gets the Width of the Secondary Icon.|
| __.get_secondaryIconTop()__ |Gets the top edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| __.get_secondaryIconLeft()__ |Gets the left edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| __.get_secondaryIconBottom()__ |Gets the bottom edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| __.get_secondaryIconRight()__ |Gets the right edge of the Secondary Icon, relative to the RadButton control's wrapper element.|
| __.get_isBackgroundImage()__ |Gets a bool value indicating how the iImage is used - i.e. as a background image or as an Image Button.|
| __.get_imageUrl()__ |Gets the location of an image to display in the RadButton control.|
| __.get_hoveredImageUrl()__ |Gets the location of an image to display in the RadButton control, when the mouse pointer is over the control.|
| __.get_pressedImageUrl()__ |Gets the location of an image to display in the RadButton control, when the control is pressed.|


