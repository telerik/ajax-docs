---
title: Localizing the Grid Messages
page_title: Localizing the Grid Messages - RadGrid
description: Learn how to localize RadGrid tooltips, pager messages, status text, grouping messages, and other GridTableView settings.
slug: grid/accessibility-and-internationalization/localizing-the-grid-messages
tags: localizing,the,grid,messages
published: True
position: 0
---

# Localizing the Grid Messages



## Localizing the tooltips

Telerik RadGrid provides the following properties for localization of the hard-coded tooltips:


### Localizing grid tooltips

| **Setting** | **Description** |
| ------ | ------ |
| **ExpandTooltip** |The tooltip that will be displayed over the expand child tables button.|
| **CollapseTooltip** |The tooltip that will be displayed over the collapse child tables button.|
| **GridGroupingSettings - RadGrid.GroupingSettings** | Settings for grouping messages. |
| **GroupContinuesFormatString** |The group header message, indicating that the group continues on the next page.|
| **GroupContinuedFormatString** |The group header message, indicating that the group continues from the previous page.|
| **ExpandTooltip** |The tooltip that will be displayed over the expand groups button.|
| **CollapseTooltip** |The tooltip that will be displayed over the collapse groups button.|
| **UnGroupTooltip** |The tooltip that will be displayed over the items in the group panel.|
| **GridGroupPanelSettings - RadGrid.GroupPanel** | Settings for the group panel. |
| **Text** |The text that will be rendered inside the group panel when visible.|
| **GridClientMessages - RadGrid.ClientSettings.ClientMessages** | Settings for client-side messages. |
| **DropHereToReorder** |The tooltip that will be displayed when you start dragging a column.|
| **DragToGroupOrReorder** |The tooltip that will be displayed when you hover a column header of draggable column.|
| **DragToResize** |The tooltip that will be displayed when you hover the resizing handle of a column.|
| **PagerTooltipFormatString** |The tooltip that will be displayed when you hover the vertical scroll when virtual scrolling is enabled. The format is "Page {0} of {1}"|
| **GridSortingSettings - RadGrid.SortingSettings** | Settings for sorting messages. |
| **SortToolTip** |The tooltip that will be displayed when you hover the sorting button and there is no sorting applied.|
| **SortedAscToolTip** |The tooltip that will be displayed when you hover the sorting button and the column is sorted ascending.|
| **SortedDescToolTip** |The tooltip that will be displayed when you hover the sorting button and the column is sorted descending.|

## Localizing the GridTableView messages

Telerik RadGrid provides the following properties for customizing the messages related to **GridTableView**.


### Localizing GridTableView messages

| **Property** | **Description** |
| ------ | ------ |
| **NoMasterRecordsText** | The text displayed in the **NoRecordsTemplate** when the **MasterTableView** has no records. |
| **NoDetailRecordsText** |The text that will be displayed in the **NoRecordsTemplate** when there are no records in the Detail tables.|

## Localizing the GridStatusBarItem messages


### Localizing GridStatusBarItem messages

| **Property** | **Description** |
| ------ | ------ |
| **ReadyText** | The text displayed when RadGrid is not performing an AJAX request. |
| **LoadingText** | The text displayed when RadGrid is performing an AJAX request. |



## Localizing GridPagerItem messages


### Pager message properties

| **Property** | **Description** |
| ------ | ------ |
| **PrevPageToolTip** | The tooltip displayed over the previous page button. |
| **PrevPagesToolTip** | The tooltip displayed over the previous pages button. |
| **NextPageToolTip** | The tooltip displayed over the next page button. |
| **NextPagesToolTip** | The tooltip displayed over the next pages button. |
| **PagerTooltipFormatString** | The tooltip displayed when dragging the vertical scroll with virtual scrolling enabled. Changes also apply to the text under the RadGrid slider pager. |
| [PageTextFormat]({%slug grid/functionality/paging/changing-the-default-pager/using-pagertextformat%}) | The text displayed in the grid pager. |

## See Also

 * [Localizing Edit Command Column]({%slug grid/accessibility-and-internationalization/localizing-edit-command-column%})

 * [Localizing the Command Item]({%slug grid/accessibility-and-internationalization/localizing-the-command-item%})

 * [Localizing the Grid Headers]({%slug grid/accessibility-and-internationalization/localizing-the-grid-headers%})
