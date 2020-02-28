---
title: Animations
page_title: Animations | RadLightBox for ASP.NET AJAX Documentation
description: Animations
slug: lightbox/functionality/animations
tags: animations
published: True
position: 1
---

# Animations



The **RadLightBox** control provides options for using advanced animations, which are transitions between the images.You can apply animation effects when you show an image, navigate to the next or previous images and when you hide the image.The four different properties that control the animation effects are **ShowAnimation**, **NextAnimation**,**PrevAnimation** and **HideAnimation**. Each property provides a list with a different animation types.

## 

You can additionally modify the animation effects by using the **Easing** and **Speed** properties.Those properties are applicable for **ShowAnimationSettings**, **NextAnimationSettings**,**PrevAnimationSettings** and **HideAnimationSettings** sub properties of the **AnimationSettings** property.

**Example 1** gives you a better look how to use these properties and **Figure 1** shows the output.

````ASPNET
<AnimationSettings NextAnimation="Blocks" HideAnimation="Blocks" PrevAnimation="Blocks" ShowAnimation="Blocks">
	<HideAnimationSettings Easing="EaseInOutSine" Speed="1000" />
	<NextAnimationSettings Easing="EaseInOutSine" Speed="1000" />
	<PrevAnimationSettings Easing="EaseInOutSine" Speed="1000" />
	<ShowAnimationSettings Easing="EaseInOutSine" Speed="1000" />
</AnimationSettings
````



**Figure 1:** Blocks animation in action.

![lightbox-animations](images/lightbox-animations.jpg)

## Animation Types

The **ShowAnimation**, **NextAnimation**, **PrevAnimation** and **HideAnimation** properties allow you to choose an animation effect. **RadLightBox** offers 14 different animation effects, which will apply a different effect between the image transitions. You can check out the different animation effects in the [live example](https://demos.telerik.com/aspnet-ajax/lightbox/examples/functionality/animations/defaultcs.aspx) and	**Table 1** shows the different animations.

**Table 1:** All available animation effects.


|  **Fade**  |  **Resize**  |  **Blocks**  |  **BigBlocks**  |
| ------ | ------ | ------ | ------ |
| **SmallBlocks** | **HorizontalResize** | **VerticalResize** | **DiagonalResize** |
| **HorizontalSlide** | **VerticalSlide** | **HorizontalStripes** | **VerticalStripes** |
| **CollapsingHorizontalStripes** | **CollapsingVerticalStripes** |||

## Easing

Easing functions makes animation look more realistic by controlling the rate of the transition between the images.The simplest easing function, the line, is linear interpolation at constant rate.More advanced easing functions can have accelerating or decelerating at the beginning, the end or both.You could read the following [MSDN Easing Function](https://msdn.microsoft.com/en-us/library/ee308751%28v=vs.110%29.aspx) help article, which provides detailed information about the different easing functions. **Table 2** shows the different easing functions.

**Table 2:** All available easing functions.


|  **Linear**  |  **EaseInSine**  |  **EaseOutSine**  |  **EaseInOutSine**  |
| ------ | ------ | ------ | ------ |
| **EaseInQuad** | **EaseOutQuad** | **EaseInOutQuad** | **EaseInCubic** |
| **EaseOutCubic** | **EaseInOutCubic** | **EaseInQuart** | **EaseOutQuart** |
| **EaseInOutQuart** | **EaseInQuint** | **EaseOutQuint** | **EaseInOutQuint** |
| **EaseInExpo** | **EaseOutExpo** | **EaseInOutExpo** | **EaseInCirc** |
| **EaseOutCirc** | **EaseInOutCirc** | **EaseInBack** | **EaseOutBack** |
| **EaseInOutBack** | **EaseInElastic** | **EaseOutElastic** | **EaseInOutElastic** |
| **EaseInBounce** | **EaseOutBounce** | **EaseInOutBounce** ||

## Speed

The **Speed** property determines the duration of the animation, measured in milliseconds.

# See Also

 * [RadLightBox Animation Live Demo](https://demos.telerik.com/aspnet-ajax/lightbox/examples/functionality/animations/defaultcs.aspx)

 * [RadLightBox Overview]({%slug lightbox/overview%})
