---
title: Telerik.Web.UI.DockPinUnpinCommand
page_title: Telerik.Web.UI.DockPinUnpinCommand
description: Telerik.Web.UI.DockPinUnpinCommand
---

# Telerik.Web.UI.DockPinUnpinCommand

Represents the PinUnpin command item in a RadDock control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.DockCommand
* Telerik.Web.UI.DockToggleCommand
* Telerik.Web.UI.DockPinUnpinCommand

## Properties

###  AlternateCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client when State is Alternate (Pinned).

###  AlternateCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client when State is Alternate.

###  AlternateText `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button when State is Alternate (Pinned).

###  AlternateText `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button when State is Alternate.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server 
            automatically occurs when the user drags the RadDock control.

###  ClientTypeName `String`

Specifies the name of the type of the client object, which 
            will be instantiated when the command is initialized for the first time.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client.

###  Name `String`

Specifies the name of the command. The value of this property is used 
            to determine on the server which command was clicked on the client.

###  Name `String`

Specifies the name of the command. The value of this property is used 
            to determine on the server which command was clicked on the client.

###  OnClientCommand `String`

Gets or sets the client-side script that executes when the Command event is raised
            on the client.

###  ShortCut `String`

Get ot set the the shortcut key that executes the command

###  State `DockToggleCommandState`

Gets or sets the initial state of the command item. If the value of this property
            is Primary, the values of the Text and CssClass properties will be used initially,
            otherwise the command will use AlternateText and AlternateCssClass.

###  State `DockToggleCommandState`

Gets or sets the initial state of the command item. If the value of this property
            is Primary, the values of the Text and CssClass properties will be used initially,
            otherwise the command will use AlternateText and AlternateCssClass.

###  Text `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button.

###  Text `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button.

## Methods

###  CreateElement

Creates an HtmlAnchor control with applied CssClass and Title.

#### Returns

`System.Web.UI.Control` An HtmlAnchor control.

