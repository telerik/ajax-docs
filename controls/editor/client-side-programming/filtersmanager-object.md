---
title: FiltersManager Object
page_title: FiltersManager Object | UI for ASP.NET AJAX Documentation
description: FiltersManager Object
slug: editor/client-side-programming/filtersmanager-object
tags: filtersmanager,object
published: True
position: 8
---

# FiltersManager Object



The FiltersManager object exposes the following public methods and properties to control its behavior:

## 

FiltersManager Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add|`Telerik.Web.UI.Editor.Filter`||Add a content filter to the filters collectionThe method takes the following arguments:

1. filter - Instance of a Filter Object|
|addAt|`Telerik.Web.UI.Editor.Filter`, `Number`||Add a content filter to the filters collection at indexThe method takes the following arguments:

1. filter - Instance of a Filter Object

1. index - The index location where item should be inserted|
|clear|||Clears the content filters collection|
|get_enableXhtmlFilter||Boolean|Returns a boolean value which indicates whether the XHTML filter is enabled or disabled|
|getDesignContent|`String`|String|Fires when RadEditor's mode is changed to Design View Mode and executes all the String based content filtersThe method takes the following arguments:

1. contentAreaHtml - The RadEditor|
|getDesignContentDom|`Object`|Object|Fires when RadEditor's mode is changed to Design View Mode after getDesignContent() - executes all the DOM based content filtersThe method takes the following arguments:

1. contentArea - The content area DOM element|
|getFilterAt|`Number`|Telerik.Web.UI.Editor.Filter|Returns the content filter from the given IndexThe method takes the following arguments:

1. index - The index location of the filter in the FiltersCollection|
|getFilterByName|`String`|Telerik.Web.UI.Editor.Filter|Returns the content filter by nameThe method takes the following arguments:

1. name - Name of the filter|
|getHtmlContent|`Object`|Object|Fires when RadEditor's mode is changed to HTML View ModeThe method takes the following arguments:

1. contentAreaElement - The content area DOM element|
|remove|`Telerik.Web.UI.Editor.Filter`||Remove content filter from the filters collectionThe method takes the following arguments:

1. filter - Instance of a Filter Object|
|removeAt|`Number`||Removes a content filter from the filters collection by indexThe method takes the following arguments:

1. index - The index location of the filter in the FiltersCollection|
|removeFilterByName|`String`||Remove content filter from the filters collectionThe method takes the following arguments:

1. name - The name of the filter to be removed.|
|set_enableXhtmlFilter|`Boolean`||Sets the state of XHTML filterThe method takes the following arguments:

1. value - Boolean value to enable|
