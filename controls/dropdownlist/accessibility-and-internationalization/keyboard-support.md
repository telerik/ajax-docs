---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: dropdownlist/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support



## 

__RadDropDownList__ provides support for the two relevant aspects of keyboard support:

* __Access Keys__ - You can specify a key that lets the end-user move focus directly to the dropdownlist. Once focus is on the dropdownlist, the user can use the arrow keys for navigation. The access key is defined using the __AccessKey__ property. For example, if you set the __AccessKey__ property to "W", focus moves to the combobox when the user types "Alt+W".

* __Key Navigation__-RadDropDownList allows end-users to navigate the dropdownlist structure using the arrow keys, the PageUp/PageDown keys and the Enter key:

* The "Alt + W" focuses the drop-down list. ![dropdownlist-accessibilityandinternalization-keyboardsupport-focus](images/dropdownlist-accessibilityandinternalization-keyboardsupport-focus.png)

* The "Alt + Up" arrow opens the drop-down list. ![dropdownlist-accessibilityandinternalization-keyboardsupport-open](images/dropdownlist-accessibilityandinternalization-keyboardsupport-open.png)

* The "PageUp" or "PageDown" arrows to scroll to the previous/next “page” in the drop down listof items.![dropdownlist-accessibilityandinternalization-keyboardsupport-navigationpage](images/dropdownlist-accessibilityandinternalization-keyboardsupport-navigationpage.png)

* The "Esc" key to close the list without changing the selection.![dropdownlist-accessibilityandinternalization-keyboardsupport-close](images/dropdownlist-accessibilityandinternalization-keyboardsupport-close.png)

* The up and down arrow keys allows user to navigate along the items in the drop down list in the corresponding direction.![dropdownlist-accessibilityandinternalization-keyboardsupport-navigation](images/dropdownlist-accessibilityandinternalization-keyboardsupport-navigation.png)

* The "Enter" key selects the current item in the list.![dropdownlist-accessibilityandinternalization-keyboardsupport-select](images/dropdownlist-accessibilityandinternalization-keyboardsupport-select.png)

* Typing a letter moves focus to the next instance of a visible item, whose text begins with that letter.![dropdownlist-accessibilityandinternalization-keyboardsupport-highlightnextelement](images/dropdownlist-accessibilityandinternalization-keyboardsupport-highlightnextelement.png)

* Typing a sequence of letters moves focus to the first matched item, whose text starts with that sequence.![dropdownlist-accessibilityandinternalization-keyboardsupport-highlightmatchingelement](images/dropdownlist-accessibilityandinternalization-keyboardsupport-highlightmatchingelement.png)

* The "Alt+Down" arrow closes the drop-down list.![dropdownlist-accessibilityandinternalization-keyboardsupport-open](images/dropdownlist-accessibilityandinternalization-keyboardsupport-open.png)

>note In order to enable the keyboard support in browsers, different from Internet Explorer, you shoud set the __TabIndex__ property of the RadDropDownList.
>

