---
title: Telerik.Web.UI.RadRotator
description: Telerik.Web.UI.RadRotator
slug: Telerik.Web.UI.RadRotator
---

# Telerik.Web.UI.RadRotator : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadRotator]({%slug Telerik.Web.UI.RadRotator%})*


## Methods

### addRotatorItem

Creates and adds a new item to the RadRotator's client-side item collection. The item will not exist in the rotator's items collection on the server

#### Parameters

##### radRotatorItemData `Object`

This parameter needs to have the following 3

##### index `Number`

The position at which the item will be added. If nothing is passed the item will be appended to the end of the collection.

#### Returns

`None` 

### clearItems

Clears all the items of the RadRotator's items collection.

#### Parameters

#### Returns

`None` 

### dataBind

Data binds the data of the RadRotator.

#### Parameters

#### Returns

`None` 

### get_appendClientDataBoundItems

Gets whether data bound items will be appended to the Rotator.

#### Parameters

#### Returns

`Boolean` 

### get_autoAdvance

RadTicker

#### Parameters

#### Returns

`None` 

### get_clientDataSource

Gets the RadClientDataSource that is associated with the Rotator.

#### Parameters

#### Returns

`Telerik.Web.UI.RadClientDataSource` 

### get_clientDataSourceID

Gets the ID of the RadClientDataSource that is associated with the Rotator.

#### Parameters

#### Returns

`Number` 

### get_clientTemplate

Gets the client template of the Rotator.

#### Parameters

#### Returns

`String` 

### get_containerElement

Returns the UL DOMElement that wraps all rotator's items

#### Parameters

#### Returns

`Object` 

### get_currentItem

Returns the current item shown in the rotator

#### Parameters

#### Returns

`Telerik.Web.UI.RadRotatorItem` 

### get_currentItemIndex

Gets the index of the currently shown item.

#### Parameters

#### Returns

`None` 

### get_dataSource

Gets the data source of the Rotator.

#### Parameters

#### Returns

`Object` 

### get_defaultAnimationDirection

Returns the default animation direction

#### Parameters

#### Returns

`Telerik.Web.UI.RotatorScrollDirection` 

### get_enabled

Returns true if the rotator is enabled

#### Parameters

#### Returns

`Boolean` 

### get_frameDuration

Returns the time in milliseconds each frame will display in automatic scrolling scenarios

#### Parameters

#### Returns

`Number` 

### get_height

Returns the rotator's height

#### Parameters

#### Returns

`Number` 

### get_initialItemIndex

Returns the rotator's initially shown item's index

#### Parameters

#### Returns

`Number` 

### get_items

Returns the rotator's items. The items are of type Telerik.Web.UI.RadRotatorItems

#### Parameters

#### Returns

`Array` 

### get_lineDuration

RadTicker

#### Parameters

#### Returns

`None` 

### get_loop

RadTicker

#### Parameters

#### Returns

`None` 

### get_pauseOnMouseOver

Returns true if the rotator is configured to stop when the mouse is over the rotator

#### Parameters

#### Returns

`Boolean` 

### get_rotatorType

Returns the rotator's type

#### Parameters

#### Returns

`Telerik.Web.UI.RotatorType` 

### get_scrollDirection

Returns the rotator's ScrollDirection

#### Parameters

#### Returns

`Telerik.Web.UI.RotatorScrollDirection` 

### get_scrollDuration

Returns the speed in milliseconds for scrolling rotator items

#### Parameters

#### Returns

`Number` 

### get_tickSpeed

Gets the duration in milliseconds between ticking each character of a tickerline.

#### Parameters

#### Returns

`None` 

### get_width

Returns the rotator's width

#### Parameters

#### Returns

`Number` 

### get_wrapFrames

Returns true if RadRotator is set to start scrolling its frames from the beginning, once the rotator shows the last frame

#### Parameters

#### Returns

`Boolean` 

### isAutomaticAdvance

Returns whether the rotator is in AutomaticAdvance mode

#### Parameters

#### Returns

`Boolean` 

### isCarousel

Returns whether the rotator is in Carousel mode

#### Parameters

#### Returns

`Boolean` 

### isCoverFlow

Returns whether the rotator is in CoverFlow mode

#### Parameters

#### Returns

`Boolean` 

### isScrollingForward

Returns a Boolean that indicates if the rotator is scrolling forward

#### Parameters

#### Returns

`Boolean` 

### isScrollingLeft

Returns a Boolean that indicates if the rotator is scrolling forward

#### Parameters

#### Returns

`Boolean` 

### isScrollingUp

Returns a Boolean that indicates if the rotator is scrolling upward

#### Parameters

#### Returns

`Boolean` 

### isSlideShow

Returns whether the rotator is in SlideShow mode

#### Parameters

#### Returns

`Boolean` 

### isVertical

Returns whether Down, Up or both ScrollDirections are set

#### Parameters

#### Returns

`Boolean` 

### isViewportScrollMode

Indicates whether the rotator is configured to scroll an item or the whole viewport

#### Parameters

#### Returns

`Boolean` 

### isVisible

Returns whether the rotator is visible

#### Parameters

#### Returns

`Boolean` 

### loadItemsFromWebService

Manually requests new data for a RadRotator that uses load-on-demand.

#### Parameters

##### itemIndex `Number`

#### Returns

`None` 

### pause

Pauses the rotator's animation

#### Parameters

#### Returns

`None` 

### removeRotatorItem

Removes an item from the RadRotator's items collection. By default the last item is removed if no index is passed as parameter.

#### Parameters

##### index `Number`

The 0

#### Returns

`None` 

### repaint

Redraw the rotator

#### Parameters

#### Returns

`None` 

### resume

Resumes the rotator's animation

#### Parameters

#### Returns

`None` 

### scrollItem

Scrolls an item only

#### Parameters

#### Returns

`None` 

### scrollViewport

Scrolls the whole visible area, not just an item

#### Parameters

#### Returns

`None` 

### set_appendClientDataBoundItems

Sets whether data bound items will be appended to the Rotator.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_autoAdvance

RadTicker

#### Parameters

#### Returns

`None` 

### set_clientDataSourceID

Sets the ID of the RadClientDataSource that is associated with the Rotator.

#### Parameters

##### id `Number`

#### Returns

`None` 

### set_clientTemplate

Sets the client template of the Rotator.

#### Parameters

##### value `String`

#### Returns

`None` 

### set_currentItemIndex

Sets currently shown item by its index

#### Parameters

##### index `Number`

#### Returns

`None` 

### set_dataSource

Sets a custom data source for the RadRotator.

#### Parameters

##### data `Array`

#### Returns

`None` 

### set_enabled

Enables or disables the rotator

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_frameDuration

Sets the time in milliseconds each frame will display in automatic scrolling scenarios

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_height

Sets the RadRotator height in pixels.

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_lineDuration

RadTicker

#### Parameters

#### Returns

`None` 

### set_loop

RadTicker

#### Parameters

#### Returns

`None` 

### set_pauseOnMouseOver

Sets a bool value indicating whether the rotator will stop when the mouse is over the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_rotatorType

Sets the rotator's type

#### Parameters

##### value `Telerik.Web.UI.RotatorType`

The rotator

#### Returns

`None` 

### set_scrollDirection

Sets the rotator's ScrollDirection

#### Parameters

##### value `Telerik.Web.UI.RotatorScrollDirection`

The new scrooll direction

#### Returns

`None` 

### set_scrollDuration

Sets the speed in milliseconds for scrolling rotator items

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_tickSpeed

Sets the duration in milliseconds between ticking each character of a tickerline.

#### Parameters

#### Returns

`None` 

### set_width

Sets the RadRotator width in pixels.

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_wrapFrames

Sets whether RadRotator to start scrolling from the beginning, once the rotator shows the last frame

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### showNext

Scrolls the rotator in the specified direction

#### Parameters

##### animationDir `Telerik.Web.UI.RotatorScrollDirection`

The scroll direction

#### Returns

`None` 

### start

Starts the rotator's animation

#### Parameters

#### Returns

`None` 

### startAutoPlay

Starts the rotator's animation from the begining

#### Parameters

#### Returns

`None` 

### startTicker

Starts the ticker

#### Parameters

#### Returns

`None` 

### stop

Stops the rotator's animation

#### Parameters

#### Returns

`None` 

### stopTicker

Stops the ticker

#### Parameters

#### Returns

`None` 

### stopViewportAnimation

Forces the rotator to fully display an item, even when the item is partially shown and the rotator is paused

#### Parameters

#### Returns

`None` 

### tickNextLine

forces the ticker to tick to the next line

#### Parameters

#### Returns

`None` 


## Events

### dataBound  

The dataBound event is fired when the client-side data binding of the RadRortator is finished. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### templateDataBound  

This event is raised when the data from the request is received and the HTML of the current item in the RadRotator is properly evaluated.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The event arguments.

### buttonOut  

This event is raised when the user moves the mouse pointer out of the rotator's button.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorButtonEventArgs`

The event arguments.

### buttonOver  

This event is raised when the user moves the mouse pointer over the rotator's button.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorButtonEventArgs`

The event arguments.

### itemClicked 

The event itemClicked is subsequent to the itemClicking event and occurs when an item of the RadRotator control is clicked. The event is fired after the client-side validation is completed and cannot be cancelled. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

##### args `Telerik.Web.UI.RotatorEventArgs`

The event arguments.

### itemDataBound 

The itemDataBound event is raised when an item in the RadRotator is bound to the provided data source. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorItemDataBoundEventArgs`

The event arguments.

### itemsRequested 

The itemsRequested event is related to the Load On Demand functionality of the RadRotator. It is fired when the items are successfully loaded.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### itemsRequestFailed 

The itemsRequestFailed event is related to the Load On Demand functionality of the RadRotator. It is fired when the request has failed. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorErrorEventArgs`

The event arguments.

### itemsRequesting 

The itemsRequesting event is related to the Load On Demand functionality of the RadRotator. It is fired before the items of the control are loaded, i.e. request to the server is still not sent. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Sys.CancelEventArgs`

The event arguments.

### load 

The load client-side event occurs after the RadRotator loads on the page. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### mouseOut 

The mouseOut event is fired when the mouse pointer leaves the control. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorEventArgs`

The event arguments.

### mouseOver 

The mouseOver event is fired when the user moves the mouse pointer over the control. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorEventArgs`

The event arguments.

### buttonClick 

This event is raised when the user click the rotator's button.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

#####  args `Telerik.Web.UI.RotatorButtonEventArgs`

The event arguments.
### itemClicking

The itemClicking event occurs when an item of the RadRotator control is clicked, before the ItemClicked event. The event is fired before the client-side validation occurs, and can be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

##### args `Telerik.Web.UI.RotatorCancelEventArgs`

The event arguments.

### itemShowing

The itemShowing event occurs when an item of the RadRotator control is about to be shown, before the itemShown event. This event can be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

##### args `Telerik.Web.UI.RotatorCancelEventArgs`

The event arguments.

### itemShown

The itemShown event occurs when an item of the RadRotator control is shown. The event is subsequent to the itemShowing event and cannot be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadRotator`

The instance of the RadRotator raised the event.

##### args `Telerik.Web.UI.RotatorEventArgs`

The event arguments.


