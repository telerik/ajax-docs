---
title: Telerik.Web.UI.RadTreeViewContextMenuEventArgs
page_title: Telerik.Web.UI.RadTreeViewContextMenuEventArgs
description: Telerik.Web.UI.RadTreeViewContextMenuEventArgs
---

# Telerik.Web.UI.RadTreeViewContextMenuEventArgs

Provides data for the E:Telerik.Web.UI.RadTreeView.ContextMenuItemClick ContextMenuItemClickevent of the Telerik.Web.UI.RadTreeView RadTreeViewcontrol. This class cannot be inherited.

#### Remarks
The E:Telerik.Web.UI.RadTreeView.ContextMenuItemClick ContextMenuItemClickevent is raised
            		when an item in the Telerik.Web.UI.RadTreeViewContextMenu RadTreeViewContextMenuof the
            		Telerik.Web.UI.RadTreeView RadTreeViewcontrol is clicked.
            		A click on a Telerik.Web.UI.RadTreeViewContextMenu RadTreeViewContextMenuitem of the
            		Telerik.Web.UI.RadTreeView RadTreeViewmakes a postback only if an event handler is attached
            		to the E:Telerik.Web.UI.RadTreeView.ContextMenuItemClick ContextMenuItemClickevent.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.RadTreeViewContextMenuEventArgs

## Properties

###  MenuItem `RadMenuItem`

Gets the referenced RadMenuItem in the
                RadTreeViewContextMenu control
            	when the event is raised.

#### Remarks
Use this property to programmatically access the item referenced in the
                RadTreeViewContextMenu when the event is raised.

###  Node `RadTreeNode`

Gets the referenced RadTreeNode in the
                RadTreeView control when the event is raised.

#### Remarks
Use this property to programmatically access the item referenced in the
                RadTreeNode when the event is raised.

