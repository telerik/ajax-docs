---
title: Server Error (500) Occurs
page_title: Server Error (500) Occurs
description: "When working with Telerik UI for ASP.NET AJAX, a 500 server error occurs."
slug: server-error-500-occurs
tags: telerik, asp, net, ajax, troubleshooting, server, error, 500, occurs
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
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

When working with Telerik UI for ASP.NET AJAX, I get a 500 server error code.

## Solution

Depending on the use case, use any of the following approaches to solve this issue:

* (`Padding is invalid and cannot be removed`)

	This issue is likely to be related with the machine key. To create a custom machine key, refer to [this MSDN article](https://msdn2.microsoft.com/en-us/library/ms998288.aspx).

* (`Specified argument was out of the range of valid values. Parameter name: utcDate`)

	The latest modified time of the assembly containing the embedded resources is probably later than the time this issue occurred, or you are deploying in a different time zone. To solve this issue, run the following command line statement: `copy /b <path to assembly which is built in the future>+,,`.

* ([RadAsyncUpload throws HTTP 500 with a red dot beside the uploaded file name](https://stackoverflow.com/questions/20170482/radasyncupload-throws-http-500-with-a-red-dot-beside-the-uploaded-file-name)

	To solve this issue, make sure that the `Telerik.Web.UI.WebResource.axd` handler is registered in the `web.config` file.

* ([`Telerik.Web.UI.WebResource.axd 500 (Internal Server Error)`](https://stackoverflow.com/questions/21490064/telerik-web-ui-webresource-axd-500-internal-server-error)

	This error might be due to a missing or incorrect stylesheet WebResource file. To solve the problem, upgrade to the latest available version of the product. You can also set the value of the `RenderMode` property to `Lightweight` or `Classic` to see whether it will help.

	It is recommended to report such errors in the [feedback portal](https://feedback.telerik.com/aspnet-ajax), the ticketing system, or the [forum](https://www.telerik.com/forums/aspnet-ajax) so that the team can verify and fix them.

* (`Sys.WebForms.PageRequestManagerServerErrorException: An unknown error occurred while processing the request on the server. The status code returned from the server was: 500`)

	Usually, such an error is thrown when multiple or nested AJAX requests are initiated at the same time or when a server error is thrown during an AJAX update. To solve this issue, [temporarily disable AJAX on the page]({% slug common-get-more-descriptive-errors-by-disabling-ajax %}) to see what the actual error thrown on the page is. Then, debug its cause.

	Also, make sure that the handlers are properly registered inside the `<httpHandlers>` and `<handlers>` section of the `web.config` file as explained in the article on [mandatory additions to the `web.config`]({% slug general-information/web-config-settings-overview %}#configuring-mandatory-additions).

	To identify more causes for the occurring issue, refer to the following resources:

	* [ASP.NET, The status code returned from the server was: 500](https://stackoverflow.com/questions/2351504/asp-net-the-status-code-returned-from-the-server-was-500#:~:text=HTTP%20error%20code%20500%20simply,what%20the%20%22something%22%20is.)

	* [`Sys.WebForms.PageRequestManagerServerErrorException`](https://www.telerik.com/forums/error-sys-webforms-pagerequestmanagerservererrorexception-an-unknown-error-occurred-while-processing-the-request-on-the-server-the-status-code-returne).
Another way to look for the cause of the problem is to remove the AJAX settings one by one unless you find the one leading to the error and, respectively, the controls which updatе is causing it.

* (`~/Telerik.Web.UI.WebResource.axd is missing in web.config. RadStyleSheetManager requires a HttpHandler registration in web.config...`)

	To solve this issue, refer to the [article on handling the `Telerik.Web.UI.WebResource.axd` when missing in `web.config`]({%slug common-error-stylesheetmanager-requires-httphandler-registration%}).
