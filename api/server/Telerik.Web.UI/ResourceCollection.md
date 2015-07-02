---
title: Telerik.Web.UI.ResourceCollection
page_title: Telerik.Web.UI.ResourceCollection
description: Telerik.Web.UI.ResourceCollection
---

# Telerik.Web.UI.ResourceCollection

This Class defines the Resource Collection that inherits StronglyTypedStateManagedCollection and IEnumerable
            collections.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.StronglyTypedStateManagedCollection`1
* Telerik.Web.UI.ResourceCollection

## Methods

###  GetResourceByType

Gets the first resource (if any) of the specified type.

#### Parameters

#### type `System.String`

The type of resource to search for.

#### Returns

`Telerik.Web.UI.Resource` The first resource of the specified type; null if no resource matches.

###  GetResourcesByType

Gets the resources of the specified type.

#### Parameters

#### type `System.String`

The type of resource to search for.

#### Returns

`System.Collections.Generic.IList`1` The resources of the specified type.

###  GetResource

Gets the resource that matches the specified type and key.

#### Parameters

#### type `System.String`

The type.

#### key `System.Object`

The key.

#### Returns

`Telerik.Web.UI.Resource` The resource that matches the specified type and key; null if no resource matches.

