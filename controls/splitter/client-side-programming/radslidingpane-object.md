---
title: RadSlidingPane Object
page_title: RadSlidingPane Object | UI for ASP.NET AJAX Documentation
description: RadSlidingPane Object
slug: splitter/client-side-programming/radslidingpane-object
tags: radslidingpane,object
published: True
position: 5
---

# RadSlidingPane Object



## 

The following table lists the important __RadSlidingPane__ client-side methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_splitter__ |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the __RadSplitter__ to which the sliding pane belongs.|
| __get_index__ |none|integer|Returns the index of the sliding pane in its parent sliding zone's Panes array.|
| __showTab__ |none|none|Shows the tab for this pane.|
| __hideTab__ |none|none|Hides the tab for this pane.|
| __isTabDisplayed__ |none|boolean|Returns whether the tab for this pane is showing.|
| __setVarSize__ |integer|none|Sets the size of the pane in the resizable direction.|
| __getVarSize__ |none|integer|Returns the size of the pane in the resizable direction.|
| __get_width__ |none|integer|Returns the width of the pane.|
| __set_width__ |integer|none|Sets the width of the RadSlidingPane. __Notes:__ 1. Different width can be set only when the __SlideDirection__ of the parent RadSlidingZone is Left or Right.2. The new width will be applied the next time the RadSlidingPane is expanded.3. This method should be used if the RadSlidngPane is not docked. If it is docked, the parent RadPane should be resized by using its __resize__ method.|
| __get_height__ |none|integer|Returns the height of the pane __.__ |
| __set_height__ |||Sets the height of the RadSlidingPane. __Notes:__ 1. Different height can be set only when the __SlideDirection__ of the parent RadSlidingZone is Top or Bottom.2. The new height will be applied the next time the RadSlidingPane is expanded.3. This method should be used if the RadSlidngPane is not docked. If it is docked, the parent RadPane should be resized by using its __resize__ method.|
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
| __get_collapsed__ |none|boolean|Returns whether the pane is collapsed.

>note To collapse a pane, use the collapsePane method of the parent sliding zone.
>
|
| __get_expanded__ |none|boolean|Returns whether the pane is expanded.

>note To expand a pane, use the expandPane method of the parent sliding zone.
>
|
| __get_docked__ |none|boolean|Returns whether the pane is docked.

>note To dock a pane, use the dockPane method of the parent sliding zone.
>
|
| __get_enableResize__ |none|boolean|Returns whether the pane has a resizable border.|
| __set_enableResize__ |boolean|none|Returns whether the pane has a resizable border.|
| __get_enableDock__ |none|boolean|Returns whether the pane can be docked.|
| __set_enableDock__ |boolean|none|Sets whether the pane can be docked.|
| __get_title__ |none|string|Returns the title of the pane.|
| __set_title__ |string|none|Sets the title of the pane.|
| __get_parentPane__ |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane that contains the parent sliding zone.|
| __getContent__ |none|HTML|Returns the html content of the pane.|
| __setContent__ |HTML|none|Sets the html content of the pane.|
| __getContentContainer__ |none|HTML element|Returns the DOM element that holds the content of the pane.|
| __getTabContainer__ |none|HTML element|Returns the DOM element that holds the pane's tab.|
| __getSlidingPaneResizeContainer__ |none|HTML element|Returns the DOM element that holds the resizable border.|
| __getSlidingContainerTitle__ |none|HTML element|Returns the DOM element that displays the title of the pane.|
| __getCollapseIconElement__ |none|HTML element|Returns the DOM element for the <img> that represents the collapse icon.|
| __getDockIconElement__ |none|HTML element|Returns the DOM element for the <img> that represents the dock icon.|
| __getUndockIconElement__ |none|HTML element|Returns the DOM element for the <img> that represents the undock icon.|

# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
