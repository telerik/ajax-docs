---
title: Telerik.Web.UI.Editor.FiltersManager
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.Editor.FiltersManager : Sys.Component 

## Methods

### add

Add a content filter to the filters collection

#### Parameters

##### filter `Telerik.Web.UI.Editor.Filter`

Instance of a Filter Object

#### Returns

`None` 

### addAt

Add a content filter to the filters collection at index

#### Parameters

##### filter `Telerik.Web.UI.Editor.Filter`

Instance of a Filter Object

##### index `Number`

The index location where item should be inserted

#### Returns

`None` 

### clear

Clears the content filters collection

#### Parameters

#### Returns

`None` 

### getDesignContent

Fires when RadEditor's mode is changed to Design View Mode and executes all the String based content filters

#### Parameters

##### contentAreaHtml `String`

The RadEditor

#### Returns

`String` The contentAreaHtml parameter modified by the filter

###  getDesignContentDom

Fires when RadEditor's mode is changed to Design View Mode after getDesignContent() - executes all the DOM based content filters

#### Parameters

##### contentArea `Object`

The content area DOM element

#### Returns

`Object` The contentArea parameter modified by the filter

### getFilterAt

Returns the content filter from the given Index

#### Parameters

##### index `Number`

The index location of the filter in the FiltersCollection

#### Returns

`Telerik.Web.UI.Editor.Filter` 

### getFilterByName

Returns the content filter by name

#### Parameters

##### name `String`

Name of the filter

#### Returns

`Telerik.Web.UI.Editor.Filter` 

### getHtmlContent

Fires when RadEditor's mode is changed to HTML View Mode

#### Parameters

##### contentAreaElement `Object`

The content area DOM element

#### Returns

`Object` The contentAreaElement parameter modified by the filter

### get_enableXhtmlFilter

Returns a boolean value which indicates whether the XHTML filter is enabled or disabled

#### Parameters

#### Returns

`Boolean` 

### remove

Remove content filter from the filters collection

#### Parameters

##### filter `Telerik.Web.UI.Editor.Filter`

Instance of a Filter Object

#### Returns

`None` 

### removeFilterByName

Remove content filter from the filters collection

#### Parameters

##### name `String`

The name of the filter to be removed.

#### Returns

`None` 

### removeAt

Removes a content filter from the filters collection by index

#### Parameters

##### index `Number`

The index location of the filter in the FiltersCollection

#### Returns

`None` 

### set_enableXhtmlFilter

Sets the state of XHTML filter

#### Parameters

##### value `Boolean`

Boolean value to enable

#### Returns

`None` 


