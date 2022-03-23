---
title: Check for Incompatible Controls and Update Third-Party Controls with Telerik AJAX
page_title: Check for Incompatible Controls and Update Third-Party Controls with Telerik AJAX
description: "Learn how to check for incompatible controls and update third-party controls with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax
previous_url: ajax/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax, controls/ajaxmanager/how-to/incompatible-controls-and-updating-3rd-party-controls-with-telerik-radajax
tags: telerik, asp, net, ajax, manager, how, to, check, for, incompatible, controls, update, third, party
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

How can I check for incompatible controls and update third-party controls with Telerik UI for ASP.NET AJAX? 

## Solution

When you use a Telerik UI for ASP.NET AJAX control, first you need to check if the control is compatible with MS AJAX, which is the MS framework for AJAX-enabling controls. If the control works with it, it will most likely work seamlessly with the Telerik UI for ASP.NET AJAX framework as well. 

Technical difficulties may occur when updating third-party controls which use JavaScript code on the client-side outside the updating area. As controls are not aware that they are being updated by AJAX and not by a postback, they cannot restore their client-side functionality as the HTML element is being replaced by a new object. 

Therefore, you need to check for the following:

* The control, which will be updated with an AJAX request has to be aware of this fact. This means that it has to be pre-modified to work with `XmlHttpRequests`. For getting help with this issue, contact your vendor.

  >note All Telerik controls for ASP.NET have been modified and can be used with Telerik AJAX controls.


* Make sure that the control renders in one tag which so that it is properly updated. To check the rendering, view the page source and if the control does not render in one tag, nest it in an ASP Panel or in a `div` tag.

The following ASP.NET controls are not compatible with partial-page updates and are not supported as initiating or updated controls. Note that controls which are incompatible with partial-page rendering can still be used on a page without being added to the `AjaxSettings`.

* The [TreeView](https://msdn2.microsoft.com/en-us/k5c13faz), [Menu](https://msdn2.microsoft.com/en-us/07b8w058), [Substitution](https://msdn2.microsoft.com/en-us/9ze89as6), and [ASP.NET Web Parts Controls](https://msdn2.microsoft.com/en-us/library/ab78a66e-9feb-4391-b3c3-8c07555e2308) controls. 

* The [FileUpload](https://msdn2.microsoft.com/en-us/ysf0192b) controls when they are used to upload files as part of an asynchronous postback.

* The [GridView](https://msdn2.microsoft.com/en-us/4w7ya1ts) and [DetailsView](https://msdn2.microsoft.com/en-us/7z482d0y) controls when their `EnableSortingAndPagingCallbacks` property is set to `true`. By default, `EnableSortingAndPagingCallbacks` is `false`.

* The [Login](https://msdn2.microsoft.com/en-us/t863ehhh), [PasswordRecovery](https://msdn2.microsoft.com/en-us/t92zy5x0), [ChangePassword](https://msdn2.microsoft.com/en-us/s1xhe282), and [CreateUserWizard](https://msdn2.microsoft.com/en-us/6s8b6814) controls whose contents have not been converted to editable templates.

>To make the validators compatible with the Telerik Ajax controls when used in medium trust, set the [`EnableClientScript`](https://msdn2.microsoft.com/en-us/7t054e90) property of the validators to `false`. This action will disable the client script that will be ordinarily used to perform validation in the browser. As a result, during an asynchronous postback, the validators will perform the validation on the server. However, because only the content of the UpdatePanel is refreshed, the validators can provide the kind of immediate feedback that is ordinarily provided by the client script.