---
title: How to rotate single page in whole pdf?
description: See how to rotate a single page in RadPdfViewer
type: how-to
page_title: Rotate a single page - RadPdfViewer - Telerik UI For ASP.NET AJAX
slug: pdfviewer-rotate-single-page
position: 
tags: 
ticketid: 1544595
res_type: kb
---

## How To
In some scenarios you need to rotate a single page in the PdfViewer withouht changing the orientation of the whole document. You can achieve that by transforming the element of the desired page utilizing the CSS [rotate()](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate()) functionality.

## Solution

1. Assign a handler to the PdfViewer's client-side `PreRender` event.
   
2. Implement a function applying the desired rotation to a specific page in the viewer

````ASP.NET
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml'>
<head runat="server">
    <title>Telerik ASP.NET Example</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager runat="server" ID="RadScriptManager1" />
        <script type="text/javascript">
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
        </script>
        <telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="550px" Width="100%">
            <ClientEvents OnRender="onPdfRender" />
            <PdfjsProcessingSettings File="Document.pdf">
            </PdfjsProcessingSettings>
        </telerik:RadPdfViewer>
        <script>
            function onPdfRender(pdfViewer, args) {

                rotateSinglePage(2, 90)
            }

            function rotateSinglePage(pageNum, degree) {
                var viewerMain = $find("RadPdfViewer1").get_element();
                var pageContainer = viewerMain.querySelector("div[data-number='" + pageNum + "']");
                pageContainer.style.transform = "rotate(" + degree + "deg)";
            }
        </script>
    </form>
</body>
</html>
````


