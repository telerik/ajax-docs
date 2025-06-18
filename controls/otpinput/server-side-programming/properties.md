---
title: Properties
page_title: OTPInput Server-side Properties
description: "Server-side properties of the WebForms OTPInput component."
slug: otpinput/server-side-programming/properties
tags: otpinput,server-side,properties
published: True
position: 1
---

# Properties

OTPInput-specific properties to configure layout, behavior, input style, and more.

| Name                | Return Type                                                                                           | Description                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `Enable`            | `bool`                                                                                                | Gets/Sets whether the OTPInput is enabled for user interaction.             |
| `FillMode`          | [`Telerik.Web.UI.OTPInputFillMode`]({%slug otpinput/server-side-programming/enums#otpinputfillmode%}) | Gets/Sets the visual fill mode (None, Solid, Outline, Flat).                |
| `InputMode`         | `string`                                                                                              | Gets/Sets the input mode hint for virtual keyboards (e.g., numeric, text).  |
| `Items`             | `int`                                                                                                 | Gets/Sets the total number of input items (digits or characters).           |
| `ItemsCollection`   | `Telerik.Web.UI.OTPInputItem`                                                                         | Gets/Sets the Otp Input's items configuration.                              |
| `Placeholder`       | `string`                                                                                              | Gets/Sets the placeholder text shown in empty input fields.                 |
| `ReadOnly`          | `bool`                                                                                                | Gets/Sets whether the OTPInput is read-only.                                |
| `Rounded`           | [`Telerik.Web.UI.OTPInputRounded`]({%slug otpinput/server-side-programming/enums#otpinputrounded%})   | Gets/Sets the border radius of input fields.                                |
| `Separator`         | `string`                                                                                              | Gets/Sets a visual separator character (e.g., dash or space) between items. |
| `Size`              | [`Telerik.Web.UI.OTPInputSize`]({%slug otpinput/server-side-programming/enums#otpinputsize%})         | Gets/Sets the size of the OTPInput fields (e.g., Small, Medium, Large).     |
| `Space`             | `bool`                                                                                                | Gets/Sets the spacing (in pixels or characters) between individual inputs.  |
| `Type`              | [`Telerik.Web.UI.OTPInputType`]({%slug otpinput/server-side-programming/enums#otpinputtype%})         | Gets/Sets the input type (Text, Number, Password).                          |
| `Value`             | `string`                                                                                              | Gets/Sets the current value of the OTPInput.                                |

## Next Steps

- [Enums]({%slug otpinput/server-side-programming/enums%})
