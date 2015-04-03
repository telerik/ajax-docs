---
title: Properties
page_title: Properties | UI for ASP.NET AJAX Documentation
description: Properties
slug: ajax/server-side-programming/properties
tags: properties
published: True
position: 0
---

# Properties



This help article defines the most used __RadAjaxControl__ properties and show examples of using a few of them.

## 

* __EnableAJAX__ - When you set the __EnableAJAX__ property to __true__ (the default),all requests (controls either within the __RadAjaxPanel__ Template or managed by the __RadAjaxManager__)are handled via AJAX. If this property is __false__, requests are handled in the legacy postback manner.

* __EnableHistory__ - When you set the __EnableHistory__ property to __true__ (the default is __false__), browser history is enabled, even when using AJAX. The forward and back buttons of the browser work as expected (IE browser only). For more information, see this article:	[Back and Forward Browser Buttons]({%slug ajax/troubleshooting/back-and-forward-browser-buttons%})

* __EnablePageHeadUpdate__ - When you set the __EnablePageHeadUpdate__ property to__true__ (the default), the Page <Head> element can be modified during AJAX updates. You'll find this functionalityespecially useful when you initiate controls as invisible or you are loading the control dynamically on AJAX request.

* __IsAjaxRequest__ - Set this property __true__ when the current request is through AJAX and __false__ when the request is a standard postback. In __Example 1__, "Button1" has been configured to be AJAX-enabled and the alert will display __true__. Clicking "Button2" will display __false__.

>tabbedCode

````ASPNET
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



````VB.NET
	
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxManager1.Alert(RadAjaxManager1.IsAjaxRequest.ToString())
	    End Sub
	    Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxManager1.Alert(RadAjaxManager1.IsAjaxRequest.ToString())
	    End Sub
	
````


>end

* __DefaultLoadingPanelID__ - This property allows you to specify a default __LoadingPanel__ thatwill be shown when updating an AJAX enabled controls.

* __UpdatePanelsRenderMode__ - This property determines the way of rendering the ajax panels. When you chose the__Block__ option the panels will be rendered as __div__ elements, while if you chose__Inline__ option they will be rendered as __span__ elements.

* __UpdateInitiatorPanelsOnly__ - By setting this property to __true__ (its default value is__false__) only the containers added as __UpdatedControls__ for a specific initiator will beconditionally updated. For more information, you can check out the [Update Initiator's UpdatePanels only]({%slug ajax/radajaxmanager/how-to/update-initiator's-updatepanels-only%}) help article.

* __ResponseScripts__ - This collection of strings contain JavaScript that you want to execute when the response returns to the browser. In __Example 2__ an "__alert()__" JavaScript function is added to the collection. Also see below for the rendered HTML results showing the call to __alert()__ near the end of the HTML.

>tabbedCode

````C#
	
	    protected void Button2_Click(object sender, EventArgs e)
	    {
	        RadAjaxManager1.ResponseScripts.Add("alert('this fires after the response');");
	    }  
				
````



````VB.NET
	     
	    Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RadAjaxManager1.ResponseScripts.Add("alert('this fires after the response');")
	    End Sub
				
````


>end

Example 2: A sample code showing the usage of ResponseScripts property.

````JavaScript
	    <script type="text/javascript">
	        setTimeout(function () { alert('this fires after the response'); }, 0); Sys.Application.initialize();
	        Sys.Application.add_init(function () {
	            $create(Telerik.Web.UI.RadAjaxManager, { "ajaxSettings": [{ InitControlID: "Button1", UpdatedControls: [{ ControlID: "Label1", PanelID: ""}]}], "clientEvents": { OnRequestStart: "", OnResponseEnd: "" }, "defaultLoadingPanelID": "", "enableAJAX": true, "enableHistory": false, "links": [], "styles": [], "uniqueID": "RadAjaxManager1" }, null, null, $get("RadAjaxManager1"));
	        });
	    </script>
````



# See Also

 * [Back and Forward Browser Buttons]({%slug ajax/troubleshooting/back-and-forward-browser-buttons%})

 * [Methods]({%slug ajax/server-side-programming/methods%})

 * [AjaxUpdatedControl Properties]({%slug ajax/server-side-programming/ajaxupdatedcontrol-properties%})
