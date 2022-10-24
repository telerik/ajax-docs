---
title: Set initial page zoom in RadPdfViewer
description: Check out how to load RadPdfViewer with predefined zoom option.
type: how-to
page_title: Set initial page zoom in RadPdfViewer
slug: pdfviewer-set-initial-page-zoom
ticketid: 1584422
res_type: kb
---

## Description

Check out how to set a predefined zoom option of the **RadPdfViewer**. Show a PDF file as "Fit to Page" or "Fit to Width" by default.

## Solution

1. Subscribe to the client-side `OnRender` event of the **RadPdfViewer** - [Client-side Programming]({%slug pdfviewer/client-side-programming/events%})
1. Get a reference of the **ToolBar** object beneath the PdfViewer via the `get_toolBar()` function. - [RadPdfViewer Object]({%slug pdfviewer/client-side-programming/overview%})
1. Set the desired value of the zooming ComboBox to the desired option, e.g. `fitToPage`, `fitToWidth`, etc. and trigger the change

>note You can use a boolean flag to ensure the predefined zooming is applied only once.

Here is sample code demonstrating the approach:

````ASPX
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js"></script>
    <script type="text/javascript">
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <telerik:RadScriptManager runat="server"></telerik:RadScriptManager>
        <script>
            var firstRender = true;

            function onRender(e) {
                if (firstRender) {
                    e.get_toolBar().zoom.combobox.value("fitToPage");
                    e.get_toolBar().zoom.combobox.trigger("change");
                    firstRender = false;
                }
            }
        </script>

        <telerik:RadPdfViewer runat="server" ID="pdfViewer" RenderMode="Lightweight" ActivePage="1">
            <PdfjsProcessingSettings File="Document.pdf">
            </PdfjsProcessingSettings>
            <DefaultPageSizeSettings Width="500" />
            <ClientEvents OnRender="onRender" />
        </telerik:RadPdfViewer>
    </form>
</body>
</html>
````

# See Also

* [RadPdfViewer documentation]({%slug pdfviewer/overview%})

* [RadPdfViewer live demos](https://demos.telerik.com/aspnet-ajax/pdfviewer/overview/defaultcs.aspx)

* [Client-side Programming]({%slug pdfviewer/client-side-programming/events%})

* [RadPdfViewer Object]({%slug pdfviewer/client-side-programming/overview%})
