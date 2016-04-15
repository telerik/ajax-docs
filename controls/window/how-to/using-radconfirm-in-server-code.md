---
title: Using RadConfirm In Server Code
page_title: Using RadConfirm In Server Code | RadWindow for ASP.NET AJAX Documentation
description: Using RadConfirm In Server Code
slug: window/how-to/using-radconfirm-in-server-code
tags: using,radconfirm,in,server,code
published: True
position: 9
---

# Using RadConfirm In Server Code

The **RadConfirm** dialog is essentially a RadWindow, which means it is entirely a client-side object. It can be manipulated via JavaScript	on the client-side only. This means that when called from the server **it can be shown to the end user only once all the server code has ran and the response is received in the browser**. Logic that requires the user's confirmation during execution cannot be achieved directly with the **RadConfirm, nor with a standard confirm()** and thus it must be separated in two parts - the first one ends with the confirmation call, while the second part	receives the response and takes the necessary action. Ultimately this will require an additional request to the server to send the user's choice and this is done	in the **RadConfirm's callback function** because it receives the true/false result as an argument. There, depending on the result, a request can be initiated to finish the work. There are different ways to achieve it, for example:

## Initiating A Postback

A hidden button with the desired event handler can be placed on the page and the **__doPostBack()** function can be used to call it. There are different ways to use it and some of them are listed in the [Confirm Server Clicks Online Demo](http://demos.telerik.com/aspnet-ajax/window/examples/confirmserverclicks/defaultcs.aspx) or in [this article in the net](http://www.codedigest.com/Articles/ASPNET/320_Doing_or_Raising_Postback_using**_doPostBack()_function_from_Javascript_in_AspNet.aspx). For example:

````ASP.NET
<telerik:RadWindowManager RenderMode="Lightweight" runat="server" ID="RadWindowManager1"></telerik:RadWindowManager>
<asp:Button ID="Button1" Text="call the RadConfirm" OnClick="Button1_Click" runat="server" />
<asp:Button ID="HiddenButton" Text="" Style="display: none;" OnClick="HiddenButton_Click" runat="server" />
<script type="text/javascript">
	function confirmCallbackFn(arg)
	{
		if (arg) //the user clicked OK
		{
			__doPostBack("<%=HiddenButton.UniqueID %>", "");
		}
	}
</script>
````
````C#
protected void Button1_Click(object sender, EventArgs e)
{
	//custom logic that does not require confirmation

	RadWindowManager1.RadConfirm("Are you sure you want to perform this action?", "confirmCallbackFn", 300, 200, null, "Confirm");

	//no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
}

protected void HiddenButton_Click(object sender, EventArgs e)
{
	//Handle the response here and execute the rest of the logic
	//This can be called only on positive/negative response, or in all cases the response can be stored in a hidden field, for example
}
````
````VB
Protected Sub Button1_Click(sender As Object, e As System.EventArgs) Handles Button1.Click
	'custom logic that does not require confirmation

	RadWindowManager1.RadConfirm("Are you sure you want to perform this action?", "confirmCallbackFn", 300, 200, Nothing, "Confirm")

	'no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
End Sub

Protected Sub HiddenButton_Click(sender As Object, e As System.EventArgs) Handles HiddenButton.Click
	'Handle the response here and execute the rest of the logic
	'This can be called only on positive/negative response, or in all cases the response can be stored in a hidden field, for example
End Sub
````

The above example can contain an UpdatePanel around the hidden button in order to invoke an AJAX request instead of a full postback. An alternative is to use the RadAjaxManager and its events for the purpose:


````ASP.NET
<telerik:RadWindowManager RenderMode="Lightweight" runat="server" ID="RadWindowManager1"></telerik:RadWindowManager>
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1" OnAjaxRequest="OnAjaxRequest">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="HiddenField_ConfirmResponse" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:HiddenField runat="server" ID="HiddenField_ConfirmResponse" />
<asp:Button ID="Button2" Text="call the RadConfirm" OnClick="Button2_Click" runat="server" />
<script type="text/javascript">
	function confirmCallbackFn(arg)
	{
		$get("<%=HiddenField_ConfirmResponse.ClientID %>").value = arg;
		$find("<%=RadAjaxManager1.ClientID %>").ajaxRequest("confirmCallBack");
	}
</script>
````
````C#
protected void Button2_Click(object sender, EventArgs e)
{
	//custom logic that does not require confirmation

	RadWindowManager1.RadConfirm("Are you sure you want to perform this action?", "confirmCallbackFn", 300, 200, null, "Confirm");

	//no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
}

protected void OnAjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
	if (e.Argument == "confirmCallBack")
	{
		//Handle the response here and execute the rest of the logic

		//clear the hidden field
		HiddenField_ConfirmResponse.Value = "";
	}
}
````
````VB
Protected Sub Button2_Click(sender As Object, e As System.EventArgs) Handles Button2.Click
	'custom logic that does not require confirmation

	RadWindowManager1.RadConfirm("Are you sure you want to perform this action?", "confirmCallbackFn", 300, 200, Nothing, "Confirm")

	'no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
End Sub

Protected Sub RadAjaxManager1_AjaxRequest(sender As Object, e As Telerik.Web.UI.AjaxRequestEventArgs) Handles RadAjaxManager1.AjaxRequest
	If e.Argument = "confirmCallBack" Then
		'Handle the response here and execute the rest of the logic

		'clear the hidden field
		HiddenField_ConfirmResponse.Value = ""
	End If
End Sub
````


## Using Page Methods

An alternative is to use Page methods to finish the task as they also provide an easy feedback mechanism for the user. [This article](http://www.singingeels.com/Articles/Using_Page_Methods_in_ASPNET_AJAX.aspx) can be a good starting point for using them. Note that you need to set the **EnablePageMethods** property of the script manager to **true** to enable them and to also include a reference to **System.Web.Services**.



````ASP.NET
<asp:ScriptManager ID="Scriptmanager1" runat="server" EnablePageMethods="true" />
<telerik:RadWindowManager RenderMode="Lightweight" runat="server" ID="RadWindowManager1">
</telerik:RadWindowManager>
<asp:Button ID="Button3" Text="call the RadConfirm" OnClick="Button3_Click" runat="server" />
<script type="text/javascript">
	function confirmCallbackFn(arg)
	{
		PageMethods.CompleteTask(arg, OnSucceeded, OnFailed);
	}

	function OnSucceeded()
	{
		alert("Operation succeeded");
	}

	function OnFailed(error)
	{
		alert(error.get_message());
	}
</script>
````
````C#
using System.Web.Services;

protected void Button3_Click(object sender, EventArgs e)
{
	//custom logic that does not require confirmation
	Session["myVar"] = DateTime.Now;

	RadWindowManager1.RadConfirm("Are you sure you want to perform this action?", "confirmCallbackFn", 300, 200, null, "Confirm");

	//no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
}

[WebMethod]
public static void CompleteTask(bool? userResponse)
{
	//null will be received if the user closes the dialog via the [X] button
	if (userResponse == true)
	{
		//finish the work
	}
	else
	{
		//Cancel or the [x] button were pressed
		throw new Exception((HttpContext.Current.Handler as Page).Session["myVar"].ToString());
	}
}
````
````VB
Imports System.Web.Services

Protected Sub Button3_Click(sender As Object, e As System.EventArgs) Handles Button3.Click
	'custom logic that does not require confirmation
	Session("myVar") = Now

	RadWindowManager1.RadConfirm("Are you sure you want to perform this action?", "confirmCallbackFn", 300, 200, Nothing, "Confirm")

	'no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
End Sub



<WebMethod()> _
Public Shared Sub CompleteTask(userResponse As System.Nullable(Of Boolean))
	'Nothing will be received if the user closes the dialog via the [X] button
	If userResponse = True Then
		'finish the work
	Else
		'Cancel or the [x] button were pressed
		Throw New Exception(DirectCast(HttpContext.Current.Handler, Page).Session("myVar").ToString())
	End If
End Sub
````


This approach allows you to pass more than one argument back to the server (depending on the number of arguments the server method's signature has) and to show feedback to the user easily, all encapsulated in a lightweight request.

## Using A Custom RadWindow And Its ContentTemplate

Another approach is to use a RadWindow to mimic the built-in RadConfirm dialog - set its size, modality, behaviors (and other properties) as desired and copy the ConfirmTemplate from [this article]({%slug window/alert,-confirm,-prompt-dialogs/how-to-change-the-dialog-templates%}) inside its [ContentTemplate]({%slug window/getting-started/using-radwindow-as-controls-container%}) and modify it as desired. This allows for fine tuning of each aspect of the behavior of the dialog box and to also use any combination of the above logic. Also, handlers for the buttons can be added easily since server controls can be used in this case (for example RadButtons):



````ASP.NET
<telerik:RadWindowManager RenderMode="Lightweight" runat="server" ID="RadWindowManager1">
	<Windows>
		<telerik:RadWindow RenderMode="Lightweight" ID="rw_customConfirm" Modal="true" Behaviors="Close, Move" VisibleStatusbar="false"
			Width="300px" Height="200px" runat="server">
			<ContentTemplate>
				<div class="rwDialogPopup radconfirm">
					<div class="rwDialogText">
						<asp:Literal ID="confirmMessage" Text="" runat="server" />
					</div>
					<div>
						<telerik:RadButton RenderMode="Lightweight" runat="server" ID="rbConfirm_OK" Text="OK" OnClick="rbConfirm_OK_Click">
						</telerik:RadButton>
						<telerik:RadButton RenderMode="Lightweight" runat="server" ID="rbConfirm_Cancel" Text="Cancel" OnClientClicked="closeCustomConfirm">
						</telerik:RadButton>
					</div>
				</div>
			</ContentTemplate>
		</telerik:RadWindow>
	</Windows>
</telerik:RadWindowManager>
<asp:Button ID="Button4" Text="call the RadConfirm" OnClick="Button4_Click" runat="server" />
<script type="text/javascript">
	function closeCustomConfirm()
	{
		$find("<%=rw_customConfirm.ClientID %>").close();
	}
</script>
````
````C#
protected void Button4_Click(object sender, EventArgs e)
{
	//custom logic that does not require confirmation
	Session["myVar"] = DateTime.Now;

	confirmMessage.Text = "Are you sure you want to perform this action?";
	string script = "function f(){radopen(null, 'rw_customConfirm'); Sys.Application.remove_load(f);}Sys.Application.add_load(f);";
	ScriptManager.RegisterStartupScript(Page, Page.GetType(), "customConfirmOpener", script, true);

	//no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
}

protected void rbConfirm_OK_Click(object sender, EventArgs e)
{
	//Handle the OK click
}
````
````VB
Protected Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click
	'custom logic that does not require confirmation
	Session("myVar") = DateTime.Now

	confirmMessage.Text = "Are you sure you want to perform this action?"
	Dim script As String = "function f(){radopen(null, 'rw_customConfirm'); Sys.Application.remove_load(f);}Sys.Application.add_load(f);"
	ScriptManager.RegisterStartupScript(Page, Page.[GetType](), "customConfirmOpener", script, True)

	'no further logic is here. The necessary data can be stored in hidden fields or in the session for later use.
End Sub

Protected Sub rbConfirm_OK_Click(sender As Object, e As EventArgs) Handles Button4.Click
	'Handle the OK click
End Sub
````


Using this directly will cause a full postback when OK button is clicked which will also close this RadWindow. Alternatively, to use AJAX,an UpdatePanel can be added around the HTML template and an additional JavaScript function can close the RadWindow.
