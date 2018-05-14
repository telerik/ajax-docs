---
title: OnPost
page_title: OnPost | RadChat for ASP.NET AJAX Documentation
description: OnPost
slug: chat/client-side-programming/events/onpost
tags: onpost
published: True
position: 3
---

# OnPost


The **OnPost** client-side event fires when a message is posted to the **RadChat** control. This can be either through the message box, or an action button click. Equal to the [post](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/post) event of the underlying Kendo UI Chat widget.

The event handler receives two parameters:

1. The Chat instance firing the event.
2. An object with the following methods:
    1. get_from() - this contains the `id`, `name` and `iconUrl` set to the chat instance;
    2. get_sender() - the Kendo UI Chat widget instance which fired the event; 
    3. get_text() - the text value that was posted;
    4. get_timestamp() - the current time of posting the message;
    5. get_type() - the type of the message. Can be either `message` or `typing`.

````ASPNET
<script type="text/javascript">
    function onPost(sender, args) {
        var chat = sender;
        var text = args.get_text();
        var username = get_from().name;
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnPost="onPost" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-side events Overview]({%slug chat/client-side-programming/events%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})

