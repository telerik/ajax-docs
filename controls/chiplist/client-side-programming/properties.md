---
title: Properties
page_title: ChipList JavaScript Properties
description: "JavaScript Properties of the Telerik WebForms ChipList component."
slug: chiplist/client-side-programming/properties
tags: chiplist,client-side,properties
published: True
position: 2
---

# Properties

JavaScript properties of the Telerik WebForms ChipList Control.

## Getters

| Name                  | Return Type                                                                                           | Description                                        |
| ---                   | ---                                                                                                   | ---                                                |
| `get_avatarClass()`   | `string`                                                                                              | Get the CSS class name used to display an Avatar.                                     |
| `get_enabled()`       | `bool`                                                                                                | Get the enabled state used to Enable/Disable the ChipList element.                        |
| `get_fillMode()`      | [`Telerik.Web.UI.RadChipListFillMode`]({%slug chiplist/client-side-programming/enums%}#fillmode)      | Get the fill mode.                                                                    |
| `get_icon()`          | `string`                                                                                              | Get the icon name used to display various icons from the embedded icon's library.     |
| `get_iconClass()`     | `string`                                                                                              | Get the icon's CSS class name used to display custom icons.                           |
| `get_items()`         | `array`                                                                                               | Get an array of JavaScript [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with the Chip items data    |
| `get_label()`         | `string`                                                                                              | Get the Label text (similar to the `Text` property of other Components).              |
| `get_removable()`     | `bool`                                                                                                | Get the removable option used to render a remove icon to the right of the label text. |
| `get_removeIcon()`    | `string`                                                                                              | Get the remove icon name to the name of an icon from the list of embedded icons.      |
| `get_rounded()`       | [`Telerik.Web.UI.RadChipListRounded`]({%slug chiplist/client-side-programming/enums%}#rounded)        | Get the border radius level.                                                          |
| `get_selectable()`    | `bool`                                                                                                | Get the selectable feature. If set, the will be selectable.                           |
| `get_elected()`       | `bool`                                                                                                | Get the the selected state used to select/deselect the ChipList.                          |
| `get_size()`          | [`Telerik.Web.UI.RadChipListSize`]({%slug chiplist/client-side-programming/enums%}#size)              | Get the size of the chiplist.                                                             |
| `get_themeColor()`    | [`Telerik.Web.UI.RadChipListThemeColor`]({%slug chiplist/client-side-programming/enums%}#themecolor)  | Get the theme color.                                                                  |


## Setters

| Name                      | Parameter                                                                                     | Description                               |
| ---                       | ---                                                                                           | ---                                       |
| `set_avatarClass(option)` | `string`                                                                                      | Set the CSS class name used to display an Avatar.                                     |
| `set_enabled(option)`     | `bool`                                                                                        | Set the enabled state used to Enable/Disable the ChipList element.                        |
| `set_fillMode(option)`    | [`Telerik.Web.UI.RadChipListFillMode`]({%slug chiplist/client-side-programming/enums%}#fillmode)      | Set the fill mode.                                                                    |
| `set_icon(option)`        | `string`                                                                                      | Set the icon name used to display various icons from the embedded icon's library.     |
| `set_iconClass(option)`   | `string`                                                                                      | Set the icon's CSS class name used to display custom icons.                           |
| `set_items()`             | `array`                                                                                       | Set the items to an array of JavaScript [objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with the Chip items data    |
| `set_label(option)`       | `string`                                                                                      | Set the Label text (similar to the `Text` property of other Components).              |
| `set_removable(option)`   | `bool`                                                                                        | Set the removable option used to render a remove icon to the right of the label text. |
| `set_removeIcon(option)`  | `string`                                                                                      | Set the remove icon name to the name of an icon from the list of embedded icons.      |
| `set_rounded(option)`     | [`Telerik.Web.UI.RadChipListRounded`]({%slug chiplist/client-side-programming/enums%}#rounded)        | Set the border radius level.                                                          |
| `set_selectable(option)`  | `bool`                                                                                        | Set the selectable feature. If set, the will be selectable.                           |
| `set_elected(option)`     | `bool`                                                                                        | Set the the selected state used to select/deselect the ChipList.                          |
| `set_size(option)`        | [`Telerik.Web.UI.RadChipListSize`]({%slug chiplist/client-side-programming/enums%}#size)              | Set the size of the chiplist.                                                             |
| `set_themeColor(option)`  | [`Telerik.Web.UI.RadChipListThemeColor`]({%slug chiplist/client-side-programming/enums%}#themecolor)  | Set the theme color.                                                                  |

## Next Steps

- [Methods]({%slug chiplist/client-side-programming/methods%})
- [Events]({%slug chiplist/client-side-programming/events%})
- [Enums]({%slug chiplist/client-side-programming/enums%})

## See Also

- [Overview]({%slug chiplist/client-side-programming/overview%})
- [Methods]({%slug chiplist/client-side-programming/methods%})
- [Events]({%slug chiplist/client-side-programming/events%})
- [Enums]({%slug chiplist/client-side-programming/enums%})
 
