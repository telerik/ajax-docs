---
title: Hiding Excel Option in ExportAs
description: Learn how to hide the Excel option in the ExportAs tool in RadSpreadsheet for ASP.NET AJAX.
type: how-to
page_title: Hide Excel Option in ExportAs | RadSpreadsheet for ASP.NET AJAX
slug: spreadsheet-hiding-excel-option-exportas
tags: radspreadsheet, asp.net ajax, exportas, excel, pdf
res_type: kb
---

## Environment
| Product      | RadSpreadsheet for ASP.NET AJAX |
|--------------|---------------------------------|
| Version      | all                    |

## Description
The customer wants to hide the Excel option in the ExportAs tool in RadSpreadsheet. They only want the user to be able to export to a PDF, as the Excel data can be changed.

## Solution
To achieve this, you need to implement a custom solution. Use the following code:

```javascript
function OnClientExcelExport(sender, args) {
    args.set_cancel(true);
    alert("Export to Excel has been disabled.");
}

var original_triggerDialog = kendo.spreadsheet.TabStrip.prototype._triggerDialog;
kendo.spreadsheet.TabStrip.prototype._triggerDialog = function (args) {
    original_triggerDialog.call(this, args);
    if (args.name == "exportAs") {
        var exportDialog = this.element.closest(".RadSpreadsheet").getKendoSpreadsheet()._view._dialogs[0];
        exportDialog.viewModel.set("extension", ".pdf")

        var $dialog = exportDialog.dialog().element;
        $dialog.find('div:not(.k-export-config)>.k-edit-field >.k-file-format').closest('div:not(.k-edit-field)').hide();
    }
}
```

Add the following code to your RadSpreadsheet markup:

```html
<telerik:RadSpreadsheet runat="server" OnClientExcelExport="OnClientExcelExport" ID="RadSpreadsheet1"></telerik:RadSpreadsheet>
```

This code will disable the Excel export option and only allow exporting to PDF. When the user tries to export to Excel, they will see an alert message indicating that Excel export has been disabled.

Please note that the provided solution is a custom implementation and may require further adjustments based on your specific requirements.

  
