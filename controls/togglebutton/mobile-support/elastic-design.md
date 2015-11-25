---
title: Elastic Design
page_title: Elastic Design | RadToggleButton for ASP.NET AJAX Documentation
description: Elastic Design
slug: togglebutton/mobile-support/elastic-design
tags: elastic,design
published: True
position: 1
---

# Elastic Design

This article explains the **elastic design capabilities RadToggleButton offers**. **Example 1** shows the basic approach to scale the control by only changing its default font size.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes changing the font size and having [dimensions set in percent]({%slug togglebutton/mobile-support/fluid-design%}).

>caption Figure 1: Comparison between appearance of a RadToggleButton with regular font size and with increased font size.

![togglebutton-elastic-design](images/togglebutton-elastic-design.png)

>caption Example 1: Shows how to increase the font size of a RadToggleButton in Figure 1.

````CSS
<style type="text/css">
	button.RadButton {
		font-size: 26px;
	}
</style>
````

````ASP.NET
<telerik:RadToggleButton runat="server" ID="RadToggleButton1" Text="Elastic Toggle Button">
</telerik:RadToggleButton>
````

## See Also

 * [Mobile Support Overview]({%slug togglebutton/mobile-support/overview%})

 * [Render Modes]({%slug togglebutton/mobile-support/render-modes%})

 * [Fluid Design]({%slug togglebutton/mobile-support/fluid-design%})

