---
title: Telerik.Web.UI.ImageEditor.Serialization.CropOperationSerializer
page_title: Telerik.Web.UI.ImageEditor.Serialization.CropOperationSerializer
description: Telerik.Web.UI.ImageEditor.Serialization.CropOperationSerializer
---

# Telerik.Web.UI.ImageEditor.Serialization.CropOperationSerializer

The serializer for the Crop operation

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializerBase
* Telerik.Web.UI.ImageEditor.Serialization.SwapImageOperationSerializer : IImageOperationSerializer
* Telerik.Web.UI.ImageEditor.Serialization.CropOperationSerializer

## Properties

###  Name `String`

Name of the current serializer.

###  Name `String`

Name of the current serializer.

###  Name `String`

Name of the current serializer. Every serializer should specify a name.

## Methods

###  Deserialize

Constructs an image operation from the serialized input

#### Parameters

#### value `System.String`

The serialized input

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` The image operation represented by the serialized input

###  FromData

Constructs an image operation from the provided data.

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

The input key/value collection of the operation

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` A newly constructed operation based on the input data

###  FromData

Constructs an image operation from the provided data input

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

The data content representing an image operation

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` An image operation represented by the provided data

###  NameInDataIsCorrect

Checks if the provided data is relevant to the current serializer

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

The provided data

#### Returns

`System.Boolean` True if the provided data is relevant to the current image operation. False otherwise.

###  Serialize

Serializes the image operation

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The operation that should be serialized

#### Returns

`System.String` The string representation of the serialized image operation

###  ToData

Constructs a key/value pair collection from the image operation.

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The image operation, from which the data is contructed

#### Returns

`System.Collections.Generic.Dictionary`2` The constructed data from the image operation

###  ToData

Constructs a key/value pair collection from the image operation.

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The image operation, from which the data is contructed

#### Returns

`System.Collections.Generic.Dictionary`2` The constructed data from the image operation

