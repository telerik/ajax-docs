---
title: RadWindow Object
page_title: RadWindow Object | UI for ASP.NET AJAX Documentation
description: RadWindow Object
slug: window/client-side-programming/radwindow-object
tags: radwindow,object
published: True
position: 1
---

# RadWindow Object



The __RadWindow__ client-side object has a number of client-side properties and methods that you can use to manipulate the windows in the browser. They are listed below.	There are also a number of [client-side events]({%slug window/client-side-programming/events/overview%}) that you can use those methods in to produce the logic required by your scenario.	At the end of the article you will also find a basic example of their use. You can also create instances dynamically through the	[RadWindowManager client-side object]({%slug window/client-side-programming/radwindowmanager-object%}).

This article contains the following sections:

* [Getters/Setters for the Public Properties](#getters/setters-for-the-public-properties)

* [Methods that Check a Condition or Invoke a Certain Behavior](#methods-that-check-a-condition-or-invoke-a-certain-behavior)

* [Methods for Modifying Client-side Event Handlers Dynamically](#methods-for-modifying-client-side-event-handlers-dynamically)

* [Examples](#examples)

## Getters/Setters for the Public Properties


>caption Getters/setters for the public properties

|  __Name__  |  __Description__  |
| ------ | ------ |
| __argument__ |An object that is transferred between the calling page and the __RadWindow__ dialog.|
| __BrowserWindow__ |Returns a reference to the parent page's document. This is useful for calling functions on the parent page.|
| __get_animation__ |Gets the animation value for the __RadWindow__ . Returns a variable of type Telerik.Web.UI.WindowAnimation.|
| __get_animationDuration__ |Gets animation duration value for the __RadWindow__ . The default value is 500ms.|
| __get_autoSize__ |Gets a value that indicates whether the window will automatically resize itself according to its content or not.|
| __get_browserWindow__ |Gets a reference to the __RadWindow's__ parent [browser window] object.|
| __get_centerIfModal__ |Returns a Boolean value whether __CenterIfModal__ is set.|
| __get_contentElement__ |Gets the content element when the __RadWindow__ is used as a controls container (its __ContentTemplate__ ) and not with __NavigateUrl__ .|
| __get_contentFrame__ |Returns a reference to __RadWindow's__ content area (IFRAME). One possible use is to call a function that is declared in the __RadWindow's__ page from the parent page. Another possible use is to modify the DOM.|
| __get_cssClass__ |Gets the class name specified in the __CssClass__ property.|
| __get_destroyOnClose__ |Gets a value indicating whether the __RadWindow__ will be disposed and made inaccessible once it is closed.|
| __get_enableShadow__ |Gets a value indicating whether the __RadWindow__ should have a shadow.|
| __get_height__ |Gets the value of the __RadWindow's__ server Height property. To get the current dimensions, use the __getWindowBounds__ method.|
| __get_iconUrl__ |Gets the URL of the icon in the upper-left corner of the __RadWindow__ titlebar.|
| __get_keepInScreenBounds__ |Gets a value indicating whether the __RadWindow__ will show only in the visible viewport of the browser window.|
| __get_left__ |Gets the horizontal offset relative to its offset element (usually the browser window). Corresponds to the __Left__ server property	and returns its value. To get the current position, use the __getWindowBounds__ method.|
| __get_maxHeight__ |Gets the maximum height of the __RadWindow__ .|
| __get_maxWidth__ |Gets the maximum width of the __RadWindow__ .|
| __get_minHeight__ |Gets the minimum height of the __RadWindow__ .|
| __get_minimizeIconUrl__ |Gets the URL of the minimized icon of the __RadWindow__ .|
| __get_minimizeZoneID__ |Gets the ID ( __ClientID__ if a runat=server is used) of an HTML element where the __RadWindow__ object will be docked when minimized.|
| __get_minWidth__ |Gets the minimum width of the __RadWindow__ .|
| __get_modal__ |Gets a value indicating whether the __RadWindow__ is modal or not.|
| __get_name__ |Gets the name of the __RadWindow__ .|
| __get_navigateUrl__ |Gets the URL of the __RadWindow__ .|
| __get_offsetElementID__ |Gets the offset element ID (the element according to which the __RadWindow__ should be positioned relatively). Works together with the __Top__ and __Left__ properties.|
| __get_opacity__ |Gets the value indicating the opacity of the __RadWindow__ . The value should be between 0 and 100. The default value is 100, which is opaque.|
| __get_openerElementID__ |Gets the __OpenerElementId__ of the __RadWindow__ .|
| __get_overlay__ |Gets a value indicating whether the __RadWindow__ has an overlay element.|
| __get_popupElement__ |Returns a reference to the popup element of the __RadWindow__ .|
| __get_reloadOnShow__ |Gets a value indicating whether the page that is loaded in the __RadWindow__ should be loaded every time from the server or whether the browser's default behavior will be left.|
| __get_restrictionZoneID__ |Gets the ID ( __ClientID__ if a runat=server is used) of an HTML element in which the __RadWindow__ object will be able to move.|
| __get_showContentDuringLoad__ |Gets a value indicating whether the page that is loaded in the __RadWindow__ should be shown during the loading process or only when it has finished loading.|
| __get_showOnTopWhenMaximized__ |Gets a value indicating whether the maximized __RadWindow__ should be on top of the page's content. The default value is __True__ .|
| __get_status__ |Gets current message in the status area of the __RadWindow__ .|
| __get_title__ |Gets the title of the __RadWindow__ .|
| __get_top__ |Gets the vertical offset relative to its offset element. Corresponds to the __Top__ server property	and returns its value. To get the current position, use the __getWindowBounds__ method.|
| __get_visibleStatusbar__ |Gets the visibility of the __RadWindow's__ status bar.|
| __get_visibleTitlebar__ |Gets the visibility of the __RadWindow's__ titlebar.|
| __get_width__ |Gets the value of the __RadWindow's__ server Width property. To get the current dimensions, use the __getWindowBounds__ method.|
| __get_windowManager__ |Returns a reference to the __RadWindowManager__ . As an alternative, you can use the ASP.NET AJAX convention and use $find(),	for example: oManager = $find("<%=RadWindowManager1.ClientID%>");|
| __get_zindex__ |Gets the Z-index of the __RadWindow__ .|
| __set_animation__ |Sets the opening animation for the __RadWindow__ . Takes an argument of type Telerik.Web.UI.WindowAnimation. Possible values are: __None__ , __Resize__ , __Fade__ , __Slide__ , __FlyIn__ . For example:	oWnd.set_animation(Telerik.Web.UI.WindowAnimation.Slide);|
| __set_animationDuration__ |Sets the animation duration value for the __RadWindow__ .|
| __set_autoSize__ |Sets a value that indicates whether the window should automatically resize itself according to its content or not.|
| __set_autoSizeBehaviors__ |Sets the __AutoSizeBehaviors__ property of the __RadWindow__ . Its argument must be a value or combination of values from the __Telerik.Web.UI.WindowAutoSizeBehaviors__ enum. To set more than one behavior, use "+".	Possible values are __Width__ , __WidthProportional__ , __Height__ , __HeightProportional__ and __Default__ . For example:	(Telerik.Web.UI.WindowAutoSizeBehaviors.Width + Telerik.Web.UI.WindowAutoSizeBehaviors.Height)|
| __set_behaviors__ |Sets the __Behaviors__ property of the __RadWindow__ . Its argument must be a value or combination of values from the __Telerik.Web.UI.WindowBehaviors__ enum.	To set more than one behavior, use "+". Possible values are: __None__ , __Resize__ , __Minimize__ , __Close__ , __Pin__ , __Maximize__ , __Move__ , __Reload__ , __Default__ .	For example: oWnd.set_behaviors(Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close)|
| __set_centerIfModal__ |Sets the __CenterIfModal__ property. It is __True__ by default, meaning a modal __RadWindow__ will ignore the __Left__ and __Top__ properties. When set to __False__ , these properties will be respected.	Can be useful in the __OnClientBeforeShow__ event.|
| __set_contentElement__ |Sets the content element when the __RadWindow__ is used as a controls container (i.e., its __ContentTemplate__ ) and not with __NavigateUrl__ . Takes a DOM object as a parameter.|
| __set_cssClass__ |Sets the class name (otherwise specified in the __CssClass__ property).|
| __set_destroyOnClose__ |Sets a value indicating whether the __RadWindow__ will be disposed and made inaccessible once it is closed.|
| __set_enableShadow__ |Sets a value indicating whether the __RadWindow__ should have a shadow.|
| __set_height__ |Sets the __RadWindow__ height in pixels.|
| __set_iconUrl__ |Sets the URL of the icon in the upper-left corner of the __RadWindow__ title bar. The new image must also be 16x16 pixels in size for correct display.|
| __set_initialBehaviors__ |Sets the __InitialBehaviors__ property of the __RadWindow__ . Its argument must be a value or combination of values from the __Telerik.Web.UI.WindowBehaviors__ enum.	To set more than one behavior, use "+". Possible values are: __None__ , __Minimize__ , __Pin__ , __Maximize__ and __Default__ . For example:	oWnd.set_initialBehaviors(Telerik.Web.UI.WindowBehaviors.Pin + Telerik.Web.UI.WindowBehaviors.Maximize)|
| __set_keepInScreenBounds__ |Sets a value indicating whether the __RadWindow__ should show only in the visible viewport of the browser window.|
| __set_left__ |Sets the horizontal offset relative to its offset element in pixels. Corresponds to the __Left__ server property.|
| __set_maxHeight__ |Sets the maximum height of the __RadWindow__ in pixels.|
| __set_maxWidth__ |Sets the maximum width of the __RadWindow__ in pixels.|
| __set_minHeight__ |Sets the minimum height of the __RadWindow__ in pixels.|
| __set_minimizeIconUrl__ |Sets the URL of the minimized icon of the __RadWindow__ .|
| __set_minimizeZoneID__ |Sets the client-side ID of an HTML element where the window object will be docked when minimized.|
| __set_minWidth__ |Sets the minimum width of the __RadWindow__ in pixels.|
| __set_modal__ |Sets the modality of the __RadWindow__ . It accepts a Boolean value as an argument, e.g., oWnd.set_modal(true);|
| __set_offsetElementID__ |Sets the __OffsetElementId__ (client-side ID of an HTML element where __RadWindow__ will be positioned).|
| __set_opacity__ |Sets the value indicating the opacity of the Boolean. The value should be between 0 and 100. The default value is 100, which is opaque.|
| __set_openerElementID__ |Sets the __OpenerElementId__ for the __RadWindow__ . This is the HTML element that will open the __RadWindow__ when clicked.	Note that if it is a postback element, its server-side handlers will not fire.|
| __set_overlay__ |Sets a value indicating whether the __RadWindow__ should create an overlay element.|
| __set_reloadOnShow__ |Sets a value indicating whether the page that is loaded in the __RadWindow__ should be loaded every time from the server or whether the browser's default behavior will be left.|
| __set_restrictionZoneID__ |Sets the client-side ID of an HTML element in which the window object will be able to move.|
| __set_showContentDuringLoad__ |Sets a value indicating whether the page that is loaded in the __RadWindow__ should be shown during the loading process or when it has finished loading.|
| __set_status__ |Sets the message in the status area of the __RadWindow__ .|
| __set_title__ |Sets the __RadWindow's__ title. Note that if the content page has its own title set in the @Page directive or in the <head> section,	this title will override the __RadWindow's__ declaratively configured one.|
| __set_top__ |Sets the vertical offset relative to its offset element in pixels. Corresponds to the __Top__ server property.|
| __set_visibleStatusbar__ |Sets the visibility of the __RadWindow's__ status bar. Accepts __True__ / __False__ as its parameter.|
| __set_visibleTitlebar__ |Sets the visibility of the __RadWindow's__ titlebar. Accepts __True__ / __False__ as its parameter.|
| __set_width__ |Sets the __RadWindow's__ width in pixels.|

## Methods that Check a Condition or Invoke a Certain Behavior


>caption Methods that check a condition or invoke a certain behavior.

|  __Name__  |  __Description__  |
| ------ | ------ |
| __addShortcut__ |Adds the specified shortcut string to the given command. Takes two string parameters: the command and its shortcut.|
| __autoSize__ |Changes __RadWindow's__ size to fit the content page. You cannot use the __autoSize__ method with pages from other domains due to browsers' security restrictions.	You can optionally call the __autoSize__ method with an argument set to __true__ . This will make the autosizing perform an animation while adjusting the size.|
| __center__ |Centers the __RadWindow__ in the middle of the page (or its restriction zone if set).|
| __close__ |Closes the __RadWindow__ . Must be called from a __RadWindow__ object, not from the window object when in a content page.	You can pass an argument to it that is easily obtained from the main page. See[this article]({%slug window/how-to/using-radwindow-as-a-dialog%})for details.|
| __getShortcutString__ |Returns the last shortcut for the command that is passed as an argument (string).|
| __getWindowBounds__ |Returns the size and position of the __RadWindow__ . For example:var bounds = oWnd.getWindowBounds();bounds.x; //returns the current left position of the RadWindowbounds.y; //returns the current top position of the RadWindowbounds.height; //returns the current height of the RadWindowbounds.width; //returns the current width of the RadWindow|
| __hide__ |Makes the __RadWindow__ invisible.|
| __isActive__ |Returns __True__ if the __RadWindow__ is the currently active one.|
| __isAutoSizeBehaviorEnabled__ |Indicates whether a certain AutoSize behavior is enabled for the __RadWindow__ . Takes an argument of type	Telerik.Web.UI.WindowAutoSizeBehaviors and returns a Boolean value.|
| __isBehaviorEnabled__ |Indicates whether a certain behavior is enabled for the __RadWindow__ . Takes an argument of type Telerik.Web.UI.WindowBehaviors and returns a Boolean value.|
| __isClosed__ |Returns __True__ if the __RadWindow__ is currently closed.|
| __isCreated__ |Indicates whether the UI of the __RadWindow__ is already created or not.|
| __isInitialBehaviorEnabled__ |Indicates whether a certain initial behavior is enabled for the __RadWindow__ . Takes an argument of type Telerik.Web.UI.WindowBehaviors and returns a Boolean value.|
| __isMaximized__ |Returns __True__ if the __RadWindow__ is currently maximized.|
| __isMinimized__ |Returns __True__ if the __RadWindow__ is currently minimized.|
| __isModal__ |Returns __True__ if the __RadWindow__ is modal.|
| __isPinned__ |Returns __True__ if the __RadWindow__ is currently pinned.|
| __isShortcutAdded__ |Returns __True__ if there is a shortcut added to the command. The command name is passed as a string argument.|
| __isVisible__ |Returns __True__ if the __RadWindow__ is currently visible.|
| __maximize__ |Maximizes the __RadWindow__ .|
| __minimize__ |Minimizes the __RadWindow__ .|
| __moveTo__ |Sets the position of the __RadWindow__ in pixels. Takes two integer arguments: __Left__ and __Top__ (in this order).|
| __reload__ |Reloads the content page in the __RadWindow__ .	The page should come from the same server as the parent page due to JavaScript's cross-site scripting limitations.|
| __restore__ |Restores the __RadWindow__ to its normal (non-minimized) state.|
| __removeAllShortcutsCommand__ |Clears all shortcuts for the given command (passed as a string parameter).|
| __removeShortcut__ |Removes the last shortcut for thegiven command (passed as a string parameter).|
| __setActive__ |Takes a Boolean argument that, if __true__ , makes the __RadWindow__ the active (topmost) window on the page, otherwise	when the passed parameter is __false__ , the __setActive__ method makes the control lose focus.|
| __setSize__ |Sets the size of the __RadWindow__ in pixels. Takes two integer arguments for the width and height (in this order).|
| __setUrl__ |Changes the URL of the __RadWindow__ .|
| __show__ |Shows the __RadWindow__ if it was invisible. If it does not exist, show() creates it.|
| __togglePin__ |Toggles whether the __RadWindow__ is pinned.|

## Methods for Modifying Client-side Event Handlers Dynamically

You can read more on the subject in the [Setting Client Event Handlers by Using JavaScript]({%slug window/client-side-programming/events/setting-handlers-by-using-javascript%}) help article.


>caption Methods for modifying client-side event handlers dynamically.

| Name | Description |
| ------ | ------ |
| __add_activate__ |Adds a function that will be called when a RadWindow is activated. The name of this function can also be declared in the __OnClientActivate__ property.|
| __add_autoSizeEnd__ |Adds a function that will be called when a RadWindow has finished resizing when the AutoSize functionality has taken effect. The name of this function can also be declared in the __OnClientAutoSizeEnd__ property.|
| __add_beforeClose__ |Adds a function that will be called before RadWindow is closed. You can cancel the closing of RadWindow there by using __set_cancel(true)__ . The name of this function can also be declared in the __OnClientBeforeClose__ property.|
| __add_beforeShow__ |Adds a function that will be called before RadWindow is shown. You can cancel the closing of RadWindow there by using __set_cancel(true)__ . The name of this function can also be declared in the __OnClientBeforeShow__ property.|
| __add_close__ |Adds a function that will be called when a RadWindow is closed. The name of this function can also be declared in the __OnClientClose__ property.|
| __add_command__ |TAdds a function that will be called when the commands Pin, Reload, Minimize and Maximize are executed (when the user presses a titlebar button). The name of this function can also be declared in the __OnClientCommand__ property.|
| __add_dragEnd__ |Adds a function that will be called when the user has finished dragging a RadWindow. The name of this function can also be declared in the __OnClientDragEnd__ property|
| __add_dragStart__ |Adds a function that will be called when the user starts dragging a RadWindow. The name of this function can also be declared in the __OnClientDragStart__ property.|
| __add_pageLoad__ |Adds a function that will be called when a RadWindow's content page is fully loaded. The name of this function can also be declared in the __OnClientPageLoad__ property.|
| __add_resize__ |Adds a function that will be called when the RadWindow is being resized. The name of this function can also be set in the __OnClientResize__ property.|
| __add_resizeEnd__ |Adds a function that will be called when the RadWindow is resized. The name of this function can also be set in the __OnClientResizeEnd__ property.|
| __add_resizeStart__ |Adds a function that will be called when the RadWindow resizing is started. The name of this function can also be set in the __OnClientResizeStart__ property.|
| __add_show__ |Adds a function that will be called when a RadWindow is shown. The name of this function can also be set in the __OnClientShow__ property.|
| __remove_activate__ |Removes a function declared with the __add_activate__ function.|
| __remove_autoSizeEnd__ |Removes a function declared with the __add_autoSizeEnd__ function.|
| __remove_beforeClose__ |Removes a function declared with the __add_beforeclose__ function.|
| __remove_beforeShow__ |Removes a function declared with the __add_beforeShow__ function.|
| __remove_close__ |Removes a function declared with the __add_close__ function|
| __remove_command__ |Removes a function declared with the __add_command__ function|
| __remove_dragEnd__ |Removes a function declared with the __add_dragEnd__ function.|
| __remove_dragStart__ |Removes a function declared with the __add_dragStart__ function.|
| __remove_pageLoad__ |Removes a function declared with the __add_pageLoad__ function.|
| __remove_resize__ |Removes a function declared with the __add_resize__ function.|
| __remove_resizeEnd__ |Removes a function declared with the __add_resizeEnd__ function.|
| __remove_resizeStart__ |Removes a function declared with the __add_resizeStart__ function.|
| __remove_show__ |Removes a function declared with the __add_show__ function.|

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
	            oWnd.setUrl("http://www.telerik.com");
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



# See Also

 * [RadWindowManager Object]({%slug window/client-side-programming/radwindowmanager-object%})

 * [Using RadWindow as a Dialog]({%slug window/how-to/using-radwindow-as-a-dialog%})

 * [Overview]({%slug window/client-side-programming/events/overview%})
