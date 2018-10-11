---
title: Setting RowHeight According to the Currently Used Font Size
page_title: Setting RowHeight According to the Currently Used Font Size | RadScheduler for ASP.NET AJAX Documentation
description: Setting RowHeight According to the Currently Used Font Size
slug: scheduler/appearance-and-styling/setting-rowheight-according-to-fontsize
tags: setting,styles,rowheight,fontsize
published: True
position: 7
---

# Setting RowHeight According to the Currently Used Font Size


When having **RadScheduler** in Lightweight or Mobile [**Render Mode**]({%slug scheduler/mobile-support/render-modes%}), there are some scenarios, when misalignment issues occur. Vertical displacements have been observed, when the **RowHeight** is not proportionally increased when **font-size** has been enlarged. To avoid the above issue, **RowHeight** property should be adjusted accordingly to the **font-size**.

## Minimal RowHeight Property Values when Default Font-Size is Used

By default, the **RowHeight** of the **RadScheduler** is calculated according to **font-size** of 14px. The minimal appropriate values for the property vary, according to the [**skin**]({%slug scheduler/appearance-and-styling/skins%}) used:

* For "BlackMetroTouch" and "MetroTouch" skins: RowHeight = 32;

* For "Bootstrap" skin: RowHeight = 30;

* For "Material" skin: RowHeight = 29;

* For all other skins: RowHeight = 25;


## Minimal RowHeight Property Value for Lightweight Render Mode when the Font-Size is Set to 10px or 24px

When smaller **font-size** and **Lightweight** render mode are used, the above limitations should be adjusted to the **font-size** value. When the used **font-size** is 10px, the minimal **RowHeight** value for all skins should be 20.

When larger **font-size** is used, the minimal value should also be adjusted. When the **font-size** is set to 24px, the minimal **RowHeight** value for all skins is 40.


## Minimal RowHeight Property Value for Mobile Render Mode when the Font-Size is Set to 10px or 24px

When smaller **font-size** and **Mobile** render mode are used, the above limitations should be adjusted to the **font-size** value. When the used **font-size** is 10px, the minimal **RowHeight** value, according to the **skin** used is:

* For "Material" skin: RowHeight = 22;

* For all other skins: RowHeight = 24;

When larger **font-size** is used, the minimal value should also be adjusted. When the **font-size** is set to 24px, the minimal **RowHeight** value, according to the **skin** used is:

* For "Material" skin: RowHeight = 39;

* For all other skins: RowHeight = 44;


>tip The above examples with **font-size** of 14px, 10px and 24px do not cover all possible scenarios. When using a different **font-size** you should adjust accordingly the **RowHeight** property value.



# See Also

 * [Misalignments]({%slug scheduler/troubleshootings/misalignments%})
 
