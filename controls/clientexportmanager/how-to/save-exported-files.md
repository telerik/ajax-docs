---
title: Save Exported Files
page_title: Save Exported Files | RadClientExportManager for ASP.NET AJAX Documentation
description: Save Exported Files
slug: clientexportmanager/how-to/save-exported-files
tags: save,exported,files
published: True
position: 0
---

# Save Exported Files



This article demonstrates how to save the exported file on the server instead of returning it back to the client browser.

## 

In this example we will use Web API to send the file data to the server and perform the saving. The RadFileExplorer will be populated with the exported files as shown in the screenshot at the bottom of this article.It reads the files from the target folder ("files") and visualizes their filenames.

>caution In order to run this sample code you have to add all necessary assembly files that Web API requires and create a "files" folder at web site root level.
>


**Example 1:** The markup code contains: button, RadOrgChart and RadFileExplorer. When user clicks on the button it will initiate a request to the server and save the exported file in the files folder.

````ASPNET

<input type="button" onclick="exportElement()" value="export" />

<telerik:RadFilEexplorer ID="FileExplorer1" Configuration-deletepaths="~/files" runat="server" Configuration-viewpaths="~/files"></telerik:RadFilEexplorer>

<div id="Div1">
	<telerik:RadOrgChart ID="RadOrgChart2" runat="server">
		<Nodes>
			<telerik:OrgChartNode>
				<GroupItems>
					<telerik:OrgChartGroupItem Text="Manager">
					</telerik:OrgChartGroupItem>
				</GroupItems>
				<Nodes>
					<telerik:OrgChartNode>
						<GroupItems>
							<telerik:OrgChartGroupItem Text="Junior Developer">
							</telerik:OrgChartGroupItem>
						</GroupItems>
					</telerik:OrgChartNode>
					<telerik:OrgChartNode>
						<GroupItems>
							<telerik:OrgChartGroupItem Text="Junior QA">
							</telerik:OrgChartGroupItem>
						</GroupItems>
					</telerik:OrgChartNode>
				</Nodes>
			</telerik:OrgChartNode>
		</Nodes>
	</telerik:RadOrgChart>

	<telerik:RadClientExportManager runat="server" id="RadClientExportManager2" OnClientPdfExporting="OnClientPdfExporting">
		<PdfSettings FileName="MyFile.pdf" MarginBottom="20mm" />
	</telerik:RadClientExportManager>
</div>
````



**Example 2:** Here we send the raw data to the server using Ajax call and cancel the export execution.

````JavaScript
		
var $ = $telerik.$;

function OnClientPdfExporting(sender, args) {
	var dataRaw = args.get_dataURI().split(',');

	var data = {
		contentType: dataRaw[0].split(';')[0].split(':')[1],
		fileName: "test 1.pdf",
		base64: dataRaw[1]
	};

	$.ajax({
		type: "POST",
		data: data,
		url: "api/export/file",
		success: success
	});

	args.set_cancel(true);
}

function success() {
	$find("<%= FileExplorer1.ClientID %>").refresh();
}

function exportElement() {
   var exportMngr = $find("<%= RadClientExportManager1.ClientID %>");
	exp.exportPDF($telerik.$("#foo"));
}
	
	
````



This is the API controller class definition:



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

````


>caption Figure 1: Shows how the RadFileExplorer is populated with the exported pdf files.

![clientexportmanager-save-exported-files](images/clientexportmanager-save-exported-files.png)

# See Also

 * [RadClientExportManager Client-Side API]({%slug clientexportmanager/client-side-programming/overview%})
