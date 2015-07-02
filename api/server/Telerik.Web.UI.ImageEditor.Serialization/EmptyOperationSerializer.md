---
title: Telerik.Web.UI.ImageEditor.Serialization.EmptyOperationSerializer
page_title: Telerik.Web.UI.ImageEditor.Serialization.EmptyOperationSerializer
description: Telerik.Web.UI.ImageEditor.Serialization.EmptyOperationSerializer
---

# Telerik.Web.UI.ImageEditor.Serialization.EmptyOperationSerializer

The empty serializer. This is the default serializer. It will serialize to the EmptyOperation.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ImageEditor.Serialization.ImageOperationSerializerBase
* Telerik.Web.UI.ImageEditor.Serialization.EmptyOperationSerializer

## Properties

###  Name `String`

Name of the current serializer.

###  Name `String`

Name of the current serializer. Every serializer should specify a name.

## Methods

###  ToData

Serializes the content to an empty operation content with name being Empty. The input operation is not taken into account.

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The input operation. It is not taken into account for this method.

#### Returns

`System.Collections.Generic.Dictionary`2` 

###  FromData

Returns plain-old EmptyOperation.

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

Data is not taken into account for this case.

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` 

###  Serialize

Serializes the image operation

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The operation that should be serialized

#### Returns

`System.String` The string representation of the serialized image operation

###  Deserialize

Constructs an image operation from the serialized input

#### Parameters

#### value `System.String`

The serialized input

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` The image operation represented by the serialized input

###  ToData

Constructs a key/value pair collection from the image operation.

#### Parameters

#### operation `Telerik.Web.UI.ImageEditor.IImageOperation`

The image operation, from which the data is contructed

#### Returns

`System.Collections.Generic.Dictionary`2` The constructed data from the image operation

###  NameInDataIsCorrect

Checks if the provided data is relevant to the current serializer

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

The provided data

#### Returns

`System.Boolean` True if the provided data is relevant to the current image operation. False otherwise.

###  FromData

Constructs an image operation from the provided data input

#### Parameters

#### data `System.Collections.Generic.Dictionary{System.String,System.Object}`

The data content representing an image operation

#### Returns

`Telerik.Web.UI.ImageEditor.IImageOperation` An image operation represented by the provided data

