---
title: Overview
page_title: Overview - RadCheckBoxList
description: Explore the CheckBoxList control and its features for presenting a list of selectable checkboxes.
slug: checkboxlist/overview
tags: overview
published: True
position: 0
---

# WebForms CheckBoxList Overview

The **RadCheckBoxList** control (**Figure 1**) enriches the features of the ASP.NET CheckBoxList control. Additionally, it provides events, supports Commands and numerous [themes]({%slug checkboxlist/appearance-and-styling/skins%}). **RadCheckBoxList** is available as of **R3 2016**.

## Configuration
You can easily style the control by changing the `Skin` property. This will eliminate the need to use the [RadFormDecorator]({%slug formdecorator/overview%}). Developers can easily migrate their applications from using the standard ASP.NET (CheckBoxList) controls to the **RadCheckBoxList** control, because most of the CheckBoxList's functionality is provided by the **RadCheckBoxList** control, and the **RadCheckBoxList** is controlled by the same or similar (intuitive) properties.


>caption Figure 1: RadCheckBoxList configuration.

![WebForms CheckBoxList overview](images/checkboxlist-overview.png "WebForms CheckBoxList overview")

>caption Example 1: A basic example of a RadCheckBoxList setup.

````ASP.NET
<telerik:RadCheckBoxList runat="server" ID="RadCheckBoxList1">
    <Items>
        <telerik:ButtonListItem Text="English" Selected="true" />
        <telerik:ButtonListItem Text="German" />
        <telerik:ButtonListItem Text="French" />
    </Items>
</telerik:RadCheckBoxList>
````

>note **RadCheckBoxList** does not support Classic [render mode]({%slug checkboxlist/mobile-support/render-modes%}). Setting its RenderMode to Classic will default to the Lightweight render mode.

## See Also

 * [RadCheckBoxList Online Demos](https://demos.telerik.com/aspnet-ajax/checkboxlist/examples/overview/defaultcs.aspx)
 
 * [RadCheckBoxList Getting Started]({%slug checkboxlist/getting-started%})
 
 * [RadCheckBoxList Properties and Events]({%slug checkboxlist/server-side-programming/properties-and-events%})
 
 * [Telerik UI for ASP.NET AJAX Components](https://www.telerik.com/products/aspnet-ajax.aspx)

  