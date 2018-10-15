---
title: DeviceDetectionFramework
page_title: RadDeviceDetectionFramework | UI for ASP.NET AJAX Documentation
description: RadDeviceDetectionFramework
slug: controls/raddevicedetectionframework
tags: raddevicedetectionframework
published: True
position: 14
---

# RadDeviceDetectionFramework



Nowadays supporting mobile devices in the Web Development is a must. However finding the right screen size can be laborious. Here in help comes Telerik **Device Detection Framework**. Added in **Q1 2014** this .NET library allow developers to determine the Screen Resolution of huge number of mobile devices in an elegant way. Telerik ships **Device Detection Framework** as a separate assembly - **Telerik.Web.Device.Detection.dll**.

>note When **Telerik.Web.Device.Detection.dll** assembly is referenced in a project, Telerik controls will use it automatically. For example those controls which need to resolve **RenderMode="Auto"** will use it to determine, whether to activate **Mobile Render Mode**.
>


## How to use it?

In order to use **Detection Framework** you need to add reference to **Telerik.Web.Device.Detection.dll** in your project.



````C#
using Telerik.Web.Device.Detection;
````
````VBNET
Imports Telerik.Web.Device.Detection
````


## Methods


>caption  

| Name | Description |
| ------ | ------ |
| **GetScreenDimensions(string userAgent)** |Returns the screens dimensions of the device made request in CSS pixels. If there is no match the dimensions will be 0.|
| **GetScreenSize(string userAgent)** |Returns the screens size based on default screen ranges (in CSS pixels).The default ranges are:Small (to 600) CSS pixelsMedium (601-1024) CSS pixelsLarge (1025 - 1366) CSS pixelsExtraLarge (over 1366) CSS pixels|
| **GetScreenSize(string userAgent, ScreenRanges screenRanges)** |Returns the screens size based on default screen ranges (in CSS pixels).The default ranges are:Small (to 600) CSS pixelsMedium (601-1024) CSS pixelsLarge (1025 - 1366) CSS pixelsExtraLarge (over 1366) CSS pixels|

## Getting the Screen Dimensions by User Agent String





````C#
protected override void OnInit(EventArgs e)
{
    DeviceScreenDimensions screenDimensions = Detector.GetScreenDimensions(Request.UserAgent);
    HidePlaceHolders(screenDimensions);
}

private void HidePlaceHolders(DeviceScreenDimensions screenDimensions)
{
    if (screenDimensions.Height < 650 && screenDimensions.Width < 500)
    {
        //Hide PlaceHolder1 for mobile browsers
        PlaceHolder1.Visible = false;
    }
}
````
````VBNET
protected override void OnInit(EventArgs e)
Dim screenDimensions As DeviceScreenDimensions = Detector.GetScreenDimensions(Request.UserAgent)
    HidePlaceHolders(screenDimensions)
End Sub

Private Sub HidePlaceHolders(screenDimensions As DeviceScreenDimensions)
    If screenDimensions.Height < 650 AndAlso screenDimensions.Width < 500 Then
        'Hide PlaceHolder1 for mobile browsers
        PlaceHolder1.Visible = False
    End If
End Sub
````


## Getting the Screen Size by User Agent String



````C#
protected void Page_Load(object sender, EventArgs e)
{
    DeviceScreenSize screenSize = Detector.GetScreenSize(Request.UserAgent);
    if (screenSize == DeviceScreenSize.ExtraLarge)
    {
        //Display PlaceHolder1 if the mobile device has ExtraLarge screen size.
        PlaceHolder1.Visible = true;
    }
}
````
````VBNET
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    Dim screenSize As DeviceScreenSize = Detector.GetScreenSize(Request.UserAgent)
    If screenSize = DeviceScreenSize.ExtraLarge Then
        'Display PlaceHolder1 if the mobile device has ExtraLarge screen size.
        PlaceHolder1.Visible = True
    End If
End Sub
````


## Getting the Screen Size by Custom Defined Ranges



````C#
protected void Page_Load(object sender, EventArgs e)
{
    ScreenRanges customScreenRanges = new ScreenRanges();
    customScreenRanges.SmallScreenSizeRange = new ScreenRange(0, 100);
    customScreenRanges.MediumScreenSizeRange = new ScreenRange(101, 200);
    customScreenRanges.LargeScreenSizeRange = new ScreenRange(201, 300);
    customScreenRanges.ExtraLargeScreenSizeRange = new ScreenRange(301, 400);
    DeviceScreenSize screenSize = Detector.GetScreenSize(Request.UserAgent,  customScreenRanges);

    if (screenSize == DeviceScreenSize.Large)
    {
        //Do some action if the device's screen size matches the custom defined ranges
    }
}
````
````VBNET
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
    Dim customScreenRanges As New ScreenRanges()
    customScreenRanges.SmallScreenSizeRange = New ScreenRange(0, 100)
    customScreenRanges.MediumScreenSizeRange = New ScreenRange(101, 200)
    customScreenRanges.LargeScreenSizeRange = New ScreenRange(201, 300)
    customScreenRanges.ExtraLargeScreenSizeRange = New ScreenRange(301, 400)
    Dim screenSize As DeviceScreenSize = Detector.GetScreenSize(Request.UserAgent, customScreenRanges)

    If screenSize = DeviceScreenSize.Large Then
        'Do some action if the device's screen size matches the custom defined ranges
    End If
End Sub
````

## Remarks

The information provided by the Telerik device detection framework is based on statistical data collected by Telerik. There is no official information by the mobile device vendors that connects specific User Agent strings with screen sizes. Also, the User Agent string of a device may change over time without notice. One must also consider that the physical pixels may not always match logical pixels. With all this in mind, there may be some inacuracies in the RadDeviceDetectionFramework information for some rare cases.

