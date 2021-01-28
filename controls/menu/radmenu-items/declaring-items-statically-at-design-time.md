---
title: Declaring Items Statically at Design Time
page_title: Declaring Items Statically at Design Time - RadMenu
description: Check our Web Forms article about Declaring Items Statically at Design Time.
slug: menu/radmenu-items/declaring-items-statically-at-design-time
tags: declaring,items,statically,at,design,time
published: True
position: 2
---

# Declaring Items Statically at Design Time

## 

It is easy to define the hierarchy of menu items statically at design time. You can use the [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%}) to create the hierarchy in the Visual Studio Designer:
>caption 

![Sample RadMenu](images/menu_samplemenu.png)

Alternately, you can use the Source page to specify the items declaratively:

````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Flow="Horizontal" Skin="Gray">
    <Items>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Root RadMenuItem1">
            <Items>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Child RadMenuItem 1" />
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Root RadMenuItem2">
            <Items>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Child RadMenuItem 1" />
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Root RadMenuItem3">
            <Items>
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Child RadMenuItem 1" />
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Child RadMenuItem 2" />
                <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Child RadMenuItem 3" />
            </Items>
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````

The result is a hierarchy of menu items:


>caption 

![RadMenu Hierarchy of Items](images/menu_hierarchyofitems.png)

# See Also

 * [Custom Attributes]({%slug menu/radmenu-items/custom-attributes%})

 * [Overview]({%slug menu/radmenu-items/overview%})
