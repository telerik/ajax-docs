---
title: High CPU Usage with RadCaptcha Audio Code
description: High CPU Usage with RadCaptcha Audio Code. Check it now!
type: how-to
page_title: High CPU Usage with RadCaptcha Audio Code
slug: captcha-high-cpu-usage-with-radcaptcha-audio-code
res_type: kb
---


## Problem

When generating the RadCaptcha audio, the server CPU usage goes high and does not come back down. The RadCaptcha audio does not work and the request for it does not return.

The CPU usage may go up to 50% on the first request and then to 100%, or  to 100% directly. 

## Description

The issue seems related to the Microsoft Speech Synthesizer that is used by default to generate the audio for the captcha code in-memory.

According to client reports, the following configuration is more likely to cause this:
 - OS: Windows Server 2012 R2 or later

 - The ApplicationPool user running under the Network Service built-in account


The speech synthesizer .Speak() method never returns and does not release the thread. You can test this by attaching the Telerik.Web.UI source code to the server and adding a breakpoint on it in the \Captcha\Captcha\CaptchaAudio.cs file inside the SpeakText() method.

## Solution

There are two known solutions to this issue that can allow you to keep using the audio code:

 - Set the RadCaptcha1.**CaptchaImage.UseAudioFiles** property to **true**. This instructs RadCaptcha to concatenate .wav files from under the application (default location is ~/App\_Data/RadCaptcha) instead of using the Speech Synthesizer. You can read more about this in the [Using Audio Code]({%slug captcha/functionality/using-audio-code%}) help article.
 
 - Change the **Application Pool user** to the default **ApplicationPoolIdentity**.


You can also [disable the audio code generation]({%slug captcha/troubleshooting/optimize-application-performance-disable-audio%}) for your entire application. This can alleviate performance issues, but will effectively disable the audio code for your end users.

