---
title: Upload a PDF and Convert it to a JPG Image via RadAsyncUpload and RadPdfViewer
description: How to Upload and Convert a PDF to a JPG image via RadAsyncUpload and RadPdfViewer
type: how-to
page_title: Upload a PDF and Convert it to a JPG image via RadAsyncUpload and RadPdfViewer
slug: common-upload-pdf-and-convert-it-to-jpg-via-radasyncupload-and-radpdfviewer
position: 
tags: radpdfviewer, radasyncupload
ticketid: 1537499
res_type: kb
---

## Description

How to Convert a PDF to a JPG Image after Upload?

Normally you can use the [Telerik Document Processing Libraries](https://docs.telerik.com/devtools/document-processing/introduction) (DPL) and specifically the [RadPdfProcessing](https://docs.telerik.com/devtools/document-processing/libraries/radpdfprocessing/overview), to work with PDF files on the server-side. However, the PdfProcessing is an entirely server-side library that does not have any control over the visualization of the PDF files hence it cannot produce images out of them. So we will need an approach that includes a control for rendering the PDF file.

## Solution

With **Telerik UI for ASP.NET for AJAX**, you can use the **[RadPdfViewer]({%slug pdfviewer/overview%})** to load and show PDF files in the browser, check out our live demos here - [PdfViewer demos](https://demos.telerik.com/aspnet-ajax/pdfviewer/overview/defaultcs.aspx). 

For uploading the PDF file you can use **[RadAsyncUpload]({%slug asyncupload/overview%})** control. Such a scenario along with other options for loading a file in **RadPdfViewer** are explained in the following blog post - [5 Different Approaches of Setting up the Content in RadPdfViewer for ASP.NET AJAX](https://www.telerik.com/blogs/5-different-approaches-setting-up-content-radpdfviewer-aspnet-ajax#file-from-filestream), and also in the following demo - [Convert, View and Download Different Formats](https://demos.telerik.com/aspnet-ajax/pdfviewer/applicationscenarios/dplintegration/defaultcs.aspx).

Unfortunately, the **RadPdfViewer** does not provide a built-in feature for converting and downloading images out of the PDF files. Yet, the **PdfViewer** is based on the [PDF.js]({%slug pdfviewer/processing/pdf-js%}) library which could be used for getting a reference to each page of the PDF document so you can generate a canvas out of it which can be later downloaded as an image.

We have a knowledge-based article showing how you can generate thumbnail navigation for the **RadPdfViewer** based on the approach mentioned above, check it out here - [Add Thumbnail page navigation with RadPdfViewer]({%slug pdfviewer-add-thumbnail-page-navigation%}).

Once we have all pages of the PDF converted to images we can process the images in any desired manner, e.g. send them to the browser for downloading or even pass them to the server-side via [ajaxRequest]({%slug ajaxmanager/client-side-programming/overview%}) and save them on the server or insert them in a database.

Here is how the code would look like:

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest"></telerik:RadAjaxManager>

<telerik:RadAsyncUpload ID="RadAsyncUpload1" runat="server" OnFileUploaded="RadAsyncUpload1_FileUploaded"
    AllowedFileExtensions=".pdf" HideFileInput="true"
    AutoAddFileInputs="false" Localization-Select="Upload Pdf" EnableInlineProgress="false"
    MultipleFileSelection="Disabled" />
<telerik:RadButton runat="server" ID="RadButton1" Text="Submit" AutoPostBack="true" />

<%--You can hide the PdfViewer if visualization of the PDF is not needed. Just set Height="0" Width="0" Style="visibility: hidden" --%>
<telerik:RadPdfViewer runat="server" ID="RadPdfViewer1" Height="550px" Width="100%">
</telerik:RadPdfViewer>
````

````C#
protected void RadAsyncUpload1_FileUploaded(object sender, Telerik.Web.UI.FileUploadedEventArgs e)
{
    Byte[] renderedBytes;
    using (MemoryStream ms = new MemoryStream())
    {
        e.File.InputStream.CopyTo(ms);
        renderedBytes = ms.ToArray();
    }
    RadPdfViewer1.PdfjsProcessingSettings.FileSettings.Data = Convert.ToBase64String(renderedBytes);

    var fileName = e.File.GetNameWithoutExtension();
    string script = "function f(){generateImages(\"" + fileName + "\"); Sys.Application.remove_load(f);}Sys.Application.add_load(f);";
    ScriptManager.RegisterStartupScript(Page, Page.GetType(), "key", script, true);
}

//save converted images on the server
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
    var args = e.Argument.Split(';');
    var fileName = args[0].Split(',')[0];
    for (int i = 1; i < args.Length; i++)
    {
        var imageBytes = Convert.FromBase64String(args[i].Split(',')[1]);
        //here you can save files on server or open a db connection and insert the files in a database
        File.WriteAllBytes(Server.MapPath(fileName + "_" + i + ".jpg"), imageBytes);
    }
}
````

````JavaScript
window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';

function makeThumb(page) {
    var vp = page.getViewport(1);
    var canvas = document.createElement("canvas");
    canvas.height = 2480;
    canvas.width = 3508;
    var scale = Math.min(canvas.width / vp.width, canvas.height / vp.height);
    return page.render({ canvasContext: canvas.getContext("2d"), viewport: page.getViewport(scale) }).promise.then(function () {
        return canvas;
    });
}
function generateImages(fileName) {
    var pdfViewer = $find("<%= RadPdfViewer1.ClientID %>");
    var pdfViewerFile = pdfViewer.kendoWidget.options.pdfjsProcessing.file;
    var pdfDoc = pdfjsLib.getDocument(pdfViewerFile);
    //array for gathering all base64 strings
    var data = [];
    pdfDoc.promise.then(function (doc) {
        var pageCount = doc.numPages;
        var counter = pageCount;
        var pages = []; while (pages.length < doc.numPages) pages.push(pages.length + 1);
        return Promise.all(pages.map(function (num) {
            return doc.getPage(num).then(makeThumb)
                .then(function (canvas) {
                    //add current image to the array
                    data.push(canvas.toDataURL());
                    //send files to the browser
                    download(canvas, fileName + "_" + counter + "of" + pageCount);
                    counter--;
                });

        })).then(function () { //send ajaxRequest will all the data to the server
            data.unshift(fileName);
            var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
            ajaxManager.ajaxRequest(data);
        });

    }).catch(console.error);
}

function download(canv, imageName) {
    var link = document.createElement('a');
    link.download = imageName + '.jpg';
    link.href = canv.toDataURL()
    link.click();
}
````

>note When processing large files is required, make sure all the needed settings are applied as described in the [Uploading Large Files](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/functionality/uploading-large-files). Otherwise, a *"Maximum request length exceeded."* error might be thrown.


## See Also

 * [RadPdfViewer]({%slug pdfviewer/overview%})
 * [RadAsyncUpload]({%slug asyncupload/overview%})
 * [Convert, View and Download Different Formats](https://demos.telerik.com/aspnet-ajax/pdfviewer/applicationscenarios/dplintegration/defaultcs.aspx)
 * [5 Different Approaches of Setting up the Content in RadPdfViewer for ASP.NET AJAX](https://www.telerik.com/blogs/5-different-approaches-setting-up-content-radpdfviewer-aspnet-ajax#file-from-filestream)
 * [ajaxRequest]({%slug ajaxmanager/client-side-programming/overview%})

