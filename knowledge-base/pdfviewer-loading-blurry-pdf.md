---
title: Loading Blurry PDF in RadPdfViewer for ASP.NET AJAX
description: Learn how to resolve the issue of a blurry PDF in RadPdfViewer for ASP.NET AJAX.
type: troubleshooting
page_title: Troubleshooting Blurry PDF Load in RadPdfViewer for ASP.NET AJAX
slug: pdfviewer-loading-blurry-pdf
tags: radpdfviewer, ajax, blurry, load, initial, ASP.NET
res_type: kb
---
# Description
When initially loading a PDF into the RadPdfViewer for ASP.NET AJAX, parts of the PDF appear blurred and the line thickness is incorrect. 

# Cause
The initial loading issue with the blurred PDF may be caused by a combination of factors, including the version of the RadPdfViewer control and pdf.js library as well as to the scaling settings applied to the PDF.

# Solution
To resolve the issue of the blurry initial load of the PDF in RadPdfViewer for ASP.NET AJAX, follow these steps:

1. Upgrade to the latest version of RadPdfViewer
2. Test with different scaling: 
```C#
radPdfViewer.Scale = new Telerik.Web.UI.PdfViewer.Scale(1.2);
```
3. Disable the accelerated 2D canvas feature in Google Chrome by following these steps:
   - Enter `chrome://flags` in the address bar.
   - Search for "accelerated 2d canvas" and disable this feature.
   - Relaunch Google Chrome.
4. If the issue persists, try bumping the Pdf.JS version or setting a timeout before calling the `viewerWidget.toolbar.zoom.combobox.value('actual')` and `viewerWidget.toolbar.zoom.combobox.trigger('change')` methods.

````ASPX
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.min.js" integrity="sha512-QJy1NRNGKQoHmgJ7v+45V2uDbf2me+xFoN9XewaSKkGwlqEHyqLVaLtVm93FzxVCKnYEZLFTI4s6v0oD0FbAlw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.sandbox.min.js" integrity="sha512-H84XGP0ry9wp48AEUC+x/kR5shLoZ02U38POqeapsvs7ZBdMdrI6EPAF24Vv4SNoAxVQrkf9a2NX/hh2Ifyj6g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js" integrity="sha512-UiXicZonl1pXJaZk0apG3TN/yE/a52JjAyZmr1MmvjI01f7MURJD+M4UUdBxxz1Zzte1zjie37VtotaR3b1/1g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf_viewer.min.css" integrity="sha512-bhJalmRVg29JjmI5PVxobJ3xL71iUqk9yXhGjEtpuBg1tZ9LZZKF7Bdm8u6JifzvnxnsCB/PR9tZzmNEDE/BvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf_viewer.min.js" integrity="sha512-iI2nWYIkGb6NSMspC5tgLcDlni8n3DeLr26lYUUwqmuJCOPFsFlI9sZToqeEBNQUK0L9V2ozPY3DlCh5FiQFjA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

        <script type="text/javascript">
            var firstRender = true;
            function onRender(viewer, args) {
                var viewerWidget = viewer.get_kendoWidget();
                if (firstRender) {
                    setTimeout(function () {
                        viewerWidget.toolbar.zoom.combobox.value('actual');
                        viewerWidget.toolbar.zoom.combobox.trigger('change');
                        firstRender = false;
                    }, 1000);

                }
            }
        </script>
        <telerik:RadPdfViewer runat="server" ID="RadPdfViewerStart" AllowedFileExtensions=".html" RenderMode="Lightweight" Culture="de-DE" Height="800px" Width="100%" Scale="Fit to Width">
            <ClientEvents OnRender="onRender" />
...
````

Please note that the recommended solution may vary depending on your specific environment and requirements.
