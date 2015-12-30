---
title: Properties and Events
page_title: Properties and Events | RadToggleButton for ASP.NET AJAX Documentation
description: Properties and Events
slug: togglebutton/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadToggleButton common features (properties)

| Property | Description |
| ------ | ------ |
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server.|
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadToggleButton is clicked.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadToggleButton is clicked.|
| **Primary** |Gets or sets a bool value indicating whether the button uses its primary appearance.|
| **Text** |Gets or sets the text displayed in the RadToggleButton control.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadToggleButton control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadToggleButton control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **CssClass** |  Defines the CSS class for the RadToggleButton.|
| **HoveredCssClass** |Gets or sets the CSS class when the mouse pointer is hovered over the RadToggleButton control.|
| **PressedCssClass** |Gets or sets the CSS class when the RadToggleButton control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadToggleButton is loaded on the page.|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadToggleButton is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadToggleButton is clicked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadToggleButton.|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadToggleButton.|
| **OnClientToggleStateChanging** |Sets a name of a JavaScript function that will be called prior to the RadToggleButton state change. The event is cancelable.|
| **OnClientToggleStateChanged** |Sets a name of a JavaScript function that will be called when the RadToggleButton state is changed, after the OnClientToggleStateChanging event.|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadToggleButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|
| **Value** | Value associated with the button.| 
| **Width** |  Sets the width of the button.|
| **Height** | Get/Set the height of the button.|
| **SelectedToggleSate** | Gets or sets the current state of the button.|
| **SelectedToggleSateIndex** | Gets or sets the index of the currently selected ToggleState of the Button control, when used as a custom toggle button.|
| **ToggleSates** | Collection of type **ButtonToggleState**.|

## ButtonToggleState specific features (properties)

| Property | Description |
| ------ | ------ |
| **Text** |Gets or sets the text displayed in the ButtonToggleState.|
| **Value** | Value associated with the button.| 
| **Selected** | Gets or sets a bool value indicating whether the ToggleState is selected or not.|
| **CssClass** | Defines the CSS class for the ButtonToggleState.| 
| **HoveredCssClass** |Gets or sets the CSS class when the mouse pointer is hovered over the ButtonToggleState control.| 
| **PressedCssClass** |Gets or sets the CSS class when the ButtonToggleState control is pressed.|
| **Width** |  Sets the width of the ButtonToggleState.| 
| **Height** | Get/Set the height of the ButtonToggleState.| 
| **CommandName** |Gets or sets the command name associated with the RadToggleButton control that is passed to the *Command* event.| 
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.| 


### Icon specific features (properties)

| Property | Description |
| ------ | ------ |
| **Url** |Gets or sets the URL to the image used as an icon.|
| **HoveredUrl** |Gets or sets the URL to the image showed when the icon is hovered.|
| **PressedUrl** |Gets or sets the URL to the image showed when the icon is pressed.|
| **Height** |Gets or sets the height of the icon.|
| **Width** |Gets or sets the width of the icon.|
| **CssClass** |Gets or sets the CSS class applied to the icon.|
| **HoveredCssClass** | Gets or sets the CSS class applied to the RadToggleButton control when the mouse pointer is over the control.|
| **PressedCssClass** | Defines the CSS class of the icon element, when the RadToggleButton is pressed.|
| **Top** |Gets or sets the top edge of the icon, relative to the RadToggleButton control's wrapper element.|
| **Left** |Gets or sets the left edge of the icon, relative to the RadToggleButton control's wrapper element.|

### Image specific features (properties)

| Property | Description |
| ------ | ------ |
| **Url** |Specifies the path to the image.|
| **DisabledUrl** |Specifies the path to the image when the button is disabled.|
| **HoveredUrl** |Specifies the path to the image when the mouse is over the RadToggleButton.|
| **PressedUrl** |Specifies the path to the image of a pressed RadToggleButton.|
| **Sizing** |Specifies the way the image is sized in the RadToggleButton. Available values are: **Original** and **Stretch**.|

## Server-side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |Raised when the RadToggleButton performs a postback.|
| **OnCommand** |Raised when the RadToggleButton performs a postback.|
| **OnToggleStateChanged** |Raised when the state of the RadToggleButton has changed.|

The event order is:

1. OnToggleStateChanged

1. OnClick

1. OnCommand

