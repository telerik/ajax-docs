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

The **RadImageButton** control (**Figure 1**) enriches the features, that ASP.NET ImageButton control has. <<COMMENT: Do you mean RadImageButton provides equivalent features plus more? I assume so. The way you have the first sentence worded, it suggests to me that RadImageButton physically modifies the native ImageButton control in ASP.NET.--Erik>> RadImageButton provides additional events, the ability to use a [content template]({%slug imagebutton/functionality/contenttemplate%}), a [mechanism to prevent multiple postbacks]({%slug imagebutton/functionality/single-click%}) and numerous [themes]({%slug imagebutton/appearance-and-styling/skins%}). 

You can easily style the RadImageButton control by changing the **Skin** property, and alternatively setting properties that change the look of the control. Developers can easily migrate their applications from using the standard ASP.NET Image control <<Comment: Do you mean ImageButton or does ASP.NET have both an Image control and an ImageButton control that a developer replaces with RadImageButton?>>to the new **RadImageButton** control, because most of the ImageButton's functionality is provided by RadImageButton, and you can control RadImageButton using the same or similar (intuitive) properties.



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

>note **RadImageButton** does not support a Classic [render mode]({%slug imagebutton/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadImageButton Online Demos](http://demos.telerik.com/aspnet-ajax/imagebutton/examples/overview/defaultcs.aspx)
 
 * [RadImageButton Getting Started]({%slug imagebutton/getting-started%})
 
 * [RadImageButton Properties and Events]({%slug imagebutton/server-side-programming/properties-and-events%})

