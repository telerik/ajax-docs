---
title: Properties
page_title: Properties | RadAjax for ASP.NET AJAX Documentation
description: Properties
slug: ajaxmanager/server-side-programming/properties
previous_url: ajax/server-side-programming/properties
tags: properties
published: True
position: 0
---

# Properties

For a detailed list with the server-side properties and methods of the control, see the [Server-Side API of the RadAjaxManager class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadAjaxManager).

This help article defines the most used **RadAjaxControl** properties and shows examples of using a few of them.

## 

* **EnableAJAX** - When you set the **EnableAJAX** property to **true** (the default), all requests (controls either within the **RadAjaxPanel** Template or managed by the **RadAjaxManager**)are handled via AJAX. If this property is **false**, requests are handled in the legacy postback manner.

* **EnableHistory** - When you set the **EnableHistory** property to **true** (the default is **false**), browser history is enabled, even when using AJAX. The forward and back buttons of the browser work as expected (IE browser only). For more information, see this article:	[Back and Forward Browser Buttons]({%slug ajaxpanel/troubleshooting/back-and-forward-browser-buttons%})

* **EnablePageHeadUpdate** - When you set the **EnablePageHeadUpdate** property to **true** (the default), the Page <Head> element can be modified during AJAX updates. You'll find this functionality especially useful when you initiate controls as invisible or you are loading the control dynamically on AJAX request.

* **IsAjaxRequest** - Set this property **true** when the current request is through AJAX and **false** when the request is a standard postback. In **Example 1**, "Button1" has been configured to be AJAX-enabled and the alert will display **true**. Clicking "Button2" will display **false**.



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


* **DefaultLoadingPanelID** - This property allows you to specify a default **LoadingPanel** that will be shown when updating an AJAX-enabled controls.

* **UpdatePanelsRenderMode** - This property determines the way of rendering the ajax panels. When you chose the **Block** option the panels will be rendered as **div** elements, while if you chose the **Inline** option they will be rendered as **span** elements.

* **UpdateInitiatorPanelsOnly** - By setting this property to **true** (its default value is **false**) only the containers added as **UpdatedControls** for a specific initiator will be conditionally updated. For more information, you can check out the [Update Initiator's UpdatePanels only]({%slug ajaxmanager/how-to/update-initiator's-updatepanels-only%}) help article.

* **ResponseScripts** - This collection of strings contain JavaScript that you want to execute when the response returns to the browser. In **Example 2** an "**alert()**" JavaScript function is added to the collection. Also, see below for the rendered HTML results showing the call to **alert()** near the end of the HTML.



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


Example 2: A sample code showing the usage of ResponseScripts property.

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

 * [Methods]({%slug ajaxmanager/server-side-programming/methods%})

 * [AjaxUpdatedControl Properties]({%slug ajaxmanager/server-side-programming/ajaxupdatedcontrol-properties%})
