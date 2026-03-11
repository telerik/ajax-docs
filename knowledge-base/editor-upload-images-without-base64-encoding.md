---
title: Implementing Image Upload Instead of Base64 Data in UI for ASP.NET AJAX Editor
description: Learn how to configure the UI for ASP.NET AJAX Editor to upload pasted images as files and use their URLs instead of base64-encoded data.
type: how-to
page_title: Upload Images in Editor Without Base64 Encoding
meta_title: Upload Images in Editor Without Base64 Encoding
slug: editor-upload-images-without-base64-encoding
tags: editor, ui-for-aspnet-ajax, image-manager, onclientpastehtml, base64, image-upload
res_type: kb
ticketid: 1711199
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Editor for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When pasting an image into the [Editor for UI for ASP.NET AJAX](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview), the browser saves the image in base64 format by default. This can increase the database size and degrade performance when storing the editor's content. To address this, configure the editor to upload images as files to the server and reference them using file URLs instead of base64-encoded data.

This knowledge base article also answers the following questions:
- How to upload pasted images as files in UI for ASP.NET AJAX Editor?
- How to avoid saving base64-encoded images in UI for ASP.NET AJAX Editor?
- How to display image URLs instead of base64 in UI for ASP.NET AJAX Editor?

## Solution

To achieve the desired behavior, implement a custom handler to upload the pasted images to the server and return their URLs. Then intercept the `OnClientPasteHtml` event to process and update pasted content before it enters the editor.

First, add a handler to upload the image data to the server and generate a file URL.

   ````C#
   public class UploadEditorImage : IHttpHandler
   {
       public void ProcessRequest(HttpContext context)
       {
           context.Response.ContentType = "text/plain";

           string json = new StreamReader(context.Request.InputStream).ReadToEnd();
           dynamic data = JsonConvert.DeserializeObject(json);
           string base64 = data.imageData;

           Match match = Regex.Match(base64, @"data:image/(?<type>.+?);base64,(?<data>.+)");
           string extension = match.Groups["type"].Value;
           string base64Data = match.Groups["data"].Value;

           byte[] bytes = Convert.FromBase64String(base64Data);

           string fileName = Guid.NewGuid().ToString() + "." + extension;
           string folder = context.Server.MapPath("~/UploadedImages/");

           if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);

           string path = Path.Combine(folder, fileName);

           File.WriteAllBytes(path, bytes);

           string url = "/UploadedImages/" + fileName;

           context.Response.Write(url);
       }

       public bool IsReusable => false;
   }
   ````

 After that, set the `OnClientPasteHtml` event to handle pasted content dynamically.

   ````ASP.NET
   <telerik:RadEditor runat="server" ID="RadEditor1" OnClientPasteHtml="onClientPasteHtml">
       <ImageManager ViewPaths="~/Uploads" />
   </telerik:RadEditor>
   ````


Then, use JavaScript to intercept the paste event, upload the image data, and replace the base64 source with the file URL.

   ````JavaScript
   function onClientPasteHtml(editor, args) {
       let value = args.get_value();

       if (value && value.indexOf("data:image") !== -1) {
           let div = document.createElement("div");
           Telerik.Web.UI.Editor.Utils.setElementInnerHtml(div, value);
           let img = div.querySelector("img");

           if (img && img.src.indexOf("data:image") === 0) {
               let base64 = img.src;

               let xhr = new XMLHttpRequest();
               xhr.open("POST", "/UploadEditorImage.ashx", false);
               xhr.setRequestHeader("Content-Type", "application/json");
               xhr.send(JSON.stringify({
                   imageData: base64
               }));

               if (xhr.status === 200) {
                   let fileUrl = xhr.responseText;
                   img.src = fileUrl;
                   args.set_value(div.innerHTML);
               }
           }
       }
   }
   ````

By following these steps, the pasted image will be uploaded to the server, and its URL will be set in the editor's HTML content, avoiding base64 encoding.

