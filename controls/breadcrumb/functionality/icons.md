---
title: Icons
page_title: Icons  | RadBreadcrumb for ASP.NET AJAX Documentation
description: Icons 
slug: breadcrumb/functionality/icons
tags: icons
published: True
position: 1
---

# Icons

The Breadcrumb allows to configure the icons of the items and the delimiters. The built-in icons that can be used with the component are listed in the [Kendo UI Web Font Icons](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web#list-of-font-icons) page.

To include a desired icon from the list it is enough to set its name to the respective icon property - `RootIcon`, `DelimiterIcon` of the **RadBreadcrumb**, or `Icon` of each **BreadcrumbItem**.

![Icon types](../images/breadcrumb-functionality-icons-elements.png)

## Root Icon

The root icon is the icon rendered in the RootItem. It is clickable and resets the value of the component when clicked.

The icon of the RootItem can be set via the `RootIcon` property of the **RadBreadcrumb**:

````
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" RootIcon="user">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ToolTip="My Profile" />
        <telerik:BreadcrumbItem Text="Settings" />
        <telerik:BreadcrumbItem Text="Security" />
    </Items>
</telerik:RadBreadcrumb>
````

It can also be set by using the `Icon` property of the respective **BreadcrumbItem**

````
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ToolTip="My Profile" Icon="user" />
        <telerik:BreadcrumbItem Text="Settings" />
        <telerik:BreadcrumbItem Text="Security" />
    </Items>
</telerik:RadBreadcrumb>
````

Both of the code snippets above will have the same result:

![Change RootIcon](../images/breadcrumb-functionality-icons-rootIcon.png)

In case the `RootIcon` is not set explicitly, it gets its default value - "home"

>note If different icons are set to the `RootIcon` property of the **RadBreadcrumb** and to the `Icon` property of **BreadcrumbItem** with type RootItem, the one set to the Item takes effect.
>

>note By default the RootIcon is visible. It can be hidden by setting the `ShowIcon` property of the RootItem to *'false'* 

## Delimiter Icon

The delimiter icon is the icon rendered between the items in the Breadcrumb. It can be set via the `DelimiterIcon` property of the Breadcrumb:

````
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb2" DelimiterIcon="divide">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" />
        <telerik:BreadcrumbItem Text="Item 1" />
        <telerik:BreadcrumbItem Text="Item 2" />
        <telerik:BreadcrumbItem Text="Item 3" />
    </Items>
</telerik:RadBreadcrumb>
````

![DelimiterIcon](../images/breadcrumb-functionality-icons-delimiterIcon.png)


## Item Icon

The icons rendered for each item. It is also clickable and can be configured through the `Icon` property of **BreadcrumbItem**. By default the Item icon is not visible (despite for RootItems). To show the icon for an item set its `ShowIcon` property to *'true'*

````
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" >
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" />
        <telerik:BreadcrumbItem Text="Item 1" Icon="folder-open" ShowIcon="true" />
        <telerik:BreadcrumbItem Text="Item 2" Icon="star" ShowIcon="true" />
        <telerik:BreadcrumbItem Text="Item 3" Icon="circle" ShowIcon="true"/>
    </Items>
</telerik:RadBreadcrumb>
````

![DelimiterIcon](../images/breadcrumb-functionality-icons-itemIcon.png)


## Use the IconClass

The `IconClass` property of **RadBreadcrumb** defines additional classes that will be applied to the &lt;span&gt; containing the font icon. That way each icon can be reached and styled separately.

Sample usage of the `IconClass` property is shown below:

![IconClass usage](../images/breadcrumb-functionality-icons-iconClass.png)

And the code to achieve this appearance:

````
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb2" Skin="Silk" >
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" IconClass="largeGreenIcon" />
        <telerik:BreadcrumbItem Text="Controls" ShowIcon="true" Icon="folder-open"  />
        <telerik:BreadcrumbItem Text="RadBreadcrumb" />
        <telerik:BreadcrumbItem Text="Functionality" ShowIcon="true" Icon="folder-open" />
        <telerik:BreadcrumbItem Text="Items" Icon="star" ShowIcon="true" IconClass="largeGreenIcon" />
    </Items>
</telerik:RadBreadcrumb>
<style>
    .largeGreenIcon {
        font-size: 2em;
        color: green;
    }
</style>
````


