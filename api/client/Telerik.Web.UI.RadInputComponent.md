---
title: Telerik.Web.UI.RadInputComponent
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadInputComponent
slug: Telerik.Web.UI.RadInputComponent
---

# Telerik.Web.UI.RadInputComponent : Sys.Component 

## Inheritance Hierarchy

* Sys.Component
* *[Telerik.Web.UI.RadInputComponent]({%slug Telerik.Web.UI.RadInputComponent%})*


## Methods

###  get_disabledCss

Gets the disabled css of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_emptyMessage

Returns the message that appears when the value is not set

#### Parameters

#### Returns

`String` 

### get_emptyMessageCss

Returns the message Css that appears when the value is not set

#### Parameters

#### Returns

`String` 

### get_enabledCss

Gets the enabled css of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_errorMessage

Gets the error message of RadInputComponent

#### Parameters

#### Returns

`String` 

### get_focusedCss

Gets the focused css of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_hoveredCss

Gets the hovered css of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_initializeOnClient

Returns a Boolean value,initializing the client instance of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_invalidCss

Gets the invalid css of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_isRequired

Returns a Boolean value, indicating whether the value of the input is required

#### Parameters

#### Returns

`Boolean` 

### get_location

Gets the location of RadInputComponent

#### Parameters

#### Returns

`String` 

### get_method

Gets the method of RadInputComponent

#### Parameters

#### Returns

`String` 

### get_readOnlyCss

Gets the read only css of RadInputComponent

#### Parameters

#### Returns

`Boolean` 

### get_selectionOnFocus

Returns the value of the SelectionOnFocus property

#### Parameters

#### Returns

`Telerik.Web.UI.SelectionOnFocus` 

### get_targetControlID

Returns the id of the target control

#### Parameters

#### Returns

`String` 

### get_targetControlIDs

Returns an Array containing the ids of the target inputs

#### Parameters

#### Returns

`Array` 

### get_validateOnEvent

Gets validateOnEvent of RadInputComponent

#### Parameters

#### Returns

`Number` 

### get_validationGroup

Gets the validation group of RadInputComponent

#### Parameters

#### Returns

`String` 

### isValid

Returns a Boolean value, indicating whether the value of the input is valid

#### Parameters

##### inputId `Boolean`

#### Returns

`None` 

### raise_blur

Raises the blur event

#### Parameters

##### args `Sys.EventArgs`

#### Returns

`None` 

### raise_error

Raises the handler for the error event

#### Parameters

##### args `Sys.EventArgs`

#### Returns

`None` 

### raise_focus

Raises the focus event

#### Parameters

##### args `Sys.EventArgs`

#### Returns

`None` 

### raise_keyPress

Raises the keyPress event

#### Parameters

##### args `Sys.EventArgs`

#### Returns

`None` 

### raise_validating

Raises the handler for the validating event

#### Parameters

##### args `Sys.EventArgs`

#### Returns

`None` 

### raiseEvent

Raises the event of RadInputComponent

#### Parameters

##### eventName `String`

##### eventArgs `Sys.EventArgs`

#### Returns

`None` 

### set_disabledCss

Sets the disabled css of RadInputComponent

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_emptyMessage

Sets the message that appears when the value is not set

#### Parameters

##### value `String`

#### Returns

`None` 

### set_emptyMessageCss

Sets the message Css that appears when the value is not set

#### Parameters

##### value `String`

#### Returns

`None` 

### set_enabledCss

Sets the enabled css of RadInputComponent

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_errorMessage

Sets the error message of RadInputComponent

#### Parameters

##### value `String`

#### Returns

`None` 

### set_focusedCss

Sets the focused css of RadInputComponent

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_hoveredCss

Sets the hovered css of RadInputComponent

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_initializeOnClient

Accepts  a Boolean value,initializing the client instance of RadInputComponen

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_invalidCss

Sets the invalid css of RadInputComponent

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_isRequired

Accepts a Boolean value, indicating whether the value of the input is required

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_location

Sets the location of RadInputComponent

#### Parameters

##### value `String`

#### Returns

`None` 

### set_method

Sets the method of RadInputComponent

#### Parameters

##### value `String`

#### Returns

`None` 

### set_readOnlyCss

Sets the read only css of RadInputComponent

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_selectionOnFocus

Accepts the value of the SelectionOnFocus property

#### Parameters

##### value `Telerik.Web.UI.SelectionOnFocus`

#### Returns

`None` 

### set_targetControlID

Accepts the id of the target control

#### Parameters

##### value `String`

#### Returns

`None` 

### set_targetControlIDs

Accepts an Array containing the ids of the target inputs

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_validateOnEvent

Sets validateOnEvent of RadInputComponent

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_validationGroup

Sets the validation group of RadInputComponent

#### Parameters

##### value `String`

#### Returns

`None` 

### success

Returns a Boolean value, indicating success

#### Parameters

##### result `Boolean`

#### Returns

`None` 



## Events

### validating

Occurs before the value being validated.

#### Event Data

##### sender `Telerik.Web.UI.RadInputComponent`

The RadInputComponenet instance raised the event.

##### args `Telerik.Web.UI.InputManagerValidatingEventArgs`

The event arguments. 

### keyUp

Occurs on keyUp DOM event.

#### Event Data

##### sender `Telerik.Web.UI.RadInputComponent`

The RadInputComponenet instance raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### blur

Occurs when the element is blurred. 

#### Event Data

##### sender `Telerik.Web.UI.RadInputComponent`

The RadInputComponenet instance raised the event.

##### args `Telerik.Web.UI.InputManagerEventArgs`

The event arguments. 

### focus

Occurs when the element obtain focus.

#### Event Data

##### sender `Telerik.Web.UI.RadInputComponent`

The RadInputComponenet instance raised the event.

##### args `Telerik.Web.UI.InputManagerEventArgs`

The event arguments. 

### error

Occurs when the input control detects that the user has tried to enter an invalid value.

#### Event Data

##### sender `Telerik.Web.UI.RadInputComponent`

The RadInputComponenet instance raised the event.

##### args `Telerik.Web.UI.InputManagerErrorEventArgs`

The event arguments. 

### valueChanged

Occurs when the values has changed.

#### Event Data

##### sender `Telerik.Web.UI.RadInputComponent`

The RadInputComponenet instance raised the event.

##### args `Telerik.Web.UI.InputManagerValueChangedEventArgs`

The event arguments.

