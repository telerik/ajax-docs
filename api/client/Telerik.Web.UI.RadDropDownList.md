---
title: Telerik.Web.UI.RadDropDownList
title_prefix: Client-side API Reference
description: Telerik.Web.UI.RadDropDownList
slug: Telerik.Web.UI.RadDropDownList
---

# Telerik.Web.UI.RadDropDownList : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadDropDownList]({%slug Telerik.Web.UI.RadDropDownList%})*


## Methods

### closeDropDown

Closes the DropDown

#### Parameters

#### Returns

`None` 

### commitChanges

Writes the changes to the dropDownList that were made since a previous call to trackChanges, so that they are preserved over post-backs.

#### Parameters

#### Returns

`None` 

### findItemByText

Returns the first DropDownListItem object whose Text property equals to the passed parameter.

#### Parameters

##### theText `String`

The text tosearch for

#### Returns

`Telerik.Web.UI.DropDownListItem` 

### findItemByValue

Returns the first DropDownListItem object whose Value property equals to the passed parameter.

#### Parameters

##### theValue `String`

The value to search for

#### Returns

`Telerik.Web.UI.DropDownListItem` Returns the first DropDownListItem whose Value property matches the passed parameter

### get_childListElement

Gets the UL element of the RadDropDownList

#### Parameters

#### Returns

`Element` The UL element of the RadDropDownList 

### get_clientTemplate

Returns the value of the RadDropDownList's ClientItemTemplate property.

#### Parameters

#### Returns

`None` 

### get_defaultMessage

Returns the value of the RadDropDownList's DefaultMessage property.

#### Parameters

#### Returns

`None` 

### get_dropDownElement

Gets the root DOM element of the RadDropDownList

#### Parameters

#### Returns

`Element` The root DOM element of the RadDropDownList 

### get_emptySelectionMessage

Returns the value of the RadDropDownList's EmptySelectionMessage property.

#### Parameters

#### Returns

`Object` 

### get_items

Gets a collection with all items

#### Parameters

#### Returns

`Telerik.Web.UI.DropDownListItemCollection` 

### get_selectedItem

Gets the selected item.

#### Parameters

#### Returns

`Telerik.Web.UI.DropDownListItem` 

### get_textElement

Gets the DOM element of the RadDropDownList where the text of the currently selected item is shown.

#### Parameters

#### Returns

`Element` DOM element of the RadDropDownList where the text of the currently selected item is shown. 

### getItem

Gets the item from the Items collection residing at the index specified by the parameter.

#### Parameters

##### index `Number`

#### Returns

`Telerik.Web.UI.DropDownListItem` 

### openDropDown

Opens the DropDown

#### Parameters

#### Returns

`None` 

### repaint

Refreshes the RadDropDownList UI

#### Parameters

#### Returns

`None` 

### saveClientState

Saves the client state to the client state hidden field

#### Parameters

#### Returns

`None` 

### set_clientTemplate

Sets the value of the RadDropDownList's ClientItemTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_defaultMessage

Sets the value of the RadDropDownList's DefaultMessage property.

#### Parameters

##### value `String`

value

#### Returns

`None` 


### set_emptySelectionMessage

Sets the value of the RadDropDownList's EmptySelectionMessage property.

#### Parameters

##### String `String`

#### Returns

`Object` 

### set_enabled

Enables RadDropDownList

#### Parameters

##### value `Boolean`

 true if the RadDropDownList should be enabled. False otherwise

#### Returns

`None` 

### toggleDropDown

Toggles the DropDown state between opened and closed.

#### Parameters

#### Returns

`None` 


## Events

### dropDownOpened

Occurs after the drop-down list has been opened. 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the DropDownOpened event.


### itemsRequested
Occurs after the the portion of items is added to the RadDropDownList (WebService data-binding scenario)

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the ItemsRequested event.


### itemSelecting

Occurs before a certain item is about to be selected. 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Telerik.Web.UI.DropDownListItemSelectingEventArgs`

The arguments of the DropDownClosed event.


### itemSelected

Occurs before a certain item is about to be selected. 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Telerik.Web.UI.DropDownListItemSelectedEventArgs`

The arguments of the ItemSelected event.


### templateDataBound

Occurs for each item that is created during WebService(including if ODataSource is used). 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The arguments of the TemplateDataBound event.


### itemDataBound

Occurs for each item that is created during WebService(including if ODataSource is used). 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Telerik.Web.UI.DropDownListItemDataBoundEventArgs`

The arguments of the ItemDataBound event.


### selectedIndexChanged

Occurs immediately after the SelectedItem has been changed.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Telerik.Web.UI.DropDownListIndexChangedEventArgs`

The arguments of the SelectedIndexChanged event.


### dropDownClosing

Occurs just before the drop-down list gets closed.  

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the DropDownClosing event.


### dropDownClosed

Occurs just before the drop-down list gets closed.  

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Sys.EventArgs`

The arguments of the DropDownClosed event.


### dropDownOpening

Occurs just before the drop-down list gets opened. 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the DropDownOpening event.


### itemsRequestFailed

Occurs when an error has occurred while loading elements using the load-on-demand mechanism. 

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the ItemsRequestFailed event.

### itemsRequesting

Occurs when the RadDropDownList is about to send a server-side request to load its items from the web service.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownList`

The RadDropDownList instance raised the event.

##### args `Telerik.Web.UI.DropDownListItemsRequestingEventArgs`

The arguments of the ItemsRequesting event.


