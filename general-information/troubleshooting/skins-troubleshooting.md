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



This article treats the most common issues related to the Skins used by the Telerik UI for ASP.NET AJAX controls:s

* [Telerik.Web.UI.(Telerik Control) with ID='(Telerik Control ID)' was unable to find embedded skin with name '(Skin Name)'. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false](#cannot-find-the-skins)

* [GetWebResourceUrl fails](#getwebresourceurl-fails)

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

This example registers the RadEditor's Outlook skin-specific stylesheet. If you are using VB you should change **this** to **Me** as is the equivalent in this language.

Server code blocks may cause issues in the page's head section (where link elements are usually placed), so you may want to wrap them in a **RadCodeBlock** control, otherwise a server error may be thrown, or the code may not be executed (i.e., the link will not work).

More information about this method and WebResources in general is available in [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/11-11-23/easily-access-embedded-resources-with-telerik-radcontrols-for-asp-net-ajax.aspx).

### See Also

 * [General Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting%})

 * [Design-time Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/design-time-troubleshooting%})

 * [Web Resources Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/web-resources-troubleshooting%})

 * [ToolBox Troubleshooting]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/toolbox-troubleshooting%})

 * [Skins Location]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skins-location%})

 * [Easily Access Embedded Resources with Telerik UI for ASP.NET AJAX](http://blogs.telerik.com/aspnet-ajax/posts/11-11-23/easily-access-embedded-resources-with-telerik-radcontrols-for-asp-net-ajax.aspx)
