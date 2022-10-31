---
title: Export PDF File from RadSpreadsheet to the Server Directory
description: How to export a spreadsheet from RadSpreadsheet not to the client, but instead to the server directory? 
type: how-to
page_title: Export PDF File from RadSpreadsheet to the Server Directory
slug: spreadsheet-export-pdf-file-to-the-server-directory
position: 
tags: 
ticketid: 1584492
res_type: kb
---


## Description

How to export a spreadsheet from RadSpreadsheet into the server directory, not to the client. 

## Solution

On the Client-side attach an event to the button. In OnClientClicking, the current state of the SpreadSheet is stored in a hidden field as a stringified JSON.

````JavaScript
function OnClientClicking(sender, args) {
	var spr = $find("<%= RadSpreadsheet1.ClientID %>"); 
	var hf = $get("<%= HiddenField1.ClientID %>");
	var kendoWidget = spr.get_kendoWidget();
	var json = kendoWidget.toJSON();
	hf.value = JSON.stringify(json);
}
````

In the code behind, create an AJAX workbook from the hidden field value and convert it to a Telerik Document Processing Library workbook:

  * [Understanding telerik ajax and document processing library spreadsheet workbook and worksheets](https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/spreadsheet-understanding-telerik-ajax-and-document-processing-library-spreadsheet-workbook-and-worksheets)

````C#
Telerik.Web.Spreadsheet.Workbook workbook = Telerik.Web.Spreadsheet.Workbook.FromJson(HiddenField1.Value);
Telerik.Windows.Documents.Spreadsheet.Model.Workbook document = workbook.ToDocument();
````

Saving a file using Telerik Document Processing Libraries which allows you to create, import, modify, and export documents without relying on external dependencies like Adobe Acrobat or Microsoft Office.

* [Import/Load and Export/Save RadSpreadProcessing Workbook](https://docs.telerik.com/devtools/document-processing/knowledge-base/import-export-save-load-workbook?_gl=1*ewjduh*_ga*MTUyNTIyMjE0Mi4xNjYxOTU0MDI1*_ga_9JSNBCSF54*MTY2Njk1NzY2OC4yMi4xLjE2NjY5NTg0OTguMC4wLjA.#file-as-byte-array)

````C#
//Import/Load and Export/Save RadSpreadProcessing Workbook
byte[] bytesFromWorkbook = provider.Export(document);
var path = Server.MapPath("~/App_Data/MyFile.pdf"); 
File.WriteAllBytes(path, bytesFromWorkbook);
````

 