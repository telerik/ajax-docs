---
title: Gestures
page_title: Gestures - RadDrawer
description: Check our Web Forms article about Gestures.
slug: drawer/functionality/gestures
tags: gestures
published: True
position: 3
---


# Gestures

**RadDrawer** has `gesture support` that allows the user to reveal its full content either with a swiping gesture or by calling the `show()` method of the widget.
To enable the `gesture support`, the `SwipeToOpen` property should be set to `true`. 

````ASP.NET
<telerik:RadDrawer runat="server" ID="RadDrawer1" DrawerWidth="200" SwipeToOpen="true">
    <ItemsTemplate>
        <ul> 
            <li data-role='drawer-item' class='k-state-selected'>
                <span class='k-item-text'>First Item</span>
            </li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Second Item</span>
            </li> 
            <li data-role='drawer-separator'></li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Third Item</span>
            </li> 
            <li data-role='drawer-item'>
                <span class='k-item-text'>Fourth Item</span>
            </li> 
        </ul>
    </ItemsTemplate>
</telerik:RadDrawer>

````

## See Also

* [Mini Mode]({%slug drawer/functionality/display-modes%})

* [Live Demo - Overview](https://demos.telerik.com/aspnet-ajax/drawer/overview/defaultcs.aspx)


