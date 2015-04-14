---
title: PdfExporting
page_title: PdfExporting | UI for ASP.NET AJAX Documentation
description: PdfExporting
slug: clientexportmanager/client-side-programming/events/pdfexporting
tags: pdfexporting
published: True
position: 1
---

# PdfExporting



The client-side **PdfExporting** event is raised when **RadClientExportManager** is about to export a PDF document. You can handle this event in case you want to prevent the export. This article shows how to use this event in order to send the file content to the server, save it there and cancel the further execution of the export (See **Example 1**). For your reference you can find the API controller implementation as well (See **Example 2**).

To handle this event, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the **OnClientPdfExporting** property.

## 

The client-side **PdfExporting** event handler receives two arguments:

1. Sender—the [RadClientExportManager object]({%slug clientexportmanager/client-side-programming/overview%}) that fired the event.

1. Event arguments — a **ClientExportManagerPdfExportingEventArgs** object that exposes the following methods:


>caption ClientExportManagerPdfExportingEventArgs Object

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()||bool|Gets a value that indicates whether the event is canceled.|
|get_dataURI()||String|Returns the PDF document dataURI.|
|set_cancel(value)|bool||Sets whether the event will be canceled (if true is passed).|

**Example 1**: Send the PDF to the server and prevent the client-side export.

````ASPNET
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1" OnClientPdfExporting="OnClientPdfExporting">
	<PdfSettings FileName="MyFile.pdf" />
</telerik:RadClientExportManager>

<input type="button" onclick="exportElement()" value="export" />
````



````JavaScript
var $ = $telerik.$;

function OnClientPdfExporting(sender, args) {
	var dataRaw = args.get_dataURI().split(',');

	var data = { contentType: dataRaw[0].split(';')[0].split(':')[1], fileName: "test 1.pdf", base64: dataRaw[1] };

	$.ajax({
		type: "POST",
		data: data,
		url: "api/export/file",
		success: success
	});

	args.set_cancel(true);
}

function success() {
	$find("FileExplorer1").refresh();
}

function exportElement() {
	var exp = $find("<%= RadClientExportManager1.ClientID %>");

	exp.exportPDF($telerik.$("#foo"));
}
````



**Example 2**: Save a PDF sent from the client to a folder on the server.



````C#
public class ExportController : ApiController
{
	[HttpPost]
	public HttpResponseMessage File(FormDataCollection values)
	{
		var contentType = values.Get("contentType");
		var base64 = values.Get("base64");
		var fileName = values.Get("fileName");

		var fileContents = Convert.FromBase64String(base64);


		System.IO.File.WriteAllBytes(System.Web.Hosting.HostingEnvironment.MapPath("~/files") + "\\" + Guid.NewGuid() + "_" + fileName, Convert.FromBase64String(base64));

		var response = new HttpResponseMessage();
		response.StatusCode = HttpStatusCode.OK;

		return response;
	}
}
````
````VB.NET
Public Class ExportController
	Inherits ApiController
	<HttpPost> _
	Public Function File(values As FormDataCollection) As HttpResponseMessage
		Dim contentType = values.[Get]("contentType")
		Dim base64 = values.[Get]("base64")
		Dim fileName = values.[Get]("fileName")

		Dim fileContents = Convert.FromBase64String(base64)


		System.IO.File.WriteAllBytes(System.Web.Hosting.HostingEnvironment.MapPath("~/files") + "\" + Guid.NewGuid().ToString() + "_" + fileName, Convert.FromBase64String(base64))



		Dim response = New HttpResponseMessage()
		response.StatusCode = HttpStatusCode.OK


		Return response
	End Function
End Class
#End Region
````



# See Also

 * [RadClientExportManager Client-Side API]({%slug clientexportmanager/client-side-programming/overview%})
