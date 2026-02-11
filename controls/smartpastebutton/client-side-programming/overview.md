---
title: Overview
page_title: SmartPasteButton Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms SmartPasteButton Control."
slug: smartpastebutton/client-side-programming/overview
tags: client-side, client-side programming
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms SmartPasteButton Control.

>important The Client-side APIs only allow making changes to a rendered `SmartPasteButton` element. As an ASP.NET WebForms Component, it can only be created on the server, see [Server-side Programming Overview]({%slug smartpastebutton/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadSmartPasteButton` object at Page Load.

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
````

````JavaScript
function pageLoadHandler(sender, args) {
    let smartPasteButton = $find('<%= SmartPasteButton1.ClientID %>'); // Telerik.Web.UI.RadSmartPasteButton
    let kendoSmartPasteButton = smartPasteButton.get_kendoWidget(); // kendo.ui.SmartPasteButton
}

Sys.Application.add_load(pageLoadHandler);
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms SmartPasteButton API

The WebForms SmartPasteButton exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:

- [Properties]({%slug smartpastebutton/client-side-programming/properties%})
- [Enums]({%slug smartpastebutton/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
````

````JavaScript
function pageLoadHandler(sender, args) {
    let smartPasteButton = $find('<%= SmartPasteButton1.ClientID %>');

    let newSize = Telerik.Web.UI.RadSmartPasteButtonSize.Large;
    let newRounded = Telerik.Web.UI.RadSmartPasteButtonRounded.Full;
    let newIcon = "clipboard-code";
    let newCancelIcon = "cancel";
    let newText = "Smart Paste";

    smartPasteButton.set_size(newSize);
    smartPasteButton.set_rounded(newRounded);
    smartPasteButton.set_icon(newIcon);
    smartPasteButton.set_cancelIcon(newCancelIcon);
    smartPasteButton.set_text(newText);
}

Sys.Application.add_load(pageLoadHandler);
````

## Tips & Tricks

You can create a JavaScript object containing all the Enums in one place for easier access.

Example

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
````

````JavaScript
let SmartPasteButtonEnums = (function () {
    try {
        return {
            Rounded: Telerik.Web.UI.RadSmartPasteButtonRounded,
            Size: Telerik.Web.UI.RadSmartPasteButtonSize
        };
    } catch (e) {
        // Oops, Telerik.Web.UI is not defined
    }
})();

function pageLoadHandler(sender, args) {
    let smartPasteButton = $find('<%= SmartPasteButton1.ClientID %>');

    smartPasteButton.set_rounded(SmartPasteButtonEnums.Rounded.Full);
    smartPasteButton.set_size(SmartPasteButtonEnums.Size.Large);
    smartPasteButton.set_icon("clipboard-code");
    smartPasteButton.set_cancelIcon("cancel");
    smartPasteButton.set_text("Smart Paste");
}

Sys.Application.add_load(pageLoadHandler);
````

## Next Steps

- [Properties]({%slug smartpastebutton/client-side-programming/properties%})
- [Events]({%slug smartpastebutton/client-side-programming/events%})
- [Enums]({%slug smartpastebutton/client-side-programming/enums%})
