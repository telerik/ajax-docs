---
title: Controlling Appearance of a RadAjaxLoadingPanel
page_title: Controlling Appearance of a RadAjaxLoadingPanel | RadAjax for ASP.NET AJAX Documentation
description: Controlling Appearance of a RadAjaxLoadingPanel
slug: ajaxloadingpanel/appearance-and-styling/controlling-appearance-of-a-radajaxloadingpanel
previous_url: ajax/appearance-and-styling/controlling-appearance-of-a-radajaxloadingpanel
tags: controlling,appearance,of,a,radajaxloadingpanel
published: True
position: 1
---

# Controlling Appearance of a RadAjaxLoadingPanel



This help article describes how to change the visual appearance of a **RadAjaxLoadingPanel** and provides some code examples.

## 

The principal visual aspect of **RadAjax** is the[RadAjaxLoadingPanel]({%slug ajaxloadingpanel/overview%}) that displays when AJAX-enabled controls update.You can control the appearance of **RadAjaxLoadingPanel** by the following methods:

* Modify the markup within the `<telerik:RadAjaxLoadingPanel> </telerik:RadAjaxLoadingPanel>` tags.

* Change the image that displays in the loading panel. **RadAjax** ships with a number of pre-defined animated "gif" images. To do this, you change the `<src>` tag path to one of the gif's in the installation directory: "\Telerik\RadControls for ASP.NET AJAXsuiteversion\Skins\Default\Ajax"

* [RadAjaxLoadingPanel]({%slug ajaxloadingpanel/overview%}) descends from **System.Web.UI.Panel** and provides properties for back color, font and other properties. In practice, most developers typically use the markup and loading image to style their loading panels, but you can also use these Panel properties.

**Example 1** shows how to change the appearance of a RadAjaxLoadingPanel using the methods just described.

Example 1: Custom appearance with image and text of the RadLoadingPanel.

````ASP.NET
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server" BackColor="Honeydew"
	BorderColor="Green" BorderStyle="Dotted" BorderWidth="3px" ForeColor="Blue" MinDisplayTime="1000">
	 <img alt="Loading..." src="loading3.gif" style="border: 0px;" />
	 <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
</telerik:RadAjaxLoadingPanel>
````



The **BackgroundTransparency** property of **RadAjaxLoadingPanel** changes the opacity of the DIV element that holds the background of the loading panel without affecting the loading Image. By default it is 0 (or empty) and in this case no inline opacity style is rendered. The next few code snippets show the differences between **Transparency** and **BackgroundTransparency** properties and the rendered html.

````ASP.NET
<telerik:RadAjaxLoadingPanel runat="server" ID="RadAjaxLoadingPanel1" Skin="Default"
Transparency="" BackgroundTransparency=""></telerik:RadAjaxLoadingPanel>
````



````ASP.NET
<div class="RadAjax RadAjax_Default" id="RadAjaxLoadingPanel1Button1">
<div class="raDiv">
</div>
<div class="raColor raTransp">
</div>
</div>
````



With **Transparency="30"** the HTML will be:

````ASP.NET
<div style="opacity: 0.7;" class="RadAjax RadAjax_Default" id="Div1">
<div class="raDiv">
</div>
<div class="raColor raTransp">
</div>
</div>
````



With **BackgroundTransparency="40"** the HTML will be:

````ASP.NET
<div class="RadAjax RadAjax_Default" id="Div2">
<div class="raDiv">
</div>
<div class="raColor raTransp" style="opacity: 0.6;">
</div>
</div>
````



With **Transparency="30"** and **BackgroundTransparency="40"** the HTML will be:

````ASP.NET
<div style="opacity: 0.7;" class="RadAjax RadAjax_Default" id="Div3">
<div class="raDiv">
</div><div class="raColor raTransp" style="opacity: 0.6;">
</div>
</div>
````



>note The **raTransp** class changes the opacity, so if you like the opacity of the internal **raColor** class to be actually 1, then set **EnableSkinTransparency="false".** 
>


## UpdatePanelCssClass property

For **RadAjaxManager**, you can add the **UpdatePanelCssClass** to an **AjaxUpdatedControl** inside the UpdatedControls section of each **AjaxSetting** . The provided string is used as **CssClass** for the UpdatePanel that will wrap the **AjaxUpdatedControl** during the rendering.

As a result, the **CssClass** property of the UpdatePanel is rendered as a class attribute in the output HTML. Additionally, a **RadAjaxPanel** is added to the **CssClass** of the UpdatePanel. Therefore, if the user sets **MyClass** for the **UpdatePanelCssClass**, the result in the rendered div becomes **class=RadAjaxPanel MyClass** .

````ASP.NET
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



````ASP.NET
<div id="RadAjaxManager1SU" style="display: none;">
	<span id="Span1" style="display: none;"></span>
</div>
	
<div id="Button1Panel" class="RadAjaxPanel updatePanelClassName" style="display: block;">
	<input id="Button1" type="button" onclick="javascript: **doPostBack('Button1', '')" value="" name="Button1">
</div>
````



For **RadAjaxPanel** , the **CssClass** property is applied to the inner div, which has the same ID as the **ClientID** of the **RadAjaxPanel** . The **UpdatePanelCssClass** applies to theUpdatePanel that wraps the **RadAjaxPanel** .

````ASP.NET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" CssClass="PanelCssClass" UpdatePanelCssClass="updatePanelClassName">
	<asp:Button runat="server" ID="Button1" />
</telerik:RadAjaxPanel>
````



````ASP.NET
<div id="ctl03Panel" class="RadAjaxPanel updatePanelClassName" style="display: block;">
	<div id="ctl03" class="PanelCssClass">
	 <input id="Button1" type="button" onclick="javascript: **doPostBack('Button1', '')" value="" name="Button1">
	</div>
</div>
````



## See Also

 * [Skins]({%slug ajaxloadingpanel/appearance-and-styling/skins%})

 * [Demo: AJAX Loading Panel](https://demos.telerik.com/aspnet-ajax/ajax/examples/loadingpanel/loadingimages/defaultcs.aspx)

 * [Demo: Explicit Show/Hide](https://demos.telerik.com/aspnet-ajax/ajax/examples/loadingpanel/explicitshowhide/defaultcs.aspx)
