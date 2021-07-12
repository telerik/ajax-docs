---
title: Load Excel file with SpreadsheetDocumentProvider when using Custom Provider
description: Load Excel file with SpreadsheetDocumentProvider when using Custom Provider. Check it now!
type: how-to
page_title: Load Excel file with SpreadsheetDocumentProvider when using Custom Provider
slug: spreadsheet-load-excel-file-with-spreadsheetdocumentprovider-when-using-custom-provider
res_type: kb
---


### HOW TO

Use `SpreadsheetDocumentProvider` inside custom provider to Save/Load Excel files and have control over the data.

### SOLUTION

To load the data from a file, we can leverage the `Server.MapPath` to get the real path to the file. Then we pass it as a parameter to the constructor of our Custom Provider.

Default.aspx

````ASP.NET
<telerik:RadSpreadsheet runat="server" ID="RadSpreadsheet1"></telerik:RadSpreadsheet>
````


Default.aspx.cs - Code behind

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var path = Server.MapPath("~/App_Data/spreadsheet.xlsx");
    // default Load/Save from Excel file
    //SpreadsheetDocumentProvider provider = new SpreadsheetDocumentProvider(path);
 
    // Custom provider that allows additional manipulation of data before/after Save/Load from Excel file
    // Passing the path to the custom provider, so that we can leverage the Server.MapPath method
    SpreadsheetCustomExcelProvider provider = new SpreadsheetCustomExcelProvider(path);
 
    RadSpreadsheet1.Provider = provider;
}
````

SpreadsheetCustomExcelProvider.cs - Custom Provider

````C#
public class SpreadsheetCustomExcelProvider : SpreadsheetProviderBase
{
    public string Path { get; set; }
    public SpreadsheetCustomExcelProvider(string path)
        : base()
    {
        Path = path;
    }
 
    public override void SaveWorkbook(Workbook workbook)
    {
        SpreadsheetDocumentProvider provider = new SpreadsheetDocumentProvider(Path);
        // modify data before save
        provider.SaveWorkbook(workbook);
    }
 
    public override List<Worksheet> GetSheets()
    {
        SpreadsheetDocumentProvider provider = new SpreadsheetDocumentProvider(Path);
        var sheets = provider.GetSheets();
        // modify data before display
        return sheets;
    }
}
````



### SEE ALSO

- [Custom DataBase provider]({%slug spreadsheet/data-binding/providers/custom-database-provider%})
- [SpreadsheetDocumentProvider]({%slug spreadsheet/data-binding/providers/using-a-data-provider%})
- [How to iterate all cells and rows in Spreadsheet properly on the server-side]({%slug spreadsheet-how-to-iterate-all-cells-and-rows-in-spreadsheet-properly%}) KB article
- [Server-side export to Excel from RadSpreadsheet]({%slug spreadsheet-server-side-export-to-excel-from-radspreadsheet%}) KB article

  


