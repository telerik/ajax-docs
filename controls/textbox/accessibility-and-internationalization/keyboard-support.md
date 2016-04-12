---
title: Keyboard Support
page_title: Keyboard Support | RadTextBox for ASP.NET AJAX Documentation
description: Keyboard Support
slug: radtextbox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## 

The **RadInput** controls provide support for Access Keys, Shortcut Key combinations, and arrow-key navigation:

* **Access Keys** - You can specify a key that lets the end user move focus directly to the input control. Once focus is on the control, the user can edit the contents of the control and use the arrow keys for navigation. The access key is defined using the **AccessKey** property. For example, if you set the **AccessKey** property to "N", focus moves to the **RadInput** control when the user types "Alt+N".

````ASPNET
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server" TextMode="SingleLine" Label="Name:"
	AccessKey="N">
</telerik:RadTextBox>
````



* **Shortcuts** - **RadInput** controls support the standard Windows shortcut key combinations for clipboard actions, giving users the speed and convenience of a Windows desktop application:

	* Ctrl+C copies the currently selected text in the control to the clipboard.

	* Ctrl+X cuts the currently selected text in the control to the clipboard.

	* Ctrl+V pastes the text in the clipboard to the cursor position in the control (replacing any current selection).

* **Arrow key Navigation** - Users can navigate within the content area of a **RadInput** control using the arrow keys.

* The left and right arrow keys move the cursor one position to the left or right. When the shift key is pressed at the same time, the left and right arrow keys extend or contract the current selection on position to the left or right.

* The behavior of the up and down arrow keys depends on the type of **RadInput** control. The possible behaviors are described in the following table:


>caption  

| RadInput Control | Behavior of Up and Down Arrow Keys |
| ------ | ------ |
| **RadTextBox** |If **TextMode** is **MultiLine** , the up and down arrow keys navigate to the next or previous row.|

# See Also

 * [Mouse Wheel Support]({%slug radtextbox/accessibility-and-internationalization/mouse-wheel-support%})

 * [Context Menus]({%slug radtextbox/features/context-menus%})
