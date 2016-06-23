---
title: Overview
page_title: Overview | RadRadioButtonList for ASP.NET AJAX Documentation
description: Overview
slug: radiobuttonlist/overview
tags: overview
published: True
position: 0
---

# CheckBox Overview

The **RadRadioButtonList** control (**Figure 1**) enriches the features, that ASP.NET RadioButtonList control has. Additionally, it provides events, supports Commands and numerous [themes]({%slug radiobuttonlist/appearance-and-styling/skins%}). **RadRadioButtonList** is available as of **R3 2016**.

The control can be easily styled by changing the `Skin` property. This will eliminate the need to use the [RadFormDecorator]({%slug formdecorator/overview%}). Developers can easily migrate their applications from using the standard ASP.NET (RadioButtonList) controls to the **RadRadioButtonList** control, because most of their functionality is provided by our control, and is controlled by the same or similar (intuitive) properties.


>caption Figure 1: RadRadioButtonList configuration.

![](images/checkbox-overview.png)

>caption Example 1: A basic example of a RadRadioButtonList setup.

````ASP.NET
<telerik:RadRadioButtonList ID="RadRadioButtonList1" runat="server"></telerik:RadRadioButtonList>
````

>note **RadRadioButtonList** does not support Classic [render mode]({%slug radiobuttonlist/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadRadioButtonList Online Demos](http://demos.telerik.com/aspnet-ajax/checkbox/examples/overview/defaultcs.aspx)
 
 * [RadRadioButtonList Getting Started]({%slug radiobuttonlist/getting-started%})
 
 * [RadRadioButtonList Checked State]({%slug radiobuttonlist/functionality/checked-state%})
 
 * [RadRadioButtonList Properties and Events]({%slug radiobuttonlist/server-side-programming/properties-and-events%})
 