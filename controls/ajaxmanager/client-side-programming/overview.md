---
title: Overview
page_title: AjaxManager Client-Side APIs Overview
description: Overview of the Client-side APIs exposed by the Telerik Web Forms AjaxManager component.
slug: ajaxmanager/client-side-programming/overview
previous_url: controls/ajax/client-side-programming/overview, controls/ajax/client-side-programming/radajaxmanager-object, controls/ajaxmanager/client-side-programming/radajaxmanager-object, controls/ajaxmanager/client-side-programming/events/overview, controls/ajaxmanager/client-side-programming/properties
tags: telerik, asp, net, webforms, web forms, ajaxmanager, client-side, api, overview
published: True
position: 0
---

# AjaxManager Client-side APIs Overview

Overview of the Client-side APIs exposed by the Telerik Web Forms AjaxManager component.

- [Get client-side reference](#get-client-side-reference)
- [Properties](#properties)
- [Methods](#methods)
- [Events](#events)
- [Tips](#tips)

Check out the online demo at [Client-side API demo](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Manager/ClientSideAPI/DefaultCS.aspx).

## Get client-side reference

Depending on the JS coding style and libraries you use, there are different ways to get reference to the `Telerik.Web.UI.RadAjaxManager` Object.

>caption Example

````JavaScript
function myFunction(arguments) {
	// Using the $find() method
	var ajaxManager1 = $find("<%= RadAjaxManager1.ClientID %>");
	
	// Using the $telerik.findControl() method
	var ajaxManager2 = $telerik.fondControl(document, 'RadAjaxManager1');
	// OR 
	var ajaxManager3 = $telerik.fondControl(document, '<%= RadAjaxManager.UniqueID %>');

	// Using jQuery
	var ajaxManager4 = $('[id$=RadAjaxManager1]')[0].control;

	// Using document.querySelector()
	var ajaxManager5 = document.querySelector('[id$=RadAjaxManager1]').control;

	// Using document.getElementById()
	var ajaxManager6 = document.getElementById('<%= RadAjaxManager.ClientID %>').control;
}
````


## Properties

| Name 							| Parameters 			| Return Type 			| Description 	|
| ------ 						| ------ 				| ------ 				| ------ 		|
|`get_ajaxSettings()`			|none					|`array` of objects		|Returns an array of settings where each object has properties for the `InitControlID` and another array of `UpdatedControls`.|
|`set_ajaxSettings()`			|`array` of objects		|none					|Sets the array of objects representing the `AjaxSettings`.|
|`get_defaultLoadingPanelID()`	|none					|`string`				|Returns the `DefaultLoadingPanelID`.|
|`set_defaultLoadingPanelID()`	|`string`				|none					|Sets the `DefaultLoadingPanelID`. |
|`get_enableAJAX()`				|none					|`boolean`				| `true` if AJAX is enabled.|
|`set_enableAJAX()`				|`boolean`				|none					|Enables or disable AJAX for the AJAX initiator. Pass `true` to enable AJAX, or `false` to have the subsequent requests performed as standard postbacks.|
|`get_enableHistory()`			|none					|`boolean`				| `true` if the browser history is enabled during AJAX requests.|
|`set_enableHistory()`			|`boolean`				|none					|Allows the browser history during AJAX requests. Pass `true` to allow browser history during AJAX requests.|

## Methods	

| Name 							| Parameters 			| Return Type 			| Description 	|
| ------ 						| ------ 				| ------ 				| ------ 		|
|[`ajaxRequest()`]({%slug ajaxmanager/client-side-programming/methods/ajaxrequest%})				| `string`				| none					|Initiates an AJAX request that fires the [`AjaxRequest`]({%slug ajaxmanager/server-side-programming/events/onajaxrequest%}) event on the server.|
|[`ajaxRequestWithTarget()`]({%slug ajaxmanager/client-side-programming/methods/ajaxrequestwithtarget%})		| `string`, `string`	| none					|Simulates a PostBack/AJAX request initiated from a control with a specified `UniqueID`.|


## Events

The AjaxManager and the AjaxPanel both descend from the `RadAjaxControl` instance. 

The `RadAjaxControl` introduces the `AjaxClientEvents` property that contains the following events

| Name 							| Description 			| 
| -----							| -----					|
|[RequestStart]({%slug ajaxmanager/client-side-programming/events/requeststart%})|The `RequestStart` client-side event handler is called when a request to the server is started. |
|[ResponseEnd]({%slug ajaxmanager/client-side-programming/events/responseend%})|The `ResponseEnd` client-side event handler is called when a request is received from the server. The event can not be cancelled.|

To use these events, write a JavaScript function that can be called when the event occurs. Then, assign the name of the JavaScript function as the value for the corresponding event.

>caption Example

````ASP.NET
<script type="text/javascript">
	function requestStart(sender, eventArgs) {
		alert('Request start');
	}
	function responseEnd(sender, eventArgs) {
		alert('Response complete');
	}
</script>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<ClientEvents OnRequestStart="requestStart" OnResponseEnd="responseEnd" />
</telerik:RadAjaxManager>
````

## Tips 

The AjaxManager and AjaxPanel requires all `<script>` elements that contain [ASP.NET inline expressions](https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/aspnet/development/inline-expressions) to be wrapped inside [RadCodeBlock]({%slug ajaxmanager/radcodeblock-and-radscriptblock%}#using-the-radcodeblock) or [RadScriptBlock]({%slug ajaxmanager/radcodeblock-and-radscriptblock%}#using-the-radscriptblock) containers.

>caption Example

````ASP.NET
<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
    <script>
		function InitiateAjaxRequest(arguments) {
			// ASP.NET Inline expression referencing the AjaxManager
			var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");

			// ASP.NET Inline expression getting the current date from the server
			var currentDate = "<%= DateTime.Now.ToString() %>";
		}
    </script>
</telerik:RadScriptBlock>
````

When an AJAX request is triggered using `ajaxRequest()` method, the event initiator is the AjaxManager itself and it has to be set as the AjaxControl updating the corresponding control.

>caption Example

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadTextBox ID="RadTextBox1" runat="server"></telerik:RadTextBox>
<telerik:RadButton runat="server" ID="RadButton1" Text="Update Label With TextBox Value" AutoPostBack="false" OnClientClicked="makeAjaxRequest" />
<asp:Label ID="Label1" runat="server"></asp:Label>

<telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
    <script>
        function makeAjaxRequest(sender, args) {
            // Access the textbox
            var radTextBox = $find("<%= RadTextBox1.ClientID %>");

            // Get the Textbox text
            var text = radTextBox.get_value();

            // Access the AjaxManager
            var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");

            // Make an AJAX request and pass along the text as argument
            ajaxManager.ajaxRequest(text);
        }
    </script>
</telerik:RadScriptBlock>
````
````C#
protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
    if (string.IsNullOrEmpty(e.Argument)) return;

    Label1.Text += string.Format("RadTextBox Value: {0}</br>", e.Argument);
}
````
````VB
Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
    If String.IsNullOrEmpty(e.Argument) Then Return

    Label1.Text &= String.Format("RadTextBox Value: {0}</br>", e.Argument)
End Sub
````


# See Also

- [Client-Side API - Online demo](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
 