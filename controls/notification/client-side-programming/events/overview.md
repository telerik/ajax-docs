---
title: Overview
page_title: Client-side Events Overview | RadNotification for ASP.NET AJAX Documentation
description: Overview
slug: notification/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Client-side Events Overview


 

**RadNotification** provides the following client-side events:

* [OnClientShowing]({%slug notification/client-side-programming/events/onclientshowing%}) - fires just before RadNotification is shown. It can be canceled.

* [OnClientShown]({%slug notification/client-side-programming/events/onclientshown%}) - fires after RadNotification is shown.

* [OnClientUpdating]({%slug notification/client-side-programming/events/onclientupdating%}) - fires just before RadNotification content is updated. It can be canceled.

* [OnClientUpdated]({%slug notification/client-side-programming/events/onclientupdated%}) - fires after RadNotification content is updated.

* [OnClientUpdateError]({%slug notification/client-side-programming/events/onclientupdateerror%}) - fires if an error was thrown when RadNotification content is updated. An error alert which can be canceled is displayed.

* [OnClientHiding]({%slug notification/client-side-programming/events/onclienthiding%}) - fires just before RadNotification hides.

* [OnClientHidden]({%slug notification/client-side-programming/events/onclienthidden%}) - fires after RadNotification hides.

If a **Notification Menu** is configured, it has its own client events as specified in the [Client-Side Events article of RadContextMenu]({%slug menu/client-side-programming/events/overview%}).

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

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



You can also modify the event handlers dynamically via JavaScript. For more information see the [Setting Event Handlers via JavaScript]({%slug notification/client-side-programming/events/set-event-handlers-via-javascript%}) article.

# See Also

 * [OnClientShowing]({%slug notification/client-side-programming/events/onclientshowing%})

 * [OnClientShown]({%slug notification/client-side-programming/events/onclientshown%})

 * [OnClientUpdating]({%slug notification/client-side-programming/events/onclientupdating%})

 * [OnClientUpdated]({%slug notification/client-side-programming/events/onclientupdated%})

 * [OnClientUpdateError]({%slug notification/client-side-programming/events/onclientupdateerror%})

 * [OnClientHiding]({%slug notification/client-side-programming/events/onclienthiding%})

 * [OnClientHidden]({%slug notification/client-side-programming/events/onclienthidden%})
