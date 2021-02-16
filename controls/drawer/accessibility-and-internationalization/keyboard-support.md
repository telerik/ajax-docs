---
title: Keyboard Support
page_title: Keyboard Support - RadDrawer
description: Check our Web Forms article about Keyboard Support.
slug: drawer/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

The enable the keyboard navigation of RadDrawer set its `Navigatable` property to *'true'*.

>caption Keyboard legend

When the Drawer is focused, the current active item is selected. For a complete example, refer to the [demo on keyboard navigation of the Drawer](https://demos.telerik.com/aspnet-ajax/keyboardsupport/defaultcs.aspx).

The drawer supports the following keyboard shortcuts:

| SHORTCUT						| DESCRIPTION				                                                        |
|:---                 |:---                                                                                |
| `Home`              | Focuses the first item in the drawer.                                                            |
| `End`               | Focuses the last item in the drawer.                                                             |
| `Up Arrow`          | Focuses the previous item in the drawer.                        |
| `Down Arrow`        | Focuses the next item in the drawer. |
| `Enter`             | Selects the focused item.                                             |
| `Space`             | Selects the focused item.                                             |
| `Esc`               | Hides the drawer.                                                               |


>caption Focus

When the `Navigatable` property of the drawer is set to *'true'*, in the `AccessKey` property of the Control you can set the desired key for quick navigation to the drawer.

````ASPX
<telerik:RadDrawer runat="server" ID="RadDrawer1" Editable="true" AccessKey="W">
````

As result Alt + W focuses the drawer's active item.



# See Also

 * [Keyboad support demo](https://demos.telerik.com/aspnet-ajax/keyboardsupport/defaultcs.aspx)
 


