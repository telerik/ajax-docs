---
title: Updating Cells in RadSpreadsheet using Code Behind
description: Learn how to update cells in a RadSpreadsheet control by using code behind.
type: how-to
page_title: How to Update Cells in RadSpreadsheet using Code Behind
slug: updating-cells-radspreadsheet-code-behind
tags: radspreadsheet, code behind, update cells
res_type: kb
---

### Environment

| Property | Value |
|----------|-------|
| Product  | RadSpreadsheet for ASP.NET AJAX |

### Description

I want to update cells in a RadSpreadsheet control using code behind. I have already bound the control to an existing spreadsheet, but I need to know how to update the cells with values from the code behind. Please provide a simple example to demonstrate this. I believe I need to use a custom provider, but I'm not sure how to use it to upload the file and change the data using the exposed properties.

### Solution

The Telerik RadSpreadsheet UI component does not allow direct editing of the document. However, you can load an Excel document into the Spreadsheet and make changes in the Spreadsheet interface. Then, you can export those changes back to an Excel document.

If you want to make changes to an Excel document directly in the code behind, you will need to use the Telerik Document Processing Libraries (DPL). These libraries are .NET libraries that allow you to create and edit Excel, Word, PDF, and CSV documents using C# or VB.NET code.

To update cells in a RadSpreadsheet control using code behind, follow these steps:

1. Use the Telerik Document Processing Libraries (DPL) to stream the file and set the values in the workbook's worksheet.
2. Export the workbook to the hard drive.
3. Set the saved workbook as the provider for the RadSpreadsheet control.

Please refer to the Telerik Document Processing - Knowledge Base for examples and further guidance on using the DPLs.


