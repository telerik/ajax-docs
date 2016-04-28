---
title: Telerik.Web.UI.RadToolBar
page_title: Client-side API Reference
description: Telerik.Web.UI.RadToolBar
slug: Telerik.Web.UI.RadToolBar
---

# Telerik.Web.UI.RadToolBar : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadToolBar]({%slug Telerik.Web.UI.RadToolBar%})*


## Methods

### commitChanges

Ends tracking changes to the toolbar items. Only changes to the items that occur between a call to trackChanges and commitChanges persist after a postback.

#### Parameters

#### Returns

`None` 

### findButtonByAbsoluteUrl

Returns the first button in the toolbar with the specified full path.

#### Parameters

##### value `String`

the instance of the button with the specified absolute Url

#### Returns

`Telerik.Web.UI.RadToolBarButton` RadToolbarButton

### findButtonByCommandName

Returns the first button in the toolbar with the specified command name.

#### Parameters

##### commandName `String`

commandName

#### Returns

`Telerik.Web.UI.RadToolBarButton` RadToolbarButton

### findButtonByUrl

Returns the first button in the toolbar with the specified Url.

#### Parameters

##### value `String`

the instance of the button with the specified Url

#### Returns

`Telerik.Web.UI.RadToolBarButton` RadToolbarButton

### findItemByAttribute

Returns the first item in the toolbar with the custom attribute specified by the first parameter set to the value specified by the second parameter.

#### Parameters

##### attributeName `String`

attributeName

##### attributeValue `String`

attributeValue

#### Returns

`Telerik.Web.UI.RadToolBarItem` 

### findItemByText

Returns the first item in the toolbar with the specified text.

#### Parameters

##### text `String`

text to search for

#### Returns

`Telerik.Web.UI.RadToolBarItem` 

### findItemByValue

Returns the first item in the toolbar with the specified value.

#### Parameters

##### value `String`

value

#### Returns

`Telerik.Web.UI.RadToolBarItem` 

### get_allItems

Returns an array containing all the items in the toolbar, including the items in drop-down lists. Items in drop-down lists appear immediately following their parent items.

#### Parameters

#### Returns

`Array` Array of RadToolBarItem

### get_attributes

Returns the collection of custom attributes defined for the toolbar.

#### Parameters

#### Returns

`Object` 

### get_childListElement

Gets the DOM element for the UL element that lists the toolbar buttons.

#### Parameters

#### Returns

`Element` 

### get_collapseAnimation

Returns the collapse animation object.

#### Parameters

#### Returns

`Object` 

### get_element

Gets the DOM element for the toolbar.

#### Parameters

#### Returns

`Element` 

### get_expandAnimation

Returns the expand animation object.

#### Parameters

#### Returns

`Object` 

### get_isHorizontal

Gets the value indicating whether the zone has Horizontal orientaion.

#### Parameters

#### Returns

`Boolean` The value indicating whether the zone has Horizontal orientaion.

### get_items

Returns the collection of items in the toolbar (not including items in drop-down lists).

#### Parameters

#### Returns

`Telerik.Web.UI.RadToolBarItemCollection` RadToolBarItemCollection

### get_orientation

Returns 0 if the toolbar is horizontal, 1 if it is vertical.

#### Parameters

#### Returns

`Number` integer

### get_postBackUrl

Gets the Url of the page to post to from the current page.

#### Parameters

#### Returns

`String` The value indicating the Url

### get_skin

Gets the skin name of the ToolBar.

#### Parameters

#### Returns

`String` The skin name of the ToolBar.

### get_slideDirection

Gets the slide direction of the Toolbar.

#### Parameters

#### Returns

`Telerik.Web.UI.SlideDirection` 

### set_orientation

Sets the orientation of the toolbar.

#### Parameters

##### value `Number`

value

#### Returns

`None` 

### set_postBackUrl

Sets the Url of the page to post to from the current page.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_slideDirection

Sets the slide direction of the Toolbar.

#### Parameters

##### value `Telerik.Web.UI.SlideDirection`

#### Returns

`None` 


## Events

### buttonClicked

The buttonClicked client-side event occurs when the user clicks on a toolbar button, after the toolbar responds to the mouse click.
Event is not cancellable.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.

### buttonClicking

The buttonClicking client-side event occurs when the user clicks on a toolbar button, before the toolbar responds to the mouse click. 
You can use this event to pre-process an item click or to cancel the default response.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarCancelEventArgs`

The event arguments.

### checkedStateChanged

The checkedStateChanged client-side event occurs immediately after a button has been checked.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.
### checkedStateChanging

The checkedStateChanging client-side event occurs before a button has been checked. The event is cancellable.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarCancelEventArgs`

The event arguments.

### contextMenu

The contextMenu client-side event occurs when the user right-clicks an item in the toolbar.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.

### dropDownClosed

The dropDownClosed client-side event occurs immediately after the drop-down has closed. The event is not cancellable

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.

### dropDownClosing

The dropDownClosing client-side event occurs when the drop-down is about to close, hiding its child buttons.
You can use this event to respond to an action before the buttons list of the drop-down closes and/or cancel the event.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarCancelEventArgs`

The event arguments.

### dropDownOpened

The dropDownOpened client-side event occurs immediately after the drop-down expands to show its child buttons.
The event is not cancellable.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.

### dropDownOpening

The dropDownOpening client-side event occurs when the drop-down is about to expand, showing its child buttons.
You can use this event to control when drop-down can expand, or customize the child buttons before the toolbar expands.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarCancelEventArgs`

The event arguments.

### load

The load client-side event occurs when the toolbar is first loaded and fully initialized on the client.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Sys.EventArgs`

Empty event argument. 

### mouseOut

The mouseOut client-side event occurs when the mouse moves off an item in the toolbar.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.

### mouseOver

The mouseOver client-side event occurs when the mouse moves over an item in the toolbar.

#### Event Data

#####  sender `Telerik.Web.UI.RadToolBar`

The instance of the RadToolBar raised the event.

##### args `Telerik.Web.UI.RadToolBarEventArgs`

The event arguments.


