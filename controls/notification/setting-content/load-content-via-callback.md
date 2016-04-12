---
title: Load Content Via Callback
page_title: Load Content Via Callback | RadNotification for ASP.NET AJAX Documentation
description: Load Content Via Callback
slug: notification/setting-content/load-content-via-callback
tags: load,content,via,callback
published: True
position: 1
---

# Load Content Via Callback




You can use the built-in **OnCallbackUpdate** event of the **RadNotification** to load its content from the server via a callback. It is especially useful in combination with the **LoadContentOn** property set to **EveryShow**. The key advantage of using a callback is that the server Page does not go through its whole lifecycle, but only a small part of it. The client state is not updated, and it is not sent back to the client-side.

>tip You can use this callback to set the notification's **Value** property, because it will be passed to the client. You can use it, for example, as a flag or some small piece of necessary data in your application's logic.



The event passes a **RadNotificationEventArgs** to the handler which contains the **Value** property of the **RadNotification** that initiated it.

In the example below the server time is populated in the notification by using its **Text** property.

````ASP.NET
<telerik:RadNotification RenderMode="Lightweight" runat="server" ID="RadNotification1" ShowInterval="5000"
        AutoCloseDelay="2000" Position="BottomRight" Width="250px" Height="150px"
        LoadContentOn="EveryShow" OnCallbackUpdate="OnCallbackUpdate">
</telerik:RadNotification>
````





````C#
protected void OnCallbackUpdate(object sender, RadNotificationEventArgs e)
{
    DateTime beBack = DateTime.Now.AddDays(7);
    RadNotification1.Text = "Hi there! I am currently out of the office. I will be back on "
        + beBack.ToShortDateString();
}
````
````VB.NET
 Protected Sub RadNotification1_CallbackUpdate(sender As Object, e As Telerik.Web.UI.RadNotificationEventArgs) Handles RadNotification1.CallbackUpdate
     Dim beBack As DateTime
     beBack = DateTime.Now.AddDays(7)
     RadNotification1.Text = "Hi there! I am currently out of the office. I will be back on "
          + beBack.ToShortDateString()
 End Sub
````


