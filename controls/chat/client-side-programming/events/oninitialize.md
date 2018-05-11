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

The **OnInitialize** client-side event occurs when the **RadChat** starts initializing on the client-side.

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

 * [Kendo UI Chat Events](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-side events Overview]({%slug chat/client-side-programming/events%})


