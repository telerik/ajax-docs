---
title: Incorrect or missing file Content-type in RadAsyncUpload
description: Incorrect or missing file Content-type in RadAsyncUpload. Check it now!
type: how-to
page_title: Incorrect or missing file Content-type in RadAsyncUpload
slug: asyncupload-incorrect-or-missing-file-content-type
res_type: kb
---


## Problem

When uploading a file, the content type is null or application/octet-stream.  
  
*Example:*  

When uploading a .pages file from MAC: The content type of the uploaded file is "application/x-iwork-pages-sffpages".  
  
When uploading a .pages file from Windows: The content type of the uploaded file is null or the default for binary files "application/octet-stream".  
  
## Description

The explanation for this behavior is the way the browsers decide the content type of the file.**  

 1. The browser determines the media type of the file based on a hardcoded list of available file extensions and content types - [MDN web docs - MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
 
 2. If there are no matches, the browser looks in the registry files of the computer.
 
 3. If no content-type is available for the file extension type, the browser looks in a secondary hard-coded list.
 
 4. Finally, if there are no matched anywhere, the browser puts the default content type, which for a binary file is "application/octet-stream".


The RadAsyncUpload control sets the content type for unknown file extensions to null as the JavaScript drop event does not provide any content type. Here is a sample example that could be used to check the scenario.   

````JavaScript
function OnClientFileDropped(sender,args) {
    var ev = args.get_originalDropEvent();
    var contentType = ev.originalEvent.dataTransfer.items[0].getAsFile().type;
    console.log("Content type is: " + contentType);
}
function drop_handler(ev) {
    var contentType = ev.dataTransfer.items[0].getAsFile().type;
    console.log("Content type is: " + contentType);
}
````

````ASPX
<telerik:RadAsyncUpload ID="RadAsync_FileUpload" RenderMode="Lightweight" OnFileUploaded="RadAsyncUpload1_FileUploaded" OnClientFileDropped="OnClientFileDropped" runat="server" OnFileUploaded=></telerik:RadAsyncUpload>
<input type="file" id="myFile" name="myFile" ondrop="drop_handler(event);" />
````

The results when tested on Windows for both the RadAsyncUpload and the input are as follows:

 - When uploading a .jpg file: "Content type is: image/jpeg"

 - When uploading a .pages file: "Content type is: "

There are some resources related to the decision of the content type from the browser:

 - [is there a work around for Content-type incorrectly sent by Operating System](https://www.bountysource.com/issues/32749096-is-there-a-work-around-for-content-type-incorrectly-sent-by-operating-system);

 - [How is mime type of an uploaded file determined by browser?](https://stackoverflow.com/questions/1201945/how-is-mime-type-of-an-uploaded-file-determined-by-browser);

 - [Media types by iana.org](http://www.iana.org/assignments/media-types/media-types.xhtml);

 - [HTML 5 rules for determining content types](https://dev.w3.org/html5/cts/html5-type-sniffing.html);

## Solution
  

One possible solution for this is to check the content type in the FileUploaded event, and if it is null or "application/octet-stream" to define it manually based on the file extension from a predefined list with known content types.  
  
````C#
protected void RadAsyncUpload1_FileUploaded(object sender, FileUploadedEventArgs e)
{
    string contentType = e.File.ContentType;
    if (string.IsNullOrEmpty(contentType))
    {
        contentType = "application/octet-stream";
        // or other based on e.File.GetExtension()
        //if (e.File.GetExtension() == ".pages")
        //{
        //    contentType = "application/x-iwork-pages-sffpages";
        //}
    }
}
````
````VB
Protected Sub RadAsyncUpload1_FileUploaded(sender As Object, e As FileUploadedEventArgs)
    Dim contentType As String = e.File.ContentType
    If String.IsNullOrEmpty(contentType) Then
        contentType = "application/octet-stream"
        ' or other based on e.File.GetExtension()
        'If e.File.GetExtension() = ".pages" Then
        '   contentType = "application/x-iwork-pages-sffpages"
        'End If
    End If
End Sub
````

 