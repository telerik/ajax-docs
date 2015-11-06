---
title: Elastic Design
page_title: Elastic Design | RadPushButton for ASP.NET AJAX Documentation
description: Elastic Design
slug: pushbutton/mobile-support/elastic-design
tags: elastic,design
published: True
position: 1
---

# Elastic Design

This article explains the **elastic design capabilities RadPushButton offers**. The **Example 1** below shows the basic approaches you can use to scale the control by only changing its default font size.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes changing the font size and having dimensions set in percent.

>caption Figure 1: Comparison between appearance of a RadPushButton with regular font size and with increased font size.

![pushbutton-elastic-design](images/pushbutton-elastic-design.png)

>caption Example 1: Shows how to increase the font size of a RadPushButton in Figure 1.

````CSS
<style type="text/css">
	button.RadButton {
		font-size: 26px;
	}
</style>
````

````ASP.NET
<telerik:RadPushButton runat="server" ID="StandartButton"
	Text="Elastic Button" Skin="Default" Width="200px">
</telerik:RadPushButton>
````

## See Also

 * [Mobile Support Overview]({%slug pushbutton/mobile-support/overview%})

 * [Render Modes]({%slug pushbutton/mobile-support/render-modes%})

 * [Fluid Design]({%slug pushbutton/mobile-support/fluid-design%})

