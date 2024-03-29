---
title: DeviceDetectionFramework
page_title: RadDeviceDetectionFramework
description: Check our Web Forms article about RadDeviceDetectionFramework.
slug: controls/raddevicedetectionframework
tags: raddevicedetectionframework
published: True
previous_url: controls/raddevicedetectionframework
position: 2
CTAControlName: DeviceDetectionFramework
---

# RadDeviceDetectionFramework



Nowadays supporting mobile devices in the Web Development is a must. However finding the right screen size can be laborious. Here in help comes Telerik **Device Detection Framework**. Added in **Q1 2014** this .NET library allow developers to determine the Screen Resolution of huge number of mobile devices in an elegant way. Telerik ships **Device Detection Framework** as a separate assembly - **Telerik.Web.Device.Detection.dll**.

{% if site.has_cta_panels == true %}
{% include cta-panel-overview.html %}
{% endif %}

>note When **Telerik.Web.Device.Detection.dll** assembly is referenced in a project, Telerik controls will use it automatically. For example those controls which need to resolve **RenderMode="Auto"** will use it to determine, whether to activate **Mobile Render Mode**.
>

## How it works?

Telerik DeviceDetectionFramework is designed to distinguish whether the application is browsed on a desktop screen or on a mobile device screen. Its main purpose is to allow automatic enabling of controls' Mobile render mode when browsed under mobile devices as well as to allow you to apply different CSS for different predefined or custom ranges of mobile devices' screen size. 

This framework matches the user agent string from the request with a predefined database that holds records for various mobile devices' screen sizes in CSS pixels. That screen size check is done server-side to allow proper control rendering - client-side check would come too late. When the framework finds a match, it returns the screen size. If no match is found, the result returned is 0. In the case of mobile devices, there is a specific screen size for each device that is known in advance and could be matched against unique user agent string values that hold information about the mobile device model.

>important
RadDeviceDetectionFramework cannot define the **Device orientation**
>

The Device orientation is not passed in the user agent string, so the RadDeviceDetectionFramework cannot distinguish whether the requesting device is in Landscape or Portrait mode. Such a check could be accomplished on the client using Media Queries. Find more about how to use media queries in:

 - [Responsive Web Design - Media Queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)

 - [Media Queries for Standard Devices](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)



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

Note that the resolution of a **desktop** machine cannot be determined based on its user agent string, simply because the two are not tightly coupled. For example, a Chrome on Windows 10 will generally have the same UA string on all Win10 machines, but it can run on a 10 inch laptop at 1366x768, on a full-HD laptop, or on a 27 desktop with a 4K screen.

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

For example, all iPhone models report the same User Agent string, so there is no way to tell which device is requesting the page and what size its screen is. This is why RadDeviceDetectionFramework returns the size of an iPhone 8 as a median solution between a smaller iPhone 5 and a larger iPhone 8 Plus device.

