---
title: Telerik.Web.UI.ListBoxTransferredEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.ListBoxTransferredEventArgs
slug: Telerik.Web.UI.ListBoxTransferredEventArgs
---

# Telerik.Web.UI.ListBoxTransferredEventArgs : Sys.EventArgs 

## Inheritance Hierarchy

* Sys.EventArgs
* *[Telerik.Web.UI.ListBoxTransferredEventArgs]({%slug Telerik.Web.UI.ListBoxTransferredEventArgs%})*

## Methods

###  get_item

Returns the item that has been transferred. 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem` the item that has been transferred.

###  get_items

 Returns an array of items that have been transferred. 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem[]` an array of items that have been transferred. 
 

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

