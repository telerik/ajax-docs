---
title: Controlling Appearance of a RadAjaxLoadingPanel
page_title: Controlling Appearance of a RadAjaxLoadingPanel | UI for ASP.NET AJAX Documentation
description: Controlling Appearance of a RadAjaxLoadingPanel
slug: ajax/appearance-and-styling/controlling-appearance-of-a-radajaxloadingpanel
tags: controlling,appearance,of,a,radajaxloadingpanel
published: True
position: 1
---

# Controlling Appearance of a RadAjaxLoadingPanel



This help article describes how to change the visual appearance of a __RadAjaxLoadingPanel__ and provides some code examples.

## 

The principal visual aspect of __RadAjax__ is the[RadAjaxLoadingPanel]({%slug ajax/radajaxloadingpanel/overview%}) that displays when AJAX-enabled controls update.You can control the appearance of __RadAjaxLoadingPanel__ by the following methods:

* Modify the markup within the <telerik:RadAjaxLoadingPanel> </telerik:RadAjaxLoadingPanel> tags.

* Change the image that displays in the loading panel. __RadAjax__ ships with a number of pre-defined animated "gif" images. To do this, you change the <src> tag path to one of the gifs in the installation directory: "\Telerik\RadControls for ASP.NET AJAXsuiteversion\Skins\Default\Ajax"

* [RadAjaxLoadingPanel]({%slug ajax/radajaxloadingpanel/overview%}) descends from __System.Web.UI.Panel__and provides properties for back color, font and other properties. In practice, most developers typically use the markup and loading image tostyle their loading panels, but you can also use these Panel properties.

__Example 1__ shows how to change the appearace of a RadAjaxLoadingPanel using the methods just described.

Example 1: Custom appearance with image and text of the RadLoadingPanel.

````ASPNET
	    <telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" BackColor="Honeydew"
	        BorderColor="Green" BorderStyle="Dotted" BorderWidth="3px" ForeColor="Blue" MinDisplayTime="1000">
	        <img alt="Loading..." src="loading3.gif" style="border: 0px;" />
	        <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
	    </telerik:RadAjaxLoadingPanel>
````



The __BackgroundTransparency__ property of __RadAjaxLoadingPanel__ changes the opacity ofthe DIV element that holds the background of the loading panel without affecting the loading Image. By default it is 0 (or empty) and inthis case no inline opacity style is rendered. The next few code snippets show the differences between __Transparency__ and__BackgroundTransparency__ properties and the rendered html.

````ASPNET
	    <telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" Skin="Default"
	        Transparency="" BackgroundTransparency=""></telerik:RadAjaxLoadingPanel>
````



````ASPNET
	    <div class="RadAjax RadAjax_Default" id="RadAjaxLoadingPanel1Button1">
	        <div class="raDiv">
	        </div>
	        <div class="raColor raTransp">
	        </div>
	    </div>
````



With __Transparency="30"__ the HTML will be:

````ASPNET
	    <div style="opacity: 0.7;" class="RadAjax RadAjax_Default" id="Div1">
	        <div class="raDiv">
	        </div>
	        <div class="raColor raTransp">
	        </div>
	    </div>
````



With __BackgroundTransparency="40"__ the HTML will be:

````ASPNET
	    <div class="RadAjax RadAjax_Default" id="Div2">
	        <div class="raDiv">
	        </div>
	        <div class="raColor raTransp" style="opacity: 0.6;">
	        </div>
	    </div>
````



With __Transparency="30"__ and __BackgroundTransparency="40"__ the HTML will be:

````ASPNET
	    <div style="opacity: 0.7;" class="RadAjax RadAjax_Default" id="Div3">
		    <div class="raDiv">
		    </div><div class="raColor raTransp" style="opacity: 0.6;">
		    </div>
	    </div>
````



>note The __raTransp__ class changes the opacity, so if you like the opacity of the internal __raColor__ class to be actually 1, then set __EnableSkinTransparency="false".__ 
>


## UpdatePanelCssClass property

For __RadAjaxManager__, you can add the __UpdatePanelCssClass__ to an __AjaxUpdatedControl__ inside the UpdatedControls section of each __AjaxSetting__. The provided string is used as __CssClass__ for the UpdatePanel that will wrap the__AjaxUpdatedControl__ during the rendering.

As a result, the __CssClass__ property of the UpdatePanel is rendered as a class attribute in the output HTML. Additionally, a__RadAjaxPanel__ is added to the __CssClass__ of the UpdatePanel. Therefore, if the user sets__MyClass__ for the __UpdatePanelCssClass__, the result in the rendered div becomes__class=RadAjaxPanel MyClass__.

````ASPNET
	    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
	        <AjaxSettings>
	            <telerik:AjaxSetting AjaxControlID="Button1">
	                <UpdatedControls>
	                    <telerik:AjaxUpdatedControl ControlID="Button1" UpdatePanelCssClass="updatePanelClassName" />
	                </UpdatedControls>
	            </telerik:AjaxSetting>
	        </AjaxSettings>
	    </telerik:RadAjaxManager>
	    <asp:Button runat="server" ID="Button1" />
````



````ASPNET
	    <div id="RadAjaxManager1SU" style="display: none;">
	        <span id="Span1" style="display: none;"></span>
	    </div>
	
	    <div id="Button1Panel" class="RadAjaxPanel updatePanelClassName" style="display: block;">
	        <input id="Button1" type="button" onclick="javascript: __doPostBack('Button1', '')" value="" name="Button1">
	    </div>
````



For __RadAjaxPanel__, the __CssClass__ property is applied to the inner div, which has the same ID as	the __ClientID__ of the __RadAjaxPanel__. The __UpdatePanelCssClass__ applies to theUpdatePanel that wraps the __RadAjaxPanel__.

````ASPNET
	    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" CssClass="PanelCssClass" UpdatePanelCssClass="updatePanelClassName">
	        <asp:Button runat="server" ID="Button1" />
	    </telerik:RadAjaxPanel>
````



````ASPNET
	    <div id="ctl03Panel" class="RadAjaxPanel updatePanelClassName" style="display: block;">
	        <div id="ctl03" class="PanelCssClass">
	            <input id="Button1" type="button" onclick="javascript: __doPostBack('Button1', '')" value="" name="Button1">
	        </div>
	    </div>
````



# See Also

 * [Overview]({%slug ajax/radajaxloadingpanel/overview%})

 * [Animation]({%slug ajax/radajaxloadingpanel/animation%})

 * [Center the Loading Panel on the Screen]({%slug ajax/radajaxloadingpanel/how-to/center-the-loading-panel-on-the-screen%})

 * [Skins]({%slug ajax/appearance-and-styling/skins%})

 * [Demo: AJAX Loading Panel](http://demos.telerik.com/aspnet-ajax/ajax/examples/loadingpanel/loadingimages/defaultcs.aspx)

 * [Demo: Explicit Show/Hide](http://demos.telerik.com/aspnet-ajax/ajax/examples/loadingpanel/explicitshowhide/defaultcs.aspx)
