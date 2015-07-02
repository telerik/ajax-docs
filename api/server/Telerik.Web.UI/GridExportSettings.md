---
title: Telerik.Web.UI.GridExportSettings
page_title: Telerik.Web.UI.GridExportSettings
description: Telerik.Web.UI.GridExportSettings
---

# Telerik.Web.UI.GridExportSettings

Class holding settings associated with the Telerik.Web.UI.RadGrid export settings.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridExportSettings

## Properties

###  FileName `String`

A string specifying the name (without the extension) of the file that will be
            created. The file extension is automatically added based on the method that is
            used.

###  ExportOnlyData `Boolean`

Determines whether only data will be exported.

###  HideStructureColumns `Boolean`

Determines whether the structure columns (the row indicator and the expand/collapse columns) will be exported.

###  UseItemStyles `Boolean`

Determines whether the RadGrid styles will be applied to the exported files

###  SuppressColumnDataFormatStrings `Boolean`

Determines whether the DataFormatStrings of the columns will be suppressed when exporting. Setting this property to true will cause a rebind when exporting.

###  IgnorePaging `Boolean`

Specifies whether all records will be exported or merely those on the current
            page.

###  OpenInNewWindow `Boolean`

Opens the exported grid in a new instead of the same page.

###  Pdf `GridPdfSettings`

Gets the PDF settings.

###  Excel `GridExcelSettings`

Gets the Excel settings.

###  Word `GridWordSettings`

Gets the Word settings.

###  Csv `GridCsvSettings`

Gets the CSV settings.

