---
title: Mobile Support Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: mediaplayer/mobile-support/overview
tags: overview
published: True
position: 0
---

# Mobile Support Overview



## 

Telerik ASP.NET MediaPlayer comes with built-in adaptive behavior. When accessed via a mobile device, the control changes to create a user experience tailored to the device screen size. In this mode, __RadMediaPlayer__ is mobile-friendly and its playback, time bar,volume and playlist features are easier to select and interact.

__Telerik Video Player for ASP.NET makes possible to handle touch events in the same manner as those triggered by a keyboard or a mouse.__![Media Player Mobile Support 1](images/mediaplayer-mobile-support1.png)

## Mobile vs Auto Render Modes

You can enable the mobile layout of the control by setting the __RenderMode__ property of the media player to __Mobile__.

To cover the rendering of both mobile and desktop devices, you can set the __RenderMode__ property to __Auto__. This option will automatically decide how to render the control on a smartphone, tablet or PC.

For more accurate device detection, you can reference the [Device Detection Framework](www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx) , which ensures that the control is rendered with appropriate UI according to the device screen size.

## Viewport adjustment

For fine-tuning of the viewport you can add the following meta tag in the head section of the page.

````ASPNET
	     <meta name="viewport" content="width=device-width, initial-scale=1" />
````



For optimal experience on mobile devices, we suggest that you use Telerik controls together with the [Page Layout Framework](http://www.telerik.com/products/aspnet-ajax/responsive-page-layout.aspx) , which will add responsive capabilities to your layout. See more mobile-optimized demos of Telerik controls in this responsive [sample app](http://demos.telerik.com/responsive-web-design-aspnet/samples.aspx).

# See Also

 * [Overview]({%slug mediaplayer/overview%})

 * [Live Demo](http://demos.telerik.com/aspnet-ajax/media-player/examples/overview/defaultcs.aspx)

 * [Getting Started]({%slug mediaplayer/getting-started%})
