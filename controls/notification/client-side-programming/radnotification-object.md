---
title: RadNotification Object
page_title: RadNotification Object | UI for ASP.NET AJAX Documentation
description: RadNotification Object
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
| __get_animation__ |Gets the animation value of the notification. Returns a variable of type Telerik.Web.UI.NotificationAnimation.|
| __get_animationDuration__ |Gets animation duration value for the notification.|
| __get_autoCloseDelay__ |Gets delay in milliseconds for the notification to close automatically.|
| __getBounds__ |Returns the size and position of the notification popup.|
| __get_enabled__ |Gets a value indicating whether the notification is enabled|
| __get_height__ |Gets the height of the notification.|
| __get_contentElement__ |Gets the content element of the notification.|
| __get_contentScrolling__ |Gets a new overflow value for the notification content area. Returns a variable of type Telerik.Web.UI.NotificationScrolling.|
| __get_keepOnMouseOver__ |Gets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup).|
| __get_loadContentOn__ |Gets when the content should be loaded. Returns a variable of type Telerik.Web.UI.NotificationLoad.|
| __get_offsetX__ |Gets the horizontal offset relative to the browser window.|
| __get_offsetY__ |Gets the vertical offset relative to the browser window.|
| __get_opacity__ |Gets the value indicating the opacity of the RadNotification.The value should be between 0 and 100. The default value is 100 which is opaque.|
| __get_overlay__ |Gets a value indicating whether the notification has an overlay element.|
| __get_pinned__ |Gets a value indicating whether the notification should be scrolled along with the content or not.|
| __get_popupElement__ |Returns a reference to the popup element of RadNotification.|
| __get_position__ |Gets the relative to the browser window position of the notification.|
| __get_showInterval__ |Gets the show interval of the notification.|
| __get_text__ |Gets the text of the notification.|
| __get_title__ |Gets the title of the notification.|
| __get_titleMenu__ |Returns a reference to a RadMenu object. Returns 'null' when there is no menu configured.|
| __get_updateInterval__ |Gets the update interval of the notification.|
| __get_value__ |Gets the current value associated with the RadNotification control.|
| __get_visibleTitlebar__ |Gets a value indicating whether the RadNotification should have a visible titlebar.|
| __get_width__ |Gets the width of the notification.|
| __get_zIndex__ |Gets the z-index of the RadNotification.|
| __set_animation__ |Sets new animation value for the notification. The parameter must be of type Telerik.Web.UI.NotificationAnimation. The __NotificationAnimation__ property is an enum and can take the following values, which names describe the effect when they are set:

* None

* Resize

* Fade

* Slide

* FlyInFor example: __notification.set_animation(Telerik.Web.UI.NotificationAnimation.Slide);__ |
| __set_animationDuration__ |Sets animation duration value for the notification.|
| __set_autoCloseDelay__ |Sets delay in milliseconds for the notification to close automatically.|
| __set_contentScrolling__ |Sets a new overflow value for the notification content area. The __Scrolling__ property is an enum (Telerik.Web.UI.NotificationScrolling) and can take the following values, which names describe the effect when they are set:

* Default

* Auto

* None

* X

* Y

* BothFor example: __notification.set_contentScrolling(Telerik.Web.UI.NotificationScrolling.None);__ |
| __set_enabled__ |Sets a value indicating whether the notification is enabled.|
| __set_height__ |Sets new height to the notification.|
| __set_keepOnMouseOver__ |Sets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup).|
| __set_loadContentOn__ |Sets when the content should be loaded. The parameter must be of type Telerik.Web.UI.NotificationLoad. The __NotificationLoad__ property is an enum and can take the following values, which names describe the effect when they are set:

* PageLoad

* FirstShow

* EveryShow

* TimeIntervalFor example: __notification.set_loadContentOn(Telerik.Web.UI.NotificationLoad.TimeInterval);__ |
| __set_offsetX__ |Sets a new horizontal offset relative to the browser window.|
| __set_offsetY__ |Sets a new vertical offset relative to the browser window.|
| __set_opacity__ |Sets the value indicating the opacity of the RadNotification. The value should be between 0 and 100 where 100 is opaque.|
| __set_overlay__ |Sets a value indicating whether the notification will create an overlay element.|
| __set_pinned__ |Sets a value indicating whether the notification should be scrolled along with the content or not.|
| __set_position__ |Sets a new relative to the browser window position for the notification. The parameter must be of type Telerik.Web.UI.NotificationPosition. The __NotificationPosition__ property is an enum and can take the following values, which names describe the effect when they are set:

* TopLeft

* TopCenter

* TopRight

* MiddleLeft

* Center

* MiddleRight

* BottomLeft

* BottomCenter

* BottomRightFor example: __notification.set_position(Telerik.Web.UI.NotificationPosition.Center);__ |
| __set_showInterval__ |Sets new show interval to the notification.|
| __set_text__ |Sets new text to the notification.|
| __set_title__ | ____ Sets a new title to the notification.|
| __set_updateInterval__ | ____ Sets new update interval to the notification.|
| __set_value__ | ____ Sets new value to be associated with the RadNotification control|
| __set_visibleTitlebar__ | ____ Sets a value indicating whether the RadNotification should have a visible titlebar.|
| __set_width__ |Sets new width to the notification.|
| __set_zIndex__ |Sets new z-index of the RadNotification.|

## Public methods


>caption They activate certain behaviors or functionality

| Name | Description |
| ------ | ------ |
| __hide__ |Hides the notification.|
| __isVisible__ |Indicates whether the RadNotification popup is currently visible.|
| __moveTo__ |Moves the notification to the specified coordinates (horizontal, vertical).|
| __playSound__ |Starts the notification sound.|
| __setSize__ |Sets new width and height to the notification.|
| __show__ |Displays the notification at the proper position, relative to the browser window.|
| __update__ |Updates the content of the notification.|
| __userInitSound__ |Some browsers have the limitation to only play sound after a user interaction.Calling this method at such a moment tries to play the sound in an attempt to make it availablefor cases when user interaction is missing. Such known case is Safari on iOS devices.|
| __verifySound__ |Does a check whether internally the sound is playable. This is usually needed when the sound is onlyplayable after a user interaction and __userInitSound__ method has had to be called.|
