---
title: OnLoad
page_title: OnLoad | RadChat for ASP.NET AJAX Documentation
description: OnLoad
slug: chat/client-side-programming/events/onload
tags: onload
published: True
position: 2
---

# OnLoad


The **OnLoad** client-side event occurs after the **RadChat** has been fully initialized on the client-side.

The event handler receives one parameter:

1. The RadChat instance firing the event.

This event is helpful if you need to get the client-side instance of the RadChat when it is embedded in other controls, if you need to configure a chat agent or if you need to post some initial messages. 

````ASPNET
<script type="text/javascript">
    function onLoad(sender) {
        var chat = sender;
        chat.postMessage("Hello!");
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnLoad="onLoad" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-Side events Overview]({%slug chat/client-side-programming/events%})

 * [Connecting to Chat Bot Services]({%slug chat/how-to/configure-chat-agent%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})

