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
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadToggleButton control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadToggleButton control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadToggleButton is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadToggleButton is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadToggleButton is clicked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadToggleButton|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadToggleButton|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadToggleButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|

## Icon specific features (properties)

| Property | Description |
| ------ | ------ |
| **Url** |Gets or sets the URL to the image used as icon.|
| **HoveredUrl** |Gets or sets the URL to the image showed when the icon is hovered.|
| **PressedUrl** |Gets or sets the URL to the image showed when the icon is pressed.|
| **Height** |Gets or sets the Height of the icon.|
| **Width** |Gets or sets the Width of the icon.|
| **CssClass** |Gets or sets the CSS class applied to the icon.|
| **Top** |Gets or sets the top edge of the icon, relative to the RadToggleButton control's wrapper element.|
| **Left** |Gets or sets the left edge of the icon, relative to the RadToggleButton control's wrapper element.|

## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |raised when the RadToggleButton is clicked. (AutoPostBack=true)|
| **OnCommand** |raised when the RadToggleButton has Command specified.|

