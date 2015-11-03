---
title: Fluid Design
page_title: Fluid Design | RadLinkButton for ASP.NET AJAX Documentation
description: Fluid Design
slug: linkbutton/mobile-support/fluid-design
tags: fluid,design
published: True
position: 2
---

# Fluid Design

This article explains the **fluid design capabilities RadLinkButton offers**. The **Example 1** below shows how you can set button size in percent so it can resize with its parent element.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes [changing the font size]({%slug linkbutton/mobile-support/elastic-design%}) and having dimensions set in percent.

>caption Figure 1: RadLinkButton set to 100% width and and 25% height.

![button-fluid-design](images/button-fluid-design.png)

>caption Example 1: Shows the markup that provides fluid design of the RadLinkButton in Figure 1.

````ASP.NET
<style>
	html, body, form {
		height:100%;
	}
</style>

<div style="width:40%; height:30%;">
	<telerik:RadLinkButton runat="server" ID="StandartButton" NavigateUrl="http://www.telerik.com" Target="_blank"
		Text="Fluid Design" Skin="Default" Width="100%" Height="25%">
	</telerik:RadLinkButton>
</div>
````

## See Also

 * [Mobile Support Overview]({%slug linkbutton/mobile-support/overview%})

 * [Render Modes]({%slug linkbutton/mobile-support/render-modes%})

 * [Elastic Design]({%slug linkbutton/mobile-support/elastic-design%})

