---
title: ShowDelay and AutoCloseDelay
page_title: ShowDelay and AutoCloseDelay | UI for ASP.NET AJAX Documentation
description: ShowDelay and AutoCloseDelay
slug: tooltip/getting-started/showdelay-and-autoclosedelay
tags: showdelay,and,autoclosedelay
published: True
position: 6
---

# ShowDelay and AutoCloseDelay



## 

RadToolTip properties __ShowDelay__ and __AutoCloseDelay__ control the delay in milliseconds applied to the time when the tooltip will show and hide.

* __ShowDelay:__ specifies how many milliseconds should elapse before the tooltip opens starting from the moment the cursor moves over the target element (similar to the behavior of the default browser tooltip). The default setting of the __ShowDelay__ property is 300 milliseconds.

* __AutoCloseDelay__ specifies how many milliseconds should elapse before the tooltip closes automatically if the cursor is positionedover the element (similar to the behavior of the default browser tooltip). Each movement of the mouse resets the delay, and as a result,moving over a target element without leaving its boundaries would cause the tooltip to stay visible.	The default setting of the __AutoCloseDelay__ property is 3000 milliseconds.

>tip Set __AutoCloseDelay__ to __0__ to prevent the tooltip from hiding after an interval.	If this is done the tooltip will hide only if another tooltip must be shown or if its hide() method is called explicitly.	It is similar to setting HideEvent to ManualClose but without the [x] button.
>


# See Also

 * [Important Settings]({%slug tooltip/getting-started/important-settings%})
