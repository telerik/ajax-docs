---
title: Properties
page_title: SegmentedControl JavaScript Properties
description: "JavaScript properties and methods of the Telerik WebForms SegmentedControl component."
slug: segmentedcontrol/client-side-programming/properties
tags: segmentedcontrol, javascript, properties
published: True
position: 1
---

# Properties

SegmentedControl-specific client-side properties to read and update the selected value, size, and layout mode at runtime.

## Getters

| Name                   | Return Type                                                                                                                   | Description                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `get_items()`          | `Object[]`                                                                                                                    | Gets the array of all segment items.                   |
| `get_selectedValue()`  | `string`                                                                                                                      | Gets the value of the currently selected segment.      |
| `get_layoutMode()`     | [`Telerik.Web.UI.RadSegmentedControlLayoutMode`]({%slug segmentedcontrol/client-side-programming/enums#layoutmode%})          | Gets the current layout mode of the component.         |

## Setters

| Name                        | Parameter                                                                                                                     | Description                                            |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `set_selectedValue(value)`  | `string`                                                                                                                      | Sets the selected segment by its value.                |
| `set_layoutMode(value)`     | [`Telerik.Web.UI.RadSegmentedControlLayoutMode`]({%slug segmentedcontrol/client-side-programming/enums#layoutmode%})          | Sets the layout mode of the component.                 |

## Next Steps

- [Events]({%slug segmentedcontrol/client-side-programming/events%})
- [Enums]({%slug segmentedcontrol/client-side-programming/enums%})
