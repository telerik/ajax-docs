---
title: OnActionClick
page_title: OnActionClick | RadChat for ASP.NET AJAX Documentation
description: OnActionClick
slug: chat/client-side-programming/events/onactionclick
tags: onactionclick
published: True
position: 0
---

# OnActionClick


The **OnActionClick** client-side event fires when an action button is clicked inside an attachment template, or when a suggestedAction is clicked. Equal to the [actionClick](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/actionclick) event of the underlying Kendo UI Chat widget.

The event handler receives two parameters:

1. The Chat instance firing the event.
2. An object with the following methods:
    1. get_text() - the text value of the clicked action button;
    2. get_sender() - the Kendo UI Chat widget instance which fired the event; 

````ASPNET
<script type="text/javascript">
    function оnActionClick(sender, args) {
        var chat = sender;
        var text = args.get_text();
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ClientEvents OnActionClick="оnActionClick" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](http://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-side events Overview]({%slug chat/client-side-programming/events%})

