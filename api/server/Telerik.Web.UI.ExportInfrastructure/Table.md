---
title: Telerik.Web.UI.ExportInfrastructure.Table
page_title: Telerik.Web.UI.ExportInfrastructure.Table
description: Telerik.Web.UI.ExportInfrastructure.Table
---

# Telerik.Web.UI.ExportInfrastructure.Table

EI Table (Worksheet) object

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ExportInfrastructure.Table

## Properties

###  Index `Int32`

Table index

###  Title `String`

Table name

###  ImageCount `Int32`

Intended for unit tests usage

###  Cells `CellCollection`

Table cells collection

###  Rows `RowCollection`

Table rows collection

###  Columns `ColumnCollection`

Table columns collection

###  Images `ImageCollection`

Table images collection

###  Style `ExportStyle`

Container of the Table styles

###  TopMargin `Unit`

Gets/sets the top margin of the page

###  BottomMargin `Unit`

Gets/sets the bottom margin of the page

###  LeftMargin `Unit`

Gets/sets the left margin of the page

###  RightMargin `Unit`

Gets/sets the right margin of the page

###  Landscape `Boolean`

Set this to true to enable landscape orientation; otherwise will be false (portrait) which is the default value.

###  HeaderText `String`

Gets/sets the page header text

###  FooterText `String`

Gets/sets the page footer text

###  PageSize `PaperKind`

Determines the size of the page

###  ShowGridlines `Boolean`

Determines whether the grid lines will be visible by default

## Methods

###  InsertImage

Adds an image to the Table

#### Parameters

#### cellIndex `Telerik.Web.UI.ExportInfrastructure.Range`

Cell range

#### imageUrl `System.String`

Image URL

#### autoSize `System.Boolean`

Will resize the image automatically if set to true

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cellIndex `Telerik.Web.UI.ExportInfrastructure.Range`

Cell range

#### imageUrl `System.String`

Image URL

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cell `Telerik.Web.UI.ExportInfrastructure.Cell`

Cell object

#### imageUrl `System.String`

Image URL

#### autoSize `System.Boolean`

Will resize the image automatically if set to true

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cell `Telerik.Web.UI.ExportInfrastructure.Cell`

Cell object

#### imageUrl `System.String`

Image URL

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cellIndex `Telerik.Web.UI.ExportInfrastructure.Range`

Cell range

#### imageData `System.Byte`

Byte array containing the image data

#### autoSize `System.Boolean`

Will resize the image automatically if set to true

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cellIndex `Telerik.Web.UI.ExportInfrastructure.Range`

Cell range

#### imageData `System.Byte`

Byte array containing the image data

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cell `Telerik.Web.UI.ExportInfrastructure.Cell`

Cell object

#### imageData `System.Byte`

Byte array containing the image data

#### autoSize `System.Boolean`

Will resize the image automatically if set to true

#### Returns

`System.Void` 

###  InsertImage

Adds an image to the Table

#### Parameters

#### cell `Telerik.Web.UI.ExportInfrastructure.Cell`

Cell object

#### imageData `System.Byte`

Byte array containing the image data

#### Returns

`System.Void` 

###  ShiftRowsDown

Shifts the rows down, up to the given row number, and starting from the specified row index

#### Parameters

#### startRowIndex `System.Int32`

This value specifies the starting row from which to shift the rows down

#### rowsCount `System.Int32`

Value determining how many positions to shift the rows down

#### Returns

`System.Void` 

