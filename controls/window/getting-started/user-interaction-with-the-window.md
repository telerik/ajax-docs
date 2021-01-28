---
title: User Interaction With The Window
page_title: User Interaction With The Window - RadWindow
description: Check our Web Forms article about User Interaction With The Window.
slug: window/getting-started/user-interaction-with-the-window
tags: user,interaction,with,the,window
published: True
position: 6
---

# User Interaction With The Window

Use the **Behaviors** property to determine how the user can interact with the **RadWindow** object. **Behaviors** controls whether the user can move or resize the window, whether it has maximize and minimize buttons, whether it can be pinned, and whether there is a close button on the title bar.

Here are the **Behaviors**' property values:

* **None** - The user can perform none of the actions on the window.

* **Resize** - The user can resize the window by dragging its border.

* **Minimize** - The window can be minimized, and has a minimize button on the title bar.

* **Close** - The user can close the window using a title bar button.

* **Pin** - The window can be pinned, and has a pin button on the title bar.

* **Maximize** - The window can be maximized, and has a maximize button on the title bar.

* **Move** - The user can click on the window title bar and drag it to a new location.

* **Reload** - The user can reload the window contents using a title bar button.

* **Default** - Default object behavior: all of the above.

To specify a combination of behaviors (other than the default), combine **Behaviors** values. For example, if you want to let the user close the window using a button on the title bar, and to move the window by dragging it, but do not want any other buttons on the title bar, set **Behaviors="Close, Move"**:

![](images/window-behaviors.png)

You can also set the **Behaviors** property from the code behind:



````C#	     
RadWindow1.Behaviors = Telerik.Web.UI.WindowBehaviors.Move | Telerik.Web.UI.WindowBehaviors.Close;				
````
````VB	     
RadWindow1.Behaviors = Telerik.Web.UI.WindowBehaviors.Move Or Telerik.Web.UI.WindowBehaviors.Close				
````

## See Also

 * [Initial Window State]({%slug window/getting-started/initial-window-state%})
