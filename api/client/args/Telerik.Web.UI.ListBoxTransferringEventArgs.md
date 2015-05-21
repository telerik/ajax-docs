---
title: Telerik.Web.UI.ListBoxTransferringEventArgs
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.ListBoxTransferringEventArgs
---

# Telerik.Web.UI.ListBoxTransferringEventArgs : Sys.CancelEventArgs 

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.ListBoxTransferringEventArgs]({%slug Telerik.Web.UI.ListBoxTransferringEventArgs%})*

## Methods

###  get_item

Returns the item that is about to be transferred. 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem` the item that is about to be transferred. 

###  get_items

returns an array of items that are about to be transferred 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem[]`  an array of items that are about to be transferred
 

###  get_sourceListBox

Returns the instance of the source RadListBox which the item currently belongs to.

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBox` the instance of the source RadListBox which the item currently belongs to.


###  get_destinationListBox

Returns the instance of the destination RadListBox where the item is transferring to. 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBox` the instance of the destination RadListBox where the item is transferring to. 


###  get_domEvent

Returns the Sys.UI.DomEvent instance associated to the raised event.

#### Parameters

#### Returns

`Sys.UI.DomEvent` the Sys.UI.DomEvent instance associated to the raised event.

