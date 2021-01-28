---
title: Export Whole Pages
page_title: Export Whole Pages - RadClientExportManager
description: Check our Web Forms article about Export Whole Pages.
slug: clientexportmanager/functionality/export-whole-pages
tags: export,whole,pages
published: True
position: 1
---

# Export Whole Pages



**RadClientExportManager** can export the whole page or a specific DOM element.

## 

To export the whole page to a PDF document, you should pass the jQuery object wrapping the "<html>" DOM element, or the DOM element itself, to the [exportPDF]({%slug clientexportmanager/client-side-programming/overview%}) client-side method of the **RadClientExportManager** object. To export to an image or SVG, you should use the [exportImage]({%slug clientexportmanager/client-side-programming/overview%}) and [exportSvg]({%slug clientexportmanager/client-side-programming/overview%}) client-side methods.

**Example 1:** Export the whole page to a PDF document

````ASPNET
<div id="foo">Lorem ipsum dolor sit amet</div>

<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
	<PdfSettings FileName="MyFile.pdf" />
</telerik:RadClientExportManager>

<input type="button" onclick="exportElement()" value="export" />
````



````JavaScript
<script type="text/javascript">
	function exportElement() {
		var exp = $find("<%= RadClientExportManager1.ClientID %>");
		exp.exportPDF($telerik.$("html"));
	}
</script>
````


