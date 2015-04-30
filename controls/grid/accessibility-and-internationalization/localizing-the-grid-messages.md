---
title: Localizing the Grid Messages
page_title: Localizing the Grid Messages | RadGrid for ASP.NET AJAX Documentation
description: Localizing the Grid Messages
slug: grid/accessibility-and-internationalization/localizing-the-grid-messages
tags: localizing,the,grid,messages
published: True
position: 0
---

# Localizing the Grid Messages



## Localizing the tooltips

Telerik RadGrid provides the following properties for localization of the hard-coded tooltips:


>caption  

|  **GridHierarchySettings** - **RadGrid.HierarchySettings**  |  |
| ------ | ------ |
| **ExpandTooltip** |The tooltip that will be displayed over the expand child tables button.|
| **CollapseTooltip** |The tooltip that will be displayed over the collapse child tables button.|
| **GridGroupingSettings - RadGrid.GroupingSettings** ||
| **GroupContinuesFormatString** |The group header message, indicating that the group continues on the next page.|
| **GroupContinuedFormatString** |The group header message, indicating that the group continues from the previous page.|
| **ExpandTooltip** |The tooltip that will be displayed over the expand groups button.|
| **CollapseTooltip** |The tooltip that will be displayed over the collapse groups button.|
| **UnGroupTooltip** |The tooltip that will be displayed over the items in the group panel.|
| **GridGroupPanelSettings - RadGrid.GroupPanel** ||
| **Text** |The text that will be rendered inside the group panel when visible.|
| **GridClientMessages** - **RadGrid.ClientSettings.ClientMessages** ||
| **DropHereToReorder** |The tooltip that will be displayed when you start dragging a column.|
| **DragToGroupOrReorder** |The tooltip that will be displayed when you hover a column header of draggable column.|
| **DragToResize** |The tooltip that will be displayed when you hover the resizing handle of a column.|
| **PagerTooltipFormatString** |The tooltip that will be displayed when you hover the vertical scroll when virtual scrolling is enabled. The format is "Page {0} of {1}"|
| **GridSortingSettings - RadGrid.SortingSettings** ||
| **SortToolTip** |The tooltip that will be displayed when you hover the sorting button and there is no sorting applied.|
| **SortedAscToolTip** |The tooltip that will be displayed when you hover the sorting button and the column is sorted ascending.|
| **SortedDescToolTip** |The tooltip that will be displayed when you hover the sorting button and the column is sorted descending.|

## Localizing the GridTableView messages

Telerik RadGrid provides the following properties for customizing the messages related to **GridTableView**.


>caption  

|  **NoMasterRecordsText**  | The text that will be displayed in the **NoRecordsTemplate** when there are no records in the **MasterTableView** . |
| ------ | ------ |
| **NoDetailRecordsText** |The text that will be displayed in the **NoRecordsTemplate** when there are no records in the Detail tables.|

## Localizing the GridStatusBarItem messages


>caption  

|  **ReadyText**  | The text that will be displayed when Telerik RadGrid is not performing an AJAX request. |
| ------ | ------ |
| **LoadingText** |The text that will be displayed when Telerik RadGrid is performing an AJAX request.|



## 

Localizing the GridPagerItem messages


>caption 

|  **RadGrid.PagerStyle**  |  |
| ------ | ------ |
|PrevPageToolTip|The tooltip that will be displayed over the previous page button.|
|PrevPagesToolTip|The tooltip that will be displayed over the previous pages button.|
|NextPageToolTip|The tooltip that will be displayed over the next page button.|
|NextPagesToolTip|The tooltip that will be displayed over the next pages button.|
|PagerTooltipFormatString|The tooltip that will be displayed when dragging the vertical scroll with virtual scrolling enabled. Same as the text under the RadGrid slider pager, changes will be propagated in both places if made.|
|[PageTextFormat]({%slug grid/functionality/paging/changing-the-default-pager/using-pagertextformat%})|The text that will be displayed in the grid pager|

## See Also

 * [Localizing Edit Command Column]({%slug grid/accessibility-and-internationalization/localizing-edit-command-column%})

 * [Localizing the Command Item]({%slug grid/accessibility-and-internationalization/localizing-the-command-item%})

 * [Localizing the Grid Headers]({%slug grid/accessibility-and-internationalization/localizing-the-grid-headers%})
