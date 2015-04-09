---
title: Telerik.Web.UI.ResourceTypeCollection
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.ResourceTypeCollection  

## Methods

###  add

Adds the specified resource type to the collection.

#### Parameters

##### resourceType `Telerik.Web.UI.ResourceType`

 The resource type to add. 

#### Returns

`None` 

###  clear

Clears the collection of all resource types in it.

#### Parameters

#### Returns

`None` 

###  findAll

Returns a collection of resource types that satisfy the specified predicate. The resource type is passed as first argument of the predicate. If the predicate returns true the resource type is included in the result collection.

#### Parameters

##### predicate `Function`

 The function to execute for each resource type in the collection. For example function

#### Returns

`Telerik.Web.UI.ResourceTypeCollection`  A collection of all resource types matching the predicate 

###  forEach

Executes the specified function for each resource type in the collection. The resource type is passed as first argument to the function.

#### Parameters

##### lambda `Function`

 The function to execute for each resource type in the collection. For example function

#### Returns

`None` 

###  getResourceType

Gets the resource type at the specified index in the collection.

#### Parameters

##### index `Number`

 The index from which to retrieve the resource type 

#### Returns

`Telerik.Web.UI.ResourceType`  The resource type at the specified index. 

###  getResourceTypeByName

Gets the resource type with the specified name.

#### Parameters

##### name `String`

 The resource type name to look for 

#### Returns

`Telerik.Web.UI.ResourceType`  The resource type with the specified name

###  get_count

Gets the number of resources in the collection.

#### Parameters

#### Returns

`Number`  The number of resource types in the collection 

###  insert

Inserts the specified resource type at the specified index in the collection.

#### Parameters

##### index `Number`

 The index at which to insert the resource type 

##### resourceType `Telerik.Web.UI.ResourceType`

 The resource type to add. 

#### Returns

`None` 

###  remove

Removes the specified resource type from the collection.

#### Parameters

##### resourceType `Telerik.Web.UI.ResourceType`

 The resource type instance to remove. 

#### Returns

`None` 

###  removeAt

Removes the resource type at the specified index from the collection.

#### Parameters

##### index `Number`

 The index from which to remove the resource type 

#### Returns

`None` 


