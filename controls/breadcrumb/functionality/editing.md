---
title: Editing
page_title: Editing - RadBreadcrumb
description: Check our Web Forms article about Editing.
slug: breadcrumb/functionality/editing
tags: editing
published: True
position: 2
---

# Editing

When the `Editable` property of the breadcrumb is set to *'true'* you can edit the path set as Value of the control. When you click in an empty area of the component or on the current page, the Breadcrumb will enter into editing mode. The Breadcrumb will be transformed into an Input and let the user update its contents dynamically.

>caption Figure 1:

![Turn into Edit mode](../images/breadcrumb-functionality-editing-sample.gif)

Editing mode shows an input field containing the current value of the widget. Users are allowed to type a new path.

Declaration of the RadBreadcrumb shown in **Figure 1**:

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" Editable="true">
    <Items>
        <telerik:BreadcrumbItem Type="RootItem" />
        <telerik:BreadcrumbItem Text="Item 1" />
        <telerik:BreadcrumbItem Text="Item 2" />
        <telerik:BreadcrumbItem Text="Item 3" Icon="star" ShowIcon="true" />
    </Items>
</telerik:RadBreadcrumb>
````

Test this feature in the [Editing demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/functionality/editing/defaultcs.aspx)


# See Also

 * [Editing demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/functionality/editing/defaultcs.aspx)

 

 
