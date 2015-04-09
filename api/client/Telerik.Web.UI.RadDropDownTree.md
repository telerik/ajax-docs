---
title: Telerik.Web.UI.RadDropDownTree
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadDropDownTree : Telerik.Web.UI.RadWebControl 

## Methods

### get_dropDownElement

Gets the dropDown element.

#### Parameters

#### Returns

`Element` The dropDown element.

### get_embeddedTree

Gets the embedded tree - the integrated RadTreeView control.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeView` - the integrated RadTreeView control.

### closeDropDown

Closes the drop down of the current instance.

#### Parameters

#### Returns

`None` 

### get_selectedText

Returns the text of an entry(or a collection of entries separated by semicolon) in the entry area

#### Parameters

#### Returns

`String` 

### openDropDown

Opens the drop down of the current instance.

#### Parameters

#### Returns

`None` 

### get_entries

Returns the RadDropDownTree Entries collection

#### Parameters

#### Returns

`Object` 

### toggleDropDown

Opens the drop down of the current instance.

#### Parameters

#### Returns

`None` 

### get_defaultMessage

Returns  the Default message in the entry area

#### Parameters

#### Returns

`String` 

### get_selectedValue

Returns the value of an entry (or a collection of entries separated by semicolon) in the entry area

#### Parameters

#### Returns

`String` 

### get_enabled

Returns true if the RadDropDownTree is enabled and false if the control is disabled

#### Parameters

##### Boolean `Boolean`

#### Returns

`Boolean` 

### set_enabled

Enables the RadDropDownTree control

#### Parameters

##### Boolean `Boolean`

#### Returns

`Boolean` 

### set_defaultMessage

Sets the Default message in the entry area

#### Parameters

##### String `String`

#### Returns

`Object` 

## Events

### load

The load client-side event occurs when the RadDropDownTree is first loaded and fully initialized on the client.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.EventArgs`

Empty event argument.

### dropDownOpening

The dropDownOpening client-side event that is fired before the dropdown of RadDropDownTree is opened. The event can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### dropDownOpened

The dropDownOpened client-side event that is fired after the dropdown of the RadDropDownTree is opened. The event cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.EventArgs`

The event arguments.

### dropDownClosing

The dropDownClosing client-side event that is fired before the dropdown of the RadDropDownTree is closed. The event can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### dropDownClosed

The dropDownClosed client-side event that is fired after the dropdown of the RadDropDownTree is closed. The event cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.EventArgs`

The event arguments.

### entryAdding

The entryAdding client-side event is fired when an entry is about to be added to the entry area. The event can be cancelled.
When the CheckBoxes property of the control is set to either the TriState or the CheckChildNodes, the event will fire only for the node that is being checked.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Telerik.Web.UI.DropDownTreeEntryAddingEventArgs`

The event arguments.

### entryAdded

The entryAdded client-side event that is fired when an entry is about to be added to the Entry area. The event cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Telerik.Web.UI.DropDownTreeEntryAddedEventArgs`

The event arguments.

### entryRemoving

The entryRemoving client-side event is fired when an entry is about to be removed from the Entry area. The event can be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Telerik.Web.UI.DropDownTreeEntryRemovingEventArgs`

The event arguments.

### entryRemoved

The entryRemoved client-side event that is fired when an entry is about to be removed from the Entry area. The event cannot be cancelled.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Telerik.Web.UI.DropDownTreeEntryRemovedEventArgs`

The event arguments.

### clearButtonClicking

The clearButtonClicking client-side event is fired immediately when the Clear button in the entry area of the RadDropDownTree is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### clearButtonClicked

The clearButtonClicked client-side event after the Clear button in the entry area of the RadDropDownTree is clicked.

#### Event Data

##### sender `Telerik.Web.UI.RadDropDownTree`

The RadDropDownTree instance that fired the event.

##### args `Sys.EventArgs`

The event arguments.