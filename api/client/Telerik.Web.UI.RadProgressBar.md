---
title: Telerik.Web.UI.RadProgressBar
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadProgressBar
---

# Telerik.Web.UI.RadProgressBar  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadProgressBar]({%slug Telerik.Web.UI.RadProgressBar%})*

## Methods

###  get_animationSettings

Returns the animation settings of the progress bar. They are presented with an object literal with the following fields:

#### Parameters

#### Returns

`Object` 

###  get_barType

Telerik.Web.UI.ProgressBarType

#### Parameters

#### Returns

`Telerik.Web.UI.ProgressBarType` 

###  get_chunksCount

BarType

#### Parameters

#### Returns

`Number` 

###  get_enabled

Returns the enabled state of the progress bar.

#### Parameters

#### Returns

`Boolean` 

###  get_label

Returns the label text of the progress bar.

#### Parameters

#### Returns

`String` 

###  get_maxValue

Returns the maximum value of the progress bar.

#### Parameters

#### Returns

`Object` 

###  get_minValue

Returns the minimum value of the progress bar.

#### Parameters

#### Returns

`Object` 

###  get_orientation

Telerik.Web.UI.ProgressBarOrientation

#### Parameters

#### Returns

`Telerik.Web.UI.ProgressBarOrientation` 

###  get_progressWrapper

Returns the progress wrapper DOM element.

#### Parameters

#### Returns

`Object` 

###  get_reversed

Indicates whether the direction of the progress bar is reversed.

#### Parameters

#### Returns

`Boolean` 

###  get_showLabel

Returns the visible state of the label of the progress bar.

#### Parameters

#### Returns

`Boolean` 

###  get_value

Returns the current value of the progress bar.

#### Parameters

#### Returns

`Object` 

###  isCompleted

Returns the completed state of the progress bar.

#### Parameters

#### Returns

`Boolean` 

###  set_animationSettings

Sets the animation settings of the progress bar. They are presented with an object literal with the following fields:

#### Parameters

##### ObjectLiteral `Object`

#### Returns

`Object` 

###  set_enabled

Sets the enabled state of the progress bar.

#### Parameters

##### Boolean `Boolean`

#### Returns

`Object` 

###  set_label

Sets the label text of the progress bar.

#### Parameters

##### String `String`

#### Returns

`Object` 

###  set_showLabel

Sets the visible state of the label of the progress bar.

#### Parameters

##### Boolean `Boolean`

#### Returns

`Object` 

###  set_value

Sets the current value of the progress bar.

#### Parameters

##### Number `Object`

#### Returns

`Object` 

## Events

### initialize

The client-side initialize event is raised when the RadProgressBar client-side object is initialized.

#### Event Data

#####  sender `Telerik.Web.UI.RadProgressBar`

The instance of the RadProgressBar raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### load

The client-side load event is raised when the RadProgressBar client-side object is fully loaded (the full API of the control is available at this point).

#### Event Data

#####  sender `Telerik.Web.UI.RadProgressBar`

The instance of the RadProgressBar raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### valueChanging 

The client-side valueChanging event is raised just before the RadProgressBar value property is changed. You can handle this event in case you want to prevent the current value from changing.

#### Event Data

#####  sender `Telerik.Web.UI.RadProgressBar`

The instance of the RadProgressBar raised the event.

##### args `Telerik.Web.UI.ProgressBarCancelEventArgs`

The event arguments.

### valueChanged

The client-side ValueChanged event is raised after the RadProgressBar value property has been changed.

#### Event Data

#####  sender `Telerik.Web.UI.RadProgressBar`

The instance of the RadProgressBar raised the event.

##### args `Sys.EventArgs`

Empty event argument.

### completed

The client-side completed event is raised when the RadProgressBar reaches its max value.

#### Event Data

#####  sender `Telerik.Web.UI.RadProgressBar`

The instance of the RadProgressBar raised the event.

##### args `Sys.EventArgs`

Empty event argument.