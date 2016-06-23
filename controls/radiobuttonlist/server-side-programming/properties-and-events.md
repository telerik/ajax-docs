---
title: Properties and Events
page_title: Properties and Events | RadRadioButtonList for ASP.NET AJAX Documentation
description: Properties and Events
slug: radiobuttonlist/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadRadioButtonList common features (properties)

| Property | Description |
| ------ | ------ |
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server.|
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadRadioButtonList is clicked.|
| **Checked** |Gets or sets a nullable bool value indicating whether the RadRadioButtonList is checked. If a null value is set, the value will default to false.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadRadioButtonList is clicked.|
| **Text** |Gets or sets the text displayed in the RadRadioButtonList control.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadRadioButtonList control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadRadioButtonList control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **CssClass** |Define the CSS class for the RadRadioButtonList.|
| **DisabledCssClass** |Define the CSS class for the RadRadioButtonList when it is disabled.|
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadRadioButtonList control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadRadioButtonList control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadRadioButtonList is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadRadioButtonList is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadRadioButtonList is clicked, after the OnClientClicking event.|
| **OnClientCheckedChanging** |Sets a name of a JavaScript function that will be called when the RadRadioButtonList is checked/unchecked. The event is cancelable.|
| **OnClientCheckedChanged** |Sets a name of a JavaScript function that will be called when the RadRadioButtonList is checked/unchecked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadRadioButtonList|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadRadioButtonList|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadRadioButtonList control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|
| **Value** | Value associated with the checkbox.|


## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |Raised when the RadRadioButtonList performs a postback.|
| **OnCommand** |Raised when the RadRadioButtonList performs a postback.|
| **OnCheckedChanged** |Raised when the checked state of the RadRadioButtonList has changed.|

The event order is:

1. OnCheckedChanged

1. OnClick

1. OnCommand

