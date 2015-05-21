---
title: Telerik.Web.UI.RadTreeViewContextMenuEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadTreeViewContextMenuEventArgs
---

# Telerik.Web.UI.RadTreeViewContextMenuEventArgs : Sys.EventArgs

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.RadTreeViewContextMenuEventArgs]({%slug Telerik.Web.UI.RadTreeViewContextMenuEventArgs%})*

## Methods

### get_menu

Retrieves a reference to the context menu.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenu` 

### get_node

Retrieves a reference to the clicked on node. 

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### get_menuItem

Retrieves a reference to the selected context menu item. You can also call get_menu() from the menu item reference and use the menu to retrieve the other items on the menu.

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenuItem`
