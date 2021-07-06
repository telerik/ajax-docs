---
title: Broken scroll and overflow appearance in Spreadsheet
: Broken scroll and overflow appearance in Spreadsheet. Check it now!
type: how-to
page_title: Broken scroll and overflow appearance in Spreadsheet
slug: spreadsheet-broken-scroll-and-overflow-appearance
res_type: kb
---


## Problem

When you load a file in the Spreadsheet, sometimes it has a broken appearance, it overflows and the scroll is not working.

## Description

Most commonly the reasons for the unexpected behavior are JavaScript errors or loading some Excel files. Most of the Excel files that cause such an issue are loaded server-side and contain frozen rows and columns.

## SOLUTION

### Option 1

Remove the frozen rows and columns when loading the file:

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var provider = new SpreadsheetDocumentProvider(Server.MapPath("~/App_Data/MyExcelFile.xlsx"));
    RadSpreadsheet1.Provider = provider;
 
    foreach (var sheet in provider.GetSheets())
    {
        sheet.FrozenColumns = 0;
        sheet.FrozenRows = 0;
    }
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim provider = New SpreadsheetDocumentProvider(Server.MapPath("~/App_Data/MyExcelFile.xlsx"))
    RadSpreadsheet1.Provider = provider

    For Each sheet In provider.GetSheets()
        sheet.FrozenColumns = 0
        sheet.FrozenRows = 0
    Next
End Sub
````

  

### Option 2

If you need the frozen rows and columns to persist, you can load the file on the client by saving it to a `base64string`.

````ASP.NET
<asp:HiddenField  runat="server" ID="HiddenField1"/>
````

````JavaScript
<script>
function pageLoadHandler() {
    var spreadsheet = $find("<%= RadSpreadsheet1.ClientID %>");
    var value = $get("<%= HiddenField1.ClientID %>").value;
                     
    var file = b64toBlob(value)
    spreadsheet.fromFile(file);
}
Sys.Application.add_load(pageLoadHandler);

// https://ourcodeworld.com/articles/read/322/how-to-convert-a-base64-image-into-a-image-file-and-upload-it-with-an-asynchronous-form-using-jquery
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
  
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
  
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
  
        var byteArray = new Uint8Array(byteNumbers);
  
        byteArrays.push(byteArray);
    }
  
    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
</script>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    //https://stackoverflow.com/questions/25919387/c-sharp-converting-file-into-base64string-and-back-again
    Byte[] bytes = File.ReadAllBytes(Server.MapPath("~/App_Data/MyExcelFile.xlsx"));
    String file = Convert.ToBase64String(bytes);
    HiddenField1.Value = file;
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    'https://stackoverflow.com/questions/25919387/c-sharp-converting-file-into-base64string-and-back-again
    Dim bytes As Byte() = File.ReadAllBytes(Server.MapPath("~/App_Data/MyExcelFile.xlsx"))
    Dim file As String = Convert.ToBase64String(bytes)
    HiddenField1.Value = file
End Sub
````



