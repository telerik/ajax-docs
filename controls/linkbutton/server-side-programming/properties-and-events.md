---
title: Properties and Events
page_title: Properties and Events | RadLinkButton for ASP.NET AJAX Documentation
description: Properties and Events
slug: linkbutton/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadLinkButton common features (properties)

| Property | Description |
| ------ | ------ |
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server.|
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadLinkButton is clicked.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadLinkButton is clicked.|
| **Text** |Gets or sets the text displayed in the RadLinkButton control.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadLinkButton control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadLinkButton control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadLinkButton control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadLinkButton control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadLinkButton is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadLinkButton is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadLinkButton is clicked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadLinkButton|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadLinkButton|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadLinkButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|

## Icon specific features (properties)

| Property | Description |
| ------ | ------ |
| **Url** |Gets or sets the URL to the image used as icon.|
| **HoveredUrl** |Gets or sets the URL to the image showed when the icon is hovered.|
| **PressedUrl** |Gets or sets the URL to the image showed when the icon is pressed.|
| **Height** |Gets or sets the Height of the icon.|
| **Width** |Gets or sets the Width of the icon.|
| **CssClass** |Gets or sets the CSS class applied to the icon.|
| **Top** |Gets or sets the top edge of the icon, relative to the RadLinkButton control's wrapper element.|
| **Left** |Gets or sets the left edge of the icon, relative to the RadLinkButton control's wrapper element.|

## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |raised when the RadLinkButton is clicked. (AutoPostBack=true)|
| **OnCommand** |raised when the RadLinkButton has Command specified.|

