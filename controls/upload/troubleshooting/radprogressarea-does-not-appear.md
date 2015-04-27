---
title: RadProgressArea Does Not Appear
page_title: RadProgressArea Does Not Appear | RadUpload for ASP.NET AJAX Documentation
description: RadProgressArea Does Not Appear
slug: upload/troubleshooting/radprogressarea-does-not-appear
tags: radprogressarea,does,not,appear
published: True
position: 6
---

# RadProgressArea Does Not Appear



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

When you submit the page the **RadProgressArea** control does not appear.

## CAUSE

There are several possible reasons for the problem:

1. **RadUploadHttpModule** and/or **RadUploadProgressHandler** are not registered in **web.config**.

1. There is no **RadProgressManager** on the page.

1. The files are uploaded with an AJAX call.

1. There is a URL rewriter in the application.

1. There are other HTTP modules in the application that are designed to handle file uploads.

1. The application level trace is enabled in **web.config**.

1. The application is hosted in a web garden or web farm.

1. The uploading files have relatively small size (e.g. < 5MB) and are uploaded on localhost.

>note Before trying to diagnose this problem, make sure you are using the latest available version of the control.
>


## RESOLUTION

The resolutions of each cause follow:

1. Add [RadUploadHttpModule](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9) and [RadUploadProgressHandler](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9) registrations in your **web.config**.

1. Add **RadProgressManager** to the page. You will need the **RadUploadHttpModule** and **RadUploadProgressHandler** registrations as well.

1. **RadUpload** and any other upload control which uses **<input type=file>** html elements is unable to upload files with AJAX calls. For more information and workarounds, see [Uploading Files with AJAX]({%slug upload/uploading-files/uploading-files-with-ajax%}).

1. Configure your URL rewriter to exclude the path "/Telerik.RadUploadProgressHandler.ashx" from rewriting.

1. Remove all HTTP modules for file upload handling except **RadUploadHttpModule**. It is possible that the components that use the disabled modules will no longer be operational.

1. Disable the application level trace.

1. **RadProgressArea** cannot be used in web garden or web farm. The files will be uploaded successfully, but no progress will be displayed. If possible, disable the web garden.

1. There is no resolution, this behavior is expected as the files are uploaded very fast.

# See Also

 * [Known Limitations]({%slug upload/uploading-files/known-limitations%})

 * [Ajax Callback Error When Uploading Files]({%slug upload/troubleshooting/ajax-callback-error-when-uploading-files%})
