---
title: Right-to-left Support
page_title: Right-to-left Support - RadFloatingActionButton
description: Check our Web Forms article about Right-to-left Support.
slug: floatingactionbutton/accessibility-and-internationalization/right-to-left-support
tags: right-to-left,support
published: True
position: 0
---

# Right-to-left Support

The RadFloatingActionButton supports right-to-left (RTL) language locales. In order to turn on the RTL support, you should set the *dir="rtl"* and add the *"k-rtl"* class to the parent element of the Control. The *"k-rtl"* class is needed to ensure the proper orientation of the Icons.

Check out the **[Right-To-Left support Demo for the RadFloatingActionButton](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/rtl/defaultcs.aspx)**

For example you can wrap the FloatingActionButton in a &lt;div dir="rtl" class="k-rtl"&gt; element

````ASP.NET
<div dir="rtl" class="k-rtl">
    <telerik:RadFloatingActionButton runat="server" ID="fabText" Text="Bookmark" Icon="bookmark" Shape="Pill" Size="Small" PositionMode="Absolute" Align="TopEnd">
    </telerik:RadFloatingActionButton>
</div>
````


# See Also

 * [Right-to-Left Support demo](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/rtl/defaultcs.aspx)
 

