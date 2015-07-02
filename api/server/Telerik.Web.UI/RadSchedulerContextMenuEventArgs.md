---
title: Telerik.Web.UI.RadSchedulerContextMenuEventArgs
page_title: Telerik.Web.UI.RadSchedulerContextMenuEventArgs
description: Telerik.Web.UI.RadSchedulerContextMenuEventArgs
---

# Telerik.Web.UI.RadSchedulerContextMenuEventArgs

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
* Telerik.Web.UI.RadSchedulerContextMenuEventArgs

## Properties

###  MenuItem `RadMenuItem`

Gets the referenced RadMenuItem in the
                RadTreeViewContextMenu control
            	when the event is raised.

#### Remarks
Use this property to programmatically access the item referenced in the
                RadTreeViewContextMenu when the event is raised.

###  Appointment `Appointment`

Gets the referenced RadTreeNode in the
                RadTreeView control when the event is raised.

#### Remarks
Use this property to programmatically access the item referenced in the
                RadTreeNode when the event is raised.

