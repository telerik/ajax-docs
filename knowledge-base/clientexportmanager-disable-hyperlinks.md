---
title: Disabling Hyperlinks and Mailto URLS in the produced PDF
description: Prevent the default behavior and disable hyperlinks when you export content in PDF with the Telerik RadClientExportManager
type: how-to
page_title: Disabling Hyperlinks and Mailto URLS in the produced PDF - Telerik Web UI RadClientExportManager
slug: clientexportmanager-disable-hyperlinks
position: 
tags: 
ticketid: 1561882
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadClientExportManager for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to disable the hyperlinks when you export content in PDF with the RadClientExportManager control.

## Solution

>note Since R2 2022, the AvoidLinks server property is available built-in in RadClientExportManager's PdfSettings inner tag.

In the underlying Kendo Drawing API there is a configuration setting called [avoidLinks: true](https://docs.telerik.com/kendo-ui/framework/drawing/pdf-output/hyperlinks) which you can enable in RadClientExportManager as shown below:

````ASP.NET
<div id="foo">
    <a href="https://www.google.com">Google</a>
    <br />
    <a href="mailto:someone@yoursite.com">Email Us</a>
</div>

<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1">
</telerik:RadClientExportManager>
<input type="button" onclick="exportElement()" value="export" />

<script type="text/javascript">
    function exportElement() {
        var pdfSettings = {
            fileName: "PDF-Export",
            avoidLinks: true,
            margin: { top: 25, left: 15, bottom: 10, right: 5 },
            paperSize: "A4",
            landscape: "Portrait",
            title: "PDF",
            author: "UserName",
            subject: "Export to PDF",
            keywords: "a keyword",
            creator: "John",
            date: new Date(2015, 10, 25)
        };
        var exp = $find("<%= RadClientExportManager1.ClientID %>");
        exp.exportPDF($telerik.$("#foo"), pdfSettings);
    }
</script>
````

 