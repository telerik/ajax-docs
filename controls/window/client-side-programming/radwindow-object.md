---
title: RadWindow Object
page_title: RadWindow Object - RadWindow
description: Check our Web Forms article about RadWindow Object.
slug: window/client-side-programming/radwindow-object
tags: radwindow,object
published: True
position: 1
---

# RadWindow Object

In this article, we list the numerous client-side properties and methods exposed by the client-side **RadWindow** object. These properties and methods allow you to manipulate the windows in the browser. Additionally, you can use these methods in various [client-side events]({%slug window/client-side-programming/events/overview%}) and produce the logic required by your scenario.

At the end of the article, you will find a [basic example](#examples) that demonstrates how to call methods, set properties, and handle events.

>tip You can also create RadWindow instances dynamically through the [RadWindowManager client-side object]({%slug window/client-side-programming/radwindowmanager-object%}).

This article contains the following sections:

* [Getters/Setters for the Public Properties](#getterssetters-for-the-public-properties)
* [Methods that Check a Condition or Invoke a Certain Behavior](#methods-that-check-a-condition-or-invoke-a-certain-behavior)
* [Methods for Modifying Client-side Event Handlers Dynamically](#methods-for-modifying-client-side-event-handlers-dynamically)
* [Examples](#examples)

## Getters/Setters for the Public Properties


>caption Getters/setters for the public properties

|  **Name**  |  **Description**  |
| ------ | ------ |
| **BrowserWindow** |Returns a reference to the parent page's document. This is useful for calling functions on the parent page.|
| **get_animation** |Gets the animation value for the **RadWindow** . Returns a variable of type Telerik.Web.UI.WindowAnimation.|
| **get_animationDuration** |Gets animation duration value for the **RadWindow** . The default value is 500ms.|
| **get_autoSize** |Gets a value that indicates whether the window will automatically resize itself according to its content or not.|
| **get_browserWindow** |Gets a reference to the **RadWindow's** parent [browser window] object.|
| **get_centerIfModal** |Returns a Boolean value whether **CenterIfModal** is set.|
| **get_contentElement** |Gets the content element when the **RadWindow** is used as a controls container (its **ContentTemplate** ) and not with **NavigateUrl** .|
| **get_contentFrame** |Returns a reference to **RadWindow's** content area (IFRAME). One possible use is to call a function that is declared in the **RadWindow's** page from the parent page. Another possible use is to modify the DOM.|
| **get_cssClass** |Gets the class name specified in the **CssClass** property.|
| **get_destroyOnClose** |Gets a value indicating whether the **RadWindow** will be disposed and made inaccessible once it is closed.|
| **get_enableShadow** |Gets a value indicating whether the **RadWindow** should have a shadow.|
| **get_height** |Gets the value of the **RadWindow's** server Height property. To get the current dimensions, use the **getWindowBounds** method.|
| **get_iconUrl** |Gets the URL of the icon in the upper-left corner of the **RadWindow** titlebar.|
| **get_keepInScreenBounds** |Gets a value indicating whether the **RadWindow** will show only in the visible viewport of the browser window.|
| **get_left** |Gets the horizontal offset relative to its offset element (usually the browser window). Corresponds to the **Left** server property	and returns its value. To get the current position, use the **getWindowBounds** method.|
| **get_maxHeight** |Gets the maximum height of the **RadWindow** .|
| **get_maxWidth** |Gets the maximum width of the **RadWindow** .|
| **get_minHeight** |Gets the minimum height of the **RadWindow** .|
| **get_minimizeIconUrl** |Gets the URL of the minimized icon of the **RadWindow** .|
| **get_minimizeZoneID** |Gets the ID ( **ClientID** if a runat=server is used) of an HTML element where the **RadWindow** object will be docked when minimized.|
| **get_minWidth** |Gets the minimum width of the **RadWindow** .|
| **get_modal** |Gets a value indicating whether the **RadWindow** is modal or not.|
| **get_name** |Gets the name of the **RadWindow** .|
| **get_navigateUrl** |Gets the URL of the **RadWindow** .|
| **get_offsetElementID** |Gets the offset element ID (the element according to which the **RadWindow** should be positioned relatively). Works together with the **Top** and **Left** properties.|
| **get_opacity** |Gets the value indicating the opacity of the **RadWindow** . The value should be between 0 and 100. The default value is 100, which is opaque.|
| **get_openerElementID** |Gets the **OpenerElementId** of the **RadWindow** .|
| **get_overlay** |Gets a value indicating whether the **RadWindow** has an overlay element.|
| **get_popupElement** |Returns a reference to the popup element of the **RadWindow** .|
| **get_reloadOnShow** |Gets a value indicating whether the page that is loaded in the **RadWindow** should be loaded every time from the server or whether the browser's default behavior will be left.|
| **get_restrictionZoneID** |Gets the ID ( **ClientID** if a runat=server is used) of an HTML element in which the **RadWindow** object will be able to move.|
| **get_showContentDuringLoad** |Gets a value indicating whether the page that is loaded in the **RadWindow** should be shown during the loading process or only when it has finished loading.|
| **get_showOnTopWhenMaximized** |Gets a value indicating whether the maximized **RadWindow** should be on top of the page's content. The default value is **True** .|
| **get_status** |Gets current message in the status area of the **RadWindow** .|
| **get_title** |Gets the title of the **RadWindow** .|
| **get_top** |Gets the vertical offset relative to its offset element. Corresponds to the **Top** server property	and returns its value. To get the current position, use the **getWindowBounds** method.|
| **get_visibleStatusbar** |Gets the visibility of the **RadWindow's** status bar.|
| **get_visibleTitlebar** |Gets the visibility of the **RadWindow's** titlebar.|
| **get_width** |Gets the value of the **RadWindow's** server Width property. To get the current dimensions, use the **getWindowBounds** method.|
| **get_windowManager** |Returns a reference to the **RadWindowManager** . As an alternative, you can use the ASP.NET AJAX convention and use $find(),	for example: `oManager = $find("<%=RadWindowManager1.ClientID%>");`|
| **get_zindex** |Gets the Z-index of the **RadWindow** .|
| **set_animation** |Sets the opening animation for the **RadWindow** . Takes an argument of type Telerik.Web.UI.WindowAnimation. Possible values are: **None** , **Resize** , **Fade** , **Slide** , **FlyIn** . For example:	oWnd.set_animation(Telerik.Web.UI.WindowAnimation.Slide);|
| **set_animationDuration** |Sets the animation duration value for the **RadWindow** .|
| **set_autoSize** |Sets a value that indicates whether the window should automatically resize itself according to its content or not.|
| **set_autoSizeBehaviors** |Sets the **AutoSizeBehaviors** property of the **RadWindow** . Its argument must be a value or combination of values from the **Telerik.Web.UI.WindowAutoSizeBehaviors** enum. To set more than one behavior, use "+".	Possible values are **Width** , **WidthProportional** , **Height** , **HeightProportional** and **Default** . For example:	`(Telerik.Web.UI.WindowAutoSizeBehaviors.Width + Telerik.Web.UI.WindowAutoSizeBehaviors.Height)`|
| **set_behaviors** |Sets the **Behaviors** property of the **RadWindow** . Its argument must be a value or combination of values from the **Telerik.Web.UI.WindowBehaviors** enum.	To set more than one behavior, use "+". Possible values are: **None** , **Resize** , **Minimize** , **Close** , **Pin** , **Maximize** , **Move** , **Reload** , **Default** .	For example: `oWnd.set_behaviors(Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close)`|
| **set_centerIfModal** |Sets the **CenterIfModal** property. It is **True** by default, meaning a modal **RadWindow** will ignore the **Left** and **Top** properties. When set to **False** , these properties will be respected.	Can be useful in the **OnClientBeforeShow** event.|
| **set_contentElement** |Sets the content element when the **RadWindow** is used as a controls container (i.e., its **ContentTemplate** ) and not with **NavigateUrl** . Takes a DOM object as a parameter.|
| **set_destroyOnClose** |Sets a value indicating whether the **RadWindow** will be disposed and made inaccessible once it is closed.|
| **set_enableShadow** |Sets a value indicating whether the **RadWindow** should have a shadow.|
| **set_height** |Sets the **RadWindow** height in pixels.|
| **set_iconUrl** |Sets the URL of the icon in the upper-left corner of the **RadWindow** title bar. The new image must also be 16x16 pixels in size for correct display.|
| **set_initialBehaviors** |Sets the **InitialBehaviors** property of the **RadWindow** . Its argument must be a value or combination of values from the **Telerik.Web.UI.WindowBehaviors** enum.	To set more than one behavior, use "+". Possible values are: **None** , **Minimize** , **Pin** , **Maximize** and **Default** . For example:	`oWnd.set_initialBehaviors(Telerik.Web.UI.WindowBehaviors.Pin + Telerik.Web.UI.WindowBehaviors.Maximize)`|
| **set_keepInScreenBounds** |Sets a value indicating whether the **RadWindow** should show only in the visible viewport of the browser window.|
| **set_left** |Sets the horizontal offset relative to its offset element in pixels. Corresponds to the **Left** server property.|
| **set_maxHeight** |Sets the maximum height of the **RadWindow** in pixels.|
| **set_maxWidth** |Sets the maximum width of the **RadWindow** in pixels.|
| **set_minHeight** |Sets the minimum height of the **RadWindow** in pixels.|
| **set_minimizeIconUrl** |Sets the URL of the minimized icon of the **RadWindow** .|
| **set_minimizeZoneID** |Sets the client-side ID of an HTML element where the window object will be docked when minimized.|
| **set_minWidth** |Sets the minimum width of the **RadWindow** in pixels.|
| **set_modal** |Sets the modality of the **RadWindow** . It accepts a Boolean value as an argument, e.g., oWnd.set_modal(true);|
|**set_navigateUrl**|Sets the URL RadWindow will navigate to. Does not create the markup of the dialog or load the content page. To load the content page and show the dialog use `setUrl` and `show` respectively.|
| **set_offsetElementID** |Sets the **OffsetElementId** (client-side ID of an HTML element where **RadWindow** will be positioned).|
| **set_opacity** |Sets the value indicating the opacity of the Boolean. The value should be between 0 and 100. The default value is 100, which is opaque.|
| **set_openerElementID** |Sets the **OpenerElementId** for the **RadWindow** . This is the HTML element that will open the **RadWindow** when clicked.	Note that if it is a postback element, its server-side handlers will not fire.|
| **set_overlay** |Sets a value indicating whether the **RadWindow** should create an overlay element.|
| **set_reloadOnShow** |Sets a value indicating whether the page that is loaded in the **RadWindow** should be loaded every time from the server or whether the browser's default behavior will be left.|
| **set_restrictionZoneID** |Sets the client-side ID of an HTML element in which the window object will be able to move.|
| **set_showContentDuringLoad** |Sets a value indicating whether the page that is loaded in the **RadWindow** should be shown during the loading process or when it has finished loading.|
| **set_status** |Sets the message in the status area of the **RadWindow** .|
| **set_title** |Sets the **RadWindow's** title. Note that if the content page has its own title set in the @Page directive or in the <head> section,	this title will override the **RadWindow's** declaratively configured one.|
| **set_top** |Sets the vertical offset relative to its offset element in pixels. Corresponds to the **Top** server property.|
| **set_visibleStatusbar** |Sets the visibility of the **RadWindow's** status bar. Accepts **True** / **False** as its parameter.|
| **set_visibleTitlebar** |Sets the visibility of the **RadWindow's** titlebar. Accepts **True** / **False** as its parameter.|
| **set_width** |Sets the **RadWindow's** width in pixels.|

## Methods that Check a Condition or Invoke a Certain Behavior


>caption Methods that check a condition or invoke a certain behavior.

|  **Name**  |  **Description**  |
| ------ | ------ |
| **addShortcut** |Adds the specified shortcut string to the given command. Takes two string parameters: the command and its shortcut.|
| **autoSize** |Changes **RadWindow's** size to fit the content page. You cannot use the **autoSize** method with pages from other domains due to browsers' security restrictions.	You can optionally call the **autoSize** method with an argument set to **true** . This will make the autosizing perform an animation while adjusting the size.|
| **center** |Centers the **RadWindow** in the middle of the page (or its restriction zone if set).|
| **close** |Closes the **RadWindow** . Must be called from a **RadWindow** object, not from the window object when in a content page.	You can pass an argument to it that is easily obtained from the main page. See [this article]({%slug window/how-to/using-radwindow-as-a-dialog%}) for details.|
| **getShortcutString** |Returns the last shortcut for the command that is passed as an argument (string).|
| **getWindowBounds** |Returns the size and position of the **RadWindow** . For example: `var bounds = oWnd.getWindowBounds(); bounds.x; //returns the current left position of the RadWindow; bounds.y; //returns the current top position of the RadWindow; bounds.height; //returns the current height of the RadWindow; bounds.width; //returns the current width of the RadWindow`|
| **hide** |Makes the **RadWindow** invisible.|
| **isActive** |Returns **True** if the **RadWindow** is the currently active one.|
| **isAutoSizeBehaviorEnabled** |Indicates whether a certain AutoSize behavior is enabled for the **RadWindow** . Takes an argument of type	Telerik.Web.UI.WindowAutoSizeBehaviors and returns a Boolean value.|
| **isBehaviorEnabled** |Indicates whether a certain behavior is enabled for the **RadWindow** . Takes an argument of type Telerik.Web.UI.WindowBehaviors and returns a Boolean value.|
| **isClosed** |Returns **True** if the **RadWindow** is currently closed.|
| **isCreated** |Indicates whether the UI of the **RadWindow** is already created or not.|
| **isInitialBehaviorEnabled** |Indicates whether a certain initial behavior is enabled for the **RadWindow** . Takes an argument of type Telerik.Web.UI.WindowBehaviors and returns a Boolean value.|
| **isMaximized** |Returns **True** if the **RadWindow** is currently maximized.|
| **isMinimized** |Returns **True** if the **RadWindow** is currently minimized.|
| **isModal** |Returns **True** if the **RadWindow** is modal.|
| **isPinned** |Returns **True** if the **RadWindow** is currently pinned.|
| **isShortcutAdded** |Returns **True** if there is a shortcut added to the command. The command name is passed as a string argument.|
| **isVisible** |Returns **True** if the **RadWindow** is currently visible.|
| **maximize** |Maximizes the **RadWindow** .|
| **minimize** |Minimizes the **RadWindow** .|
| **moveTo** |Sets the position of the **RadWindow** in pixels. Takes two integer arguments: **Left** and **Top** (in this order).|
| **reload** |Reloads the content page in the **RadWindow** .	The page should come from the same server as the parent page due to JavaScript's cross-site scripting limitations.|
| **restore** |Restores the **RadWindow** to its normal (non-minimized) state.|
| **removeAllShortcutsCommand** |Clears all shortcuts for the given command (passed as a string parameter).|
| **removeShortcut** |Removes the last shortcut for thegiven command (passed as a string parameter).|
| **setActive** |Takes a Boolean argument that, if **true** , makes the **RadWindow** the active (topmost) window on the page, otherwise	when the passed parameter is **false** , the **setActive** method makes the control lose focus.|
| **setSize** |Sets the size of the **RadWindow** in pixels. Takes two integer arguments for the width and height (in this order).|
| **setUrl** |Changes the URL of the **RadWindow**. It will load the content page and create the markup of the dialog even if it has not been shown yet. To simply set the page without navigating to it, use `set_navigateUrl`.|
| **show** |Shows the **RadWindow** if it was invisible. If it does not exist, show() creates it.|
| **togglePin** |Toggles whether the **RadWindow** is pinned.|

## Methods for Modifying Client-side Event Handlers Dynamically

>caption Methods for modifying client-side event handlers dynamically.

| Name | Description |
| ------ | ------ |
| **add_activate** |Adds a function that will be called when a RadWindow is activated. The name of this function can also be declared in the **OnClientActivate** property.|
| **add_autoSizeEnd** |Adds a function that will be called when a RadWindow has finished resizing when the AutoSize functionality has taken effect. The name of this function can also be declared in the **OnClientAutoSizeEnd** property.|
| **add_beforeClose** |Adds a function that will be called before RadWindow is closed. You can cancel the closing of RadWindow there by using **set_cancel(true)** . The name of this function can also be declared in the **OnClientBeforeClose** property.|
| **add_beforeShow** |Adds a function that will be called before RadWindow is shown. You can cancel the closing of RadWindow there by using **set_cancel(true)** . The name of this function can also be declared in the **OnClientBeforeShow** property.|
| **add_close** |Adds a function that will be called when a RadWindow is closed. The name of this function can also be declared in the **OnClientClose** property.|
| **add_command** |TAdds a function that will be called when the commands Pin, Reload, Minimize and Maximize are executed (when the user presses a titlebar button). The name of this function can also be declared in the **OnClientCommand** property.|
| **add_dragEnd** |Adds a function that will be called when the user has finished dragging a RadWindow. The name of this function can also be declared in the **OnClientDragEnd** property|
| **add_dragStart** |Adds a function that will be called when the user starts dragging a RadWindow. The name of this function can also be declared in the **OnClientDragStart** property.|
| **add_pageLoad** |Adds a function that will be called when a RadWindow's content page is fully loaded. The name of this function can also be declared in the **OnClientPageLoad** property.|
| **add_resize** |Adds a function that will be called when the RadWindow is being resized. The name of this function can also be set in the **OnClientResize** property.|
| **add_resizeEnd** |Adds a function that will be called when the RadWindow is resized. The name of this function can also be set in the **OnClientResizeEnd** property.|
| **add_resizeStart** |Adds a function that will be called when the RadWindow resizing is started. The name of this function can also be set in the **OnClientResizeStart** property.|
| **add_show** |Adds a function that will be called when a RadWindow is shown. The name of this function can also be set in the **OnClientShow** property.|
| **remove_activate** |Removes a function declared with the **add_activate** function.|
| **remove_autoSizeEnd** |Removes a function declared with the **add_autoSizeEnd** function.|
| **remove_beforeClose** |Removes a function declared with the **add_beforeclose** function.|
| **remove_beforeShow** |Removes a function declared with the **add_beforeShow** function.|
| **remove_close** |Removes a function declared with the **add_close** function|
| **remove_command** |Removes a function declared with the **add_command** function|
| **remove_dragEnd** |Removes a function declared with the **add_dragEnd** function.|
| **remove_dragStart** |Removes a function declared with the **add_dragStart** function.|
| **remove_pageLoad** |Removes a function declared with the **add_pageLoad** function.|
| **remove_resize** |Removes a function declared with the **add_resize** function.|
| **remove_resizeEnd** |Removes a function declared with the **add_resizeEnd** function.|
| **remove_resizeStart** |Removes a function declared with the **add_resizeStart** function.|
| **remove_show** |Removes a function declared with the **add_show** function.|

>tip See the [Setting Client Event Handlers by Using JavaScript]({%slug window/client-side-programming/events/setting-handlers-by-using-javascript%}) article for an example that shows how to set client event-handlers.

## Examples

````JavaScript	
// UseRadWindow shows how to get a reference to a RadWindow
// and use it to call various methods.
function UseRadWindow()
{
	var oWnd = $find("<%= DialogWindow.ClientID %>");
	oWnd.show();
	oWnd.setSize(400, 400);
	oWnd.setUrl("http://www.yahoo.com");
	oWnd.minimize();
	oWnd.maximize();
	oWnd.restore();
}
// ShowWindow illustrates another way to get a reference
// to a RadWindow and set properties based on UI elements.
function ShowWindow()
{
	var manager = GetRadWindowManager();
	// txtShowWindow is the id of a textarea on the page.
	var txtShowWindow = document.getElementById("txtShowWindow");
	var window1 = manager.getWindowByName("RadWindow1");
	window1.setUrl(txtShowWindow.value);
	window1.set_title(txtShowWindow.value);
	window1.show();
}

//Open a RadWindow and set a function to be called
//when the RadWindow is closed.
function openWindow()
{
	//Get a reference to the window.
	var oWnd = $find("<%= RadWindow1.ClientID %>");
	//Set its NavigateUrl.
	oWnd.setUrl("https://www.telerik.com");
	//Add the name of the function to be executed when RadWindow is closed.
	oWnd.add_close(OnClientClose);
	//Show the window.
	oWnd.show();
}
function OnClientClose(oWnd, eventArgs)
{
	//Your code here.
	//Remove the OnClientClose function to avoid
	//adding it for a second time when the window is shown again.
	oWnd.remove_close(OnClientClose);
}
````



## See Also

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})

 * [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%})

 * [Overview]({%slug window/client-side-programming/events/overview%})
