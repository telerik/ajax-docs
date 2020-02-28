---
title: OnInitialize
page_title: OnInitialize | RadChat for ASP.NET AJAX Documentation
description: OnInitialize
slug: chat/client-side-programming/events/oninitialize
tags: oninitialize
published: True
position: 1
---

# OnInitialize

The **OnInitialize** client-side event occurs when the **RadChat** starts initializing on the client-side, before the underlying Kendo UI Chat widget is initialized. It can be used for last minute property changes before the underlying Kendo UI widget is initialized. Once the Kendo UI widget is initialized, the **[OnLoad]({%slug chat/client-side-programming/events/onload%})** event is fired.

The event handler receives one parameter:

1. The Chat instance firing the event.

````ASPNET
<script type="text/javascript">
    function onInitialize(sender) {
        var chat = sender;
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnInitialize="onInitialize" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-Side events Overview]({%slug chat/client-side-programming/events%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})

