---
title: Incompatible Controls and Updating 3rd Party Controls with Telerik RadAjax
page_title: Incompatible Controls and Updating 3rd Party Controls with Telerik RadAjax | RadAjax for ASP.NET AJAX Documentation
description: Incompatible Controls and Updating 3rd Party Controls with Telerik RadAjax
slug: ajaxmanager/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax
previous_url: ajax/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax
tags: incompatible,controls,and,updating,3rd,party,controls,with,telerik,radajax
published: True
position: 6
---

# Incompatible Controls and Updating 3rd Party Controls with Telerik RadAjax



Basically you should first check if the control is MS AJAX compatible (MS AJAX is the MS framework for ajax-enabling controls). If the control works with it, it will most likely work without problems with our AJAX framework as well. Technical difficulties may occur when updating 3rd party controls which use **JavaScript code on client-side outside of the updating area** . As controls are not aware that they are being updated by AJAX (rather than a postback), they cannot restore their client-side functionality as the HTML element is being replaced by a new object. Things to check for:

1. The control, which is to be updated via AJAX request should be aware of this fact. This means that it has to be pre-modified to work with **XmlHttpRequests**. This should be done by its vendor, so please contact the control's vendor for help on the issue.

>tip All Telerik RadControls for ASP.NET have been modified and are ready to be used with **Telerik's AJAX controls** .
>


1. Make sure the control renders in one tag. This will ensure its proper update. You can check this by viewing the page's source. If the control does not render in one tag, you should nest it in a ASP Panel or a DIV tag.

## Controls that Are Not Compatible with RadAjaxManager Control

The following ASP.NET controls are not compatible with partial-page updates, and are therefore not supported as initiating or updated controls:

* [TreeView](http://msdn2.microsoft.com/en-us/k5c13faz) and [Menu](http://msdn2.microsoft.com/en-us/07b8w058) controls.

* Web Parts controls. For more information, see [ASP.NET Web Parts Controls](http://msdn2.microsoft.com/en-us/library/ab78a66e-9feb-4391-b3c3-8c07555e2308).

* [FileUpload](http://msdn2.microsoft.com/en-us/ysf0192b) controls when they are used to upload files as part of an asynchronous postback.

* [GridView](http://msdn2.microsoft.com/en-us/4w7ya1ts) and [DetailsView](http://msdn2.microsoft.com/en-us/7z482d0y) controls when their EnableSortingAndPagingCallbacks property is set to true. The default is false.

* [Login](http://msdn2.microsoft.com/en-us/t863ehhh), [PasswordRecovery](http://msdn2.microsoft.com/en-us/t92zy5x0), [ChangePassword](http://msdn2.microsoft.com/en-us/s1xhe282), and [CreateUserWizard](http://msdn2.microsoft.com/en-us/6s8b6814) controls whose contents have not been converted to editable templates.

* The [Substitution](http://msdn2.microsoft.com/en-us/9ze89as6) control.

>tip Controls that are incompatible with partial-page rendering can still be used on a page without being added to the AjaxSettings.
>




>tip To make the validators compatible with the RadAjax controls *when used in medium trust* , set the[EnableClientScript](http://msdn2.microsoft.com/en-us/7t054e90)property of the validators to false. This disables the client script that would ordinarily be used to perform validation in the browser. As a result, during an asynchronous postback, the validators perform validation on the server. However, because only the content of the UpdatePanel is refreshed, the validators can provide the kind of immediate feedback that is ordinarily provided by client script.
>

