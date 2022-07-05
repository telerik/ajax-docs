---
title: Disable Auto Zoom for Input Controls on iPhone Safari Browser
description: Check out how to disable the iphone feature for auto zooming input elements on focus.
type: how-to
page_title: Disable Auto Zoom for Input Controls on iPhone Safari Browser
slug: common-disable-autozoom-input-safari-iphone
position: 
tags: 
ticketid: 1569910
res_type: kb
---

## Description

If you have an input field on your website with a **font size of less than 16 pixels**, **Safari on iPhone** considers the text too small to read and automatically zooms in on the form field when the user taps on it.

The behavior is intended but it can deteriorate the expected user experience so it might be a good idea to disable this functionality and keep the zoom static while filling form controls.

## Solution

The auto zooming feature only affects input fields with font size of less than 16px so using font size of 16px or greater will prevent the auto zoom.

In case lower font-size should be used, you can prevent the zooming by adding a Viewport Meta Tag <meta name="viewport"> tag with the following attributes and properties to your website’s <head> section:

````HTML
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
````

What these properties in the meta tag mean:

 - `width=device-width` sets the width of the page to the same as the width of the device’s screen.
 - `initial-scale=1` sets the initial zoom of the page to 1.0 of that width, or no zoom at all.
 - `maximum-scale=1` fixes the maximum scale of the page to 1.0. This prevents Safari from auto-zooming while still allowing the user to zoom in manually.


 