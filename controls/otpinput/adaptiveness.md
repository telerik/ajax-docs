---
title: Adaptviness
page_title: Separator
description: Learn how to configure the input mode of the WebForms OTPInput component.
slug: otpinput/adaptiveness
tags: otpinput,adaptiveness
published: True
position: 4
---

# Adaptiveness

The WebForms OTPInput does not require specific adaptive rendering but enables you to configure a suitable input-specific keyboard that appears on touchscreen devices upon interaction.

## On-Screen Keyboard

To enhance the mobile user experience of your application, you can configure the type of the on-screen keyboard for the OTPInput component.

To configure an on-screen keyboard for the OTPInput, use the `InputMode` property to a supported value. Based on the defined setting, the browser will display the most appropriate virtual keyboard on the screen.

The following example demonstrates how to configure an on-screen keyboard for the OTPInput.

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server" InputMode="Numeric">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

## Next Steps

- [Accessibility]({% slug otpinput/accessibility/overview%}) 
- [Client-side Programming]({%slug otpinput/client-side-programming/overview%})
- [Server-side Programming]({%slug otpinput/server-side-programming/overview%})
