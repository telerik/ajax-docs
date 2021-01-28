---
title: OnClientHiding
page_title: OnClientHiding - RadNotification
description: Check our Web Forms article about OnClientHiding.
slug: notification/client-side-programming/events/onclienthiding
tags: onclienthiding
published: True
position: 7
---

# OnClientHiding





The **OnClientHiding** event occurs just before the notification is hidden. This event is cancellable.

The event handler receives the following parameters:

1. The **RadNotification** client instance that fired the event.
1. Event arguments object that allows the following functionality:
	
	* Call its set_cancel(true) method to cancel the event.
	
	* Call its get_manualClose() method to obtain a boolean value indicating whether the user closed the notification or it closed via its own timeout.


````ASP.NET
<telerik:RadNotification RenderMode="Lightweight" runat="server" ID="RadNotification1" VisibleOnPageLoad="true"
    Position="BottomRight" Width="250px" Height="100px"
    OnClientHiding="OnClientHiding" Text="Sample notification text">
</telerik:RadNotification>

<script type="text/javascript">
    function OnClientHiding(sender, eventArgs)
    {
        alert("OnClientHiding event fired by RadNotification with id: " + sender.get_id());
        alert("The notification is being closed by the user: " + eventArgs.get_manualClose());
    }
</script>
````



# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})
