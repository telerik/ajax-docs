---
title: Animations
page_title: Animations | RadMenu for ASP.NET AJAX Documentation
description: Animations
slug: menu/functionality/animations
tags: animations
published: True
position: 5
---

# Animations

## 

The **ExpandAnimation** and **CollapseAnimation** properties let you apply animated effects when child menu items appear and disappear. Each property is of type **Telerik.Web.UI.AnimationSettings**, which has two fields:

* **Duration**: the duration of the effect in milliseconds

* **Type**: the animated effect. It is one of the following pre-defined animation types:

* Linear

* InQuad

* OutQuad

* InOutQuad

* InCubic

* OutCubic

* InOutCubic

* InQuart

* OutQuart

* InOutQuart

* InQuint

* OutQuint

* InOutQuint

* InSine

* OutSine

* InOutSine

* InExpo

* OutExpo

* InOutExpo

* InBack

* OutBack

* InOutBack

* InBounce

* OutBounce

* InOutBounce

* InElastic

* OutElastic

* InOutElastic

* None

By default, the children of a menu item are displayed when the user hovers the mouse over the parent item.When the mouse moves over a new parent item, the original submenu collapses and the children of the new parent menu item are displayed. The **ExpandDelay** and **CollapseDelay** properties specify the time, in milliseconds, after the mouse enters or exits a parent item until the list of child items begins to expand or collapse.


````ASPNET
<telerik:RadMenu ID="RadMenu1" runat="server">
    <ExpandAnimation Type="OutQuart" Duration="300" />
    <CollapseAnimation Type="OutQuint" Duration="200" />
</telerik:RadMenu>
````


>tip You can stop the animation by setting Type to "None".
>


You can see a live example of Animation effects at [First Look](http://demos.telerik.com/aspnet-ajax/menu/examples/default/defaultcs.aspx).

# See Also

 * [Displaying Child Items]({%slug menu/accessibility-and-internationalization/displaying-child-items%})

 * [Layout of Child Items]({%slug menu/appearance-and-styling/layout-of-child-items%})
