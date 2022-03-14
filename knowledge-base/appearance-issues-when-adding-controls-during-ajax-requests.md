---
title: Appearance Issues Occur When Adding Controls during AJAX Requests
page_title: Appearance Issues Occur When Adding Controls during AJAX Requests
description: "When working with Telerik UI for ASP.NET AJAX and adding a Telerik control to the page during an AJAX request, appearance issues occur."
slug: appearance-issues-when-adding-controls-during-ajax-requests
tags: telerik, asp, net, ajax, troubleshooting, skins, appearance, issues, when, adding, control, during, ajax, request
type: troubleshooting
category: knowledge-base
res_type: kb
published: True
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

When I'm adding a Telerik control to the page during an AJAX request, appearance issues occur.

## Cause

The possible reasons for such issues may be the following:

* The stylesheets cannot be registered during the partial page rendering because the `<head>` tag where stylesheets go is not updated.

* The control relies on its CSS resources to be already loaded on the page during initialization and rendering, whereas they are still loading when it gets added to the page.

## Solution

To solve the issue regardless of its cause, use any of the following approaches:

* Set the `EnableAjaxSkinRendering` property of the control to `true`. It changes the way skins are registered to accommodate AJAX specifics.

* If the previous approach does not help, register the needed stylesheets to the page at all times and ensure that the control does not load them by setting its `EnableEmbeddedBaseStylesheet` and `EnableEmbeddedSkins` properties to `false`.

	The following examples demonstrate how to load the stylesheets of a control from the Telerik assembly. The examples use the Rating control but you can change it to the one you use and also replace the specific built-in skin name according to your needs.

	 * By using a StyleSheetManager control:

		**ASP.NET**

			<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
			   <StyleSheets>
			        <telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Rating.css" />
			        <telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Default.Rating.Default.css" />
			   </StyleSheets>
			</telerik:RadStyleSheetManager>

		For skins other than the Default one, use the `Telerik.Web.UI.Skins` assembly. For example:

		**ASP.NET**

			<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
				<StyleSheets>
					<telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Rating.css" />
					<telerik:StyleSheetReference Assembly="Telerik.Web.UI.Skins" Name="Telerik.Web.UI.Skins.Windows7.Rating.Windows7.css" />
				</StyleSheets>
			</telerik:RadStyleSheetManager>

	* By adding `<link>` elements to the page. For example:

		**ASP.NET and C#**

			<telerik:RadCodeBlock runat="server" ID="RadCodeBlock1">
				<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(this, typeof(RadRating), "Telerik.Web.UI.Skins.Rating.css") %>' rel="stylesheet" type="text/css" />
				<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(this, typeof(RadRating), "Telerik.Web.UI.Skins.Outlook.Rating.Outlook.css") %>' rel="stylesheet" type="text/css" />
			</telerik:RadCodeBlock>

		**ASP.NET and VB**

			<telerik:RadCodeBlock runat="server" ID="RadCodeBlock1">
				<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(Me, GetType(RadRating), "Telerik.Web.UI.Skins.Rating.css")%>' rel="stylesheet" type="text/css" />
				<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(Me, GetType(RadRating), "Telerik.Web.UI.Skins.Default.Rating.Default.css")%>' rel="stylesheet" type="text/css" />
			</telerik:RadCodeBlock>

* Render another instance of the control in a location outside the visible part the viewport. This will ensure that the required stylesheets will be loaded (ASP.NET):
	
	**ASP.NET**
	
	    <div style="position:absolute;top:-10000;left:-10000;">
		    <telerik:RadRating runat="server" ID="RadRating1"></telerik:RadRating>
	    </div>


