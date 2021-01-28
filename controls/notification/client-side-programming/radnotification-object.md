---
title: RadNotification Object
page_title: RadNotification Object - RadNotification
description: Check our Web Forms article about RadNotification Object.
slug: notification/client-side-programming/radnotification-object
tags: radnotification,object
published: True
position: 1
---

# RadNotification Object



## Methods that expose the public properties


>caption Getters/setters for the properties

| Name | Description |
| ------ | ------ |
| **get_animation** |Gets the animation value of the notification. Returns a variable of type Telerik.Web.UI.NotificationAnimation.|
| **get_animationDuration** |Gets animation duration value for the notification.|
| **get_autoCloseDelay** |Gets delay in milliseconds for the notification to close automatically.|
| **getBounds** |Returns the size and position of the notification popup.|
| **get_enabled** |Gets a value indicating whether the notification is enabled|
| **get_height** |Gets the height of the notification.|
| **get_contentElement** |Gets the content element of the notification.|
| **get_contentScrolling** |Gets a new overflow value for the notification content area. Returns a variable of type Telerik.Web.UI.NotificationScrolling.|
| **get_keepOnMouseOver** |Gets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup).|
| **get_loadContentOn** |Gets when the content should be loaded. Returns a variable of type Telerik.Web.UI.NotificationLoad.|
| **get_offsetX** |Gets the horizontal offset relative to the browser window.|
| **get_offsetY** |Gets the vertical offset relative to the browser window.|
| **get_opacity** |Gets the value indicating the opacity of the RadNotification.The value should be between 0 and 100. The default value is 100 which is opaque.|
| **get_overlay** |Gets a value indicating whether the notification has an overlay element.|
| **get_pinned** |Gets a value indicating whether the notification should be scrolled along with the content or not.|
| **get_popupElement** |Returns a reference to the popup element of RadNotification.|
| **get_position** |Gets the relative to the browser window position of the notification.|
| **get_showInterval** |Gets the show interval of the notification.|
| **get_text** |Gets the text of the notification.|
| **get_title** |Gets the title of the notification.|
| **get_titleMenu** |Returns a reference to a RadMenu object. Returns 'null' when there is no menu configured.|
| **get_updateInterval** |Gets the update interval of the notification.|
| **get_value** |Gets the current value associated with the RadNotification control.|
| **get_visibleTitlebar** |Gets a value indicating whether the RadNotification should have a visible titlebar.|
| **get_width** |Gets the width of the notification.|
| **get_zIndex** |Gets the z-index of the RadNotification.|
| **set_animation** |Sets new animation value for the notification. The parameter must be of type Telerik.Web.UI.NotificationAnimation. The **NotificationAnimation** property is an enum and can take the following values, which names describe the effect when they are set: None, Resize, Fade, Slide, FlyIn. For example: **notification.set_animation(Telerik.Web.UI.NotificationAnimation.Slide);** |
| **set_animationDuration** |Sets animation duration value for the notification.|
| **set_autoCloseDelay** |Sets delay in milliseconds for the notification to close automatically.|
| **set_contentScrolling** |Sets a new overflow value for the notification content area. The **Scrolling** property is an enum (Telerik.Web.UI.NotificationScrolling) and can take the following values, which names describe the effect when they are set: Default, Auto, None, X, Y, Both. For example: **notification.set_contentScrolling(Telerik.Web.UI.NotificationScrolling.None);** |
| **set_enabled** |Sets a value indicating whether the notification is enabled.|
| **set_height** |Sets new height to the notification.|
| **set_keepOnMouseOver** |Sets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup).|
| **set_loadContentOn** |Sets when the content should be loaded. The parameter must be of type Telerik.Web.UI.NotificationLoad. The **NotificationLoad** property is an enum and can take the following values, which names describe the effect when they are set: PageLoad, FirstShow, EveryShow, TimeInterval.For example: **notification.set_loadContentOn(Telerik.Web.UI.NotificationLoad.TimeInterval);** |
| **set_offsetX** |Sets a new horizontal offset relative to the browser window.|
| **set_offsetY** |Sets a new vertical offset relative to the browser window.|
| **set_opacity** |Sets the value indicating the opacity of the RadNotification. The value should be between 0 and 100 where 100 is opaque.|
| **set_overlay** |Sets a value indicating whether the notification will create an overlay element.|
| **set_pinned** |Sets a value indicating whether the notification should be scrolled along with the content or not.|
| **set_position** |Sets a new relative to the browser window position for the notification. The parameter must be of type Telerik.Web.UI.NotificationPosition. The **NotificationPosition** property is an enum and can take the following values, which names describe the effect when they are set: TopLeft, TopCenter, TopRight, MiddleLeft, Center, MiddleRight, BottomLeft, BottomCenter, BottomRight. For example: **notification.set_position(Telerik.Web.UI.NotificationPosition.Center);** |
| **set_showInterval** |Sets new show interval to the notification.|
| **set_text** |Sets new text to the notification.|
| **set_title** | Sets a new title to the notification.|
| **set_updateInterval** | Sets new update interval to the notification.|
| **set_value** | Sets new value to be associated with the RadNotification control|
| **set_visibleTitlebar** | Sets a value indicating whether the RadNotification should have a visible titlebar.|
| **set_width** |Sets new width to the notification.|
| **set_zIndex** |Sets new z-index of the RadNotification.|

## Public methods


>caption They activate certain behaviors or functionality

| Name | Description |
| ------ | ------ |
| **hide** |Hides the notification.|
| **isVisible** |Indicates whether the RadNotification popup is currently visible.|
| **moveTo** |Moves the notification to the specified coordinates (horizontal, vertical).|
| **playSound** |Starts the notification sound.|
| **setSize** |Sets new width and height to the notification.|
| **show** |Displays the notification at the proper position, relative to the browser window.|
| **update** |Updates the content of the notification.|
| **userInitSound** |Some browsers have the limitation to only play sound after a user interaction.Calling this method at such a moment tries to play the sound in an attempt to make it availablefor cases when user interaction is missing. Such known case is Safari on iOS devices.|
| **verifySound** |Does a check whether internally the sound is playable. This is usually needed when the sound is onlyplayable after a user interaction and **userInitSound** method has had to be called.|
