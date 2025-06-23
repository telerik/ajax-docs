---
title: Properties
page_title: OTPInput JavaScript Properties
description: "JavaScript properties and methods of the Telerik WebForms OTPInput component."
slug: otpinput/client-side-programming/properties
tags: properties,otpinput
published: True
position: 1
---

# Properties

OTPInput-specific properties to configure type, read-only state, separator, size, and more.

## Getters

| Name                | Return Type                                                                                              | Description                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `get_enabled()`     | `bool`                                                                                                   | Get the enabled state of the OTPInput.              |
| `get_fillMode()`    | [`Telerik.Web.UI.RadOTPInputFillMode`]({%slug otpinput/client-side-programming/enums#otpinputfillmode%}) | Get the fill mode of the OTPInput.                  |
| `get_inputMode()`   | `string`                                                                                                 | Get the input mode (e.g., "numeric", "text").       |
| `get_items()`       | `Object[]`                                                                                               | Get the number of OTP input boxes.                  |
| `get_placeholder()` | `string`                                                                                                 | Get the placeholder shown in input boxes.           |
| `get_readOnly()`    | `bool`                                                                                                   | Get the read-only state of the OTPInput.            |
| `get_rounded()`     | [`Telerik.Web.UI.RadOTPInputRounded`]({%slug otpinput/client-side-programming/enums#otpinputrounded%})   | Get the border radius style.                        |
| `get_separator()`   | `string`                                                                                                 | Get the visual separator between input groups.      |
| `get_size()`        | [`Telerik.Web.UI.RadOTPInputSize`]({%slug otpinput/client-side-programming/enums#otpinputsize%})         | Get the size of the input boxes.                    |
| `get_space()`       | `bool`                                                                                                   | Get the spacing between input boxes.                |
| `get_type()`        | [`Telerik.Web.UI.RadOTPInputType`]({%slug otpinput/client-side-programming/enums#otpinputtype%})         | Get the type of the OTP input (Text, Number, etc.). |
| `get_value()`       | `string`                                                                                                 | Get the current value of the OTPInput.              |

## Setters

| Name                     | Parameter                                                                                                | Description                                         |
| ------------------------ | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `set_enabled(value)`     | `bool`                                                                                                   | Set the enabled state of the OTPInput.              |
| `set_fillMode(value)`    | [`Telerik.Web.UI.RadOTPInputFillMode`]({%slug otpinput/client-side-programming/enums#otpinputfillmode%}) | Set the fill mode of the OTPInput.                  |
| `set_inputMode(value)`   | `string`                                                                                                 | Set the input mode (e.g., "numeric", "text").       |
| `set_items(value)`       | `number` or `Object[]`                                                                                   | Set the number of OTP input boxes.                  |
| `set_placeholder(value)` | `string`                                                                                                 | Set the placeholder shown in input boxes.           |
| `set_readOnly(value)`    | `bool`                                                                                                   | Set the read-only state of the OTPInput.            |
| `set_rounded(value)`     | [`Telerik.Web.UI.RadOTPInputRounded`]({%slug otpinput/client-side-programming/enums#otpinputrounded%})   | Set the border radius style.                        |
| `set_separator(value)`   | `string`                                                                                                 | Set the visual separator between input groups.      |
| `set_size(value)`        | [`Telerik.Web.UI.RadOTPInputSize`]({%slug otpinput/client-side-programming/enums#otpinputsize%})         | Set the size of the input boxes.                    |
| `set_space(value)`       | `number`                                                                                                 | Set the spacing between input boxes.                |
| `set_type(value)`        | [`Telerik.Web.UI.RadOTPInputType`]({%slug otpinput/client-side-programming/enums#otpinputtype%})         | Set the type of the OTP input (Text, Number, etc.). |
| `set_value(value)`       | `string`                                                                                                 | Set the current value of the OTPInput.              |

## Methods

| Name        | Description                            |
| ----------- | -------------------------------------- |
| `destroy()` | Destroys the OTPInput widget instance. |
| `focus()`   | Focuses the OTPInput element.          |

## Next Steps

- [Enums]({%slug otpinput/client-side-programming/enums%})
