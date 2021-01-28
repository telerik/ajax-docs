---
title: OnTooltipShow
page_title: OnTooltipShow - RadPivotGrid
description: Check our Web Forms article about OnTooltipShow.
slug: pivotgrid/client-side-programming/events/ontooltipshow
tags: ontooltipshow
published: True
position: 4
---

# OnTooltipShow



This event is raised immediately before the tooltip is shown on the client. Cannot be cancelled.

## 


>caption  

|  **Fired by**  | RadPivotGrid |
| ------ | ------ |
| **Arguments** | **get_toolTip()** - reference to the client-side object of the toolTip that will be shown. **get_originalText()** - – gets the internal text generated from the server,which will be used to create the different rows of data shown in the toolTip. The text is semicolonseparated, for example: *Sum of TotalPrice;Value: $21,080.00;Row: Beverages - Côte de Blaye;Column: 1996 - Quarter 3 - Sum of TotalPrice*  **get_dataValue()** - returns the row of the toolTip that shows the data value.For row and column header cells which don’t have a value the method returns the dataField in the brackets. **get_columnsData()** - returns the path of the column ancestors for the current	cell of the tooltip if avaialable, otherwise undefined. For example: *"Column: 1996 -Quarter 3 - Sum of TotalPrice"* . **get_rowsData()** - returns the path of the row ancestors for the current cell ofthe tooltip if avaialable, otherwise undefined. For example: *"Row: Beverages - Côte deBlaye"* .|
| **Can be canceled** |No|

Example:

````JavaScript
<script type="text/javascript">
	function tooltipShow(sender, eventArgs) {
		alert("You hovered over a cell with content: " + eventArgs.get_dataValue());
	}
</script>
````


