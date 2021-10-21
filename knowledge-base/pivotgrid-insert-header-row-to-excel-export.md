---
title: Insert header row to pivot grid excel export
description: Insert header row to pivot grid excel export. Check it now!
type: how-to
page_title: Insert header row to pivot grid excel export
slug: pivotgrid-insert-header-row-to-excel-export
res_type: kb
---


## DESCRIPTION

Insert a custom header row in the grid excel export where you can add your own data.

The grid exports only its own data and headers, and custom additions must be implemented by the developer.

## SOLUTION

If you are using the non-html excel formats, you can use the ExportStructure property of the event arguments received by the handler to PivotGridInfrastructureExporting or PivotGridBiffExporting to call ShiftRowsDown() and add your own content. [http://docs.telerik.com/devtools/aspnet-ajax/controls/export-infrastructure#basic-operations](http://docs.telerik.com/devtools/aspnet-ajax/controls/export-infrastructure#basic-operations).

An example is attached. Note that it needs the Telerik.mdf database that you can obtain from the Live Demos.

- [DOWNLOAD Sample](files/pivotgrid-modify-excel-add-row.zip) 

 