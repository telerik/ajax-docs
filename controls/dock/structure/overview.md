---
title: Structure Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: dock/structure/overview
tags: overview
published: True
position: 0
---

# Structure Overview



The structure of the docking controls are described below.

## RadDock

__RadDock__ is a movable content placeholder, which can be dragged around the screen, docked into __RadDockZone__ controls, collapsed, expanded, pinned, and so on.
>caption 

![](images/raddockstructure.png)

The main visual elements of the control are:

* __Title Bar__ - this is the upper part of the control. It is the container of the __Title Text__ and the __Commands__.

* To customize the title bar, use the __Title__ property or the __TitleBarTemplate__.

* To customize the commands, use the __DefaultCommands__ or __Commands__ property.

* __Content Area__ - this is the lower part of the control. It can be customized using __Text__ property or the __ContentTemplate__.

## RadDockZone

__RadDockZone__ is a static placeholder, where you can dock __RadDock__ controls. It can also display a __placeholder__ to show the position where a __RadDock__ control is about to be docked.
>caption 

![](images/raddockzonestructure.png)

## RadDockLayout

__RadDockLayout__ is the control that is responsible for automatic position management of the __RadDock__ controls on the page. It has no visual representation on the client. At design time, you must place all __RadDockZone__ and __RadDock__ controls into the __RadDockLayout__ control so that it can manage their layout. Otherwise, the layout of __RadDockZone__ and __RadDock__ controls will not persist after a postback.

>note By handling the[SaveDockLayout]({%slug dock/server-side-programming/events/savedocklayout%})and[LoadDockLayout]({%slug dock/server-side-programming/events/loaddocklayout%})events you can easily implement applications which persist the __RadDock__ controls' positions in a database or other storage medium.
>


# See Also

 * [Overview]({%slug dock/overview%})

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})

 * [Overview]({%slug dock/commands/overview%})

 * [Adding Content to RadDock]({%slug dock/how-to/adding-content-to-raddock%})

 * [Title Bar Template]({%slug dock/structure/dock/title-bar-template%})
