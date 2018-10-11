---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadMenu for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: menu/accessibility-and-internationalization/wai-aria-support
tags: wai,aria,support
published: True
position: 5
---

# WAI-ARIA Support


This article demonstrates how you can take advantage of the WAI-ARIA support of the **RadMenu**. The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make Web content and Web applications more accessible to people with disabilities. In order to enable the WAI-ARIA support, set the **EnableAriaSupport** property of **RadMenu** to **true** as shown in the example below.

**Example 1:** Setting **EnalbeAriaSupport** property for **RadMenu**. 



````ASPNET
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" EnableAriaSupport="true">
    <Items>
        <telerik:RadMenuItem runat="server" Text="Root RadMenuItem1">
            <Items>
                <telerik:RadMenuItem runat="server" Text="Child RadMenuItem1">
                </telerik:RadMenuItem>
                <telerik:RadMenuItem runat="server" Text="Child RadMenuItem2">
                </telerik:RadMenuItem>
            </Items>
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" Text="Root RadMenuItem2">
            <Items>
                <telerik:RadMenuItem runat="server" Text="Child RadMenuItem1">
                </telerik:RadMenuItem>
                <telerik:RadMenuItem runat="server" Text="Child RadMenuItem2">
                </telerik:RadMenuItem>
            </Items>
        </telerik:RadMenuItem>
    </Items>
</telerik:RadMenu>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadMenu1.EnableAriaSupport = true;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadMenu1.EnableAriaSupport = True
End Sub
````


>tip The implementation of the **WAI-ARIA** support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate **WAI-ARIA** roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>

>tip In IE by default JAWS focuses the parent items and returns "Your browser does not support inline frames or is currently configured not to display them." This is caused by rendered iframes in the **rmSlide** element of the **RadMenu** parent item. In order to overcome this behavior you can set **EnableOverlay="false"** (which will prevent the iframe from being rendering). The same is valid for the **RadContextMenu**. 
>

# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
