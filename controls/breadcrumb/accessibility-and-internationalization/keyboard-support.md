---
title: Keyboard Support
page_title: Keyboard Support | RadBreadcrumb for ASP.NET AJAX Documentation
description: Keyboard Support
slug: breadcrumb/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

The keyboard navigation of the RadBreadcrumb is always available.

>caption Keyboard legend

`Enter`
* When the Control is focused and its `Editable` property is set to true, triggers edit mode.
* When an item is focused and the `Navigational` property is set to true, navigates to the URL set to the respective **BreadcrumbItem**.
* When the Breadcrumb is in edit mode, saves the changes, exits edit mode, and focuses on the root item.

`Tab` - When the widget is focused, navigates through the items.

`Esc` - Exits edit mode without saving the changes.

>caption Focus

When the `Editable` property of the breadcrumb is set to *'true'*, in the `AccessKey` property of the Control you can set the desired key for quick navigation to the Breadcrumb.

````ASPX
<telerik:RadBreadcrumb runat="server" ID="RadBreadcrumb1" Editable="true" AccessKey="W">
````

As result Alt + W focuses the breadcrumb and turns it into edit mode.

