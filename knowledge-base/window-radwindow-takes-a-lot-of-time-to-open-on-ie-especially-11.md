---
title: RadWindow Takes a Lot of Time to Open on IE, Especially 11
description: RadWindow Takes a Lot of Time to Open on IE, Especially 11. Check it now!
type: how-to
page_title: RadWindow Takes a Lot of Time to Open on IE, Especially 11
slug: window-radwindow-takes-a-lot-of-time-to-open-on-ie-especially-11
res_type: kb
---

## Problem

RadWindow Takes a Lot of Time to Open on IE, Especially 11.

## Description

DOM operations are slower in IE and initializing the Resize functionality may take some more time than expected when the page is heavy (e.g., even up to 300-400ms for the first time a RadWindow gets opened).

## Solution

There are several ways to avoid this issue:

 - Use the Classic RenderMode. It uses a different resizing mechanism that does not get initialized separately.

 - Disable the Resize behavior of the RadWindow. You can do that by declaring different Behaviors (see the [User Interaction With The Window]({%slug window/getting-started/user-interaction-with-the-window%}) article), or by removing it from the current set, e.g.:  

 ````
Behaviors="Move, Close, Maximize, Pin" 
 ````

 ````
RadWindowManager1.Behaviors = WindowBehaviors.Default And Not WindowBehaviors.Resize 
 ````

 ````
RadWindowManager1.Behaviors == WindowBehaviors.Default & ~WindowBehaviors.Resize 
 ````

 - Initialize the Resize behavior after showing the RadWindow:  

 ````JavaScript
function openWindow() {
    var wnd = GetRadWindowManager().open();
    wnd.set_behaviors(wnd.get_behaviors() | Telerik.Web.UI.WindowBehaviors.Resize); //add the behavior again, if needed
} 
 ````

 