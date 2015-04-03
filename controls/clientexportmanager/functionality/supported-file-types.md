---
title: Supported File Types
page_title: Supported File Types | UI for ASP.NET AJAX Documentation
description: Supported File Types
slug: clientexportmanager/functionality/supported-file-types
tags: supported,file,types
published: True
position: 0
---

# Supported File Types



## Supported file types

__RadClientExportManager__ for ASP.NET AJAX can export a specific DOM element or the entire page to the following file formats:

* Portable Document Format (__PDF__)

* Scalable Vector Graphics (__SVG__)

* Portable Network Graphics (__PNG__)

* Bitmap image format (__BMP__)

* Joint Photographic Experts Group (__JPG__ or __JPEG__)

The following examples show the different settings and methods specific to each supported file type:

__Example 1:__ Export a DOM element to PDF

````ASPNET
	            <div id="foo">Lorem ipsum dolor sit amet</div>
	            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	                 <PdfSettings filename="Myfile.pdf" />
	            </telerik:RadClientExportManager>
	            <input type="button" onclick="exportElement()" value="export" />
	
	            <script type="text/javascript">
	                function exportElement() {
	                    var exp = $find("<%= RadClientExportManager1.ClientID %>");
	                    exp.exportPDF($telerik.$("#foo"));
	                }
	            </script>
````



__Example 2:__ Export a DOM element to SVG

````ASPNET
	            <div id="foo">Lorem ipsum dolor sit amet</div>
	            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	                <SvgSettings FileName="MyFile.svg" />
	            </telerik:RadClientExportManager>
	            <input type="button" onclick="exportElement()" value="export" />
	
	            <script type="text/javascript">
	                function exportElement() {
	                    var exp = $find("<%= RadClientExportManager1.ClientID %>");
	                    exp.exportSvg($telerik.$("#foo"));
	                }
	            </script>
````



__Example 3:__ Export a DOM element to PNG

````ASPNET
	            <div id="foo">Lorem ipsum dolor sit amet</div>
	            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	                <ImageSettings FileName="MyFile.png" />
	            </telerik:RadClientExportManager>
	            <input type="button" onclick="exportElement()" value="export" />
	
	            <script type="text/javascript">
	                function exportElement() {
	                    var exp = $find("<%= RadClientExportManager1.ClientID %>");
	                    exp.exportImage($telerik.$("#foo"));
	                }
	            </script>
````



__Example 4:__ Export a DOM element to BMP

````ASPNET
	            <div id="foo">Lorem ipsum dolor sit amet</div>
	            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	                <ImageSettings FileName="MyFile.bmp" />
	            </telerik:RadClientExportManager>
	            <input type="button" onclick="exportElement()" value="export" />
	
	            <script type="text/javascript">
	                function exportElement() {
	                    var exp = $find("<%= RadClientExportManager1.ClientID %>");
	                    exp.exportImage($telerik.$("#foo"));
	                }
	            </script>
````



__Example 5:__ Export a DOM element to JPG

````ASPNET
	            <div id="foo">Lorem ipsum dolor sit amet</div>
	            <telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	                <ImageSettings FileName="MyFile.jpg" />
	            </telerik:RadClientExportManager>
	            <input type="button" onclick="exportElement()" value="export" />
	
	            <script type="text/javascript">
	                function exportElement() {
	                    var exp = $find("<%= RadClientExportManager1.ClientID %>");
	                    exp.exportImage($telerik.$("#foo"));
	                }
	            </script>
````


