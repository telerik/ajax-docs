---
title: Enhancing User Experience with Loading Indicators in Telerik RadMenu
description: This article provides a solution for integrating the RadAjaxLoadingPanel with the navigation process in a web application that uses Site Pages with a RadMenu.
type: how-to
page_title: How to Integrate RadAjaxLoadingPanel with Navigation in Site Pages
slug: menu-integrating-radajaxloadingpanel-navigation-site-pages
tags: radajax, radmenu, radajaxloadingpanel, site pages
res_type: kb
---
## Environment
| Product | Version |
|---------|---------|
| RadAjax for ASP.NET AJAX | all |

## Description
A common scenario involves a web application using a Site Master Page with Telerik's RadMenu (mnuMain). The challenge faced is how to show the RadAjaxLoadingPanel while the page is navigating to the selected item's URL. Traditional methods using the NavigateUrl property or the onbeforeunload event have limitations and inconsistencies.

## Solution
The solution involves a client-side JavaScript approach, enhancing the user interaction by displaying the loading panel before navigating to a new page. The key steps are:

1. Remove the NavigateUrl Property: On the server side, remove the NavigateUrl attribute from the RadMenu items. This prevents the standard navigation process, allowing for custom handling.
1. Handle Navigation with JavaScript: Utilize the OnClientItemClicked event of the RadMenu to show the RadAjaxLoadingPanel.
1. Implement a Delay for Navigation: Use JavaScript's setTimeout function to delay the navigation. This ensures the loading panel is displayed, providing users with visual feedback that a new page is loading.

Here is a simplified example showcasing this solution:

ASP.NET Markup:

````ASPX
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="mnuMain">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="mnuMain" LoadingPanelID="RadAjaxLoadingPanel1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadAjaxLoadingPanel ID="RadAjaxLoadingPanel1" runat="server"></telerik:RadAjaxLoadingPanel>
<telerik:RadScriptBlock ID="ScriptBlock1" runat="server">
    <script type="text/javascript">
        function onMenuItemClicked(sender, eventArgs) {
            var item = eventArgs.get_item();
            var navigateUrl = item.get_attributes().getAttribute("NavigateUrlAttribute");

            if (navigateUrl) {
                var loadingPanel = $find("<%= RadAjaxLoadingPanel1.ClientID %>");
                loadingPanel.show("<%= mnuMain.ClientID %>");
                setTimeout(function () {
                    window.location.href = navigateUrl;
                }, 1000); // Delay navigation
            }
        }
    </script>
</telerik:RadScriptBlock>
<telerik:RadMenu ID="mnuMain" OnClientItemClicked="onMenuItemClicked" runat="server" Skin="Office2010Blue">
    <Items>
        <!-- Sample Menu Item with Custom Navigate URL Attribute -->
        <telerik:RadMenuItem Text="Home" NavigateUrlAttribute="HomePage.aspx"></telerik:RadMenuItem>
        <!-- Other Menu Items -->
    </Items>
</telerik:RadMenu>
````

In this implementation, the NavigateUrl attribute is replaced with a custom attribute NavigateUrlAttribute. This custom attribute is then used in the JavaScript function onMenuItemClicked to navigate to the desired page after showing the loading panel.
 
