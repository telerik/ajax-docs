---
title: Telerik.Web.UI.OrgChartNode
page_title: Telerik.Web.UI.OrgChartNode
description: Telerik.Web.UI.OrgChartNode
---

# Telerik.Web.UI.OrgChartNode

Represents an Telerik.Web.UI.OrgChartNode OrgChartNodein the Telerik.Web.UI.RadOrgChart RadOrgChartcontrol.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.OrgChartNode : IDisposable, IOrgChartNodeContainer, IOrgChartRendererContainer, IXmlSerializable

## Properties

###  Collapsed `Boolean`

Gets or sets whether the Node to be collapsed/expand

#### Remarks
The property takes effect if EnableCollapsing property of the RadOrgChart is set to true.

###  ColumnCount `Int32`

Gets or sets the number of columns in the Node's visualization.

#### Remarks
Simply breaks the single-line presentation of the group in RadOrgChart on multiple lines.

###  Container `OrgChartNodeCollection`

Gets the Node collection containing the current Node.

#### Remarks
The collection containing the current Node.

###  CssClass `String`

Gets or sets the CSS class of the OrgChartNode.

#### Remarks
The set CSS class is rendered additionally to the Node.

###  GroupCollapsed `Boolean`

Gets or sets whether the GroupItems of the Node to be collapsed/expand

#### Remarks
The property takes effect if EnableGroupCollapsing property of the RadOrgChart is set to true.

###  GroupItems `OrgChartGroupItemCollection`

Gets or sets OrgChartNode'sGroupItem collection.

#### Remarks
Collection of all GroupItems in the Node.

###  HasNodesForLoad `OrgChartNodeCollection`

Gets or set whether the Node has nodes for load

#### Remarks
Used to determine if the Node is the last and to render an expand/collapse arrow on it in web service binding

###  ID `String`

Gets the value of the data field ID of the currently bound Node.

###  ItemTemplate `ITemplate`

Gets or sets Template for all contained GroupItems.

#### Remarks
When a template is set, it is applied for all items in the Node, which doesn't have a template set.

###  Level `Int32`

Gets the depth level of the Node towards the RadOrgChart.

#### Remarks
When the Node is not added in RadOrgChart, the level is -1.

###  Nodes `OrgChartNodeCollection`

Gets a collection of the direct child Nodes of the current.

###  Parent `IOrgChartNodeContainer`

Gets Node's parent in the hierarchy (OrgChartNode/RadOrgChart).

###  RenderedFields `OrgChartRenderedFieldCollection`

Gets OrgChartRenderedFieldCollection for theNode.

###  Renderer `OrgChartNodeRendererBase`

Gets the Renderer for OrgChartNode.

## Methods

###  SyncRenderedProperties

Synchronize Renderer's properties during OnPreRender stage.

#### Returns

`System.Void` 

