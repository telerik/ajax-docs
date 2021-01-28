---
title: Telerik.Web.UI.Editor.DefaultToolAdapter
description: Telerik.Web.UI.Editor.DefaultToolAdapter
slug: Telerik.Web.UI.Editor.DefaultToolAdapter
---

# Telerik.Web.UI.Editor.DefaultToolAdapter : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.Editor.DefaultToolAdapter]({%slug Telerik.Web.UI.Editor.DefaultToolAdapter%})*


## Methods

### createContextMenus

Forces the context menus of the RadEditor to render.

#### Parameters

#### Returns

`None`

### enableContextMenus

Sets the enable/disable state of the context menus. 

#### Parameters

##### value `Boolean` 

Indicates whether to disable or enable the context menus.

#### Returns

`None`

### get_animationDuration

Returns the animation duration in milliseconds.

#### Parameters

#### Returns

`Number`  

### get_animationType

Gets the animation type.

#### Parameters

#### Returns

`Telerik.Web.UI.Editor.EditorToolBarAnimationType`
Instance of Telerik.Web.UI.Editor.EditorToolBarAnimationType enum that represents the animation type.

### get_contentAreaMode

Returns the value set to the ContnetAreaMode property.

#### Parameters

#### Returns

`Telerik.Web.UI.EditorContentAreaMode`  

### get_editor

Returns the RadEditor instance initialized the toolbar.  

#### Parameters

#### Returns

`Telerik.Web.UI.RadEditor`  

### get_toolbarHolder

Returns the RadWidnow instance which serves as a toolbar for the editor (NOTE: With Default and RibbonBar toolbar modes, returns null).  

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow`  

### get_toolJSON

Returns an array with the JSON literals of the tools.

#### Parameters

#### Returns

`Array`  

### get_tools

Returns all tools/commands available in the toolbar.

#### Parameters

#### Returns

`Array` 

### get_window

Returns the RadWidnow instance which serves as a toolbar for the editor (NOTE: With Default and RibbonBar toolbar modes, returns null).  

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindow`  

### getContextMenuByTagName

Returns a reference to the context menu object

#### Parameters

##### tagName `String`

The Tag name of the context menu

#### Returns

`Telerik.Web.UI.EditorContextMenu` Reference to the context menu object

### getToolByName

Returns a reference to a tool, specified by its name.

#### Parameters

##### toolName `String`

The name of the tool

#### Returns

`Telerik.Web.UI.EditorButton` 

### set_animationDuration

Sets the animation duration in milliseconds.

#### Parameters

##### value `Number` 

#### Returns

`None` 

### set_animationType

Sets the animation type.

#### Parameters

##### value `Telerik.Web.UI.Editor.EditorToolBarAnimationType`

Instance of Telerik.Web.UI.Editor.EditorToolBarAnimationType enum.

#### Returns

`None` 

### set_editor

Sets the RadEditor instance associated to the toolbar.  

#### Parameters

##### editor `Telerik.Web.UI.RadEditor`

#### Returns

`None`  

### set_toolJSON

Sets a new array with the JSON literals of the tools.

#### Parameters

##### value `Array`

#### Returns

`None`  

### setFocus

Focuses the first tool in the toolbar.

#### Parameters

#### Returns

`None`

### setToolState

Sets the state of the tools in the specified tools array.

#### Parameters

##### toolsArray `Array`

Array of RadEditor tools/commands (NOTE: If array is not provided, all tools will be updated with the new state). 

##### state? `Telerik.Web.UI.Editor.CommandStates` 

The state to be used for this group of tools.

#### Returns

`None` 


## Events

### toolClick

This event is raised when a value is selected.

#### Event Data

##### sender `Telerik.Web.UI.EditorButton`

The EditorButton instance raised the event.

##### args `Telerik.Web.UI.EditorCommandEventArgs`

The event arguments.

