---
title: Mobile Support and Responsiveness
page_title: Mobile Support and Responsiveness | UI for ASP.NET AJAX Documentation
description: Mobile Support and Responsiveness
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/mobile-support-and-responsiveness
tags: mobile,support,and,responsiveness
published: True
position: 0
---

# Mobile Support and Responsiveness



In the modern World Wide Web, users expect to be able to access your content using a variety of devices that range	in size from the very small smart phone to a hi-definition display on a workstation or even a widescreen display.	To accommodate this range of access to your content, Telerik recommends a Responsive approach to your web design.

Responsive Web Design is an approach at formatting your content to provide an optimal viewing experience	on a wide range of devices with a minimum of resizing, panning, or scrolling.	Starting with the Q1 2014 release of the UI for AJAX, Telerik provides significant support for responsive web design.

## Recommendations

To empower your web visitors with responsive capabilities in your web project, Telerik recommends the following configuration settings.

### ViewPort setting

To force your content to appear at a maximum width of the device within the browser viewport and prevent horizontal scrolling on a full-screen browser, add the meta-viewport tag to the header of your pages:

`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`

This code snippet also defines the initial scale of your content as 100% and prevents the need for your viewers to zoom.

### RenderMode settings

The AJAX controls have had a RenderMode configuration setting for some time,and with the introduction of the responsive design features, another RenderMode was introduced:Mobile.

When RenderMode is set to Mobile for controls that implement Adaptive Behavior, the HTML markup and styles used to present the control will be optimized for presentation on a smaller mobile device.All of the features of the control will be present.

If you want to take full advantage of the intelligence built into the Telerik controls, set RenderMode to Auto.With this configuration, the controls will detect what type of device and browser is requesting content and deliverMobile optimized markup to mobile devices, Lightweight markup to modern browsers, and Classic markup to older browsers that do not support the full HTML 5 recommendation.

You can configure the RenderMode setting across the entire web application in web.config with the following entry in AppSettings:

`<add key="Telerik.Web.UI.RenderMode" value="Auto"/>`

You can find more information about this feature in the [Controls Render Modes](c952abb4-e952-44fa-9e05-70aac40c04d5) help article.A list with the controls and the Render Modes they offer is available in the [Render Modes List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%}) help article.

## Page Level Considerations

On a page-level, you will want to be able to choose the layout of your page.Where should controls be placed for various device sizes?Should they be placed side-by-side, or stacked?How many should be side-by-side in each browser size?

With the AJAX controls, Telerik now provide a	[Page Layout Framework](http://www.telerik.com/products/aspnet-ajax/responsive-page-layout.aspx).This framework is similar to other responsive layout frameworks, but has some bonus features for you.The Page Layout Framework allows you to configure your layout on server-side using common device references when sizing containers for your controls.With layout definitions like "SpanForMobile" or "SpanForTablet" you can define your layouts with confidence that you are constructing something that will fit properly on those devices.

Those server-side capabilities have more information available for you, if you want to take control over the rendering of your content.	The	[Device Detection Framework](http://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx) will allow you to detect and identify the exact size of the device that is requesting content from your web application.

## Responsive Control Behaviors

Thanks to the breadth of uses for the controls, the following behaviors are implemented to bring you the best responsive experience for your web project.You can find a list with the responsive capabilities each control offers in the	[Responsive, Adaptive and Elastic Capabilities List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%}) help article.

### Adaptive Controls

These controls feature multiple HTML renderings with appropriate styles to support various devices.When a page that contains an adaptive control is requested, the control will decide on the server which HTML rendering is optimal for the browser and device requesting content.This has the benefit of delivering the best experience to your visitors for their device resolution.	[View our adaptive control demos online](http://demos.telerik.com/responsive-web-design-aspnet/samples/adaptive-behavior.aspx).

### Elastic Controls

Elastic behavior dictates that the controls will grow and shrink appropriately to maintain a size that is relative to the font-size in use on the page.This has a benefit for your end-users in that they can zoom or change font-sizes in their browser and the controls will size appropriately. [View our elastic control demos online](http://demos.telerik.com/responsive-web-design-aspnet/samples/elastic-behavior.aspx).

### Responsive Controls

These controls feature a single HTML rendering, but are adapted for various device and browser sizes in the browser through styles and scripts.All script and style information is transmitted to the browser, and with CSS media queries the browser presents the optimized layout for the control. [View our responsive control demos online](http://demos.telerik.com/responsive-web-design-aspnet/samples/responsive-behavior.aspx).

### Fluid Controls

Fluid refers to the control filling its containing object in the HTML layout.If the container changes size, the control inside should scale and size with the container.Most Telerik ASP.NET AJAX controls now feature fluid behaviors.

## Appearance and Theming

The AJAX controls come with many themes that can be applied to every control.Several of these themes have been optimized for use on smaller devices with a "touch-first" philosophy in use for the controls.If your project is being constructed with mobile considerations, we recommend you select one of the following four themes:

* MetroTouch

* BlackMetroTouch

* Silk

* Glow

You can review how these themes appear for each control in our [demos website](http://demos.telerik.com/aspnet-ajax/) by selecting the skin on the top navbar next to the "ask a question" button.

## Gestures Support

The controls have been adapted to be able to handle gestures from touch enabled screens.Every control handles the tap gesture, and several other controls have been enhanced to handleadditional gestures that are common to the touch-first experience.

Among the gestures added to controls are:

* **Grid** — drag to scroll the tableview or perform swipe with two active points to go to the next/previous page.

* **ImageGallery** — swipe to navigate the images.

* **LightBox** — swipe to navigate the images or tap on the image to hide the **navigation arrows** (if visible) and the **description box** (when overlay mode is enabled).

* **Map** — drag the layer to pan; spread or pinch to zoom in or zoom out.

More information about the gestures support for the controls can be found in the [gestures support]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/gestures-support%}) article.

## Samples – See the Mobile Features Running

Telerik has assembled samples implementations of all of these features for you to be able to review on the	[Responsive Web Design sample website](http://demos.telerik.com/responsive-web-design-aspnet/default.aspx). Click through to that sample to try out the various features outlined here, including Adaptive, Elastic, and Responsive behaviors.Don’t forget to try using that sample website with your tablet and smart phone.

## See Also

 * [Responsive Web Design Sample Website](http://demos.telerik.com/responsive-web-design-aspnet/default.aspx)

 * [Page Layout Framework](http://www.telerik.com/products/aspnet-ajax/responsive-page-layout.aspx)

 * [Device Detection Framework](http://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx)[Render Modes Basics](c952abb4-e952-44fa-9e05-70aac40c04d5)

 * [Render Modes List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/render-modes%})

 * [Responsive, Adaptive and Elastic Capabilities List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/responsive,-adaptive-and-elastic-capabilities%})

 * [Gestures Support List]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/gestures-support%})
