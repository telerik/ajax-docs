---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadTreeView for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: treeview/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 4
---

# WAI-ARIA Support


This article demonstrates how you can take advantage of the WAI-ARIA support of the **RadTreeView**. The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make Web content and Web applications more accessible to people with disabilities. In order to enable the WAI-ARIA support, set the **EnableAriaSupport** property of **RadTreeView** to **true** as shown in the example below.

**Example 1:** Setting **EnableAriaSupport** property for **RadTreeView**. 



````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" EnableAriaSupport="true">
    <nodes>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode1">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode runat="server" Text="Root RadTreeNode2">
            <Nodes>
                <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </nodes>
</telerik:RadTreeView>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadTreeView1.EnableAriaSupport = true;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadTreeView1.EnableAriaSupport = True
End Sub
````


>tip The implementation of the **WAI-ARIA** support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate **WAI-ARIA** roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
