---
title: We found a problem with this formula when exporting to Xlsx
description: We found a problem with this formula when exporting to Xlsx. Check it now!
type: how-to
page_title: We found a problem with this formula when exporting to Xlsx
slug: we-found-a-problem-with-this-formula-when-exporting-to-xlsx
res_type: kb
---

## DESCRIPTION

When exporting RadGrid to Excel (XLSX format), I get the following exception

**We found a problem with this formula. Try clicking Insert Function on the Formulas tab to fix it.\n\nNot trying to type a formula? When the first character is an equal (=) or minus (-) sign, RadSpreadsheet thinks it is a formula. For example, when you type =1+1 the cell shows 2.**

This can happen when special symbols/structures are present in the data that resemble Excel formulas, but are not. The exporting engine attempts to parse formulas and if it fails, such an exception is thrown.

Such symbols commonly include the equals sign (=) followed by brackets; the minus sign (-) or a plus sign (+). Depending on the content, an error may or may not be thrown.

## SOLUTION

There are a few solutions:

- **set** the **cell format** to a **string** for the excel export so the engine does not attempt to parse a formula
- **modify** the **cell** content so that it does **not** resemble a **formula**
- use a different Excel export Format
- see if this content is necessary in the data or in the DataFormatString of the column. If applicable for your case, you can consider
    - sanitize the data to exclude such strings
    - set *RadGridInstance.ExportSettings.SuppressColumnDataFormatStrings="true"*or modify the format strings to not add such sequences

Below you can find attached examples that showcase how you can traverse the cells and columns before the actual export happens so you can apply changes to the format or cell value.

- [DOWNLOAD Sample](files/grid-export-formula-error.zip) 

## SEE ALSO

- [Documentation article: Export Infrastructure](https://docs.telerik.com/devtools/aspnet-ajax/controls/export-infrastructure)

 
