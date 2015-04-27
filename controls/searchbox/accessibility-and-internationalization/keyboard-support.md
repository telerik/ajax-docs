---
title: Keyboard support
page_title: Keyboard support | RadSearchBox for ASP.NET AJAX Documentation
description: Keyboard support
slug: searchbox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard support



## Keyboard Support

RadSearchBox has a full keyboard support, including selection and navigation through search results.

* The user is able to tab through the image buttons using the **Tab** key and trigger their actions with the **Enter** key.

* When the focus is in the input field of the control, the user can use the **Enter** key to trigger the default search event.

* When the focus is in the input field of the control, the user can use the **Esc** key to clear the entered text and close the dropdown (if opened).

* In addition, when AutoComplete is enabled and the dropdown list of results is shown,the user can use the arrow (**Up/Down**) keysto navigate through the list, focusing a particular search result.

## SearchContext Keyboard Support

SearchContext can be controlled only from the Keyboard as well.

* Alt+Up/Alt+Down to open/close the DropDown List of items

* Enter to select an item from the list if it’s open

* Esc to close the list without changing the selection

* Up/Down arrows to navigate through the list, focusing a particular item. When an item receives focus, the value in the DropDown is updated.
