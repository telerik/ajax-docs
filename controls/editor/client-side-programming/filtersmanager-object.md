---
title: FiltersManager Object
page_title: FiltersManager Object | RadEditor for ASP.NET AJAX Documentation
description: FiltersManager Object
slug: editor/client-side-programming/filtersmanager-object
tags: filtersmanager,object
published: True
position: 8
---

# FiltersManager Object

The FiltersManager object exposes the following public methods and properties to control its behavior:

>caption FiltersManager Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add|`Telerik.Web.UI.Editor.Filter`||Add a content filter to the filters collectionThe method takes the following arguments: **filter** - Instance of a Filter Object|
|addAt|`Telerik.Web.UI.Editor.Filter`, `Number`||Add a content filter to the filters collection at indexThe method takes the following arguments: **filter** - Instance of a Filter Object **index** - The index location where item should be inserted|
|clear|||Clears the content filters collection|
|get_enableXhtmlFilter||Boolean|Returns a boolean value which indicates whether the XHTML filter is enabled or disabled|
|getDesignContent|`String`|String|Fires when RadEditor's mode is changed to Design View Mode and executes all the String based content filtersThe method takes the following arguments: **contentAreaHtml** - The RadEditor|
|getDesignContentDom|`Object`|Object|Fires when RadEditor's mode is changed to Design View Mode after getDesignContent() - executes all the DOM based content filtersThe method takes the following arguments: **contentArea** - The content area DOM element|
|getFilterAt|`Number`|Telerik.Web.UI.Editor.Filter|Returns the content filter from the given IndexThe method takes the following arguments: **index** - The index location of the filter in the FiltersCollection|
|getFilterByName|`String`|Telerik.Web.UI.Editor.Filter|Returns the content filter by nameThe method takes the following arguments: **name** - Name of the filter|
|getHtmlContent|`Object`|Object|Fires when RadEditor's mode is changed to HTML View ModeThe method takes the following arguments: **contentAreaElement** - The content area DOM element|
|remove|`Telerik.Web.UI.Editor.Filter`||Remove content filter from the filters collectionThe method takes the following arguments: **filter** - Instance of a Filter Object|
|removeAt|`Number`||Removes a content filter from the filters collection by indexThe method takes the following arguments: **index** - The index location of the filter in the FiltersCollection|
|removeFilterByName|`String`||Remove content filter from the filters collectionThe method takes the following arguments: **name** - The name of the filter to be removed.|
|set_enableXhtmlFilter|`Boolean`||Sets the state of XHTML filterThe method takes the following arguments: **value** - Boolean value to enable|

## See Also

 * [Custom Content Filters Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/contentfilters/defaultcs.aspx) 
 * [Built-in Content Filters Demo](https://demos.telerik.com/aspnet-ajax/editor/examples/builtincontentfilters/defaultcs.aspx)

