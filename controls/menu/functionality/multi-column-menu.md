---
title: Multi Column Menu
page_title: Multi Column Menu | RadMenu for ASP.NET AJAX Documentation
description: Multi Column Menu
slug: menu/functionality/multi-column-menu
tags: multi,column,menu
published: True
position: 3
---

# Multi Column Menu



As of **Q3 2009**, **RadMenu** supports multi-column rendering of child items. This feature is controlled through the **GroupSettings** (either **DefaultGroupSettings** or per-item **GroupSettings**) using two properties:

* The **RepeatDirection** property determines the order in which the items are rendered.If this property is set to **RepeatDirection.Vertical**, the items are displayed in columns loaded from top to bottom, then left to right, until all items are rendered. If this property is set to **RepeatDirection.Horizontal**, the items are displayed in rows loaded from left to right, then top to bottom, until all items are rendered. The **RepeatDirection** has no effect if **RepeatColumns** is set to 1 (default).

* The **RepeatColumns** property specifies the number of columns.

>note  **Note:** Scrolling is disabled if multi-column rendering is in effect.
>


## Example

For all menu item groups:

````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" runat="server" ID="RadMenu1" DataSourceID="SiteMapDataSource">
    <DefaultGroupSettings RepeatColumns="2" RepeatDirection="Vertical" />
</telerik:RadMenu>
````

For a specific menu item group:

````ASP.NET
<items>    
    <telerik:RadMenuItem>        
        <GroupSettings RepeatColumns="2" RepeatDirection="Vertical" />    
    </telerik:RadMenuItem>
</items>
````

The default value of RepeatColumns is 1.


