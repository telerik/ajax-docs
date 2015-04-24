---
title: Difference from RadWindow
page_title: Difference from RadWindow | RadLightBox for ASP.NET AJAX Documentation
description: Difference from RadWindow
slug: lightbox/difference-from-radwindow
tags: difference,from,radwindow
published: True
position: 1
---

# Difference from RadWindow



What is the difference between **RadLightBox** and **RadWindow**, which at first glance will fit better to your project?

## Differences between the two controls


| Specifics | RadLightBox | RadWindow |
| ------ | ------ | ------ |
|Type of Content Supported|Yes|Yes|
|Previous/Next navigation|Yes|No|
|Keyboard Navigation|Yes|Yes|
|Automatic Size Adjustment Depending on the Content|Yes|Yes|
|Manual Resizing Functionality|No|Yes|
|Automatic Close When Clicking Outside of the Control Area|Yes|No|
|Templates|Works best in a simple cases like showing a collection of items.|A generic INamingContainer or entire web page. Works in different scenarios where controls like RadGrid, RadEditor need to be embedded.|
|Modal and Non-Modal States|Yes|Yes|
|Server Side Data Binding|Yes|Not a databound control, but a generic container control|
|Client-side Data Binding|Yes|Not a databound control, but a generic container control|
|Populating with Content via Items Collection|Yes|Not a databound control, but a generic container control|
|Built-in Paging|Yes|No|
|Animations for Loading|Yes|Yes|
|Animations for Resize, Previous and Next, Showand Hide **|Several|Yes, a few|
|Auto Resize Animation*|Several|Yes, can be turned off|
|Ability to Move the Popup|Stays static in the middle of the screen|Can be moved around the screen|
|Control Over the Size and Position of the Popup|Allows setting a width and height for the different items or on the control itself.|Allows you to set width, height, position, min/max width, min/max height of the container.|
|Rich Client-side API for Maximum Flexibility|Yes|Yes|
|Visual Studio Integration and Design-time Support|Yes|Yes|
|Built-in Skins|Yes|Yes|
|Mobile Support|Yes|Yes|
|Cross-browser Support|Yes|Yes|

\* **RadLightBox** provides a two type of animation, **Resize** and **Fade** whereas RadWindow has only a Resize one.

** **RadLightBox** allows you to choose between different animations for the different actions. For instance,	you could choose a **Fade** animation when closing the **LightBox** and set **Resize**	animation when opening it. **RadWindow** does not support this and the animation is the same for each action.

Ideal scenario to use a **LightBox** is when you need to display an image galleries or some simple case, which includes	using of ASP.NET controls. The lightweight design is suitable for such scenarios no matter the number of the displayed items.

On the other hand, preferred usage of **RadWindow** is in cases where controls like RadGrid, RadTreeList and	the like have to be embedded in it.	Another advantage of **RadWindow** control is the ability to move,	while the **RadLightBox** stays static in the middle of the screen.
