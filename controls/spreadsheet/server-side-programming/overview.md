---
title: Overview
page_title: Server-side Programming Overview | RadSpreadsheet for ASP.NET AJAX Documentation
description: Overview
slug: spreadsheet/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

**RadSpreadsheet** provides a rich set of server-side properties and events that can help you configure the look and behaviour of the control.

## RadSpreadsheet Properties

**Table 1** demonstrates some general properties of the **RadSpreadsheet**:

| Property | Type | Description |
| ------ | ------ | ------ |
| **ColumnHeaderHeight** |double|Gets or sets the **RadSpreadsheet** column headers heigth in pixels.|
| **ColumnWidth** |double|Gets or sets the **RadSpreadsheet** column width in pixels.|
| **ColumnsCount** |int|Gets or sets the number of columns in the **RadSpreadsheet**.|
| **Culture** |System.Globalization.CultureInfo|Gets or sets the selected culture. Localization strings will be loaded based on this value.|
| **Localization** |Telerik.Web.UI.SpreadsheetStrings|Gets the Localization.|
| **LocalizationPath** |string|Gets or sets a value indicating where **RadSpreadsheet** will look for its **.resx** localization files.|
| **Provider** |Telerik.Web.UI.SpreadsheetProviderBase|Gets or sets  the provider instance to be used by **RadSpreadsheet**. Use this property with providers that are created at runtime. For ASP.NET providers defined in web.config use the **ProviderName** property.|
| **ProviderName** |string|Gets or sets the name of the current provider used by **RadSpreadsheet**. The provider must be defined in the spreadsheet section of web.config.|
| **RowHeaderWidth** |double|Gets or sets the **RadSpreadsheet** row headers width in pixels.|
| **RowHeight** |double|Gets or sets the **RadSpreadsheet** row height in pixels.|
| **RowsCount** |int|Gets or sets the number of rows in the **RadSpreadsheet**.|
| **Sheets** |List&lt;Telerik.Web.Spreadsheet.Worksheet&gt;|Gets a collection of the **Sheets** currently loaded in the **RadSpreadsheet**.|


## Telerik.Web.Spreadsheet.Worksheet Properties and Methods

**Table 2** demonstrates some general properties of the **Telerik.Web.Spreadsheet.Worksheet** object:

| Property | Type | Description |
| ------ | ------ | ------ |
| **ActiveCell** |string|The active cell in the sheet, e.g. "A1".|
| **Columns** |Telerik.Web.Spreadsheet.Column|An array defining the columns in this sheet and their content.|
| **Filter** |Telerik.Web.Spreadsheet.Filter|Defines the filtering criteria for this sheet, if any.|
| **FrozenColumns** |int?|The number of frozen columns in this sheet, if any.|
| **FrozenRows** |int?|The number of frozen rows in this sheet, if any.|
| **MergedCells** |List&lt;string&gt;|List of all merged cells in the format "A1:B2". |
| **Name** |string|The name of the sheet.|
| **Rows** |List&lt;Telerik.Web.Spreadsheet.Row&gt;|The row data for this sheet.|
| **Selection** |string|The selected range in the sheet, e.g. "A1:B10".|
| **ShowGridLines** |bool?|A boolean value indicating if the sheet grid lines should be displayed.|
| **Sort** |Telerik.Web.Spreadsheet.Sort|Defines the sort criteria for the sheet.|


**Table 3** demonstrates some of the most important methods of the **Telerik.Web.Spreadsheet.Worksheet** object:

| Property | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **AddMergedCells** |string|void|Adds a merged range to the worksheet.|
| **AddRow** |Telerik.Web.Spreadsheet.Row|void|Adds a row to the worksheet.|
| **ColumnHeaderHeight** |IEnumerable&lt;Telerik.Web.Spreadsheet.Row&gt;|void|Adds rows to the worksheet.|

 
## Telerik.Web.Spreadsheet.Row Properties and Methods

**Table 4** demonstrates some general properties of the **Telerik.Web.Spreadsheet.Row** object:

| Property | Type | Description |
| ------ | ------ | ------ |
| **Cells** |List&lt;Telerik.Web.Spreadsheet.Cell&gt;|The cells within the current row.|
| **Height** |double?|The row height in pixels. Defaults to rowHeight.|
| **Index** |int?|The absolute row index. Required to ensure correct positioning.|

 
**Table 5** demonstrates some of the most important methods of the **Telerik.Web.Spreadsheet.Row** object:

| Property | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **AddCell** |Telerik.Web.Spreadsheet.Cell|void|Adds a cell to the row.|
| **AddCells** |IEnumerable&lt;Telerik.Web.Spreadsheet.Cell&gt;|void|Adds the cells to the row.|



## Telerik.Web.Spreadsheet.Cell Properties

**Table 6** demonstrates some general properties of the **Telerik.Web.Spreadsheet.Cell** object:

| Property | Type | Description |
| ------ | ------ | ------ |
| **Background** |string|The background color of the cell.Many standard CSS formats are supported, but the canonical form is "#ccff00".|
| **Bold** |bool?|Sets the cell font to bold, if set to true.|
| **BorderBottom** |Telerik.Web.Spreadsheet.BorderStyle|The style information for the bottom border of the cell.|
| **BorderLeft** |Telerik.Web.Spreadsheet.BorderStyle|The style information for the left border of the cell.|
| **BorderRight** |Telerik.Web.Spreadsheet.BorderStyle|The style information for the right border of the cell.|
| **BorderTop** |Telerik.Web.Spreadsheet.BorderStyle|The style information for the top border of the cell.|
| **Color** |string|The font color of the cell.Many standard CSS formats are supported, but the canonical form is "#ccff00".|
| **Enable** |double?|Disables or enables cell.|
| **FontFamily** |string|The font family for the cell.|
| **FontSize** |double?|The font size of the cell in pixels.|
| **Format** |string|The format of the cell text.See Create or delete a custom number format on MS Office.|
| **Formula** |string|The cell formula without the leading equals sign, e.g. A1 * 10.|
| **Index** |int?|The zero-based index of the cell. Required to ensure correct positioning.|
| **Italic** |bool?|Sets the cell font to italic, if set to true.|
| **Link** |string|The hyperlink (URL) of the cell.|
| **TextAlign** |string|The text align setting for the cell content. Available options are: *left*, *center*, *right* or *justify*|
| **Underline** |bool?|Sets the cell font to underline, if set to true.|
| **Value** |object|The cell value.|
| **VerticalAlign** |string|The vertical align setting for the cell content. Available options are: * top * center * bottom.|
| **Wrap** |bool?|Will wrap the cell content if set to true.|



## Telerik.Web.Spreadsheet.Column Properties

**Table 7** demonstrates some general properties of the **Telerik.Web.Spreadsheet.Column** object:

| Property | Type | Description |
| ------ | ------ | ------ |
| **Index** |int?|The zero-based index of the column. Required to ensure correct positioning.|
| **Width** |double?|The width of the column in pixels. Defaults to columnWidth.|



## Telerik.Web.Spreadsheet.Filter Properties

**Table 8** demonstrates some general properties of the **Telerik.Web.Spreadsheet.Filter** object:

| Property | Type | Description |
| ------ | ------ | ------ |
| **Columns** |List&lt;Telerik.Web.Spreadsheet.FilterColumn&gt;|An array defining the filter configuration of individual columns.|
| **Ref** |string|The active range for the filter, e.g. "B1:D8".|


## Telerik.Web.Spreadsheet.Sort Properties

**Table 9** demonstrates some general properties of the **Telerik.Web.Spreadsheet.Sort** object:

| Property | Type | Description |
| ------ | ------ | ------ |
| **Columns** |List&lt;Telerik.Web.Spreadsheet.SortColumn&gt;|Specifies the sort options for individual columns.|
| **Ref** |string|The sorted range, e.g. "A1:D5".|


