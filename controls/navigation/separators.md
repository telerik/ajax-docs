---
title: Separators
page_title: Separators - RadNavigation
description: Check our Web Forms article about Separators.
slug: navigation/separators
tags: separators
published: True
position: 3
---

# Separators

As of 2026 Q2, the navigation layout can be customized through separators. Use separators for grouping nodes into two or more categories. You can also use them to achieve cosmetic effects such as visual dividers between navigation sections.

To set a given navigation node as a separator, set its **IsSeparator** property to **True**. Separator nodes render as empty elements with a visible line - vertical between horizontal root nodes and horizontal between vertical child nodes. Separator nodes do not respond to user clicks, cannot be selected or focused, and are skipped during keyboard navigation.

The example below shows a navigation control with two separator nodes: one between the horizontally flowing root nodes, and one between the vertically flowing child nodes:

````ASP.NET
<telerik:RadNavigation ID="RadNavigation1" runat="server" Skin="Default">
    <Nodes>
        <telerik:NavigationNode Text="Home" />
        <telerik:NavigationNode IsSeparator="true" />
        <telerik:NavigationNode Text="Products">
            <Nodes>
                <telerik:NavigationNode Text="Product A" />
                <telerik:NavigationNode IsSeparator="true" />
                <telerik:NavigationNode Text="Product B" />
                <telerik:NavigationNode Text="Product C" />
            </Nodes>
        </telerik:NavigationNode>
        <telerik:NavigationNode IsSeparator="true" />
        <telerik:NavigationNode Text="About" />
    </Nodes>
</telerik:RadNavigation>
````