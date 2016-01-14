---
title: Telerik.Web.UI.MapClientEvents
page_title: Telerik.Web.UI.MapClientEvents
description: Telerik.Web.UI.MapClientEvents
---

# Telerik.Web.UI.MapClientEvents

Defines the client events handlers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.MapClientEvents : IDefaultCheck

## Properties

###  OnBeforeReset `String`

Fired immediately before the map is reset. This event is typically used for cleanup by layer implementers.

###  OnClick `String`

Fired when the user clicks on the map.

###  OnInitialize `String`

Gets or sets the client-side script that executes when a RadMap client-initialize event is raised.

###  OnLoad `String`

Gets or sets the client-side script that executes when a RadMap client-load event is raised.

###  OnMarkerActivate `String`

Fired when a marker has been displayed.

###  OnMarkerClick `String`

Fired when a marker has been clicked or tapped.

###  OnMarkerCreated `String`

Fired when a marker has been created and is about to be displayed. Cancelling the event will prevent the marker from being shown.

###  OnPan `String`

Fired while the map viewport is being moved.

###  OnPanEnd `String`

Fires after the map viewport has been moved.

###  OnReset `String`

Fired when the map is reset. This typically occurs on initial load and after a zoom/center change.

###  OnShapeClick `String`

Fired when a shape is clicked or tapped.

###  OnShapeCreated `String`

Fired when a shape is created, but is not rendered yet.

###  OnShapeMouseEnter `String`

Fired when the mouse enters a shape.

###  OnShapeMouseLeave `String`

Fired when the mouse leaves a shape.

###  OnZoomEnd `String`

Fired when the map zoom level has changed.

###  OnZoomStart `String`

Fired when the map zoom level is about to change. Cancelling the event will prevent the user action.

