---
title: Configuring RadClientExportManager for PDF Export in ASP.NET AJAX
description: Learn how to set up and customize the PDF export options of RadClientExportManager, including landscape mode, paper size, and fitting content on the page.
type: how-to
page_title: How to Customize PDF Export Settings in RadClientExportManager for ASP.NET AJAX
slug: customize-pdf-export-radclientexportmanager-aspnet-ajax
tags: radclientexportmanager, asp.net ajax, pdf export, landscape, papersize, scale
res_type: kb
ticketid: 1683015
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadClientExportManager for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2025.1.218</td>
</tr>
</tbody>
</table>

## Description

When exporting content to PDF using RadClientExportManager, I need detailed information on all available pdfSettings properties and their acceptable values. Specifically, I'm looking for guidance on setting the landscape mode correctly, using different paper sizes like "Letter", and ensuring content such as charts fits on the page without unnecessary trial and error. This knowledge base article also answers the following questions:

- How to configure landscape or portrait mode in PDF export?
- What are the acceptable paper sizes for PDF export?
- How can I ensure my content fits within the page when exporting to PDF?

## Solution

To customize the PDF export settings in RadClientExportManager, follow these guidelines:

1. **Landscape Property**: This accepts a boolean value. Use `true` for landscape and `false` for portrait orientation.
    ```javascript
    landscape: false, // Portrait
    landscape: true,  // Landscape
    ```

2. **PaperSize Values**: Common paper sizes like "A4", "Letter", and "Legal" are supported. You can also specify custom sizes using an array of width and height in points (1 pt = 1/72 inch), for example, `[800, 600]`.

3. **Full List of Export Settings**: RadClientExportManager leverages the Kendo UI Drawing API for PDF export. Refer to the [Kendo UI PDF Export Documentation](https://docs.telerik.com/kendo-ui/framework/pdf/overview) for a comprehensive list of options.

4. **Shrink to Fit**: Adjust the `scale` and `margin` properties to fit content on the page. Ensure the content width does not exceed the paper size. Example settings for a "Letter" paper size with adjusted scale and margins:
    ```javascript
    var pdfSettings = {
        fileName: "Full-PDF-Export",
        proxyURL: "http://www.proxy.com",
        margin: { top: "20mm", left: "10mm", bottom: "20mm", right: "10mm" },
        paperSize: "Letter",
        landscape: false, // Change as needed
        scale: 0.8, // Adjust scale to fit content
        // Additional properties...
    };
    ```

### Example Implementation
```javascript
function exportPDF() {
    var exportManager = $find('<%=RadClientExportManager1.ClientID%>');
    var pdfSettings = {
        fileName: "Full-PDF-Export",
        proxyURL: "http://www.proxy.com",
        // Configure other pdfSettings properties as shown above
    };
    exportManager.set_pdfSettings(pdfSettings);
    exportManager.exportPDF($(".MyGrid"));
}
```

Add a RadClientExportManager to your page:
```aspx
<telerik:RadClientExportManager runat="server" ID="RadClientExportManager1"></telerik:RadClientExportManager>
```

For RadGrid or other Telerik UI for ASP.NET AJAX controls, configure them as needed and use the `exportPDF` JavaScript function to initiate the export.

## See Also

- [RadClientExportManager Overview](https://www.telerik.com/products/aspnet-ajax/documentation/controls/clientexportmanager/overview)
- [Kendo UI PDF Export Documentation](https://docs.telerik.com/kendo-ui/framework/pdf/overview)
- [Kendo UI Drawing API Documentation](https://docs.telerik.com/kendo-ui/api/javascript/drawing)
