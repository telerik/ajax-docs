---
title: Add Thumbnail page navigation
description: Implementation of thumbnail page navigation with PDF.js
type: how-to
page_title: Add Thumbnail page navigation - RadPdfNavigation | Telerik UI For ASP.NET AJAX
slug: pdfviewer-add-thumbnail-page-navigation
position: 
tags: 
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadPdfViewer for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Q: How to add Thumbnail page navigation navigation to the RadPdfViewer

## Solution

**Prerequisits**

- Register the Pdf.js library on the page:

````ASPX
<head runat="server">
    <title></title>
    ...
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.js"></script>
    <script type="text/javascript">
        window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    </script>
</head>
````

- Declare an empty div that will serve as container for the Thumbnail navigation.

- Create the RadPdfViewer and set the PDF file that will be displayed

````ASP.NET
<div class="thumbnailsDiv"></div>
<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" RenderMode="Lightweight" Height="600px" Width="600px">
    <PdfjsProcessingSettings File="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf">
    </PdfjsProcessingSettings>
</telerik:RadPdfViewer>
````

**Create the Thumbnail navigation using JavaScript**

- Use the pdf.js to get the document

- For each page generate a thumbnail as a canvas element wrapped in a separate div element

- Wire the onclick event to each Thumbnail and append it in the predifined wrapper.

- In the Click event get a reference to the PdfViewer control object and activate the respective page in the PDF document using the Kendo widget.


````JavaScript
function makeThumb(page) {
    // draw page to fit into 96x96 canvas
    var vp = page.getViewport(1);
    var canvas = document.createElement("canvas");
    canvas.width = canvas.height = 200;
    var scale = Math.min(canvas.width / vp.width, canvas.height / vp.height);
    return page.render({ canvasContext: canvas.getContext("2d"), viewport: page.getViewport(scale) }).promise.then(function () {
        return canvas;
    });
}

pdfjsLib.getDocument("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf").promise.then(function (doc) {
    var pages = []; while (pages.length < doc.numPages) pages.push(pages.length + 1);
    return Promise.all(pages.map(function (num) {
        // create a div for each page and build a small canvas for it
        var div = document.createElement("div");
        div.className = "thumbnail";
        div.onclick = thumbnailClick;
        $telerik.$(".thumbnailsDiv")[0].appendChild(div);
        return doc.getPage(num).then(makeThumb)
            .then(function (canvas) {
                div.appendChild(canvas);
                $telerik.$(div).append("<span style='margin-left: 55px;'>Page " + num + "</span>");
            });
    }));
}).catch(console.error);

function thumbnailClick() {
    var pdfViewerObject = $find("<%=RadPdfViewer1.ClientID %>"); //the standard script control object
    var kendoPdfViewerObject = pdfViewerObject.get_kendoWidget(); //the Kendo widget
    kendoPdfViewerObject.activatePage($telerik.$(this).index() + 1);
};
````

Add custom CSS to achieve a smooth appearance:

````CSS
div.thumbnailsDiv {
    height: 600px;
    width: 180px;
    overflow-y: scroll;
    float: left;
}

div.k-pdf-viewer {
    position: absolute;
    left: 200px;
}

div.thumbnail {
    cursor: pointer;
}

    div.thumbnail:hover {
        opacity: 0.5;
    }
````

The approach above allows the users to scroll though the thumbnails of all pages in the navigation element and activate any desired page in the PdfViewer by clicking on the respective Thumbnail. Have in mind that scrolling in the PdfViewer is independent from scrolling in the thumbnail navigation and vice versa. 
