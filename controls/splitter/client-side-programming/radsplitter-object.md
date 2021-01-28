---
title: RadSplitter Object
page_title: RadSplitter Object - RadSplitter
description: Check our Web Forms article about RadSplitter Object.
slug: splitter/client-side-programming/radsplitter-object
tags: radsplitter,object
published: True
position: 1
---

# RadSplitter Object

The following table lists the important **RadSplitter** client-side methods:

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **getContainerElement** |none|HTML element|Returns the outermost DOM element used by the splitter.|
| **getEndPane** |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the last pane in the splitter (the rightmost pane in a splitter with vertical orientation or bottommost pane in a splitter with horizontal orientation).|
| **getStartPane** |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the first pane in the splitter (the leftmost pane in a splitter with vertical orientation or topmost pane in a splitter with horizontal orientation).|
| **getPaneById** |string|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane with the specified ID (if it exists), otherwise null.|
| **getPaneByIndex** |integer|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane at the specified position, counting from the left or top, where 0 is the index of the first pane. If there is no such pane, returns null.|
| **getPanes** |none|Array|Returns an array containing all the panes of the splitter, in order. Each array entry is a **RadPane** client-side object.|
| **getSplitBarById** |string|[RadSplitBar]({%slug splitter/client-side-programming/radsplitbar-object%})|Returns the split bar with the specified ID (if it exists), otherwise null.|
| **getSplitBarByIndex** |integer|[RadSplitBar]({%slug splitter/client-side-programming/radsplitbar-object%})|Returns the split bar at the specified position, where 0 is the position of the first split bar. If there is no such split bar, returns null.|
| **getSplitBars** |none|Array|Returns an array containing all split bars in the splitter. Each array entry is a **RadSplitBar** client-side object.|
| **getInnerHeight** |none|integer|Returns the height of the splitter, excluding borders.|
| **getInnerWidth** |none|integer|Returns the width of the splitter, excluding borders.|
| **get_height** |none|integer|Returns the height of the splitter, including borders.|
| **set_height** |integer|none|Sets the height of the splitter.|
| **get_width** |none|integer|Returns the width of the splitter, including borders.|
| **set_width** |integer|none|Sets the width of the splitter.|
| **resize** |integer, integer|none|Resizes the splitter to the specified width and height.|
| **getMinHeight** |none|integer|Returns the minimum height of the splitter.|
| **getMaxHeight** |none|integer|Returns an maximum height of the splitter.|
| **getMinWidth** |none|integer|Returns the minimum width of the splitter.|
| **getMaxWidth** |none|integer|Returns the maximum width of the splitter.|
| **isVertical** |none|boolean|Returns **true** if the splitter orientation is vertical, **false** if it is horizontal.|
| **isNested** |none|boolean|Returns **true** if the splitter is nested as the only control inside a **RadPane** control, **false** otherwise.|
| **get_liveResize** |none|boolean|Returns **true** if the splitter resizes panes in live mode, **false** if a separate drag image appears during resize operations.|
| **set_liveResize** |boolean|none|Sets whether the splitter resizes panes in live mode.|
| **get_resizeMode** |none|integer|Returns the resize mode of the splitter, where: 1 = AdjacentPane; 2 = Proportional; 3 = EndPane|
| **set_resizeMode** |integer|none|Sets the resize mode of the splitter.|

## See Also

 * [Client-side Programming Overview]({%slug splitter/client-side-programming/overview%})

 * [Client-side Events Overview]({%slug splitter/client-side-programming/events/overview%})
