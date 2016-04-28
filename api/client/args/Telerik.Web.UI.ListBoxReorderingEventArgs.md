---
title: Telerik.Web.UI.ListBoxReorderingEventArgs
page_title: Client-side API Reference
description: Telerik.Web.UI.ListBoxReorderingEventArgs
slug: Telerik.Web.UI.ListBoxReorderingEventArgs
---

# Telerik.Web.UI.ListBoxReorderingEventArgs : Sys.CancelEventArgs 

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.ListBoxReorderingEventArgs]({%slug Telerik.Web.UI.ListBoxReorderingEventArgs%})*


## Methods

###  get_item

Returns the item that is about to be reordered. 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem` the item that is about to be reordered.

### get_domEvent

Returns the Sys.UI.DomEvent instance associated to the raised event.

#### Parameters

#### Returns

`Sys.UI.DomEvent` the Sys.UI.DomEvent instance associated to the raised event.

### get_items

Returns an array of the items selected for reordering 

#### Parameters

#### Returns

`Telerik.Web.UI.RadListBoxItem[]` an array of the items selected for reordering.
 

### get_offset

 Returns -1 if you are moving the item up and 1 if you are moving the item down. 

#### Parameters

#### Returns

`Number` -1 if you are moving the item up and 1 if you are moving the item down. 



