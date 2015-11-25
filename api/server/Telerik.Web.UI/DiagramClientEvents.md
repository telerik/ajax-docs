---
title: Telerik.Web.UI.DiagramClientEvents
page_title: Telerik.Web.UI.DiagramClientEvents
description: Telerik.Web.UI.DiagramClientEvents
---

# Telerik.Web.UI.DiagramClientEvents

Defines the client events handlers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.DiagramClientEvents : IDefaultCheck

## Properties

###  OnLoad `String`

Fired when the diagram control is loaded on the page

###  OnAdd `String`

Fired when the user adds new shape or connection.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnCancel `String`

Fired when the user clicks the "cancel" button in the popup window in case the item was added via a toolbar.

###  OnChange `String`

Fired when an item is added or removed to/from the diagram.

###  OnClick `String`

Fired when the user clicks on a shape or a connection.

###  OnDataBound `String`

Fired when the widget is bound to data from dataDource and connectionsDataSource.The event handler function context (available via the this keyword) will be set to the widget instance.

###  OnEdit `String`

Fired when the user edits a shape or connection.

###  OnItemBoundsChange `String`

Fired when the location or size of an item are changed.

###  OnItemRotate `String`

Fired when an item is rotated.

###  OnMouseEnter `String`

Fired when the mouse enters a shape or a connection.Will not fire for disabled items.

###  OnMouseLeave `String`

Fired when the mouse leaves a shape or a connection.Will not fire for disabled items.

###  OnPan `String`

Fired when the user pans the diagram.

###  OnRemove `String`

Fired when the user delete a shape or connection.

###  OnSave `String`

Fired when the user saved a shape or a connection.

###  OnSelect `String`

Fired when the user selects one or more items.

###  OnZoomEnd `String`

Fired when the user changes the diagram zoom level.

###  OnZoomStart `String`

Fired when the user starts changing the diagram zoom level.

