---
title: Broken Skin When Loading RadRating via AJAX
page_title: Broken Skin When Loading RadRating via AJAX | UI for ASP.NET AJAX Documentation
description: Broken Skin When Loading RadRating via AJAX
slug: rating/troubleshooting/broken-skin-when-loading-radrating-via-ajax
tags: broken,skin,when,loading,radrating,via,ajax
published: True
position: 0
---

# Broken Skin When Loading RadRating via AJAX



## 

When the __RadRating__ in not initially visible on the page and it is loaded through AJAX, its skin may not be loaded correctly. The following code sample shows such a scenario:

````ASPNET
	        <telerik:RadAjaxPanel runat="server" ID="panUpdate">
	            <asp:Panel runat="server" Visible="false" ID="Panel1">
	                <telerik:RadRating runat="server" ID="RadRating1"></telerik:RadRating>
	            </asp:Panel>
	            <asp:Button runat="server" ID="btnUpdate" Text="Update" OnClick="btnUpdate_Click" />
	        </telerik:RadAjaxPanel>
````



>tabbedCode

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
>end

This is a common issue when dynamically loading controls through AJAX requests. The reason for this behavior is that the control relies on its CSS resources to be already loaded on the page during initialization and rendering, whereas they are still loading.

The way around this issue is to have the styles already loaded on the page. There are two basic ways to do this.

* Using the __GetWebResourceUrl__ method to load the styles:

>tabbedCode

````C#
	    <head>
			<title></title>
			<link href='<%= Page.ClientScript.GetWebResourceUrl(typeof(RadRating), "Telerik.Web.UI.Skins.Rating.css") %>' rel="stylesheet" type="text/css" />
			<link href='<%= Page.ClientScript.GetWebResourceUrl(typeof(RadRating), "Telerik.Web.UI.Skins.Default.Rating.Default.css") %>' rel="stylesheet" type="text/css" />
		</head>
````
````VB
	    <head>
			<title></title>
			<link href='<%= Page.ClientScript.GetWebResourceUrl(GetType(RadRating), "Telerik.Web.UI.Skins.Rating.css")%>' rel="stylesheet" type="text/css" />
			<link href='<%= Page.ClientScript.GetWebResourceUrl(GetType(RadRating), "Telerik.Web.UI.Skins.Default.Rating.Default.css")%>' rel="stylesheet" type="text/css" />
		</head>
````
>end

* Using the [RadStyleSheetManager](A2D2BFE9-F3FE-48F8-A3E6-5254D7491104) to load the styles:

````ASPNET
	    <telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
	       <StyleSheets>
	            <telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Rating.css" />
	            <telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Default.Rating.Default.css" />
	       </StyleSheets>
	    </telerik:RadStyleSheetManager>
````



Regardless of the approach you choose, you need to make sure that the control does not try to load the CSS on its own by preventing its embedded base stylesheets and skin:

````ASPNET
	    <telerik:RadRating runat="server" ID="RadRating1" EnableEmbeddedBaseStylesheet="false" EnableEmbeddedSkins="false">
	    </telerik:RadRating>
````


