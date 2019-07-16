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



This article treats the most common issues related to the Skins used by the Telerik® UI for ASP.NET AJAX controls.

* [Incorrect or Distorted Appearance](#incorrect-or-distorted-appearance)

* [Appearance Issues when Control is Added During AJAX Request](#appearance-issues-when-control-is-added-during-ajax-request)

* [Telerik.Web.UI.(Telerik Control) with ID='(Telerik Control ID)' was unable to find embedded skin with name '(Skin Name)'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false](#cannot-find-the-skins)

* [Different Render in Design Time and in Browser](#different-render-in-design-time-and-in-browser)

* [GetWebResourceUrl fails](#getwebresourceurl-fails)


## Incorrect or Distorted Appearance

If you observe incorrect appearance of the Telerik® UI for ASP.NET AJAX controls such as:

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

* There are **mixed [Render Modes]({%slug controls/render-modes%})** of the controls on the page. For example, a RadButton on the master page has `RenderMode="Classic"` and a RadButton on a user control has `RenderMode="Lightweight"`. All controls of the same type and their child controls must have the same render mode. The following KB article can help with identifying and debugging the "mixed render mode" issue: [Determine the render mode of all Telerik controls and catch mixed render mode issues](https://www.telerik.com/support/kb/aspnet-ajax/details/determine-the-render-mode-of-all-telerik-controls-and-catch-mixed-render-mode-issues).

* The control's wrapping element has `style="display: none"` and/or it was hidden initially, then shown with JavaScript. Generally, initialization of controls/widgets with such an attribute should be avoided because dimensions and sizing cannot be calculated for elements that are not rendered by the browser. When having appearance/alignment issues when showing controls in such cases, you should call the **`repaint()`** method each Telerik® UI for ASP.NET AJAX control exposes. For controls that wrap Kendo UI widgets, get a reference to the widget and call its [resize() method](http://docs.telerik.com/kendo-ui/api/javascript/ui/widget#methods-resize).

* The browser's zoom is different from 100%. The problem is that the zoom not only increases the font size, but also zooms the entire page. That may produce visual glitches when the layout is based on background images and/or sprites. You can find more information in the [Browser Zoom - Why Does It Break Your Page And How To Avoid It](https://www.telerik.com/blogs/browser-zoom---why-does-it-break-your-page-and-how-to-avoid-it) blog post. 
Another approach to avoid the visual glitches caused by the background images and sprites is to use the Lightweight RenderMode of the controls. It is based on HTML5 and CSS3 and use font icons istead of images.

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

3. Render another instance of the control in a location outside of the visible part the viewport. This will ensure that the required stylesheets will be loaded:

**ASP.NET**

	<div style="position:absolute;top:-10000;left:-10000;">
		<telerik:RadRating runat="server" ID="RadRating1"></telerik:RadRating>
	</div>

## Cannot Find the Skins

You get an error similar to the following:

`Telerik.Web.UI.[Telerik Control] with ID='[Telerik Control ID]' was unable to find embedded skin with name '[Skin Name]'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false.`

Since **Q3 2011** all the built-in skins are located in the **Telerik.Web.UI.Skins.dll** assembly, so you need it as well. More information is available in [this help article]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location%}). The change was announced in a blog post with Q2 2011 ([here](http://blogs.telerik.com/blogs/posts/11-07-05/new-telerik-ajax-skins-assembly.aspx)) and again with Q3 2011 ([here](http://blogs.telerik.com/blogs/posts/11-11-15/separate-skin-assembly-in-radcontrols-for-asp-net-ajax-with-q3-apos-11.aspx)).


If you get this error after an upgrade to a newer version, the most likely reason for the problem is that there is an issue with the Visual Studio Project references. To fix it, perform a manual upgrade: [Manual Upgrade]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}#manual-upgrade).


## Different Render in Design Time and in Browser

The design mode surface of Visual Studio is something similar to IE 5.5 and its rendering can be considered illustrative. It may not match the exact rendering of the page in a [supported browser](https://www.telerik.com/aspnet-ajax/tech-sheets/browser-support).

The way the Telerik UI for ASP.NET AJAX controls actually render in a real browser depends on several factors:

* the chosen [RenderMode]({%slug controls/render-modes%}) of the control.
	* if it is Lightweight, on the [font used on the page]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/fonts%}).
* the [Skin]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/how-skins-work%}) of the control.

Newly created Telerik-enabled projects default to the Lightweight RenderMode. In such case, symptoms of the difference are likely to include larger dimensions than in design-time (due to the [elastic design capabilities]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) of the controls) and a font like 16px Times New Roman (the common default among browsers).

If you want the look to be closer to the design time rendering, you should consider using the Classic RenderMode.


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

 * [Different appearance in Internet Explorer on local and production servers](https://www.telerik.com/support/kb/aspnet-ajax/details/different-appearance-in-internet-explorer-on-local-and-production-servers) KB article

 * [General Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting%})

 * [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%})

 * [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})

 * [ToolBox Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting%})

 * [Skins Location]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location%})

 * [Easily Access Embedded Resources with Telerik® UI for ASP.NET AJAX](http://blogs.telerik.com/aspnet-ajax/posts/11-11-23/easily-access-embedded-resources-with-telerik-radcontrols-for-asp-net-ajax.aspx)
 
 * [Determine the render mode of all Telerik controls and catch mixed render mode issues](https://www.telerik.com/support/kb/aspnet-ajax/details/determine-the-render-mode-of-all-telerik-controls-and-catch-mixed-render-mode-issues)
 
