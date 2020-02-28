---
title: Empty Uploaded Files Collection
page_title: Empty Uploaded Files Collection | RadUpload for ASP.NET AJAX Documentation
description: Empty Uploaded Files Collection
slug: upload/troubleshooting/empty-uploaded-files-collection
tags: empty,uploaded,files,collection
published: True
position: 10
---

# Empty Uploaded Files Collection



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

**PROBLEM**

If you modify the master page **ID** during the **OnInit** event, the RadUpload's **UploadedFiles** collection is empty when the control is placed in a content page.

**SOLUTION**

Use the **RadUploadContext.Current.UploadedFiles** to access all the uploaded files.

>note To use the **RadUploadContext.Current** property you need to [register the RadUploadHttpModule]({%slug progressarea/webconfing-configuraton%}) in the web.config.
>

