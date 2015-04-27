---
title: Persisting State 
page_title: Persisting State  | RadSplitter for ASP.NET AJAX Documentation
description: Persisting State 
slug: splitter/panes/persisting-state-
tags: persisting,state,
published: True
position: 4
---

# Persisting State 



The state of a **RadSplitter** automatically persists across postbacks, so you do not need to reconfigure it every time to maintain the same appearance. Even if you change the values of the properties listed below using the [client-side API]({%slug splitter/client-side-programming/overview%}), they will persist across postbacks.

## RadPane

The following **RadPane** properties persist across postbacks:

* **Width, Height** - The size of panes persists, even if they are [resized]({%slug splitter/panes/resizing%}) using the mouse or the client-side API

* **MinWidth, MaxWidth, MinHeight, MaxHeight** - The maximum and minimum dimensions of the panes persists, even when changed using the client-side API

* **Collapsed** - The collapsed or expanded state of panes persists, even when [collapsed or expanded]({%slug splitter/panes/collapsing%}) using the mouse or the client-side API

* **Locked** - The locked status of a pane persists, even when changed using the client-side API

* **ContentUrl** - if a **RadPane** control was initially configured to display an [external page]({%slug splitter/panes/displaying-external-content%}), and you change its **ContentUrl** property using the client-side API, the new value persists across postbacks.

>tip All of the properties listed above are updated on the server-side object after a postback, so you can save them in a database or other storage medium if needed.
>


In addition to the properties listed above, by default the **scrolled position** of a **RadPane** persists across postbacks. You can disable this feature so that the scroll position is reset after a postback by setting the **PersistScrollPosition** property to **False**.

## RadSlidingZone

The following **RadSlidingZone** properties persist across postbacks:

* **DockedPaneId** - If a sliding pane is docked using the control in the title bar or the client-side API, it remains docked after a postback.

* **ExpandedPaneId** - If a sliding pane is expanded when a postback occurs, it remains expanded after a postback.

* **ClickToOpen** - If the **ClicktoOpen** property is changed using the client-side API, the change persists over a postback.

## RadSlidingPane

The following **RadSlidingPane** properties persist across postbacks:

* **Width, Height** - the size of panes persists, even if they are resized using the mouse or client-side API.

* **MinWidth**,**MaxWidth**, **MinHeight**, **MaxHeight** - The maximum and minimum dimensions of the panes persists, even when changed using the client-side API

* **Title** - The title persists, even when changed using the client-side API.

* **EnableResize**, **EnableDock** - the ability of the pane to be resized or docked by the user persists, even when changed using the client-side API.
