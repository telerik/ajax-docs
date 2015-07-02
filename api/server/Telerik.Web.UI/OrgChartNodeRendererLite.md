---
title: Telerik.Web.UI.OrgChartNodeRendererLite
page_title: Telerik.Web.UI.OrgChartNodeRendererLite
description: Telerik.Web.UI.OrgChartNodeRendererLite
---

# Telerik.Web.UI.OrgChartNodeRendererLite

Represents the renderer of Telerik.Web.UI.OrgChartNode OrgChartNode.

#### Remarks
Renders OrgChartNode.
            All renderers are attached to the control's tree during PreRender stage.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.OrgChartNodeRendererBase
* Telerik.Web.UI.OrgChartNodeRendererLite

## Properties

###  HasNodesForLoad `Boolean`

Gets or set whether the Node has nodes for load

#### Remarks
Used to determine if the Node is the last and to render an expand/collapse class on it in web service binding

###  TagKey `HtmlTextWriterTag`

The default HtmlTextWriterTag is overrided to li.

#### Remarks
The base HtmlTextWriterTag is span.

