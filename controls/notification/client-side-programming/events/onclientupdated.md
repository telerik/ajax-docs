---
title: OnClientUpdated
page_title: OnClientUpdated | RadNotification for ASP.NET AJAX Documentation
description: OnClientUpdated
slug: notification/client-side-programming/events/onclientupdated
tags: onclientupdated
published: True
position: 5
---

# OnClientUpdated



## 

The **OnClientUpdated** event occurs just after the notification content is updated. This event is not cancellable. It will not be fired when the content is static. It is only fired when new content is received via a WebService or via a callback. The **LoadContentOn** setting is also used to control whether it will be fired or not.

The event handler receives the following parameters:

1. The **RadNotification** client instance that fired the event.

1. Event arguments object.

This code sample will throw the event every time the notification is shown:

````ASPNET
	    <telerik:RadNotification runat="server" ID="RadNotification1" Position="BottomRight"
	        Width="250px" Height="100px" OnClientUpdated="OnClientUpdated"
	        LoadContentOn="EveryShow" ShowInterval="5000" Text="Sample notification text">
	    </telerik:RadNotification>
	    
	    <script type="text/javascript">
	        function OnClientUpdated(sender, eventArgs)
	        {
	            alert("OnClientUpdated event fired by RadNotification with id: " + sender.get_id());
	        }
	    </script>
````



# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})
