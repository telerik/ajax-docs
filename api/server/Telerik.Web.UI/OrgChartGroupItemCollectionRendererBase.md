---
title: Telerik.Web.UI.OrgChartGroupItemCollectionRendererBase
page_title: Telerik.Web.UI.OrgChartGroupItemCollectionRendererBase
description: Telerik.Web.UI.OrgChartGroupItemCollectionRendererBase
---

# Telerik.Web.UI.OrgChartGroupItemCollectionRendererBase

Represents the renderer of Telerik.Web.UI.OrgChartGroupItemCollection OrgChartGroupItemCollection.

#### Remarks
Renders OrgChartGroupItemCollection.
            All renderers are attached to the control's tree during PreRender stage.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.OrgChartGroupItemCollectionRendererBase : IOrgChartFieldsRenderer

## Properties

###  Collapsed `Boolean`

Gets or sets the Node collapsed state

#### Remarks
Determines what CSSClass to render on the Expand/Collapse Node

###  EnableCollapsing `Boolean`

Gets or sets if collapsing is enabled.

###  EnableGroupCollapsing `Boolean`

Gets or sets if group collapsing is enabled.

###  GroupCollapsed `Boolean`

Gets or sets the Group collapsed state

#### Remarks
Determines what CSSClass to render on the Expand/Collapse Node

###  GroupItemsCount `Int32`

Gets or sets number of the GroupItems.

###  HasNodes `Boolean`

Gets or set whether the Node has nodes

#### Remarks
Used to determine if the Node is the last and not to render an expand/collapse arrow on it

###  HasNodesForLoad `Boolean`

Gets or set whether the Node has nodes for load

#### Remarks
Used to determine if the Node is the last and to render an expand/collapse arrow on it in web service binding

###  IsGroup `Boolean`

Gets or sets if the parent Node has more than one GroupItem.

###  IsSimpleBinding `Boolean`

Gets or sets if it is SimpleBinding.

###  TagKey `HtmlTextWriterTag`

The default HtmlTextWriterTag is overrided to div.

#### Remarks
The base HtmlTextWriterTag is span.

