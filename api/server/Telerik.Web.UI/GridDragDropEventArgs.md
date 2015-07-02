---
title: Telerik.Web.UI.GridDragDropEventArgs
page_title: Telerik.Web.UI.GridDragDropEventArgs
description: Telerik.Web.UI.GridDragDropEventArgs
---

# Telerik.Web.UI.GridDragDropEventArgs

The class holding the event arguments passed when a drag-drop event have fired.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.GridDragDropEventArgs

## Properties

###  DestDataItem `GridDataItem`

Gets the destination  if the row have been dropped over a data item.

###  DraggedItems `IList`1`

Gets a collection of all  dragged items.

###  HtmlElement `String`

Gets the HTML element id attribute of the element on which the row have been dropped.

###  DestinationGrid `RadGrid`

Gets the  control in which a row have been dropped.

###  DropPosition `GridItemDropPosition`

Gets the position at which the user has dragged and dropped the source item(s) with regards to the 
            	destination item.

###  DestinationTableView `GridTableView`

Contains  instance to which belongs the destinationItem

