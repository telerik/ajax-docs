---
title: Skins Troubleshooting
page_title: Skins Troubleshooting | UI for ASP.NET AJAX Documentation
description: Skins Troubleshooting
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/skins-troubleshooting
tags: skins,troubleshooting
published: True
position: 5
---

# Skins Troubleshooting



This article treats the most common issues related to the Skins used by the Telerik UI for ASP.NET AJAX controls.

* [Incorrect or Distorted Appearance](#incorrect-or-distorted-appearance)

* [Appearance Issues when Control is Added During AJAX Request](#appearance-issues-when-control-is-added-during-ajax-request)

* [Telerik.Web.UI.(Telerik Control) with ID='(Telerik Control ID)' was unable to find embedded skin with name '(Skin Name)'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false](#cannot-find-the-skins)

* [GetWebResourceUrl fails](#getwebresourceurl-fails)


## Incorrect or Distorted Appearance

If you observe incorrect appearance of the Telerik UI for ASP.NET AJAX controls such as:

* bad element alignment

* missing borders, shadows or gradients

* unexpected design change between dev and production environments

There are a few common causes for such problems:

* there are **global CSS rules** that affect HTML elements and you would need to resolve them as explained in the [Distorted Appearance]({%slug window/troubleshooting/distorted-appearance%}) article. The provided example uses the RadWindow control, but the approach applies to all controls in the suite.

* your **IE** browser is entering **Compatibility Mode**. This mode is **not supported** (see the [Browser Support](http://www.telerik.com/aspnet-ajax/tech-sheets/browser-support) page) and you should have your IE browser run in Standards mode. There are several ways to achieve that:

	* from the **Compatibility View Settings** menu, **unselect** the "**Display intranet sites in Compatibility Mode**" checkbox

	* speak with your local administrators so they enforce this checkbox rule as a group policy

	* add an **X-UA Compatible meta tag** such as this one to your page:

		**HTML**

				<head id="Head1" runat="server">
					<title></title>
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />

		You can also set it as an HTTP header through your web.config:

		**web.config**

			<system.webServer>
			    <httpProtocol>
			      <customHeaders>
			        <add name="X-UA-Compatible" value="IE=edge" />
			      </customHeaders>
			    </httpProtocol>
			</system.webServer>

* The **network requests** used to fetch the control skins and/or scripts **do not return successfully**.

	* If you are using the [scripts CDN]({%slug scriptmanager/cdn-support/overview%}) or the [skins CDN]({%slug stylesheetmanager/cdn-support/overview%}), ensure the cloud can be accessed from the user network. Otherwise, disable the CDN and fall back to the default mode of using WebResource requests.

	* If you are using some form of authentication mechanism in your site, the [HTTP handlers]({%slug general-information/web-config-settings-overview%}#mandatory-additions-to-the-webconfig) the Telerik controls use to fetch the needed resources may get blocked. You should ensure all requests return successfully and one way to do it is to add a `<location>` element for the Telerik handlers that will allow anonymous access. For example:

		**web.config**

			<configuration>
			...
			<location path="Telerik.Web.UI.WebResource.axd">
			   <system.web>
			     <authorization>
			       <allow users="*"/>
			     </authorization>
			   </system.web>
			 </location>
			...
			</configuration> 


## Appearance Issues when Control is Added During AJAX Request

In some cases, when you add a Telerik control to the page during an AJAX request, it may have appearance issues.

There can be two reasons for this issue:

* the stylesheets cannot be registered during partial page rendering because the `<head>` tag where stylesheets should go is not updated.

* the control relies on its CSS resources to be already loaded on the page during initialization and rendering, whereas they are still loading when it gets added to the page.

To resolve either, try the following:

1. Set the control's `EnableAjaxSkinRendering` property to `true`. It changes the way skins are registered to accommodate AJAX specifics.

2. If it does not help, you should register the stylesheets the control needs to the page at all times, and ensure that the control does not load them by setting its `EnableEmbeddedBaseStylesheet` and `EnableEmbeddedSkins` properties to `false`. Here are two ways to load a control stylesheets from the Telerik assembly. They use the RadRating control for an example, so you should change it to the concrete one you use, and you should also replace the concrete built-in skin name according to your needs.

	* via a RadStyleSheetManager control:

		**ASP.NET**
	
			<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
			   <StyleSheets>
			        <telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Rating.css" />
			        <telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Default.Rating.Default.css" />
			   </StyleSheets>
			</telerik:RadStyleSheetManager>
	
		For skins other than Default, you should use the Telerik.Web.UI.Skins assembly, e.g.:
	
		**ASP.NET**
	
			<telerik:RadStyleSheetManager ID="RadStyleSheetManager1" runat="server">
				<StyleSheets>
					<telerik:StyleSheetReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Skins.Rating.css" />
					<telerik:StyleSheetReference Assembly="Telerik.Web.UI.Skins" Name="Telerik.Web.UI.Skins.Windows7.Rating.Windows7.css" />
				</StyleSheets>
			</telerik:RadStyleSheetManager>

	* By adding `<link>` elements to the page, e.g.:

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



## Cannot Find the Skins

You get an error similar to the following:

`Telerik.Web.UI.[Telerik Control] with ID='[Telerik Control ID]' was unable to find embedded skin with name '[Skin Name]'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false.`

Since **Q3 2011** all the built-in skins are located in the **Telerik.Web.UI.Skins.dll** assembly, so you need it as well. More information is available in [this help article]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location%}). The change was announced in a blog post with Q2 2011 ([here](http://blogs.telerik.com/blogs/posts/11-07-05/new-telerik-ajax-skins-assembly.aspx)) and again with Q3 2011 ([here](http://blogs.telerik.com/blogs/posts/11-11-15/separate-skin-assembly-in-radcontrols-for-asp-net-ajax-with-q3-apos-11.aspx)).

## GetWebResourceUrl fails

Since **Q3 2011** all the built-in skins are located in the **Telerik.Web.UI.Skins.dll** assembly, and therefore this method cannot get a proper URL for the stylesheet/image you are trying to reference, as the assembly it searches in is the Telerik.Web.UI.dll, since the controls themselves are located there.

If you are using this method you need to replace it with its analogue from our **SkinRegistrar** class, for example:

````ASP.NET
<link href='<%= Telerik.Web.SkinRegistrar.GetWebResourceUrl(this, typeof(RadEditor), "Telerik.Web.UI.Skins.Outlook.Editor.Outlook.css") %>' rel="stylesheet" type="text/css" />
````

This example registers the RadEditor's Outlook skin-specific stylesheet. If you are using VB you should change `this` to `Me` and `typeof` to `GetType` as is the equivalent in this language.

Server code blocks may cause issues in the page's head section (where link elements are usually placed), so you may want to wrap them in a **RadCodeBlock** control, otherwise a server error may be thrown, or the code may not be executed (i.e., the link will not work).

More information about this method and WebResources in general is available in [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/11-11-23/easily-access-embedded-resources-with-telerik-radcontrols-for-asp-net-ajax.aspx).

### See Also

 * [General Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting%})

 * [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%})

 * [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})

 * [ToolBox Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting%})

 * [Skins Location]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location%})

 * [Easily Access Embedded Resources with Telerik UI for ASP.NET AJAX](http://blogs.telerik.com/aspnet-ajax/posts/11-11-23/easily-access-embedded-resources-with-telerik-radcontrols-for-asp-net-ajax.aspx)
