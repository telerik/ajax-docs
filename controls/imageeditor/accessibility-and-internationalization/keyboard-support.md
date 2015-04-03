---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: imageeditor/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## Keyboard Support

Starting from __Q3 2011__ user-defined keyboard shortcuts can be set to __RadImageEditor__. This improves the accessibility of the control, and makes it easier to use.

By default the control has assigned the following shortcuts:

* __F10__ - focuses the Toolbar, after that you can use Tab key to navigate through toolbar buttons

* __Esc__ - closes the currently focused dialog window

* __Ctrl+Z__ - Undo the last modification

* __Ctrl+Y__ - Redo the previous returned modification

You can easily customize these or add additional shortcuts using setting the __ShortCut property__ to the tool declaration, or using __addShortCut()__, __removeShortCut()__ and __setShortCut()__ client-side methods. An example of setting RadImageEditor's shortcuts is available in the related live demo: [Keyboard Support](http://demos.telerik.com/aspnet-ajax/imageeditor/examples/keyboardsupport/defaultcs.aspx)
