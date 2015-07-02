---
title: Telerik.Web.UI.GridGroupPanel
page_title: Telerik.Web.UI.GridGroupPanel
description: Telerik.Web.UI.GridGroupPanel
---

# Telerik.Web.UI.GridGroupPanel

GridGroupPanelappears on the top of Telerik RadGrid
                when P:Telerik.Web.UI.RadGrid.ShowGroupPanel ShowGroupPanelof RadGrid is set to
                trueand if P:Telerik.Web.UI.GridClientSettings.AllowDragToGroup is set to true, you can drag column to the panel to group data by
                that column.

#### Remarks
Group by fields (displayed in the GroupPanel) are defined through the
                P:Telerik.Web.UI.GridTableView.GroupByExpressions GridGroupByExpressions.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.GridGroupPanel

## Properties

###  GroupPanelItems `List`1`

Gets a collection of items displayed in the group panel. These items represent
            the GroupByFields used for Telerik RadGrid
            grouping.

###  Text `String`

Gets or sets the text displayed in the group panel to urge the user dragging a
            column to group by.

#### Remarks
Note that the GroupPanel Text has a default value, so you don't need to set it
            generally.

###  PanelStyle `GridGroupPanelStyle`

Gets the style that will be used for the group panel.

###  PanelItemsStyle `GridPanelItemsStyle`

Gets the style that will be used for the group panel items.

###  Visible `Boolean`

Gets or sets a value indicating whether the group panel will be displayed.

## Methods

###  InitializeIn

#### Returns

`System.Void` 

###  Ungroup

#### Returns

`System.Void` 

###  Swap

#### Returns

`System.Void` 

