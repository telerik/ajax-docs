---
title: Telerik.Web.UI.RadTreeNodeDroppingEventArgs 
title_prefix: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadTreeNodeDroppingEventArgs
---

# Telerik.Web.UI.RadTreeNodeDroppingEventArgs : Sys.CancelEventArgs

## Inheritance Hierarchy

* Sys.CancelEventArgs
* *[Telerik.Web.UI.RadTreeNodeDroppingEventArgs]({%slug Telerik.Web.UI.RadTreeNodeDroppingEventArgs%})*


## Methods

### get_destNode

retrieves a reference to the destination node, i.e. the node that is being dropped onto.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### get_domEvent

retrieves a DOM event object of the node dropping.

#### Parameters

#### Returns

`Element`

### get_dropPosition

Returns the relative position of the dropped node(s) and can be "over", "above" or "below". 

#### Parameters

#### Returns

`String` 

### get_htmlElement

Retrieves the DOM html element representing the destination node.

#### Parameters

#### Returns

`Element` 

### get_sourceNode

Retrieves the node being dropped.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### get_sourceNodes

Retrieves an array of nodes being dropped. It is useful when the RadTreeView MultipleSelect property is True.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNodeCollection` 

### set_htmlElement

Sets the DOM html element representing the destination node.

#### Parameters

#### Returns

`Element` 


