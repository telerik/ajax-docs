---
title: Properties
page_title: Properties
description: Check our Web Forms article about Properties.
slug: ajaxpanel/server-side-programming/properties
tags: properties
published: True
position: 0
---

# Properties

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadAjaxPanel class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadAjaxPanel).

You can find below the most used **RadAjaxControl** properties along with some examples.

##

* **EnableAJAX** - When you set the **EnableAJAX** property to **true** (the default), all requests (controls either within the **RadAjaxPanel** Template or managed by the **RadAjaxManager**) are handled via AJAX. If this property is **false**, requests are handled in the legacy postback manner.

* **EnableHistory** - When you set the **EnableHistory** property to **true** (the default is **false**), browser history is enabled, even when using AJAX. The forward and back buttons of the browser work as expected (IE browser only). For more information, see this article:	[Back and Forward Browser Buttons]({%slug ajaxpanel/troubleshooting/back-and-forward-browser-buttons%})

* **EnablePageHeadUpdate** - When you set the **EnablePageHeadUpdate** property to **true** (the default), the Page `<Head>` element can be modified during AJAX updates. You'll find this functionality especially useful when you initiate controls as invisible or you are loading the control dynamically on AJAX request.

* **IsAjaxRequest** - Set this property **true** when the current request is through AJAX and **false** when the request is a standard postback. In **Example 1**, "Button1" has been configured to be AJAX-enabled and the alert will display **true**. Clicking "Button2" will display **false**.



````ASP.NET
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server">
	<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
	<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
</telerik:RadAjaxPanel>
<asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Button" />
````
````C#
protected void Button1_Click(object sender, EventArgs e)
{
	RadAjaxPanel1.Alert(RadAjaxPanel1.IsAjaxRequest.ToString());
}
protected void Button2_Click(object sender, EventArgs e)
{
	RadAjaxPanel1.Alert(RadAjaxPanel1.IsAjaxRequest.ToString());
}

````
````VB

Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxPanel1.Alert(RadAjaxPanel1.IsAjaxRequest.ToString())
End Sub
Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxPanel1.Alert(RadAjaxPanel1.IsAjaxRequest.ToString())
End Sub

````


* **DefaultLoadingPanelID** - This property allows you to specify a default **LoadingPanel** that will be shown when updating an AJAX enabled controls.

* **UpdatePanelsRenderMode** - This property determines the way of rendering the ajax panels. When you chose the **Block** option the panels will be rendered as **div** elements, while if you chose **Inline** option they will be rendered as **span** elements.

* **UpdateInitiatorPanelsOnly** - By setting this property to **true** (its default value is **false**) only the containers added as **UpdatedControls** for a specific initiator will be conditionally updated. For more information, you can check out the [Update Initiator's UpdatePanels only]({%slug ajaxmanager/how-to/update-initiator's-updatepanels-only%}) help article.

* **ResponseScripts** - This collection of strings contain JavaScript that you want to execute when the response returns to the browser. In **Example 2** an "**alert()**" JavaScript function is added to the collection. Also see below for the rendered HTML results showing the call to **alert()** near the end of the HTML.



````C#

protected void Button2_Click(object sender, EventArgs e)
{
	RadAjaxPanel1.ResponseScripts.Add("alert('this fires after the response');");
}

````
````VB

Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
	RadAjaxPanel1.ResponseScripts.Add("alert('this fires after the response');")
End Sub

````





## See Also

 * [Back and Forward Browser Buttons]({%slug ajaxpanel/troubleshooting/back-and-forward-browser-buttons%})

 * [Methods]({%slug ajaxpanel/server-side-programming/methods%})

