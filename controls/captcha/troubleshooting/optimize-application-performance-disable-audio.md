---
title: Performance Optimization by Disabling Audio Handler
page_title: Performance Optimization by Disabling Audio Handler | RadCaptcha for ASP.NET AJAX Documentation
description: Improve the performance of your application by disabling the audio handler of RadCaptcha. 
slug: captcha/troubleshooting/optimize-application-performance-disable-audio
tags: improve, performance, application, disabling, disable, audio, handler, RadCaptcha, captcha
published: True
position: 1
---

# Performance Optimization by Disabling Audio Handler

You can find here information how to improve the performance of your ASP.NET application by disabling the **RadCaptcha** audio handler. 

**RadCaptcha** provides the functionality to request audio for the capthca rendered. You can read more about it in [Using Audio Code]({%slug captcha/functionality/using-audio-code%}) article. 

This feature is available by using a built-in handler for the audio. Which is available with disabled **Audio Code** feature and also without using **RadCaptcha** on the page. In order to eliminate possible requests for the audio, you can set the `CaptchaDenyAudioHandler` key to `true` in the **web.config** file.

>caption Example 1: Disabling audio handler using the CaptchaDenyAudioHandler key.

````XML
<add key="Telerik.Web.CaptchaDenyAudioHandler" value="true"/>
````

## See Also

* [Using Audio Code]({%slug captcha/functionality/using-audio-code%})

* [Optimizing Performance]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/optimizing-performance%})

* [web.config Settings Overview]({%slug general-information/web-config-settings-overview%})

