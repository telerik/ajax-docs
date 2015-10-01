---
title: Telerik.Web.UI.GridGroupingSettings
page_title: Telerik.Web.UI.GridGroupingSettings
description: Telerik.Web.UI.GridGroupingSettings
---

# Telerik.Web.UI.GridGroupingSettings

Container of miscellaneous grouping settings of RadGrid control

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridGroupingSettings

## Properties

###  GroupContinuesFormatString `String`

The group header message, indicating that the group continues on the next
            page.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  GroupContinuedFormatString `String`

The group header message indicating that this group continues from the previous
            page.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  GroupSplitDisplayFormat `String`

A part of the string that formats the information label that appears on each
            group header of a group that is split onto several pages parameter {0} will be replaced
            with the number of actual items displayed on the page parameter {1} will be replaced
            with the number of all items in the group

###  GroupSplitFormat `String`

Gets or sets the format string that will be used when group is split, containing
            the GroupSplitDisplayFormat or
            GroupContinuedFormatString and
            GroupContinuesFormatString or the three together.

###  GroupByFieldsSeparator `String`

String that separates each group-by field when displayed in
            GridGroupHeaderItems.

###  CaseSensitive `Boolean`

Gets or sets a value indicating whether the grouping operations will be case
            sensitive or not.

###  ExpandTooltip `String`

Gets or sets a string that will be displayed when the group expand image is
            hovered.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  ExpandAllTooltip `String`

Gets or sets a string that will be displayed when the group expand all image is
            hovered.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  CollapseTooltip `String`

Gets or sets a string that will be displayed when the group collapse image is
            hovered.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  CollapseAllTooltip `String`

Gets or sets a string that will be displayed when the collapse all groups image is
            hovered.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  UnGroupTooltip `String`

Gets or sets a string that will be displayed when a group panel item is
            hovered.

#### Remarks
Localizing the grid messages topic lists all the tooltips and text messages which
            can be modified.

###  UnGroupButtonTooltip `String`

Gets or sets value text of group panel item's ungroup button's tooltip

###  ShowUnGroupButton `Boolean`

Gets or sets value indicating if group panel item's ungroup button should be shown

###  IgnorePagingForGroupAggregates `Boolean`

Gets or sets value indicating if group aggregates should not depend on the current page.

###  RetainGroupFootersVisibility `Boolean`

Gets or sets a value indicating whether the group footers should be kept visible
            when their parent group headers are collapsed.

###  MainTableSummary `String`

The summary attribute for the table that wraps the .

###  NestedTableSummary `String`

The summary attribute for the table second level table in the .

###  GroupItemsWrapperTableSummary `String`

The summary attribute for the table which holds all group items in the .

###  MainTableCaption `String`

The caption for the table that wraps the .

###  NestedTableCaption `String`

The caption for the table second level table in the .

###  GroupItemsWrapperTableCaption `String`

The caption for the table which holds all group items in the .

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

