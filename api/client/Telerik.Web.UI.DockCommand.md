---
title: Telerik.Web.UI.DockCommand
description: Telerik.Web.UI.DockCommand
slug: Telerik.Web.UI.DockCommand
---

# Telerik.Web.UI.DockCommand : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.DockCommand]({%slug Telerik.Web.UI.DockCommand%})*


## Methods

###  conditionalPostback

Performs a post back if the dock has AutoPostBack enabled.

#### Parameters

##### parameter `String`

The parameter passed to the server when post back is performed.

#### Returns

`None` 

### get_autoPostBack

Gets the bool value indicating whether the command will perform post back.

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the command will perform post back.

### get_clientTypeName

#### Parameters

#### Returns

`String` 

### get_cssClass

Gets the CSS class of the DockCommand.

#### Parameters

#### Returns

`String` The CSS class of the DockCommand.

### get_name

Gets the name of the command.

#### Parameters

#### Returns

`String` The name of the command.

### get_radDock

Gets the parent Telerik.Web.UI.RadDock control.

#### Parameters

#### Returns

`Telerik.Web.UI.RadDock` The parent Telerik.Web.UI.RadDock control.

### get_text

Gets the text of the command.

#### Parameters

#### Returns

`String` The text of the command

### onCommand

The Command item's main method. Override this method to implement custom logic.

#### Parameters

##### e `Sys.UI.DomEvent`

#### Returns

`None` 

### raise_command

Raises the OnClientCommand event.

#### Parameters

##### args `Sys.CancelEventArgs`

#### Returns

`None` 

### set_autoPostBack

Sets a bool value indicating whether the command will perform post back.

#### Parameters

##### value `Boolean`

The bool value indicating whether the command will perform post back.

#### Returns

`None` 

### set_clientTypeName

#### Parameters

##### value `String`

#### Returns

`None` 

### set_cssClass

Sets a CSS class to the DockCommand.

#### Parameters

##### value `String`

The CSS class of the DockCommand.

#### Returns

`None` 

### set_name

Sets a name to the command.

#### Parameters

##### value `String`

The name of the command.

#### Returns

`None` 

### set_radDock

Sets a parent Telerik.Web.UI.RadDock control.

#### Parameters

##### value `Telerik.Web.UI.RadDock`

The parent Telerik.Web.UI.RadDock control.

#### Returns

`None` 

### set_text

Sets a text to the command.

#### Parameters

##### value `String`

The text of the command.

#### Returns

`None` 


## Events

### command

The command client-side event occurs when the user clicks on a command in the RadDock title bar.

#### Event Data

##### sender `Telerik.Web.UI.DockCommand`

The DockComamnd instance raised the event. 

##### args `Sys.CancelEventArgs`

The event arguments 




