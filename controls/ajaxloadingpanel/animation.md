---
title: Animation
page_title: RadAjaxLoadingPanel Animation | RadAjax for ASP.NET AJAX Documentation
description: Animation
slug: ajaxloadingpanel/animation
previous_url: ajax/radajaxloadingpanel/animation
tags: animation
published: True
position: 5
---

# Animation



This help article describes how to make a **RadAjaxLoadingPanel** show or hide and provides sample code.

## 

The **RadAjaxLoadingPanel** animation is a simple extender that allows you to utilize the jQuery framework with existing pages in an easy, declarative fashion. **RadAjaxLoadingPanel** provides built-in fade in and fade out animation.

To implement custom animations you should use the **OnClientShowing** and **OnClientHiding** client-side event handlers of **RadAjaxLoadingPanel** . Note that you need to cancel the default display (hide) of the loading panel using the **set_cancelNativeDisplay(true)** method of the **eventArgs** argument.

The **ClientShowing** and **ClientHiding** event arguments also provide a reference to the updated element by means of the **get_updatedElement()** method. In this way you can implement some custom loading panel logic for a specific control. Note that the **get_updatedElement()** returns a DOM element, not a client control instance.

The following example demonstrates how to implement **RadAjaxLoadingPanel** animation.

````ASP.NET
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" BackColor="yellow"
	OnClientShowing="MyClientShowing" OnClientHiding="MyClientHiding">
</telerik:RadAjaxLoadingPanel>
<telerik:RadAjaxManager ID="RadAjaxManager2" runat="server" DefaultLoadingPanelID="RadAjaxLoadingPanel1">
	<AjaxSettings>
	    <telerik:AjaxSetting AjaxControlID="Button1">
	        <UpdatedControls>
	            <telerik:AjaxUpdatedControl ControlID="Panel1" />
	        </UpdatedControls>
	    </telerik:AjaxSetting>
	</AjaxSettings>
</telerik:RadAjaxManager>
<asp:Button ID="Button1" runat="server" Text="AJAX" OnClick="Button1_Click" /><br />
<br />
<table cellpadding="10">
	<tr>
	    <td>
	        <asp:Panel ID="Panel1" runat="server" Width="600px" Height="500px" BorderStyle="Dotted">
	            <asp:Label ID="Label1" runat="server" />
	         </asp:Panel>
	    </td>
	</tr>
</table>
````



````JavaScript
<script type="text/javascript">
	function MyClientShowing(sender, eventArgs) {
	    eventArgs.get_loadingElement().style.border = "2px solid red";
	    eventArgs.set_cancelNativeDisplay(true);
	    $telerik.$(eventArgs.get_loadingElement()).show("slow");
	}
	function MyClientHiding(sender, eventArgs) {
	    eventArgs.get_loadingElement().style.border = "2px solid blue";
	    eventArgs.set_cancelNativeDisplay(true);
	    $telerik.$(eventArgs.get_loadingElement()).hide("slow");
	}
</script>
````





````C#
protected void Button1_Click(object sender, EventArgs e)
{
	System.Threading.Thread.Sleep(3000);
	Label1.Text = DateTime.Now.ToString();
}  
````
````VB
Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	System.Threading.Thread.Sleep(3000)
	Label1.Text = DateTime.Now.ToString()
End Sub
````


The animation of **RadAjaxLoadingPanel** provides you with the ability to easily add interactivity to your web pages. Using animation you can add professional looking transitions and visual effects to your controls.

## See Also

 * [Overview]({%slug ajaxloadingpanel/overview%})

 * [Show and Hide AjaxLoadingPanel explicitly]({%slug ajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%})

 * [Demo: AjaxLoadingPanel Templates and Transparency](http://demos.telerik.com/aspnet-ajax/ajax/examples/loadingpanel/transparency/defaultcs.aspx)
