---
title: Overview
page_title: Mobile Support Overview | RadLightBox for ASP.NET AJAX Documentation
description: Overview
slug: lightbox/mobile-support/overview
tags: overview
published: True
position: 0
---

# Mobile Support Overview



__Telerik ASP.NET LightBox__ comes with built-in __adaptive__ behavior. When accessed via a mobile device, the control changes to create a user experience tailored to the device screen size.


To enable the layout change for mobile devices, just set the __RenderMode__ property of the __LightBox__ to __"Mobile"__ andadd the following meta tag to the page's head section:

	
	<meta name="viewport" content="width=device-width, initial-scale=1" />
          



By setting the __RenderMode__ property to "__Auto__" and referencing the [Device Detection Framework](http://www.telerik.com/products/aspnet-ajax/device-detection-framework.aspx), you will ensure that the control is 
rendered in an appropriate UI according to the device screen size.

For optimal experience on mobile devices, we suggest that you use Telerik controls together with the [Page Layout Framework](http://www.telerik.com/products/aspnet-ajax/responsive-page-layout.aspx), which will 
add responsive capabilities to your layout.

# See Also

 * [Responsive Sample App](http://demos.telerik.com/responsive-web-design-aspnet/samples.aspx)
