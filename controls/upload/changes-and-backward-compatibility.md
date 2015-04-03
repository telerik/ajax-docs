---
title: Changes and Backward Compatibility
page_title: Changes and Backward Compatibility | UI for ASP.NET AJAX Documentation
description: Changes and Backward Compatibility
slug: upload/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: False
position: 5
---

# Changes and Backward Compatibility



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## RadUpload for ASP.NET AJAX Q2 2010

Since Q2 2010 all major changes for the controls are listed in the official Release Notes posted [here](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx).

## Changes in Q1 2010 version

* RadUpload for ASP.NET AJAX is fully backward compatible with its previous version

* RadAsyncUpload for ASP.NET AJAX has just been added

## Changes in Q3 SP2 2009 version (Version Number 2009.3.1314)

* RadUpload for ASP.NET AJAX is fully backward compatible with its previous version

## Changes in Q3 SP1 2009 version (Version Number 2009.3.1208)

* RadUpload for ASP.NET AJAX is fully backward compatible with its previous version

## Changes in Q3 2009 version (Version Number 2009.3.1103)

* RadUpload for ASP.NET AJAX is fully backward compatible with its previous version

## Changes in Q2 2009 version SP1 (Version Number 2009.2.826)

* RadUpload for ASP.NET AJAX is fully backward compatible with its previous version

## Changes in Q2 2009 version (Version Number 2009.2.701)

* RadUpload for ASP.NET AJAX is fully backward compatible with its previous version.

## Changes in Q1 2009 version (Version Number 2009.1.311)

* Three skins have been removed - Gray, Inox and SkyBlue. If you decide that you still want the obsolete skins in your application please check this forum post: [RadUpload Q3 2008 Skins available for download](http://www.telerik.com/community/forums/aspnet-ajax/upload/radupload-q3-2008-skins-available-for-download.aspx)

* Facelift for all skins and consistency in CSS naming conventions which result in breaking changes for ceratin scenarios. Please, test before upgrading to the new version. For more details refer to [this blogpost](http://blogs.telerik.com/tervelpeykov/posts/09-02-23/RadControls_for_ASP_NET_AJAX_receive_a_major_face-lift.aspx)

* Design-time code is placed in a new assembly - Telerik.Web.Design.dll. Read [this blog post](http://blogs.telerik.com/atanaskorchev/posts/09-03-06/Meet_Telerik_Web_Design_dll.aspx) for more information.

## Changes in Q3 SP1 2008 version (2008.3.1125)

* The default URL of RadUploadProgressHandler.ashx was page-relative, which needed additional efforts for the handler to be excluded from URL rewriters. It is now application-relative

* RadProgressManager’s UniquePageIdentifier property is now obsolete. It is generated automatically

## Changes in Q2 2008 version (2008.2.723)

* [ New Localization for RadProgressArea using the Localization property or GlobalResource Files ](BCC18A1A-3EF6-44C2-A38B-D5BB8CE9BFD1)

RadProgressArea’s __Localization__ property is __not a dictionary__ anymore. Instead, the object contains strongly named properties

*old way*: RadProgressArea1.Localization["Total"] = "Total";* new way *: RadProgressArea1.Localization.Total = "Total";

* __RadProgressContext__ now offers strongly named properties:

context["CurrentOperationText"] = "Doing step " + i.ToString();

is the same as

context.CurrentOperationText = "Doing step " + i.ToString();

* The __Mac__ skins has been removed from the Telerik.Web.UI assembly. More information on Q2 Skinning is available [here](http://blogs.telerik.com/ZhivkoDimitrov/Posts/08-06-27/Q2_Asp_Net_skinning.aspx?ReturnURL=%2fZhivkoDimitrov%2fPosts.aspx).

* Memory optimization now relies on the default .NET Framework 2.0+ engine. __EnableMemoryOptimization__ property is now __obsolete__.

* __Telerik.RadUpload.TempFolder__ application setting is now __obsolete__, as the files are handled by the standard .NET Framework engine

* Client-side localization does not honor the __Telerik.Web.UI.RadUploadUtils.Localization__ object anymore. Instead, the client-side __set_localization__ property is used.
