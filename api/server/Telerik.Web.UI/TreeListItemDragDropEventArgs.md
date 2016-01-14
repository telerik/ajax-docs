---
title: Telerik.Web.UI.TreeListItemDragDropEventArgs
page_title: Telerik.Web.UI.TreeListItemDragDropEventArgs
description: Telerik.Web.UI.TreeListItemDragDropEventArgs
---

# Telerik.Web.UI.TreeListItemDragDropEventArgs

Contains event data in an E:Telerik.Web.UI.RadTreeList.ItemDrop event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.TreeListItemDragDropEventArgs

## Properties

###  Canceled `Boolean`

Gets or sets a value indicating whether the event should be canceled. Canceling
            an  event will prevent automatic item reordering when binding
            to data source controls through DataSourceID.

###  DestinationDataItem `TreeListDataItem`

Gets the destination  instance. Can be null.

###  DestinationHeaderItem `TreeListHeaderItem`

Gets the destination  instance. Can be null.

###  DraggedItems `TreeListDataItemCollection`

Gets the collection of dragged items

###  ExpandTargetItem `Boolean`

Gets or sets a value indicating whether the target  should
            be expanded after an automatic reorder operation. Meaningful when automatic reordering
            is enabled in .

###  HtmlElement `String`

Gets the client-side ID attribute of the HTML element that is the drop target.

###  UpdatedParentKeyValues `IDictionary`

Gets the collection of parent data key values that will be assigned to the dragged items 
            when automatic item reordering is enabled. To change the parent-child relations between
            the dragged items and the destination item, each item in the DraggedItems collection 
            will have its parent data key values updated with values in this collection.

