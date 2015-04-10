---
title: Controlling Appearance
page_title: Controlling Appearance | UI for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: upload/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


Both __RadUpload__ and __RadProgressArea__ have a __Skin__ property, which you can use to specify a [skin]({%slug upload/appearance-and-styling/skins%}). The skin provides a basic look-and-feel to the control.

In addition to the skin, both controls are extremely configurable, letting you specify what child controls appear.

## RadUpload

* Use the __ControlObjectsVisibility__ property to [configure RadUpload]({%slug upload/how-to/configure-the-ui-of-radupload%}) to contain only those controls you want.

* To affect [the appearance of the file input area]({%slug upload/appearance-and-styling/file-input-appearance%}), you can use the __EnableFileInputSkinning__ property.

* Use the Localization property to [ change the text of the buttons ]({%slug upload/localization/localizing-radupload%}) of RadUpload.

* Use the __dir="rtl"__ attribute to give the upload a [right-to-left orientation]({%slug upload/localization/radupload-rtl-support%})

## RadProgressArea

* Use the __ProgressIndicators__ and __DisplayCancelbutton__ properties to [configure RadProgressArea](38840C58-5CBE-449E-8F91-D9C5937769BE) to contain only those controls you want.

* Use the __Localization__property to [change the text](BCC18A1A-3EF6-44C2-A38B-D5BB8CE9BFD1) of the labels in the progress dialog.

* Use [progress templates](D1C46DCE-C13E-4850-8DB2-549FC00ED728) to add your own custom elements or rearrange the existing elements in the progress dialog.

* Use the __dir="rtl"__ attribute to give the progress area a [right-to-left orientation]({%slug upload/localization/radupload-rtl-support%})
