---
title: Supported File Types
page_title: Supported File Types - RadClientExportManager
description: Check our Web Forms article about Supported File Types.
slug: clientexportmanager/functionality/supported-file-types
tags: supported,file,types
published: True
position: 0
---

# Supported File Types



## Supported file types

**RadClientExportManager** for ASP.NET AJAX can export a specific DOM element or the entire page to the following file formats:

* Portable Document Format (**PDF**)

* Scalable Vector Graphics (**SVG**)

* Portable Network Graphics (**PNG**)

* Bitmap image format (**BMP**)

* Joint Photographic Experts Group (**JPG** or **JPEG**)

The following examples show the different settings and methods specific to each supported file type:

**Example 1:** Export a DOM element to PDF

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



**Example 2:** Export a DOM element to SVG

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



**Example 3:** Export a DOM element to PNG

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



**Example 4:** Export a DOM element to BMP

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



**Example 5:** Export a DOM element to JPG

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


