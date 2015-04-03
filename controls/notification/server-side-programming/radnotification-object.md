---
title: RadNotification Object
page_title: RadNotification Object | UI for ASP.NET AJAX Documentation
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
| __Animation__ |Get/Set the animation effect of the notification.|
| __AnimationDuration__ |Sets/gets the duration of the animation in milliseconds.|
| __AudioHandlerUrl__ |Specifies the URL of the HTTPHandler that serves the notification sound.|
| __AutoCloseDelay__ |Get/Set the delay after which the notification will hide if not explicitly closed.|
| __CloseButtonToolTip__ |Gets or sets the content of the close button tooltip. The default value is __Close__ .|
| __ContentContainer__ |Gets the control, where the ContentTemplate will be instantiated in.You can use this property to programmatically add controls to the content area. If you add controls to the ContentContainer the Text and ContentIcon properties will be ignored.|
| __ContentIcon__ |Gets or sets the content icon. The default value is __NotificationIcon.Default__ .|
| __ContentScrolling__ |Get/Set overflow of the notification's content area.|
| __EnableAriaSupport__ |When set to true enables support for WAI-ARIA.|
| __Enabled__ |Gets or sets a value indicating whether the notification is enabled. The default value is __true__ .|
| __EnableRoundedCorners__ |Gets or sets a value indicating whether the notification should have rounded corners. The default value is __false__ . This is achieved via CSS3 properties and will not have effect under browsers that do not support them (such as IE8 and prior, FireFox 3, etc).|
| __EnableShadow__ |Gets or sets a value indicating whether the notification should have shadow. The default value is __false__ . This is achieved via CSS3 properties and will not have effect under browsers that do not support them (such as IE8 and prior, FireFox 3, etc).|
| __Height__ |Get/Set the Height of the notification. Can be set both in pixels and percent.|
| __KeepOnMouseOver__ |Gets or sets a value indicating whether the notification should stay on the screen when hovered (autoclose is delayed until the mouse goes outside the popup). The default value is __true__ .|
| __LoadContentOn__ |Gets or sets when the content should be loaded.|
| __NotificationMenu__ |Gets the context title menu.|
| __OffsetX__ |Get/Set the notification's horizontal offset. Works in cooperation with the Position property.|
| __OffsetY__ |Get/Set the notification's vertical offset. Works in cooperation with the Position property.|
| __Opacity__ |Gets or sets a value indicating what should be the opacity of the notification. The value must be between 0 (transparent) and 100 (opaque). The default value is __100__ .|
| __Overlay__ |Gets or sets a value indicating whether the notification will create an overlay element. The default value is __false__ .|
| __Pinned__ |Gets or sets a value indicating whether the notification is pinned (when true it does not scroll with the page). The default value is __true__ .|
| __Position__ |Get/Set the top/left position of the notification relative to the browser.|
| __ShowCloseButton__ |Gets or sets whether the close [X] button should be visible. The default value is __true__ .|
| __ShowInterval__ |Gets or sets when the interval after which the notification will automatically show.|
| __ShowSound__ |Gets or sets the sound to be played on show. The default value is __none__ |
| __ShowTitleMenu__ |Gets or sets whether the title menu should be visible. The default value is __true__ .|
| __Text__ |Get/Set the Text that will appear in the notification (if there is no ContentTemplate used).|
| __Title__ |Get/Set the Text that will appear in the notification (if there is no ContentTemplate used).|
| __TitleIcon__ |Gets or sets the title icon. The default value is __NotificationIcon.Default__ .|
| __TitleMenuToolTip__ |Gets or setsthe content of the the tooltip for the title menu. The default value is __Menu__ .|
| __UpdateInterval__ |Gets or sets when the interval after which the notification will automatically update the content.|
| __Value__ |Get/Set the an optional Value to pass.|
| __VisibleOnPageLoad__ |Gets or sets a value indicating whether the notification will open automatically when its parent [aspx] page is loaded on the client. The default value is __false__ .|
| __VisibleTitlebar__ |Gets or sets a value indicating whether the notification has a titlebar visible. The default value is true.|
| __WebMethodName__ |Gets or sets the web method name in the web service used to populate content.|
| __WebMethodPath__ |Gets or sets the path to the web service used to populate content.|
| __Width__ |Get/Set the Width of the notification. Can be set both in pixels and percent.|

## Server Methods


>caption Server methods that invoke a certain action of the control

| Name | Description |
| ------ | ------ |
| __Show__ |When called the RadNotification will be shown on the client once the page is loaded (or the AJAX request is receieved). It does not require that the notification is updated in the partial postback in order to work (if you change some properties in an AJAX request, however, you need to include the control in the request).The Show() method has one override - optionally it can take a string message that will be shown in the notification once. This message is not pesisted in the viewstate and the control will maintain its old value in case of a subsequent postback/AJAX request. More information can be found in[this online demo](http://demos.telerik.com/aspnet-ajax/notification/examples/servershowwithnewtext/defaultcs.aspx). Note that this string ultimately passes through JavaScript, therefore it must be escaped properly, e.g. apostrophes will throw an error, because they are string delimiters in this programming language.|

## Server properties for setting client event handlers

The value of these properties is a string specifying the __name__ of the JavaScript function that will handle the event. The default value is an empty string.


| Name | Description |
| ------ | ------ |
| __OnClientShowing__ |Gets or sets a value indicating the client-side event handler that is called when the RadNotification is to be shown.|
| __OnClientShown__ |Gets or sets a value indicating the client-side event handler that is called the just after the RadNotification is shown.|
| __OnClientHiding__ |Gets or sets a value indicating the client-side event handler that is called when the RadNotification is to be hidden.|
| __OnClientHidden__ |Gets or sets a value indicating the client-side event handler that is called when the RadNotification is hidden.|
| __OnClientUpdating__ |Gets or sets a value indicating the client-side event handler that is called when the content of RadNotification is to be updated.|
| __OnClientUpdated__ |Gets or sets a value indicating the client-side event handler that is called when the content of RadNotification is updated.|
| __OnClientUpdateError__ |Gets or sets a value indicating the client-side event handler that is called the call to the WebService or the callback is interrupted by an error.|

## Server events


| Name | Description |
| ------ | ------ |
| __OnCallbackUpdate__ |Allows for dynamic content to be set into the notification with a callback.The event is triggered according to the __LoadContentOn__ property.|

## Enumerators


| Name | Values |
| ------ | ------ |
| __NotificationAnimation__ |

* None

* Resize

* Fade

* Slide

* FlyIn|
| __NotificationLoad__ |

* PageLoad

* FirstShow

* EveryShow

* TimeInterval|
| __NotificationPosition__ |

* TopLeft

* TopCenter

* TopRight

* MiddleLeft

* Center

* MiddleRight

* BottomLeft

* BottomCenter

* BottomRight|
| __NotificationScrolling__ |

* Auto

* None

* X

* Y

* Both

* Default|

# See Also

 * [Client-side API]({%slug notification/client-side-programming/radnotification-object%})

 * [Client-side Events]({%slug notification/client-side-programming/events/overview%})
