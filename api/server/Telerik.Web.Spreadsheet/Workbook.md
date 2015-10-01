---
title: Telerik.Web.Spreadsheet.Workbook
page_title: Telerik.Web.Spreadsheet.Workbook
description: Telerik.Web.Spreadsheet.Workbook
---

# Telerik.Web.Spreadsheet.Workbook

Represents a Workbook

## Inheritance Hierarchy

* System.Object
* Telerik.Web.Spreadsheet.Workbook

## Properties

###  ActiveSheet `String`

The name of the currently active sheet.

###  Sheets `List`1`

## Methods

###  AddSheet

Adds an empty sheet

#### Returns

`Telerik.Web.Spreadsheet.Worksheet` The new sheet

###  Load

Creates a Workbook instance and populates it with data from the specified file.
            
            Supported file formats are XLSX, CSV, TXT (Tab-separated) and JSON.

#### Parameters

#### path `System.String`

The fully-qualified path to the file

#### Returns

`Telerik.Web.Spreadsheet.Workbook` The populated Workbook

###  Load

Creates a Workbook instance and populates it with data from the provided stream.
            The stream will be closed after completion.

#### Parameters

#### input `System.IO.Stream`

The input stream

#### extension `System.String`

The file extension. Supported extensions are ".xlsx", ".csv", ".txt" and ".json"

#### Returns

`Telerik.Web.Spreadsheet.Workbook` The populated Workbook

###  Save

Stores the data from the Workbook in the specified file.
            
            Supported file formats are XLSX, CSV, TXT (Tab-separated) and JSON.

#### Parameters

#### path `System.String`

The fully-qualified path to the output file

#### Returns

`System.Void` 

###  Save

Stores the data from the Workbook in the provided stream.
            The stream will be closed after completion.

#### Parameters

#### output `System.IO.Stream`

The output stream

#### extension `System.String`

The file extension. Supported extensions are ".xlsx", ".csv", ".txt" and ".json"

#### Returns

`System.Void` 

###  FromJson

Creates a Workbook instance and populates it with data from JSON

#### Parameters

#### json `System.String`

The source JSON

#### Returns

`Telerik.Web.Spreadsheet.Workbook` The populated Workbook

###  ToJson

Converts this Workbook to JSON

#### Returns

`System.String` The JSON string

