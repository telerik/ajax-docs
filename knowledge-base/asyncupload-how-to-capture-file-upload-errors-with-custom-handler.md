---
title: How to Capture File Upload Errors with RadAsyncUpload Custom Handler
description: How to Capture File Upload Errors with RadAsyncUpload Custom Handler. Check it now!
type: how-to
page_title: How to Capture File Upload Errors with RadAsyncUpload Custom Handler
slug: asyncupload-how-to-capture-file-upload-errors-with-custom-handler
res_type: kb
---

## Problem

How to throw errors that will be recognized by the "OnClientFileUploadFailed" handler when using a custom handler.

## Description

The server returns a status code of 500 and a message similar to "HTTP Error code is: 500" or something like [HttpWebRequest\_WebException\_RemoteServer] in args.get\_message(). This happens because uncaught exceptions trigger the standard ASP.NET error page mechanism and bury any exception info (if passed) in an HTML page in a response that expects JSON.

## Solution

You can work around this by following these steps. You can find attached a small example below the list.

 1. Create a [custom upload result class]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%}#send-custom-information-to-and-from-the-handler) that has a field for the exception.  

 >caption CustomErrorAsyncUploadResult.cs

 ````C#
public class CustomErrorAsyncUploadResult : IAsyncUploadResult
 {
     public CustomErrorAsyncUploadResult()
     {
  
     }
  
     public string CustomError
     {
         get;
         set;
     }
  
     public long ContentLength
     {
         get;
         set;
     }
  
     public string ContentType
     {
         get;
         set;
     }
  
     public string FileName
     {
         get;
         set;
     }
 }
 ````

 2. Catch the exception in the handler and populate the custom field.  

 >caption myHandler.ashx.cs

 ````C#
public class myHandler : AsyncUploadHandler
 {
     protected override IAsyncUploadResult Process(UploadedFile file, HttpContext context,  IAsyncUploadConfiguration configuration, string tempFileName)
     {
         CustomErrorAsyncUploadResult result =  CreateDefaultUploadResult<CustomErrorAsyncUploadResult>(file);
         try
         {
             throw new Exception("file did not validate/upload for <insert reason here>");
         }
         catch (Exception ex)
         {
             //for example, remove some information, make sure to add the custom field for  the error
             result.ContentLength = 0;
             result.ContentType = "";
             result.CustomError = ex.Message;
         }
         return result;
     }
 }
 ````

 3. Return an imitation of success to the client and handle the [OnClientFileUploaded event]({%slug asyncupload/client-side-programming/onclientfileuploaded%}).  

 ````ASPX
<telerik:RadAsyncUpload runat="server" ID="RadAsyncUpload1" HttpHandlerUrl="~/myHandler.ashx" OnClientFileUploaded="OnClientFileUploaded" OnClientFileUploadFailed="OnClientFileUploadFailed"></telerik:RadAsyncUpload>
 ````

 4. Check for the presence of an error and if so - invalidate the file row.  

 ````JavaScript
function OnClientFileUploaded(sender, args) {
     var info = args.get_fileInfo();
     if (info.CustomError != null) {
         var row = args.get_row();
         sender._updateRowImage(row, 'fail');
         sender._updateCancelButton(row);
         $telerik.$(".ruFileProgressWrap", row).remove();
  
         alert(info.CustomError);
     }
}
 ````

 5. Handle the [OnClientFileUploadFailed event]({%slug asyncupload/client-side-programming/onclientfileuploadfailed%}) just in case to capture any errors.  

 ````JavaScript
function OnClientFileUploadFailed(sender, args) {
     args.set_handled(true);
}
 ````

## See Also

 - [How to Create a Custom Handler for RadAsyncUpload]({%slug asyncupload/how-to/how-to-extend-the-radasyncupload-handler%})  

 - [Ensure Security - AllowedCustomMetaDataTypes]({%slug asyncupload-security%}#allowedcustommetadatatypes)


