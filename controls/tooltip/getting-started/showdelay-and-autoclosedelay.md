---
title: ShowDelay and AutoCloseDelay
page_title: ShowDelay and AutoCloseDelay - RadTooltip
description: Check our Web Forms article about ShowDelay and AutoCloseDelay.
slug: tooltip/getting-started/showdelay-and-autoclosedelay
tags: showdelay,and,autoclosedelay
published: True
position: 6
---

# ShowDelay and AutoCloseDelay





RadToolTip properties **ShowDelay** and **AutoCloseDelay** control the delay in milliseconds applied to the time when the tooltip will show and hide.

* **ShowDelay** specifies how many milliseconds should elapse before the tooltip opens starting from the moment the cursor moves over the target element (similar to the behavior of the default browser tooltip). The default setting of the **ShowDelay** property is 300 milliseconds.

* **AutoCloseDelay** specifies how many milliseconds should elapse before the tooltip closes automatically if the cursor is positionedover the element (similar to the behavior of the default browser tooltip). Each movement of the mouse resets the delay, and as a result,moving over a target element without leaving its boundaries would cause the tooltip to stay visible.	The default setting of the **AutoCloseDelay** property is 3000 milliseconds.

>tip Set **AutoCloseDelay** to **0** to prevent the tooltip from hiding after an interval.	If this is done the tooltip will hide only if another tooltip must be shown or if its `hide()` method is called explicitly.	It is similar to setting HideEvent to ManualClose but without the [x] button.
>


# See Also

 * [Important Settings]({%slug tooltip/getting-started/important-settings%})
