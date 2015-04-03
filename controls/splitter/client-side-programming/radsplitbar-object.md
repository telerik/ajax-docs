---
title: RadSplitBar Object
page_title: RadSplitBar Object | UI for ASP.NET AJAX Documentation
description: RadSplitBar Object
slug: splitter/client-side-programming/radsplitbar-object
tags: radsplitbar,object
published: True
position: 3
---

# RadSplitBar Object



## 

The following table lists the important __RadSplitBar__ client-side methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_splitter__ |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the splitter to which the split bar belongs.|
| __get_index__ |none|integer|Returns the index of the split bar in the parent splitter's SplitBars array.|
| __get_prevPane__ |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane positioned above or to the left of the split bar.|
| __get_nextPane__ |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane positioned below or to the right of the split bar.|
| __getHeight__ |none|integer|Returns the height of the split bar.|
| __getWidth__ |none|integer|Returns the width of the split bar.|
| __isCollapsed__ |integer|boolean|Returns whether the specified adjacent pane is collapsed, where 1 identifies the previous pane, and 2 identifies the following pane.|
| __isCollapseDirectionEnabled__ |integer|boolean|Returns whether the split bar can collapse or expand the adjacent pane in the specified direction, where 1 identifies the previous pane, and 2 identifies the following pane.|
| __getCollapseBarElement__ |integer|HTML element|Returns the DOM element for the collapse/expand button whose target is the pane in the specified direction, where 1 identifies the previous pane, and 2 identifies the following pane.|
| __get_enableResize__ |none|boolean|Returns whether the user can drag the split bar to resize the panes in the splitter.|
| __set_enableResize__ |boolean|none|Sets whether the user can drag the split bar to resize panes in the splitter.|
| __get_resizeStep__ |none|integer|Returns the step size for resize operations.|
| __set_resizeStep__ |integer|none|Sets the step size for resize operations.|
| __get_collapseMode__ |none|integer|Returns the collapse mode as follows

* 1: None

* 2: Forward

* 3: Backward

* 4: None|
| __set_collapseMode__ |integer|none|Sets the collapse mode of the split bar.|

# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})
