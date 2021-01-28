---
title: Navigation
page_title: Navigation - RadBreadcrumb
description: Check our Web Forms article about Navigation.
slug: breadcrumb/functionality/navigation
tags: navigation
published: True
position: 3
---

# Navigation

By setting the `Navigational` property of **RadBreadcrumb** you can determine whether automatic navigation will be enabled or not. When the property is set to *'true'*, the URL(path) set to each **BreadcrumbItem** via its `Href` property  will be added to the *'href'* attribute of the rendered links. In this state, the click event will trigger navigation. By default this functionality is disabled.

The below example demonstrates enabled navigation:

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" Navigational="true">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ToolTip="Telerik UI for ASP.NET AJAX" Href="https://docs.telerik.com/devtools/aspnet-ajax/" />
        <telerik:BreadcrumbItem Text="Controls" Href="https://docs.telerik.com/devtools/aspnet-ajax/" />
        <telerik:BreadcrumbItem Text="RadBreadcrumb" Href="https://docs.telerik.com/devtools/aspnet-ajax/controls/breadcrumb/overview" />
        <telerik:BreadcrumbItem Text="Navigation" Href="https://docs.telerik.com/devtools/aspnet-ajax/controls/breadcrumb/functionality/navigation" />
    </Items>
</telerik:RadBreadcrumb>
````


The `BindToLocation` property allows binding to the location object of the browser on initialization. If enabled, the value of the control will be set to the current URL. In addition, that url will be added to the href attribute of the Breadcrumb items through the If `Navigational` is also set to *'true'*.

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" BindToLocation="true" Navigational="true"></telerik:RadBreadcrumb>
````

You can check out the [RadBreadrumb Navigation demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/functionality/navigation/defaultcs.aspx) to test this functionality.


# See Also

 * [RadBreadrumb Navigation demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/functionality/navigation/defaultcs.aspx)



