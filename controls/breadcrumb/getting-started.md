---
title: Getting Started 
page_title: Getting Started  | RadBreadcrumb for ASP.NET AJAX Documentation
description: Getting Started 
slug: breadcrumb/getting-started
tags: getting,started,
published: True
position: 1
---

# Getting Started 

The following tutorial demonstrates how you can add the RadBreadcrumb control and customize it by setting some of its properties.

>caption Figure 1: RadBreadcrumb

![Breadcrumb overview](images/breadcrumb-gettingstarted-sampleuse.png)

1. Add a **ScriptManager** control on a Web Form.

1. Add a **RadBreadcrumb** control to the page, and set the desired properties:

    * `DelimiterIcon` - Defines the name of an existing icon in the [Kendo UI Web Font Icons](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web#list-of-font-icons). The icon will be applied as a separator between the segments of the Breadcrumb path. The default value is *"arrow-chevron-right"*.
    * `Navigational` - Indicates whether the navigation functionality of the Breadcrumb will be enabled/disabled. When **Navigational** is set to *"true"*, the URL (path) will be automatically added to the *href* attribute of the rendered links. In this state, the click event will trigger navigation. The default value is *"false"*.
    * `RootIcon` - Defines the name of an existing icon in the [Kendo UI Web Font Icons](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web#list-of-font-icons). The icon will be applied as the first item(root) of the Breadcrumb path. The root icon is clickable and resets the value of the component. The default value is *"home"*.

1. Define the desired **BreadcrumbItem** instances in the &lt;items&gt; tag and set their properties:

    * `Type` - Specifies if the BreadcrumbItemType is Item(default) or RootItem.
    Item - renders the items with text and no icon; RootItem - renders the item with icon and no text. The default value is *BreadcrumbItemType.Item*.
    * `Href` - Defines the navigation link's url of the item (rendered if navigation is true).
    * `Text` - Defines the text of the item.
    * `Icon` - Defines the icon to be rendered.
    * `ItemClass` - Defines the item classes (applies to the rendered &lt;li&gt; element).
    * `IconClass`- Defines the icon classes (applies to the &lt;span&gt; element).
    * `ShowIcon` - Defines whether to show the icon. Default value is *"true"* for **RootItem** and *"false"* for **Item**.
    * `ShowText` - Defines whether to show the text. Default value is *"false"* for **RootItem** and *"true"* for **Item**.
    * `Disabled` - Defines whether the item is disabled. The default value is *"false"*.

Here is the ASPX declaration to achieve the Breadcrumb shown in Figure 1:

````ASPX
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb3" RootIcon="pin" DelimiterIcon="divide" Editable="true" Skin="Silk" Navigational="true">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" Text="Telerik UI for ASP.NET AJAX" ShowText="true" ItemClass="customRootItem" Href="https://docs.telerik.com/devtools/aspnet-ajax/" />
        <telerik:BreadcrumbItem Text="Controls" ShowIcon="true" Icon="folder-open" Disabled="true" IconClass="customIcon" Href="https://docs.telerik.com/devtools/aspnet-ajax/controls/breadcrumb/overview" />
        <telerik:BreadcrumbItem Text="RadBreadcrumb" ToolTip="RadBreadcrumb" Href="https://docs.telerik.com/devtools/aspnet-ajax/controls/breadcrumb/overview" />
        <telerik:BreadcrumbItem Text="Getting Started" Icon="star" ShowIcon="true" Href="https://docs.telerik.com/devtools/aspnet-ajax/controls/breadcrumb/getting-started" />
    </Items>
</telerik:RadBreadcrumb>
<style>
    .customRootItem {
        font-weight: 900;
        color: #ff6358;
    }
    .customIcon {
        font-size: 2em;
    }
</style>
````

 As a next step, you can check out the [Functionality]({%slug breadcrumb/functionality/items%}) of the RadBreadcrumb.

