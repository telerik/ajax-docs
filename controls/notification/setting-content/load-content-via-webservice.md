---
title: Load Content Via WebService
page_title: Load Content Via WebService | RadNotification for ASP.NET AJAX Documentation
description: Load Content Via WebService
slug: notification/setting-content/load-content-via-webservice
tags: load,content,via,webservice
published: True
position: 2
---

# Load Content Via WebService




**RadNotification** offers built-in support for gathering data from a WebService. The path to the web service and the name of the service method are specified in the **WebMethodPath** and **WebMethodName** properties. In order to use the integrated support, the web service should have the following signature:



````C#
[ScriptService]
public class WebServiceName : WebService
{
    [WebMethod]
    public string WebServiceMethodName(object context)
	{
		// We cannot use a dictionary as a parameter, 
		//because it is only supported by script services.
		// The context object should be cast to a dictionary at runtime.
		IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
		
		//...
	}
}
````
````VB
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
````



An example method in the WebService:

````ASP.NET
<telerik:RadNotification ID="RadNotification1" Animation="Slide" runat="server" OffsetX="-20"
    VisibleOnPageLoad="true" OffsetY="-20" Width="250px" Height="80px" LoadContentOn="EveryShow"
    WebMethodName="GetWeatherForcast" WebMethodPath="NotificationWebService.asmx"
    VisibleTitlebar="false" Value="rainyState" EnableRoundedCorners="true" Skin="Office2007">
</telerik:RadNotification>
````





````C#
[WebMethod]
public string GetWeatherForcast(object context)
{
    IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
    string weather = ((string)contextDictionary["Value"]).Replace("State", "");


    return GetWeatherContent(weather);
}

protected string GetWeatherContent(string weather)
{
    int temperature = 0;
    string imgUrl = "Img/";
    switch (weather)
    {
        case "rainy":
            temperature = new Random().Next(10, 15);
            imgUrl += "RainyIcon.png";
            break;
        case "cloudy":
            temperature = new Random().Next(15, 20);
            imgUrl += "CloudyIcon.png";
            break;
        default: //sunny :)
            temperature = new Random().Next(20, 25);
            imgUrl += "SunnyIcon.png";
            break;
    }

    HtmlGenericControl wrapper = new HtmlGenericControl("div");
    HtmlGenericControl img = new HtmlGenericControl("img");
    img.Attributes.Add("class", "imageThumb");
    img.Attributes.Add("src", imgUrl);
    img.Attributes.Add("alt", "");
    HtmlGenericControl textWrapper = new HtmlGenericControl("div");
    textWrapper.Attributes.Add("class", "textWrapper");
    textWrapper.InnerHtml = String.Format("The weather forcast is {0}. <br> Expected degrees: {1}", weather.ToUpper(), temperature);
    wrapper.Controls.Add(img);
    wrapper.Controls.Add(textWrapper);
    StringWriter sw = new StringWriter();
    HtmlTextWriter writer = new HtmlTextWriter(sw);
    wrapper.RenderControl(writer);
    return sw.ToString();
}
````
````VB
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
````


