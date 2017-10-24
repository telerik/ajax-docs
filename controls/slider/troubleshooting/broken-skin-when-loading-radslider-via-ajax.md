---
title: Broken Skin When Loading RadSlider via AJAX
page_title: Broken Skin When Loading RadSlider via AJAX | RadSlider for ASP.NET AJAX Documentation
description: Broken Skin When Loading RadSlider via AJAX
slug: slider/troubleshooting/broken-skin-when-loading-radslider-via-ajax
tags: broken,skin,when,loading,radslider,via,ajax
published: True
position: 0
---

# Broken Skin When Loading RadSlider via AJAX

When the **RadSlider** in not initially visible on the page and it is loaded through AJAX, its skin may not be loaded correctly.The following code sample shows such a scenario:

````ASP.NET
<telerik:RadAjaxPanel runat="server" ID="panUpdate">
<asp:Panel runat="server" Visible="false" ID="Panel1">
	 <telerik:RadSlider RenderMode="Lightweight" runat="server" ID="RadSlider1">
	 </telerik:RadSlider>
</asp:Panel>
<asp:Button runat="server" ID="btnUpdate" Text="Update" OnClick="btnUpdate_Click" />
</telerik:RadAjaxPanel>
````

````C#
protected void btnUpdate_Click(object sender, EventArgs e)
{
	Panel1.Visible = true;
}		
````
````VB	
Protected Sub btnUpdate_Click(sender As Object, e As EventArgs)
	Panel1.Visible = True
End Sub	
````


This is a common issue when dynamically loading controls through AJAX requests. The reason for this behavior is that the control relies on its	CSS resources to be already loaded on the page during initialization and rendering, whereas they are still loading.

The way around this issue is to have the styles already loaded on the page. There are two basic ways to do this.

* Using the **GetWebResourceUrl** method to load the styles:

````C#
<head>
	<title></title>
	<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(this, typeof(RadSlider), "Telerik.Web.UI.Skins.Slider.css") %>' 
		rel="stylesheet" type="text/css" />
	<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(this, typeof(RadSlider), "Telerik.Web.UI.Skins.Outlook.Slider.Outlook.css") %>' 
		rel="stylesheet" type="text/css" />
</head>
````
````VB
<head>
	<title></title>
	<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(GetType(RadSlider), "Telerik.Web.UI.Skins.Slider.css")%>' 
		rel="stylesheet" type="text/css" />
	<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(GetType(RadSlider), "Telerik.Web.UI.Skins.Outlook.Slider.Outlook.css")%>' 
		rel="stylesheet" type="text/css" />
</head>
````

* Using the [RadStyleSheetManager]({% slug stylesheetmanager/overview %}) to load the styles. Note that all skins except Default are located in the Telerik.Web.UI.Skins assembly so the style sheet reference should point it when such skin is used:

````ASP.NET
<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
   <StyleSheets>
		<telerik:StyleSheetReference Assembly="Telerik.Web.UI.Skins" Name="Telerik.Web.UI.Skins.Slider.css" />
		<telerik:StyleSheetReference Assembly="Telerik.Web.UI.Skins" Name="Telerik.Web.UI.Skins.Default.Slider.Default.css" />
   </StyleSheets>
</telerik:RadStyleSheetManager>
````



Regardless of the approach you choose, you need to make sure that the control does not try to load the CSS on its own by preventing its	embedded base stylesheets and skin:

````ASP.NET
<telerik:RadSlider RenderMode="Lightweight" runat="server" ID="RadSlider1" EnableEmbeddedBaseStylesheet="false" EnableEmbeddedSkins="false">
</telerik:RadSlider>
````


