---
title: Telerik.Web.DataTypeConvertor
page_title: Telerik.Web.DataTypeConvertor
description: Telerik.Web.DataTypeConvertor
---

# Telerik.Web.DataTypeConvertor

Data type converter

## Inheritance Hierarchy

* System.Object
* Telerik.Web.DataTypeConvertor

## Methods

###  CanConvert

Returns true if the object can be converted to any of the supported data types

#### Parameters

#### obj `System.Object`

Object to be tested

#### Returns

`System.Boolean` Returns true if conversion is possible; otherwise, false.

###  Convert

Converts an object to String

#### Parameters

#### obj `System.Object`

Object to be converted

#### Returns

`System.String` Converted string.

###  ConvertDataEnumToString

Converts a DataType value to string

#### Parameters

#### dataType `Telerik.Web.DataType`

DataType value

#### Returns

`System.String` String representation of the DataType

###  ConvertToDataType

Convert .NET data type to XMLSS DataType

#### Parameters

#### obj `System.Object`

Object to be converted.

#### Returns

`Telerik.Web.DataType` Converted DataType value

