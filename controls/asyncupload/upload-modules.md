---
title: Upload Modules
page_title: Upload Modules | UI for ASP.NET AJAX Documentation
description: Upload Modules
slug: asyncupload/upload-modules
tags: upload,modules
published: True
position: 13
---

# Upload Modules

## RadAsyncUpload Modules

RadAsyncUpload utilizes four different modules for file uploading – Iframe, Flash, Silverlight and File Api. The module with highest priority is File Api. If the browser does not support File Api that module is automatically changed to Silverlight. Ifthere is no Silverlight installed on the client machine, RadAsyncUpload will utilize the Flash module. If neither Flash nor Silverlight is installed – the IFrame module takes place.

Since the three modules are based on entirely different technologies there are slight differences in the approach they handle file uploads. The following information might be useful to developers implementing RadAsyncUpload in their scenarios:

### Starting from Q2 2011 RadAsyncUpload introduces the new File Api module.

This API is designed to be used in conjunction with other APIs and elements on the web platform, notably: XMLHttpRequest (e.g. with an overloaded send() method for File or Blob objects), postMessage, DataTransfer (part of the drag and drop API defined in [HTML5,])and Web Workers. Additionally, it should be possible to programmatically obtain a list of files from the input element when it is in the File Upload state[HTML5].

The new module supports the following features:

* Multiple file upload

* Stand alone progress monitoring(No http module used!)

* Support for the same events as the other modules

* Upload cancellation

* Upload files via chunks, effectively walking around the ASP.NET max files size limitation.

Limitation of the File Api module:

* No file filtering, i.e. it is not possible to filter the select files dialog with the allowed extensions, because the latterfunctionality is not yet implemented by any browser. This is the only disadvantage of File API compared to Silverlight.

>note The File Api module is supported by the following browsers: FireFox 3.6 or grater, Google Chrome, Safari 5
>


### How the IFrame/Flash module handles file uploads

The IFrame and Flash modules upload the selected file(s) using normal http post request. The iframe use __\<input type="file" /\>__ tag forfile uploadswhereas Flash uses the Flex FileReference object in order to upload files. The files are uploaded using Post HTTP requestin absolutely the same manner as the normal __\<input type="file" /\>__ and html form. On the server, there is no difference where you have used the normal __\<input type="file" /\>__ upload or the Flash upload in order to upload the files. The files are buffered in the ASP.NET Temporary folder,not in the App_Data/RadUploadTemp folder. After the upload is completed, the files are automatically moved from ASP.NET temp to the Async Upload temporary folder, which is most commonly App_Data/RadUploadTemp. This temp folder can be set by the programmer to any folder on the system.To sum up, as the ASP.NET runtime intercepts the request, it uses the ASP.NET Temp folder in order to assemble the files there, and upon upload completion the latter are moved to the temporary folder.

### How the Silverlight module handles file uploads

In contrast, we have designed the Silverlight upload in a different way.The Silverlgiht module is designed from scratch to handle very large file uploads; on the client it divides the file to be uploaded in many chunks, each of which is 2mb large. It then starts uploading the chunks one after another and manually assembling them inside our temp folder (not the ASP.NET one).Dividing the file into chunks works around the large file uploads limitation in IIS. The size of the file to upload is only limited by the max file size allowed by the server’s operating system. Unfortunately, it is not possible to do that with IFrame/Flash because we have no control of the overall upload process.

### Browser Support for different upload modules:


>caption  

| Upload Module | Browser Support |
| ------ | ------ |
| __Silverlight__ |IE, FireFox|
| __Flash__ |IE|
| __File Api__ |FireFox (3.6+), Chrome, Safari (5+), Opera, Safari for MAC|
| __IFrame__ |IE|

>note In __IE9__ RadAsyncUpload implements only __IFrame__ and __Silverlight__ Upload modules. __Flash__ module can be applied only in previous versions of IE Browser because of some incompatibilities with IE9.
>


# See Also

 * [RadAsyncUpload Overview]({%slug asyncupload/overview%})

 * [RadAsyncUpload Overview Demo](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx?product=asyncupload)
