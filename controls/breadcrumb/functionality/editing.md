---
title: Editing
page_title: Editing  | RadBreadcrumb for ASP.NET AJAX Documentation
description: Editing 
slug: breadcrumb/functionality/editing
tags: editing
published: True
position: 2
---

# Editing

When the `Editable` property of the breadcrumb is set to *'true'* you can edit the path set as Value of the control. When you click in an empty area of the component or on the current page, the Breadcrumb will enter into editing mode. The Breadcrumb will be transformed into an Input and let the user update its contents dynamically.

![Turn into Edit mode](../images/breadcrumb-functionality-editing-sample.gif)

Editing mode shows an input field containing the current value of the widget. Users are allowed to type a new path.

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

 