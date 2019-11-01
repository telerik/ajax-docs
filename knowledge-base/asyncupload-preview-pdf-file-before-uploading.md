---
title: Preview PDF files before uploading with RadAsyncUpload
description: Use PDF.js library to preview PDF files before uploading with RadAsyncUpload
type: how-to
page_title: Use PDF.js library to preview PDF files before uploading with RadAsyncUpload | Telerik UI for ASP.NET AJAX
slug: asyncupload-preview-pdf-file-before-uploading
position: 
tags: 
ticketid: 
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadAsyncUpload for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

In the [OnClientFileSelected]({%slug asyncupload/client-side-programming/onclientfileselected%}) and [OnClientFileDropped]({%slug asyncupload/client-side-programming/onclientfiledropped%}) events of RadAsyncUpload, a reference to the File can be accessed. That means we can [convert it to base64 string](https://stackoverflow.com/a/37699333) and pass it to the [PDF.js](https://mozilla.github.io/pdf.js/) library and preview it.

## Solution

````PDF.js
<script src="https://cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.min.js"></script>

<canvas id="the-canvas" style="border: 1px  solid black"></canvas>

<script id="script">
    // The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.2.228/build/pdf.worker.js';

</script>
````

````JavaScript
<script>
    //https://github.com/mozilla/pdf.js/blob/master/examples/learning/helloworld64.html
    function previewPdfFile(file) {
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function (fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;

            // atob() is used to convert base64 encoded PDF to binary-like data.
            // (See also https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/
            // Base64_encoding_and_decoding.)
            var loadingTask = pdfjsLib.getDocument({ data: atob(base64.substring("data:application/pdf;base64,".length)) });
            loadingTask.promise.then(function (pdf) {
                // Fetch the first page.
                pdf.getPage(1).then(function (page) {
                    var scale = 1.5;
                    var viewport = page.getViewport({ scale: scale, });
                    // Prepare canvas using PDF page dimensions.
                    var canvas = document.getElementById('the-canvas');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    // Render PDF page into canvas context.
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport,
                    };
                    page.render(renderContext);
                });
            });
        };

        // Convert data to base64
        // https://stackoverflow.com/a/37699333
        fileReader.readAsDataURL(file);
    }
    function OnClientFileSelected(sender, args) {
        var file = args.get_fileInputField().files[0]
        if (file.type == "application/pdf") {
            previewPdfFile(file)
        }
    }
    function OnClientFileDropped(sender, args) {
        var file = args.get_file();
        if (file.type == "application/pdf") {
            previewPdfFile(file)
        }
    }
</script>
````

````ASPNET
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" MultipleFileSelection="Automatic"
    OnClientFileSelected="OnClientFileSelected" OnClientFileDropped="OnClientFileDropped">
</telerik:RadAsyncUpload>
````


## See Also

* [OnClientFileSelected]({%slug asyncupload/client-side-programming/onclientfileselected%}) 
* [OnClientFileDropped]({%slug asyncupload/client-side-programming/onclientfiledropped%})
* [Convert a file to base64 string](https://stackoverflow.com/a/37699333) 
* [PDF.js library](https://mozilla.github.io/pdf.js/) 


