---
title: Files Are Not Uploaded
page_title: Files Are Not Uploaded - RadUpload
description: Check our Web Forms article about Files Are Not Uploaded.
slug: upload/troubleshooting/files-are-not-uploaded
tags: files,are,not,uploaded
published: True
position: 5
---

# Files Are Not Uploaded



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

When you try to use the **RadUpload**, the **UploadedFiles** collection has no files inside.

## CAUSE

There are two possible reasons for the problem:

* You have set [File Validation]({%slug upload/validation/integrated-validation%}) and the the uploaded files are considered invalid.

* You are using a **Button** or other control which causes postback is using AJAX to make an asynchronous postback. This can be because

	* It is placed inside **RadAjaxPanel** (or **UpdatePanel**)

	* It has an associated AjaxSetting (**RadAjax**)

	* It has an associated Trigger (**ASP.NET AJAX**)

## RESOLUTION

* If the reason for the problem was the **File Validation**, try adjusting the File Validation properties, such as **AllowedFileExtensions**, **AllowedMimeTypes** and **MaxFileSize**.

* If the reason for the problem was an asynchronous postback, try removing the control that makes the postback (callback) from the AjaxPanel or UpdatePanel, or remove its associated AjaxSetting or Trigger. The [Uploading Files with AJAX]({%slug upload/uploading-files/uploading-files-with-ajax%}) topic describes additional approaches you can take.

## MORE INFORMATION

RadAjax, ASP.NET AJAX or any other similar framework for asynchronous calls uses the **XmlHttpRequest** component to make its callback requests to the web application. This component is not able to upload files.

# See Also

 * [Known Error Messages]({%slug upload/troubleshooting/known-error-messages%})
