---
title: Properties and Events
page_title: Properties and Events | RadButton for ASP.NET AJAX Documentation
description: Properties and Events
slug: button/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadButton common features (properties)

| Property | Description |
| ------ | ------ |
| **ButtonType** |Gets or sets the type of the button. The following types exist: StandardButton (default), LinkButton, ToggleButton. Each ButtonType provides certain functionality that is unique. More information on the features of different button types can be found in each button category.|
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server.|
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadButton is clicked.|
| **Primary** |Gets or sets a bool value indicating whether the button uses its primary appearance.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadButton is clicked.|
| **Text** |Gets or sets the text displayed in the RadButton control.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadButton control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadButton control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadButton control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadButton control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadButton is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadButton is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadButton is clicked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadButton|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadButton|
| **OnClientCheckedChanged** |Sets a name of a JavaScript function that will be called when the mouse Checked property of the RadButton is changed|
| **OnClientToggleStateChanging** |Sets a name of a JavaScript function that will be called when the toggle state of the RadButton is changed. The event is cancelable, and when cancelled, **OnClientCheckedChanged** and **OnClientToggleStateChanged** are not raised.|
| **OnClientToggleStateChanged** |Sets a name of a JavaScript function that will be called when when the toggle state of the RadButton is changed, after the **OnClientToggleStateChanging** event.|

## Icon specific features (properties)

| Property | Description |
| ------ | ------ |
| **ShowPrimaryIcon** |Gets or sets a bool value indicating whether the RadButton will show the Primary icon.|
| **ShowSecondaryIcon** |Gets or sets a bool value indicating whether the RadButton will show the|
| **PrimaryIconUrl** |Gets or sets the URL to the image used as Primary Icon.|
| **PrimaryHoveredIconUrl** |Gets or sets the URL to the image showed when the Primary Icon is hovered.|
| **PrimaryPressedIconUrl** |Gets or sets the URL to the image showed when the Primary Icon is pressed.|
| **PrimaryIconHeight** |Gets or sets the Height of the Primary icon.|
| **PrimaryIconWidth** |Gets or sets the Width of the Primary icon.|
| **PrimaryIconCssClass** |Gets or sets the CSS class applied to the Primary icon.|
| **SecondaryIconUrl** |Gets or sets the URL to the image used as Secondary Icon.|
| **SecondaryHoveredIconUrl** |Gets or sets the URL to the image showed when the Secondary Icon is hovered.|
| **SecondaryPressedIconUrl** |Gets or sets the URL to the image showed when the Secondary Icon is pressed.|
| **SecondaryIconHeight** |Gets or sets the Height of the Secondary icon.|
| **SecondaryIconWidth** |Gets or sets the Width of the Secondary icon.|
| **SecondaryIconCssClass** |Gets or sets the CSS class applied to the Secondary icon.|
| **PrimaryIconTop** |Gets or sets the top edge of the primary icon, relative to the RadButton control's wrapper element.|
| **PrimaryIconLeft** |Gets or sets the left edge of the primary icon, relative to the RadButton control's wrapper element.|
| **PrimaryIconRight** |Gets or sets the right edge of the primary icon, relative to the RadButton control's wrapper element.|
| **PrimaryIconBottom** |Gets or sets the bottom edge of the primary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconTop** |Gets or sets the top edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconLeft** |Gets or sets the left edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconRight** |Gets or sets the right edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconBottom** |Gets or sets the bottom edge of the secondary icon, relative to the RadButton control's wrapper element.|

## Image specific features (properties)

| Property | Description |
| ------ | ------ |
| **IsBackgroundImage** |Gets or sets a bool value indicating how the image is used - i.e. as a background image or as an Image Button.|
| **ImageUrl** |Gets or sets the URL to the image used as button.|
| **HoveredImageUrl** |Gets or sets the URL to the image showed when the RadButton is hovered.|
| **PressedImageUrl** |Gets or sets the URL to the image showed when the RadButton is pressed.|
| **EnableImageButton** |Gets or sets a bool value indicating whether the RadButton is rendered as Image Button.|

## SplitButton specific features (properties)

| Property | Description |
| ------ | ------ |
| **EnableSplitButton** |Gets or sets a bool value that indicates whether the SplitButton functionality will be enabled|
| **SplitButtonPosition** |Gets or sets the position where the SplitButton will appear, relatively to the main button (Left or Right). Position: Right (default), Left|
| **SplitButtonCssClass** |Gets or sets the CSS class applied to the SplitButton|

## Type:Button specific features (properties)

| Property | Description |
| ------ | ------ |
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|

## Type:LinkButton specific features (properties)

| Property | Description |
| ------ | ------ |
| **NavigateUrl** |Gets or sets the URL of the page to navigate to, without posting the page back to the server. When this property is sets, the button is rendered as an <a/> (anchor) element.|
| **Target** |Gets or sets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.|

## Type: ToggleButton specific features (properties)

| Property | Description |
| ------ | ------ |
| **ToggleType** |Gets or sets the type of the Toggle Button. There are three toggle types: None (default), Radio, CheckBox, CustomToggle|
| **GroupName** |Valid when ToggleType: Radio. Gets or sets the name of the group that the radio button belongs to.|
| **Checked** |Gets or sets a bool value indicating whether the RadButton control is checked. In the case when the ToggleButton has more than 2(two) states, the control is not checked in the case when the current state of the RadButton is the First state, in all other cases it is Checked.|
| **SelectedToggleState** |Gets or sets the current state of the RadButton.|
| **SelectedToggleStateIndex** |Gets or sets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.|
| **ToggleStates** |Collection of **RadButtonToggleState** . The different states are controlled through a collection of states. The collection can contain, maximum of four states. The order of switching the states is determined by the 0-based position index at which the state occurs in the collection. So, the first item in the ToggleStates, is the first state, the second item is the second state, and so on. When the ToggleType is Radio or CheckBox, the first item (state) of the ToggleStates is used as the alternate state of the RadButton.|

## RadButtonToggleState specific features (properties)

| Property | Description |
| ------ | ------ |
| **Text** |Gets or sets the text displayed in the RadButton control.|
| **Selected** |Gets or sets a bool value indicating whether the ToggleState is selected or not.|
| **CssClass** |Gets or sets the CSS class applied to the RadButton control.|
| **HoveredCssClass** |Gets or sets the CSS class applied to the RadButton control when the mouse pointer is over the control.|
| **PressedCssClass** |Gets or sets the CSS class applied to the RadButton control when the control is pressed.|
| **Width** |Gets or sets the width of the RadButton control.|
| **Height** |Gets or sets the height of the RadButton control.|
| **PrimaryIconUrl** |Gets or sets the URL to the image used as Primary Icon.|
| **PrimaryHoveredIconUrl** |Gets or sets the URL to the image showed when the Primary Icon is hovered.|
| **PrimaryPressedIconUrl** |Gets or sets the URL to the image showed when the Primary Icon is pressed.|
| **PrimaryIconHeight** |Gets or sets the Height of the Primary icon.|
| **PrimaryIconWidth** |Gets or sets the Width of the Primary icon.|
| **PrimaryIconCssClass** |Gets or sets the CSS class applied to the Primary icon.|
| **SecondaryIconUrl** |Gets or sets the URL to the image used as Primary Icon.|
| **SecondaryHoveredIconUrl** |Gets or sets the URL to the image showed when the Primary Icon is hovered.|
| **SecondaryPressedIconUrl** |Gets or sets the URL to the image showed when the Primary Icon is pressed.|
| **SecondaryIconHeight** |Gets or sets the Height of the Primary icon.|
| **SecondaryIconWidth** |Gets or sets the Width of the Primary icon.|
| **SecondaryIconCssClass** |Gets or sets the CSS class applied to the Primary icon.|
| **PrimaryIconTop** |Gets or sets the top edge of the primary icon, relative to the RadButton control's wrapper element.|
| **PrimaryIconLeft** |Gets or sets the left edge of the primary icon, relative to the RadButton control's wrapper element.|
| **PrimaryIconRight** |Gets or sets the right edge of the primary icon, relative to the RadButton control's wrapper element.|
| **PrimaryIconBottom** |Gets or sets the bottom edge of the primary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconTop** |Gets or sets the top edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconLeft** |Gets or sets the left edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconRight** |Gets or sets the right edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **SecondaryIconBottom** |Gets or sets the bottom edge of the secondary icon, relative to the RadButton control's wrapper element.|
| **ImageUrl** |Gets or sets the URL to the image used as button.|
| **HoveredImageUrl** |Gets or sets the URL to the image showed when the RadButton is hovered.|
| **IsBackgroundImage** |Gets or sets a bool value indicating how the image is used - i.e. as a background image or as an Image Button.|

## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |raised when the RadButton is clicked. (AutoPostBack=true)|
| **OnCommand** |raised when the RadButton has Command specified.|
| **OnCheckedChanged** |raised when the Checked property of the RadButton, with ButtonType:ToggleButton, is changed.|
| **OnToggleStateChanged** |raised when the State property of the RadButton, with ButtonType:ToggleButton, is changed|
