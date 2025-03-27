---
title: Overview
page_title: Client-side Programming Overview - RadClientExportManager
description: Check our Web Forms article about Overview.
slug: clientexportmanager/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



## 

The **RadClientExportManager** client-side object exposes the following client-side methods to control its behavior:


>caption  RadClientExportManager Client-Side Methods 

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **exportPDF** |DOM element, pdfSettings object||Export the passed DOM element to PDF. If the pdfSettings parameter is not passed, the control's default settings are used. (See Example 1)|
| **exportImage** |DOM element, imageSettings object||Export the passed DOM element to an image file. If the imageSettings parameter is not passed, the control's default settings are used. The value set to the "width" and "height" properties should not be an empty string, otherwise an exception will be thrown.|
| **exportSVG** |DOM element, svgSettings object||Export the passed DOM element to SVG. If the svgSettings parameter is not passed, the control's default settings are used. (See Example 1)|
| **get_pdfSettings** ||pdfSettings object|Get the PDF settings.|
| **get_imageSettings** ||imageSettings object|Get the image settings.|
| **get_svgSettings** ||svgSettings object|Get the SVG settings.|
| **set_pdfSettings** |pdfSettings object||Set the PDF settings.|
| **set_imageSettings** |imageSettings object||Set the image settings.|
| **set_svgSettings** |svgSettings object||Set the SVG settings.|

The pdfSettings, imageSettings and svgSettings are JavaScript objects that contain the properties you want to change. You can find an example for each object below in **Example 1**.

>important It is not required to change all available properties. For example in your pdfSettings object you can set only the filename. However, setting an empty string value for the "width" and "height" properties in imageSettings will throw an exception.
>


**Example 1:** A sample definition of pdfSettings, imageSettings and svgSettings objects.

````JavaScript
<script type="text/javascript">
	var pdfSettings = {
		fileName: "PDF-Export",
		proxyURL: "http://www.proxy.com",
		margin: { top: 25, left: 15, bottom: 10, right: 5 },
		paperSize: "A4", // Try "A4", "Letter", or custom like [800, 600]
		landscape: true, // true = landscape, false = portrait 
		title: "PDF",
		author: "UserName",
		subject: "Export to PDF",
		keywords: "a keyword",
		creator: "John",
		date: new Date(2015, 10, 25)
	};


	var imageSettings = {
		fileName: "Image-Export",
		proxyURL: "http://www.proxy.com",
		width: 200,
		height: 400,
	};

	var svgSettings = {
		fileName: "SVG-Export",
		proxyURL: "http://www.proxy.com",
		raw: false
	};
	
        function exportImage() {
            //get reference to the ClientExportManager object
            var exportManager = $find('<%=RadClientExportManager1.ClientID%>');
            //specify the image settings fileName, proxy, width, height
            var imageSettings = {
                fileName: "test.png",
                width: "1900px",
                height: "1000px"
             }
            //set the image settings
            exportManager.set_imageSettings(imageSettings);
            //export the element/container
            exportManager.exportImage($(".MyGrid"));
        }
</script>
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1"></telerik:RadClientExportManager>
<telerik:RadGrid RenderMode="Lightweight" runat="server" ID="GridView1" CssClass="MyGrid" DataSourceID="SqlDataSource1"></telerik:RadGrid>
<telerik:RadButton RenderMode="Lightweight" runat="server" OnClientClicked="exportImage" Text="Export RadGrid to Image" AutoPostBack="false" UseSubmitBehavior="false"></telerik:RadButton>
````

# See Also
