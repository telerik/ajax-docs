---
title: Telerik.Web.UI.Grid.Export.TableViewExporter
page_title: Telerik.Web.UI.Grid.Export.TableViewExporter
description: Telerik.Web.UI.Grid.Export.TableViewExporter
---

# Telerik.Web.UI.Grid.Export.TableViewExporter

GridTableView exporter. For internal use only.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.Grid.Export.TableViewExporter

## Methods

###  ExportToExcel

Exports the control to Excel

#### Returns

`System.Void` 

###  ExportToPdf

Exports the control to PDF

#### Returns

`System.Void` 

###  ExportToWord

Exports the control to Word

#### Returns

`System.Void` 

###  ExtractTextFromCellControls

Traverses the controls within a cell and returns their values concatenated as a single string (CSV specific)

#### Parameters

#### cell `System.Web.UI.WebControls.TableCell`

TableCell object

#### Returns

`System.String` String value

###  GenerateXlsxOutput

Generates the text representing the Export Output for Microsoft Excel XSLX format

#### Returns

`System.String` 

###  GetTemplateColumnHeaderText

CSV-specific method. Extracts the text from the given header item cell

#### Parameters

#### column `Telerik.Web.UI.GridTemplateColumn`

Template column object

#### Returns

`System.String` Resolved text

###  GetTemporaryDir

Returns a temporary directory

#### Returns

`System.String` Temporary directory path

