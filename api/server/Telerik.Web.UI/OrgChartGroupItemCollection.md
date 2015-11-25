---
title: Telerik.Web.UI.OrgChartGroupItemCollection
page_title: Telerik.Web.UI.OrgChartGroupItemCollection
description: Telerik.Web.UI.OrgChartGroupItemCollection
---

# Telerik.Web.UI.OrgChartGroupItemCollection

Represents collection of Telerik.Web.UI.OrgChartGroupItem GroupItemsin the Telerik.Web.UI.RadOrgChart RadOrgChartcontrol.

## Inheritance Hierarchy

* System.Object
* System.Collections.Generic.List`1
* Telerik.Web.UI.OrgChartGroupItemCollection : IDisposable, IOrgChartRendererContainer, IXmlSerializable

## Properties

###  Node `OrgChartNode`

Gets or sets the node to which the items belong.

###  Renderer `OrgChartGroupItemCollectionRendererBase`

Gets the Renderer for OrgChartGroupItemCollection.

## Methods

###  Add

Add a new GroupItem to the OrgChartGroupItemCollection if the collection does not contains it.

#### Parameters

#### item `Telerik.Web.UI.OrgChartGroupItem`

The added Item

#### Returns

`System.Void` 

###  Insert

Insert a new Item to the OrgChartGroupItemCollection on a specific position.

#### Parameters

#### index `System.Int32`

Integer position to insert at

#### item `Telerik.Web.UI.OrgChartGroupItem`

The added GroupItem

#### Returns

`System.Void` 

###  AddRange

Add an IEnumerable of GroupItems to the OrgChartGroupItemCollection.

#### Parameters

#### collection `System.Collections.Generic.IEnumerable{Telerik.Web.UI.OrgChartGroupItem}`

IEnumerable ofGroupItems

#### Returns

`System.Void` 

###  InsertRange

Insert a collection of GroupItems to a specified index in the OrgChartGroupItemCollection.

#### Parameters

#### index `System.Int32`

Integer the position to insert at

#### collection `System.Collections.Generic.IEnumerable{Telerik.Web.UI.OrgChartGroupItem}`

IEnumerable of GroupItems

#### Returns

`System.Void` 

###  Remove

Remove a GroupItem from the OrgChartGroupItemCollection if the collection contains it.

#### Parameters

#### item `Telerik.Web.UI.OrgChartGroupItem`

The removed GroupItem

#### Returns

`System.Void` 

###  RemoveAll

Remove all GroupItems in the collection matching the passed condition.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.OrgChartGroupItem}`

Predicate to match GroupItems

#### Returns

`System.Void` 

###  RemoveAt

Remove the GroupItem on the specified position in the collection.

#### Parameters

#### index `System.Int32`

Integer index

#### Returns

`System.Void` 

###  RemoveRange

Removes a range of GroupItems in the collection.

#### Parameters

#### index `System.Int32`

Integer index - the starting point of the range

#### count `System.Int32`

Integer count - the size of the range

#### Returns

`System.Void` 

###  Clear

Remove all GroupItems in the collection.

#### Returns

`System.Void` 

###  SyncRenderedProperties

Synchronize Renderer's properties during OnPreRender stage.

#### Returns

`System.Void` 

