---
title: Telerik.Web.Spreadsheet.Worksheet
page_title: Telerik.Web.Spreadsheet.Worksheet
description: Telerik.Web.Spreadsheet.Worksheet
---

# Telerik.Web.Spreadsheet.Worksheet

Represents a Worksheet

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Spreadsheet.Worksheet

## Properties

###  ActiveCell `String`

The active cell in the sheet, e.g. "A1".

###  Name `String`

The name of the sheet.

###  Columns `List`1`

###  Filter `Filter`

###  FrozenColumns `List`1`

###  FrozenRows `Nullable`1`

###  Rows `List`1`

###  Selection `String`

The selected range in the sheet, e.g. "A1:B10".

###  Sort `Sort`

###  MergedCells `List`1`

## Methods

###  AddRows

Adds rows to the worksheet.

#### Parameters

#### rows `System.Collections.Generic.IEnumerable{Telerik.Web.Spreadsheet.Row}`

The rows to add

#### Returns

`System.Void` 

###  AddRow

Adds a row to the worksheet.

#### Parameters

#### row `Telerik.Web.Spreadsheet.Row`

The row to add

#### Returns

`System.Void` 

###  AddMergedCells

Adds a merged range to the worksheet.

#### Parameters

#### range `System.String`

The merged range, e.g. "A1:B4"

#### Returns

`System.Void` 

