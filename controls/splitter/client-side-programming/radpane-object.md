---
title: RadPane Object
page_title: RadPane Object | UI for ASP.NET AJAX Documentation
description: RadPane Object
slug: splitter/client-side-programming/radpane-object
tags: radpane,object
published: True
position: 2
---

# RadPane Object



## 

The following table lists the important __RadPane__ client-side methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __collapse__ |integer|boolean|Collapses the pane in the specified direction - 1: Forward; 2: Backward. Returns __true__ on success, __false__ otherwise.|
| __expand__ |integer|boolean|Expands the pane in the specified direction - 1: Forward; 2: Backward. Returns __true__ on success, __false__ otherwise.|
| __get_collapsed__ |none|boolean|Returns __true__ if the pane is collapsed, __false__ if it is expanded.|
| __resize__ |integer, integer|none|Resizes the pane by the number of pixels given as the first argument in the direction given by the second argument (1 = backward, 2=forward). __Note:__ This method should be also used to resize a RadSlidingPane which is docked in the RadPane.|
| __getVarSize__ |none|integer|Returns the size of the pane in the resizable direction.|
| __setVarSize__ |integer|none|Sets the size of the pane in the resizable direction.|
| __get_width__ |none|integer|Returns the width of the pane.|
| __get_height__ |none|integer|Returns the height of the pane.|
| __getVarMinSize__ |none|integer|Returns the minimum size of the pane in the resizable direction.|
| __get_minWidth__ |none|integer|Returns the minimum width of the pane.|
| __set_minWidth__ |integer|none|Sets the minimum width of the pane|
| __get_minHeight__ |none|integer|Returns the minimum height of the pane|
| __set_minHeight__ |integer|none|Sets the minimum height of the pane.|
| __getVarMaxSize__ |none|integer|Returns the maximum size of the pane in the resizable direction.|
| __get_maxWidth__ |none|integer|Returns the maximum width of the pane.|
| __set_maxWidth__ |integer|none|Sets the maximum width of the pane.|
| __get_maxHeight__ |none|integer|Returns the maximum height of the pane.|
| __set_maxHeight__ |integer|none|Sets the maximum height of the pane.|
| __getInnerWidth__ |none|integer|Returns the width of the pane, excluding borders. This is the width that is available for content.|
| __getInnerHeight__ |none|integer|Returns the height of the pane, excluding borders. This is the height that is available for content.|
| __lock__ |none|none|Locks the pane, so that it is not resizable and not collapsible.|
| __unlock__ |none|none|Unlocks the pane, so that it can be resized or collapsed.|
| __isLocked__ |none|boolean|Returns whether the pane is locked.|
| __get_locked__ |none|boolean|Returns whether the pane is locked.|
| __set_locked__ |boolean|none|Sets whether the pane is locked.|
| __isSplitterContainer__ |none|boolean|Returns __true__ if the pane content consists of a nested splitter, __false__ otherwise.|
| __isExternalContent__ |none|boolean|Returns __true__ if the pane's content is externally loaded (the __ContentUrl__ property is set), __false__ otherwise.|
| __get_contentUrl__ |none|string|Returns the URL for externally loaded content.|
| __set_contentUrl__ |string|none|Specifies the URL for loading content from an external source.|
| __getExtContentElement__ |none|HTML element|Returns the DOM element that holds externally-loaded pane content.|
| __get_content__ |none|HTML|Returns the HTML content of the pane when it is __not__ externally loaded.|
| __set_content__ |HTML|none|Sets the HTML content of the pane.|
| __getContentElement__ |none|HTML element|Returns the DOM element that holds the pane content when it is not externally loaded.|
| __get_index__ |none|integer|Returns the position of the pane within its parent splitter.|
| __print__ |Array|none|Prints the content of the pane. If the pane is not displaying external content, the printed content is formatted using the cssFiles whose paths are specified by the array elements.|
| __get_splitter__ |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the splitter to which the pane belongs.|
| __getScrollPos__ |none|position|Returns the left and top positions of the scroll pane. The return value has two properties: __left__ and __top__ .

````JavaScript
	
	    var scrollPos = pane.getScrollPos();
	    var leftPos = scrollPos.left;
	    var topPos = scrollPos.top;
				
````

|
| __setScrollPos__ |integer, integer|none|Sets the left and top scrolling positions of the pane.|
| __get_scrolling__ |none|[Telerik.Web.UI.SplitterPaneScrolling](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_splitterpanescrolling.html)|Returns the value of the Scrolling property of the control.|
| __set_scrolling__ |[Telerik.Web.UI.SplitterPaneScrolling](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_splitterpanescrolling.html)|none|Sets new value for the Scrolling property of the control.|

# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
