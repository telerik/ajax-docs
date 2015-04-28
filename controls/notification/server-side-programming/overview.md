---
title: Overview
page_title: Server-side Programming Overview | RadNotification for ASP.NET AJAX Documentation
description: Overview
slug: notification/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview





The **RadNotification** offers several directions in which you can modify its behavior:

* Use the **Position, OffetX, OffsetY** properties to control the position in which the notification is shown.
* Use the **Width and Height** properties to control the size of the notification. Since Q3 2011 this can take percents as well as pixels
* Use the **Animation, AnimationDuration** properties to control the way in which the notification is initially shown.
* Use the **ContentScrolling** property to customize the availability of scrollbars. Possible values are Auto, None X, Y and Both. This requires the content to have explicit dimensions set in pixels to work correctly.
* Use the **ShowCloseButton, ShowTitleMenu, VisibleTitlebar, TitleIcon** properties to control the behavior of the titlebar.
* Use the **AutoCloseDelay, KeepOnMouseOver, ShowInterval** properties to control the time, after which the notification will automatically show/hide.
* Use the **LoadContentOn, UpdateInterval, ShowInterval** properties to control when new content is loaded. When **UpdateInterval** is set to 0 updates will not be performed when **LoadContentOn** is set to **TimeInterval**.
* Use the **Text, Title, ContentIcon, WebMethodName, WebMethodpath, OnCallbackUpdate** properties to control how the content is loaded.
* You can declare a custom menu between the **NotificationMenu** tags.
* You can change the overall look and feel of the notification by changing its skin via the **Skin, EnableShadow, EnableRoundedCorners** propertes.
* You can define a custom HTTP handler that servers the sound through the **AudioHandlerUrl** property.


>tip In order to disable automatic updates set **LoadContentOn** to **PageLoad** , **UpdateInterval** to **0** and add content either through the **Text** property or in the **ContentTemplate** .



>tip In order to disable the timer that shows the control over certain intervals set the **ShowInterval** property to **0** . This allows you to have animations and to keep the notification visible for extended periods of time (i.e. unless the user clicks the close button or you hide it with JavaScript) without a flickering effect caused by re-showing of the animated control upon expiration of the ShowInverval timer. Setting **AutoCloseDelay** to **0** will also disable the automatic hiding of the control so you can keep it on the page indefinitely.



# See Also

 * [Animation]({%slug notification/appearance-and-styling/animation%})

 * [RadNotification Structure]({%slug notification/getting-started/radnotification-structure%})

 * [Notification Menu]({%slug notification/functionality/notification-menu%})

 * [Skins]({%slug notification/appearance-and-styling/skins%})

 * [Setting Content]({%slug notification/setting-content/populate-static-content%})
