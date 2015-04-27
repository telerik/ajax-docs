---
title: RadSlidingZone Object
page_title: RadSlidingZone Object | RadSplitter for ASP.NET AJAX Documentation
description: RadSlidingZone Object
slug: splitter/client-side-programming/radslidingzone-object
tags: radslidingzone,object
published: True
position: 4
---

# RadSlidingZone Object



## 

The following table lists the important **RadSlidingZone** client-side methods:


>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_splitter** |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the splitter to which the sliding zone belongs.|
| **isBottomDirection** |none|boolean|Returns **true** if the slide direction is top to bottom, **false** otherwise.|
| **isTopDirection** |none|boolean|Returns **true** if the slide direction is bottom to top, **false** otherwise.|
| **isLeftDirection** |none|boolean|Returns **true** if the slide direction is right to left, **false** otherwise.|
| **isRightDirection** |none|boolean|Returns **true** if the slide direction is left to right, **false** otherwise.|
| **getPaneById** |string|[RadSlidingPane]({%slug splitter/client-side-programming/radslidingpane-object%})|Return the **RadSlidingPane** object with the specified paneId or null of there is no such pane.|
| **get_dockedPaneId** |none|string|Returns the ID of the currently docked pane, or null if there is no currently docked pane.|
| **get_expandedPaneId** |none|string|Returns the ID of the currently expanded pane, or null if there is no currently expanded pane.|
| **getPanes** |none|Array|Returns an array of all **RadSlidingPane** objects that the sliding zone holds.|
| **collapsePane** |string|boolean|Collapses the pane with the specified ID. Returns **true** on success, **false** otherwise.|
| **expandPane** |string|boolean|Expands the pane with the specified ID. Returns **true** on success, **false** otherwise.|
| **dockPane** |string|boolean|Docks the pane with the specified ID. Returns **true** on success, **false** otherwise.|
| **undockPane** |string|boolean|Undocks the pane with the specified ID. Returns **true** on success, **false** otherwise.|
| **get_clickToOpen** |none|boolean|Returns whether the user must click on a tab to expand the corresponding sliding pane.|
| **set_clickToOpen** |boolean|none|Sets whether the user must click on a tab to expand the corresponding sliding pane.|
| **get_slideDuration** |none|integer|Returns the number of milliseconds the slide animation lasts.|
| **set_slideDuration** |integer|none|Sets the number of milliseconds the slide animation lasts.|
| **get_height** |none|integer|Returns the height of the sliding zone|
| **get_width** |none|integer|Returns the width of the sliding zone|
| **get_resizeStep** |none|integer|Returns the resize step for the resizable border on sliding panes inside the sliding zone.|
| **set_resizeStep** |integer|none|Sets the resize step for the resizable border on sliding panes inside the sliding zone.|
| **getTabsContainer** |none|HTML element|Returns the DOM element for the pane that holds the sliding zone tabs.|

# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
