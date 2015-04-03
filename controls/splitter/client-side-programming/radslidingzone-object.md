---
title: RadSlidingZone Object
page_title: RadSlidingZone Object | UI for ASP.NET AJAX Documentation
description: RadSlidingZone Object
slug: splitter/client-side-programming/radslidingzone-object
tags: radslidingzone,object
published: True
position: 4
---

# RadSlidingZone Object



## 

The following table lists the important __RadSlidingZone__ client-side methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_splitter__ |none|[RadSplitter]({%slug splitter/client-side-programming/radsplitter-object%})|Returns the splitter to which the sliding zone belongs.|
| __isBottomDirection__ |none|boolean|Returns __true__ if the slide direction is top to bottom, __false__ otherwise.|
| __isTopDirection__ |none|boolean|Returns __true__ if the slide direction is bottom to top, __false__ otherwise.|
| __isLeftDirection__ |none|boolean|Returns __true__ if the slide direction is right to left, __false__ otherwise.|
| __isRightDirection__ |none|boolean|Returns __true__ if the slide direction is left to right, __false__ otherwise.|
| __getPaneById__ |string|[RadSlidingPane]({%slug splitter/client-side-programming/radslidingpane-object%})|Return the __RadSlidingPane__ object with the specified paneId or null of there is no such pane.|
| __get_dockedPaneId__ |none|string|Returns the ID of the currently docked pane, or null if there is no currently docked pane.|
| __get_expandedPaneId__ |none|string|Returns the ID of the currently expanded pane, or null if there is no currently expanded pane.|
| __getPanes__ |none|Array|Returns an array of all __RadSlidingPane__ objects that the sliding zone holds.|
| __collapsePane__ |string|boolean|Collapses the pane with the specified ID. Returns __true__ on success, __false__ otherwise.|
| __expandPane__ |string|boolean|Expands the pane with the specified ID. Returns __true__ on success, __false__ otherwise.|
| __dockPane__ |string|boolean|Docks the pane with the specified ID. Returns __true__ on success, __false__ otherwise.|
| __undockPane__ |string|boolean|Undocks the pane with the specified ID. Returns __true__ on success, __false__ otherwise.|
| __get_clickToOpen__ |none|boolean|Returns whether the user must click on a tab to expand the corresponding sliding pane.|
| __set_clickToOpen__ |boolean|none|Sets whether the user must click on a tab to expand the corresponding sliding pane.|
| __get_slideDuration__ |none|integer|Returns the number of milliseconds the slide animation lasts.|
| __set_slideDuration__ |integer|none|Sets the number of milliseconds the slide animation lasts.|
| __get_height__ |none|integer|Returns the height of the sliding zone|
| __get_width__ |none|integer|Returns the width of the sliding zone|
| __get_resizeStep__ |none|integer|Returns the resize step for the resizable border on sliding panes inside the sliding zone.|
| __set_resizeStep__ |integer|none|Sets the resize step for the resizable border on sliding panes inside the sliding zone.|
| __getTabsContainer__ |none|HTML element|Returns the DOM element for the pane that holds the sliding zone tabs.|

# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [Overview]({%slug splitter/client-side-programming/events/overview%})
