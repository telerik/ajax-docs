---
title: Telerik.Web.UI.CustomNonEmbeddedSkinsCollection
page_title: Telerik.Web.UI.CustomNonEmbeddedSkinsCollection
description: Telerik.Web.UI.CustomNonEmbeddedSkinsCollection
---

# Telerik.Web.UI.CustomNonEmbeddedSkinsCollection

Represents a collection of custom non-embedded skins.

## Inheritance Hierarchy

* System.Object
* System.Collections.CollectionBase
* Telerik.Web.UI.CustomNonEmbeddedSkinsCollection

## Methods

###  Add

Adds a passed CustomNonEmbeddedSkin to the collection.

#### Parameters

#### skin `Telerik.Web.UI.CustomNonEmbeddedSkin`

A CustomNonEmbeddedSkin item to add to the collection.

#### Returns

`System.Void` 

###  Contains

Returns a boolean value indicating whether the passed CustomNonEmbeddedSkin object belongs to the collection.

#### Parameters

#### skin `Telerik.Web.UI.CustomNonEmbeddedSkin`

The CustomNonEmbeddedSkin to search for.

#### Returns

`System.Boolean` True if the passed object is found in the collection; otherwise false.

###  Contains

Returns a boolean value indicating whether a CustomNonEmbeddedSkin object, located by the
            passed resource name, belongs to the collection.

#### Parameters

#### resourceName `System.String`

A string value representing the ResourceName of the custom skin.

#### Returns

`System.Boolean` True if the resolved CustomNonEmbeddedSkin is found in the collection; otherwise false.

###  GetSkinByResourceName

Returns a reference to a CustomNonEmbeddedSkin object by a given resource name.

#### Parameters

#### resourceName `System.String`

A string representing the resource name.

#### Returns

`Telerik.Web.UI.CustomNonEmbeddedSkin` The located CustomNonEmbeddedSkin reference.

###  IndexOf

Returns the index of a given CustomNonEmbeddedSkin object in the collection.

#### Parameters

#### skin `Telerik.Web.UI.CustomNonEmbeddedSkin`

The CustomNonEmbeddedSkin to search for.

#### Returns

`System.Int32` An integer value representing the position of the item in the collection.

