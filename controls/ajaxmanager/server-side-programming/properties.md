---
title: Properties
page_title: AjaxManager Server-Side Properties
description: "Learn how to set the AjaxManager server-side properties when working with Telerik UI for ASP.NET AJAX."
slug: ajaxmanager/server-side-programming/properties
previous_url: ajax/server-side-programming/properties
tags: telerik, aspnet, ajax, ajaxmanager, properties, serverside, programming
published: True
position: 0
---

# Properties

The AjaxManager exposes a set of server-side properties. 

The following list shows some of the most frequently used ones. For the full list, refer to the [Server-Side API of the `RadAjaxManager` class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadAjaxManager).

* `EnableAJAX`&mdash;When you set the `EnableAJAX` property to `true` (the default), all requests (controls either within the `RadAjaxPanel` Template or managed by the `RadAjaxManager`) are handled with AJAX. If this property is `false`, requests are handled in the legacy postback manner.

* `EnableHistory`&mdash;When you set the `EnableHistory` property to `true` (the default is `false`), the browser history is enabled, even when using AJAX. The **Forward** and **Back** buttons of the browser work as expected (IE browser only). For more information, refer to the article on	the [**Back** and **Forward** browser buttons]({%slug ajaxpanel/troubleshooting/back-and-forward-browser-buttons%}).

* `EnablePageHeadUpdate`&mdash;When you set the `EnablePageHeadUpdate` property to `true` (the default), the Page `<Head>` element can be modified during AJAX updates. You'll find this functionality especially useful when you initiate controls as invisible or when loading the control dynamically on an AJAX request.

* `IsAjaxRequest`&mdash;Set this property to `true` when the current request is through AJAX, and to `false` when the request is a standard postback. In the following example, `Button1` has been configured to be AJAX-enabled and the alert will display `true`. Clicking `Button2` will display `false`.

		The following example demonstrates how to set the `IsAjaxRequest`. 

		````ASP.NET
		<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
		</telerik:RadScriptManager>
		<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
			        <AjaxSettings>
			            <telerik:AjaxSetting AjaxControlID="Button1">
			                <UpdatedControls>
			                    <telerik:AjaxUpdatedControl ControlID="Label1" />
			                </UpdatedControls>
			            </telerik:AjaxSetting>
			        </AjaxSettings>
		</telerik:RadAjaxManager>
		<asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="Button" />
		<asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
		<asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="Button" />    
		````
		````C#
		protected void Button1_Click(object sender, EventArgs e)
		{
			RadAjaxManager1.Alert(RadAjaxManager1.IsAjaxRequest.ToString());
		}
		protected void Button2_Click(object sender, EventArgs e)
		{
			RadAjaxManager1.Alert(RadAjaxManager1.IsAjaxRequest.ToString());
		}
						
		````
		````VB
			
		Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
			        RadAjaxManager1.Alert(RadAjaxManager1.IsAjaxRequest.ToString())
		End Sub
		Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
			        RadAjaxManager1.Alert(RadAjaxManager1.IsAjaxRequest.ToString())
		End Sub
			
		````


* `DefaultLoadingPanelID`&mdash;Allows you to specify a default `LoadingPanel` that will be shown when updating AJAX-enabled controls.

* `UpdatePanelsRenderMode`&mdash;Determines the way of rendering the AJAX panels. When you chose the `Block` option, the panels will be rendered as `div` elements. If you chose the `Inline` option, the panels will be rendered as `span` elements.

* `UpdateInitiatorPanelsOnly`&mdash;By setting this property to `true` (its default value is `false`), only the containers added as `UpdatedControls` for a specific initiator will be conditionally updated. For more information, refer to the article on [updating the UpdatePanels of the initiator only]({%slug ajaxmanager/how-to/update-initiator's-updatepanels-only%}).

* `ResponseScripts`&mdash;This collection of strings contains JavaScript for you to execute when the response returns to the browser. In the following example, an `alert()` JavaScript function is added to the collection. Also, see below for the rendered HTML results showing the call to `alert()` near the end of the HTML.


		````C#
			
		protected void Button2_Click(object sender, EventArgs e)
		{
			RadAjaxManager1.ResponseScripts.Add("alert('this fires after the response');");
		}  
						
		````
		````VB
			     
		Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
			RadAjaxManager1.ResponseScripts.Add("alert('this fires after the response');")
		End Sub
						
		````


		The following example contains some sample code showing the usage of the `ResponseScripts` property.

		````JavaScript
		<script type="text/javascript">
			setTimeout(function () { alert('this fires after the response'); }, 0); Sys.Application.initialize();
			Sys.Application.add_init(function () {
			    $create(Telerik.Web.UI.RadAjaxManager, { "ajaxSettings": [{ InitControlID: "Button1", UpdatedControls: [{ ControlID: "Label1", PanelID: ""}]}], "clientEvents": { OnRequestStart: "", OnResponseEnd: "" }, "defaultLoadingPanelID": "", "enableAJAX": true, "enableHistory": false, "links": [], "styles": [], "uniqueID": "RadAjaxManager1" }, null, null, $get("RadAjaxManager1"));
			});
		</script>
		````



## See Also

* [Back and Forward Browser Buttons]({%slug ajaxpanel/troubleshooting/back-and-forward-browser-buttons%})
* [AjaxManager Server-Side Methods]({%slug ajaxmanager/server-side-programming/methods%})
* [AjaxUpdatedControl Properties]({%slug ajaxmanager/server-side-programming/ajaxupdatedcontrol-properties%})
