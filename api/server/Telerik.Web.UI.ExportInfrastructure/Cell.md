---
title: Telerik.Web.UI.ExportInfrastructure.Cell
page_title: Telerik.Web.UI.ExportInfrastructure.Cell
description: Telerik.Web.UI.ExportInfrastructure.Cell
---

# Telerik.Web.UI.ExportInfrastructure.Cell

EI Cell object

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ExportInfrastructure.Cell

## Properties

###  Table `Table`

Provides a reference to the parent table

###  RowIndex `Int32`

The index of the corresponding Row element

###  ColIndex `Int32`

The index of the corresponding Column element

###  Index `Point`

The position of the Cell element in the Table

###  Hyperlink `String`

Hyperlink value. Not supported for XLS.

###  Style `ExportStyle`

Container of the Cell styles

###  Value `Object`

Property used to get/set the value of the Cell element

###  Colspan `Int32`

The column span of the cell. Default value is 1.

###  Rowspan `Int32`

The row span of the cell. Defalut value is 1.

###  Text `String`

Used to get the cell value converted to String

###  Format `String`

Custom numeric format specifier

###  RotationAngle `Double`

Determines the rotation angle of the text

###  RTL `Boolean`

Enables right-to-left mode if set to true

###  TextWrap `String`

Enables text wrapping, if supported by the given format

