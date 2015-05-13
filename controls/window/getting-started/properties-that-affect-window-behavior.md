---
title: Properties that Affect Window Behavior
page_title: Properties that Affect Window Behavior | RadWindow for ASP.NET AJAX Documentation
description: Properties that Affect Window Behavior
slug: window/getting-started/properties-that-affect-window-behavior
tags: properties,that,affect,window,behavior
published: True
position: 4
---

# Properties that Affect Window Behavior

Both **RadWindowManager** and **RadWindow** have a number of properties that affect the way the windows behave. You can set default values for these properties in the **RadWindowManager** object, and then override those values for individual windows by changing the value in the **RadWindow** object.

* The **VisibleOnPageLoad**, **OffsetElementID**, **Top**, **Left**, and **OpenerElementID** properties affect the way the window is first shown. These properties are described in [Showing and Positioning]({%slug window/getting-started/showing-and-positioning%}).

* The **Behaviors** property affects the way the user can interact with the window. For details, see [User Interaction With the Window]({%slug window/getting-started/user-interaction-with-the-window%}).

* The **InitialBehaviors** property controls the state of the window when it first appears. For details, see [Initial Window State]({%slug window/getting-started/initial-window-state%}).

* The **Modal** property controls whether the window appears as a modal dialog. When the window is modal, the positioning properties (**OffsetElementId**, **Left**, and **Top**) have no effect.

* The **MinimizeZoneID** property controls where the window goes when minimized. For details, see [Minimize Zones]({%slug window/getting-started/minimize-zone%}).

* By default, **RadWindow** instances are cached to speed up response time after the first time they are shown. You can prevent this caching by setting the **DestroyOnClose** property to **True**.

* The **ReloadOnShow** property forces the window to reload the content specified by **NavigateUrl** every time it is shown.

* The **ShowContentDuringLoad** property controls whether the window waits until it is fully loaded before showing itself, or whether the window can appear before it is fully loaded. When this property is set to **true**, **RadWindow** will behave exactly like the standard IFRAME element.

* The **MaxWidth and MaxHeight** properties define the maximal dimensions of the **RadWindow**. Neither the user dragging the resize handle, the Client-side API, or autosizing can make the RadWindow larger than them.

* The **MinWidth and MinHeight** properties define the minimum dimensions of the **RadWindow**. Neither the user dragging the resize handle, the Client-side API, or autosizing can make the RadWindow smaller than them.
