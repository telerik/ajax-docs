---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: dropdowntree/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support



## Keyboard support

As a part of Q2 2013 __RadDropDownTree__ control introduces fully built-in __Keyboard Support__

* __Access Keys__ - You can specify a key that lets the end-users move the focus directly to the RadDropDownTree. The access key is defined using the __AccessKey__ property. For example, if you set the __AccessKey__ property to __"P"__, the focus moves to the DropDownTree when the user presses __"Alt+P"__ (for IE).![dropdowntree-keyboardnavigation](images/dropdowntree-keyboardnavigation.png)

* __Key Navigation__- RadDropDownTree allows end-users to navigate through the nodes in the dropdown.

1. Use the __"Alt + DownArrow/UpArrow"__ to open/close the dropdown or the Esc key (to close the dropdown when opened)![dropdowntree-expandcollapsedropdown](images/dropdowntree-expandcollapsedropdown.png)

1. Once the dropdown is opened you can move the focus to the filter field and then to the nodes by using the __"Tab"__ key.![dropdowntree-forwardnavigation](images/dropdowntree-forwardnavigation.png)

1. After the focus is set to the dropdown the user can use the __UpArrow and DownArrows__ to navigate up and down the tree and the__RightArrow and LeftArrow__ to expand and collapse the nodes respectively.![dropdowntree-navigationupdown](images/dropdowntree-navigationupdown.png)![dropdowntree-expandcollapsenode](images/dropdowntree-expandcollapsenode.png)

* __Action Key__ -When the focus is set to a node, pressing the "Space" key checks the node.![dropdowntree-ckecknodes](images/dropdowntree-ckecknodes.png)


>caption  Key combinations supported by different browsers 

| Browser | Focus | Action Key | Navigation Forward | Navigation Backward |
| ------ | ------ | ------ | ------ | ------ |
| __Internet Explorer__ |Alt + __Access Key__ |Space|Tab|Shift + Tab|
| __Firefox__ |Alt + Shift + __Access Key__ |Space|Tab|Shift + Tab|
| __Chrome__ |Not Supported|Space|Tab|Shift + Tab|
| __Safari__ |Alt + __Access Key__ (Alt + Shift + __Access Key__ )|Space|Tab|Shift + Tab|
| __Opera__ |Not Supported|Space|Tab|Shift + Tab|
