---
title: OnAjaxRequest
page_title: OnAjaxRequest | UI for ASP.NET AJAX Documentation
description: OnAjaxRequest
slug: ajax/server-side-programming/events/onajaxrequest
tags: onajaxrequest
published: True
position: 0
---

# OnAjaxRequest



The __AjaxRequest__ event occurs when triggered by the client-side [ajaxRequest()]({%slug ajax/client-side-programming/overview%}) function or the server-side [RaisePostBackEvent()]({%slug ajax/server-side-programming/methods%}) method. The event can not be canceled. The __AjaxRequest__ event handler receives a single string argument.

The example below demonstrates AjaxRequest triggered from both the client and server. An a HTML input button and a standard ASP.NET button are defined in the example. The HTML input button triggers a function that calls the client-side [ajaxRequest()]({%slug ajax/client-side-programming/overview%}). The ASP.NET button triggers a server-side OnClick event that in turn calls the [RaisePostBackEvent()]({%slug ajax/server-side-programming/methods%}) method.

## Example

````ASPNET
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



>tabbedCode

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



````VB.NET
	    Protected Sub btnServer_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxManager1.RaisePostBackEvent("server")
	    End Sub
	    Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As Telerik.Web.UI.AjaxRequestEventArgs)
	        RadAjaxManager1.Alert("AjaxRequest raised from the " + e.Argument)
	    End Sub
````


>end
