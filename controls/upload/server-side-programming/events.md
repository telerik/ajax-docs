---
title: Events
page_title: Server-side Events - RadUpload
description: Check our Web Forms article about Events.
slug: upload/server-side-programming/events
tags: events
published: True
position: 0
---

# Events



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The **RadUpload** control exposes the following two server-side events:

* [FileExists]({%slug upload/server-side-programming/fileexists%}) occurs when the **RadUpload** control is [ saving its files to a target folder ]({%slug upload/how-to/auto-saving-to-a-target-folder%}) and a file cannot be saved because the **OverwriteExistingFiles** property is **False** and the target folder already has a file with the same name.

* [ValidatingFile]({%slug upload/server-side-programming/validatingfile%}) occurs before the **RadUpload** control checks an uploaded file using its [integrated file validation]({%slug upload/validation/integrated-validation%}).

# See Also

 * [Events]({%slug upload/client-side-programming/events%})
