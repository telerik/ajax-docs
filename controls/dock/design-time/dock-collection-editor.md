---
title: Dock Collection Editor
page_title: Dock Collection Editor | UI for ASP.NET AJAX Documentation
description: Dock Collection Editor
slug: dock/design-time/dock-collection-editor
tags: dock,collection,editor
published: True
position: 1
---

# Dock Collection Editor



## 

There are two ways to add __RadDock__ controls to a __RadDockZone__ control at design time. You can drag a __RadDock__ control directly from the toolbox onto the surface of the __RadDockZone__ control or you can add the __RadDock__ controls using the __RadDock Collection Editor__. The __RadDock Collection Editor__ is also useful for locating __RadDock__ controls and setting their properties when the __RadDockZone__ control has many child __RadDock__ controls.

To display the __RadDock Collection Editor__, click on the ellipsis button for the __Docks__ property of the __RadDockZone__ control.

* Click the __Add__ button to append a new __RadDock__ control to the collection.

* Use the up and down arrow buttons to rearrange the __RadDock__ controls in the collection. This order determines the order in which __RadDock__ controls are docked inside the __RadDockZone__.

* Select a __RadDock__ control and click the __Remove__ button to delete it from the list.

* Select individual __RadDock__ controls to change their properties.
>caption 

![](images/raddockcollectioneditor.png)

Some important properties of the __RadDock__ controls in the __Docks__ collection are as follows:

* __DockHandle__, __DockMode__, and __ForbiddenZones__: These properties let you specify the desired [drag-and-drop behavior]({%slug dock/getting-started/drag-and-drop%}).

* __DefaultCommands__ or __Commands__ lets you add [commands]({%slug dock/commands/overview%}) to the __RadDock__ title bar.

* __Text__ lets you assign simple text to the __RadDock__ control's [content area]({%slug dock/how-to/adding-content-to-raddock%}).

* __CloseText__, __CollapseText__, __ExpandText__, __PinText__, and__UnpinText__ let you [customize the tooltips for built-in commands]({%slug dock/commands/specifying-command-tooltips%}).

* __Skin__ lets you set the [skin]({%slug dock/appearance-and-styling/skins%}) to override the default inherited from the parent __RadDockZone__.

* __UniqueName__ givesthe __RadDock__ control a unique name that the __RadDockLayout__ component uses for maintaining position information. If this property is not set, __RadDockLayout__ uses the __ID__ property. It is important to set this property at runtime if the __RadDock__ control is embedded in a repeating control, so that each instance has a unique name.

* __Tag__ is a string you can use to store your own application-specific information with the __RadDock__ control.

# See Also

 * [Creating RadDock Dynamically]({%slug dock/how-to/creating-raddock-dynamically%})

 * [Adding Controls Inside Dynamically Created Docks]({%slug dock/how-to/adding-controls-inside-dynamically-created-docks%})
