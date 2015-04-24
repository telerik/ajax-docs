---
title: Mouse Wheel Support
page_title: Mouse Wheel Support | RadInput for ASP.NET AJAX Documentation
description: Mouse Wheel Support
slug: input/accessibility-and-internationalization/mouse-wheel-support
tags: mouse,wheel,support
published: True
position: 3
---

# Mouse Wheel Support



## 

Users can interact with the **RadInput** controls using the mouse wheel. The following table lists the response of the various **RadInput** controls when the user scrolls the mouse wheel:


>caption  

| RadInput Control | Result of using the Mouse Wheel |
| ------ | ------ |
| **RadTextBox** |If **TextMode** is **MultiLine** and the **Text** is longer than can be displayed by the number of rows that the **Rows** property dictates, scrolling the mouse wheel causes the text in the control to scroll.|
| **RadMaskedTextBox** |If the **TextMode** is **MultiLine** and the **Text** is longer than can be displayed by the number of rows that the **Rows** property dictates, scrolling the mouse wheel causes the text in the control to scroll. If the **Mask** property includes an enumeration mask and the cursor is positioned at the start of an enumeration mask part, the scrolling the mouse wheel scrolls through the enumerated values.|
| **RadNumericTextBox** |Scrolling the mouse wheel increases or decreases the value in the text box by the amount that the **IncrementSettings.Step** property specifies when **IncrementSettings.InterceptMouseWheel** is **True** .|
| **RadDateInput** |Scrolling the mouse wheel increases or decreases the value of the portion of the date immediately before the cursor when **IncrementSettings.InterceptMouseWheel** is **True** . The **IncrementSettings.Step** property specifies the number of months, days, years, hours, minutes, or seconds by which the value changes.|

# See Also

 * [Keyboard Support]({%slug input/accessibility-and-internationalization/keyboard-support%})

 * [Context Menus]({%slug input/getting-started/context-menus%})
