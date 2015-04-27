---
title: The Value of RadUpload does not Persist
page_title: The Value of RadUpload does not Persist | RadUpload for ASP.NET AJAX Documentation
description: The Value of RadUpload does not Persist
slug: upload/troubleshooting/the-value-of-radupload-does-not-persist
tags: the,value,of,radupload,does,not,persist
published: True
position: 2
---

# The Value of RadUpload does not Persist



>caution  **RadUpload** has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## SYMPTOMS

When you make a postback, **RadUpload** does not persist the selected files in its file inputs.

## CAUSE

This problem occurs because the **<input type=file>** HTML elements do not persist their value between postbacks.

## RESOLUTION

There is no resolution, this behavior is forced by the security restrictions of the browsers.
