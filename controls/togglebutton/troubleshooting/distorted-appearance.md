---
title: Distorted Appearance
page_title: Distorted Appearance - RadToggleButton
description: Check our Web Forms article about Distorted Appearance.
slug: togglebutton/troubleshooting/distorted-appearance
tags: distorted,appearance
published: True
position: 1
---

# Distorted Appearance

@[template](/_templates/button/distorted-appearance.md#intro "control: RadToggleButton")

````ASP.NET
<telerik:RadToggleButton ID="RadToggleButton1" runat="server">
	<ToggleStates>
		<telerik:ButtonToggleState Text="ToggleState1">
			<Icon CssClass="rbOk" />
		</telerik:ButtonToggleState>
		<telerik:ButtonToggleState Text="ToggleState2">
			<Icon CssClass="rbCancel" />
		</telerik:ButtonToggleState>
	</ToggleStates>
</telerik:RadToggleButton>
<br />
<telerik:RadButton RenderMode="Lightweight" ID="RadButton1" runat="server" Text="RadButton" />
```` 

@[template](/_templates/button/distorted-appearance.md#cause-resolve "control: RadToggleButton")


* [Render Modes]({%slug togglebutton/mobile-support/render-modes%})

* [Client-side Click Event Handler Is Not Executed]({%slug button/troubleshooting/client-side-click-event-handler-is-not-executed%})

* [Event Handlers Are Not Raised]({%slug button/troubleshooting/event-handlers-are-not-raised%})

* [RadButton Not Performing Postback]({%slug button/troubleshooting/radbutton-not-performing-postback%})

