---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: input/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## 

The __RadInput__ controls provide support for Access Keys, Shortcut Key combinations, and arrow-key navigation:

* __Access Keys__ - You can specify a key that lets the end user move focus directly to the input control. Once focus is on the control, the user can edit the contents of the control and use the arrow keys for navigation. The access key is defined using the __AccessKey__ property. For example, if you set the __AccessKey__ property to "N", focus moves to the __RadInput__ control when the user types "Alt+N".

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server" TextMode="SingleLine" Label="Name:"
	        AccessKey="N">
	    </telerik:RadTextBox>
````



* __Shortcuts__ - __RadInput__ controls support the standard Windows shortcut key combinations for clipboard actions, giving users the speed and convenience of a Windows desktop application:

* Ctrl+C copies the currently selected text in the control to the clipboard.

* Ctrl+X cuts the currently selected text in the control to the clipboard.

* Ctrl+V pastes the text in the clipboard to the cursor position in the control (replacing any current selection).

* __Arrow key Navigation__ - Users can navigate within the content area of a __RadInput__ control using the arrow keys.

* The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.

* The behavior of the up and down arrow keys depends on the type of __RadInput__ control. The possible behaviors are described in the following table:


>caption  

| RadInput Control | Behavior of Up and Down Arrow Keys |
| ------ | ------ |
| __RadTextBox__ |If __TextMode__ is __MultiLine__ , the up and down arrow keys navigate to the next or previous row.|
| __RadMaskedTextBox__ |

* If the __TextMode__ is __MultiLine__ , the up and down arrow keys navigate to the next or previous row.

* If the __Mask__ property includes an enumeration mask, the up and down arrow keys cycle through enumerated values when the cursor is on the enumeration mask part.|
| __RadNumericTextBox__ |The up and down arrow keys increase or decrease the value in the text box by the amount that the __IncrementSettings.Step__ property specifies when __IncrementSettings.InterceptArrowKeys__ is __True__ .|
| __RadDateInput__ |The up and down arrow keys increase or decrease the value of the portion of the date that contains the cursor when __IncrementSettings.InterceptArrowKeys__ is __True__ . The __IncrementSettings.Step__ property specifies the number of months, days, years, hours, minutes, or seconds by which the value changes.|

# See Also

 * [Mouse Wheel Support]({%slug input/accessibility-and-internationalization/mouse-wheel-support%})

 * [Context Menus]({%slug input/getting-started/context-menus%})
