---
title: Telerik.Web.UI.RadBaseTile
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadBaseTile
slug: Telerik.Web.UI.RadBaseTile
---

# Telerik.Web.UI.RadBaseTile  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadBaseTile]({%slug Telerik.Web.UI.RadBaseTile%})*


## Methods

### clearPeekHideInterval

Clears the time interval set by the CloseDelay property of the peek template settings

#### Parameters

#### Returns

`None` 

### clearPeekShowInterval

Clears the time interval set by the ShowInterval property of the peek template settings

#### Parameters

#### Returns

`None` 

### clearShowHideIntervals

Clears both time interval set by the ShowInterval and CloseDelay properties of the peek template settings

#### Parameters

#### Returns

`None` 

### get_hidePeekTemplateOnMouseOut

Returns if the peek template should be hidden on mouse out

#### Parameters

#### Returns

`Boolean` 

### get_id

Returns the Id property of a tile.

#### Parameters

#### Returns

`String` 

### get_name

Returns the Name property of a tile

#### Parameters

#### Returns

`String` 

### get_navigateUrl

Gets the URL of the page to navigate to, without posting the page back to the server

#### Parameters

#### Returns

`String` 

### get_peekAnimationManager

Returns the PeekAnimationManager responsible for showing / hiding the peek template

#### Parameters

#### Returns

`Telerik.Web.UI.Tile.PeekAnimationManager` 

### get_peekCloseDelay

Sets the interval after which the peek template is hidden, the interval is in milliseconds.

#### Parameters

#### Returns

`Number` 

### get_peekShowInterval

Returns the interval after which the peek template is shown

#### Parameters

#### Returns

`Number` Interval in milliseconds

### get_selected

Returns if the tile is selected

#### Parameters

#### Returns

`Boolean` 

### get_showPeekTemplateOnMouseOver

Returns if the peek template should be shown on mouse over

#### Parameters

#### Returns

`Boolean` 

### get_target

Gets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked

#### Parameters

#### Returns

`String` 

### get_tileType

Returns the name of the tile type

#### Parameters

#### Returns

`String` The name of the tile type

### hidePeekTemplate

Hides the peek template

#### Parameters

#### Returns

`None` 

### set_hidePeekTemplateOnMouseOut

Sets if the peek template should be hidden on mouse out

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_name

Sets the Name property of a tile

#### Parameters

##### value `String`

#### Returns

`None` 

### set_navigateUrl

Sets the URL of the page to navigate to, without posting the page back to the server

#### Parameters

##### value `String`

#### Returns

`None` 

### set_peekCloseDelay

Sets the interval after which the peek template is hidden

#### Parameters

##### value `Number`

Interval in milliseconds

#### Returns

`None` 

### set_peekShowInterval

Sets the interval after which the peek template is shown

#### Parameters

##### value `Number`

Interval in milliseconds

#### Returns

`None` 

### set_selected

Sets the selected state of the tile

#### Parameters

##### value `Boolean`

##### triggerEvents `Boolean`

If false the selecting and selected client events are not fired.

#### Returns

`None` 

### set_showPeekTemplateOnMouseOver

Sets if the peek template should be shown on mouse over

#### Parameters

#### Returns

`Boolean` 

### set_target

Sets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked

#### Parameters

##### value `String`

#### Returns

`None` 

### setBadgeImageUrl

Sets the badgeData.imageUrl property and updates the image in the bottom right corner of the tile.

#### Parameters

##### imageUrl `String`

#### Returns

`None` 

### setBadgePredefinedType

Sets the badgeData.predefinedType property and updates the image in the bottom right corner of the tile.

#### Parameters

##### predefindedType `String`

#### Returns

`None` 

### setBadgeValue

Sets the badgeData.value property and updates the number displayed in the bottom right corner of the tile.

#### Parameters

##### value `Number`

#### Returns

`None` 

### setTitleImageUrl

Sets the titleData.imageUrl property and updates the title image in the bottom left corner of the tile.

#### Parameters

##### imageUrl `String`

#### Returns

`None` 

### setTitleText

Sets the titleData.text property and updates the title text displayed in the bottom left corner of the tile.

#### Parameters

##### text `String`

#### Returns

`None` 

### showPeekTemplate

Shows the peek template

#### Parameters

#### Returns

`None` 

### startPeekHideInterval

Starts the time interval set by the CloseDelay property of the peek template settings

#### Parameters

#### Returns

`None` 

### startPeekShowInterval

Starts the time interval set by the ShowInterval property of the peek template settings

#### Parameters

#### Returns

`None` 

### toggleSelection

Toggles the selection state of the tile

#### Parameters

#### Returns

`None` 


## Events

### selected

Raised after a Tile is selected. 

#### Event Data

##### sender `Telerik.Web.UI.RadBaseTile`

The RadBaseTile instance raised the event.

##### args `Telerik.Web.UI.TileEventArgs`

The arguments of the Selected event.

### clicked

Raised after a Tile is selected.

#### Event Data

##### sender `Telerik.Web.UI.RadBaseTile`

The RadBaseTile instance raised the event.

##### args `Telerik.Web.UI.TileEventArgs`

The arguments of the Clicked event.
### clicking

Raised just before a Tile is clicked and therefore before the server-side OnClick event. The event can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadBaseTile`

The RadBaseTile instance raised the event.

##### args `Telerik.Web.UI.TileCancelEventArgs`

The arguments of the Clicking event.

### selecting

Raised just before a Tile is selected. The event can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadBaseTile`

The RadBaseTile instance raised the event.

##### args `Telerik.Web.UI.TileCancelEventArgs`

The arguments of the Clicking event.

### load

Raised when the client-side object of the Tile is fully loaded.

#### Event Data

##### sender `Telerik.Web.UI.RadBaseTile`

The RadBaseTile instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### init

Raised when the client-side object of the Tile is initialized.

#### Event Data

##### sender `Telerik.Web.UI.RadBaseTile`

The RadBaseTile instance raised the event.

##### args `Sys.EventArgs`

Empty event argument.


