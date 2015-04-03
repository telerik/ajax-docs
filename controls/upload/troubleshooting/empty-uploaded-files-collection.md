---
title: Empty Uploaded Files Collection
page_title: Empty Uploaded Files Collection | UI for ASP.NET AJAX Documentation
description: Empty Uploaded Files Collection
slug: upload/troubleshooting/empty-uploaded-files-collection
tags: empty,uploaded,files,collection
published: True
position: 10
---

# Empty Uploaded Files Collection



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

__PROBLEM__

If you modify the master page __ID__ during the __OnInit__ event, the RadUpload's __UploadedFiles__ collection is empty when the control is placed in a content page.

__SOLUTION__

Use the __RadUploadContext.Current.UploadedFiles__ to access all the uploaded files.

>note To use the __RadUploadContext.Current__ property you need to[register the RadUploadHttpModule](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9)in the web.config.
>

