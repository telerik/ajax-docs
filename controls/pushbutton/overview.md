---
title: Overview
page_title: Overview | RadPushButton for ASP.NET AJAX Documentation
description: Overview
slug: pushbutton/overview
tags: overview
published: True
position: 0
---

# PushButton Overview

The **RadPushButton** control (**Figure 1**) enriches the features, that ASP.NET Button control has. It provides additional events, ability to [define icons]({%slug pushbutton/functionality/icons%}) and [content template]({%slug pushbutton/functionality/contenttemplate%}), a [mechanism to prevent multiple postbacks]({%slug pushbutton/functionality/single-click-button%}) and numerous [themes]({%slug pushbutton/appearance-and-styling/skins%}). 

The control can be easily styled by changing the **Skin** property, and alternatively setting properties that change the look of the control. This will eliminate the need to use the [RadFormDecorator]({%slug formdecorator/overview%}), just to style a single button. Developers can easily migrate their applications from using the standard ASP.NET (button) controls to the new **RadPushButton** control, because most of their functionality is provided by our control, and is controlled by the same or similar (intuitive) properties.



>caption Figure 1: RadPushButton control provides a rich API and UI.

![RadButton](images/RadPushButtons.png)

<!--
Code that creates Figure 1:
<telerik:RadPushButton runat="server" ID="RadPushButton1" Text="RadPushButton"></telerik:RadPushButton>
<br />
<br />
<telerik:RadPushButton runat="server" ID="RadPushButton2" Text="RadPushButton Disabled" Enabled="false"></telerik:RadPushButton>
<br />
<br />
<telerik:RadPushButton runat="server" ID="RadPushButton3" Text="RadPushButton with Icon">
	<Icon CssClass="rbSave" />
</telerik:RadPushButton>
-->

>note **RadPushButton** does not support a Classic [render mode]({%slug pushbutton/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadPushButton Online Demos](http://demos.telerik.com/aspnet-ajax/pushbutton/examples/overview/defaultcs.aspx)
 
 * [RadPushButton Getting Started]({%slug pushbutton/getting-started%})
 
 * [RadPushButton Properties and Events]({%slug pushbutton/server-side-programming/properties-and-events%})
 
 * [FormDecorator Overview]({%slug formdecorator/overview%})