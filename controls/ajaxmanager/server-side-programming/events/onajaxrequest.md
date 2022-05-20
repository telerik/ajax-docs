---
title: OnAjaxRequest
page_title: AjaxManager OnAjaxRequest Server-Side Event
description: "Learn how to use the OnAjaxRequest server-side event when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/server-side-programming/events/onajaxrequest
previous_url: ajax/server-side-programming/events/onajaxrequest
tags: telerik, aspnet, ajax, ajaxmanager, onajaxrequest, event, serverside, programming
published: True
position: 0
---

# OnAjaxRequest

The `AjaxRequest` event occurs when triggered by the client-side [`ajaxRequest()`]({%slug ajaxmanager/client-side-programming/overview%}) function or the server-side [`RaisePostBackEvent()``]({%slug ajaxmanager/server-side-programming/methods%}) method. 

The event cannot be cancelled. The `AjaxRequest` event handler receives a single string argument.

The example below demonstrates an `AjaxRequest` triggered from both the client and server. An a HTML input button and a standard ASP.NET button are also defined. The HTML input button triggers a function that calls the client-side [`ajaxRequest()`]({%slug ajaxmanager/client-side-programming/overview%}). The ASP.NET button triggers a server-side `OnClick` event that in turn calls the [`RaisePostBackEvent()`]({%slug ajaxmanager/server-side-programming/methods%}) method.


````ASP.NET
<form id="form1" runat="server">
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
</telerik:RadAjaxManager>
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function clientClick() {
	        var ajaxManager = $find("<%= RadAjaxManager1.ClientID %>");
	        ajaxManager.ajaxRequest("client");
	    }
	</script>
</telerik:RadCodeBlock>
<div>
	<asp:Button ID="btnServer" runat="server" Text="Make server AjaxRequest" OnClick="btnServer_Click" />
	<input id="btnClient" type="button" value="Make client AjaxRequest" onclick="clientClick();" />
</div>
</form>
````

````C#
protected void btnServer_Click(object sender, EventArgs e)
{
	RadAjaxManager1.RaisePostBackEvent("server");
}

protected void RadAjaxManager1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
	RadAjaxManager1.Alert("AjaxRequest raised from the " + e.Argument);
}
````
````VB
Protected Sub btnServer_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadAjaxManager1.RaisePostBackEvent("server")
End Sub

Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	 RadAjaxManager1.Alert("AjaxRequest raised from the " + e.Argument)
End Sub
````

