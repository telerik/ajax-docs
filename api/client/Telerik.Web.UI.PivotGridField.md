---
title: Telerik.Web.UI.PivotGridField
page_title: Client-side API Reference
description: Telerik.Web.UI.PivotGridField
slug: Telerik.Web.UI.PivotGridField
---

# Telerik.Web.UI.PivotGridField : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.PivotGridField]({%slug Telerik.Web.UI.PivotGridField%})*


## Methods

###  get_aggregate

Gets the aggregate operator of the field.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridAggregate`  The aggregate operator of the field.

### get_nextField

Gets the field positioned after the current field.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridField` Returns the field positioned after the current field.

### get_owner

Gets the owner pivot grid.

#### Parameters

#### Returns

`Telerik.Web.UI.RadPivotGrid` The owner pivot grid.

### get_previousField

Gets the field positioned before the current field.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridField` Returns the field positioned before the current field.

### get_uniqueName

Gets the unique name of the field which is assigned dynamically during runtime or set by the user.

#### Parameters

#### Returns

`String` The unique name.

### get_zoneIndex

Gets the zone index of the field which determines its position in the same zone.

#### Parameters

#### Returns

`Number` The zone index of the field which determines its position in the same zone.

### get_zoneType

Gets the zone type of the field which determines in which zone the field is positioned.

#### Parameters

#### Returns

`Telerik.Web.UI.PivotGridFieldZoneType`  The zone type of the field which determines in which zone the field is positioned.

### hide

Performs postback and sets the field IsHidden property to true which excludes the field from the pivot table calculations.

#### Parameters

#### Returns

`None` 

### show

Performs postback and calls the Show function of the field server-side in order to sets the IsHidden property to false and sets the ZoneIndex so the field will be placed as last in the zone

#### Parameters

#### Returns

`None` 

### tryReorder

Tries to reorder the field with new ZoneType and/or new ZoneIndex.

#### Parameters

##### zoneType `Telerik.Web.UI.PivotGridFieldZoneType`

 The new ZoneType for the field

##### zoneIndex `Number`

The new ZoneIndex for the field

#### Returns

`Boolean` If the reorder happened or not which could happen if the zoneType and zoneIndex are the same



