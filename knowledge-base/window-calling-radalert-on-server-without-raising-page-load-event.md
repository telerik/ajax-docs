---
title: Create Alert on server-side using RadWindowManager without rasing the Page_Load event 
description: Avoid raising the Page_Load event upon calling radalert on server-side.
type: troubleshooting
page_title: Create Alert on server-side using RadWindowManager without rasing the Page_Load event 
slug: window-calling-radalert-on-server-without-raising-page-load-event
position: 
tags: 
ticketid: 1508371
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadWindowManager for ASP.NET AJAX</td>
		</tr>
		<tr>
			<td>Language</td>
			<td>C#, VB, JavaScript</td>
		</tr>
	</tbody>
</table>


## Description

Creating an alert on the server-side is usually done by calling the RadWindowManager1.RadAlert() method on server-side

````C#
private void RadButton1_Click(object sender, EventArgs e)
{
	RadWindowManager1.RadAlert();
}
````
````VB
Private Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadWindowManager1.RadAlert()
End Sub
````

However, this approach will raise the Page_Load event. In some cases, there might be a specific logic in the Page Load event, which, if executed twice may result in a different outcome.

## Solution

Instead of calling the [RadAlert() server-side method](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/alert,-confirm,-prompt-dialogs/radalert-dialog#calling-radalert-from-the-code-behind), call the [radalert() client-side method](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/alert,-confirm,-prompt-dialogs/radalert-dialog#calling-radalert-via-javascript) by [registering a StartupScript](https://www.telerik.com/support/kb/aspnet-ajax/details/executing-javascript-code-from-server-side-in-web-forms-and-asp.net-ajax) when the PostBack occurs.

Make sure to have a RadAjaxManager on the Page

````XML
<telerik:RadWindowManager ID="RadWindowManager1" runat="server"></telerik:RadWindowManager>
````

Register the StartupScript in the Button Click

````C#
private void RadButton1_Click(object sender, EventArgs e)
{
    string script = @"function myFunction() {
						Sys.Application.remove_load(myFunction);
						var oAlert = radalert('Alert Message', null, null, 'Window Title', AlertCallBackFn, null);
					};
					Sys.Application.add_load(myFunction);";

    ScriptManager.RegisterStartupScript(this.Page, this.Page.GetType(), "name", script, true);
}
````
````VB
Private Sub RadButton1_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim script As String = "function myFunction() {
								Sys.Application.remove_load(myFunction);
								var oAlert = radalert('Alert Message', null, null, 'Window Title', AlertCallBackFn, null);
							};
							Sys.Application.add_load(myFunction);"

    ScriptManager.RegisterStartupScript(Me.Page, Me.Page.[GetType](), "name", script, True)
End Sub
````

The CallBack function if defined in the StartUpScript

````JavaScript
function AlertCallBackFn(arg) {
	/* Optional: Alert again to display the radalert() callback response */
    radalert("This is the CallBack response from the RadAlert.");
}
````
 
