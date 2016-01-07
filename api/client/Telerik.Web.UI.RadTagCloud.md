---
title: Telerik.Web.UI.RadTagCloud
page_title: Client-side API Reference
description: Telerik.Web.UI.RadTagCloud
slug: Telerik.Web.UI.RadTagCloud
---

# Telerik.Web.UI.RadTagCloud : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadTagCloud]({%slug Telerik.Web.UI.RadTagCloud%})*

## Methods

###  addTagCloudItem

Creates, renders a new RadTagCloudItem item and inserts it in the get_items Array.

#### Parameters

##### radTagCloudItemData `Object`

 		

##### index `Number`

The index of the get_items Array where the item should be inserted.

#### Returns

`None` 

###  dataBind

Data binds the data of the RadTagCloud.

#### Parameters

#### Returns

`None` 

###  get_appendClientDataBoundItems

Gets whether data bound items will be appended to the TagCloud.

#### Parameters

#### Returns

`Boolean` 

###  get_clientDataSource

Gets the RadClientDataSource that is associated with the TagCloud.

#### Parameters

#### Returns

`Telerik.Web.UI.RadClientDataSource` 

###  get_clientDataSourceID

Gets the ID of the RadClientDataSource that is associated with the TagCloud.

#### Parameters

#### Returns

`Number` 

###  get_containerElement

Returns the UL DOM element that wraps all tagCloud's items.

#### Parameters

#### Returns

`Object` The UL DOM element that wraps all the tagCloud

###  get_dataSource

Gets the data source of the TagCloud.

#### Parameters

#### Returns

`Object` 

###  get_distribution

Returns a value of type Telerik.Web.UI.TagCloudDistribution that indicates how the font-size is distributed among the different items.

#### Parameters

#### Returns

`Telerik.Web.UI.TagCloudDistribution` Returns a value that indicates how the font

###  get_enabled

Returns a value, indicating whether the tagCloud control is enabled.

#### Parameters

#### Returns

`Boolean` The value indicating whether the tagCloud control is enabled.

###  get_height

Returns the height of the tagCloud control.

#### Parameters

#### Returns

`Number` The height of the tagCloud control.

###  get_items

Returns an array of the tagCloud's items. The items are of type Telerik.Web.UI.RadTagCloudItem.

#### Parameters

#### Returns

`Array` Returns an array of the tagCloud

###  get_sorting

Returns a value of type Telerik.Web.UI.TagCloudSorting that indicates how the items are sorted.

#### Parameters

#### Returns

`Telerik.Web.UI.TagCloudSorting` Returns a value that indicates how keywords are sorted.

###  get_target

Returns the target window or frame to display the new content when the TagCloud item is clicked.

#### Parameters

#### Returns

`String` The target window or frame to display the new content when the TagCloud item is clicked.

###  get_width

Returns the width of the tagCloud control.

#### Parameters

#### Returns

`Number` The width of the tagCloud control.

###  removeTagCloudItem

Removes a RadTagCloudItem item.

#### Parameters

##### tagCloudItem `Telerik.Web.UI.RadTagCloudItem`

The item to be removed.

##### repaintItems `Boolean`

Call repaint arter the item is removed. The default is true.

#### Returns

`None` 

###  repaint

Redraws the TagCloud control.

#### Parameters

#### Returns

`None` 

###  requestItems

Initiates RadTagCloudItem items request with a specified argument, causing the request to be sent to a WebService. All current items will be removed,before the new ones are populated.

#### Parameters

##### argument `String`

The string which is sent as an argument to the Web service method

#### Returns

`None` 

###  set_appendClientDataBoundItems

Sets whether data bound items will be appended to the TagCloud.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_clientDataSourceID

Sets the ID of the RadClientDataSource that is associated with the TagCloud.

#### Parameters

##### id `Number`

#### Returns

`None` 

###  set_dataSource

Sets a custom data source for the RadTagCloud.

#### Parameters

##### data `Array`

#### Returns

`None` 

###  set_enabled

Sets a bool value indicating whether the tagCloud is enabled.

#### Parameters

##### value `Boolean`

The value to set. 

#### Returns

`None` 

###  set_target

Sets the target window or frame to display the new content when the TagCloud item is clicked.

#### Parameters

##### value `String`

The target to set.

#### Returns

`None` 

## Events

### load 

The load event is raised when the RadTagCloud object is loaded on the page. It can notify the developer that the control is available for further client-side programmatic interaction. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### itemClicking 

The itemClicking event occurs when an item of the RadTagCloud control is clicked, immediately after the mouse button is released. The event is fired before the client-side validation occurs, and can be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Telerik.Web.UI.TagCloudCancelEventArgs`

The event arguments.

### itemClicked 

The itemClicked event occurs when an item of the RadTagCloud control is clicked, immediately after the itemClicking event. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Telerik.Web.UI.TagCloudEventArgs`

The event arguments.

### itemsRequested 

The itemsRequested event is fired when the requested items from the Web Service are successfully loaded. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Sys.EventArgs`

Empty event argument.

### itemsRequesting 

The itemsRequesting is fired before sending a request to a Web Service for the items to be bound. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Sys.CancelEventArgs`

The event arguments.

### itemsRequestFailed 

The itemsRequestFailed is fired when the request to the web service is failed. The event arguments provide information about the error message and allow the developer to cancel the error alert and process the error otherwise.

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Telerik.Web.UI.TagCloudErrorEventArgs`

The event arguments.

### itemDataBound 

The itemDataBound event occurs when a RadTagCloudItem is successfully bound to the requested data source item. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Telerik.Web.UI.TagCloudItemDataBoundEventArgs`

The event arguments.

### dataBound 

The dataBound event is raised when the RadTagCloud object is successfully bound to the requested data. 

#### Event Data

##### sender `Telerik.Web.UI.RadTagCloud`

The instance of the RadTagCloud raised the event.

#####  args `Sys.EventArgs`

The event arguments.
