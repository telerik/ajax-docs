---
title: Responsive, Adaptive and Elastic Capabilities
page_title: Responsive, Adaptive and Elastic Capabilities | RadWindow for ASP.NET AJAX Documentation
description: Responsive, Adaptive and Elastic Capabilities
slug: window/mobile-support/responsive,-adaptive-and-elastic-capabilities
tags: responsive,,adaptive,and,elastic,capabilities
published: True
position: 0
---

# Responsive, Adaptive and Elastic Capabilities

This article explains the **responsive design capabilities RadWindow offers**.	The [Lightweight RenderMode]({%slug window/mobile-support/render-modes%}) of RadWindow supports	**elastic design since Q2 2014**.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating	the user experience. This often includes changing the font size and having dimensions set in percent.

## Elastic Design with RadWindow

>caption Figure 1: Comparison between appearance of a RadWindow with regular font size and with increased font size

![window-changed-font-size-comparison](images/window-changed-font-size-comparison.png)

**RadWindow** does not create elastic design by itself, but can fit in a page that follows this pattern. This means that RadWindow does not support dimensions set in percent,but its **Lightweight RenderMode** supports **changing the font size** without breaking the control's appearance - if the new size is larger than the original,the elements in the control will simply increase their size as well to accommodate the text.This fluid layout is achieved by using `em` units for setting dimensions and paddings in the control, instead of `px`because `em` units are tied to the font size. This allows dimensions and sizes to scale with the font size.

Elements that use images or images sprites, however, cannot be increased in size, so the commands will keep having their original dimensions and position(aligned to the top of the titlebar).

The following sample shows how to increase the font size of a RadWindow and the effect can be seen in comparison in Figure 1.

````ASP.NET
<style type="text/css">
	div.RadWindow
	{
		font-size: 18px;
	}
</style>
<telerik:RadWindow ID="RadWindow1" runat="server" Title="Longer Window Title" VisibleOnPageLoad="true" RenderMode="Lightweight" Width="450">
</telerik:RadWindow>
````



## See Also

 * [Render Modes]({%slug window/mobile-support/render-modes%})
