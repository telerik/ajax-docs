---
title: Hide Icon Column in RadMenu
description: Hide Icon Column in RadMenu. Check it now!
type: how-to
page_title: Hide Icon Column in RadMenu
slug: menu-hide-icon-column-in-radmenu
res_type: kb
---


## Problem

[RadMenu allows you to put an icon in each menu item]({%slug menu/appearance-and-styling/adding-images-to-items%}). The space for this icon remains there even if an icon is not set for a specific item, because another item may have an icon and thus break the alignment.

## Solution

If you do not want to use icons and you want to remove the icon column, you can override the built-in CSS of the control. The rules will differ for the Classic and Lightweight render modes.

- Lightweight RenderMode  

 ````ASPX
<style>
    div.RadMenu .rmGroup:before
    {
        width: 0px; /*remove the colored stripe from the left side*/
    }

    div.RadMenu .rmGroup .rmLink
    {
        padding-left: 0px; /*remove the text padding from the left side*/
    }

    div.RadMenu .rmGroup .rmSeparator
    {
        margin-left: 0px;/*stretch the separator*/
    }
</style>
<telerik:RadMenu runat="server" ID="RadMenu1" RenderMode="Lightweight" Skin="Bootstrap">
    <Items>
        <telerik:RadMenuItem Text="first">
            <Items>
                <telerik:RadMenuItem Text="one"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="two" IsSeparator="true"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="three"></telerik:RadMenuItem>
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="second"></telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
 ````


- ClassicRenderMode

 ````ASPX
<style>
    .rmGroup .rmLink .rmText {
    margin: 0 0 0 -24px !important;
    }
    .RadMenu .rmGroup .rmImage,
    .RadMenu .rmGroup .rmLeftImage {
    display: none;
    }
</style>
<telerik:RadMenu runat="server" ID="RadMenu1" RenderMode="Classic" Skin="Bootstrap">
    <Items>
        <telerik:RadMenuItem Text="first">
            <Items>
                <telerik:RadMenuItem Text="one"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="two"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="three"></telerik:RadMenuItem>
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem Text="second"></telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
 ````


 