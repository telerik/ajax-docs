---
title: Public API
page_title: AjaxManager Client-Side Public API
description: "Learn more about the exposed Telerik UI for ASP.NET AJAX client-side properties."
slug: ajaxmanager/client-side-programming/overview
previous_url: ajax/client-side-programming/overview, controls/ajaxmanager/client-side-programming/overview
tags: telerik, aspnet, ajax, ajaxmanager, clientside, programming, overview
published: True
position: 0
---

# Client-Side Public API 

You can use the client-side API to execute your own JavaScript functions at certain stages of the AJAX request. 

Additionally, you can use a generic JavaScript function to make explicit AJAX requests to the server from the client. 

For a runnable example, refer to the [client-side API demo](https://demos.telerik.com/aspnet-ajax/Ajax/Examples/Manager/ClientSideAPI/DefaultCS.aspx).

## Tips 

You can construct the JavaScript function calls manually or, alternatively, use the `GetAjaxEventReference` server-side method to allow the AjaxManager or AjaxPanel generate the necessary code for you.

The AjaxManager and AjaxPanel require you to enclose the server code blocks inside a [`RadCodeBlock` control]({%slug ajaxmanager/radcodeblock-and-radscriptblock%}).

## Exposed Client-Side API

* [`ajaxRequest(arguments)`](#ajaxRequest(arguments))
* [`AjaxRequest`](#ajaxrequest)
* [`ajaxRequestWithTarget(eventTarget, eventArgument)`](#ajaxrequestwithtarget(eventtarget-eventargument))


### ajaxRequest(arguments)

To trigger a postback or an AJAX request to the server, use the `ajaxRequest(arguments)` function to initiate a generic AJAX request. The event target defaults to the `RadAjaxPanel` or `RadAjaxManager` instance. The `arguments` are the parameters that the control had used when it raised the request.

### AjaxRequest

When the `ajaxRequest` function is called on the client, you can handle it in the `AjaxRequest` event handler on the server.

The following example demonstrates how to perform an AJAX request on the client and handle it on the server.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">

		function InitiateAjaxRequest(arguments) {
			var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
			ajaxManager.ajaxRequest(arguments);
		}
	</script>
</telerik:RadCodeBlock>
````

````C#
private void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
	//code to handle the generic AJAX request
}  
````
````VB
Private Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
	'code to handle the generic AJAX request
End Sub
````


When an AJAX request is triggered through the `AjaxRequest` event from the client, the AjaxManager itself has be set as the AJAX initiator updating the corresponding control.

The following example demonstrates how to set the AjaxManager as an AJAX initiator which updates the TextBox control.

````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="TextBox1" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
````


### ajaxRequestWithTarget(eventTarget, eventArgument)

You can call the `ajaxRequestWithTarget(eventTarget, eventArgument)` function to simulate a postback or an AJAX request sent by a control other than the AjaxManager or AjaxPanel with the specified `UniqueID` and arguments. The execution of the function can be handled by the corresponding event, that is, the `Button_Click` on the server.


| Parameters | Description |
| ------ | ------ |
| `eventTarget` |The control that will raise a postback event. Always use the `UniqueID` of the control.|
| (Optional) `eventArgument` |An argument for the event.|

The `ajaxRequestWithTarget` is designed as a substitute for the standard `doPostBack` function. Therefore, to get its argument server-side, you need to override the `RaisePostBackEvent` of the page.

The following example shows how to use the `AjaxRequestWithTarget` function&mdash;the AjaxButton forces the Button to raise a postback event. 

````ASP.NET
<input type="button" onclick="AjaxRequestButton(); return false;" value="AjaxButton" />
<asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click"></asp:Button>
<asp:TextBox ID="TextBox1" runat="server" Text=""></asp:TextBox>
<asp:ScriptManager ID="ScriptManager" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	<AjaxSettings>
		<telerik:AjaxSetting AjaxControlID="Button1">
			<UpdatedControls>
				<telerik:AjaxUpdatedControl ControlID="TextBox1" />
			</UpdatedControls>
		</telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
````

````JavaScript
<telerik:RadCodeBlock ID="cb1" runat="server">
	<script type="text/javascript">
		function AjaxRequestButton(arguments) {
			var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
			ajaxManager.ajaxRequestWithTarget('<%= Button1.UniqueID %>', '');
		}
	</script>
</telerik:RadCodeBlock>
````

The following snippet shows the code-behind.

````C#
protected void Button1_Click(object sender, System.EventArgs e)
{
	TextBox1.Text = DateTime.Now.ToLongTimeString();
}
````
````VB
Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs)
	TextBox1.Text = DateTime.Now
End Sub
````


# See Also

* [AjaxManager Overview]({%slug ajaxmanager/overview%})
* [Demo: AjaxManager Client-Side API](https://demos.telerik.com/aspnet-ajax/ajax/examples/manager/clientsideapi/defaultcs.aspx)
