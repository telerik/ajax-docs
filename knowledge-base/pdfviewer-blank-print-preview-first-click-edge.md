---
title: RadPdfViewer Shows a Blank Print Preview on the First Click in Edge
description: Resolve a blank RadPdfViewer print preview in Edge by waiting for the PDF page images to load before opening the print dialog.
type: troubleshooting
page_title: Fix a Blank RadPdfViewer Print Preview on the First Click in Edge
slug: pdfviewer-blank-print-preview-first-click-edge
tags: radpdfviewer, pdfviewer, print, edge, blank preview
position:
ticketid: 1720119
res_type: kb
---

## Environment

<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadPdfViewer for ASP.NET AJAX</td>
        </tr>
        <tr>
            <td>Version</td>
            <td>2026.3.812</td>
        </tr>
        <tr>
            <td>Browser</td>
            <td>Microsoft Edge</td>
        </tr>
    </tbody>
</table>

## Description

When you click the Print button in RadPdfViewer, the first print preview can open blank while the same document appears correctly after a second click.

## Cause/Possible Cause(s)

The print window opens before the images generated for the PDF pages finish loading. The second attempt succeeds because the images are already available in the browser cache.

## Solution

1. Register matching PDF.js and PDF.js worker scripts before the RadPdfViewer markup. For the required setup, see [PDF.js Processing]({%slug pdfviewer/processing/pdf-js%}).
2. Add the following script after the `RadScriptManager` and after any existing `_renderPrintPages` or `_renderPrintImage` overrides. It opens the print dialog only after all page images have finished loading.

````JavaScript
Sys.Application.add_init(function () {
    var $ = $telerik.$;
    var PrintCommand = $telerik._kendo.pdfviewer.PrintCommand;

    PrintCommand.prototype._printDocument = function () {
        var that = this;
        var pages = that.viewer.pages;
        var width = pages[0].width;
        var height = pages[0].height;
        var printWindow = window.open(
            '',
            '',
            'innerWidth=' + width + ',innerHeight=' + height + ',location=no,titlebar=no,toolbar=no'
        );
        var browser = $telerik._kendo.support.browser;

        if (!printWindow) {
            that.viewer._triggerError({ message: that.errorMessages.popupBlocked });
            return;
        }

        printWindow.document.write(that.printContainer.html());
        printWindow.document.close();

        var imagesLoaded = $.map(printWindow.document.images, function (image) {
            return new Promise(function (resolve) {
                if (image.complete && image.naturalWidth) {
                    resolve();
                } else {
                    image.onload = image.onerror = resolve;
                }
            });
        });

        Promise.all(imagesLoaded).then(function () {
            printWindow.focus();
            printWindow.print();

            if (!browser.chrome || browser.mozilla) {
                printWindow.close();
            } else {
                $(printWindow.document).find('body').on('mousemove', function () {
                    printWindow.close();
                });
            }
        });
    };
});
````

3. Test the Print button in Edge. If the browser blocks the print window, allow pop-ups for the application.

## Notes

This workaround changes when the print dialog opens; it does not change the PDF content. Keep the PDF.js and worker script versions matched and set `window.pdfjsLib.GlobalWorkerOptions.workerSrc` before the viewer is initialized.

## See Also

- [PDF.js Processing]({%slug pdfviewer/processing/pdf-js%})
- [Loading Blurry PDF in RadPdfViewer for ASP.NET AJAX]({%slug pdfviewer-loading-blurry-pdf%})

