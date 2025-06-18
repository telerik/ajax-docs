---
title: Overview
page_title: OTPInput Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms OTPInput Control."
slug: otpInput/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms OTPInput Control.

>important The Client-side APIs only allow making changes to a rendered `OTPInput` element. As an ASP.NET WebForms Component, it can only be created on the server, see [Server-side Programming Overview]({%slug otpInput/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadOTPInput` object at Page Load.

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

````JavaScript
function pageLoadHandler(sender, args) {
    var otpInput = $find('<%= RadOTPInput1.ClientID %>'); // Telerik.Web.UI.RadOTPInput
    var kendoOtpInput = otpInput.get_kendoWidget(); // kendo.ui.OTPInput
}

Sys.Application.add_load(pageLoadHandler);
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms OTPInput API

The WebForms OTPInput exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:
- [Properties]({%slug otpInput/client-side-programming/properties%})
- [Enums]({%slug otpInput/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

````JavaScript
function pageLoadHandler(sender, args) {
    let otpInput = $find('<%= RadOTPInput1.ClientID %>');

    let newSize = Telerik.Web.UI.RadOTPInputSize.Large;
    let newFillMode = Telerik.Web.UI.RadOTPInputFillMode.Outline;
    let newRounded = Telerik.Web.UI.RadOTPInputRounded.Full;
    let newSeparator = () => kendo.ui.icon({ icon: "code", type: "svg" });

    otpInput.set_space(false);
    otpInput.set_size(newSize);
    otpInput.set_fillMode(newFillMode);
    otpInput.set_rounded(newRounded);
    otpInput.set_separator(newSeparator)
}

Sys.Application.add_load(pageLoadHandler);
````

## Tips & Tricks

You can create a JavaScript object containing all the Enums in one place for easier access.

Example

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

````JavaScript
let OTPEnums = (function () {
    try {
        return {
            FillMode: Telerik.Web.UI.RadOTPInputFillMode,
            Rounded: Telerik.Web.UI.RadOTPInputRounded,
            Size: Telerik.Web.UI.RadOTPInputSize,
            InputType: Telerik.Web.UI.RadOTPInputType
        };
    } catch (e) {
        // Oops, Telerik.Web.UI is not defined
    }
})();

function pageLoadHandler(sender, args) {
    let otpInput = $find('<%= RadOTPInput1.ClientID %>');

    otpInput.set_fillMode(OTPEnums.FillMode.Outline);
    otpInput.set_rounded(OTPEnums.Rounded.Full);
    otpInput.set_size(OTPEnums.Size.Large);
    otpInput.set_type(OTPEnums.InputType.Number);
    otpInput.set_placeholder("0-9");
}

Sys.Application.add_load(pageLoadHandler);
````

## Next Steps

- [Properties]({%slug otpinput/client-side-programming/properties%})
- [Enums]({%slug otpinput/client-side-programming/enums%})
