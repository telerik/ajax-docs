---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: imageeditor/server-side-programming/events
tags: events
published: True
position: 1
---

# Events



## 


| Event | Description |
| ------ | ------ |
| __ImageChanged__ |Fires when the image has been changed.|
| __DialogLoading__ |Fires when an operation's dialog is loading its content.|
| __ImageLoading__ |Fires just before the image is loaded from the file system. This event can be canceled and the edited image loaded from a custom location. The event is fired only when the ImageEditor needs to load the initial image.|
| __ImageSaving__ |Fires just before the image is saved on the file system. This event can be canceled and the edited image saved into a custom location.|
| __OnImageEditing__ |Fires when a custom command is fired or when a built-in command that requires server operation is invoked (with the exception of Reset and Save).|
