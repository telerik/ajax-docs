---
title: Responsiveness
page_title: Responsiveness
description: "Learn more about the responsive behavior of the Telerik UI for ASP.NET AJAX controls and the types of responsive behaviors the controls provide."
previous_url: mobile-support/mobile-support-and-responsiveness
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/mobile-support-and-responsiveness
tags: telerik, aspnet, ajax, mobile, support, responsiveness
published: True
position: 1
---

# Responsiveness

Users access your web project through a variety of devices and from a range of screen sizes which require you to apply responsive web design strategy.

Responsive web design is an approach for formatting your content so that it provides an optimal viewing experience on a wide range of devices with a minimum of resizing, panning, or scrolling. As of the Q1 2014 release, Telerik UI for AJAX provides significant support for responsive web design.

>caption Responsive web design targets

![](images/responsiveness-overview.png)

## Recommendations

To empower your web visitors with responsive capabilities in your web project, it is recommended that you consider the `ViewPort` and `RenderMode` configuration settings.

### Setting the ViewPort

To force your content to appear at a maximum width of the device within the browser viewport and prevent horizontal scrolling on a full-screen browser, add the meta-viewport tag to the header of your pages:

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

This code snippet also defines the initial scale of your content as 100% and prevents the need for your viewers to zoom.

Last, but not least, it lets browsers honor `max-width` CSS `@media` queries which are often used to create responsive design.

### Setting the RenderMode 

When the `RenderMode` is set to `Mobile` in controls that implement adaptive behavior, the HTML markup and styles that are used to present the control will be optimized for presentation on a smaller mobile device. All features of the control will be present.

When `RenderMode` is set to `Auto`, the controls will detect what type of device and browser is requesting content, and deliver `Mobile` optimized markup to mobile devices, `Lightweight` markup to modern browsers, and `Classic` markup to older browsers that do not support the full HTML5 recommendation.

To configure the `RenderMode` setting across the entire web application in `web.config`, use the following entry in `AppSettings`:

`<add key="Telerik.Web.UI.RenderMode" value="Auto"/>`

For more information, refer to the article on [controlling the render modes]({%slug controls/render-modes%}). For a list with the controls and the render modes they offer, refer to the [list with render modes]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%}).

## Page-Level Considerations

On a page-level, you need to be able to choose the layout of your page, the positioning and rendering of the controls for various device sizes, and so on.

Telerik UI for ASP.NET AJAX provides the [Page Layout Framework](https://www.telerik.com/products/aspnet-ajax/responsive-page-layout.aspx). It allows you to configure your layout server-side by using common device references when sizing the containers for your controls. The framework provides layout definitions such as `SpanForMobile` or `SpanForTablet` with which define layouts that will properly fit on those devices.

Also, Telerik UI for ASP.NET AJAX provides the	[Device Detection Framework](https://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx) which allows you to detect and identify the exact size of the device that is requesting content from your web application.

## Appearance and Theming

The Telerik UI for ASP.NET AJAX suite comes with a set of themes that can be applied to every control. Some of these themes have been optimized for use on smaller devices with a "touch-first" philosophy for the controls.

If your project is being constructed with mobile considerations, it is recommended that you select the MetroTouch, BlackMetroTouch, Silk, or Glow theme.

To review the appearance of these themes for each control, select the skin on the top navbar next to the **ask a question** button on the [demos website](https://demos.telerik.com/aspnet-ajax/).

## See Also

* [Responsive Web Design Sample Website](https://demos.telerik.com/responsive-web-design-aspnet/default.aspx)

* [Page Layout Framework](https://www.telerik.com/products/aspnet-ajax/responsive-page-layout.aspx)

* [Device Detection Framework](https://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx)

* [Render Modes Basics]({%slug controls/render-modes%})

* [Render Modes]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%})

* [Responsive, Adaptive, and Elastic Capabilities]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

* [Gesture Support]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/gestures-support%})
