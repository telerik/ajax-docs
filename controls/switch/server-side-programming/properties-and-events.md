---
title: Properties and Events
page_title: Properties and Events - RadSwitch
description: Check our Web Forms article about Properties and Events.
slug: switch/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadSwitch common features (properties)

| Property | Description |
| ------ | ------ |
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server. Default value is `true`. |
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadSwitch is clicked.|
| **Checked** |Gets or sets a nullable bool value indicating whether the RadSwitch is checked. If a null value is set, the value will default to false.|
| **CurrentToggleState** |Gets the On or Off toggle state based on the `Checked` property.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadSwitch is clicked.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadSwitch control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadSwitch control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **CssClass** |Define the CSS class for the RadSwitch.|
| **DisabledCssClass** |Define the CSS class for the RadSwitch when it is disabled.|
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadSwitch control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadSwitch control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadSwitch is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadSwitch is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadSwitch is clicked, after the OnClientClicking event.|
| **OnClientCheckedChanging** |Sets a name of a JavaScript function that will be called when the RadSwitch is checked/unchecked. The event is cancelable.|
| **OnClientCheckedChanged** |Sets a name of a JavaScript function that will be called when the RadSwitch is checked/unchecked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadSwitch|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadSwitch|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadSwitch control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|
| **Value** | Value associated with the switch.|

### RadSwitch -> ToggleStates common features (properties)

| Property | Description |
| ------ | ------ |
| **ToggleStateOff** |Configures the OFF/Unchecked toggle state settings.|
| **ToggleStateOn** |Configure the ON/Checked toggle state settings.|

### RadSwitch -> ToggleStates -> ToggleStateOff common features (properties)

| Property | Description |
| ------ | ------ |
| **Text** |Gets or sets optional ToggleStateOff text. |
| **Value** |Gets or sets optional ToggleStateOff value.|

### RadSwitch -> ToggleStates -> ToggleStateOn common features (properties)

| Property | Description |
| ------ | ------ |
| **Text** |Gets or sets optional ToggleStateOn text. |
| **Value** |Gets or sets optional ToggleStateOn value.|


## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |Raised when the RadSwitch performs a postback.|
| **OnCommand** |Raised when the RadSwitch performs a postback.|
| **OnCheckedChanged** |Raised when the checked state of the RadSwitch has changed.|

The event order is:

1. OnCheckedChanged

1. OnClick

1. OnCommand
