---
title: Overview
page_title: Overview | RadToggleButton for ASP.NET AJAX Documentation
description: Overview
slug: togglebutton/overview
tags: overview
published: True
position: 0
---

# PushButton Overview

The **RadToggleButton** control (**Figure 1**) enriches the features, that ASP.NET Button control has. It provides additional events, ability to [define icons]({%slug togglebutton/functionality/icons%}) and [content template]({%slug togglebutton/functionality/contenttemplate%}), a [mechanism to prevent multiple postbacks]({%slug togglebutton/functionality/single-click-button%}) and numerous [themes]({%slug togglebutton/appearance-and-styling/skins%}). 

The control can be easily styled by changing the **Skin** property, and alternatively setting properties that change the look of the control. This will eliminate the need to use the [RadFormDecorator]({%slug formdecorator/overview%}), just to style a single button. Developers can easily migrate their applications from using the standard ASP.NET (button) controls to the new **RadToggleButton** control, because most of their functionality is provided by our control, and is controlled by the same or similar (intuitive) properties.



>caption Figure 1: RadToggleButton control provides a rich API and UI.

![RadButton](images/RadToggleButtons.png)

<!--
Code that creates Figure 1:
<telerik:RadToggleButton runat="server" ID="RadToggleButton1" Text="RadToggleButton"></telerik:RadToggleButton>
<br />
<br />
<telerik:RadToggleButton runat="server" ID="RadToggleButton2" Text="RadToggleButton Disabled" Enabled="false"></telerik:RadToggleButton>
<br />
<br />
<telerik:RadToggleButton runat="server" ID="RadToggleButton3" Text="RadToggleButton with Icon">
	<Icon CssClass="rbSave" />
</telerik:RadToggleButton>
-->

>note **RadToggleButton** does not support a Classic [render mode]({%slug togglebutton/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadToggleButton Online Demos](http://demos.telerik.com/aspnet-ajax/togglebutton/examples/overview/defaultcs.aspx)
 
 * [RadToggleButton Getting Started]({%slug togglebutton/getting-started%})
 
 * [RadToggleButton Properties and Events]({%slug togglebutton/server-side-programming/properties-and-events%})
 
 * [FormDecorator Overview]({%slug formdecorator/overview%})