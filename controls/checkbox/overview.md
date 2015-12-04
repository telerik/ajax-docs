---
title: Overview
page_title: Overview | RadCheckBox for ASP.NET AJAX Documentation
description: Overview
slug: checkbox/overview
tags: overview
published: True
position: 0
---

# ToggleButton Overview

**RadCheckBox** (**Figure 1**) lets you define several [states]({%slug checkbox/functionality/select-state%}) the button will go through as the user clicks it. Additionally, it provides events, supports Commands, lets you [define icons]({%slug checkbox/functionality/icons/embedded-icons%}) or [images]({%slug checkbox/functionality/image%}) in those states, and has a [mechanism to prevent multiple postbacks]({%slug checkbox/functionality/single-click%}).

The control can be easily styled by changing the **[Skin]({%slug checkbox/appearance-and-styling/skins%})** property, and by setting properties that change the look of the control like the **[Primary]({%slug checkbox/appearance-and-styling/primary-action-button%})** property or any of the properties that control the icons/images in its states.



>caption Figure 1: RadCheckBox with two states.

![RadButton](images/toggle-button-overview.png)

>caption Example 1: A basic example of different states in a RadCheckBox

````ASP.NET
<telerik:RadCheckBox runat="server" ID="RadCheckBox1">
	<ToggleStates>
		<telerik:ButtonToggleState Text="State one">
			<Icon CssClass="rbOk" />
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="State two">
			<Icon CssClass="rbCancel" />
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadCheckBox>
````

>note **RadCheckBox** does not support a Classic [render mode]({%slug checkbox/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadCheckBox Online Demos](http://demos.telerik.com/aspnet-ajax/checkbox/examples/overview/defaultcs.aspx)
 
 * [RadCheckBox Getting Started]({%slug checkbox/getting-started%})
 
 * [RadCheckBox Select State]({%slug checkbox/functionality/select-state%})
 
 * [RadCheckBox Properties and Events]({%slug checkbox/server-side-programming/properties-and-events%})
 