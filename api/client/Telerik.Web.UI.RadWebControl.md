---
title: Telerik.Web.UI.RadWebControl
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadWebControl
---

# Telerik.Web.UI.RadWebControl : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})*

## Methods

###  get_clientState

#### Parameters

#### Returns

`String`  Client state 

###  get_clientStateFieldID

#### Parameters

#### Returns

`String`  ID of the hidden field used to store the client state 

###  raiseEvent

Raise the event

#### Parameters

##### eventName `String`

 Name of the event to be raised 

##### eventArgs `Sys.EventArgs`

 Event arguments for the given event 

#### Returns

`None` 

###  saveClientState

This function should return the serialized client state of the control.

#### Parameters

#### Returns

`None` 

###  set_clientState

Sets the client state of this control

#### Parameters

##### value `String`

The client state for this control

#### Returns

`None` 

###  set_clientStateFieldID

Sets the ID of the client state field of this control

#### Parameters

##### value `String`

The ID of the client state field for this control

#### Returns

`None` 

###  updateClientState

Call this function to update the client state hidden field. Use this function with caution, because it is resource hungry.

#### Parameters

#### Returns

`None` 


