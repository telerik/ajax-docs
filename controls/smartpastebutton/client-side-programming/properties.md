---
title: Properties
page_title: SmartPasteButton JavaScript Properties
description: "JavaScript properties and methods of the Telerik WebForms SmartPasteButton component."
slug: smartpastebutton/client-side-programming/properties
tags: properties,smartpastebutton
published: True
position: 1
---

# Properties

SmartPasteButton-specific properties to configure appearance (size, rounded corners), icons, text, and service integration.

## Getters

| Name               | Return Type                                                                                                    | Description                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `get_cancelIcon()` | `string`                                                                                                       | Gets the icon shown when cancelling the smart paste operation.     |
| `get_enable()`     | `bool`                                                                                                         | Gets a value indicating whether the smart paste button is enabled. |
| `get_formFields()` | `Object`                                                                                                       | Gets the form fields associated with the smart paste operation.    |
| `get_icon()`       | `string`                                                                                                       | Gets the default icon shown on the button.                         |
| `get_rounded()`    | [`Telerik.Web.UI.RadSmartPasteButtonRounded`]({%slug smartpastebutton/client-side-programming/enums#rounded%}) | Gets the rounded (border radius) style.                            |
| `get_service()`    | `Object`                                                                                                       | Gets the service configuration for the smart paste operation.      |
| `get_size()`       | [`Telerik.Web.UI.RadSmartPasteButtonSize`]({%slug smartpastebutton/client-side-programming/enums#size%})       | Gets the size applied to the button.                               |
| `get_text()`       | `string`                                                                                                       | Gets the text displayed on the button.                             |

## Setters

| Name                    | Parameter                                                                                                      | Description                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `set_cancelIcon(value)` | `string`                                                                                                       | Sets the icon shown when cancelling the operation. |
| `set_enable(value)`     | `bool`                                                                                                         | Sets whether the smart paste button is enabled.    |
| `set_icon(value)`       | `string`                                                                                                       | Sets the default icon on the button.               |
| `set_rounded(value)`    | [`Telerik.Web.UI.RadSmartPasteButtonRounded`]({%slug smartpastebutton/client-side-programming/enums#rounded%}) | Sets the rounded (border radius) style.            |
| `set_size(value)`       | [`Telerik.Web.UI.RadSmartPasteButtonSize`]({%slug smartpastebutton/client-side-programming/enums#size%})       | Sets the size of the button.                       |
| `set_text(value)`       | `string`                                                                                                       | Sets the text displayed on the button.             |

## Next Steps

- [Events]({%slug smartpastebutton/client-side-programming/events%})
- [Enums]({%slug smartpastebutton/client-side-programming/enums%})
