---
title: Fluid Design
page_title: Fluid Design | RadCheckBox for ASP.NET AJAX Documentation
description: Fluid Design
slug: checkbox/mobile-support/fluid-design
tags: fluid,design
published: True
position: 2
---

# Fluid Design

This article explains the **fluid design capabilities RadCheckBox offers**. **Example 1** shows how you can set button size in percent so it can resize with its parent element.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes [changing the font size]({%slug checkbox/mobile-support/elastic-design%}) and having dimensions set in percent.

>caption Figure 1: RadCheckBox set to 100% width and and 25% height.

![checkbox-fluid-design](images/checkbox-fluid-design.png)

>caption Example 1: Shows the markup that provides fluid design of the RadCheckBox in Figure 1.

````ASP.NET
<style>
    html, body, form {
        height: 100%;
    }
</style>

<div style="width: 40%; height: 30%;">
    <telerik:RadCheckBox runat="server" ID="ToggleButton1"
        Text="Fluid Toggle Button" Width="100%" Height="25%">
			<ToggleStates>
				<telerik:ButtonToggleState Text="State 1"/>
				<telerik:ButtonToggleState Text="State 2" /> 
			</ToggleStates>
    </telerik:RadCheckBox>
</div>
````

## See Also

 * [Mobile Support Overview]({%slug checkbox/mobile-support/overview%})

 * [Render Modes]({%slug checkbox/mobile-support/render-modes%})

 * [Elastic Design]({%slug checkbox/mobile-support/elastic-design%})

