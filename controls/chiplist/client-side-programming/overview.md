---
title: Overview
page_title: ChipList Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms ChipList Control."
slug: chiplist/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms ChipList Control.

>important The Client-side APIs only allow making changes to a rendered `ChipList` element. As an ASP.NET WebForms Component, it can only be created the server, see [Server-side Programming Overview]({%slug chiplist/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadChipList` object at Page Load using the `Sys.Application.Load` event.

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1">
    <Items>
        <telerik:ChipListItem Icon="plus" Label="Add"  />
        <telerik:ChipListItem Icon="pencil" Label="Edit"  />
        <telerik:ChipListItem Icon="trash" Label="Remove"  />
    </Items>
</telerik:RadChipList>

<script>
    function pageLoadHandler(sender, args) {
        // Reference the Telerik.Web.UI.RadChipList object
        var chiplist = $find('<%= RadChipList1.ClientID %>');

        // Access the kendo.ui.ChipList widget
        var kendoChipList = chiplist.get_kendoWidget();
    }
    Sys.Application.add_load(pageLoadHandler);
</script>
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms ChipList API

The WebForms ChipList exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:
- [Properties]({%slug chiplist/client-side-programming/properties%})
- [Enums]({%slug chiplist/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" />

<script>
    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var chiplist = $find('<%= RadChipList1.ClientID %>');

        // Setting the Size using the Telerik.Web.UI.RadChipListSize enum
        chiplist.set_size(Telerik.Web.UI.RadChipListSize.Large);

        // Setting the Label (text)
        chiplist.set_label('ChipList Label');

        // Set the border rounding to full
        chiplist.set_rounded(Telerik.Web.UI.RadChipListRounded.Full);

        // Setting the FillMode using the Telerik.Web.UI.RadChipListFillMode enum.
        // Example of accessing the Enum value by using the EnumName as string parameter
        chiplist.set_fillMode(Telerik.Web.UI.RadChipListFillMode['Outline']);

        // Set the Theme Color using the Telerik.Web.UI.RadChipListThemeColor enum value
        // Telerik.Web.UI.RadChipListThemeColor.Success = 2
        chiplist.set_themeColor(2);
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````

## Kendo jQuery ChipList API

Since the Telerik WebForms ChipList is an ASP.NET WebForms wrapper over the Kendo jQuery widget, you can also access the Kendo object and use its APIs. The complete API reference for the Kendo jQuery ChipList can be found at [kendo.ui.ChipList](https://docs.telerik.com/kendo-ui/api/javascript/ui/chiplist).

Example of using the underlying Kendo widget and achieving the same outcome as in the [Telerik WebForms ChipList API](#telerik-webforms-chiplist-api) example.

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" />

<script>
    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var chiplist = $find('<%= RadChipList1.ClientID %>'); // Telerik.Web.UI.RadChipList
        var kendoChipList = chiplist.get_kendoWidget(); // kendo.ui.ChipList

        kendoChipList.setOptions({
            size: "large",
            label: "ChipList Label",
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
<telerik:RadChipList runat="server" ID="RadChipList1" Type="Icon" Icon="user" />

<script>
    // The Object referencing all the ChipList Enums
    var ChipListEnums = (function () {
        try {
            return {
                FillMode: Telerik.Web.UI.RadChipListFillMode,
                Rounded: Telerik.Web.UI.RadChipListRounded,
                Size: Telerik.Web.UI.RadChipListSize,
                ThemeColor: Telerik.Web.UI.RadChipListThemeColor
            }
        } catch (e) {
            // Oops, Telerik.Web.UI is not defined
        }
    })();

    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var chiplist = $find('<%= RadChipList1.ClientID %>');

        chiplist.set_size(ChipListEnums.Size.Large);
        chiplist.set_label('ChipList Label');
        chiplist.set_rounded(ChipListEnums.Rounded.Full);
        chiplist.set_fillMode(ChipListEnums.FillMode['Outline']);
        chiplist.set_themeColor(2);
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````

## Next Steps

- [Properties]({%slug chiplist/client-side-programming/properties%})
- [Methods]({%slug chiplist/client-side-programming/methods%})
- [Events]({%slug chiplist/client-side-programming/events%})
- [Enums]({%slug chiplist/client-side-programming/enums%})


## See Also

- [Properties]({%slug chiplist/client-side-programming/properties%})
- [Methods]({%slug chiplist/client-side-programming/methods%})
- [Events]({%slug chiplist/client-side-programming/events%})
- [Enums]({%slug chiplist/client-side-programming/enums%})
