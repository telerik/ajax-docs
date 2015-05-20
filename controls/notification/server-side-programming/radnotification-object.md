---
title: RadNotification Object
page_title: RadNotification Object | RadNotification for ASP.NET AJAX Documentation
description: RadNotification Object
slug: notification/server-side-programming/radnotification-object
tags: radnotification,object
published: True
position: 1
---

# RadNotification Object



## Server Properties


| Name | Description |
| ------ | ------ |
| **Animation** |Get/Set the animation effect of the notification.|
| **AnimationDuration** |Sets/gets the duration of the animation in milliseconds.|
| **AudioHandlerUrl** |Specifies the URL of the HTTPHandler that serves the notification sound.|
| **AutoCloseDelay** |Get/Set the delay after which the notification will hide if not explicitly closed.|
| **CloseButtonToolTip** |Gets or sets the content of the close button tooltip. The default value is **Close** .|
| **ContentContainer** |Gets the control, where the ContentTemplate will be instantiated in.You can use this property to programmatically add controls to the content area. If you add controls to the ContentContainer the Text and ContentIcon properties will be ignored.|
| **ContentIcon** |Gets or sets the content icon. The default value is **NotificationIcon.Default** .|
| **ContentScrolling** |Get/Set overflow of the notification's content area.|
| **EnableAriaSupport** |When set to true enables support for WAI-ARIA.|
| **Enabled** |Gets or sets a value indicating whether the notification is enabled. The default value is **true** .|
| **EnableRoundedCorners** |Gets or sets a value indicating whether the notification should have rounded corners. The default value is **false** . This is achieved via CSS3 properties and will not have effect under browsers that do not support them (such as IE8 and prior, FireFox 3, etc).|
| **EnableShadow** |Gets or sets a value indicating whether the notification should have shadow. The default value is **false** . This is achieved via CSS3 properties and will not have effect under browsers that do not support them (such as IE8 and prior, FireFox 3, etc).|
| **Height** |Get/Set the Height of the notification. Can be set both in pixels and percent.|
| **KeepOnMouseOver** |Gets or sets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup). The default value is **true** .|
| **LoadContentOn** |Gets or sets when the content should be loaded.|
| **NotificationMenu** |Gets the context title menu.|
| **OffsetX** |Get/Set the notification's horizontal offset. Works in cooperation with the Position property.|
| **OffsetY** |Get/Set the notification's vertical offset. Works in cooperation with the Position property.|
| **Opacity** |Gets or sets a value indicating what should be the opacity of the notification. The value must be between 0 (transparent) and 100 (opaque). The default value is **100** .|
| **Overlay** |Gets or sets a value indicating whether the notification will create an overlay element. The default value is **false** .|
| **Pinned** |Gets or sets a value indicating whether the notification is pinned (when true it does not scroll with the page). The default value is **true** .|
| **Position** |Get/Set the top/left position of the notification relative to the browser.|
| **ShowCloseButton** |Gets or sets whether the close [X] button should be visible. The default value is **true** .|
| **ShowInterval** |Gets or sets when the interval after which the notification will automatically show.|
| **ShowSound** |Gets or sets the sound to be played on show. The default value is **none** |
| **ShowTitleMenu** |Gets or sets whether the title menu should be visible. The default value is **true** .|
| **Text** |Get/Set the Text that will appear in the notification (if there is no ContentTemplate used).|
| **Title** |Get/Set the Text that will appear in the notification (if there is no ContentTemplate used).|
| **TitleIcon** |Gets or sets the title icon. The default value is **NotificationIcon.Default** .|
| **TitleMenuToolTip** |Gets or setsthe content of the the tooltip for the title menu. The default value is **Menu** .|
| **UpdateInterval** |Gets or sets when the interval after which the notification will automatically update the content.|
| **Value** |Get/Set the an optional Value to pass.|
| **VisibleOnPageLoad** |Gets or sets a value indicating whether the notification will open automatically when its parent [aspx] page is loaded on the client. The default value is **false** .|
| **VisibleTitlebar** |Gets or sets a value indicating whether the notification has a titlebar visible. The default value is true.|
| **WebMethodName** |Gets or sets the web method name in the web service used to populate content.|
| **WebMethodPath** |Gets or sets the path to the web service used to populate content.|
| **Width** |Get/Set the Width of the notification. Can be set both in pixels and percent.|

## Server Methods


>caption Server methods that invoke a certain action of the control

| Name | Description |
| ------ | ------ |
| **Show** |When called the RadNotification will be shown on the client once the page is loaded (or the AJAX request is receieved). It does not require that the notification is updated in the partial postback in order to work (if you change some properties in an AJAX request, however, you need to include the control in the request).The Show() method has one override - optionally it can take a string message that will be shown in the notification once. This message is not persisted in the viewstate and the control will maintain its old value in case of a subsequent postback/AJAX request. More information can be found in [this online demo](http://demos.telerik.com/aspnet-ajax/notification/examples/servershowwithnewtext/defaultcs.aspx). Note that this string ultimately passes through JavaScript, therefore it must be escaped properly, e.g. apostrophes will throw an error, because they are string delimiters in this programming language.|

## Server properties for setting client event handlers

The value of these properties is a string specifying the **name** of the JavaScript function that will handle the event. The default value is an empty string.


| Name | Description |
| ------ | ------ |
| **OnClientShowing** |Gets or sets a value indicating the client-side event handler that is called when the RadNotification is to be shown.|
| **OnClientShown** |Gets or sets a value indicating the client-side event handler that is called the just after the RadNotification is shown.|
| **OnClientHiding** |Gets or sets a value indicating the client-side event handler that is called when the RadNotification is to be hidden.|
| **OnClientHidden** |Gets or sets a value indicating the client-side event handler that is called when the RadNotification is hidden.|
| **OnClientUpdating** |Gets or sets a value indicating the client-side event handler that is called when the content of RadNotification is to be updated.|
| **OnClientUpdated** |Gets or sets a value indicating the client-side event handler that is called when the content of RadNotification is updated.|
| **OnClientUpdateError** |Gets or sets a value indicating the client-side event handler that is called the call to the WebService or the callback is interrupted by an error.|

## Server events


| Name | Description |
| ------ | ------ |
| **OnCallbackUpdate** |Allows for dynamic content to be set into the notification with a callback.The event is triggered according to the **LoadContentOn** property.|

## Enumerators


| Name | Values |
| ------ | ------ |
| **NotificationAnimation** | None, Resize, Fade, Slide, FlyIn|
| **NotificationLoad** | PageLoad, FirstShow, EveryShow, TimeInterval|
| **NotificationPosition** | TopLeft, TopCenter, TopRight, MiddleLeft, Center, MiddleRight, BottomLeft, BottomCenter, BottomRight|
| **NotificationScrolling** | Auto, None, X, Y, Both, Default|

# See Also

 * [Client-side API]({%slug notification/client-side-programming/radnotification-object%})

 * [Client-side Events]({%slug notification/client-side-programming/events/overview%})
