---
title: Telerik.Web.UI.RadTreeNodeCollection
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadTreeNodeCollection : Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadTreeNode>

## Methods

### indexOf

Gets the index of an node.

#### Parameters

##### node `Telerik.Web.UI.RadTreeNode`

 The node to get the index of

#### Returns

`Number` int

### forEach

Iterates through the Items collection

#### Parameters

##### lambda `Function`

The function to execute on each iteration

#### Returns

`None` 

### remove

Removes an node from the Items collection

#### Parameters

##### node `Telerik.Web.UI.RadTreeNode`

 The node to remove

#### Returns

`None` 

### get_last

Gets the last N nodes where N is passed as a parameter

#### Parameters

##### value `Number`

 Indicates the last N nodes that should be returned 

#### Returns

`None` 

### removeAt

Removes the node at the specified index.

#### Parameters

##### index `Number`

 The index to remove at

#### Returns

`None` 

### getNode

Gets the Node from the Nodes collection residing at the index defined by the parameter passed to the function.

#### Parameters

##### index `Number`

index

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### clear

Clears the Items collection of RadListBox

#### Parameters

#### Returns

`None` 

### get_count

Returns the number of nodes in the Items collection.

#### Parameters

#### Returns

`Number` The number of the items

### add

Adds a node to the Nodes collection. 

#### Parameters

##### node `Telerik.Web.UI.RadTreeNode`

#### Returns

`None`