---
title: Visual Configuration Manager
page_title: Visual Configuration Manager | RadWindow for ASP.NET AJAX Documentation
description: Visual Configuration Manager
slug: window/design-time/visual-configuration-manager
tags: visual,configuration,manager
published: True
position: 1
---

# Visual Configuration Manager

The visual Configuration Manager offered by the **RadWindowManager** allows you to quickly and codelessly declare and setup the **RadWindows** you are going to use on the page as well as the global [Keyboard Shortcuts]({%slug window/accessibility-and-internationalization/keyboard-support%}) for the **RadWindowManager**. It has two main sections - the **Windows collection** editor and the **Shortcuts collections** editor.

## Windows

![windowmanager-smart-tag-windows](images/windowmanager-smart-tag-windows.png)

The Windows Collection Editor for the **RadWindowManager** allows you to easily add, remove and configure the windows of a **RadWindowManager** control. When you are in this mode you add or remove RadWindow instances from the collection and you can also reorder them in the list. Once you select an item from the collection the right-hand side pane shows the properties of this RadWindow where you can configure it in great detail:

* Click the **Add** button to append a new **RadWindow** to the collection.

* Use the up and down arrow buttons to rearrange the windows in the collection.

* Select a window and click the **Remove** button to delete it from the list.

* Select individual windows to change properties for the specific window.

Some important properties to notice in **RadWindow** are:

* **Behaviors**: This lists the possible ways a user can interact with the window, and determines what icons appear on the title bar. **Behaviors** can include any or all of the following:Resize, Minimize, Close, Pin, Maximize, Move, Reload.

* **InitialBehaviors**: This lets you initialize the behavior of the window when it first appears, letting you have a window start up minimized, maximized, or pinned.

* **VisibleOnPageLoad:** This controls whether the window appears when the web page first loads.

* **OffsetElementID, Left, Top:** These properties [control the position where the window appears]({%slug window/getting-started/showing-and-positioning%}).

* **Modal**: This controls whether the window appears as a modal dialog. When the window is modal, the positioning properties (**OffsetElementId**, **Left**, and **Top**) have no effect and it is always centered.

* **VisibleStatusBar, VisibleTitleBar**: these properties control whether the window contains a status bar or title bar.

* **OpenerElementID**: This is the client-side ID of a user control that causes the window to appear when the user clicks it.

* **NavigateUrl**: This provides the URL of the content to appear in the window's content area.

* **Height, Width**: these control the size of the window.

* **MinimizeZoneID**: This specifies a control where the minimized image of the window is lodged.

* **OnClientCommand**, **OnClientDragEnd**, **OnClientDragStart**, **OnClientResize**, **OnClientResizeStart**, **OnClientResizeEnd**, **OnClientActivate**, **OnClientBeforeShow**, **OnClientShow**, **OnClientBeforeClose**, **OnClientClose**, **OnClientPageLoad** and **OnClientAutoSizeEnd**. These [client-side events]({%slug window/client-side-programming/events/overview%}) let you assign a JavaScript function that executes on the client side in response to various events.

* **DestroyOnClose**: This lets you override the default caching of **RadWindow** instances, so that a new window is created every time the window is shown.

	>note Note that if you destroy a **RadWindow** , you will not be able to open the same RadWindow again - a new **RadWindow** with default values will be opened instead.

* **ReloadOnShow**: This forces the browser to reload the content of the window every time it is shown.



Alternatively, you can also show the Properties window for the **RadWindowManager** and find the **Windows** property. It represents the same collection so you can edit it via the ellipsis button:

![radwindowmanager properties collection](images/radwindowmanager_properties_collection.png)

This will show a simpler collection editor that you can use to add/edit windows as shown above:

![radwindowmanager-simple collection editor](images/radwindowmanager-simple_collection_editor.png)

## Shortcuts

![windowmanager-smart-tag-shortcuts](images/windowmanager-smart-tag-shortcuts.png)

In the same manner in which you can add windows to the Windows collection you can also add, remove, reorder the [Keyboard Shortcuts]({%slug window/accessibility-and-internationalization/keyboard-support%}) through which the **RadWindowManager** can receive commands. You van set the shortcut combination in the properties pane as well:

* Click the **Add** button to append a new **Shortcut** to the collection.

* Use the up and down arrow buttons to rearrange the items in the collection.

* Select a shortcut and click the **Remove** button to delete it from the list.

* You can set its **CommandName** and **Shortcut** key in the right-hand side properties pane. The CommandName is also the name of the item in the list.

You can learn more about the keyboard support the RadWindow offers as well as a list with the available commands in [this help article]({%slug window/accessibility-and-internationalization/keyboard-support%}).

## See Also

 * [Element Structure]({%slug window/getting-started/element-structure%})

 * [Properties that Affect Window Behavior]({%slug window/getting-started/properties-that-affect-window-behavior%})

 * [Keyboard Support]({%slug window/accessibility-and-internationalization/keyboard-support%})
