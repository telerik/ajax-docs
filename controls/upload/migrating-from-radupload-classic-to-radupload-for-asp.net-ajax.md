---
title: Migrating from RadUpload Classic to RadUpload for ASP.NET AJAX
page_title: Migrating from RadUpload Classic to RadUpload for ASP.NET AJAX | RadUpload for ASP.NET AJAX Documentation
description: Migrating from RadUpload Classic to RadUpload for ASP.NET AJAX
slug: upload/migrating-from-radupload-classic-to-radupload-for-asp.net-ajax
tags: migrating,from,radupload,classic,to,radupload,for,asp.net,ajax
published: True
position: 6
---

# Migrating from RadUpload Classic to RadUpload for ASP.NET AJAX



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [ documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


To migrate a Web application from **RadUpload** "Classic" to **RadUpload** for ASP.NET AJAX you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

1. Add a ScriptManager control to the page (or user control) in which you want to add any RadControls for ASP.NET AJAX. `<asp:ScriptManager ID="ScriptManager1" runat="server" />` If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the RadControls for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadUpload directive<%@ Register Namespace="Telerik.WebControls" TagPrefix="radu" Assembly="RadUpload.Net2"%>with the new one of RadUpload for ASP.NET AJAX:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

1. Replace the classic RadUpload's declaration: `<radu:radupload id="RadUpload1" runat="server"/>` with the new RadUpload for ASP.NET AJAX declaration: `<telerik:radupload id="RadUpload1" runat="server"/>`

1. Change the registration of the [RadUploadHttpModule and RadUploadProgressHandler]({%slug progressarea/webconfing-configuraton%}) in the Web.config file if you have registered them before.

## Differences between RadUpload "classic" and RadUpload for ASP.NET AJAX

Due to the migration of the **RadUpload** control to the ASP.NET Ajax framework and to the Telerik.Web.UI suite, the client-side API is completely changed to match the naming convention of the new framework.

## Server-side API changes

There are no changes in the names in the server-side API of the control.

**Removed methods:**

* **MoveTo()** method has been removed.

## Client-side API changes

## Event handlers

The signature for client-side events has been unified, so that all event handlers have at most two arguments:

1. The first argument (sender) points to the client instance of the object firing the event.

1. The second argument (eventArgs) is a holder for the old arguments passed in the respective handler.

As a result of this change, several client-side arguments have been replaced by methods on the eventArgs argument, as shown in the table below:


>caption  

| RadUpload Classic | RadUpload for ASP.NET AJAX |
| ------ | ------ |
|ProgressBarElement|get_progressBarElement()|
|ProgressValue|get_progressValue()|
|Row|get_row()|
|FileInputField|get_fileInputField()|
|FileInputFields|get_fileInputFields()|
|ProgressData|get_progressData()|

To cancel an event (which can be cancelled) you now call "set_cancel(true)" on the eventArgs argument instead of returning **false** from the event handler:

````JavaScript
	
function ClientSubmitting(sender, eventArgs) { eventArgs.set_cancel(true); }
	
````



## RadUpload object

The following table lists the changes to the methods of the **RadUpload** client object:


>caption  

| RadUpload Classic | RadUpload for ASP.NET AJAX |
| ------ | ------ |
| **Methods** ||
|AddFileInput()|addFileInput()|
|ClearFileInputAt()|clearFileInputAt()|
|DeleteFileInputAt()|deleteFileInputAt()|
|DeleteSelectedFileInputs()|deleteSelectedFileInputs()|
|GetFileInputs()|getFileInputs()|
|GetID()|getID()|
|ValidateExtensions()|validateExtensions()|

## RadProgressManager object

The following table lists the changes to the methods of the **RadProgressManager** client object:


>caption  

| RadUpload Classic | RadUpload for ASP.NET AJAX |
| ------ | ------ |
| **Methods** ||
|StartProgressPolling()|startProgressPolling()|

## RadProgressArea object

The following table lists the changes to the methods of the **RadProgressArea** client object:


>caption  

| RadUpload Classic | RadUpload for ASP.NET AJAX |
| ------ | ------ |
| **Methods** ||
|CancelRequest()|cancelRequest()|
|Show()|show()|
|Hide()|hide()|
|Update()|update()|
|UpdateHorizontalProgressBar()|updateHorizontalProgressBar()|
|UpdateVerticalProgressBar()|updateVerticalProgressBar()|

## New Rendering

**RadUpload** for ASP.NET AJAX has a completely different rendering from that of the classic **RadUpload** control. The new rendering provides easier modification in the appearance of the control. However, it is not compatible with the rendering of the classic **RadUpload**.

>caution If your application contains code that modifies the DOM elements of the classic **RadUpload** , this code must be completely rewritten so that it is compatible with the new rendering.
>


# See Also

 * [Client-side Programming Overview]({%slug upload/client-side-programming/overview%})

 * [RadUpload Object]({%slug upload/client-side-programming/radupload-object%})
 
 * [RadProgressArea Client Object]({%slug progressarea/client-side-programming/radprogressarea-client-object%})
 
 * [RadProgressManager Client Object]({%slug progressarea/client-side-programming/radprogressmanager-client-object%})
