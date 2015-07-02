---
title: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializer
page_title: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializer
description: Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializer
---

# Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializer

The factory class that handles the serialization and deserialization by IImageOperation implementations

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializer

## Methods

###  Serialize

Serializes the provided image operation.

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The image operation to serialize

#### Returns

`System.String` The already serialized operation

###  Deserialize

Composes an image operation based on the provided serialized value

#### Parameters

#### value `System.String`

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` 

###  FromData

Composes an image operation based on the provided data

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

A key/value collection for the operation

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` The newly composed image operation

