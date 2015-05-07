---
title: My CSS Rule Does Not Apply
page_title: My CSS Rule Does Not Apply | RadMenu for ASP.NET AJAX Documentation
description: My CSS Rule Does Not Apply
slug: menu/troubleshooting/my-css-rule-does-not-apply
tags: my,css,rule,does,not,apply
published: True
position: 2
---

# My CSS Rule Does Not Apply

## My CSS rule does not apply

**Q:** How come that my CSS rule does not apply to the page?

**A:** Most probably there is a more concrete CSS rule (usually defined in the skin) which overrides your settings. Let's assume you have defined a custom CSS class and you want to apply it to a specific menu item:

````ASPNET
<style type="text/css">
    .MyItem
    {
        color: red;
    }
</style>
<telerik:RadMenu ID="RadMenu1" runat="server">
    <Items>
        <telerik:RadMenuItem Text="Home" CssClass="MyItem">
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````

The foreground color of that menu item won't change. There is a more concrete CSS rule in the skin which overrides the "color" CSS property:

````ASPNET
.RadMenu_Default .rmLink { 
    line-height: 24px; 
    text-decoration: none;
    color: #fff;
}
````

To make your CSS setting apply you can use one of the following techniques:

1. Make your CSS rule more concrete than the one from the skin:

````ASPNET
.RadMenu_Default .rmRootGroup .MyItem { 
    color : red;
}
````

2. Use the "!important" modifier to force your setting:

````ASPNET
.MyItem{ 
    color : red !important; 
 }
````

