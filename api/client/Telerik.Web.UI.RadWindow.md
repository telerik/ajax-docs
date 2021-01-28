---
title: Telerik.Web.UI.RadWindow
description: Telerik.Web.UI.RadWindow
slug: Telerik.Web.UI.RadWindow
---

# Telerik.Web.UI.RadWindow : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadWindow]({%slug Telerik.Web.UI.RadWindow%})*


## Properties

### argument `object`

An arbitrary object that is often used to store a reference to some data when passing it between the main page and the content page. It is not used by RadWindow.

## Methods


### addShortcut

Adds a new shortcut for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

##### shortcutString `String`

shortcutString

#### Returns

`None` 

### autoSize

Changes RadWindow's size to fit the content page. It cannot be used with pages from other domains due to browsers" security restrictions. You can optionally call the method with argument true - this will make the autosizing perform an animation while adjusting the size

#### Parameters

##### toAnimate `Boolean`

#### Returns

`None` 

### BrowserWindow

Returns a reference to the parent page's document. This is useful for calling functions on the parent page.

#### Parameters

#### Returns

`None` 

### center

Centers the RadWindow in the middle of the page

#### Parameters

#### Returns

`None` 

### close

Closes the RadWindow. If argument is provided, it can be passed and extracted in the OnClientClose event by using the get_argument method

#### Parameters

##### callBackFnArg? `Object`

Argument of type Object that can be processed via the OnClientClose event handler.

#### Returns

`None` 

### get_animation

Gets the animation value for the RadWindow

#### Parameters

#### Returns

`Telerik.Web.UI.WindowAnimation` 

### get_animationDuration

Gets animation duration value for the RadWindow. The default value is 500ms

#### Parameters

#### Returns

`Number` 

### get_autoSize

Gets a value which indicates whether the window will automatically resize itself according to its content page or not

#### Parameters

#### Returns

`Boolean` 

### get_browserWindow

Gets a reference to the RadWindow's parent [browser window] object

#### Parameters

#### Returns

`Window` 

### get_centerIfModal

CenterIfModal

#### Parameters

#### Returns

`None` 

### get_contentElement

Gets the content element when the RadWindow is used as controls container and not with NavigateUrl

#### Parameters

#### Returns

`Object` 

### get_contentFrame

Returns a reference to RadWindow's content area (IFRAME). One possible use is to call a function that is declared in the RadWindow's page from the parent page. Another possible use is to modify the DOM

#### Parameters

#### Returns

`Object` 

### get_cssClass

Gets the class name specified in the CSSClass property

#### Parameters

#### Returns

`String` 

### get_destroyOnClose

Gets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed

#### Parameters

#### Returns

`Boolean` 

### get_enableShadow

Gets a value indicating whether the window should have a shadow.

#### Parameters

#### Returns

`Boolean` 

### get_height

Gets the height of the RadWindow

#### Parameters

#### Returns

`Number` 

### get_iconUrl

Gets the url of the icon in the upper left corner of the RadWindow titlebar

#### Parameters

#### Returns

`String` 

### get_keepInScreenBounds

Gets a value indicating whether the RadWindow will show in the visible viewport of the browser window

#### Parameters

#### Returns

`Boolean` 

### get_left

Gets the horizontal offset relative to its offset element

#### Parameters

#### Returns

`Number` 

### get_maxHeight

Gets the maximum height of the RadWindow

#### Parameters

#### Returns

`Number` 

### get_maxWidth

Gets the maximum width of the RadWindow

#### Parameters

#### Returns

`Number` 

### get_minHeight

Gets the minimum height of the RadWindow

#### Parameters

#### Returns

`Number` 

### get_minimizeIconUrl

Gets the url of the minimized icon of the RadWindow

#### Parameters

#### Returns

`String` 

### get_minimizeZoneID

Gets the id (ClientID if a runat=server is used) of an html element where the window object will be docked when minimized

#### Parameters

#### Returns

`String` 

### get_minWidth

Gets the minimum width of the RadWindow

#### Parameters

#### Returns

`Number` 

### get_modal

Gets a value indicating whether the RadWindow is modal or not

#### Parameters

#### Returns

`Boolean` 

### get_name

RadWindow

#### Parameters

#### Returns

`None` 

### get_navigateUrl

Returns the RadWindow's navigate URL

#### Parameters

#### Returns

`String` 

### get_offsetElementID

Gets the offset element ID [element according to which the RadWindow should be positioned relatively] - works together with the Top and Left properties

#### Parameters

#### Returns

`String` 

### get_opacity

Gets the value indicating the opacity of the RadWindow. The value should be between 0 and 100. The default value is 100 which is opaque

#### Parameters

#### Returns

`Number` 

### get_openerElementID

Gets the OpenerElementId for the RadWindow

#### Parameters

#### Returns

`String` 

### get_overlay

Gets a value indicating whether the RadWindow has an overlay element.

#### Parameters

#### Returns

`Boolean` 

### get_popupElement

Gets a reference to the RadWindow's popup element (the wrapper DIV element)

#### Parameters

#### Returns

`Object` 

### get_reloadOnShow

Gets a value indicating whether the page that is loaded in the RadWindow should be loaded everytime from the server or will leave the browser default behaviour

#### Parameters

#### Returns

`Boolean` 

### get_restrictionZoneID

Gets the id (ClientID if a runat=server is used) of an html element in which the window object will be able to move

#### Parameters

#### Returns

`String` 

### get_showContentDuringLoad

Gets a value indicating whether the page that is loaded in the RadWindow should be shown during the loading process or when it has finished loading

#### Parameters

#### Returns

`Boolean` 

### get_showOnTopWhenMaximized

Gets a value indicating whether the maximized RadWindow should be on top of the page's content

#### Parameters

#### Returns

`Boolean` 

### get_status

Gets current message in the status area of the window

#### Parameters

#### Returns

`String` 

### get_title

Gets the title of the RadWindow

#### Parameters

#### Returns

`String` 

### get_top

Gets the vertical offset relative to its offset element

#### Parameters

#### Returns

`Number` 

### get_visibleStatusbar

Gets a value indicating whether the RadWindow should have a visible statusbar

#### Parameters

#### Returns

`Boolean` 

### get_visibleTitlebar

Gets a value indicating whether the RadWindow should have a visible titlebar

#### Parameters

#### Returns

`Boolean` 

### get_width

Gets the width of the RadWindow

#### Parameters

#### Returns

`Number` 

### get_windowManager

Returns a reference to the RadWindowManager. As an alternative you can use the ASP.NET AJAX convention and use $find()

#### Parameters

#### Returns

`Telerik.Web.UI.RadWindowManager` 

### get_zindex

Gets the z-index of the RadWindow

#### Parameters

#### Returns

`Number` 

### getShortcutString

Returns shortcut string for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`String` 

### getWindowBounds

Returns the size and position of the RadWindow

#### Parameters

#### Returns

`Sys.UI.Bounds` 

### hide

Makes the RadWindow invisible

#### Parameters

#### Returns

`None` 

### isActive

Indicates whether the RadWindow is currently active

#### Parameters

#### Returns

`None` 

### isAutoSizeBehaviorEnabled

Indicates whether a certain autosize behavior is enabled for the RadWindow

#### Parameters

##### oBehavior `Telerik.Web.UI.WindowAutoSizeBehaviors`

#### Returns

`None` 

### isBehaviorEnabled

Indicates whether a certain behavior is enabled for the RadWindow

#### Parameters

##### oBehavior `Telerik.Web.UI.WindowBehaviors`

#### Returns

`None` 

### isClosed

Indicates whether the RadWindow is currently closed

#### Parameters

#### Returns

`None` 

### isCreated

Indicates whether the UI of the RadWindow is already created or not

#### Parameters

#### Returns

`None` 

### isInitialBehaviorEnabled

Indicates whether a certain initial behavior is enabled for the RadWindow

#### Parameters

##### oBehavior `Telerik.Web.UI.WindowBehaviors`

#### Returns

`None` 

### isMaximized

Indicates whether the RadWindow is currently maximized

#### Parameters

#### Returns

`None` 

### isMinimized

Indicates whether the RadWindow is currently minimized

#### Parameters

#### Returns

`None` 

### isModal

Indicates whether the RadWindow is modal

#### Parameters

#### Returns

`None` 

### isPinned

Indicates whether the RadWindow is currently pinned

#### Parameters

#### Returns

`None` 

### isShortcutAdded

Returns a boolean value indicating whether a shortcut for this command exists

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`Boolean` 

### isVisible

Indicates whether the RadWindow control is currently visible

#### Parameters

#### Returns

`None` 

### maximize

Maximizes the RadWindow

#### Parameters

#### Returns

`None` 

### minimize

Minimizes the RadWindow

#### Parameters

#### Returns

`None` 

### moveTo

Moves the RadWindow to the specified position

#### Parameters

##### x `Number`

##### y `Number`

#### Returns

`None` 

### raise_command

Raises the Command event

#### Parameters

#### Returns

`None` 

### reload

Reloads the content page in the RadWindow. The page should come from the same server as is the parent page

#### Parameters

#### Returns

`None` 

### removeAllShortcutsCommand

Removes all shortcuts for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`None` 

### removeShortcut

Removes shortcut for the command

#### Parameters

##### shortcutCommand `String`

shortcutCommand

#### Returns

`None` 

### restore

Restores the RadWindow to its normal (no minimized or maximized) state

#### Parameters

#### Returns

`None` 

### set_animation

Sets animation value for the RadWindow

#### Parameters

##### value `Telerik.Web.UI.WindowAnimation`

 

#### Returns

`None` 

### set_animationDuration

Sets animation duration value for the RadWindow

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_autoSize

Sets a value which indicates whether the window should automatically resize itself according to its content page or not

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_autoSizeBehaviors

Sets the AutoSizeBehaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowAutoSizeBehaviors enum. To set more than one behavior, use "+". Possible values are Width, WidthProportional, Height, HeightProportional, Default e.g: oWnd.set_autoSizeBehaviors( Telerik.Web.UI.WindowAutoSizeBehaviors.Width + Telerik.Web.UI.WindowAutoSizeBehaviors.Height )

#### Parameters

##### value `Telerik.Web.UI.WindowAutoSizeBehaviors`

 

#### Returns

`None` 

### set_behaviors

Sets the Behaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowBehaviors enum. To set more than one behavior, use "+". Possible values are None, Resize, Minimize, Close, Pin, Maximize, Move, Reload, Default e.g: oWnd.set_behaviors( Telerik.Web.UI.WindowBehaviors.Move + Telerik.Web.UI.WindowBehaviors.Close )

#### Parameters

##### value `Telerik.Web.UI.WindowBehaviors`

 

#### Returns

`None` 

### set_centerIfModal

CenterIfModal

#### Parameters

#### Returns

`None` 

### set_contentElement

Sets content element when the RadWindow is used as controls container and not with NavigateUrl

#### Parameters

##### element `Sys.UI.DomElement`

#### Returns

`None` 


### set_destroyOnClose

Sets a value indicating whether the RadWindow will be disposed and made inaccessible once it is closed

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_enableShadow

Sets a value indicating whether the window should have a shadow.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_height

Sets new height to the window

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_iconUrl

Sets the url of the icon in the upper left rwCorner of the RadWindow titlebar

#### Parameters

##### value `String`

#### Returns

`None` 

### set_initialBehaviors

Sets the InitialBehaviors property of the RadWindow object. Its argument must be a value or combination of values from the Telerik.Web.UI.WindowBehaviors enum. To set more than one behavior, use "+". Possible values are None, Minimize, Pin, Maximize, Default e.g: oWnd.set_initialBehaviors( Telerik.Web.UI.WindowBehaviors.Pin + Telerik.Web.UI.WindowBehaviors.Maximize )

#### Parameters

##### value `Telerik.Web.UI.WindowBehaviors`

 

#### Returns

`None` 

### set_keepInScreenBounds

Sets a value indicating whether the RadWindow should show in the visible viewport of the browser window

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_left

Sets a new horizontal offset relative to its offset element

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_maxHeight

Sets new maximum height to the window

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_maxWidth

Sets new maximum width to the RadWindow

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_minHeight

Sets new minimum height to the window

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_minimizeIconUrl

Sets the url of the minimized icon of the RadWindow

#### Parameters

##### value `String`

#### Returns

`None` 

### set_minimizeZoneID

Sets the clientside id of an html element where the window object will be docked when minimized

#### Parameters

##### value `String`

#### Returns

`None` 

### set_minWidth

Sets new minimum width to the RadWindow

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_modal

Sets a value indicating whether the RadWindow should be modal or not

#### Parameters

##### value `Boolean`

#### Returns

`None`

### set_navigateUrl

Sets the URL RadWindow will navigate to. Does not create the markup of the dialog or load the content page. To load the content page and show the dialog use setUrl and show respectively.

#### Parameters

##### value `String`

#### Returns

`None`

### set_offsetElementID

Sets the offset element ID [element according to which the RadWindow should be positioned relatively] - works together with the Top and Left properties

#### Parameters

##### value `String`

#### Returns

`None` 

### set_opacity

Sets the value indicating the opacity of the RadWindow

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_openerElementID

Sets the OpenerElementId for the RadWindow

#### Parameters

##### value `String`

 

#### Returns

`None` 

### set_overlay

Sets a value indicating whether the RadWindow should create an overlay element.

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_reloadOnShow

Sets a value indicating whether the page that is loaded in the RadWindow should be loaded everytime from the server or will leave the browser default behaviour

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_restrictionZoneID

Sets the clientside id of an html element in which the window object will be able to move

#### Parameters

##### value `String`

#### Returns

`None` 

### set_showContentDuringLoad

Sets a value indicating whether the page that is loaded in the RadWindow should be shown during the loading process or when it has finished loading

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_status

Sets a message in the status area of the window

#### Parameters

##### message `String`

 

#### Returns

`None` 

### set_title

Sets a new title to the RadWindow

#### Parameters

##### value `String`

 

#### Returns

`None` 

### set_top

Sets a new vertical offset relative to its offset element

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### set_visibleStatusbar

Sets a value indicating whether the RadWindow should have a visible statusbar

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_visibleTitlebar

Sets a value indicating whether the RadWindow should have a visible titlebar

#### Parameters

##### value `Boolean`

 

#### Returns

`None` 

### set_width

Sets new width to the RadWindow

#### Parameters

##### value `Number`

 

#### Returns

`None` 

### setActive

Makes the RadWindow the active RadWindow on the page

#### Parameters

##### bActivate `Boolean`

#### Returns

`None` 

### setSize

Sets new width and height to the RadWindow

#### Parameters

##### width `Number`

##### height `Number`

#### Returns

`None` 

### setUrl

Changes URL of RadWindow

#### Parameters

##### url `String`

#### Returns

`None` 

### show

Shows the RadWindow if it was invisible. If the RadWindow does not exist, show creates it

#### Parameters

#### Returns

`None` 

### togglePin

Toggles whether the RadWindow is pinned

#### Parameters

#### Returns

`None` 


## Events

### activate

The activate event of the RadWindow is fired when the control becomes the active window. 
This happens when it opens, when the user clicks or taps on it, and when its client-side API is used to activate it via the setActive() method. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.

### autoSizeEnd

The autoSizeEnd event of the RadWindow fires when its automatic size adjustment operation completes. 
It may have been invoked automatically because it was shown and its AutoSize property is set to True, 
or because the developer called the autoSize() method from its client-side API. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.
### beforeClose

The beforeClose event of the RadWindow control fires when it is about to close. This event can be cancelled to prevent 
the closing operation (and the close event from firing). The close operation can be initiated from the user by clicking or 
tapping on the manual close button (X) in the top right-hand side corner of the title bar, or by the developer via calling the 
close(optionalArguments) client-side method of the control. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Telerik.Web.UI.WindowCloseCancelEventArgs`

The event arguments.

### beforeShow

The beforeShow event of the RadWindow control fires when it is about to show. You can cancel the event to prevent the dialog from showing. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### close

The close event fires when the RadWindow closes. You can use the event to pass data from the dialog page. 
It is subsequent to the beforeClose event. The close operation can be initiated from the user by clicking or tapping 
on the manual close button (X) or by the developer via calling the close(optionalArguments) client-side method of the control.

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Telerik.Web.UI.WindowCloseEventArgs`

The event arguments.

### command

The command event fires when a command button from the RadWindow's title bar is clicked or tapped by the user. The developer can also initiate it by using the client-side API of the control. Event is cancellable. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### dragEnd

The dragEnd event of the RadWindow fires when the user stops dragging the popup. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.

### dragStart

The dragStart event of the RadWindow fires when the user starts dragging the popup. This action is also initiated by a click or a tap on the title bar. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.

### pageLoad

The pageLoad event of the RadWindow fires when the page set through its NavigateUrl property finishes loading. 
Since this page is loaded inside an iframe, this event is fired by the iframe's onload event. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.

### resizeEnd

The resizeEnd event of the RadWindow fires when the user finished resizing the popup. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.

### resizeStart

The resizeStart event of the RadWindow fires when the user is about to start resizing the popup. 
You can cancel the event to prevent the user from resizing the control. You can also entirely disable resizing through the Behaviors property of the RadWindow. 

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### show

The show event of the RadWindow fires when the popup shows. It follows the beforeShow event. 
You can use this event to change settings of the RadWindow that will affect its behavior, e.g., making sure it is always maximized or pinned.

#### Event Data

#####  sender `Telerik.Web.UI.RadWindow`

The instance of the RadWindow raised the event.

##### args `Sys.EventArgs`

Empty event arguments.


