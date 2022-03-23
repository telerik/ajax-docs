---
title: State Information Is Invalid for This Page Error Occurs
page_title: State Information Is Invalid for This Page Error Occurs
description: "Learn what to do when the state information is invalid for this page and might be corrupted error occurs when working with Telerik UI for ASP.NET AJAX."
slug: state-information-invalid-for-this-page
tags: telerik, asp, net, ajax, manager, panel, state, information, invalid, for, this, page, error, exception, occurs
published: True
type: troubleshooting
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxPanel</td>
		</tr>
	</tbody>
</table>

## Description

`Unexpected AJAX response was received from the server` error occurs in a dialog. 

	The possible causes for this issue may be any of the following:

	* Using `Server.Transfer()`&mdash;Some controls may use this method internally, for example, the `asp:LoginView` control. To redirect to another page in an AJAX-enabled application, use the approaches from the article on [redirecting to another page]({%slug ajaxpanel/how-to/redirecting-to-another-page%}). To solve this issue, utilize `Response.Redirect`. You can also try using the `Redirect` method of the Ajax control you use.

	* Using a custom HTTP handler
	
	* Incorrect loading of an AJAX-enabled user control. To solve the issue, refer to the article on [loading user controls]({%slug ajaxpanel/how-to/load-user-controls%}).

	If the suggested solutions do not fix the issue, disable AJAX as suggested in the error message. Verify that you don't get a server-side exception or any other undesired behavior by setting the `EnableAJAX` property to `false`. This approach will help you verify whether the error is related to using AJAX and, if not, to fix any server-side errors if any are thrown.

## Cause  


## Solution 

