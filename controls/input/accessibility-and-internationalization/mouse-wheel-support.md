---
title: Mouse Wheel Support
page_title: Mouse Wheel Support | UI for ASP.NET AJAX Documentation
description: Mouse Wheel Support
slug: input/accessibility-and-internationalization/mouse-wheel-support
tags: mouse,wheel,support
published: True
position: 3
---

# Mouse Wheel Support



## 

Users can interact with the __RadInput__ controls using the mouse wheel. The following table lists the response of the various __RadInput__ controls when the user scrolls the mouse wheel:


>caption  

| RadInput Control | Result of using the Mouse Wheel |
| ------ | ------ |
| __RadTextBox__ |If __TextMode__ is __MultiLine__ and the __Text__ is longer than can be displayed by the number of rows that the __Rows__ property dictates, scrolling the mouse wheel causes the text in the control to scroll.|
| __RadMaskedTextBox__ |

* If the __TextMode__ is __MultiLine__ and the __Text__ is longer than can be displayed by the number of rows that the __Rows__ property dictates, scrolling the mouse wheel causes the text in the control to scroll.

* If the __Mask__ property includes an enumeration mask and the cursor is positioned at the start of an enumeration mask part, the scrolling the mouse wheel scrolls through the enumerated values.|
| __RadNumericTextBox__ |Scrolling the mouse wheel increases or decreases the value in the text box by the amount that the __IncrementSettings.Step__ property specifies when __IncrementSettings.InterceptMouseWheel__ is __True__ .|
| __RadDateInput__ |Scrolling the mouse wheel increases or decreases the value of the portion of the date immediately before the cursor when __IncrementSettings.InterceptMouseWheel__ is __True__ . The __IncrementSettings.Step__ property specifies the number of months, days, years, hours, minutes, or seconds by which the value changes.|

# See Also

 * [Keyboard Support]({%slug input/accessibility-and-internationalization/keyboard-support%})

 * [Context Menus]({%slug input/getting-started/context-menus%})
