---
title: Getting Started Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: progressbar/getting-started/overview
tags: overview
published: True
position: 0
---

# Getting Started Overview



The following tutorial demonstrates how you can add a simple __RadProgressBar__ control with a preset value displayed in percent. The end result will be similar to	__Figure 1__:
>caption Figure 1: A RadProgressBar with a predefined percentage value.

![progress-bar-getting-started-1](images/progress-bar-getting-started-1.png)

## 

1. Add a __ScriptManager__ control on a Web Form.

1. Add a __RadProgressBar__ control on this AJAX-enabled Web Form:__Example 1__: Declaration of a __RadProgressBar__ control:

````ASPNET
			<telerik:RadProgressBar runat="server" ID="RadProgressBar1">
			</telerik:RadProgressBar>
````



1. Set some of the [properties of the ProgressBar](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_radprogressbar.html) like __BarType__, __Value__, __MaxValue__ and __Orientation__	to configure the progress bar in the desired way.__Example 2__: The progress bar now is horizontally oriented, configured with the desired value in percent:

````ASPNET
			<telerik:RadProgressBar runat="server" ID="RadProgressBar1" 
				BarType="Percent" MaxValue="100" Value="33" Width="250" 
				Orientation="Horizontal" ShowLabel="true" Skin="Silk">
			</telerik:RadProgressBar>
````



# See Also

 * [RadProgressBar Elements Structure]({%slug progressbar/getting-started/element-structure%})

 * [Types]({%slug progressbar/functionality/types%})

 * [RadProgressBar Server-Side Programming]({%slug progressbar/server-side-programming%})
