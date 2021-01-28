---
title: Telerik.Web.UI.SchedulerResourceCollection
description: Telerik.Web.UI.SchedulerResourceCollection
slug: Telerik.Web.UI.SchedulerResourceCollection
---

# Telerik.Web.UI.SchedulerResourceCollection  

## Inheritance Hierarchy

* *[Telerik.Web.UI.SchedulerResourceCollection]({%slug Telerik.Web.UI.SchedulerResourceCollection%})*


## Methods

###  add

Adds the specified resource to the collection.

#### Parameters

##### resource `Telerik.Web.UI.SchedulerResource`

 The resource to add. 

#### Returns

`None` 

### clear

Clears the collection of all resources in it.

#### Parameters

#### Returns

`None` 

### clone

Creates a shallow copy of the collection

#### Parameters

#### Returns

`Telerik.Web.UI.SchedulerResourceCollection`  A shallow copy of the current collection 

### findAll

Returns a collection of resources that satisfy the specified predicate. The resource is passed as first argument of the predicate. If the predicate returns true the resource is included in the result collection.

#### Parameters

##### predicate `Function`

 The function to execute for each resource in the collection. For example function

#### Returns

`Telerik.Web.UI.SchedulerResourceCollection`  A collection of all resources matching the predicate 

### forEach

Executes the specified function for each resource in the collection. The resource is passed as first argument to the function.

#### Parameters

##### lambda `Function`

 The function to execute for each resource in the collection. For example function

#### Returns

`None` 

### get_count

Gets the number of resources in the collection.

#### Parameters

#### Returns

`Number`  The number of resources in the collection 

### getResource

Gets the resource at the specified index in the collection.

#### Parameters

##### index `Number`

 The index from which to retrieve the resource 

#### Returns

`Telerik.Web.UI.SchedulerResource`  The resource at the specified index. 

### getResourceByType

Gets the first resource of the specified type.

#### Parameters

##### type `String`

 The resource type for which to look for 

#### Returns

`Telerik.Web.UI.SchedulerResource`  The first resources of the specified type

### getResourceByTypeAndKey

Gets the resource of the specified type with the specified key.

#### Parameters

##### type `String`

 The resource type for which to look for 

##### key `String`

 The resource key for which to look for 

#### Returns

`Telerik.Web.UI.SchedulerResource`  The resources of the specified type with the specified key

### getResourcesByType

Gets a collection of all resources of the specified type.

#### Parameters

##### type `String`

 The resource type for which to look for 

#### Returns

`Telerik.Web.UI.SchedulerResourceCollection`  A collection of all resources of the specified type 

### indexOf

Gets the index of the specified resource in the collection. Returns -1 if the resource is not in the collection.

#### Parameters

##### appointment `Telerik.Web.UI.SchedulerAppointment`

 The appointment for which to search in the collection 

#### Returns

`Number`  The index of the specified appointment in the collection

### insert

Inserts the specified resource at the specified index in the collection.

#### Parameters

##### index `Number`

 The index at which to insert the resource 

##### resource `Telerik.Web.UI.SchedulerResource`

 The resource to add. 

#### Returns

`None` 

### remove

Removes the specified resource from the collection.

#### Parameters

##### resource `Telerik.Web.UI.SchedulerResource`

 The resource instance to remove. 

#### Returns

`None` 

### removeAt

Removes the resource at the specified index from the collection.

#### Parameters

##### index `Number`

 The index from which to remove the resource 

#### Returns

`None` 

### removeResourcesByType

Removes the resources with the specified type from the collection.

#### Parameters

##### resourceType `String`

 The resource type to remove. 

#### Returns

`None` 



