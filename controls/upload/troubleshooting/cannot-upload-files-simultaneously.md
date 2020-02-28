---
title: Cannot Upload Files Simultaneously
page_title: Cannot Upload Files Simultaneously | RadUpload for ASP.NET AJAX Documentation
description: Cannot Upload Files Simultaneously
slug: upload/troubleshooting/cannot-upload-files-simultaneously
tags: cannot,upload,files,simultaneously
published: True
position: 3
---

# Cannot Upload Files Simultaneously



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

RadUpload cannot upload files simultaneously because when a page gets submitted, there is only a **single request** sent to the server.

That is why the files are uploaded **one by one**. As a result you cannot have two **RadProgressArea** controls on a page showing different information. They will show the same information because **RadProgressManager** reports the information to the progress areas on the page.
