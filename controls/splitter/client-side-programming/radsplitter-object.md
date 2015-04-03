---
title: RadSplitter Object
page_title: RadSplitter Object | UI for ASP.NET AJAX Documentation
description: RadSplitter Object
slug: splitter/client-side-programming/radsplitter-object
tags: radsplitter,object
published: True
position: 1
---

# RadSplitter Object



## 

The following table lists the important __RadSplitter__ client-side methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __getContainerElement__ |none|HTML element|Returns the outermost DOM element used by the splitter.|
| __getEndPane__ |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the last pane in the splitter (the rightmost pane in a splitter with vertical orientation or bottommost pane in a splitter with horizontal orientation).|
| __getStartPane__ |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the first pane in the splitter (the leftmost pane in a splitter with vertical orientation or topmost pane in a splitter with horizontal orientation).|
| __getPaneById__ |string|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane with the specified ID (if it exists), otherwise null.|
| __getPaneByIndex__ |integer|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane at the specified position, counting from the left or top, where 0 is the index of the first pane. If there is no such pane, returns null.|
| __getPanes__ |none|Array|Returns an array containing all the panes of the splitter, in order. Each array entry is a __RadPane__ client-side object.|
| __getSplitBarById__ |string|[RadSplitBar]({%slug splitter/client-side-programming/radsplitbar-object%})|Returns the split bar with the specified ID (if it exists), otherwise null.|
| __getSplitBarByIndex__ |integer|[RadSplitBar]({%slug splitter/client-side-programming/radsplitbar-object%})|Returns the split bar at the specified position, where 0 is the position of the first split bar. If there is no such split bar, returns null.|
| __getSplitBars__ |none|Array|Returns an array containing all split bars in the splitter. Each array entry is a __RadSplitBar__ client-side object.|
| __getInnerHeight__ |none|integer|Returns the height of the splitter, excluding borders.|
| __getInnerWidth__ |none|integer|Returns the width of the splitter, excluding borders.|
| __get_height__ |none|integer|Returns the height of the splitter, including borders.|
| __set_height__ |integer|none|Sets the height of the splitter.|
| __get_width__ |none|integer|Returns the width of the splitter, including borders.|
| __set_width__ |integer|none|Sets the width of the splitter.|
| __resize__ |integer, integer|none|Resizes the splitter to the specified width and height.|
| __getMinHeight__ |none|integer|Returns the minimum height of the splitter.|
| __getMaxHeight__ |none|integer|Returns an maximum height of the splitter.|
| __getMinWidth__ |none|integer|Returns the minimum width of the splitter.|
| __getMaxWidth__ |none|integer|Returns the maximum width of the splitter.|
| __isVertical__ |none|boolean|Returns __true__ if the splitter orientation is vertical, __false__ if it is horizontal.|
| __isNested__ |none|boolean|Returns __true__ if the splitter is nested as the only control inside a __RadPane__ control, __false__ otherwise.|
| __get_liveResize__ |none|boolean|Returns __true__ if the splitter resizes panes in live mode, __false__ if a separate drag image appears during resize operations.|
| __set_liveResize__ |boolean|none|Sets whether the splitter resizes panes in live mode.|
| __get_resizeMode__ |none|integer|Returns the resize mode of the splitter, where

* 1 = AdjacentPane

* 2 = Proportional

* 3 = EndPane|
| __set_resizeMode__ |integer|none|Sets the resize mode of the splitter.|

# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
