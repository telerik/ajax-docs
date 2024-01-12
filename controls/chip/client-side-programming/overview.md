---
title: Overview
page_title: Chip Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms Chip Control."
slug: chip/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms Chip Control.

>important The Client-side APIs only allow making changes to a rendered `Chip` element. As an ASP.NET WebForms Component, it can only be created the server, see [Server-side Programming Overview]({%slug chiplist/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadChip` object at Page Load.

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Label="Chip" />

<script>
    function pageLoadHandler(sender, args) {
        var chip = $find('<%= RadChip1.ClientID %>'); // Telerik.Web.UI.RadChip
        var kendoChip = chip.get_kendoWidget(); // kendo.ui.Chip
    }
    Sys.Application.add_load(pageLoadHandler);
</script>
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms Chip API

The WebForms Chip exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:
- [Properties]({%slug chip/client-side-programming/properties%})
- [Enums]({%slug chip/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" />

<script>
    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var chip = $find('<%= RadChip1.ClientID %>');

        // Setting the Size using the Telerik.Web.UI.RadChipSize enum
        chip.set_size(Telerik.Web.UI.RadChipSize.Large);

        // Setting the Label (text)
        chip.set_label('Chip Label');

        // Set the border rounding to full
        chip.set_rounded(Telerik.Web.UI.RadChipRounded.Full);

        // Setting the FillMode using the Telerik.Web.UI.RadChipFillMode enum.
        // Example of accessing the Enum value by using the EnumName as string parameter
        chip.set_fillMode(Telerik.Web.UI.RadChipFillMode['Outline']);

        // Set the Theme Color using the Telerik.Web.UI.RadChipThemeColor enum value
        // Telerik.Web.UI.RadChipThemeColor.Success = 2
        chip.set_themeColor(2);
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````

## Kendo jQuery Chip API

Since the Telerik WebForms Chip is an ASP.NET WebForms wrapper over the Kendo jQuery widget, you can also access the Kendo object and use its APIs. The complete API reference for the Kendo jQuery Chip can be found at [kendo.ui.Chip](https://docs.telerik.com/kendo-ui/api/javascript/ui/chip).

Example of using the underlying Kendo widget and achieving the same outcome as in the [Telerik WebForms Chip API](#telerik-webforms-chip-api) example.

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" />

<script>
    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var chip = $find('<%= RadChip1.ClientID %>'); // Telerik.Web.UI.RadChip
        var kendoChip = chip.get_kendoWidget(); // kendo.ui.Chip

        kendoChip.setOptions({
            size: "large",
            label: "Chip Label",
            rounded: "full",
            fillMode: "outline",
            themeColor: "success"
        });
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````


## Tips & Tricks

You can create a JavaScript object containing all the Enums in one place for easier access.

Example

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Type="Icon" Icon="user" />

<script>
    // The Object referencing all the Chip Enums
    var ChipEnums = (function () {
        try {
            return {
                FillMode: Telerik.Web.UI.RadChipFillMode,
                Rounded: Telerik.Web.UI.RadChipRounded,
                Size: Telerik.Web.UI.RadChipSize,
                ThemeColor: Telerik.Web.UI.RadChipThemeColor
            }
        } catch (e) {
            // Oops, Telerik.Web.UI is not defined
        }
    })();

    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var chip = $find('<%= RadChip1.ClientID %>');

        chip.set_size(ChipEnums.Size.Large);
        chip.set_label('Chip Label');
        chip.set_rounded(ChipEnums.Rounded.Full);
        chip.set_fillMode(ChipEnums.FillMode['Outline']);
        chip.set_themeColor(2);
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````

## Next Steps

- [Properties]({%slug chip/client-side-programming/properties%})
- [Enums]({%slug chip/client-side-programming/enums%})
- [Events]({%slug chip/client-side-programming/events%})


## See Also

- [Properties]({%slug chip/client-side-programming/properties%})
- [Events]({%slug chip/client-side-programming/events%})
- [Enums]({%slug chip/client-side-programming/enums%})
