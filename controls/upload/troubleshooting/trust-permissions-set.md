---
title: Trust Permissions Set
page_title: Trust Permissions Set | UI for ASP.NET AJAX Documentation
description: Trust Permissions Set
slug: upload/troubleshooting/trust-permissions-set
tags: trust,permissions,set
published: True
position: 1
---

# Trust Permissions Set



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

__RadUploadHttpModule__ is the object, which "reads" the information about the current request progress and provides the information to the __RadUploadHttpHandler__ through the [RadProgressContext](CA8786F9-D48D-4423-92EA-D2C8907D19BA) object.

RadUploadModule requires __ReflectionPermission__ in order to operate correctly. This means that in normal circumstances you will have to run your application with __Full Trust__ permission set, unless you create a [custom security policy](http://msdn2.microsoft.com/en-us/library/ms998326.aspx) that allows __ReflectionPermission__. If you are unable to set __Full Trust__ or a custom security policy, the solution is to put the controls assembly in __GAC__.

As a result, if you have [ registered the RadUploadHttpModule ](FAFFEB65-66D2-4CFE-8F40-E4BA471540A9) in the web.config (which is mandatory if you want to use the __RadProgressArea__) then you need to comply with the above trust levels.
