---
title: OnToolClick
page_title: OnToolClick | RadChat for ASP.NET AJAX Documentation
description: OnToolClick
slug: chat/client-side-programming/events/ontoolclick
tags: ontoolclick
published: True
position: 0
---

# OnToolClick


The **OnToolClick** client-side event fires when an tool button from the chat toolbar is clicked. Equals to the [toolClick](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat/events/toolclick) event of the underlying Kendo UI Chat widget.

The event handler receives two parameters:

1. The Chat instance firing the event.
2. An object with the following methods:
    1. `get_button()` - the DOM element of the button clicked;
    2. `args.get_name()` - the name of the clicked tool button;
    3. `get_messageBox()` - the input element of the messageBox;
    4. `get_sender()` - the Kendo UI Chat widget instance which fired the event; 

````ASPNET
<script type="text/javascript">
    function onToolClick(sender, args) {
        var chat = sender;
        var button = args.get_button();
    }
</script>
<telerik:RadChat runat="server" ID="RadChat1">
    <ToolbarSettings>
        <ButtonsCollection>
            <telerik:ChatToolbarButton Text="ButtonA" name="ButtonA" IconClass="t-icon t-i-gear"/>
        </ButtonsCollection>
    </ToolbarSettings>
    <ClientEvents OnToolClick="onToolClick" />
</telerik:RadChat>
````

# See Also

 * [Kendo UI Chat Events](https://docs.telerik.com/kendo-ui/api/javascript/ui/chat#events)

 * [RadChat Client-Side events Overview]({%slug chat/client-side-programming/events%})

 * [RadChat Client-Side API Overview]({%slug chat/client-side-programming/overview%})
