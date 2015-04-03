---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: notification/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## 

The __RadNotification__ offers several directions in which you can modify its behavior:

* Use the __Position, OffetX, OffsetY__ properties to control the position in which the notification is shown.

* Use the __Width and Height__ properties to control the size of the notification. Since Q3 2011 this can take percents as well as pixels

* Use the __Animation, AnimationDuration__ properties to control the way in which the notification is initially shown.

* Use the __ContentScrolling__ property to customize the availability of scrollbars. Possible values are Auto, None X, Y and Both. This requires the content to have explicit dimensions set in pixels to work correctly.

* Use the __ShowCloseButton, ShowTitleMenu, VisibleTitlebar, TitleIcon__ properties to control the behavior of the titlebar.

* Use the __AutoCloseDelay, KeepOnMouseOver, ShowInterval__ properties to control the time, after which the notification will automatically show/hide.

* Use the __LoadContentOn, UpdateInterval, ShowInterval__ properties to control when new content is loaded. When __UpdateInterval__ is set to 0 updates will not be performed when __LoadContentOn__ is set to __TimeInterval__.

* Use the __Text, Title, ContentIcon, WebMethodName, WebMethodpath, OnCallbackUpdate__ properties to control how the content is loaded.

* You can declare a custom menu between the __NotificationMenu__ tags.

* You can change the overall look and feel of the notification by changing its skin via the __Skin, EnableShadow, EnableRoundedCorners__ propertes.

* You can define a custom HTTP handler that servers the sound through the __AudioHandlerUrl__ property.

>tip In order to disable automatic updates set __LoadContentOn__ to __PageLoad__ , __UpdateInterval__ to __0__ and add content either through the __Text__ property or in the __ContentTemplate__ .
>


>tip In order to disable the timer that shows the control over certain intervals set the __ShowInterval__ property to __0__ . This allows you to have animations and to keep the notification visible for extended periods of time (i.e. unless the user clicks the close button or you hide it with JavaScript) without a flickering effect caused by re-showing of the animated control upon expiration of the ShowInverval timer. Setting __AutoCloseDelay__ to __0__ will also disable the automatic hiding of the control so you can keep it on the page indefinitely.
>


# See Also

 * [Animation]({%slug notification/appearance-and-styling/animation%})

 * [RadNotification Structure]({%slug notification/getting-started/radnotification-structure%})

 * [Notification Menu]({%slug notification/functionality/notification-menu%})

 * [Skins]({%slug notification/appearance-and-styling/skins%})

 * [Setting Content]({%slug notification/setting-content/populate-static-content%})
