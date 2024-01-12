---
title: Properties
page_title: ChipList Server-side Properties
description: "The Server-side properties of the WebForms ChipList component."
slug: chiplist/server-side-programming/properties
tags: chiplist,server-side,properties
published: True
position: 1
---

# Properties

ChipList and ChipListItem specific properties.

## ChipList

| Name          | Return type                                                                                       | Description                                                                               |
| ---           | ---                                                                                               | ---                                                                                       |
| `AvatarClass` | `string`                                                                                          | Get/Set the CSS class name used to display an Avatar.                                     |
| `Enabled`     | `bool`                                                                                            | Get/Set the enabled state used to Enable/Disable the ChipList element.                    |
| `FillMode`    | [`Telerik.Web.UI.ChipListFillMode`]({%slug chiplist/server-side-programming/enums%}#fillmode)     | Get/Set the fill mode.                                                                    |
| `Items`       | `Telerik.Web.UI.ChipListItemsCollection`                                                          | Get the collection of `ChipListItem` objects.                                             |
| `Icon`        | `string`                                                                                          | Get/Set the icon name used to display various icons from the embedded icon's library.     |
| `IconClass`   | `string`                                                                                          | Get/Set the icon's CSS class name used to display custom icons.                           |
| `Label`       | `string`                                                                                          | Get/Set the Label text (similar to the `Text` property of other Components).              |
| `Removable`   | `bool`                                                                                            | Get/Set the removable option used to render a remove icon to the right of the label text. |
| `RemoveIcon`  | `string`                                                                                          | Get/Set the remove icon name to the name of an icon from the list of embedded icons.      |
| `Rounded`     | [`Telerik.Web.UI.ChipListRounded`]({%slug chiplist/server-side-programming/enums%}#rounded)       | Get/Set the border radius level.                                                          |
| `Selectable`  | `bool`                                                                                            | Get/Set the selectable feature. If set, the will be selectable.                           |
| `Selected`    | `bool`                                                                                            | Get/Set the the selected state used to select/deselect the ChipList.                      |
| `Size`        | [`Telerik.Web.UI.ChipListSize`]({%slug chiplist/server-side-programming/enums%}#size)             | Get/Set the size of the chiplist.                                                         |
| `ThemeColor`  | [`Telerik.Web.UI.ChipListThemeColor`]({%slug chiplist/server-side-programming/enums%}#themecolor) | Get/Set the theme color.                                                                  |

## ChipListItem

| Name          | Return type                                                                                       | Description                                                                               |
| ---           | ---                                                                                               | ---                                                                                       |
| `AvatarClass` | `string`                                                                                          | Get/Set the CSS class name used to display an Avatar.                                     |
| `Enabled`     | `bool`                                                                                            | Get/Set the enabled state used to Enable/Disable the ChipList element.                    |
| `Icon`        | `string`                                                                                          | Get/Set the icon name used to display various icons from the embedded icon's library.     |
| `IconClass`   | `string`                                                                                          | Get/Set the icon's CSS class name used to display custom icons.                           |
| `Label`       | `string`                                                                                          | Get/Set the Label text (similar to the `Text` property of other Components).              |
| `Selected`    | `bool`                                                                                            | Get/Set the the selected state used to select/deselect the ChipList.                      |
| `ThemeColor`  | [`Telerik.Web.UI.ChipThemeColor`]({%slug chip/server-side-programming/enums%}#themecolor) | Get/Set the theme color.                                                                  |


## Next Steps

- [Enums]({%slug chiplist/server-side-programming/enums%})

## See Also

- [Overview]({%slug chiplist/server-side-programming/overview%})
- [Enums]({%slug chiplist/server-side-programming/enums%})
