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

The Breadcrumb allows configuring the icons of the items and the delimiters. The built-in icons that can be used with the component are listed on the [Kendo UI Web Font Icons](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web#list-of-font-icons) page.

To include a desired icon from the list it is enough to set its name to the respective icon property - `RootIcon`, `DelimiterIcon` of the **RadBreadcrumb**, or `Icon` of each **BreadcrumbItem**.

>caption Figure 1:

![Icon types](../images/breadcrumb-functionality-icons-elements.png)

## Root Icon

The root icon is the icon rendered in the RootItem. It is clickable and resets the value of the component when clicked.

>caption Figure 2:

![Change RootIcon](../images/breadcrumb-functionality-icons-rootIcon.png)

>note By default the RootIcon is visible. It can be hidden by setting the `ShowIcon` property of the RootItem to *'false'* 

The icon of the RootItem can be set via the `RootIcon` property of the **RadBreadcrumb** like shown in **Figure 2** above:

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" RootIcon="user">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ToolTip="My Profile" />
        <telerik:BreadcrumbItem Text="Settings" />
        <telerik:BreadcrumbItem Text="Security" />
    </Items>
</telerik:RadBreadcrumb>
````

The same result can be achieved by setting the `Icon` property of the respective **BreadcrumbItem**

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" ToolTip="My Profile" Icon="user" />
        <telerik:BreadcrumbItem Text="Settings" />
        <telerik:BreadcrumbItem Text="Security" />
    </Items>
</telerik:RadBreadcrumb>
````

In case the `RootIcon` is not set explicitly, it gets its default value - "home"

>note If different icons are set to the `RootIcon` property of the **RadBreadcrumb** and to the `Icon` property of **BreadcrumbItem** with type RootItem, the one set to the Item takes effect.

## Delimiter Icon

The delimiter icon is the icon rendered between the items in the Breadcrumb. It can be set via the `DelimiterIcon` property of the Breadcrumb. Check out the sample declaration and **Figure 3** below:

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb2" DelimiterIcon="divide">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" />
        <telerik:BreadcrumbItem Text="Item 1" />
        <telerik:BreadcrumbItem Text="Item 2" />
        <telerik:BreadcrumbItem Text="Item 3" />
    </Items>
</telerik:RadBreadcrumb>
````

>caption Figure 3:

![DelimiterIcon](../images/breadcrumb-functionality-icons-delimiterIcon.png)


## Item Icon

The icons rendered for each item. It is also clickable and can be configured through the `Icon` property of **BreadcrumbItem**. By default, the Item icon is not visible (despite for RootItems). To show the icon for an item set its `ShowIcon` property to *'true'*, like demonstrated below:

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" >
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" />
        <telerik:BreadcrumbItem Text="Item 1" Icon="folder-open" ShowIcon="true" />
        <telerik:BreadcrumbItem Text="Item 2" Icon="star" ShowIcon="true" />
        <telerik:BreadcrumbItem Text="Item 3" Icon="circle" ShowIcon="true"/>
    </Items>
</telerik:RadBreadcrumb>
````

>caption Figure 4:

![DelimiterIcon](../images/breadcrumb-functionality-icons-itemIcon.png)


## Use the IconClass

The `IconClass` property of **RadBreadcrumb** defines additional classes that will be applied to the &lt;span&gt; containing the font icon. That way each icon can be reached and styled separately.

Sample usage of the `IconClass` property is shown in **Figure 5** below:

>caption Figure 5:

![IconClass usage](../images/breadcrumb-functionality-icons-iconClass.png)

And the code to achieve this appearance:

````ASPX
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
 
Go ahead and test the [Icons live demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/functionality/icons/defaultcs.aspx). 

In case you want to replace the built-in icons with external ones, check out [How to Integrate RadBreadcrumb with FontAwesome icons](%slug breadcrumb/how-to/how-to-integrate-radbreadcrumb-with-fontawesome-icons%)


# See Also

 * [Icons live demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/functionality/icons/defaultcs.aspx)
 * [How to Integrate RadBreadcrumb with FontAwesome icons]({%slug breadcrumb/how-to/how-to-integrate-radbreadcrumb-with-fontawesome-icons%})
 * [Kendo UI Web Font Icons](https://docs.telerik.com/kendo-ui/styles-and-layout/icons-web#list-of-font-icons)


