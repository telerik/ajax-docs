---
title: Telerik.Web.UI.RadAjaxLoadingPanel
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadAjaxLoadingPanel : Telerik.Web.UI.RadWebControl

## Methods

###  cloneLoadingPanel

Clones the loading panel element passed as first parameter and the clone is used to be displayed over the element specified by the second parameter

#### Parameters

##### panelElement `Object`

The DOM element of the RadAjaxLoadingPanel

##### updatedElementID `String`

The id of the updated element

#### Returns

`None` 

###  displayLoadingElement

Displays the loading panel element over the updated element

#### Parameters

##### loadingElement `Object`

The DOM element of the RadAjaxLoadingPanel

##### updatedElement `Object`

The DOM element of the updated control

#### Returns

`None` 

###  getElementRectangle

Gets the specified as a parameter element position and dimensions. Example: getElementRactangle(element).top - returns the top position of the element; getElementRactangle(element).left - returns the left position of the element; getElementRactangle(element).width - returns the width of the element; getElementRactangle(element).height - returns the height of the element.

#### Parameters

##### element `Object`

The DOM element which rectangles should be returned

#### Returns

`Object` 

###  get_animationDuration

Gets the time in milliseconds of the animation duration of the RadAjaxLoadingPanel

#### Parameters

#### Returns

`Number` 

###  get_initialDelayTime

Gets the initial delay time of the RadAjaxLoadingPanel

#### Parameters

#### Returns

`Number` 

###  get_isSticky

Gets the value of the IsSticky property of the RadAjaxLoadingPanel

#### Parameters

#### Returns

`Boolean` 

###  get_minDisplayTime

Gets the minimum time in milliseconds that the RadAjaxLoadingPanel will last

#### Parameters

#### Returns

`Number` 

###  get_transparency

Gets the Transparency value of the RadAjaxLoadingPanel in percentage (values 0-100)

#### Parameters

#### Returns

`Number` 

###  get_uniqueID

Gets the unique id of the RadAjaxLoadingPanel

#### Parameters

#### Returns

`String` 

###  get_zIndex

Gets the zIndex of the RadAjaxLoadingPanel

#### Parameters

#### Returns

`Number` 

###  hide

Hides the loading panel which is displayed over the element passed as a parameter

#### Parameters

##### updatedElementID `String`

The id of the updated element

#### Returns

`None` 

###  set_animationDuration

Sets the time in milliseconds of the animation duration of the RadAjaxLoadingPanel

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_initialDelayTime

Sets the initial delay time of the RadAjaxLoadingPanel

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_isSticky

Sets the value of the IsSticky property of the RadAjaxLoadingPanel

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_minDisplayTime

Sets the minimum time in milliseconds that the RadAjaxLoadingPanel will last

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_transparency

Sets the Transparency value of the RadAjaxLoadingPanel in percentage (values 0-100)

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_uniqueID

Sets the unique id of the RadAjaxLoadingPanel

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_zIndex

Sets the zIndex of the RadAjaxLoadingPanel

#### Parameters

##### value `Number`

#### Returns

`None` 

###  show

Displays the loading panel over the element passed as a parameter

#### Parameters

##### updatedElementID `String`

The id of the updated element

#### Returns

`None` 

## Events

### showing

Fire when the Loading element appears.

#### Event Data

#####  sender `Telerik.Web.UI.RadAjaxLoadingPanel`

The instance of the RadAjaxLoadingPanel raised the event.

##### args `Telerik.Web.UI.AjaxLoadingPanelEventArgs`

The event arguments.

### hiding

Fire when the loading element hides.

#### Event Data

#####  sender `Telerik.Web.UI.RadAjaxLoadingPanel`

The instance of the RadAjaxLoadingPanel raised the event.

##### args `Telerik.Web.UI.AjaxLoadingPanelEventArgs` 

The event arguments.

