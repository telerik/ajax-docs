---
title: Keyboard Support
page_title: Keyboard Support - RadWizard
description: Check our Web Forms article about Keyboard Support.
slug: wizard/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support



## 

**RadWizard** provides support for the two relevant aspects of keyboard support:

* **Access Keys** - You can specify a key that lets the end-user move focus directly to the **RadWizard**. The access key is defined using the **AccessKey** property. For example, if you set the **AccessKey** property to "W", focus moves to the **RadWizard** when the user types "Alt+W".

* **Key Navigation**-when focus is on the **RadWizard**, the user can use the "Tab" key to navigate through the controls and wizard step buttons. Once a wizard step button is focused use the arrow keys or TAB to navigate through the items and press Enter to trigger the button's event.

* The "Alt + W" focuses the wizard control. ![wizard-keyboard-support-focus](images/wizard-keyboard-support-focus.png)

* The "Tab" key navigates through the controls and wizard step buttons. ![wizard-keyboard-support-tab](images/wizard-keyboard-support-tab.png)

* Once a wizard step button is focused use the arrow keys or TAB to navigate through the items and press Enter to trigger the button's event.![wizard-keyboard-support-enter](images/wizard-keyboard-support-enter.png)

>note In order to enable the keyboard support in browsers, different from Internet Explorer, you shoud set the **TabIndex** property of the **RadWizard** .
>

