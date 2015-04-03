---
title: OnClientUpdateError
page_title: OnClientUpdateError | UI for ASP.NET AJAX Documentation
description: OnClientUpdateError
slug: notification/client-side-programming/events/onclientupdateerror
tags: onclientupdateerror
published: True
position: 6
---

# OnClientUpdateError



## 

The __OnClientUpdateError__ event occurs if there has been an error when the __RadNotification__ content should be updated. An error alert which can be canceled is displayed.

The event handler receives the following parameters:

1. The __RadNotification__ client instance that fired the event.

1. Event arguments object. Call its set_cancelErrorAlert(true) method to cancel the alert.

This code sample will throw the event every time the notification is shown, yet no error alert will be shown to the user and the notification will be empty:

````ASPNET
	    <telerik:RadNotification runat="server" ID="RadNotification1" Position="BottomRight"
	        Width="250px" Height="100px" OnClientUpdateError="OnClientUpdateError"
	        LoadContentOn="EveryShow" ShowInterval="5000" OnCallbackUpdate="OnCallbackUpdate">
	    </telerik:RadNotification>
	    
	    <script type="text/javascript">
	        function OnClientUpdateError(sender, eventArgs)
	        {
	            eventArgs.set_cancelErrorAlert(true);
	        }
	    </script>
````



>tabbedCode

````C#
	    protected void OnCallbackUpdate(object sender, RadNotificationEventArgs e)
	    {
	        throw (new ApplicationException("an error occured during callback update"));
	    }
````



````VB.NET
	    Protected Sub OnCallbackUpdate(sender As Object, e As RadNotificationEventArgs)
	        Throw (New ApplicationException("an error occured during callback update"))
	    End Sub
	#End Region
	
	End Class


>end

# See Also

 * [Client-Side Events]({%slug notification/client-side-programming/events/overview%})
