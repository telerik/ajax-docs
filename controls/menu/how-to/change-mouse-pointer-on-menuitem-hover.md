---
title: Change Mouse Pointer on MenuItem Hover
page_title: Change Mouse Pointer on MenuItem Hover | RadMenu for ASP.NET AJAX Documentation
description: Change Mouse Pointer on MenuItem Hover
slug: menu/how-to/change-mouse-pointer-on-menuitem-hover
tags: change,mouse,pointer,on,menuitem,hover
published: True
position: 5
---

# Change Mouse Pointer on MenuItem Hover

## 

This example shows how to change the mouse pointer to a "hand" pointer on menu item hover.

You need to add this CSS rule in the <HEAD> section of the page:

````ASP.NET
<style type="text/css">
    .RadMenu_Default .rmLink:hover
    {
        cursor: pointer;
    }
</style>
````


