---
title: Telerik.Web.UI.OrgChartNodeCollection
page_title: Telerik.Web.UI.OrgChartNodeCollection
description: Telerik.Web.UI.OrgChartNodeCollection
---

# Telerik.Web.UI.OrgChartNodeCollection

Represents collection of Telerik.Web.UI.OrgChartNode Nodesin the Telerik.Web.UI.RadOrgChart RadOrgChartcontrol.

## Inheritance Hierarchy

* System.Object
* System.Collections.Generic.List`1
* Telerik.Web.UI.OrgChartNodeCollection : IDisposable, IOrgChartRendererContainer, IXmlSerializable

## Properties

###  NodesContainer `IOrgChartNodeContainer`

Gets and sets OrgChartNodeCollection's parent container.

###  IsRootNodeCollection `Boolean`

Check if the OrgChartNodeCollection is the root node collection for RadOrgChart control.

###  Renderer `OrgChartNodeCollectionRenderer`

Gets the Renderer for OrgChartNodeCollection

## Methods

###  Add

Add a new Node to the OrgChartNodeCollection if the collection does not contains it.

#### Parameters

#### node `Telerik.Web.UI.OrgChartNode`

The added Node

#### Returns

`System.Void` 

###  Insert

Insert a new Node to the OrgChartNodeCollection on a specific position.

#### Parameters

#### index `System.Int32`

Integer position to insert at

#### node `Telerik.Web.UI.OrgChartNode`

The added Node

#### Returns

`System.Void` 

###  AddRange

Add a collection of Nodes to the OrgChartNodeCollection.

#### Parameters

#### collection `System.Collections.Generic.IEnumerable{Telerik.Web.UI.OrgChartNode}`

IEnumerable of Nodes

#### Returns

`System.Void` 

###  InsertRange

Insert a collection of Nodes to a specified index in the OrgChartNodeCollection.

#### Parameters

#### index `System.Int32`

Integer the position to insert at

#### collection `System.Collections.Generic.IEnumerable{Telerik.Web.UI.OrgChartNode}`

IEnumerable of Nodes

#### Returns

`System.Void` 

###  Remove

Remove a Node from the OrgChartNodeCollection if the collection contains it.

#### Parameters

#### node `Telerik.Web.UI.OrgChartNode`

The removed Node

#### Returns

`System.Void` 

###  RemoveAll

Remove all Nodes that match the passed criteria from the collection.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.OrgChartNode}`

Predicate to match Nodes for removal

#### Returns

`System.Void` 

###  RemoveAt

Remove the Node on the specified position in the collection.

#### Parameters

#### index `System.Int32`

Integer index

#### Returns

`System.Void` 

###  RemoveRange

Removes a range of Nodes in the collection.

#### Parameters

#### index `System.Int32`

Integer index - the starting point of the range

#### count `System.Int32`

Integer count - the size of the range

#### Returns

`System.Void` 

###  Clear

Remove all Nodes in the collection.

#### Returns

`System.Void` 

###  SyncRenderedProperties

Synchronize Renderer's properties during OnPreRender stage.

#### Returns

`System.Void` 

