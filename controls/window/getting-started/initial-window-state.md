---
title: Initial Window State
page_title: Initial Window State - RadWindow
description: Check our Web Forms article about Initial Window State.
slug: window/getting-started/initial-window-state
tags: initial,window,state
published: True
position: 7
---

# Initial Window State

Use the **InitialBehaviors** property to control the state of the window when it first appears. **InitialBehaviors** controls whether the window appears maximized, minimized, and/or pinned.

**InitialBehaviors** is a collection of Telerik.Web.UI.WindowBehaviors values, just like the **Behaviors** property. However, not all possible values make sense for **InitialBehaviors**. For example, if you set **InitialBehaviors** to "Resize", the value has no effect.

Here are the **InitialBehaviors'** property values that have an effect:

* **None** - The window appears unpinned and of normal size.

* **Minimize** - The window appears in a minimized state.

* **Pin** - The starts out pinned.

* **Maximize** - The window appears maximized within the parent window.

* **Default** - The window appears both maximized and pinned. (The Maximize in this collection takes precedence over the Minimize).

You can combine **InitialBehaviors** values to make the window appear both pinned and either maximized or minimized. For example, if you want the window to appear minimized and pinned, set **InitialBehaviors="Minimize, Pin"**.

The value of **InitialBehaviors** is not limited to the values that make up the **Behaviors** property. For example, if you want the window to be pinned and not to let the user unpin it, you can set **InitialBehaviors="Pin"** and set **Behaviors** to a value that does not include "Pin".

You can also set the **InitialBehaviors** property from the codebehind:

````C#	     
RadWindow1.InitialBehaviors = Telerik.Web.UI.WindowBehaviors.Pinned | Telerik.Web.UI.WindowBehaviors.Minimize;				
````
````VB	     
RadWindow1.InitialBehaviors = Telerik.Web.UI.WindowBehaviors.Pinned Or Telerik.Web.UI.WindowBehaviors.Minimize				
````

## See Also

 * [User Interaction With The Window]({%slug window/getting-started/user-interaction-with-the-window%})
