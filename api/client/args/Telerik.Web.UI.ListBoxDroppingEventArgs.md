---
title: Telerik.Web.UI.ListBoxDroppingEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.ListBoxDroppingEventArgs
slug: Telerik.Web.UI.ListBoxDroppingEventArgs
---

# Telerik.Web.UI.ListBoxDroppingEventArgs : Sys.CancelEventArgs 

## Inheritance Hierarchy

* Sys.CancelEventArgs
* [Telerik.Web.UI.ListBoxDroppingEventArgs]({%slug Telerik.Web.UI.ListBoxDroppingEventArgs%})

## Methods

###  get_sourceItem

Returns the first selected item that is dropped 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem`  the first selected item that is dropped 

###  get_sourceItems

Returns an array of the selected items that are dropped 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem[]` an array of the selected items that are dropped 
 

###  get_destinationItem

Returns the destination item

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem`  the destination item


###  get_dropPosition

Returns the relative position either 0 (Above) or 1 (Below) toward the destination item.

#### Parameters

#### Returns

`Number`  the relative position either 0 (Above) or 1 (Below) toward the destination item.



###  get_htmlElement

returns the DOM html element which the item is dropped onto. 

#### Parameters

#### Returns

`Element` the DOM html element which the item is dropped onto. 


###  get_domEvent

Returns the Sys.UI.DomEvent instance associated to the raised event.

#### Parameters

#### Returns

`Sys.UI.DomEvent` the Sys.UI.DomEvent instance associated to the raised event.

