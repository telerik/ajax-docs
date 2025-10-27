---
title: Overview
page_title: SpeechToTextButton Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms SpeechToTextButton Control."
slug: speechtotextbutton/client-side-programming/overview
tags: client-side, client-side programming
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms SpeechToTextButton Control.

>important The Client-side APIs only allow making changes to a rendered `SpeechToTextButton` element. As an ASP.NET WebForms Component, it can only be created on the server, see [Server-side Programming Overview]({%slug speechtotextbutton/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadSpeechToTextButton` object at Page Load.

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1" />
````

````JavaScript
function pageLoadHandler(sender, args) {
    let speechToTextButton = $find('<%= RadSpeechToTextButton1.ClientID %>'); // Telerik.Web.UI.RadSpeechToTextButton
    let kendoSpeechToTextButton = speechToTextButton.get_kendoWidget(); // kendo.ui.SpeechToTextButton
}

Sys.Application.add_load(pageLoadHandler);
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms SpeechToTextButton API

The WebForms SpeechToTextButton exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:

- [Properties]({%slug speechtotextbutton/client-side-programming/properties%})
- [Enums]({%slug speechtotextbutton/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1" />
````

````JavaScript
function pageLoadHandler(sender, args) {
    let speechToTextButton = $find('<%= RadSpeechToTextButton1.ClientID %>');

    let newSize = Telerik.Web.UI.RadSpeechToTextButtonSize.Large;
    let newFillMode = Telerik.Web.UI.RadSpeechToTextButtonFillMode.Outline;
    let newRounded = Telerik.Web.UI.RadSpeechToTextButtonRounded.Full;
    let newThemeColor = Telerik.Web.UI.RadSpeechToTextButtonThemeColor.Success;
    let newIcon = "headset";
    let newStopIcon = "pause-sm";

    speechToTextButton.set_size(newSize);
    speechToTextButton.set_fillMode(newFillMode);
    speechToTextButton.set_rounded(newRounded);
    speechToTextButton.set_themeColor(newThemeColor);
    speechToTextButton.set_icon(newIcon);
    speechToTextButton.set_stopIcon(newStopIcon);
}

Sys.Application.add_load(pageLoadHandler);
````

## Tips & Tricks

You can create a JavaScript object containing all the Enums in one place for easier access.

Example

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1" />
````

````JavaScript
let SpeechToTextInputEnums = (function () {
    try {
        return {
            FillMode: Telerik.Web.UI.RadSpeechToTextButtonFillMode,
            Rounded: Telerik.Web.UI.RadSpeechToTextButtonRounded,
            Size: Telerik.Web.UI.RadSpeechToTextButtonSize,
            ThemeColor: Telerik.Web.UI.RadSpeechToTextButtonThemeColor
        };
    } catch (e) {
        // Oops, Telerik.Web.UI is not defined
    }
})();

function pageLoadHandler(sender, args) {
    let speechToTextButton = $find('<%= RadSpeechToTextButton1.ClientID %>');

    speechToTextButton.set_fillMode(SpeechToTextInputEnums.FillMode.Outline);
    speechToTextButton.set_rounded(SpeechToTextInputEnums.Rounded.Full);
    speechToTextButton.set_size(SpeechToTextInputEnums.Size.Large);
    speechToTextButton.set_themeColor(SpeechToTextInputEnums.ThemeColor.Success);
}

Sys.Application.add_load(pageLoadHandler);
````

## Next Steps

- [Properties]({%slug otpinput/client-side-programming/properties%})
- [Events]({%slug otpinput/client-side-programming/events%})
- [Enums]({%slug otpinput/client-side-programming/enums%})
