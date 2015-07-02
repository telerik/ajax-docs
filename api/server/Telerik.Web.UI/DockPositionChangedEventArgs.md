---
title: Telerik.Web.UI.DockPositionChangedEventArgs
page_title: Telerik.Web.UI.DockPositionChangedEventArgs
description: Telerik.Web.UI.DockPositionChangedEventArgs
---

# Telerik.Web.UI.DockPositionChangedEventArgs

Provides data for the DockPositionChanged event.

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.DockPositionChangedEventArgs

## Properties

###  DockZoneID `String`

Contains the ClientID of the dock zone the dock has been dropped to. 
            If the dock was not dropped in a zone (undocked) the value will be 
            string.Empty.

###  Index `Int32`

Contains the index of the dock in the new dock zone.

###  IsDragged `Boolean`

Gets a bool value indicating whether the RadDock is actually dragged or just it changed its position in the zone, or changed zone itself.

