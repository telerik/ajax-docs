---
title: OnTypingEnd
page_title: OnTypingEnd | RadChat for ASP.NET AJAX Documentation
description: OnTypingEnd
slug: chat/client-side-programming/events/ontypingend
tags: ontypingend
published: True
position: 5
---

The **OnTypingEnd** client-side event fires when the user clears the chat message box, signaling that he stopped typing. The event is also triggered when the user submits the currenlty typed in message. Equal to the [typingEnd](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/typingend) event of the underlying Kendo UI Chat widget.

The event handler receives two parameters:

1. The Chat instance firing the event.
2. An object with the following methods:
    1. get_sender() - the Kendo UI Chat widget instance which fired the event; 

````ASPNET
<script type="text/javascript">
    function onTypingEnd(sender, args) {
        var chat = sender;     
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnTypingEnd="onTypingEnd" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-Side events Overview]({%slug chat/client-side-programming/events%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})
