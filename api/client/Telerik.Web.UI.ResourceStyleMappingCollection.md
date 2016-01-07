---
title: Telerik.Web.UI.ResourceStyleMappingCollection
page_title: Client-side API Reference
description: Telerik.Web.UI.ResourceStyleMappingCollection
slug: Telerik.Web.UI.ResourceStyleMappingCollection
---

# Telerik.Web.UI.ResourceStyleMappingCollection  

## Inheritance Hierarchy

* *[Telerik.Web.UI.ResourceStyleMappingCollection]({%slug Telerik.Web.UI.ResourceStyleMappingCollection%})*

## Methods

###  add

Adds the specified resource style mapping to the collection.

#### Parameters

##### mapping `Telerik.Web.UI.ResourceStyleMapping`

 The resource style mapping to add. 

#### Returns

`None` 

###  forEach

Executes the specified function for each resource style mapping in the collection. The resource style mapping is passed as first argument to the function.

#### Parameters

##### lambda `Function`

 The function to execute for each resource style mapping in the collection. For example function

#### Returns

`None` 

###  getMatchingClasses

Gets a collection of all resource style mapping matching the specified resource.

#### Parameters

##### resource `Telerik.Web.UI.SchedulerResource`

 The resource to look for 

#### Returns

`Array`  An array of all matching resource style mappings 

###  getStyleMapping

Gets the resource style mapping at the specified index in the collection.

#### Parameters

##### index `Number`

 The index from which to retrieve the resource style mapping 

#### Returns

`Telerik.Web.UI.ResourceStyleMapping`  The resource style mapping at the specified index. 

###  get_count

Gets the number of resource style mappings in the collection.

#### Parameters

#### Returns

`Number`  The number of resource style mappings in the collection. 


