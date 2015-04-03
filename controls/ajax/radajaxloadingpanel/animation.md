---
title: Animation
page_title: Animation | UI for ASP.NET AJAX Documentation
description: Animation
slug: ajax/radajaxloadingpanel/animation
tags: animation
published: True
position: 1
---

# Animation



This help article describes how to make a __RadAjaxLoadingPanel__ show or hide and provides sample code.

## 

The __RadAjaxLoadingPanel__ animation is a simple extender that allows you to utilize the jQuery framework with existing pages in an easy, declarative fashion. __RadAjaxLoadingPanel__ provides built-in fade in and fade out animation.

To implement custom animations you should use the __OnClientShowing__ and __OnClientHiding__ client-side event handlers of __RadAjaxLoadingPanel__. Note that you need to cancel the default display (hide) of the loading panel using the __set_cancelNativeDisplay(true)__ method of the __eventArgs__ argument.

The __ClientShowing__ and __ClientHiding__ event arguments also provide a reference to the updated element by means of the __get_updatedElement()__ method. In this way you can implement some custom loading panel logic for a specific control. Note that the __get_updatedElement()__ returns a DOM element, not a client control instance.

The following example demonstrates how to implement __RadAjaxLoadingPanel__ animation.

````ASPNET
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



````XML
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



>tabbedCode

````C#
	    protected void Button1_Click(object sender, EventArgs e)
	    {
	        System.Threading.Thread.Sleep(3000);
	        Label1.Text = DateTime.Now.ToString();
	    }  
````



````VB.NET
	    Protected Sub Button1_Click(ByVal sender As Object, ByVal e As EventArgs)
	        System.Threading.Thread.Sleep(3000)
	        Label1.Text = DateTime.Now.ToString()
	    End Sub
````


>end

The animation of __RadAjaxLoadingPanel__ provides you with the ability to easily add interactivity to your web pages. Using animation you can add professional looking transitions and visual effects to your controls.

# See Also

 * [Overview]({%slug ajax/radajaxloadingpanel/overview%})

 * [Show and Hide AjaxLoadingPanel explicitly]({%slug ajax/radajaxloadingpanel/how-to/show-and-hide-ajaxloadingpanel-explicitly%})

 * [Demo: AjaxLoadingPanel Templates and Transparency](http://demos.telerik.com/aspnet-ajax/ajax/examples/loadingpanel/transparency/defaultcs.aspx)
