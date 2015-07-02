---
title: Telerik.Web.UI.AsyncUpload.FileFilterConverter
page_title: Telerik.Web.UI.AsyncUpload.FileFilterConverter
description: Telerik.Web.UI.AsyncUpload.FileFilterConverter
---

# Telerik.Web.UI.AsyncUpload.FileFilterConverter

This class converts the file filtering information.

## Inheritance Hierarchy

* System.Object
* System.Web.Script.Serialization.JavaScriptConverter
* Telerik.Web.UI.AsyncUpload.FileFilterConverter

## Properties

###  SupportedTypes `IEnumerable`1`

When overridden in a derived class, gets a collection of the supported
            types.

## Methods

###  Deserialize

Deserializes the specified dictionary.

#### Parameters

#### dictionary `System.Collections.Generic.IDictionary{System.String,System.Object}`

The dictionary.

#### type `System.Type`

The type.

#### serializer `System.Web.Script.Serialization.JavaScriptSerializer`

The serializer.

#### Returns

`System.Object` 

###  Serialize

When overridden in a derived class, builds a dictionary of name/value
            pairs.

#### Parameters

#### obj `System.Object`

The object to serialize.

#### serializer `System.Web.Script.Serialization.JavaScriptSerializer`

The object that is responsible for the serialization.

#### Returns

`System.Collections.Generic.IDictionary`2` An object that contains key/value pairs that represent the object’s
            data.

