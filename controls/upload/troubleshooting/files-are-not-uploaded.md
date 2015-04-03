---
title: Files Are Not Uploaded
page_title: Files Are Not Uploaded | UI for ASP.NET AJAX Documentation
description: Files Are Not Uploaded
slug: upload/troubleshooting/files-are-not-uploaded
tags: files,are,not,uploaded
published: True
position: 5
---

# Files Are Not Uploaded



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

When you try to use the __RadUpload__, the __UploadedFiles__ collection has no files inside.

## CAUSE

There are two possible reasons for the problem:

* You have set [File Validation]({%slug upload/validation/integrated-validation%}) and the the uploaded files are considered invalid.

* You are using a __Button__ or other control which causes postback is using AJAX to make an asynchronous postback. This can be because

* It is placed inside __RadAjaxPanel__ (or __UpdatePanel__)

* It has an associated AjaxSetting (__RadAjax__)

* It has an associated Trigger (__ASP.NET AJAX__)

## RESOLUTION

* If the reason for the problem was the __File Validation__, try adjusting the File Validation properties, such as __AllowedFileExtensions__, __AllowedMimeTypes__ and __MaxFileSize__.

* If the reason for the problem was an asynchronous postback, try removing the control that makes the postback (callback) from the AjaxPanel or UpdatePanel, or remove its associated AjaxSetting or Trigger. The [Uploading Files with AJAX]({%slug upload/uploading-files/uploading-files-with-ajax%}) topic describes additional approaches you can take.

## MORE INFORMATION

RadAjax, ASP.NET AJAX or any other similar framework for asynchronous calls uses the __XmlHttpRequest__ component to make its callback requests to the web application. This component is not able to upload files.

# See Also

 * [Known Error Messages]({%slug upload/troubleshooting/known-error-messages%})
