---
title: Properties that Affect Window Behavior
page_title: Properties that Affect Window Behavior | UI for ASP.NET AJAX Documentation
description: Properties that Affect Window Behavior
slug: window/getting-started/properties-that-affect-window-behavior
tags: properties,that,affect,window,behavior
published: True
position: 4
---

# Properties that Affect Window Behavior



## 

Both __RadWindowManager__ and __RadWindow__ have a number of properties that affect the way the windows behave. You can set default values for these properties in the __RadWindowManager__ object, and then override those values for individual windows by changing the value in the __RadWindow__ object.

* The __VisibleOnPageLoad__, __OffsetElementID__, __Top__, __Left__, and __OpenerElementID__ properties affect the way the window is first shown. These properties are described in [Showing and Positioning]({%slug window/getting-started/showing-and-positioning%}).

* The __Behaviors__ property affects the way the user can interact with the window. For details, see [User Interaction With the Window]({%slug window/getting-started/user-interaction-with-the-window%}).

* The __InitialBehaviors__ property controls the state of the window when it first appears. For details, see [Initial Window State]({%slug window/getting-started/initial-window-state%}).

* The __Modal__ property controls whether the window appears as a modal dialog. When the window is modal, the positioning properties (__OffsetElementId__, __Left__, and __Top__) have no effect.

* The __MinimizeZoneID__ property controls where the window goes when minimized. For details, see [Minimize Zones]({%slug window/getting-started/minimize-zone%}).

* By default, __RadWindow__ instances are cached to speed up response time after the first time they are shown. You can prevent this caching by setting the __DestroyOnClose__ property to __True__.

* The __ReloadOnShow__ property forces the window to reload the content specified by __NavigateUrl__ every time it is shown.

* The __ShowContentDuringLoad__ property controls whether the window waits until it is fully loaded before showing itself, or whether the window can appear before it is fully loaded. When this property is set to __true__, __RadWindow__ will behave exactly like the standard IFRAME element.

* The __MaxWidth and MaxHeight__ properties define the maximal dimensions of the __RadWindow__. Neither the user dragging the resize handle, the Client-side API, or autosizing can make the RadWindow larger than them.

* The __MinWidth and MinHeight__ properties define the minimum dimensions of the __RadWindow__. Neither the user dragging the resize handle, the Client-side API, or autosizing can make the RadWindow smaller than them.
