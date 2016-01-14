---
title: Telerik.Web.UI.DockCommand
page_title: Telerik.Web.UI.DockCommand
description: Telerik.Web.UI.DockCommand
---

# Telerik.Web.UI.DockCommand

Represents a custom command item in a RadDock control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.DockCommand

## Properties

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server 
            automatically occurs when the user drags the RadDock control.

###  ClientTypeName `String`

Specifies the name of the type of the client object, which 
            will be instantiated when the command is initialized for the first time.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client.

###  Name `String`

Specifies the name of the command. The value of this property is used 
            to determine on the server which command was clicked on the client.

###  OnClientCommand `String`

Gets or sets the client-side script that executes when the Command event is raised
            on the client.

###  ShortCut `String`

Get ot set the the shortcut key that executes the command

###  Text `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button.

## Methods

###  CreateElement

Creates an HtmlAnchor control with applied CssClass and Title.

#### Returns

`System.Web.UI.Control` An HtmlAnchor control.

