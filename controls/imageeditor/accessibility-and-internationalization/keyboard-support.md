---
title: Keyboard Support
page_title: Keyboard Support - RadImageEditor
description: Check our Web Forms article about Keyboard Support.
slug: imageeditor/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## Keyboard Support

Starting from **Q3 2011** user-defined keyboard shortcuts can be set to **RadImageEditor**. This improves the accessibility of the control, and makes it easier to use.

By default the control has assigned the following shortcuts:

* **F10** - focuses the Toolbar, after that you can use Tab key to navigate through toolbar buttons

* **Esc** - closes the currently focused dialog window

* **Ctrl+Z** - Undo the last modification

* **Ctrl+Y** - Redo the previous returned modification

You can easily customize these or add additional shortcuts using setting the **ShortCut property** to the tool declaration, or using **addShortCut()**, **removeShortCut()** and **setShortCut()** client-side methods. An example of setting RadImageEditor's shortcuts is available in the related live demo: [Keyboard Support](https://demos.telerik.com/aspnet-ajax/imageeditor/examples/keyboardsupport/defaultcs.aspx)
