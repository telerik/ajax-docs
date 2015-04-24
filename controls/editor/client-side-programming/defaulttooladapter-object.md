---
title: DefaultToolAdapter Object
page_title: DefaultToolAdapter Object | RadEditor for ASP.NET AJAX Documentation
description: DefaultToolAdapter Object
slug: editor/client-side-programming/defaulttooladapter-object
tags: defaulttooladapter,object
published: True
position: 7
---

# DefaultToolAdapter Object



The DefaultToolAdapter object exposes the following public methods and properties to control its behavior:

## 

DefaultToolAdapter Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|createContextMenus|||Forces the context menus of the RadEditor to render.|
|enableContextMenus|`Boolean`||Sets the enable/disable state of the context menus.The method takes the following arguments:

1. value - Indicates whether to disable or enable the context menus.|
|get_animationDuration||Number|Returns the animation duration in milliseconds.|
|get_animationType||Telerik.Web.UI.Editor.EditorToolBarAnimationType|Gets the animation type.|
|get_contentAreaMode||Telerik.Web.UI.EditorContentAreaMode|Returns the value set to the ContnetAreaMode property.|
|get_editor||Telerik.Web.UI.RadEditor|Returns the RadEditor instance initialized the toolbar.|
|get_toolbarHolder||Telerik.Web.UI.RadWindow|Returns the RadWidnow instance which serves as a toolbar for the editor (NOTE: With Default and RibbonBar toolbar modes, returns null).|
|get_toolJSON||Array|Returns an array with the JSON literals of the tools.|
|get_tools||Array|Returns all tools/commands available in the toolbar.|
|get_window||Telerik.Web.UI.RadWindow|Returns the RadWidnow instance which serves as a toolbar for the editor (NOTE: With Default and RibbonBar toolbar modes, returns null).|
|getContextMenuByTagName|`String`|Telerik.Web.UI.EditorContextMenu|Returns a reference to the context menu objectThe method takes the following arguments:

1. tagName - The Tag name of the context menu|
|getToolByName|`String`|Telerik.Web.UI.EditorButton|Returns a reference to a tool, specified by its name.The method takes the following arguments:

1. toolName - The name of the tool|
|set_animationDuration|`Number`||Sets the animation duration in milliseconds.The method takes the following arguments:

1. value - The animation duration in ms.|
|set_animationType|`Telerik.Web.UI.Editor.EditorToolBarAnimationType`||Sets the animation type.The method takes the following arguments:

1. value - Instance of Telerik.Web.UI.Editor.EditorToolBarAnimationType enum.|
|set_editor|`Telerik.Web.UI.RadEditor`||Sets the RadEditor instance associated to the toolbar.The method takes the following arguments:

1. editor - The new editor instance.|
|set_toolJSON|`Array`||Sets a new array with the JSON literals of the tools.The method takes the following arguments:

1. value - The new tools' JSON literal.|
|setFocus|||Focuses the first tool in the toolbar.|
|setToolState|`Array`, `Telerik.Web.UI.Editor.CommandStates`||Sets the state of the tools in the specified tools array.The method takes the following arguments:

1. toolsArray - Array of RadEditor tools/commands (NOTE: If array is not provided, all tools will be updated with the new state).

1. state? - The state to be used for this group of tools.|

## 

DefaultToolAdapter Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_toolClick|Function|Adds a handler for the toolClick DefaultToolAdapter client event.|
|remove_toolClick|Function|Removes a handler for the toolClick DefaultToolAdapter client event.|
