---
title: OnClientShowing
page_title: OnClientShowing | RadNotification for ASP.NET AJAX Documentation
description: OnClientShowing
slug: notification/client-side-programming/events/onclientshowing
tags: onclientshowing
published: True
position: 2
---

# OnClientShowing





The **OnClientShowing** event occurs just before the notification is shown. This event is cancellable.

The event handler receives the following parameters:

1. The **RadNotification** client instance that fired the event.

1. Event arguments object. Call its set_cancel(true) method to cancel the event.

````ASP.NET
<telerik:RadNotification runat="server" ID="RadNotification1" VisibleOnPageLoad="true"
    Position="BottomRight" Width="250px" Height="100px"
    OnClientShowing="OnClientShowing" Text="Sample notification text">
</telerik:RadNotification>

<script type="text/javascript">
    function OnClientShowing(sender, eventArgs)
    {
        alert("OnClientShowing event fired by RadNotification with id: " + sender.get_id());
    }
</script>
````



# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})
