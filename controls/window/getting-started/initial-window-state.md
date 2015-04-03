---
title: Initial Window State
page_title: Initial Window State | UI for ASP.NET AJAX Documentation
description: Initial Window State
slug: window/getting-started/initial-window-state
tags: initial,window,state
published: True
position: 7
---

# Initial Window State



## 

Use the __InitialBehaviors__ property to control the state of the window when it first appears. __InitialBehaviors__ controls whether the window appears maximized, minimized, and/or pinned.

__InitialBehaviors__ is a collection of Telerik.Web.UI.WindowBehaviors values, just like the __Behaviors__ property. However, not all possible values make sense for __InitialBehaviors__. For example, if you set __InitialBehaviors__ to "Resize", the value has no effect.

Here are the __InitialBehaviors'__ property values that have an effect:

* __None__ - The window appears unpinned and of normal size.

* __Minimize__ - The window appears in a minimized state.

* __Pin__ - The starts out pinned.

* __Maximize__ - The window appears maximized within the parent window.

* __Default__ - The window appears both maximized and pinned. (The Maximize in this collection takes precedence over the Minimize).

You can combine __InitialBehaviors__ values to make the window appear both pinned and either maximized or minimized. For example, if you want the window to appear minimized and pinned, set __InitialBehaviors="Minimize, Pin"__.

The value of __InitialBehaviors__ is not limited to the values that make up the __Behaviors__ property. For example, if you want the window to be pinned and not to let the user unpin it, you can set __InitialBehaviors="Pin"__ and set __Behaviors__ to a value that does not include "Pin".

You can also set the __InitialBehaviors__ property from the codebehind:

````C#
	     
							RadWindow1.InitialBehaviors = Telerik.Web.UI.WindowBehaviors.Pinned | Telerik.Web.UI.WindowBehaviors.Minimize;
				
````





````VB.NET
	     
							RadWindow1.InitialBehaviors = Telerik.Web.UI.WindowBehaviors.Pinned _                           Or Telerik.Web.UI.WindowBehaviors.Minimize
				
````





# See Also

 * [User Interaction With The Window]({%slug window/getting-started/user-interaction-with-the-window%})
