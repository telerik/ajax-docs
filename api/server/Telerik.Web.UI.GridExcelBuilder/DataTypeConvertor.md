---
title: Telerik.Web.UI.GridExcelBuilder.DataTypeConvertor
page_title: Telerik.Web.UI.GridExcelBuilder.DataTypeConvertor
description: Telerik.Web.UI.GridExcelBuilder.DataTypeConvertor
---

# Telerik.Web.UI.GridExcelBuilder.DataTypeConvertor

Data type converter

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.DataTypeConvertor

## Methods

###  ConvertDataEnumToString

Converts a DataType value to string

#### Parameters

#### dataType `Telerik.Web.UI.GridExcelBuilder.DataType`

DataType value

#### Returns

`System.String` String representation of the DataType

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

###  ConvertToDataType

Convert .NET data type to XMLSS DataType

#### Parameters

#### obj `System.Object`

Object to be converted.

#### Returns

`Telerik.Web.UI.GridExcelBuilder.DataType` Converted DataType value

