---
title: RadDockZone Object
page_title: RadDockZone Object | UI for ASP.NET AJAX Documentation
description: RadDockZone Object
slug: dock/client-side-programming/raddockzone-object
tags: raddockzone,object
published: True
position: 2
---

# RadDockZone Object



## 

The following table lists the most important methods of the client-side __RadDockZone__ object:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __clone__ |string|Telerik.Web.UI.RadDockZone|Clones the current __Telerik.Web.UI.RadDockZone__ object. Accepts as parameter the string that will be set to the __UniqueId__ of the cloned object. Returns the cloned __Telerik.Web.UI.RadDockZone__ object.|
| __dock__ |([RadDock]({%slug dock/client-side-programming/raddock-object%})) or (RadDock, integer)|none|Docks the specified __RadDock__ control in this docking zone.If called with one parameter, the __RadDock__ control is docked in the last position. If called with a second (index) parameter, the __RadDock__ control is docked in the specified (0-offset) position.	Keep in mind that the behavior of RadDock, docked via this method, will be slightly different if it is already placed inside the RadDockZone control. For example, if a RadDock is positioned with index 0, its location will not change if the index, specified in the __dock__ method, is 0 or 1. This occurs, because the dock control is inserted before the RadDock with the specified index.	In order to ensure that the behavior will be the same, when a RadDock control is already docked inside a RadDockZone, please call the RadDock client-side method __undock__ before __dock__ .|
| __get_allowedDocks__ |none|Array|Returns an array of the __UniqueNames__ of all the __RadDock__ controls that are allowed for docking in the property __AllowedDocks__ of RadDockZone.|
| __get_docks__ |none|Array|Returns an array of all the __RadDock__ controls currently docked in the docking zone.|
| __get_fitDocks__ |none|boolean|Gets the bool value indicating whether the docks are resized to fit within the zone.|
| __get_highlightedCssClass__ |none|string|Gets the CSS class that is applied when a dock is over the zone and is about to be docked.|
| __get_isHorizontal__ |none|boolean|Gets the value indicating whether the zone has Horizontal orientaion (Orientation can be Horizontal and Vertical).|
| __get_layoutID__ |none|string|Gets the ID of the __Telerik.Web.UI.RadDockLayout__ that manages the state of the RadDockZone control.|
| __get_uniqueName__ |none|string|Gets the __UniqueName__ of the control.|
| __set_highlightedCssClass__ |string|none|Sets a CSS class that is applied when a dock is over the zone and is about to be docked (Use the __HighlightedCssClass__ property in order for the changes to take effect on the server-side and not on the client-side only). Accepts as a parameter the CSS class to be applied.|

# See Also

 * [RadDock Object]({%slug dock/client-side-programming/raddock-object%})

 * [Overview]({%slug dock/client-side-programming/overview%})
