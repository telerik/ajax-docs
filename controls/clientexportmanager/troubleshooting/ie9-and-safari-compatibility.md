---
title: IE9 and Safari Compatibility
page_title: IE9 and Safari Compatibility | UI for ASP.NET AJAX Documentation
description: IE9 and Safari Compatibility
slug: clientexportmanager/troubleshooting/ie9-and-safari-compatibility
tags: ie9,and,safari,compatibility
published: True
position: 0
---

# IE9 and Safari Compatibility



This article explains the specifics in RadClientExportManager's configuration for use in IE9 and Safari

## IE9 and Safari Compatibility

The **RadClientExportManager** relies on the File API in order to work.IE9 and Safari browser does not support File API so in order to export the browser needs to make a request to the server and receive back the data. For this functionality is used the **RadClientExportManager ProxyURL**. The example below shows how to configure RadClientExportManager, to be able to use it with IE9 and Safari.

**Example1:** The example shows how to configure the **RadClientExportManager** in order to use ProxyURL, process and returns the data stream to the client.



````ASPNET
<div id="foo">
	<span>Some text</span>

	<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
		<PdfSettings FileName="MyFile.pdf" ProxyURL="api/export/file" />
	</telerik:RadClientExportManager>

	<script type="text/javascript">
		function exportElement() {
			var exp = $find("RadClientExportManager1");
			exp.exportPDF($telerik.$("html"));
		}
	</script>
</div>
````
````VB.NET
Imports System.Collections.Generic
Imports System.Linq
Imports System.Net
Imports System.Net.Http
Imports System.Net.Http.Formatting
Imports System.Net.Http.Headers
Imports System.Web.Http

Public Class ExportController
	Inherits ApiController
	<HttpPost> _
	Public Function File(values As FormDataCollection) As HttpResponseMessage
		Dim contentType = values.[Get]("contentType")
		Dim base64 = values.[Get]("base64")
		Dim fileName = values.[Get]("fileName")

		Dim fileContents = Convert.FromBase64String(base64)




		Dim response = New HttpResponseMessage()
		response.Content = New ByteArrayContent(fileContents)
		response.Content.Headers.ContentDisposition = New ContentDispositionHeaderValue("attachment")
		response.Content.Headers.ContentDisposition.FileName = fileName
		response.Content.Headers.ContentType = New MediaTypeHeaderValue(contentType)
		response.Content.Headers.ContentLength = fileContents.Length

		Return response
	End Function
End Class
#End Region
````



# See Also

 * [Save exported files on the server]({%slug clientexportmanager/how-to/save-exported-files%})
