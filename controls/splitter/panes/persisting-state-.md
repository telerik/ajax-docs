---
title: Persisting State 
page_title: Persisting State  | UI for ASP.NET AJAX Documentation
description: Persisting State 
slug: splitter/panes/persisting-state-
tags: persisting,state,
published: True
position: 4
---

# Persisting State 



The state of a __RadSplitter__ automatically persists across postbacks, so you do not need to reconfigure it every time to maintain the same appearance. Even if you change the values of the properties listed below using the [client-side API]({%slug splitter/client-side-programming/overview%}), they will persist across postbacks.

## RadPane

The following __RadPane__ properties persist across postbacks:

* __Width, Height__ - The size of panes persists, even if they are [resized]({%slug splitter/panes/resizing%}) using the mouse or the client-side API

* __MinWidth, MaxWidth, MinHeight, MaxHeight__ - The maximum and minimum dimensions of the panes persists, even when changed using the client-side API

* __Collapsed__ - The collapsed or expanded state of panes persists, even when [collapsed or expanded]({%slug splitter/panes/collapsing%}) using the mouse or the client-side API

* __Locked__ - The locked status of a pane persists, even when changed using the client-side API

* __ContentUrl__ - if a __RadPane__ control was initially configured to display an [external page]({%slug splitter/panes/displaying-external-content%}), and you change its __ContentUrl__ property using the client-side API, the new value persists across postbacks.

>tip All of the properties listed above are updated on the server-side object after a postback, so you can save them in a database or other storage medium if needed.
>


In addition to the properties listed above, by default the __scrolled position__ of a __RadPane__ persists across postbacks. You can disable this feature so that the scroll position is reset after a postback by setting the __PersistScrollPosition__ property to __False__.

## RadSlidingZone

The following __RadSlidingZone__ properties persist across postbacks:

* __DockedPaneId__ - If a sliding pane is docked using the control in the title bar or the client-side API, it remains docked after a postback.

* __ExpandedPaneId__ - If a sliding pane is expanded when a postback occurs, it remains expanded after a postback.

* __ClickToOpen__ - If the __ClicktoOpen__ property is changed using the client-side API, the change persists over a postback.

## RadSlidingPane

The following __RadSlidingPane__ properties persist across postbacks:

* __Width, Height__ - the size of panes persists, even if they are resized using the mouse or client-side API.

* __MinWidth__,__MaxWidth__, __MinHeight__, __MaxHeight__ - The maximum and minimum dimensions of the panes persists, even when changed using the client-side API

* __Title__ - The title persists, even when changed using the client-side API.

* __EnableResize__, __EnableDock__ - the ability of the pane to be resized or docked by the user persists, even when changed using the client-side API.
