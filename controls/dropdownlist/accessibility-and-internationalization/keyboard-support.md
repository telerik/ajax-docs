---
title: Keyboard Support
page_title: Keyboard Support | RadDropDownList for ASP.NET AJAX Documentation
description: Keyboard Support
slug: dropdownlist/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support

A critical requirement for software accessibility is keyboard support as a complete alternative to pointing devices (mouse, etc.).

Keyboard support is comprised of command key, focus key, and keyboard navigation. RadDropDownList will seamlessly switch between mouse and keyboard navigation.

Setting the control's **KeyboardNavigationSettings** (*introduced in R2 2016 - ver.2016.2.504*), allows you to associate an activation combination (**CommandKey** + **FocusKey**), which moves focus directly to the **RadDropDownList** and enables keyboard navigation.

>tip Certain keyboard combinations are reserved and used as shortcuts in the browsers.
>

**Example:** Setting the **KeyboardNavigationSettings** for **RadDropDownList**

````ASPNET
<telerik:RadDropDownList ID="RadDropDownList1" runat="server" >
    <KeyboardNavigationSettings CommandKey="Alt" FocusKey="M" />
</telerik:RadDropDownList>
````

## Keyboard Navigation

* **CommandKey** + **FocusKey** (for example Alt + M) focuses the RadDropDownList. ![dropdownlist-accessibilityandinternalization-keyboardsupport-focus](images/dropdownlist-accessibilityandinternalization-keyboardsupport-focus.png)

* The **Alt** + **Down** arrow opens the drop-down list. ![dropdownlist-accessibilityandinternalization-keyboardsupport-open](images/dropdownlist-accessibilityandinternalization-keyboardsupport-open.png)

* The **PageUp** or **PageDown** scroll to the previous/next portion of items in the dropdown.![dropdownlist-accessibilityandinternalization-keyboardsupport-navigationpage](images/dropdownlist-accessibilityandinternalization-keyboardsupport-navigationpage.png)

* The **Up** and **Down** arrow keys allow the user to navigate along the items in the dropdown in the corresponding direction.![dropdownlist-accessibilityandinternalization-keyboardsupport-navigation](images/dropdownlist-accessibilityandinternalization-keyboardsupport-navigation.png)

* The **Enter** key selects the current item in the list.![dropdownlist-accessibilityandinternalization-keyboardsupport-select](images/dropdownlist-accessibilityandinternalization-keyboardsupport-select.png)

* Typing a letter moves focus to the next instance of a visible item, whose text begins with that letter.![dropdownlist-accessibilityandinternalization-keyboardsupport-highlightnextelement](images/dropdownlist-accessibilityandinternalization-keyboardsupport-highlightnextelement.png)

* Typing a sequence of letters moves focus to the first matched item, whose text starts with that sequence.![dropdownlist-accessibilityandinternalization-keyboardsupport-highlightmatchingelement](images/dropdownlist-accessibilityandinternalization-keyboardsupport-highlightmatchingelement.png)

* The **Alt** + **Up** arrow or **Esc** closes the dropdown.![dropdownlist-accessibilityandinternalization-keyboardsupport-open](images/dropdownlist-keyboardsupport-collapse.png)

# See Also

 * [Keyboard Support Demo](http://demos.telerik.com/aspnet-ajax/dropdownlist/examples/accessibility/keyboardsupport/defaultcs.aspx)
