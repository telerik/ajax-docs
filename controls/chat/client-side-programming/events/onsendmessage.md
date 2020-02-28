---
title: OnSendMessage
page_title: OnSendMessage | RadChat for ASP.NET AJAX Documentation
description: OnSendMessage
slug: chat/client-side-programming/events/onsendmessage
tags: onsendmessage
published: True
position: 4
---

# OnSendMessage

The **OnSendMessage** client-side event fires when the user posts a message through the chat message box. Equal to the [sendMessage](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/sendmessage) event of the underlying Kendo UI Chat widget. The messages from the message box can be sent either with pressing `Enter` key or clicking the send button.

The event handler receives two parameters:

1. The Chat instance firing the event.
2. An object with the following methods:
    1. `get_sender()` - the Kendo UI Chat widget instance which fired the event; 
    2. `get_text()` - the text value that was entered in the message box;

````ASPNET
<script type="text/javascript">
    function onSendMessage(sender, args) {
        var chat = sender;
        var text = args.get_text();       
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnSendMessage="onSendMessage" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-Side events Overview]({%slug chat/client-side-programming/events%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})
