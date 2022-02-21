---
title: Load Excel file into a read-only RadSpreadsheet
description: Load Excel file into a read-only RadSpreadsheet. Check it now!
type: how-to
page_title: Load Excel file into a read-only RadSpreadsheet
slug: spreadsheet-load-excel-file-into-a-read-only-spreadsheet
res_type: kb
---


## How to

Create a read-only Spreadsheet loaded from Excel file.

![Load excel file](images/spreadsheet-load-excel-file-into-a-read-only-spreadsheet.png)

## Solution

The solution is to subscribe to the[render event](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/render) of the underlying Kendo UI Spreadsheet and then disable all cells across all sheets.

Also, the Performance optimization approach can be applied from the[Improve performance of slowly loading Spreadsheet](https://www.telerik.com/support/kb/aspnet-ajax/spreadsheet/details/improve-performance-of-slowly-loading-spreadsheet) code library project.

````ASPX
<style>
    .rssToolbarWrapper,
    .rssFormulaBar {
        display: none;
    }
</style>

<script>
    function pageLoadHandler() {
        var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
        var value = $get("<%= HiddenField1.ClientID %>").value;
        var valueAsJSON = JSON.parse(value);
        spreadsheet.get_kendoWidget().fromJSON(valueAsJSON);
        spreadsheet.get_kendoWidget().one("render", function (e) {
            e.sender.sheets().forEach(function (sheet) {
                sheet.range(0, 0, sheet._rows._count, sheet._columns._count).enable(false);
            })
        })
    }

    Sys.Application.add_load(pageLoadHandler);
</script>

<asp:HiddenField runat="server" ID="HiddenField1" />
<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1">
</telerik:RadSpreadsheet>
````
 
````C#
protected void Page_Init(object sender, EventArgs e)
{  
    var workbook = new Telerik.Web.Spreadsheet.Workbook();
    SpreadsheetDocumentProvider   provider = new SpreadsheetDocumentProvider(Server.MapPath("~/App_Data/Spreadsheet-OverviewDemo.xlsx"));

    workbook.Sheets = provider.GetSheets();
    var json = workbook.ToJson();

    HiddenField1.Value = json;
}
````


 