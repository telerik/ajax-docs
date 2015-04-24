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



## 

You can use the built-in **OnCallbackUpdate** event of the **RadNotification** to load its content from the server via a callback. It is especially useful in combination with the **LoadContentOn** property set to **EveryShow**. The key advantage of using a callback is that the server Page does not go through its whole lifecycle, but only a small part of it. The client state is not updated, and it is not sent back to the client-side.

>tip You can use this callback to set the notification's **Value** property, because it will be passed to the client. You can use it, for example, as a flag or some small piece of necessary data in your application's logic.
>


The event passes a **RadNotificationEventArgs** to the handler which contains the **Value** property of the **RadNotification** that initiated it.

In the example below the server time is populated in the notification by using its **Text** property.

````ASPNET
	    <telerik:RadNotification runat="server" ID="RadNotification1" ShowInterval="5000"
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
	#End Region
	
	    #Region WebService_2
	    <ScriptService()> _
	    Public Class WebServiceName
	        Inherits WebService
	        <WebMethod()> _
	        Public Function WebServiceMethodName(context As Object) As String
	            ' We cannot use a dictionary as a parameter, 
	            'because it is only supported by script services.
	            ' The context object should be cast to a dictionary at runtime.
	            Dim contextDictionary As IDictionary(Of String, Object) = DirectCast(context, IDictionary(Of String, Object))
	
	            '...
	        End Function
	    End Class
	    #End Region
	
	    #Region WebService_4
	    Public Function GetWeatherForcast(context As Object) As String
		Dim contextDictionary As IDictionary(Of String, Object) = DirectCast(context, IDictionary(Of String, Object))
		Dim weather As String = DirectCast(contextDictionary("Value"), String).Replace("State", "")
	
	
		Return GetWeatherContent(weather)
	    End Function
	
	    Protected Function GetWeatherContent(weather As String) As String
		Dim temperature As Integer = 0
		Dim imgUrl As String = "Img/"
		Select Case weather
			Case "rainy"
				temperature = New Random().[Next](10, 15)
				imgUrl += "RainyIcon.png"
				Exit Select
			Case "cloudy"
				temperature = New Random().[Next](15, 20)
				imgUrl += "CloudyIcon.png"
				Exit Select
			Case Else
				'sunny :)
				temperature = New Random().[Next](20, 25)
				imgUrl += "SunnyIcon.png"
				Exit Select
		End Select
	
		Dim wrapper As New HtmlGenericControl("div")
		Dim img As New HtmlGenericControl("img")
		img.Attributes.Add("class", "imageThumb")
		img.Attributes.Add("src", imgUrl)
		img.Attributes.Add("alt", "")
		Dim textWrapper As New HtmlGenericControl("div")
		textWrapper.Attributes.Add("class", "textWrapper")
		textWrapper.InnerHtml = [String].Format("The weather forcast is {0}. <br> Expected degrees: {1}", weather.ToUpper(), temperature)
		wrapper.Controls.Add(img)
		wrapper.Controls.Add(textWrapper)
		Dim sw As New StringWriter()
		Dim writer As New HtmlTextWriter(sw)
		wrapper.RenderControl(writer)
		Return sw.ToString()
	    End Function
	    #End Region
	
	End Class
````


