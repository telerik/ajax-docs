---
title: Telerik.Web.UI.RadODataDataSource
page_title: Telerik.Web.UI.RadODataDataSource
description: Telerik.Web.UI.RadODataDataSource
---

# Telerik.Web.UI.RadODataDataSource

RadODataDataSource

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadODataDataSource : IControl, IControlResolver, IScriptControl

## Properties

###  Transport `Transport`

Gets the web service to be used for populating items with ExpandMode set to WebService.

###  ClientEvents `ClientEvents`

Gets the client events.

###  Schema `Schema`

Gets the schema.

###  FilterExpressions `FilterExpressionCollection`

Gets the filter expressions.

###  SortExpressions `SortExpressionCollection`

Gets the sort expressions.

###  EnableSorting `Boolean`

Gets or sets whether server-side sorting is enabled.

###  EnableFiltering `Boolean`

Gets or sets whether server-side sorting is enabled.

###  EnablePaging `Boolean`

Gets or sets whether server-side paging is enabled.

###  EnableDataCaching `Boolean`

Gets or sets whether data caching is enabled.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  ScriptManager `ScriptManager`

## Methods

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  GetScriptDescriptors

Gets a collection of script descriptors that represent ECMAScript (JavaScript)
            client components.

#### Returns

`System.Collections.Generic.IEnumerable`1` An  collection of 
            objects.

###  GetScriptReferences

Gets a collection of  objects
            that define script resources that the control requires.

#### Returns

`System.Collections.Generic.IEnumerable`1` An  collection of 
            objects.

