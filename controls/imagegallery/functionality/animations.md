---
title: Animations
page_title: Animations | UI for ASP.NET AJAX Documentation
description: Animations
slug: imagegallery/functionality/animations
tags: animations
published: True
position: 1
---

# Animations



__RadImageGallery__ provides an option for using advanced animations, which are transitions between the images.You can change different animation effects by using the __Easing__, __Speed__ and __Type__ properties.

By using the __Easing__ and __Speed__ properties, you could configure the animation effectwhen navigating to the next or previous image.

__Figure 1:__ Animation in action.![image-gallery-animations](images/image-gallery-animations.png)

## Type

The __Type__ property allows you to choose an animation effect. __RadImageGallery__ offers 14different animation effects or you can choose the __Random__ type, which will apply a different effect between the image transitions. You can check out the different animation effects in the [live example](http://demos.telerik.com/aspnet-ajax/image-gallery/examples/functionality/animations/defaultcs.aspx).

The __NextImagesAnimation__ and __PrevImagesAnimation__ properties contain predefined lists with allavailable animations. You can choose a particular animation, which will be applied to one or both properties. __Easing__ and __Speed__ properties are not mandatory.__Table 1__ shows the different animations.

__Table 1:__ All available animation effects.


|  __Fade__  |  __Resize__  |  __Blocks__  |  __BigBlocks__  |
| ------ | ------ | ------ | ------ |
| __SmallBlocks__ | __HorizontalResize__ | __VerticalResize__ | __DiagonalResize__ |
| __HorizontalSlide__ | __VerticalSlide__ | __HorizontalStripes__ | __VerticalStripes__ |
| __CollapsingHorizontalStripes__ | __CollapsingVerticalStripes__ |||

## Easing

Easing functions makes animation look more realistic by controlling the rate of the transition between the images.The simplest easing function, the line, is linear interpolation at constant rate.More advanced easing functions can have accelerating or decelerating at the beginning, the end or both.You could read the following [MSDN Easing Function](http://msdn.microsoft.com/en-us/library/ee308751%28v=vs.110%29.aspx)help article, which provides detailed information about the different easing functions.Since easing functions are inherited from .NET, __RadImageGallery__ supports them.__Table 2__ shows the different easing functions.

__Table 2:__ All available easing functions.


|  __Linear__  |  __EaseInSine__  |  __EaseOutSine__  |  __EaseInOutSine__  |
| ------ | ------ | ------ | ------ |
| __EaseInQuad__ | __EaseOutQuad__ | __EaseInOutQuad__ | __EaseInCubic__ |
| __EaseOutCubic__ | __EaseInOutCubic__ | __EaseInQuart__ | __EaseOutQuart__ |
| __EaseInOutQuart__ | __EaseInQuint__ | __EaseOutQuint__ | __EaseInOutQuint__ |
| __EaseInExpo__ | __EaseOutExpo__ | __EaseInOutExpo__ | __EaseInCirc__ |
| __EaseOutCirc__ | __EaseInOutCirc__ | __EaseInBack__ | __EaseOutBack__ |
| __EaseInOutBack__ | __EaseInElastic__ | __EaseOutElastic__ | __EaseInOutElastic__ |
| __EaseInBounce__ | __EaseOutBounce__ | __EaseInOutBounce__ ||

## Speed

The __Speed__ property determines the duration of the animation, measured in milliseconds.

## Slideshow

__RadImageGallery__ provides a slideshow feature where the images will automatically move from oneimage to another over a specified period. You could change the duration between the slides by using the__SlideshowSlideDuration__ property as shown in __Example 1__. The default value for this propertyis three seconds.

````ASPNET
	    <ClientSettings>
	        <AnimationSettings SlideshowSlideDuration="2000">
	            <NextImagesAnimation Type="DiagonalResize" Easing="EaseInExpo" Speed="1000" /> 
	            <PrevImagesAnimation Type="VerticalStripes" Easing="EaseOutBack" Speed="1000" />
	        </AnimationSettings>
	    </ClientSettings>
````



# See Also

 * [Animation Live Demo](http://demos.telerik.com/aspnet-ajax/image-gallery/examples/functionality/animations/defaultcs.aspx)

 * [RadImageGallery Overview]({%slug imagegallery/overview%})
