---
title: Elastic Design
page_title: Elastic Design | RadLinkButton for ASP.NET AJAX Documentation
description: Elastic Design
slug: linkbutton/mobile-support/elastic-design
tags: elastic,design
published: True
position: 1
---

# Elastic Design

This article explains the **elastic design capabilities RadLinkButton offers**. The **Example 1** below shows the basic approaches you can use to scale the control by only changing its default font size.

@[template](/_templates/common/render-mode.md#resp-design-desc "slug-el: no, slug-fl: linkbutton/mobile-support/fluid-design")

>caption Figure 1: Comparison between appearance of a RadLinkButton with regular font size and with increased font size.

![button-elastic-design](images/button-elastic-design.png)


@[template](/_templates/common/font-size-notes.md#note-and-example "control: RadLinkButton")

>caption Example 2: Shows how to increase the font size of a RadLinkButton in Figure 1.

````CSS
<style type="text/css">
	button.RadButton {
		font-size: 26px;
	}
</style>
````

````ASP.NET
<telerik:RadLinkButton runat="server" ID="StandartButton" NavigateUrl="https://www.telerik.com" Target="_blank"
	Text="Elastic Button" Skin="Default" Width="200px">
</telerik:RadLinkButton>
````

## See Also

 * [Mobile Support Overview]({%slug linkbutton/mobile-support/overview%})

 * [Render Modes]({%slug linkbutton/mobile-support/render-modes%})

 * [Fluid Design]({%slug linkbutton/mobile-support/fluid-design%})

@[template](/_templates/common/font-size-notes.md#related-resources)
