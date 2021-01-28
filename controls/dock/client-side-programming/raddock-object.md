---
title: RadDock Object
page_title: RadDock Object - RadDock
description: Check our Web Forms article about RadDock Object.
slug: dock/client-side-programming/raddock-object
tags: raddock,object
published: True
position: 1
---

# RadDock Object



The following table lists the most important methods of the client-side **RadDock** object:



|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **clone** |string|Telerik.Web.UI.RadDock|Clones the current **Telerik.Web.UI.RadDock** object. Accepts as parameter a string that will be set to the **UniqueId** of the cloned object. Returns the cloned **Telerik.Web.UI.RadDock** object.|
| **undock** |none|none|Removes the control from its docking zone, making it a floating control.|
| **getCommand** |string|[DockCommand object]({%slug dock/client-side-programming/dockcommand-object%})|Returns the client-side object for the command with a specified name.|
| **get_tag** |none|string|Returns the value, specified in the server-side property **Tag** of **RadDock** .|
| **set_handle** |HTML element|none|Makes the specified DOM element the drag handle for the **RadDock** object.|
| **get_handle** |none|HTML element|Returns the DOM element that the user must click on to drag the control.|
| **get_contentContainer** |none|HTML element|Returns the DOM element for the content region of the control.|
| **get_autoPostBack** |none|boolean|Gets the value indicating whether the control initiates a postback when the user moves it with the mouse.|
| **set_autoPostBack** |boolean|none|Sets the value indicating whether the control initiates a postback when the user moves it with the mouse.|
| **get_uniqueID** |none|string|Returns the **UniqueID** of the control.|
| **get_dockZoneID** |none|string|Returns the **ID** of the docking zone in which the control is docked. If the control is floating, **get_dockZoneID** returns null.|
| **get_index** |none|int|Returns the (0-offset) docking position of the control within its parent docking zone. Tip: to change the docking position of the control, use the **dock** method of the parent docking zone.|
| **get_parent** |none|Object|If the control is docked, returns the object for the parent docking zone.|
| **get_title** |none|string|Returns the title string of the control.|
| **set_title** |string|none|Sets the title string of the control.|
| **get_pinned** |none|boolean|Indicates whether the control is pinned.|
| **set_pinned** |boolean|none|Causes a floating control to become pinned or unpinned.|
| **get_closed** |none|boolean|Indicates whether the control is closed.|
| **set_closed** |boolean|none|Causes the control to close ( **true** ) or to reappear ( **false** ).|
| **get_collapsed** |none|boolean|Indicates whether the control is collapsed.|
| **set_collapsed** |boolean|none|Causes the control to collapse ( **true** ) or expand ( **false** ).|
| **get_dockMode** |none|int|Returns 1 if the DockMode is "Floating", 2 if it is "Docked", and 3 if it is "Default".|
| **set_dockMode** |int|none|Sets the DockMode to "Floating" (1), "Docked" (2) or "Default" (3).|
| **get_left** |none|int|Gets the X-coordinate of the control when it is floating.|
| **set_left** |int|none|Sets the X-coordinate of the control when it is floating.|
| **get_top** |none|int|Gets the Y-coordinate of the control when it is floating.|
| **set_top** |int|none|Sets the Y-coordinate of the control when it is floating.|
| **get_height** |none|string|Gets the height of the control.|
| **set_height** |int/string|none|Sets the height of the control.|
| **get_width** |none|string|Gets the width of the control.|
| **set_width** |int/string|none|Sets the width of the control.|
| **get_forbiddenZones** |none|Array|Returns the array of docking zones where the control is not allowed to dock.|
| **set_forbiddenZones** |Array|none|Sets the array of docking zones where the control is not allowed to dock.|
| **get_enableDrag** |none|boolean|Indicates whether the user can drag the control to a new location.|
| **set_enableDrag** |boolean|none|Sets a value enabling or disabling the ability of the user to drag the control to a new location.|
| **get_element** |none|HTML element|Returns the DOM element for this control.|
| **add_`<Event>`** e.g. **add_command** |Event handler|none|Adds a client-side event handler for a specific event.|
| **remove_`<Event>`** e.g. **remove_command** |Event handler|none|Removes a client-side event handler for a specific event.|
| **doPostBack** |none|none|Causes a server-side **DockPositionChanged** event if the current position of the control differs from the position it had the last time the page was loaded.|
| **conditionalPostback** |none|none|calls **doPostBack** if the **AutoPostBack** property is **true** .|
| **get_resizable** |none|boolean|Gets the bool value indicating whether the control can be resized.|
| **set_resizable** |boolean|none|Enables/Disables the resizing of the control.|

# See Also

 * [RadDockZone Object]({%slug dock/client-side-programming/raddockzone-object%})

 * [Overview]({%slug dock/client-side-programming/overview%})
