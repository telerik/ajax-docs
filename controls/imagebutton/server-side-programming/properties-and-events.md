---
title: Properties and Events
page_title: Properties and Events | RadImageButton for ASP.NET AJAX Documentation
description: Properties and Events
slug: imagebutton/server-side-programming/properties-and-events
tags: properties,and,events
published: True
position: 0
---

# Properties and Events

## RadImageButton Common Features (properties)

| Property | Description |
| ------ | ------ |
| **AutoPostBack** |Gets or sets a bool value indicating whether the control will automatically post the page back to the server.|
| **CausesValidation** |Gets or sets a bool value indicating whether validation is performed when the RadImageButton is clicked.|
| **PostbackUrl** |Gets or sets the URL of the page to post to from the current page, when the RadImageButton is clicked.|
| **Text** |Gets or sets the text displayed in the RadImageButton control.|
| **ValidationGroup** |Gets or sets the group of controls for which the RadImageButton control causes validation when it posts back to the server.|
| **CommandName** |Gets or sets the command name associated with the RadImageButton control that is passed to the *Command* event.|
| **CommandArgument** |Gets or sets an optional parameter passed to the *Command* event along with the associated CommandName.|
| **HoveredCssClass** |Gets or sets the CSS class, when the mouse pointer is hovered over the RadImageButton control.|
| **PressedCssClass** |Gets or sets the CSS class, when the RadImageButton control is pressed.|
| **OnClientLoad** |Sets a name of a JavaScript function that will be called when the RadImageButton is loaded on the page|
| **OnClientClicking** |Sets a name of a JavaScript function that will be called when the RadImageButton is clicked. The event is cancelable.|
| **OnClientClicked** |Sets a name of a JavaScript function that will be called when the RadImageButton is clicked, after the OnClientClicking event.|
| **OnClientMouseOver** |Sets a name of a JavaScript function that will be called when the mouse pointer hovers over the RadImageButton|
| **OnClientMouseOut** |Sets a name of a JavaScript function that will be called when the mouse pointer leaves the RadImageButton|
| **UseSubmitBehavior** |Gets or sets a bool value indicating whether the RadImageButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.|
| **SingleClick** |Gets or sets a bool value indicating whether the **SingleClick** functionality is enabled or disabled.|
| **SingleClickText** |Gets or sets the text that is shown when single-click is being processed.|

## Image Specific Features (properties)

| Property | Description |
| ------ | ------ |
| **Url** |Specifies the path to the image.|
| **DisabledImageUrl** |Specifies the path to the image when the button is disabled.|
| **HoveredImageUrl** |Specifies the path to the image when the mouse is over the button.|
| **PressedImageUrl** |Specifies the path to the image of a pressed button.|
| **Sizing** |Specifies the way the image is sized in the button. Available values are: **Original** and **Stretch**.|

## Server - side Events:

| Property | Description |
| ------ | ------ |
| **OnClick** |raised when the RadImageButton is clicked. (AutoPostBack=true)|
| **OnCommand** |raised when the RadImageButton has Command specified.|

