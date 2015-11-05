---
title: Overview
page_title: Overview | RadImageButtom for ASP.NET AJAX Documentation
description: Overview
slug: imagebutton/overview
tags: overview
published: True
position: 0
---

# ImageButtom Overview

The **RadImageButtom** control (**Figure 1**) enriches the features, that ASP.NET Button control has. It provides additional events, ability to [define icons]({%slug imagebutton/functionality/icons%}) and [content template]({%slug imagebutton/functionality/contenttemplate%}), a [mechanism to prevent multiple postbacks]({%slug imagebutton/functionality/single-click-button%}) and numerous [themes]({%slug imagebutton/appearance-and-styling/skins%}). 

The control can be easily styled by changing the **Skin** property, and alternatively setting properties that change the look of the control. This will eliminate the need to use the [RadFormDecorator]({%slug formdecorator/overview%}), just to style a single button. Developers can easily migrate their applications from using the standard ASP.NET (button) controls to the new **RadImageButtom** control, because most of their functionality is provided by our control, and is controlled by the same or similar (intuitive) properties.



>caption Figure 1: RadImageButtom control provides a rich API and UI.

![RadButton](images/RadImageButtoms.png)

<!--
Code that creates Figure 1:
<telerik:RadImageButtom runat="server" ID="RadImageButtom1" Text="RadImageButtom"></telerik:RadImageButtom>
<br />
<br />
<telerik:RadImageButtom runat="server" ID="RadImageButtom2" Text="RadImageButtom Disabled" Enabled="false"></telerik:RadImageButtom>
<br />
<br />
<telerik:RadImageButtom runat="server" ID="RadImageButtom3" Text="RadImageButtom with Icon">
	<Icon CssClass="rbSave" />
</telerik:RadImageButtom>
-->

>note **RadImageButtom** does not support a Classic [render mode]({%slug imagebutton/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadImageButtom Online Demos](http://demos.telerik.com/aspnet-ajax/imagebutton/examples/overview/defaultcs.aspx)
 
 * [RadImageButtom Getting Started]({%slug imagebutton/getting-started%})
 
 * [RadImageButtom Properties and Events]({%slug imagebutton/server-side-programming/properties-and-events%})
 
 * [FormDecorator Overview]({%slug formdecorator/overview%})
