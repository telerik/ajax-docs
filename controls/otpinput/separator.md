---
title: Separator
page_title: Separator
description: "Learn how to configure different separators between the items of the OTPInput component."
slug: otpinput/separator
tags: otpinput,separator
published: True
position: 3
---

# Separator

In this article, you will find information about the different ways to add a `Separator` between the OTPInput items. The option accepts a string and can be configured to use an SVG icon. In order for the configuration to work, there must be at least 2 `OTPInputItems`.

The below example demonstrates how to add a separator as a string. 

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server" Separator="-">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

The next example shows how to add a separator as a function using the [`kendo.ui.icon`](https://www.telerik.com/kendo-jquery-ui/documentation/api/javascript/ui/ui/methods/icon) method.

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server" Separator="-">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
    <ClientEvents OnLoad="onLoad" />
</telerik:RadOTPInput>
````

````JavaScript
function onLoad(sender, args) {
    let newSeparator = () => kendo.ui.icon({ icon: "minus", type: "svg" });
    sender.set_separator(newSeparator);
}
````

## Next Steps

- [Adaptiveness]({%slug otpinput/adaptiveness%})
- [Accessibility]({% slug otpinput/accessibility/overview%}) 
- [Client-side Programming]({%slug otpinput/client-side-programming/overview%})
- [Server-side Programming]({%slug otpinput/server-side-programming/overview%})
