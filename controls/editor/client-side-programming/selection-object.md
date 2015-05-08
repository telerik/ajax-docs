---
title: Selection Object
page_title: Selection Object | RadEditor for ASP.NET AJAX Documentation
description: Selection Object
slug: editor/client-side-programming/selection-object
tags: selection,object
published: True
position: 4
---

# Selection Object

The Selection object exposes the following public methods and properties to control its behavior:

>caption Selection Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|collapse|`Boolean`||Collapses a selection to the starting or ending position.The method takes the following arguments: **toStart** - The direction in which to collapse the selection. If true the selection will collapse from end to start.|
|getBrowserSelection||Object|Returns the browser's Selection object|
|getHtml||String|Returns the selection's content as HTML|
|getParentElement||Element|Returns a reference to the selection's parent DOM element|
|getRange||Object|Returns a reference to a range object|
|getText||String|Returns the selected content as plain text|
|isControl||Boolean|Specifies whether the current selection is a control or not.|
|moveToElementText|`Element`||Recreates the selection range.The method takes the following arguments: **element** - DOM element to be selected.|
|pasteHtml|`String`, `Boolean`||Pastes string at current selectionThe method takes the following arguments: **htmlString** - String to be pasted **bSelContent** - Specifies whether to select pasted content after execution|
|selectElement|`Element`||Adds an element to current selectionThe method takes the following arguments: **oElement** - DOM element to be added|
|selectRange|`Object`||Selects the previously stored rangeThe method takes the following arguments: **range|
