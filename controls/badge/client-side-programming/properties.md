---
title: Properties
page_title: Badge JavaScript Properties
description: "JavaScript properties of the Telerik WebForms Badge component."
slug: badge/client-side-programming/properties
tags: properties
published: True
position: 1
---

# Properties

Badge specific properties to change its border radius, size, theme color, and more.

## Getters

| Name                 | Return Type                                                                                    | Description                                  |
| -------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `get_kendoWidget()`  | `object`                                                                                       | Get the Kendo widget instance.               |
| `get_icon()`         | `string`                                                                                       | Get the icon name used to display the badge. |
| `get_text()`         | `string`                                                                                       | Get the text of the badge.                   |
| `get_cutoutBorder()` | `bool`                                                                                         | Get the cutout border state.                 |
| `get_max()`          | `number`                                                                                       | Get the maximum value of the badge.          |
| `get_visible()`      | `bool`                                                                                         | Get the visibility state of the badge.       |
| `get_align()`        | [`Telerik.Web.UI.RadBadgeAlign`]({%slug badge/client-side-programming/enums#align%})           | Get the alignment of the badge.              |
| `get_fillMode()`     | [`Telerik.Web.UI.RadBadgeFillMode`]({%slug badge/client-side-programming/enums#fillmode%})     | Get the fill mode.                           |
| `get_position()`     | [`Telerik.Web.UI.RadBadgePosition`]({%slug badge/client-side-programming/enums#position%})     | Get the badge position.                      |
| `get_rounded()`      | [`Telerik.Web.UI.RadBadgeRounded`]({%slug badge/client-side-programming/enums#rounded%})       | Get the border radius level.                 |
| `get_size()`         | [`Telerik.Web.UI.RadBadgeSize`]({%slug badge/client-side-programming/enums#size%})             | Get the size.                                |
| `get_themeColor()`   | [`Telerik.Web.UI.RadBadgeThemeColor`]({%slug badge/client-side-programming/enums#themecolor%}) | Get the theme color.                         |

## Setters

| Name                       | Parameter                                                                                      | Description                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `set_icon(option)`         | `string`                                                                                       | Set the icon name used to display the badge. |
| `set_text(option)`         | `string`                                                                                       | Set the text of the badge.                   |
| `set_cutoutBorder(option)` | `bool`                                                                                         | Set the cutout border state.                 |
| `set_max(option)`          | `number`                                                                                       | Set the maximum value of the badge.          |
| `set_align(option)`        | [`Telerik.Web.UI.RadBadgeAlign`]({%slug badge/client-side-programming/enums#align%})           | Set the alignment of the badge.              |
| `set_fillMode(option)`     | [`Telerik.Web.UI.RadBadgeFillMode`]({%slug badge/client-side-programming/enums#fillmode%})     | Set the fill mode.                           |
| `set_position(option)`     | [`Telerik.Web.UI.RadBadgePosition`]({%slug badge/client-side-programming/enums#position%})     | Set the badge position.                      |
| `set_rounded(option)`      | [`Telerik.Web.UI.RadBadgeRounded`]({%slug badge/client-side-programming/enums#rounded%})       | Set the border radius level.                 |
| `set_size(option)`         | [`Telerik.Web.UI.RadBadgeSize`]({%slug badge/client-side-programming/enums#size%})             | Set the size.                                |
| `set_themeColor(option)`   | [`Telerik.Web.UI.RadBadgeThemeColor`]({%slug badge/client-side-programming/enums#themecolor%}) | Set the theme color.                         |

## Methods

| Name     | Description     |
| -------- | --------------- |
| `hide()` | Hide the badge. |
| `show()` | Show the badge. |

## Next Steps

- [Enums]({%slug badge/client-side-programming/enums%})
