---
title: RadDockZone Object
page_title: RadDockZone Object - RadDock
description: Check our Web Forms article about RadDockZone Object.
slug: dock/client-side-programming/raddockzone-object
tags: raddockzone,object
published: True
position: 2
---

# RadDockZone Object



The following table lists the most important methods of the client-side **RadDockZone** object:




|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **clone** |string|Telerik.Web.UI.RadDockZone|Clones the current **Telerik.Web.UI.RadDockZone** object. Accepts as parameter the string that will be set to the **UniqueId** of the cloned object. Returns the cloned **Telerik.Web.UI.RadDockZone** object.|
| **dock** |([RadDock]({%slug dock/client-side-programming/raddock-object%})) or (RadDock, integer)|none|Docks the specified **RadDock** control in this docking zone.If called with one parameter, the **RadDock** control is docked in the last position. If called with a second (index) parameter, the **RadDock** control is docked in the specified (0-offset) position.	Keep in mind that the behavior of RadDock, docked via this method, will be slightly different if it is already placed inside the RadDockZone control. For example, if a RadDock is positioned with index 0, its location will not change if the index, specified in the **dock** method, is 0 or 1. This occurs, because the dock control is inserted before the RadDock with the specified index.	In order to ensure that the behavior will be the same, when a RadDock control is already docked inside a RadDockZone, please call the RadDock client-side method **undock** before **dock** .|
| **get_allowedDocks** |none|Array|Returns an array of the **UniqueNames** of all the **RadDock** controls that are allowed for docking in the property **AllowedDocks** of RadDockZone.|
| **get_docks** |none|Array|Returns an array of all the **RadDock** controls currently docked in the docking zone.|
| **get_fitDocks** |none|boolean|Gets the bool value indicating whether the docks are resized to fit within the zone.|
| **get_highlightedCssClass** |none|string|Gets the CSS class that is applied when a dock is over the zone and is about to be docked.|
| **get_isHorizontal** |none|boolean|Gets the value indicating whether the zone has Horizontal orientaion (Orientation can be Horizontal and Vertical).|
| **get_layoutID** |none|string|Gets the ID of the **Telerik.Web.UI.RadDockLayout** that manages the state of the RadDockZone control.|
| **get_uniqueName** |none|string|Gets the **UniqueName** of the control.|
| **set_highlightedCssClass** |string|none|Sets a CSS class that is applied when a dock is over the zone and is about to be docked (Use the **HighlightedCssClass** property in order for the changes to take effect on the server-side and not on the client-side only). Accepts as a parameter the CSS class to be applied.|

# See Also

 * [RadDock Object]({%slug dock/client-side-programming/raddock-object%})

 * [Overview]({%slug dock/client-side-programming/overview%})
