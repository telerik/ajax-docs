---
title: Memory Consumption Increase
page_title: Memory Consumption Increase | RadCaptcha for ASP.NET AJAX Documentation
description: Memory Consumption Increase
slug: captcha/changes-and-backward-compatibility/memory-consumption-increase
tags: memory,consumption,increase
published: True
position: 1
---

# Memory Consumption Increase



## What has changed

Since the Q2 2013 release of Telerik UI for ASP.NET AJAX we have introduced a CachingProvider that is responsible for storing the generated CapchaImage to the RadCaptcha control.This was done because previously the CapchaImage was incorrectly removed on each request, thus only single instance was preserved, and every subsequent request that is not a postbackmade the previous codes invalid.

With the applied fix, the control is expected to increase its memory consumption because now it is keeping CaptchaImage objects alive for specified time controlled by the property**CaptchaMaxTimeout** (default value is 20 minutes) utilizing application's Cache.

## How to decrease memory consumption

The memory consumption of RadCaptcha can be reduced by one of the following approaches:

* Decreasing the value of the **CaptchaMaxTimeout** property so that the lifetime of cached objects is shorter and the memory usage depends on the stream ofapplication users;

* Implementing custom CachingProvider that utilizes different type of storage for the generated CaptchaImage objects. This approach is described in the help article[Caching Provider]({%slug captcha/functionality/caching-provider%});
