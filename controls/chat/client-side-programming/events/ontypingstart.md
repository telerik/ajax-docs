---
title: OnTypingStart
page_title: OnTypingStart | RadChat for ASP.NET AJAX Documentation
description: OnTypingStart
slug: chat/client-side-programming/events/ontypingstart
tags: ontypingstart
published: True
position: 6
---

# OnTypingStart

The **OnTypingStart** client-side event fires when the user starts typing in the chat message box. The event is fired only once, and not upon each keystroke. Equal to the [typingStart](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/typingstart) event of the underlying Kendo UI Chat widget.

The event handler receives two parameters:

1. The Chat instance firing the event.
2. An object with the following methods:
    1. `get_sender()` - the Kendo UI Chat widget instance which fired the event; 

````ASPNET
<script type="text/javascript">
    function onTypingStart(sender, args) {
        var chat = sender;     
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnTypingStart="onTypingStart" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-Side events Overview]({%slug chat/client-side-programming/events%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})
