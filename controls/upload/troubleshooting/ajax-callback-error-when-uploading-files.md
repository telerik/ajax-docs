---
title: Ajax Callback Error When Uploading Files
page_title: Ajax Callback Error When Uploading Files | RadUpload for ASP.NET AJAX Documentation
description: Ajax Callback Error When Uploading Files
slug: upload/troubleshooting/ajax-callback-error-when-uploading-files
tags: ajax,callback,error,when,uploading,files
published: True
position: 0
---

# Ajax Callback Error When Uploading Files



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## Symptoms

When uploading a file, the progress area does not appear, but instead a JavaScript message window appears. The message indicates that an error has occurred and displays error details. At the end of the error message there is a suggestion to check if the RadUploadProgressHandler is registered to the application configuration file.

## Cause

There are several possible reasons for this to happen:

1. The **Telerik.RadUploadProgressHandler.ashx** is not registered. In this case, the error message title is followed by "**Source url was not found**".

1. A server-side error has occurred. The error message title is followed by "**Source url returned invalid content**". This indicates that the server-side progress data calculation raised an unhandled exception.

	1. If measuring a custom progress, this means your progress data calculation code has raised an exception.

	1. If displaying the RadUpload progress, this indicates that the RadUpload code could have a bug.

## Resolution

Here are the resolutions for the different cases:

1. Handler not registered:Please, check if you have the [ Telerik.RadUploadProgressHandler.ashx registered in the application configuration file ](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9). Please note, that the IIS7 Integrated Mode registration should be added to the `<system.webServer>` section.

1. A server error has occurred:

	1. A custom progress is being monitored. Please, check the code of the progress monitoring for errors.

	1. RadUpload progress is being monitored. Please, [tell us about this problem](http://www.telerik.com/support/home.aspx). Please, include the error message to the ticket. In Internet Explorer, this can be done by pressing CTRL+C on the error message and pasting the copied content to the body of the post. For Firefox and other browser users, please make a screenshot of the message and send it to us.

# See Also

 * [RadProgressArea Does Not Appear]({%slug upload/troubleshooting/radprogressarea-does-not-appear%})

 * [Known Limitations]({%slug upload/uploading-files/known-limitations%})
