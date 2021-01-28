---
title: Properties and Events
page_title: Properties and Events - RadCheckBox
description: Check our Web Forms article about Properties and Events.
slug: checkbox/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadCheckBox common features (properties)

| Property | Description |
| ------ | ------ |
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server. Default value is `true`. |
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadCheckBox is clicked.|
| **Checked** |Gets or sets a nullable bool value indicating whether the RadCheckBox is checked. If a null value is set, the value will default to false.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadCheckBox is clicked.|
| **Text** |Gets or sets the text displayed in the RadCheckBox control.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadCheckBox control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadCheckBox control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **CssClass** |Define the CSS class for the RadCheckBox.|
| **DisabledCssClass** |Define the CSS class for the RadCheckBox when it is disabled.|
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadCheckBox control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadCheckBox control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadCheckBox is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadCheckBox is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadCheckBox is clicked, after the OnClientClicking event.|
| **OnClientCheckedChanging** |Sets a name of a JavaScript function that will be called when the RadCheckBox is checked/unchecked. The event is cancelable.|
| **OnClientCheckedChanged** |Sets a name of a JavaScript function that will be called when the RadCheckBox is checked/unchecked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadCheckBox|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadCheckBox|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadCheckBox control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|
| **Value** | Value associated with the checkbox.|


## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |Raised when the RadCheckBox performs a postback.|
| **OnCommand** |Raised when the RadCheckBox performs a postback.|
| **OnCheckedChanged** |Raised when the checked state of the RadCheckBox has changed.|

The event order is:

1. OnCheckedChanged

1. OnClick

1. OnCommand
