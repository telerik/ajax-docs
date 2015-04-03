---
title: Properties and Events
page_title: Properties and Events | UI for ASP.NET AJAX Documentation
description: Properties and Events
slug: button/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events



## RadButton common features (properties)


>caption  

| Property | Description |
| ------ | ------ |
| __ButtonType__ |Gets or sets the type of the button. The following types exist:

* StandardButton (default)

* LinkButton

* ToggleButtonEach ButtonType provides certain functionality that is unique. More information on the features of different button types can be found in each button category.|
| __AutoPostBack__ |Gets or sets a bool value indicating whether the control will automatically post the page back to the server.|
| __CausesValidation__ |Gets or sets a bool value indicating whether validation is performed when the RadButton is clicked.|
| __PostbackUrl__ |Gets or sets the URL of the page to post to from the current page, when the RadButton is clicked.|
| __Text__ |Gets or sets the text displayed in the RadButton control.|
| __ValidationGroup__ |Gets or sets the group of controls for which the RadButton control causes validation when it posts back to the server.|
| __CommandName__ |Gets or sets the command name associated with the RadButton control that is passed to the *Command* event.|
| __CommandArgument__ |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| __HoveredCssClass__ |Gets or sets the CSS class, when the mouse pointer is hovered over the RadButton control.|
| __PressedCssClass__ |Gets or sets the CSS class, when the RadButton control is pressed.|
| __OnClientLoad__ |Sets a name of a JavaScript function that will be called when the RadButton is loaded on the page|
| __OnClientClicking__ |Sets a name of a JavaScript function that will be called when the RadButton is clicked. The event is cancelable.|
| __OnClientClicked__ |Sets a name of a JavaScript function that will be called when the RadButton is clicked, after the OnClientClicking event.|
| __OnClientMouseOver__ |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadButton|
| __OnClientMouseOut__ |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadButton|
| __OnClientCheckedChanged__ |Sets a name of a JavaScript function that will be called when the mouse Checked property of the RadButton is changed|
| __OnClientToggleStateChanging__ |Sets a name of a JavaScript function that will be called when the toggle state of the RadButton is changed. The event is cancelable, and when cancelled, __OnClientCheckedChanged__ and __OnClientToggleStateChanged__ are not raised.|
| __OnClientToggleStateChanged__ |Sets a name of a JavaScript function that will be called when when the toggle state of the RadButton is changed, after the __OnClientToggleStateChanging__ event.|



## Icon specific features (properties)


>caption  

| Property | Description |
| ------ | ------ |
| __ShowPrimaryIcon__ |Gets or sets a bool value indicating whether the RadButton will show the Primary icon.|
| __ShowSecondaryIcon__ |Gets or sets a bool value indicating whether the RadButton will show the|
| __PrimaryIconUrl__ |Gets or sets the URL to the image used as Primary Icon.|
| __PrimaryHoveredIconUrl__ |Gets or sets the URL to the image showed when the Primary Icon is hovered.|
| __PrimaryPressedIconUrl__ |Gets or sets the URL to the image showed when the Primary Icon is pressed.|
| __PrimaryIconHeight__ |Gets or sets the Height of the Primary icon.|
| __PrimaryIconWidth__ |Gets or sets the Width of the Primary icon.|
| __PrimaryIconCssClass__ |Gets or sets the CSS class applied to the Primary icon.|
| __SecondaryIconUrl__ |Gets or sets the URL to the image used as Secondary Icon.|
| __SecondaryHoveredIconUrl__ |Gets or sets the URL to the image showed when the Secondary Icon is hovered.|
| __SecondaryPressedIconUrl__ |Gets or sets the URL to the image showed when the Secondary Icon is pressed.|
| __SecondaryIconHeight__ |Gets or sets the Height of the Secondary icon.|
| __SecondaryIconWidth__ |Gets or sets the Width of the Secondary icon.|
| __SecondaryIconCssClass__ |Gets or sets the CSS class applied to the Secondary icon.|
| __PrimaryIconTop__ |Gets or sets the top edge of the primary icon, relative to the RadButton control's wrapper element.|
| __PrimaryIconLeft__ |Gets or sets the left edge of the primary icon, relative to the RadButton control's wrapper element.|
| __PrimaryIconRight__ |Gets or sets the right edge of the primary icon, relative to the RadButton control's wrapper element.|
| __PrimaryIconBottom__ |Gets or sets the bottom edge of the primary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconTop__ |Gets or sets the top edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconLeft__ |Gets or sets the left edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconRight__ |Gets or sets the right edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconBottom__ |Gets or sets the bottom edge of the secondary icon, relative to the RadButton control's wrapper element.|



## Image specific features (properties)


>caption  

| Property | Description |
| ------ | ------ |
| __IsBackgroundImage__ |Gets or sets a bool value indicating how the image is used - i.e. as a background image or as an Image Button.|
| __ImageUrl__ |Gets or sets the URL to the image used as button.|
| __HoveredImageUrl__ |Gets or sets the URL to the image showed when the RadButton is hovered.|
| __PressedImageUrl__ |Gets or sets the URL to the image showed when the RadButton is pressed.|
| __EnableImageButton__ |Gets or sets a bool value indicating whether the RadButton is rendered as Image Button.|



## SplitButton specific features (properties)




>caption  

| Property | Description |
| ------ | ------ |
| __EnableSplitButton__ |Gets or sets a bool value that indicates whether the SplitButton functionality will be enabled|
| __SplitButtonPosition__ |Gets or sets the position where the SplitButton will appear, relatively to the main button (Left or Right). Position:

* Right (default)

* Left|
| __SplitButtonCssClass__ |Gets or sets the CSS class applied to the SplitButton|



## Type:Button specific features (properties)




>caption  

| Property | Description |
| ------ | ------ |
| __UseSubmitBehavior__ |Gets or sets a bool value indicating whether the RadButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|





## Type:LinkButton specific features (properties)




>caption  

| Property | Description |
| ------ | ------ |
| __NavigateUrl__ |Gets or sets the URL of the page to navigate to, without posting the page back to the server. When this property is sets, the button is rendered as an <a/> (anchor) element.|
| __Target__ |Gets or sets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.|



## Type: ToggleButton specific features (properties)




>caption  

| Property | Description |
| ------ | ------ |
| __ToggleType__ |Gets or sets the type of the Toggle Button. There are three toggle types:

* None (default)

* Radio

* CheckBox

* CustomToggle|
| __GroupName__ |Valid when ToggleType: Radio. Gets or sets the name of the group that the radio button belongs to.|
| __Checked__ |Gets or sets a bool value indicating whether the RadButton control is checked. In the case when the ToggleButton has more than 2(two) states, the control is not checked in the case when the current state of the RadButton is the First state, in all other cases it is Checked.|
| __Direction__ |Gets or sets the direction in which the states will be switched, when more than two ToggleStates are specified. Directions:

* Standard (default)

* Reversed|
| __SelectedToggleState__ |Gets or sets the current state of the RadButton.|
| __SelectedToggleStateIndex__ |Gets or sets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.|
| __ToggleStates__ |Collection of __RadButtonToggleState__ . The different states are controlled through a collection of states. The collection can contain, maximum of four states. The order of switching the states is determined by the 0-based position index at which the state occurs in the collection. So, the first item in the ToggleStates, is the first state, the second item is the second state, and so on. When the ToggleType is Radio or CheckBox, the first item (state) of the ToggleStates is used as the alternate state of the RadButton.|



## RadButtonToggleState specific features (properties)


>caption  

| Property | Description |
| ------ | ------ |
| __Text__ |Gets or sets the text displayed in the RadButton control.|
| __Selected__ |Gets or sets a bool value indicating whether the ToggleState is selected or not.|
| __CssClass__ |Gets or sets the CSS class applied to the RadButton control.|
| __HoveredCssClass__ |Gets or sets the CSS class applied to the RadButton control when the mouse pointer is over the control.|
| __PressedCssClass__ |Gets or sets the CSS class applied to the RadButton control when the control is pressed.|
| __Width__ |Gets or sets the width of the RadButton control.|
| __Height__ |Gets or sets the height of the RadButton control.|
| __PrimaryIconUrl__ |Gets or sets the URL to the image used as Primary Icon.|
| __PrimaryHoveredIconUrl__ |Gets or sets the URL to the image showed when the Primary Icon is hovered.|
| __PrimaryPressedIconUrl__ |Gets or sets the URL to the image showed when the Primary Icon is pressed.|
| __PrimaryIconHeight__ |Gets or sets the Height of the Primary icon.|
| __PrimaryIconWidth__ |Gets or sets the Width of the Primary icon.|
| __PrimaryIconCssClass__ |Gets or sets the CSS class applied to the Primary icon.|
| __SecondaryIconUrl__ |Gets or sets the URL to the image used as Primary Icon.|
| __SecondaryHoveredIconUrl__ |Gets or sets the URL to the image showed when the Primary Icon is hovered.|
| __SecondaryPressedIconUrl__ |Gets or sets the URL to the image showed when the Primary Icon is pressed.|
| __SecondaryIconHeight__ |Gets or sets the Height of the Primary icon.|
| __SecondaryIconWidth__ |Gets or sets the Width of the Primary icon.|
| __SecondaryIconCssClass__ |Gets or sets the CSS class applied to the Primary icon.|
| __PrimaryIconTop__ |Gets or sets the top edge of the primary icon, relative to the RadButton control's wrapper element.|
| __PrimaryIconLeft__ |Gets or sets the left edge of the primary icon, relative to the RadButton control's wrapper element.|
| __PrimaryIconRight__ |Gets or sets the right edge of the primary icon, relative to the RadButton control's wrapper element.|
| __PrimaryIconBottom__ |Gets or sets the bottom edge of the primary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconTop__ |Gets or sets the top edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconLeft__ |Gets or sets the left edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconRight__ |Gets or sets the right edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __SecondaryIconBottom__ |Gets or sets the bottom edge of the secondary icon, relative to the RadButton control's wrapper element.|
| __ImageUrl__ |Gets or sets the URL to the image used as button.|
| __HoveredImageUrl__ |Gets or sets the URL to the image showed when the RadButton is hovered.|
| __IsBackgroundImage__ |Gets or sets a bool value indicating how the image is used - i.e. as a background image or as an Image Button.|



## Server - side Events:


>caption  

| Property | Description |
| ------ | ------ |
| __OnClick__ |raised when the RadButton is clicked. (AutoPostBack=true)|
| __OnCommand__ |raised when the RadButton has Command specified.|
| __OnCheckedChanged__ |raised when the Checked property of the RadButton, with ButtonType:ToggleButton, is changed.|
| __OnToggleStateChanged__ |raised when the State property of the RadButton, with ButtonType:ToggleButton, is changed|
