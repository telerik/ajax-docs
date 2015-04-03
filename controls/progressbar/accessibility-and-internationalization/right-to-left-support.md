---
title: Right-to-left Support
page_title: Right-to-left Support | UI for ASP.NET AJAX Documentation
description: Right-to-left Support
slug: progressbar/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 0
---

# Right-to-left Support



The Telerik __Progress Bar__ supports right-to-left (RTL) direction.

To put the __RadProgressBar__ control in RTL mode, its parent container should have its __CSS direction__	property or __dir attribute__ set to __rtl__.

This parent element can be the __BODY__, the __HTML__ element,	or just a simple wrapper element as in __Example 1__. The rendered result from the code in __Example 1__is illustrated in __Figure 1__.

## 
>caption Figure 1: RadProgressBar control in Right-to-Left mode

![progress-bar-rtl-support](images/progress-bar-rtl-support.png)

__Example 1__: Putting the __Telerik Progress Bar__ in Right-to-Left mode

````ASPNET
	    <div style="direction:rtl;">
			<telerik:RadProgressBar runat="server" ID="RadProgressBar1" BarType="Value" Value="80" MinValue="0" MaxValue="100" Skin="Silk">
			</telerik:RadProgressBar>
		</div>
````



# See Also

 * [Overview]({%slug progressbar/overview%})

 * [Element Structure]({%slug progressbar/getting-started/element-structure%})

 * [Overview]({%slug progressbar/getting-started/overview%})

 * [See this live in an online demo](http://demos.telerik.com/aspnet-ajax/progress-bar/examples/accessibility-and-internationalization/right-to-left/defaultcs.aspx)
