---
title: WAI-ARIA Support
page_title: WAI-ARIA Support | RadWindow for ASP.NET AJAX Documentation
description: WAI-ARIA Support
slug: window/accessibility-and-internationalization/wai-aria-support
tags: wai-aria,support
published: True
position: 3
---

# WAI-ARIA Support

This article demonstrates how to enable and use the WAI-ARIA support of the **RadWindow** and **RadWindowManager** controls.

The [WAI-ARIA Suite](http://www.w3.org/WAI/intro/aria) defines an approach to make web content and web applications more accessible to people with disabilities. **RadWindow** and **RadWindowManager** offer WAI-ARIA support.

In order to enable the WAI-ARIA support, set the **RadWindow** / **RadWindowManager** control's **EnableAriaSupport** property to **true** as shown in the example below.

>caption **Example 1**: Setting the **EnalbeAriaSupport** property for **RadWindow** and **RadWindowManager**

````ASP.NET
<telerik:RadWindow EnableAriaSupport="true" runat="server" ID="RadWindow1"></telerik:RadWindow>
<telerik:RadWindowManager EnableAriaSupport="true" runat="server" ID="RadWindowManager1"></telerik:RadWindowManager>
````
````C#
RadWindow1.EnableAriaSupport = true;
RadWindowManager1.EnableAriaSupport = true;
````
````VB
RadWindow1.EnableAriaSupport = true
RadWindowManager1.EnableAriaSupport = true
````

By enabling the WAI-ARIA support, **RadWindow** and **RadWindowManager** will automatically set the `aria-labelledby` attribute to the id of the dialog's title element. In order to facilitate the WAI-ARIA support, you should configure the dialog with **Title**.    

Optionally, you can adjust the [aria-label](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-label), [aria-labelledby](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-labelledby), and [aria-describedby](http://www.w3.org/WAI/PF/aria/states_and_properties#aria-describedby) attributes by using the **Label**, **LabelledBy** and **DescribedBy** properties in the **AriaSettings** tag.

>note **RadWindowManager** will populate the same aria-related settings to all managed dialogs. If a certain **RadWindow** needs different settings, you should further configure them by using its inner **AriaSettings** tag, and thus, to override the ones derived from **RadWindowManager** (**Example 3**). 

>caption Example 2: Adjusting aria-label and aria-describedby attributes in RadWindow.

````ASP.NET
<telerik:RadWindow runat="server" ID="RadWindow1" EnableAriaSupport="true">
    <AriaSettings Label="Label for this dialog." DescribedBy="describe_dialog" />
    <ContentTemplate>
        <p id="describe_dialog">
            The text here describes the dialog. 
        </p>
    </ContentTemplate>
</telerik:RadWindow>
````

>caption Example 3: Adjusting aria-label and aria-describedby attributes in RadWindowManager.

````ASP.NET
<telerik:RadWindowManager runat="server" ID="RadWindowManager1" EnableAriaSupport="true">
    <AriaSettings LabelledBy="[Element_ID]" />
    <Windows>
        <telerik:RadWindow runat="server" ID="RadWindow1">
            <AriaSettings Label="Label for this dialog." DescribedBy="describe_dialog" />
            <ContentTemplate>
                <p id="describe_dialog">
                    The text here describes the dialog. 
                </p>
            </ContentTemplate>
        </telerik:RadWindow>
    </Windows>
</telerik:RadWindowManager>
````

>caption Example 4: Customizing RadAlert template and adjusting the aria-describedby attribute.

````ASP.NET
<telerik:RadWindowManager runat="server" ID="RadWindowManager2" EnableAriaSupport="true">
    <AriaSettings DescribedBy="describe_id" />
    <AlertTemplate>
        <div class="rwDialogPopup radalert">
            <div class="rwDialogText" id="{0}_message">
                <p>Basic text that does not describe the purpose of this alert.</p>
                <%-- The element assigned in the DescribedBy property will be populated dynamically by calling the radalert() method. --%>
                <p id="describe_id">{1}</p>
            </div>

            <div>
                <a onclick="$find('{0}').close(true);"
                    class="rwPopupButton" href="javascript:void(0);">
                    <span class="rwOuterSpan">
                        <span class="rwInnerSpan">##LOC[OK]##</span>
                    </span>
                </a>
            </div>
        </div>
    </AlertTemplate>
</telerik:RadWindowManager>


<script>
    function pageLoad() {
        $find("<%= RadWindowManager1.ClientID %>").radalert("The text that defines the purpose of the alert dialog.", 200, 200, "Title of the alert");
    }
</script>
````


>note The implementation of the WAI ARIA support is achieved entirely client-side (using JavaScript) by appending different attributes and appropriate WAI-ARIA roles to the DOM elements.	This is done because an HTML document containing ARIA attributes will not pass validation if they are added on the server.


>tip According to the WAI-ARIA specifications, the first input in a dialog should get the focus when the dialog opens.	This is done out of the box for the [RadAlert]({%slug window/alert,-confirm,-prompt-dialogs/radalert-dialog%}), [RadConfirm]({%slug window/alert,-confirm,-prompt-dialogs/radconfirm-dialog%}) and [RadPrompt]({%slug window/alert,-confirm,-prompt-dialogs/radprompt-dialog%}) dialogs.	For custom **RadWindows** this should be done by the developer.


>note  **RadWindows** in the Windows collection of a **RadWindowManager** , or ones dynamically created by a manager,will inherit the value of its **EnableAriaSupport** property.


## See Also

 * [W3C: WAI-ARIA Overview](http://www.w3.org/WAI/intro/aria)

 * [Demo: RadWindow WAI-ARIA Support](http://demos.telerik.com/aspnet-ajax/window/examples/waiariasupport/defaultcs.aspx)
