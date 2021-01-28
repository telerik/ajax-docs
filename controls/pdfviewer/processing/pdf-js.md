---
title: PDF.js Processing
page_title: PDF.js Processing - RadPdfViewer
description: Check our Web Forms article about PDF.js Processing.
slug: pdfviewer/processing/pdf-js
tags: data,processing,pdfjs,pdf,client,server
published: True
position: 0
---

# PDF.js Processing

**RadPdfViewer** uses the PDF.js library in order to process the passed pdf files. The  [PDF.js](https://mozilla.github.io/pdf.js/) is an open-source project that is developed by Mozilla. This is why adding the PDF.js library scripts to the page is mandatory.

>caution Make sure that the required by the RadPdfViewer **PDF.js** scripts are registered to the page.

In the following example you will see how to configure the PDFViewer to use PDF.js processing.

>caption Example 1: Configure RadPdfViewer to use PDF.js

```ASP.NET
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
<script>
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
</script>

<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" RenderMode="Lightweight" Height="550px" Width="900px">
    <PdfjsProcessingSettings File="Document.pdf">
    </PdfjsProcessingSettings>
</telerik:RadPdfViewer>
```

## See Also

* [Live Demo - DPL Integration](https://demos.telerik.com/aspnet-ajax/pdfviewer/applicationscenarios/dplintegration/defaultcs.aspx)





