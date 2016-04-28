---
title: Telerik.Web.UI.RadDockZone
page_title: Client-side API Reference
description: Telerik.Web.UI.RadDockZone
slug: Telerik.Web.UI.RadDockZone
---

# Telerik.Web.UI.RadDockZone : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadDockZone]({%slug Telerik.Web.UI.RadDockZone%})*


## Methods

### clone

Clones the current Telerik.Web.UI.RadDockZone object.

#### Parameters

##### id `String`

The string that will be set to the UniqueId of the cloned object.

#### Returns

`Telerik.Web.UI.RadDockZone` The cloned Telerik.Web.UI.RadDockZone object.

### dock

Places (docks) the RadDock control in the zone, at the specified (0-offset) position.

#### Parameters

##### radDock `Telerik.Web.UI.RadDock`

 The dock control to be docked.

##### index `Number`

 The 

#### Returns

`None` 

### get_clientID

Gets the client ID of the RadDockZone control.

#### Parameters

#### Returns

`String` The client ID of the RadDockZone control.

### get_docks

Gets the array of all Telerik.Web.UI.RadDock controls placed inside the zone.

#### Parameters

#### Returns

`Array`  The array of all Telerik.Web.UI.RadDock controls placed inside the zone.

### get_fitDocks

Gets the bool value indicating whether the docks are resized to fit within the zone.

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the docks are resized to fit within the zone.

### get_highlightedCssClass

Gets the CSS class that is applied when a dock is over the zone and is about to be docked.

#### Parameters

#### Returns

`String` The CSS class that is applied when a dock is over the zone and is about to be docked.

### get_isHorizontal

Gets the value indicating whether the zone has Horizontal orientaion (Orientation can be Horizontal and Vertical).

#### Parameters

#### Returns

`Boolean` The value indicating whether the zone has Horizontal orientaion.

### get_layoutID

Gets the ID of the Telerik.Web.UI.RadDockLayout that manages the state of the RadDockZone control.

#### Parameters

#### Returns

`String` The ID of the DockLayout that manages the state of the RadDockZone control.

### get_uniqueName

Gets the UniqueName of the control.

#### Parameters

#### Returns

`String` The UniqueName of the control.

### set_fitDocks

Sets a bool value indicating whether the docks are resized to fit within the zone. (Use the FitDocks property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `Boolean`

The value indicating whether the docks should be resized to fit within the zone.

#### Returns

`None` 

### set_highlightedCssClass

Sets a CSS class that is applied when a dock is over the zone and is about to be docked. (Use the HighlightedCssClass property in order for the changes to take effect on the server-side and not on the client-side only)

#### Parameters

##### value `String`

 The CSS class to be applied.

#### Returns

`None` 


