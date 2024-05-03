---
title: Export and save file with Web API
description: Export and save file with Web API. Check it out now!
type: how-to
page_title: Export and save file with Web API. | RadClientExportManager
slug: clientexportmanager-export-and-save-file-with-web-api
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebForms ClientExportManager for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

This sample demonstrates how you can use the **ClientExportManager** to export content to .PDF and save the file to a specified folder with Web API using an ExportController. 

The sample contains two pages, the first one (**ExportOrgChart.aspx**) shows only export of a div containing a RadOrgChart, without saving the file to a specific folder. The second page (ExportSaveOrgChart.aspx) exports and saves the .PDF file to the "files" folder. 

## Solution

This is made possible with the ExportController's `SaveFile()` method. First the data is encoded in the `onClientPdfExporting` handler and sent to the server with an AJAX request. The `SaveFile()` method then processes it and saves the file to the "files" folder appending a GUID to the filename. The routing is configured in the Global.asax file.

[Download sample](files/clientexportmanager-export-and-save-file-with-web-api.zip)
 
