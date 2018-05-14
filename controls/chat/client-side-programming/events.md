---
title: Events
page_title: Events | RadChat for ASP.NET AJAX Documentation
description: Events
slug: chat/client-side-programming/events
tags: events
published: True
position: 1
---

# Events

**RadChat** supports a number of client-side events that let you customize the behavior of the chat:

* [OnActionClick]({%slug chat/client-side-programming/events/onactionclick%}) occurs when an action button is clicked inside an attachment template, or when a suggestedAction is clicked.

* [OnInitialize]({%slug chat/client-side-programming/events/oninitialize%}) occurs when the **RadChat** starts initializing on the client-side, before the underlying Kendo UI Chat widget is initialized.

* [OnLoad]({%slug chat/client-side-programming/events/onload%}) occurs after the **RadChat** has been fully initialized on the client-side.

* [OnPost]({%slug chat/client-side-programming/events/onpost%}) occurs when a message is posted to the **RadChat** control.

* [OnSendMessage]({%slug chat/client-side-programming/events/onsendmessage%}) occurs when a message is posted through the chat message box.

* [OnTypingEnd]({%slug chat/client-side-programming/events/ontypingend%}) occurs when the user clears the chat message box, signaling that he stopped typing. The event is also triggered when the user submits the currenlty typed in message.

* [OnTypingStart]({%slug chat/client-side-programming/events/ontypingstart%}) occurs when the user starts typing in the chat message box. The event is fired only once, and not upon each keystroke.


# See Also

 * [Client-Side API]({%slug chat/client-side-programming/overview%})

