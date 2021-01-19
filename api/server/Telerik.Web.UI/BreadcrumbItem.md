---
title: Telerik.Web.UI.BreadcrumbItem
page_title: Telerik.Web.UI.BreadcrumbItem
description: Telerik.Web.UI.BreadcrumbItem
---

# Telerik.Web.UI.BreadcrumbItem

Array of items to be rendered in Breadcrumb.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.BreadcrumbItem : IAttributeAccessor

## Properties

###  Disabled `Boolean`

Defines whether the item is disabled. Default value is false.

###  Href `String`

Defines the navigation link's url of the item (rendered if navigation is true).

###  Icon `String`

Defines the icon to be rendered.

###  IconClass `String`

Defines the icon classes (the span element).

###  ItemClass `String`

Defines the item classes (the li element).

###  LinkClass `String`

Defines the link classes (the a element).

###  ShowIcon `String`

Defines whether to show the icon. Default value is true for rootItem and false for item.

###  ShowText `String`

Defines whether to show the text. Default value is false for rootItem and true for item.

###  Text `String`

Defines the text of the item.

###  ToolTip `String`

Defines the title of the item that will be used as a tooltip.

###  Type `BreadcrumbItemType`

The mode used to render the items. The available modes are: - item - renders the items with text and no icon by default - rootitem - renders the item as root item with icon and no text by default

