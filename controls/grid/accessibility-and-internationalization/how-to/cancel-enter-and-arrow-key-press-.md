---
title: Cancel Enter and Arrow Key Press 
page_title: Cancel Enter and Arrow Key Press - RadGrid
description: Learn how to cancel Enter and arrow key presses in RadGrid keyboard navigation by handling the client-side key press event.
slug: grid/accessibility-and-internationalization/how-to/cancel-enter-and-arrow-key-press-
components: ["grid"]
tags: cancel,enter,and,arrow,key,press,
published: True
position: 1
---

# Cancel Enter and Arrow Key Press



## Canceling keyboard key presses

When keyboard navigation is enabled, you can cancel selected key presses. For example, cancel the Enter key to prevent edit mode or allow only one-way movement with the arrow keys.

Follow these steps to cancel a key press:

1. Enable keyboard navigation.

1. Specify a client-side function to call when a key is pressed.

1. In the client-side function, check the key code.

1. Cancel the key press when the condition is met.

This approach is demonstrated in the code samples below:

````ASP.NET
<ClientSettings AllowKeyboardNavigation="true" ClientEvents-OnKeyPress="KeyPressed">
     <Selecting AllowRowSelect="true" />
</ClientSettings>
````



And the JavaScript code:

````JavaScript
function KeyPressed(sender, eventArgs) {
  if (eventArgs.get_keyCode() == 13) {
    eventArgs.set_cancel(true)
  }
}
````

## See Also

- [Keyboard Support]({%slug grid/accessibility-and-internationalization/keyboard-support%})
- [Navigating Through a Single Grid at a Time with Keyboard Navigation Enabled]({%slug grid/accessibility-and-internationalization/how-to/navigating-through-single-grid-at-a-time-with-keyboard-navigation-enabled%})


