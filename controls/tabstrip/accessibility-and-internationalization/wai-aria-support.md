---
title: WAI-ARIA Support
page_title: WAI-ARIA Support - RadTabStrip
description: Check our Web Forms article about WAI-ARIA Support.
slug: tabstrip/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 1
---

# WAI-ARIA Support

@[template](/_templates/common/wai-aria-templates.md#intro "control: RadTabStrip") It is available as of **2015 Q3**. 

The [WAI-ARIA Suite](https://www.w3.org/WAI/intro/aria) defines an approach to make Web content and Web applications more accessible to people with disabilities. In order to enable the WAI-ARIA support, set the **RadTabStrip**'s **EnableAriaSupport** property to **true** as shown in the example below.


>caption **Example 1:** Setting **EnableAriaSupport** property for **RadTabStrip**. 

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

>note In order to use WAI-ARIA the form element on the page must have a role attribute set to "application" (`<form id="form1" runat="server" role="application">`). For more information on this requirement see: [W3C: WAI-ARIA](https://www.w3.org/TR/wai-aria/roles#application)
>

>note An issue with the use of WAI-ARIA is that using ARIA attributes results in invalid HTML mark-up. When you run a HTML document containing ARIA attributes through the W3C Validator it shows errors in the results for any ARIA attributes. The reason is that the DOCTYPE declarations do not include any information about the WAI ARIA attributes and you cannot have a valid document which includes elements, attributes, and attribute values, not detailed in its DTD’s.
>

>note The implementation of the **WAI-ARIA** support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate **WAI-ARIA** roles to the DOM elements. This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.
>


Enabling WAI-ARIA support of a **RadTabStrip** will also allow you to adjust the [aria-label](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-label) and [aria-describedby](https://www.w3.org/WAI/PF/aria/states_and_properties#aria-describedby) attributes of the control by using the **Label** and **DescribedBy** properties in the **AriaSettings** tag.

>caption Example 2: Adjusting `aria-label` and `aria-describedby` attributes in **RadTabStrip**.

````ASP.NET
<telerik:RadTabStrip RenderMode="Lightweight" ID="RadTabStrip1" runat="server" EnableAriaSupport="true">
    <AriaSettings Label="Label for this TabStrip." DescribedBy="describe_tabstrip" />
	<Tabs>
        <telerik:RadTab runat="server" Text="Root Tab1">
        </telerik:RadTab>
        <telerik:RadTab runat="server" Text="Root Tab2">
        </telerik:RadTab>
		<telerik:RadTab runat="server" Text="Root Tab3">
        </telerik:RadTab>
    </Tabs>
</telerik:RadTabStrip>
````


# See Also

 * [WAI-ARIA basic information](https://www.w3.org/WAI/intro/aria)
 
 
