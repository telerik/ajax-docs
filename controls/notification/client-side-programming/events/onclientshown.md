---
title: OnClientShown
page_title: OnClientShown | RadNotification for ASP.NET AJAX Documentation
description: OnClientShown
slug: notification/client-side-programming/events/onclientshown
tags: onclientshown
published: True
position: 3
---

# OnClientShown




The **OnClientShown** event occurs just after the notification is shown. This event is not cancellable.

The event handler receives the following parameters:

1. The **RadNotification** client instance that fired the event.

1. Event arguments object.

````ASP.NET
<telerik:RadNotification RenderMode="Lightweight" runat="server" ID="RadNotification1" VisibleOnPageLoad="true"
    Position="BottomRight" Width="250px" Height="100px"
    OnClientShown="OnClientShown" Text="Sample notification text">
</telerik:RadNotification>

<script type="text/javascript">
    function OnClientShown(sender, eventArgs)
    {
        alert("OnClientShown event fired by RadNotification with id: " + sender.get_id());
    }
</script>
````



# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})
