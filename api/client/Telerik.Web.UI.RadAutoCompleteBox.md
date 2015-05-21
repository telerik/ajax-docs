---
title: Telerik.Web.UI.RadAutoCompleteBox
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadAutoCompleteBox
---

# Telerik.Web.UI.RadAutoCompleteBox : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadAutoCompleteBox]({%slug Telerik.Web.UI.RadAutoCompleteBox%})*

## Methods

### trackChanges

Starts tracking changes made to the RadAutoCompleteBox that will be preserved over post-backs.

#### Parameters

#### Returns

`None` 

### createEntry

Creates a new entry.

#### Parameters

##### entryText `String`

 A string that contains the text of the entry.

##### entryValue `String`

A string that contains the value of the entry.

#### Returns

`None` 

### disable

Disables the control.

#### Parameters

#### Returns

`None` 

### get_isUsingODataSource

Gets a value indicating whether OData Source is used.

#### Parameters

#### Returns

`None` 

### get_emptyMessage

Gets the empty message text.

#### Parameters

#### Returns

`None` 

### get_text

Gets entries texts.

#### Parameters

#### Returns

`String` The entries texts.

### enable

Enables the control.

#### Parameters

#### Returns

`None` 

### get_dropDownElement

Gets a the dropDown element.

#### Parameters

#### Returns

`Element` The dropDown element.

### get_entries

Returns the Entries collection for the RadAutoCompleteBox.

#### Parameters

#### Returns

`Telerik.Web.UI.AutoCompleteBoxEntryCollection` AutoCompleteBoxEntryCollection

### get_inputElement

Gets a the input element.

#### Parameters

#### Returns

`Element` The input element.

### get_searchString

Gets the string used for requesting data

#### Parameters

#### Returns

`None` 

### get_webServiceSettings

Gets an object containing Web Service settings.

#### Parameters

#### Returns

`Telerik.Web.UI.WebServiceSettings` 

### clear

Clears the data in control dropdown.

#### Parameters

#### Returns

`None` 

### get_bindingMode

Gets the binding mode.

#### Parameters

#### Returns

`String` The binding mode type.

### commitChanges

Commits the changes made to the RadAutoCompleteBox that will be preserved over post-backs.

#### Parameters

#### Returns

`None` 

### query

Sends request to the server against the value passed as an argument.

#### Parameters

##### string `Object`

#### Returns

`Object` 

## Events

### load

This event is fired when the client RadAutoCompleteBox object is loaded.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Sys.EventArgs`

Empty event args

### dropDownItemDataBound

This event is fired for each item that is created during a request to a Web service.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteDropDownItemDataBoundEventArgs`

The event arguments.

### dropDownOpening

This event is fired right before the drop-down container of RadAutoCompleteBox is opened. 

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxDropDownOpeningEventArgs`

The event arguments.

### dropDownOpened

This event is fired immediately after the drop-down container is opened.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxDropDownOpenedEventArgs`

The event arguments.

### dropDownClosing

This event is fired before the drop-down container is closed.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxDropDownClosingEventArgs`

The event arguments.

### dropDownClosed

This event is fired  immediately after the drop-down container is closed.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxDropDownClosedEventArgs`

The event arguments.

### entryAdding

This event is fired right before an entry is added to the Entry collection of RadAutoCompleteBox.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxEntryAddingEventArgs`

The event arguments.

### entryAdded

This event is fired immediately after an item from the drop-down container is added to the Entry collection of RadAutoCompleteBox. 

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxEntryAddedEventArgs`

The event arguments.

### entryRemoving

This event is fired right before an entry is removed from the Entry collection of RadAutoCompleteBox. 

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxEntryRemovingEventArgs`

The event arguments.

### entryRemoved

This event is fired immediately after an item from the drop-down container has been removed from the Entry collection of RadAutoCompleteBox.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxEntryRemovedEventArgs`

The event arguments.

### textChanged

This event is fired when the text currently present in the input area is changed and RadAutoComplete has lost its focus.

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxTextChangedEventArgs`

The event arguments.

### requesting

This event is fired right before RadAutoCompleteBox sends a server-side request to load items into its drop-down container. 

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxRequestingEventArgs`

The event arguments.

### requested

This event is fired right after the requested items are loaded into the drop-down container.  

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxRequestedEventArgs`

The event arguments.

### requestFailed

This event is fired in case of error while loading the drop-down items from the data source. 

#### Event Data

#####  sender `Telerik.Web.UI.RadAutoCompleteBox`

The instance of the RadAutoCompleteBox raised the event.

##### args `Telerik.Web.UI.AutoCompleteBoxRequestFailedEventArgs`

The event arguments.