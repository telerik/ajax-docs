---
title: Image Rendering Mode
page_title: Image Rendering Mode | RadRibbonBar for ASP.NET AJAX Documentation
description: Image Rendering Mode
slug: ribbonbar/appearance-and-styling/image-rendering-mode
tags: image,rendering,mode
published: True
position: 1
---

# Image Rendering Mode



RadRibbonBar is a control following very tightly the Microsoft’s“Ribbons” specification and guide-lines. As such, RibbonBar enforces usage of images for almost all RibbonBarItems.

As there is a notion for Size (RibbonBarItemSize) as property of all items, the need for different images for all sizes emerges (3 sizes using all together 2 sizes for images – 16x16 for Small and Medium and 32x32 for Large).

In order to provide more, we have implemented the ability to set images for the disabled state of RibbonBarItems (in all sizes) as well. Which means the images can be as many as 4 per item.

This variety of choices has its own problems. Setting all the images in properties one-by-one (and storing them in separate files), proves to be hard. And in some cases even requires additional work to be done – some graphic libraries are provided by vendors in as “clip” images (small and large image in a small sprite – in 1 file). Still having the ability to change a single image, without the need of setting (creating) a new clip, proves to be more flexible, therefore potentially very useful.

In order to satisfy both camps, we decided to implement Image Rendering Mode, in order to switch between single-image model (called Dual) and clip-image (called Clip).

## Properties and values

Image Rendering Mode is implemented on both control and item level. And in both places the property is called the same ImageRenderingMode and has the same values (binded from the enumeration RibbonBarImageRenderingModes). The values of the enumeration are as follows:

* Auto;

* Clip;

* Dual.

By default the selected value is Auto.

1. **ImageRenderingMode.Auto** When no mode is explicitly selected (or Auto is), RadRibbonBar tries to determine the appropriate rendering mode on per-item basis. We strongly recommend to always explicitly set on of the other two modes – Clip and Dual. Simply because there are items with very hard to determine mode scenarios. Perhaps the best example of such item is RibbonBarSplitButton – it has a selected button, but at the same time it has the possibility of setting all images directly on it. This makes the determining of the Rendering Mode far too complex and many scenarios cannot be covered automatically. Otherwise the algorithm is basically working as following: if there is a large image set (ImageUrlLarge or DisabledImageUrlLarge), the mode is Dual. If there are no large images set, but there is a small image set – the mode is Clip. If no images are set – the mode is Dual again and default RibbonBar images are displayed.

1. **ImageRenderingMode.Clip** In this mode the images are assigned through the ImageUrl and DisabledImageUrl. ImageUrl image contains both small and large image for the enabled state of the item, and the DisabledImageUrl contains the images for the disabled state. Images set in the ImageUrlLarge and DisabledImageUrlLarge are disregarded.

1. **ImageRenderingMode.Dual** When Dual is explicitly set (or resolved to, from Auto), small images are set through ImageUrl and DisabledImageUrl and large images are set through ImageUrlLarge and DisabledImageUrlLarge.

## Example

As previously mentioned, the ImageRenderingMode can be set on RadRibbonBar and on any RibbonBarItem. This means that you can set a general rule on RibbonBar level and make exceptions on the level of item. In order to fully show the power of this approach, here is an example:

````ASPNET
<telerik:RadRibbonBar RenderMode="Lightweight" runat="server" ID="RadRibbonBar1" ImageRenderingMode="Clip">
	<telerik:RibbonBarTab Text="Tab1">
		<telerik:RibbonBarGroup Text="Group1">
			<Items>
				<telerik:RibbonBarButton Text="Button1"
					ImageUrl="images/Icons/Button1ClipImage.png"
					DisabledImageUrl="images/Icons/Button1ClipImageDisabled.png" />
				<telerik:RibbonBarButton Text="Button2"
					ImageUrl="images/Icons/Button2ClipImage.png"
					DisabledImageUrl="images/Icons/Button2ClipImageDisabled.png" />
				<telerik:RibbonBarButton Text="Button3"
					ImageRenderingMode="Dual"
					ImageUrl="images/Icons/Button3SMALLImage.png"
					ImageUrlLarge="images/Icons/Button3LARGEImage.png"
					DisabledImageUrl="images/Icons/Button3SMALLImageDisabled.png"
					DisabledImageUrlLarge="images/Icons/Button3LARGEImageDisabled.png" />
			</Items>
		</telerik:RibbonBarGroup>
	</telerik:RibbonBarTab>
</telerik:RadRibbonBar>
````


