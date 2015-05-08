---
title: ShortcutManager Object
page_title: ShortcutManager Object | RadEditor for ASP.NET AJAX Documentation
description: ShortcutManager Object
slug: editor/client-side-programming/shortcutmanager-object
tags: shortcutmanager,object
published: True
position: 13
---

# ShortcutManager Object

The EditorShortCutManager object exposes the following public methods and properties to control its behavior:

>caption EditorShortCutManager Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|addShortCut|`String`, `String`||Adds a shortcut from collection.The method takes the following arguments: **shortcutName** - Name of the shortcut **shortcutString** - The key combination of the shortcut|
|findShortCutByName|`String`|Telerik.Web.UI.EditorShortCut|Returns the ShortCut instance found by its name.The method takes the following arguments: **shortcutName** - The DOM event.|
|isShortCutHit|`Object`|Boolean|Indicates whether a shortcut is hit.The method takes the following arguments: **evt** - The DOM event.|
|removeShortCut|`String`||Removes a shortcut from collection.The method takes the following arguments: **shortcutName** - Name of the the shortcut|
|setShortCut|`String`, `String`||Edits an existing ShortCut.The method takes the following arguments: **shortcutName** - Name of the shortcut **shortcutString** - The key combination of the shortcut|
