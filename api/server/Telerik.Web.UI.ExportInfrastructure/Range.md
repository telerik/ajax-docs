---
title: Telerik.Web.UI.ExportInfrastructure.Range
page_title: Telerik.Web.UI.ExportInfrastructure.Range
description: Telerik.Web.UI.ExportInfrastructure.Range
---

# Telerik.Web.UI.ExportInfrastructure.Range

EI Range object. Represents two points (start and end) in the table.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ExportInfrastructure.Range

## Properties

###  Start `Point`

Start point of the range

###  End `Point`

End point of the range

## Methods

###  op_Equality

Equality operator for the Range object

#### Parameters

#### range1 `Telerik.Web.UI.ExportInfrastructure.Range`

First range

#### range2 `Telerik.Web.UI.ExportInfrastructure.Range`

Second range

#### Returns

`System.Boolean` Returns true if the ranges are identical

###  op_Inequality

Inequality operator for the Range object

#### Parameters

#### range1 `Telerik.Web.UI.ExportInfrastructure.Range`

First range

#### range2 `Telerik.Web.UI.ExportInfrastructure.Range`

Second range

#### Returns

`System.Boolean` Returns true if the ranges are different

###  Equals

Returns true if the ranges are equal

#### Returns

`System.Boolean` 

###  Equals

Returns true if the ranges are equal

#### Returns

`System.Boolean` 

###  GetHashCode

Returns the hash code of the Range object

#### Returns

`System.Int32` 

###  ToString

Returns the Range object indexes presented as Excel-style range (A1:B5, B1:B6, etc)

#### Returns

`System.String` String value representing the range in Excel style

