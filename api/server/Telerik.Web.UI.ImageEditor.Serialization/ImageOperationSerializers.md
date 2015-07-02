---
title: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializers
page_title: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializers
description: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializers
---

# Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializers

A key/value pair collection of image operations' serializers following the conversion of key being the operation to serialize and value - the respective serializer

## Inheritance Hierarchy

* System.Object
* System.Collections.ObjectModel.Collection`1
* System.Collections.ObjectModel.KeyedCollection`2
* Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializers

## Methods

###  GetKeyForItem

Distinguishes between operations using their names.

#### Parameters

#### item `Telerik.Web.UI.ImageEditor.Serialization.IImageOperationSerializer`

The input image operation serializer

#### Returns

`System.String` The unique key for the serializer. Usually based on the value of the Name property.

