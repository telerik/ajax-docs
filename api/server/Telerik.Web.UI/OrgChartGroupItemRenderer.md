---
title: Telerik.Web.UI.OrgChartGroupItemRenderer
page_title: Telerik.Web.UI.OrgChartGroupItemRenderer
description: Telerik.Web.UI.OrgChartGroupItemRenderer
---

# Telerik.Web.UI.OrgChartGroupItemRenderer

Represents the renderer of Telerik.Web.UI.OrgChartGroupItem OrgChartGroupItemin Classic render mode.

#### Remarks
Renders OrgChartGroupItem.
            All renderers are attached to the control's tree during PreRender stage.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.OrgChartGroupItemRendererBase : INamingContainer, IOrgChartFieldsRenderer
* Telerik.Web.UI.OrgChartGroupItemRenderer

## Properties

###  EnableCollapsing `Boolean`

Gets or sets if collapsing is enabled.

###  Collapsed `Boolean`

Gets or sets the Node collapsed state

#### Remarks
Determines what CSSClass to render on the Expand/Collapse Node

###  HasNodes `Boolean`

Gets or set whether the Node has nodes

#### Remarks
Used to determine if the Node is the last and not to render an expand/collapse arrow on it

###  HasNodesForLoad `Boolean`

Gets or set whether the Node has nodes for load

#### Remarks
Used to determine if the Node is the last and to render an expand/collapse arrow on it in web service binding

###  TagKey `HtmlTextWriterTag`

The default HtmlTextWriterTag is overrided to li or div(depends on if the item's GroupItemCollection is a group)

#### Remarks
The base HtmlTextWriterTag is span.

