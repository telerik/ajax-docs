---
title: OnAjaxRequest
page_title: OnAjaxRequest | RadAjax for ASP.NET AJAX Documentation
description: OnAjaxRequest
slug: ajaxpanel/server-side-programming/events/onajaxrequest
tags: onajaxrequest
published: True
position: 0
---

# OnAjaxRequest



The **AjaxRequest** event occurs when triggered by the client-side [ajaxRequest()]({%slug ajaxpanel/client-side-programming/overview%}) function or the server-side [RaisePostBackEvent()]({%slug ajaxpanel/server-side-programming/methods%}) method. The event can not be cancelled. The **AjaxRequest** event handler receives a single string argument.

The example below demonstrates AjaxRequest triggered from both the client and server. An a HTML input button and a standard ASP.NET button are defined in the example. The HTML input button triggers a function that calls the client-side [ajaxRequest()]({%slug ajaxpanel/client-side-programming/overview%}). The ASP.NET button triggers a server-side OnClick event that in turn calls the [RaisePostBackEvent()]({%slug ajaxpanel/server-side-programming/methods%}) method.

## Example

````ASP.NET
<form id="form1" runat="server">
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" OnAjaxRequest="RadAjaxPanel_AjaxRequest">
</telerik:RadAjaxPanel>

<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	<script type="text/javascript">
	    function clientClick() {
	        var ajaxManager = $find("<%= RadAjaxPanel1.ClientID %>");
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
	RadAjaxPanel1.RaisePostBackEvent("server");
}
protected void RadAjaxPanel1_AjaxRequest(object sender, Telerik.Web.UI.AjaxRequestEventArgs e)
{
	RadAjaxPanel1.Alert("AjaxRequest raised from the " + e.Argument);
}
	
````
````VB
Protected Sub btnServer_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadAjaxPanel1.RaisePostBackEvent("server")
End Sub
Protected Sub RadAjaxPanel1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	 RadAjaxPanel1.Alert("AjaxRequest raised from the " + e.Argument)
End Sub
````

