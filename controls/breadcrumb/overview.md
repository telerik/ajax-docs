---
title: Overview
page_title: RadBreadcrumb Overview
description: Check our Web Forms article about Overview.
slug: breadcrumb/overview
tags: overview
published: True
position: 0
---

# WebForms Breadcrumb Overview

RadBreadcrumb is an intuitive UI component that allows navigation within a folder structure or web page. It provides an easy way to navigate backwards by one or multiple steps.

RadBreadcrumb is available as of R1 2021 and it is a server-side WebForms wrapper over the [Kendo UI Breadcrumb for jQuery](https://docs.telerik.com/kendo-ui/controls/navigation/breadcrumb/overview) widget.

>caption Figure 1:

![WebForms Breadcrumb overview](images/breadcrumb-overview-basicusage.png "WebForms Breadcrumb Overview")

## Key Features

* [Built-in accessibility, WAI-ARIA and RTL support]({%slug breadcrumb/accessibility-and-internationalization/keyboard-support%})
* [Support for root and child items]({%slug breadcrumb/functionality/items%})
* [Built-in Icons]({%slug breadcrumb/functionality/icons%})
* [Overflowing]({%slug breadcrumb/functionality/overflowing%})
* [Editing functionality]({%slug breadcrumb/functionality/editing%})
* [Built-in navigation support]({%slug breadcrumb/functionality/navigation%})
* [Support for ClientItemTemplate](https://docs.telerik.com/devtools/aspnet-ajax/controls/breadcrumb/functionality/items#clientitemtemplate)
* [Flexible client-side API]({%slug breadcrumb/client-side-programming/overview%})
* [Visual Appeal - shiped with a rich set of skins for easy and consistent styling](#skins)

## Add a RadBreadcrumb Control

To add a RadBreadcrumb similar to the one shown in **Figure 1** follow the steps:

1. Add a **ScriptManager** control on a Web Form.

1. Use the **&lt;telerik:RadBreadcrumb&gt;** tag to declare the Breadcrumb.

1. Use the **&lt;Items&gt;** inner tag to declare each **BreadcrumbItem** and set its properties.

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" Skin="Default">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ShowText="true" Text="Telerik UI for ASP.NET AJAX"  />
        <telerik:BreadcrumbItem Text="Controls" ShowIcon="true" Icon="folder-open" />
        <telerik:BreadcrumbItem Text="RadBreadcrumb" ShowIcon="true" Icon="folder-open" />
        <telerik:BreadcrumbItem Text="Overview" Icon="star" ShowIcon="true" />
    </Items>
</telerik:RadBreadcrumb>
````

## Skins

The RadBreadcrumb control can be styled by setting a desired built-in skin:

>caption Figure 2:

![WebForms Breadcrumb skins](images/breadcrumb-overview-skins.gif "WebForms Breadcrumb Skins")

Find more information about using skins in the [Controlling Visual Appearance]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/overview%}) section.

Go ahead with the [Getting Started]({%slug breadcrumb/getting-started%}) article to learn more about Breadcrumb Control. Also, you can check out the [RadBreadrumb online demos](https://demos.telerik.com/aspnet-ajax/breadcrumb/examples/overview/defaultcs.aspx) to see it in action.


# See Also

 * [Getting Started]({%slug breadcrumb/getting-started%})
 * [RadBreadrumb online demos](https://demos.telerik.com/aspnet-ajax/breadcrumb/examples/overview/defaultcs.aspx)
 * [First Steps with UI for ASP.NET AJAX]({%slug introduction/installation/installing-the-telerik-controls-from-msi-file%}) 
 * [ASP.NET AJAX Breadcrumb](https://www.telerik.com/products/aspnet-ajax/breadcrumb.aspx)

 