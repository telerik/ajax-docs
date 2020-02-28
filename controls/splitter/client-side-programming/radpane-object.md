---
title: RadPane Object
page_title: RadPane Object | RadSplitter for ASP.NET AJAX Documentation
description: RadPane Object
slug: splitter/client-side-programming/radpane-object
tags: radpane,object
published: True
position: 2
---

# RadPane Object

The following table lists the important **RadPane** client-side methods:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **collapse** |integer|boolean|Collapses the pane in the specified direction - 1: Forward; 2: Backward. Returns **true** on success, **false** otherwise.|
| **expand** |integer|boolean|Expands the pane in the specified direction - 1: Forward; 2: Backward. Returns **true** on success, **false** otherwise.|
| **get_collapsed** |none|boolean|Returns **true** if the pane is collapsed, **false** if it is expanded.|
| **resize** |integer, integer|none|Resizes the pane by the number of pixels given as the first argument in the direction given by the second argument (1 = backward, 2=forward). **Note:** This method should be also used to resize a RadSlidingPane which is docked in the RadPane.|
| **getVarSize** |none|integer|Returns the size of the pane in the resizable direction.|
| **setVarSize** |integer|none|Sets the size of the pane in the resizable direction.|
| **get_width** |none|integer|Returns the width of the pane.|
| **get_height** |none|integer|Returns the height of the pane.|
| **getVarMinSize** |none|integer|Returns the minimum size of the pane in the resizable direction.|
| **get_minWidth** |none|integer|Returns the minimum width of the pane.|
| **set_minWidth** |integer|none|Sets the minimum width of the pane|
| **get_minHeight** |none|integer|Returns the minimum height of the pane|
| **set_minHeight** |integer|none|Sets the minimum height of the pane.|
| **getVarMaxSize** |none|integer|Returns the maximum size of the pane in the resizable direction.|
| **get_maxWidth** |none|integer|Returns the maximum width of the pane.|
| **set_maxWidth** |integer|none|Sets the maximum width of the pane.|
| **get_maxHeight** |none|integer|Returns the maximum height of the pane.|
| **set_maxHeight** |integer|none|Sets the maximum height of the pane.|
| **getInnerWidth** |none|integer|Returns the width of the pane, excluding borders. This is the width that is available for content.|
| **getInnerHeight** |none|integer|Returns the height of the pane, excluding borders. This is the height that is available for content.|
| **lock** |none|none|Locks the pane, so that it is not resizable and not collapsible.|
| **unlock** |none|none|Unlocks the pane, so that it can be resized or collapsed.|
| **isLocked** |none|boolean|Returns whether the pane is locked.|
| **get_locked** |none|boolean|Returns whether the pane is locked.|
| **set_locked** |boolean|none|Sets whether the pane is locked.|
| **isSplitterContainer** |none|boolean|Returns **true** if the pane content consists of a nested splitter, **false** otherwise.|
| **isExternalContent** |none|boolean|Returns **true** if the pane's content is externally loaded (the **ContentUrl** property is set), **false** otherwise.|
| **get_contentUrl** |none|string|Returns the URL for externally loaded content.|
| **set_contentUrl** |string|none|Specifies the URL for loading content from an external source.|
| **getExtContentElement** |none|HTML element|Returns the DOM element that holds externally-loaded pane content.|
| **get_content** |none|HTML|Returns the HTML content of the pane when it is **not** externally loaded.|
| **set_content** |HTML|none|Sets the HTML content of the pane.|
| **getContentElement** |none|HTML element|Returns the DOM element that holds the pane content when it is not externally loaded.|
| **get_index** |none|integer|Returns the position of the pane within its parent splitter.|
| **print** |Array|none|Prints the content of the pane. If the pane is not displaying external content, the printed content is formatted using the cssFiles whose paths are specified by the array elements.|
| **get_splitter** |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the splitter to which the pane belongs.|
| **getScrollPos** |none|position|Returns the left and top positions of the scroll pane. The return value has two properties: **left** and **top**. See **Example 1**.|
| **setScrollPos** |integer, integer|none|Sets the left and top scrolling positions of the pane.|
| **get_scrolling** |none|[Telerik.Web.UI.SplitterPaneScrolling](https://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_splitterpanescrolling.html)|Returns the value of the Scrolling property of the control.|
| **set_scrolling** |[Telerik.Web.UI.SplitterPaneScrolling](https://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_splitterpanescrolling.html)|none|Sets new value for the Scrolling property of the control.|

>caption Example 1: Using client-side getScrollPos() method.

````JavaScript	
var scrollPos = pane.getScrollPos();
var leftPos = scrollPos.left;
var topPos = scrollPos.top;				
````

## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
