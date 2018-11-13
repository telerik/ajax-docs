---
title: Overview
page_title: Overview | RadToggleButton for ASP.NET AJAX Documentation
description: Overview
slug: togglebutton/overview
tags: overview
published: True
position: 0
---

# ToggleButton Overview

**RadToggleButton** (**Figure 1**) lets you define several [states]({%slug togglebutton/functionality/select-state%}) the button will go through as the user clicks it. Additionally, it provides events, supports Commands, lets you [define icons]({%slug togglebutton/functionality/icons/embedded-icons%}) or [images]({%slug togglebutton/functionality/image%}) in those states, and has a [mechanism to prevent multiple postbacks]({%slug togglebutton/functionality/single-click%}). **RadToggleButton** is available as of **Q1 2016**.

The control can be easily styled by changing the **[Skin]({%slug togglebutton/appearance-and-styling/skins%})** property or any of the properties that control the icons/images in its states.



>caption Figure 1: RadToggleButton with two states.

![RadButton](images/toggle-button-overview.png)

>caption Example 1: A basic example of different states in a RadToggleButton

````ASP.NET
<telerik:RadToggleButton runat="server" ID="RadToggleButton1">
	<ToggleStates>
		<telerik:ButtonToggleState Text="State one">
			<Icon CssClass="rbOk" />
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="State two">
			<Icon CssClass="rbCancel" />
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadToggleButton>
````

>note **RadToggleButton** does not support a Classic [render mode]({%slug togglebutton/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadToggleButton Online Demos](http://demos.telerik.com/aspnet-ajax/togglebutton/overview/defaultcs.aspx)
 
 * [RadToggleButton Getting Started]({%slug togglebutton/getting-started%})
 
 * [RadToggleButton Select State]({%slug togglebutton/functionality/select-state%})
 
 * [RadToggleButton Properties and Events]({%slug togglebutton/server-side-programming/properties-and-events%})
 