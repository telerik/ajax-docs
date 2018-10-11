---
title: Keyboard Support
page_title: Keyboard Support | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Keyboard Support
slug: autocompletebox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support



## 

**RadAutoCompleteBox** provides support for the two relevant aspects of keyboard support:

1. **Access Keys** - You can specify a key that lets the user move focus directly to the AutoCompleteBox. Once focus is on the AutoCompleteBox, the user can use the arrow keys for navigation. The access key is defined using the **AccessKey** property. For example, if you set the **AccessKey** property to "W", focus moves to the combobox when the user types "Alt+W".

2. **Key Navigation** - RadAutoCompleteBox allows users to navigate the AutoCompleteBox structure (both the input area and the dropdown) using the arrow keys:

* The "Alt + AccessKey" focuses the AutoCompleteBox ![autocompletebox-keyboardsupport-focus](images/autocompletebox-keyboardsupport-focus.png)

>tip To focus the **RadAutoCompleteBox** in Firefox use the "Shift + Alt + AccessKey" key combination.
>

* The Up and Down arrow keys allows the user to navigate the entries in the dropdown, once it is opened by typing text in the input area ![autocompletebox-keyboardsupport-navigation-dropdown](images/autocompletebox-keyboardsupport-navigation-dropdown.png)

* The Left and Right arrow keys allows the user to navigate the entries in the input area ![autocompletebox-keyboardsupport-navigation-input](images/autocompletebox-keyboardsupport-navigation-input.png)

* The "Enter" key selects the highlighted entry in the dropdown ![autocompletebox-keyboardsupport-select](images/autocompletebox-keyboardsupport-select.png)

* The "Delete" or "Backspace" keys delete a highlighted entry in the input area ![autocompletebox-keyboardsupport-delete](images/autocompletebox-keyboardsupport-delete.png)

* The "F2" key puts the token in edit mode if it is enabled ![autocompletebox-keyboardsupport-edit](images/autocompletebox-keyboardsupport-navigation-edit.png)

* The "Esc" key puts closes the dropdwon and if pressed again deletes the text in the input area ![autocompletebox-keyboardsupport-escape](images/autocompletebox-keyboardsupport-escape.png)
