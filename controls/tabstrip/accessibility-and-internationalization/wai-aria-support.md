---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadTabStrip for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: tabstrip/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadTabStrip") It is available as of **2015 Q3**. 

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make Web content and Web applications more accessible to people with disabilities. In order to enable the WAI-ARIA support, set the **RadTabStrip**'s **EnableAriaSupport** property to **true** as shown in the example below.

**Example 1:** Setting **EnalbeAriaSupport** property for **RadTabStrip**. 


````ASPNET
<telerik:RadTabStrip RenderMode="Lightweight" ID="RadTabStrip1" runat="server" EnableAriaSupport="true">
    <Tabs>
        <telerik:RadTab runat="server" Text="Root Tab1">
            <Tabs>
                <telerik:RadTab runat="server" Text="Child Tab1">
                </telerik:RadTab>
				<telerik:RadTab runat="server" Text="Child Tab2">
                </telerik:RadTab>
            </Tabs>
        </telerik:RadTab>
        <telerik:RadTab runat="server" Text="Root Tab2">
        </telerik:RadTab>
		<telerik:RadTab runat="server" Text="Root Tab3">
        </telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
    RadTabStrip1.EnableAriaSupport = true;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadTabStrip1.EnableAriaSupport = True
End Sub
````


>note The implementation of the **WAI-ARIA** support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate **WAI-ARIA** roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


# See Also

 * [WAI-ARIA basic information](http://www.w3.org/WAI/intro/aria)
 
 