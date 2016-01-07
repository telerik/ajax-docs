---
title: Telerik.Web.UI.RadDataForm
page_title: Client-side API Reference
description: Telerik.Web.UI.RadDataForm
slug: Telerik.Web.UI.RadDataForm
---

# Telerik.Web.UI.RadDataForm : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadDataForm]({%slug Telerik.Web.UI.RadDataForm%})*

## Methods

###  cancelInsert

Cancels insert operation and hides RadDataForm's insertion form

#### Parameters

#### Returns

`None` 

###  cancelUpdate

Cancels RadDataForm item update (with index specified as an argument)

#### Parameters

#### Returns

`None` 

###  dataBind

Databinds the DataForm when the client-side data source is set

#### Parameters

#### Returns

`None` 

###  deleteItem

Deletes RadDataForm item with index specified as an argument

#### Parameters

#### Returns

`None` 

###  editItem

Switches RadDataForm item into edit mode (with index specified as an argument)

#### Parameters

#### Returns

`None` 

###  fireCommand

Fires command with command name and command argument specified as arguments

#### Parameters

#### Returns

`None` 

###  get_clientSettings

Gets the current client settings applied for RadDataForm

#### Parameters

#### Returns

`None` 

###  get_currentPageIndex

Gets the current page index in case paging for RadDataForm is enabled

#### Parameters

#### Returns

`None` 

###  get_dataSource

Gets the data source javascript array of RadDataForm

#### Parameters

#### Returns

`None` 

###  get_isDataBinding

Indicates whether RadDataForm is currently databinding on the client-side

#### Parameters

#### Returns

`None` 

###  get_isItemInserted

Gets a value indicating whether the insert form is currently shown

#### Parameters

#### Returns

`None` 

###  get_pageCount

Gets the page count in RadDataForm

#### Parameters

#### Returns

`None` 

###  get_skin

Gets the skin set to the RadDataForm's control

#### Parameters

#### Returns

`None` 

###  get_uniqueID

Gets the unique id of RadDataForm's container

#### Parameters

#### Returns

`None` 

###  get_virtualItemCount

Gets the total number of items RadDataForm can bind to. This value is used for page calculations.

#### Parameters

#### Returns

`None` 

###  insertItem

Inserts a new item in RadDataForm with values taken from its insertion form

#### Parameters

#### Returns

`None` 

###  page

Navigates RadDataForm to the page specified as an argument. If server-side databinding is used, RadDataPager should be used for page navigation

#### Parameters

#### Returns

`None` 

###  rebind

Rebinds RadDataForm to its given data source

#### Parameters

#### Returns

`None` 

###  set_currentPageIndex

Sets the current page index in RadDataForm

#### Parameters

#### Returns

`None` 

###  set_dataSource

Sets the data source of RadDataForm

#### Parameters

#### Returns

`None` 

###  set_virtualItemCount

Sets the virtual item count in RadDataForm

#### Parameters

#### Returns

`None` 

###  showInsertItem

Displays RadDataForm's insertion form

#### Parameters

#### Returns

`None` 

###  updateItem

Updates RadDataForm item (with index specified as an argument)

#### Parameters

#### Returns

`None` 

## Events

### DataFormCreated

Adds a handler for the DataFormCreated event

#### Event Data

##### sender `Telerik.Web.UI.RadDataForm`

The RadDataForm instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### DataFormCreating

Adds a handler for the DataFormCreating event

#### Event Data

##### sender `Telerik.Web.UI.RadDataForm`

The RadDataForm instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### DataFormDestroying

Adds a handler for the DataFormDestroying event

#### Event Data

##### sender `Telerik.Web.UI.RadDataForm`

The RadDataForm instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### command

Adds a handler for the command event

#### Event Data

##### sender `Telerik.Web.UI.RadDataForm`

The RadDataForm instance raised the event.

##### args `Telerik.Web.UI.DataFormCommandEventArg`

The arguments of the  event.

### setValues

Raised when values are set in the fields in the ItemTemplate. Used with client-side binding. 

#### Event Data

##### sender `Telerik.Web.UI.RadDataForm`

The RadDataForm instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### getValues

Raised when values are retrieved from Edit/Insert template. Used with client-side binding. 

#### Event Data

##### sender `Telerik.Web.UI.RadDataForm`

The RadDataForm instance raised the event.

##### args `Sys.CancelEventArgs`

The arguments of the  event.

