---
title: Export HTML Elements
page_title: Export HTML Elements | UI for ASP.NET AJAX Documentation
description: Export HTML Elements
slug: clientexportmanager/functionality/export-html-elements
tags: export,html,elements
published: True
position: 2
---

# Export HTML Elements



**RadClientExportManager** can export the whole page or a specific DOM element.

## 

To export a specific Dom element to a PDF document, you should pass the jQuery object wrapping the DOM element, or the DOM element itself, to the [exportPDF]({%slug clientexportmanager/client-side-programming/overview%}) client-side method of the **RadClientExportManager** object. To export the DOM element to an image or SVG, you should use the [exportImage]({%slug clientexportmanager/client-side-programming/overview%}) and [exportSvg]({%slug clientexportmanager/client-side-programming/overview%}) client-side methods.

**Example 1:** Export a DOM element with ID "foo"

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
		exp.exportPDF($telerik.$("#foo"));
	}
</script>
````


