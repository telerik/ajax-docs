---
title: Telerik.Web.UI.RadRating
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadRating
slug: Telerik.Web.UI.RadRating
---

# Telerik.Web.UI.RadRating : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadRating]({%slug Telerik.Web.UI.RadRating%})*


## Methods

### get_enabled

Returns a value, indicating whether the rating control is enabled

#### Parameters

#### Returns

`Boolean` The value of the Enabled property

### get_enableToolTips

Returns a value, indicating whether the rating control will display a browser toolip for its values

#### Parameters

#### Returns

`Boolean` A value

### get_isDirectionReversed

Returns a value, indicating whether the direction of the rating control is reversed

#### Parameters

#### Returns

`Boolean` A value

### get_itemCount

Gets the number of items (stars) in the rating control

#### Parameters

#### Returns

`Number` The number of items 

### get_itemData

Array

#### Parameters

#### Returns

`None` 

### get_orientation

Gets the orientation of the rating control

#### Parameters

#### Returns

`Telerik.Web.UI.Orientation` The orientation of the rating control

### get_precision

Gets the rate precision of the rating control

#### Parameters

#### Returns

`Telerik.Web.UI.RatingPrecision` The rate precision of the rating control

### get_readOnly

Returns a value, indicating whether the rating control is in read-only mode

#### Parameters

#### Returns

`Boolean` A value

### get_selectionMode

Gets the selection mode of the rating control

#### Parameters

#### Returns

`Telerik.Web.UI.RatingSelectionMode` The selection mode of the rating control

### get_value

Gets the current value of the rating control

#### Parameters

#### Returns

`Number` The current value of the rating control

### repaint

Repaints the rating control and forces it to recalculate the size of its elements. Use this method when the control is in an initially hidden element

#### Parameters

#### Returns

`None` 

### set_enabled

Sets whether the slider is enabled

#### Parameters

##### value `Boolean`

The new value for the Enabled property

#### Returns

`None` 

### set_precision

Telerik.Web.UI.RatingPrecision

#### Parameters

#### Returns

`None` 

### set_readOnly

Sets a value, indicating whether the rating control is in read-only mode

#### Parameters

##### value `Boolean`

The new value for the ReadOnly property

#### Returns

`None` 

### set_selectionMode

Telerik.Web.UI.RatingSelectionMode

#### Parameters

#### Returns

`None` 

### set_value

Sets the current value of the rating control

#### Parameters

##### value `Number`

The new value for the rating control

#### Returns

`None` 


## Events

### load

The load event occurs when the RadRating control loaded on the page.

#### Event Data

#####  sender `Telerik.Web.UI.RadRating`

The instance of the RadRating raised the event.

#####  eventArgs `Sys.EventArgs`

Empty event argument.
### rated

The rated event is raised after you click an item of the RadRating control therefore after the rating event. It is not cancellable.

#### Event Data

##### sender `Telerik.Web.UI.RadRating`

The instance of the RadRating raised the event.

##### args `Telerik.Web.UI.RatingRatedEventArgs`

The event arguments.

### rating

The rating event is raised just before you click an item of the RadRating control. It is cancellable and precedes the rated event.

#### Event Data

##### sender `Telerik.Web.UI.RadRating`

The instance of the RadRating raised the event.

##### args `Telerik.Web.UI.RatingRatingEventArgs`

The event arguments.  


