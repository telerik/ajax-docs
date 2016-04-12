---
title: Right-to-left Support
page_title: Right-to-left Support | RadProgressBar for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: progressbar/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 0
---

# Right-to-left Support

The Telerik **Progress Bar** supports right-to-left (RTL) direction.

To put the **RadProgressBar** control in RTL mode, its parent container should have its **CSS direction**	property or **dir attribute** set to **rtl**.

This parent element can be the **BODY**, the **HTML** element,	or just a simple wrapper element as in **Example 1**. The rendered result from the code in **Example 1** is illustrated in **Figure 1**.

>caption Figure 1: RadProgressBar control in Right-to-Left mode

![progress-bar-rtl-support](images/progress-bar-rtl-support.png)
>caption Example 1: Putting the **Telerik Progress Bar** in Right-to-Left mode

````ASP.NET
<div style="direction:rtl;">
	<telerik:RadProgressBar RenderMode="Lightweight" runat="server" ID="RadProgressBar1" BarType="Value" Value="80" MinValue="0" MaxValue="100" Skin="Silk">
	</telerik:RadProgressBar>
</div>
````

## See Also

 * [Overview]({%slug progressbar/overview%})

 * [Element Structure]({%slug progressbar/getting-started/element-structure%})

 * [Overview]({%slug progressbar/getting-started/overview%})

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/progress-bar/examples/accessibility-and-internationalization/right-to-left/defaultcs.aspx)
