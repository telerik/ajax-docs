---
title: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationCollection
page_title: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationCollection
description: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationCollection
---

# Telerik.Web.UI.ImageEditor.Serialization.ImageOperationCollection

A collection of image operations

## Inheritance Hierarchy

* System.Object
* System.Collections.ObjectModel.Collection`1
* Telerik.Web.UI.ImageEditor.Serialization.ImageOperationCollection

## Methods

###  Serialize

Serializes the collected image operations in a collection representation

#### Returns

`System.String` 

###  Deserialize

Reads the serialized input and deserializes it to populate the collection of image operations

#### Parameters

#### value `System.String`

The serialized collection of image operations

#### Returns

`System.Void` 

###  FromData

Populates the image operations collection using the provided enumerated data

#### Parameters

#### data `System.Collections.Generic.IEnumerable{System.Object}`

The enumerated data input

#### Returns

`System.Void` 

###  Sort

Sorts the current collection of IImageOperation(s) on their Index property.

#### Returns

`System.Void` 

