---
title: RadSlidingPane Object
page_title: RadSlidingPane Object | RadSplitter for ASP.NET AJAX Documentation
description: RadSlidingPane Object
slug: splitter/client-side-programming/radslidingpane-object
tags: radslidingpane,object
published: True
position: 5
---

# RadSlidingPane Object

The following table lists the important **RadSlidingPane** client-side methods:

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_splitter** |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the **RadSplitter** to which the sliding pane belongs.|
| **get_index** |none|integer|Returns the index of the sliding pane in its parent sliding zone's Panes array.|
| **showTab** |none|none|Shows the tab for this pane.|
| **hideTab** |none|none|Hides the tab for this pane.|
| **isTabDisplayed** |none|boolean|Returns whether the tab for this pane is showing.|
| **setVarSize** |integer|none|Sets the size of the pane in the resizable direction.|
| **getVarSize** |none|integer|Returns the size of the pane in the resizable direction.|
| **get_width** |none|integer|Returns the width of the pane.|
| **set_width** |integer|none|Sets the width of the RadSlidingPane. **Notes:** 1. Different width can be set only when the **SlideDirection** of the parent RadSlidingZone is Left or Right.2. The new width will be applied the next time the RadSlidingPane is expanded.3. This method should be used if the RadSlidngPane is not docked. If it is docked, the parent RadPane should be resized by using its **resize** method.|
| **get_height** |none|integer|Returns the height of the pane **.** |
| **set_height** |||Sets the height of the RadSlidingPane. **Notes:** 1. Different height can be set only when the **SlideDirection** of the parent RadSlidingZone is Top or Bottom.2. The new height will be applied the next time the RadSlidingPane is expanded.3. This method should be used if the RadSlidngPane is not docked. If it is docked, the parent RadPane should be resized by using its **resize** method.|
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
| **get_collapsed** |none|boolean|Returns whether the pane is collapsed. *Note to collapse a pane, use the collapsePane method of the parent sliding zone.*|
| **get_expanded** |none|boolean|Returns whether the pane is expanded. *Note to expand a pane, use the expandPane method of the parent sliding zone.*|
| **get_docked** |none|boolean|Returns whether the pane is docked. *Note to dock a pane, use the dockPane method of the parent sliding zone.*|
| **get_enableResize** |none|boolean|Returns whether the pane has a resizable border.|
| **set_enableResize** |boolean|none|Returns whether the pane has a resizable border.|
| **get_enableDock** |none|boolean|Returns whether the pane can be docked.|
| **set_enableDock** |boolean|none|Sets whether the pane can be docked.|
| **get_title** |none|string|Returns the title of the pane.|
| **set_title** |string|none|Sets the title of the pane.|
| **get_parentPane** |none|[RadPane]({%slug splitter/client-side-programming/radpane-object%})|Returns the pane that contains the parent sliding zone.|
| **getContent** |none|HTML|Returns the html content of the pane.|
| **setContent** |HTML|none|Sets the html content of the pane.|
| **getContentContainer** |none|HTML element|Returns the DOM element that holds the content of the pane.|
| **getTabContainer** |none|HTML element|Returns the DOM element that holds the pane's tab.|
| **getSlidingPaneResizeContainer** |none|HTML element|Returns the DOM element that holds the resizable border.|
| **getSlidingContainerTitle** |none|HTML element|Returns the DOM element that displays the title of the pane.|
| **getCollapseIconElement** |none|HTML element|Returns the DOM element for the <img> that represents the collapse icon.|
| **getDockIconElement** |none|HTML element|Returns the DOM element for the <img> that represents the dock icon.|
| **getUndockIconElement** |none|HTML element|Returns the DOM element for the <img> that represents the undock icon.|

## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
