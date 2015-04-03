---
title: OnClientUpdating
page_title: OnClientUpdating | UI for ASP.NET AJAX Documentation
description: OnClientUpdating
slug: notification/client-side-programming/events/onclientupdating
tags: onclientupdating
published: True
position: 4
---

# OnClientUpdating



## 

The __OnClientUpdating__ event occurs after the new content is received and just before it is updated in the control. This event is cancellable (i.e. the visual update can be cancelled, the call to the server for new content will always be performed). It will not be fired when the content is static. It is only fired when new content is received via a WebService or via a callback. The __LoadContentOn__ setting is also used to control whether it will be fired or not.

The event handler receives the following parameters:

1. The __RadNotification__ client instance that fired the event.

1. Event arguments object. It exposes the following methods: Call its set_cancel(true) method to cancel the event.

* get_content() - provides the updated content that has just been received, but before it is set in the notification

* set_cancel(shouldCancel) - it allows you to prevent the new content from being set in the notification (if you pass *true* as a parameter)

This code sample will throw the event every time the notification is shown:

````ASPNET
	    <telerik:RadNotification runat="server" ID="RadNotification1" Position="BottomRight"
	        Width="250px" Height="100px" OnClientUpdating="OnClientUpdating"
	        LoadContentOn="EveryShow" ShowInterval="5000" Text="Sample notification text">
	    </telerik:RadNotification>
	    
	    <script type="text/javascript">
	        function OnClientUpdating(sender, eventArgs)
	        {
	            alert("OnClientUpdating event fired by RadNotification with id: " + sender.get_id());
	        }
	    </script>
````



# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})
