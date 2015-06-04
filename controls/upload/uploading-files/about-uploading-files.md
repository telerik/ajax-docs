---
title: About Uploading Files
page_title: About Uploading Files | RadUpload for ASP.NET AJAX Documentation
description: About Uploading Files
slug: upload/uploading-files/about-uploading-files
tags: about,uploading,files
published: True
position: 0
---

# About Uploading Files



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


You can use the **RadUpload** and **RadProgressManager** components, separately or together, to enhance your application's ability to upload files. When using **RadProgressManager**, you can also use **RadProgressArea** to display a progress dialog for lengthy uploads.

>note  **Memory optimization** now relies on the default .NET Framework 2.0+ engine. This means that the server memory is not overloaded when uploading large files.
>


## RadProgressManager

**RadProgressManager** is required for enabling the progress monitoring of **RadProgressArea**.

In order to use **RadProgressManager**, you must configure your application using the **Web.config** file. There are two settings you should register:

* [RadUploadHttpModule]({%slug progressarea/webconfing-configuraton%}) - this HttpModule contains the core functionality of the progress manager.

* [RadUploadProgressHandler]({%slug progressarea/webconfing-configuraton%}) - this HttpHandler is used by **RadProgressManager** for asynchronous progress updates.

By default, you can upload files which size is up to 4MB. You can, however, [ configure your application for large uploads ]({%slug upload/uploading-files/uploading-large-files%}), to allow up to 2GB.

## RadUpload

**RadUpload** offers several advantages over standard file input controls, including

* [Automatic file saving]({%slug upload/how-to/auto-saving-to-a-target-folder%}) - **RadUpload** can automatically save your uploaded files to a selected folder with just a single property setting.

* [File saving with server-side code]({%slug asyncupload/how-to/how-to-manipulate-the-uploaded-files%}) - in complex situations, you can still manipulate uploaded files using server-side code while gaining the benefits of integrated file validation.

* [Integrated validation]({%slug upload/validation/integrated-validation%}) - **RadUpload** can automatically validate file extensions, mime-types, and the size of uploaded files.

* In addition to the integrated validation, **RadUpload** offers options for [validation using server-side code]({%slug upload/validation/custom-validation%}) or [ASP.NET validators]({%slug upload/validation/client-side-validation%}).

* [Adding Custom Fields]({%slug upload/how-to/adding-information-to-uploaded-files%}) - **RadUpload** lets you add custom fields to each file input.

* [Customizing Appearance]({%slug upload/how-to/configure-the-ui-of-radupload%}) - you can customize the appearance of **RadUpload** to allow multiple file input areas with integrated controls that let the user manipulate them.

## Limitations

**RadUpload** has a few [known limitations]({%slug upload/uploading-files/known-limitations%}), which you should know about. Here are the [known limitations]({%slug progressarea/known-limitations%}) of **RadProgressArea**.
