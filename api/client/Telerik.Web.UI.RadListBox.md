---
title: Telerik.Web.UI.RadListBox
page_title: Client-side API Reference
description: Telerik.Web.UI.RadListBox
slug: Telerik.Web.UI.RadListBox
---

# Telerik.Web.UI.RadListBox : Telerik.Web.UI.ControlItemContainer 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemContainer]({%slug Telerik.Web.UI.ControlItemContainer%})
* *[Telerik.Web.UI.RadListBox]({%slug Telerik.Web.UI.RadListBox%})*


## Methods

### checkItems

Checks all titems that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.

#### Parameters

##### value `Array`

The items to check. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection

#### Returns

`None` 

### clearSelection

Clears the selection. There will be no selected items.

#### Parameters

#### Returns

`None` 

### clearSelectionExcept

Clears the current selection except the specified Index or Item.

#### Parameters

##### value `Number`

#### Returns

`None` 

### commitChanges

Writes the changes to the listbox that were made since a previous call to trackChanges, so that they are preserved over post-backs.

#### Parameters

#### Returns

`None` 

### deleteItem

Deletes the item passed as an argument

#### Parameters

##### item `Telerik.Web.UI.RadListBoxItem`

item

#### Returns

`None` 

### disableEvents

Disables RadListBox client side events

#### Parameters

#### Returns

`None` 

### enableEvents

Enables RadListBox client side events disabled with the disableEvents method

#### Parameters

#### Returns

`None` 

### findItemByAttribute

Gets the first instance of a RadListBoxItem with the specified attribute/value pair.

#### Parameters

##### attributeName `String`

The attribute name to search for

##### attributeValue `String`

The attribute value to search for

#### Returns

`Telerik.Web.UI.RadListBoxItem` Returns the first RadListBoxItem who has attribute that matches the passed parameters

### findItemByText

Returns the first RadListBoxItem object whose Text property equals to the passed parameter.

#### Parameters

##### theText `String`

The text tosearch for

#### Returns

`Telerik.Web.UI.RadListBoxItem` 

### findItemByValue

Returns the first RadListBoxItem object whose Value property equals to the passed parameter.

#### Parameters

##### theValue `String`

The value to search for

#### Returns

`Telerik.Web.UI.RadListBoxItem` Returns the first RadListBoxItem whose Value property matches the passed parameter

### get_checkedIndices

Returns the indices of all checked items

#### Parameters

#### Returns

`Array` Returns array of Integers

### get_checkedItems

Gets an array of the checked RadListBoxItem objects

#### Parameters

#### Returns

`Array` All checked items 

### get_childListElement

Gets the UL element of the RadListBox

#### Parameters

#### Returns

`Element` The UL element of the RadListBox 

### get_clientTemplate

Returns the value of the RadListBox's ClientItemTemplate property.

#### Parameters

#### Returns

`None` 

### get_element

Gets the outer DIV of the RadListBox

#### Parameters

#### Returns

`Element` 

### get_id

Gets the ClientID of the RadListBox

#### Parameters

#### Returns

`String` 

### get_items

Gets a collection with all items

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItemCollection` 

### get_selectedIndex

Gets the index of the selected item

#### Parameters

#### Returns

`Number` The index of the selected item. If there the selection mode is set to 

### get_selectedIndices

Returns the indices of all selected items

#### Parameters

#### Returns

`Array` Returns array of Integers

### get_selectedItem

Gets the selected item (or the first selected item if the SelectionMode=quot;Multiplequot;).

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem` 

### get_selectedItems

Gets an array of the selected RadListBoxItem objects

#### Parameters

#### Returns

`Array` 

### get_transferTo

Returns instance of the destination RadListBox

#### Parameters

#### Returns

`String` 

### getItem

Gets the item from the Items collection residing at the index specified by the parameter.

#### Parameters

##### index `Number`

#### Returns

`Telerik.Web.UI.RadListBoxItem` 

### getLastItem

Gets the last item in the RadListBox items collection.

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem` 

### insertItems

Bulk inserts an array of RadListbox items to RadListBox

#### Parameters

##### items `Array`

Array of items to be bulk inserted

#### Returns

`None` 

### reorderItem

Moves the specified item to the specified index

#### Parameters

##### item `Telerik.Web.UI.RadListBoxItem`

The item to reorder

##### newIndex `Number`

The index to move to

#### Returns

`None` 

### repaint

Refreshes the RadListBox UI

#### Parameters

#### Returns

`None` 

### saveClientState

Saves the client state to the client state hidden field

#### Parameters

#### Returns

`None` 

### selectItems

Selects all items that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.

#### Parameters

##### value `Array`

The items to select. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection

#### Returns

`None` 

### set_clientTemplate

Sets the value of the RadListBox's ClientItemTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_enabled

Enables RadListBox

#### Parameters

##### value `Boolean`

 true if the RadListBox should be enabled. False otherwise

#### Returns

`None` 

### set_transferTo

Sets the destionation RadListBox

#### Parameters

##### Destination `Telerik.Web.UI.RadListBox`

 the destination RadListBox 

#### Returns

`None` 

### transferFromDestination

Transfers the specified item from the listbox specified by the TransferToID property

#### Parameters

##### item `Telerik.Web.UI.RadListBoxItem`

 The item to transfer 

#### Returns

`None` 

### transferItem

Transfers the specified item from the source listbox to the destination listbox

#### Parameters

##### item `Telerik.Web.UI.RadListBoxItem`

 The item to transfer

##### sourceListBox `Telerik.Web.UI.RadListBox`

 The source RadListBox

##### destinationListBox `Telerik.Web.UI.RadListBox`

 The destination RadListBox

#### Returns

`None` 

### transferToDestination

Transfers the specified item to the listbox specified by the TransferToID property

#### Parameters

##### item `Telerik.Web.UI.RadListBoxItem`

 The item to transfer 

#### Returns

`None` 

### uncheckItems

Unchecks all the items passed that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.

#### Parameters

##### value `Array`

The items to uncheck. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection

#### Returns

`None` 

### unselectItems

Unselects all items that are passed as a parameter. The parameter can be either of type array or RadListBoxItemCollection.

#### Parameters

##### value `Array`

The items to unselect. Can be either Array or Telerik.Web.UI.RadListBoxItemCollection

#### Returns

`None` 


## Events

### templateDataBound

Occurs after the client template is bound and the binding expression are evaluated. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The arguments of the TemplateDataBound event.

### dropped

Occurs after the item/items are dropped. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxDroppedEventArgs`

The arguments of the Dropped event.

### reordering

Occurs after the item/items are dropped. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxReorderingEventArgs`

The arguments of the Reordering event.

### reordered

Occurs after the item/items are dropped. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxReorderedEventArgs`

The arguments of the Reordered event.

### itemsRequested

Occurs after the load-on-demand mechanism has added new items to the RadListBox. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Sys.EventArgs`

The arguments of the ItemsRequested event.

### load

Occurs after the RadListBox has been fully initialized on the client-side. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Sys.EventArgs`

The arguments of the Load event.

### selectedIndexChanged

Occurs after the selected item has been changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxSelectedIndexChangedEventArgs`

The arguments of the SelectedIndexChanged event.

### transferred

Occurs after the selected item has been transferred to the destination RadListBox. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxTransferredEventArgs`

The arguments of the Transferred event.
### deleted

Occurs after the selected item or items have been deleted. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxDeletedEventArgs`

The arguments of the Deleted event.

### itemDoubleClicked

Occurs after the user double clicks the item.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxItemDoubleClickedEventArgs`

The arguments of the ItemDoubleClicked event.


### checkAllChecked

Occurs after user clicks on the CheckAll item. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxCheckAllCheckedEventArgs`

The arguments of the CheckAllChecked event.

### dropping

Occurs before the items are dropped.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxDroppingEventArgs`

The arguments of the Dropping event.

### dragStart

Occurs each time the user begins to drag an item. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxDragStartEventArgs`

The arguments of the DragStart event.

### dragging

Occurs each time the user moves a mouse while dragging an item.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxDraggingEventArgs`

The arguments of the Dragging event.


### itemDataBound

occurs for each item that is created during LoadOnDemand binding scenario.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `ListBoxItemDataBoundEventArgs`

The arguments of the ItemDataBound event.


### mouseOut

Occurs just before the mouse passes out of an item. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxMouseOutEventArgs`

The arguments of the MouseOut event.


### contextMenu

Occurs when a user right clicks over a RadListBoxItem. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxContextMenuEventArgs`

The arguments of the ContextMenu event.

### itemsRequestFailed

Occurs when an error has occurred while loading elements using the load-on-demand mechanism. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxItemsRequestFailedEventArgs`

The arguments of the ItemsRequestFailed event.

### itemsRequesting

Occurs when EnableLoadOnDemand is True and the RadListBox is about to send a server-side request to load more items. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxItemsRequestingEventArgs`

The arguments of the ItemsRequesting event.

### deleting

Occurs when the item or items are about to be deleted. This event can be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxDeletingEventArgs`

The arguments of the Deleting event.

### mouseOver

Occurs when the mouse cursor passes over an item.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxMouseOverEventArgs`

The arguments of the MouseOver event.

### selectedIndexChanging

Occurs when the selected item is about to be changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxSelectedIndexChangingEventArgs`

The arguments of the SelectedIndexChanging event.

### transferring

Occurs when the selected item is about to be transferred to the destination RadListBox

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxTransferringEventArgs`

The arguments of the Transferring event.

### checkAllChecking

Occurs when the user is about to click on the CheckAll item.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxCheckAllCheckingEventArgs`

The arguments of the CheckAllChecking event.

### itemDoubleClicking

Occurs when the user is about to double click the item using.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxItemDoubleClickingEventArgs`

The arguments of the ItemDoubleClicking event.

### itemChecking

Occurs when the user is just about to select a checkbox using mouse or keyboard.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxItemCheckingEventArgs`

The arguments of the ItemChecking event.

### itemChecked

Occurs when the user is just about to select a checkbox using mouse or keyboard.

#### Event Data

##### sender `Telerik.Web.UI.RadListBox`

The RadListBox instance raised the event.

##### args `Telerik.Web.UI.ListBoxItemCheckedEventArgs`

The arguments of the ItemChecked event.



