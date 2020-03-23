---
title: Telerik.Web.UI.RadLightBox
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadLightBox
slug: Telerik.Web.UI.RadLightBox
---

# Telerik.Web.UI.RadLightBox  

## Inheritance Hierarchy

* *[Telerik.Web.UI.RadLightBox]({%slug Telerik.Web.UI.RadLightBox%})*


## Methods

###  hide

Hides the LightBox control

#### Parameters

#### Returns

`None` 

### first

Shows the first page/image

#### Parameters

#### Returns

`None` 

### get_currentItemIndex

Returns a number represents the current index of the Item

#### Parameters

#### Returns

`None` 

### get_items

Returns a collection of RadLightBox items

#### Parameters

#### Returns

`None` 

### get_loopItems

Returns a boolean variable which shows whether the slide show will begin from the start page after the last one has been reached

#### Parameters

#### Returns

`None` 

### get_modal

Returns a boolean variable which shows whether the window will close when click outside of the container

#### Parameters

#### Returns

`None` 

### get_navigationMode

Returns a value which represents the chosen navigation mode

#### Parameters

#### Returns

`None` 

### last

Shows the last page/image

#### Parameters

#### Returns

`None` 

### navigateTo

A method which navigate to an item having the provided index

#### Parameters

#### Returns

`None` 

### next

Navigates to the next page/image

#### Parameters

#### Returns

`None` 

### prev

Navigates backward to the previous page/image

#### Parameters

#### Returns

`None` 

### set_animation

A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxAnimationType.(Fade, Resize, None)

#### Parameters

#### Returns

`None` 


### set_currentItemIndex

A method which set an index to the current item.

#### Parameters

#### Returns

`None` 

### set_loopItems

Determines whether the slide show will begin from the start page after the last one has been reached

#### Parameters

#### Returns

`None` 

### set_modal

Accepts true or false as an argument. When its enable the window can be closed by clicking outside of its frame.

#### Parameters

#### Returns

`None` 

### set_navigationMode

A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxNavigationMode.Button or
		    Telerik.Web.UI.LightBoxNavigationMode.Zone.

#### Parameters

#### Returns

`None` 

### showCloseButton

Determines whether the close button will be displayed in the LightBox

#### Parameters

#### Returns

`None` 

### showNextButton

Determines whether the next button will be displayed in the LightBox

#### Parameters

#### Returns

`None` 

### showPrevButton

Determines whether the previous button will be displayed in the LightBox

#### Parameters

#### Returns

`None` 


## Events

### closing

Fires before closing the LightBox popup

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### destroying

Fires before disposing the control

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### showing

Fires before opening the LightBox popup

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### load

Fires when the control is loaded

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Sys.EventArgs`

The event arguments. 


### closed

Fires when the popup is closed

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### showed

Fires when the popup is opened

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Sys.EventArgs`

The event arguments. 

### navigating

Fires when the user navigates out of the current page

#### Event Data

##### sender `Telerik.Web.UI.RadLightBox`

The instance of the RadLightBox raised the event.

##### args `Telerik.Web.UI.LightBoxNavigatingEventArgs`

The event arguments. 


