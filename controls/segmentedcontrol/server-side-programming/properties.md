---
title: Properties
page_title: SegmentedControl Server-side Properties
description: "Server-side properties of the Telerik WebForms SegmentedControl component."
slug: segmentedcontrol/server-side-programming/properties
tags: segmentedcontrol, server-side, properties
published: True
position: 1
---

# Properties

SegmentedControl-specific properties to configure items, layout, size, selected value, and client-side events.

## RadSegmentedControl Properties

| Name            | Return Type / Enum Link                                                                                                 | Description                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `Items`         | `Telerik.Web.UI.SegmentedControlItemsCollection`                                                                        | Gets the collection of items (buttons) rendered inside the SegmentedControl.              |
| `LayoutMode`    | [`Telerik.Web.UI.SegmentedControlLayoutMode`]({%slug segmentedcontrol/server-side-programming/enums#layoutmode%})       | Gets/Sets the layout mode. Default is `Compact`.                                          |
| `SelectedValue` | `string`                                                                                                                | Gets/Sets the value of the pre-selected item. Must match the `Value` of one of the items. |
| `Size`          | [`Telerik.Web.UI.SegmentedControlSize`]({%slug segmentedcontrol/server-side-programming/enums#size%})                   | Gets/Sets the size of the segment buttons. Default is `Medium`.                           |
| `ClientEvents`  | `Telerik.Web.UI.SegmentedControlClientEvents`                                                                           | Gets the client events configuration. Exposes `OnLoad` and `OnChange`.                    |

## SegmentedControlItem Properties

Each item in the `Items` collection is a `SegmentedControlItem` with the following properties:

| Name        | Type     | Description                                                                                                                    |
| ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `Enabled`   | `bool`   | Gets/Sets whether the button can be interacted with. Default is `true`.                                                        |
| `Icon`      | `string` | Gets/Sets the name of a Kendo UI theme icon rendered inside the button.                                                        |
| `IconClass` | `string` | Gets/Sets additional CSS class names appended to the icon element.                                                             |
| `Text`      | `string` | Gets/Sets the visible label rendered inside the button.                                                                        |
| `Value`     | `string` | Gets/Sets the identifier for the button. Used to set/read the selection and as an accessible label when no `Text` is provided. |

## Next Steps

- [Enums]({%slug segmentedcontrol/server-side-programming/enums%})
