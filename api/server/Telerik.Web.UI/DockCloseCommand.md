---
title: Telerik.Web.UI.DockCloseCommand
page_title: Telerik.Web.UI.DockCloseCommand
description: Telerik.Web.UI.DockCloseCommand
---

# Telerik.Web.UI.DockCloseCommand

Represents the Close command item in a RadDock control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.DockCommand
* Telerik.Web.UI.DockCloseCommand

## Properties

###  Text `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client.

###  Name `String`

Specifies the name of the command. The value of this property is used 
            to determine on the server which command was clicked on the client.

###  ClientTypeName `String`

Specifies the name of the type of the client object, which 
            will be instantiated when the command is initialized for the first time.

###  Name `String`

Specifies the name of the command. The value of this property is used 
            to determine on the server which command was clicked on the client.

###  Text `String`

Specifies the text, which will be displayed as tooltip when the user
            hovers the mouse cursor over the command button.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server 
            automatically occurs when the user drags the RadDock control.

###  ShortCut `String`

Get ot set the the shortcut key that executes the command

###  OnClientCommand `String`

Gets or sets the client-side script that executes when the Command event is raised
            on the client.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Command item
            on the client.

## Methods

###  CreateElement

Creates an HtmlAnchor control with applied CssClass and Title.

#### Returns

`System.Web.UI.Control` An HtmlAnchor control.

###  GetCssClass

Returns the value of the CssClass property. This method should be overridden
            in multistate commands, such as DockToggleCommand, to return one of the 
            CssClass and AlternateCssClass properties, depending on the command state.

#### Returns

`System.String` 

###  GetText

Returns the value of the Text property. This method should be overridden
            in multistate commands, such as DockToggleCommand, to return one of the 
            Text and AlternateText properties, depending on the command state.

#### Returns

`System.String` 

