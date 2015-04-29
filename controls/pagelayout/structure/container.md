---
title: Container
page_title: Container | RadPageLayout for ASP.NET AJAX Documentation
description: Container
slug: pagelayout/structure/container
tags: container
published: True
position: 0
---

# Container



This article provides information about the main container of the **RadPageLayout** control. You can also find out how to declare the control on your page as well as the available properties that can be set.

## Container

The container of the **RadPageLayout** control is the top most container. Once you declare it on your page, it will render as a DIV element. Below you can find a list of the properties that you can use for the control.


| Property Name | Description |
| ------ | ------ |
| **GridType** |Gets or sets the grid type. You can set it to either of the following values - **Static** , **Fixed** or **Fluid** . For more detailed information these values you can refer to the [RadPageLayout Grid Types]({%slug pagelayout/creating-responsive-design/radpagelayout-grid-types%}) help topic.|
| **ShowGrid** |This property accepts boolean values ( **true** or **false** ) and it is used to toggle the visual grid guides.|
| **HtmlTag** |Gets or sets the RadPageLayout main container element. Depending on the value that you set (this can be **Div** , **Section** , **Header** , **Footer** , **Main** , **Aside** , **Nav** , **Ol** , **Ul** , **Li** or **None** ) it will render a wrapper around the RadPageLayout rows elements. For example, this property could be useful in scenarios when you need to make each row to have 100% width of the screen. Setting the value to "None" will work fine since it will render each row direct on the page without a container element.|

Markup of the control:

````ASPNET
<telerik:RadPageLayout ID="RadPageLayout1" runat="server" ShowGrid="true" GridType="Fluid"  RenderRowWrappers="Root">
</telerik:RadPageLayout>
````



# See Also

 * [Overview]({%slug pagelayout/overview%})
