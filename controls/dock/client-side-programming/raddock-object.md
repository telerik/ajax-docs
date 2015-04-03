---
title: RadDock Object
page_title: RadDock Object | UI for ASP.NET AJAX Documentation
description: RadDock Object
slug: dock/client-side-programming/raddock-object
tags: raddock,object
published: True
position: 1
---

# RadDock Object



## 

The following table lists the most important methods of the client-side __RadDock__ object:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __clone__ |string|Telerik.Web.UI.RadDock|Clones the current __Telerik.Web.UI.RadDock__ object. Accepts as parameter a string that will be set to the __UniqueId__ of the cloned object. Returns the cloned __Telerik.Web.UI.RadDock__ object.|
| __undock__ |none|none|Removes the control from its docking zone, making it a floating control.|
| __getCommand__ |string|[DockCommand object]({%slug dock/client-side-programming/dockcommand-object%})|Returns the client-side object for the command with a specified name.|
| __get_tag__ |none|string|Returns the value, specified in the server-side property __Tag__ of __RadDock__ .|
| __set_handle__ |HTML element|none|Makes the specified DOM element the drag handle for the __RadDock__ object.|
| __get_handle__ |none|HTML element|Returns the DOM element that the user must click on to drag the control.|
| __get_contentContainer__ |none|HTML element|Returns the DOM element for the content region of the control.|
| __get_autoPostBack__ |none|boolean|Gets the value indicating whether the control initiates a postback when the user moves it with the mouse.|
| __set_autoPostBack__ |boolean|none|Sets the value indicating whether the control initiates a postback when the user moves it with the mouse.|
| __get_uniqueID__ |none|string|Returns the __UniqueID__ of the control.|
| __get_dockZoneID__ |none|string|Returns the __ID__ of the docking zone in which the control is docked. If the control is floating, __get_dockZoneID__ returns null.|
| __get_index__ |none|int|Returns the (0-offset) docking position of the control within its parent docking zone.

>tip To change the docking position of the control, use the __dock__ method of the parent docking zone.
>
|
| __get_parent__ |none|Object|If the control is docked, returns the object for the parent docking zone.|
| __get_title__ |none|string|Returns the title string of the control.|
| __set_title__ |string|none|Sets the title string of the control.|
| __get_pinned__ |none|boolean|Indicates whether the control is pinned.|
| __set_pinned__ |boolean|none|Causes a floating control to become pinned or unpinned.|
| __get_closed__ |none|boolean|Indicates whether the control is closed.|
| __set_closed__ |boolean|none|Causes the control to close ( __true__ ) or to reappear ( __false__ ).|
| __get_collapsed__ |none|boolean|Indicates whether the control is collapsed.|
| __set_collapsed__ |boolean|none|Causes the control to collapse ( __true__ ) or expand ( __false__ ).|
| __get_dockMode__ |none|int|Returns 1 if the DockMode is "Floating", 2 if it is "Docked", and 3 if it is "Default".|
| __set_dockMode__ |int|none|Sets the DockMode to "Floating" (1), "Docked" (2) or "Default" (3).|
| __get_left__ |none|int|Gets the X-coordinate of the control when it is floating.|
| __set_left__ |int|none|Sets the X-coordinate of the control when it is floating.|
| __get_top__ |none|int|Gets the Y-coordinate of the control when it is floating.|
| __set_top__ |int|none|Sets the Y-coordinate of the control when it is floating.|
| __get_height__ |none|string|Gets the height of the control.|
| __set_height__ |int/string|none|Sets the height of the control.|
| __get_width__ |none|string|Gets the width of the control.|
| __set_width__ |int/string|none|Sets the width of the control.|
| __get_forbiddenZones__ |none|Array|Returns the array of docking zones where the control is not allowed to dock.|
| __set_forbiddenZones__ |Array|none|Sets the array of docking zones where the control is not allowed to dock.|
| __get_enableDrag__ |none|boolean|Indicates whether the user can drag the control to a new location.|
| __set_enableDrag__ |boolean|none|Sets a value enabling or disabling the ability of the user to drag the control to a new location.|
| __get_element__ |none|HTML element|Returns the DOM element for this control.|
| __add_<Event>__ e.g. __add_command__ |Event handler|none|Adds a client-side event handler for a specific event.|
| __remove_<Event>__ e.g. __remove_command__ |Event handler|none|Removes a client-side event handler for a specific event.|
| __doPostBack__ |none|none|Causes a server-side __DockPositionChanged__ event if the current position of the control differs from the position it had the last time the page was loaded.|
| __conditionalPostback__ |none|none|calls __doPostBack__ if the __AutoPostBack__ property is __true__ .|
| __get_resizable__ |none|boolean|Gets the bool value indicating whether the control can be resized.|
| __set_resizable__ |boolean|none|Enables/Disables the resizing of the control.|

# See Also

 * [RadDockZone Object]({%slug dock/client-side-programming/raddockzone-object%})

 * [Overview]({%slug dock/client-side-programming/overview%})
