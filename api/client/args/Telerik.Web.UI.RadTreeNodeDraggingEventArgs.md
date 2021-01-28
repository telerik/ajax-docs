---
title: Telerik.Web.UI.RadTreeNodeDraggingEventArgs 
description: Client-side API Reference
slug: Telerik.Web.UI.RadTreeNodeDraggingEventArgs
---

# Telerik.Web.UI.RadTreeNodeDraggingEventArgs : Telerik.Web.UI.RadTreeNodeCancelEventArgs

## Inheritance Hierarchy

* [Telerik.Web.UI.RadTreeNodeCancelEventArgs]({%slug Telerik.Web.UI.RadTreeNodeCancelEventArgs%})
* *[Telerik.Web.UI.RadTreeNodeDraggingEventArgs]({%slug Telerik.Web.UI.RadTreeNodeDraggingEventArgs%})*


## Methods

### get_destNode

Retrieves a reference to the destination node, i.e. the node that is being dropped onto.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` 

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

