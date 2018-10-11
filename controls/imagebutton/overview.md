---
title: Overview
page_title: Overview | RadImageButton for ASP.NET AJAX Documentation
description: Overview
slug: imagebutton/overview
tags: overview
published: True
position: 0
---

# ImageButton Overview

The **RadImageButton** control (**Figure 1**) can be used as alternative to ASP.NET ImageButton control. Its functionality is enriched with client-side and server-side API which you can use to achieve plenty of application requirments. **RadImageButton** provides additional events, the ability to use a [content template]({%slug imagebutton/functionality/contenttemplate%}), a [mechanism to prevent multiple postbacks]({%slug imagebutton/functionality/single-click%}) and numerous [themes]({%slug imagebutton/appearance-and-styling/skins%}). **RadImageButton** is available as of **Q1 2016**.

The control can be easily styled by changing the **Skin** property, and alternatively setting properties that change the look of the control. Developers can easily migrate their applications from using the standard ASP.NET Image control to the new **RadImageButton** control, because most of their functionality is provided by our control, and is controlled by the same or similar (intuitive) properties.



>caption Figure 1: Examples of RadImageButton

![RadButton](images/button-imagebuttons01.png)

<!--
Code that creates Figure 1:
<telerik:RadImageButton runat="server" ID="RadImageButton1" Text="RadImageButton"></telerik:RadImageButton>
<br />
<br />
<telerik:RadImageButton runat="server" ID="RadImageButton2" Text="RadImageButton Disabled" Enabled="false"></telerik:RadImageButton>
<br />
<br />
<telerik:RadImageButton runat="server" ID="RadImageButton3" Text="RadImageButton with Icon">
	<Icon CssClass="rbSave" />
</telerik:RadImageButton>
-->

>tip **RadImageButton** does not support a Classic [render mode]({%slug imagebutton/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadImageButton Online Demos](http://demos.telerik.com/aspnet-ajax/imagebutton/examples/overview/defaultcs.aspx)
 
 * [RadImageButton Getting Started]({%slug imagebutton/getting-started%})
 
 * [RadImageButton Properties and Events]({%slug imagebutton/server-side-programming/properties-and-events%})

