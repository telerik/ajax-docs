---
title: Trust Permissions Set
page_title: Trust Permissions Set | RadUpload for ASP.NET AJAX Documentation
description: Trust Permissions Set
slug: upload/troubleshooting/trust-permissions-set
tags: trust,permissions,set
published: True
position: 1
---

# Trust Permissions Set



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

**RadUploadHttpModule** is the object, which "reads" the information about the current request progress and provides the information to the **RadUploadHttpHandler** through the [RadProgressContext]({%slug progressarea/custom-progress%}) object.

RadUploadModule requires **ReflectionPermission** in order to operate correctly. This means that in normal circumstances you will have to run your application with **Full Trust** permission set, unless you create a [custom security policy](http://msdn2.microsoft.com/en-us/library/ms998326.aspx) that allows **ReflectionPermission**. If you are unable to set **Full Trust** or a custom security policy, the solution is to put the controls assembly in **GAC**.

As a result, if you have [registered the RadUploadHttpModule]({%slug progressarea/webconfing-configuraton%}) in the web.config (which is mandatory if you want to use the **RadProgressArea**) then you need to comply with the above trust levels.
