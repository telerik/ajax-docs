---
title: Keyboard Support
page_title: Keyboard Support - RadTimeline
description: Check our Web Forms article about Keyboard Support.
slug: timeline/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

The enable the keyboard navigation of RadTimeline set its `Navigatable` property to *'true'*.

>caption Keyboard legend

In Vertical mode when the TimeLine is focused, the first card gets focused. 
In Horizontal mode when the TimeLine is focused, the timeline scrollable wrap element gets focused. 
For a complete example, refer to the [demo on keyboard navigation of the timeline](https://demos.telerik.com/aspnet-ajax/timeline/keyboardsupport/defaultcs.aspx).

The timeline supports the following keyboard shortcuts in **Vertical mode**:

| SHORTCUT						| DESCRIPTION				                                                        |
|:---                 |:---                                                                                |
| `Tab`              | Focus the next card.                                                            |
| `Shift + Tab`              | Focus the previous card.                                                             |
| `Space`              | Toggle the expand/collapse state of the item.                                                             |
| `Enter`              | Toggle the expand/collapse state of the item.                                                             |

and these ones in **Horizontal mode**:

| SHORTCUT						| DESCRIPTION				                                                        |
|:---                 |:---                                                                                |
| `Enter`              | Selects the current event.                                                             |
| `Space`              | Selects the current event.                                                              |
| `Left Arrow`              | Focuses the previous date.                                                             |
| `Right Arrow`              | Focuses the next date.                                                                                                                     |


>caption Focus

When the `Navigatable` property of the timeline is set to *'true'* as well as the TabIndex property is specified, in the `AccessKey` property of the Control you can set the desired key for quick navigation to the timeline.

````ASPX
<telerik:RadTimeline runat="server" ID="RadTimeline1" AlternatingMode="true" CollapsibleEvents="true" Orientation="Vertical" TabIndex="1" AccessKey="W" Navigatable="true">
````

As result Alt + W focuses the timeline's wrapper.



# See Also

 * [Keyboad support demo](https://demos.telerik.com/aspnet-ajax/timeline/keyboardsupport/defaultcs.aspx)
 


