---
title: RadSplitBar Object
page_title: RadSplitBar Object - RadSplitter
description: Check our Web Forms article about RadSplitBar Object.
slug: splitter/client-side-programming/radsplitbar-object
tags: radsplitbar,object
published: True
position: 3
---

# RadSplitBar Object


The following table lists the important **RadSplitBar** client-side methods:
 

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_splitter** |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the splitter to which the split bar belongs.|
| **get_index** |none|integer|Returns the index of the split bar in the parent splitter's SplitBars array.|
| **get_prevPane** |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane positioned above or to the left of the split bar.|
| **get_nextPane** |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane positioned below or to the right of the split bar.|
| **getHeight** |none|integer|Returns the height of the split bar.|
| **getWidth** |none|integer|Returns the width of the split bar.|
| **isCollapsed** |integer|boolean|Returns whether the specified adjacent pane is collapsed, where 1 identifies the previous pane, and 2 identifies the following pane.|
| **isCollapseDirectionEnabled** |integer|boolean|Returns whether the split bar can collapse or expand the adjacent pane in the specified direction, where 1 identifies the previous pane, and 2 identifies the following pane.|
| **getCollapseBarElement** |integer|HTML element|Returns the DOM element for the collapse/expand button whose target is the pane in the specified direction, where 1 identifies the previous pane, and 2 identifies the following pane.|
| **get_enableResize** |none|boolean|Returns whether the user can drag the split bar to resize the panes in the splitter.|
| **set_enableResize** |boolean|none|Sets whether the user can drag the split bar to resize panes in the splitter.|
| **get_resizeStep** |none|integer|Returns the step size for resize operations.|
| **set_resizeStep** |integer|none|Sets the step size for resize operations.|
| **get_collapseMode** |none|integer|Returns the collapse mode as follows: 1-None; 2-Forward; 3-Backward; 4-None.|
| **set_collapseMode** |integer|none|Sets the collapse mode of the split bar.|

## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})
