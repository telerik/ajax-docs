---
title: Known Error Messages
page_title: Known Error Messages | RadUpload for ASP.NET AJAX Documentation
description: Known Error Messages
slug: upload/troubleshooting/known-error-messages
tags: known,error,messages
published: True
position: 4
---

# Known Error Messages



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

When you try to use the **RadUpload** or a standard **HtmlInputFile** control to upload a large file, the file may not be uploaded.

## CAUSE

This problem occurs because the default value for the **maxRequestLength** parameter in the section of the Machine.config file is 4096 (4 megabytes). As a result, files that are larger than this value are not uploaded by default.

## RESOLUTION

Follow the instructions to configure your application for [uploading large files]({%slug upload/uploading-files/uploading-large-files%}).

## MORE INFORMATION

You may notice the following error messages if you encounter file size limits during the file upload process:

* "The page cannot be displayed".

* "Maximum request length exceeded."

* "Server Application is Unavailable" In the event log, the error message will be similar to the following: aspnet_wp.exe (PID:PIDNumber) was recycled because memory consumption exceeded the SizeLimit MB (Percentage percent of available RAM).

* "Exception of type System.OutOfMemoryException was thrown".

>note You may also find that uploads occur very slowly. If you watch the Aspnet_wp.exe process in Windows Task Manager, you will notice that the memory delta changes by 64 KB every 1 to 2 seconds. Depending on the size of the file, this delay may cause the ASP.NET worker process to recycle because of a **responseDeadlock** error.
>


[PRB: Cannot Upload Large Files When You Use the HtmlInputFile Server Control](http://support.microsoft.com/default.aspx?scid=kb;en-us;295626)

# See Also

 * [Files Are Not Uploaded]({%slug upload/troubleshooting/files-are-not-uploaded%})
