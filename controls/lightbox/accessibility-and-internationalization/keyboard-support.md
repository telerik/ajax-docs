---
title: Keyboard support
page_title: Keyboard support - RadLightBox
description: Check our Web Forms article about Keyboard support.
slug: lightbox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 2
---

# Keyboard support

## 

You can enable keyboard navigation in the **RadLightBox** control by setting the **ClientSettings.AllowKeyboardNavigation** property to **True** (its default value is **False**). Currently the following features are supported:

* **Access Keys**: An access key is a key combination (e.g. Ctrl+Y) that lets the user move focus to the LightBox control and subsequently use the Left and Rigth arrow keys for navigation. The access key is defined using the **AccessKey** property. For example, setting the **AccessKey** property to "Y" enables users to move focus to the LightBox by typing Ctrl+Y.
	````ASP.NET
	<telerik:RadLightBox RenderMode="Lightweight" ID="RadLightBox1" runat="server" AccessKey="Y">
		<ClientSettings AllowKeyboardNavigation="true">
			<ClientEvents />
		</ClientSettings>
	</telerik:RadLightBox>
````

* **Left keys**: Navigates to the previous item

* **Right keys**: Navigates to the next item

* **Esc keys**: Closes **RadLightBox** control

## See Also

[RadLightBox Overview]({%slug lightbox/overview%})

