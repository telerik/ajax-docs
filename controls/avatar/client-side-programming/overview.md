---
title: Overview
page_title: RadAvatar Client-side Programming
description: Overview of the Client-side APIs you can use to create and configure the Telerik WebForms Avatar Control.
slug: avatar/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms Avatar Control.

>important The Client-side APIs only allow changing the appearance of an existing Avatar Control. Creating the Control itself must be done on the server, see [Server-side Programming Overview]({%slug avatar/server-side-programming/overview%})

## Get Client-side reference

Get Client-side reference to the Telerik.Web.UI.RadAvatar object at Page Load.

````ASP.NET
<telerik:RadAvatar runat="server" ID="RadAvatar1" Skin="Default" Text="AA" />

<script>
    function pageLoadHandler(sender, args) {
        var avatar = $find('<%= RadAvatar1.ClientID %>'); // Telerik.Web.UI.RadAvatar
        var kendoAvatar = avatar.get_kendoWidget(); // kendo.ui.Avatar
    }
    Sys.Application.add_load(pageLoadHandler);
</script>
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik RadAvatar API

The WebForms Avatar exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:
- [Properties]({%slug avatar/client-side-programming/properties%})
- [Enums]({%slug avatar/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadAvatar runat="server" ID="RadAvatar1" Type="Icon" Icon="user" />

<script>
    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var avatar = $find('<%= RadAvatar1.ClientID %>');

        // Setting the Type using the Telerik.Web.UI.RadAvatarType enum
        avatar.set_type(Telerik.Web.UI.RadAvatarType.Text);

        // Setting the Size using the Telerik.Web.UI.RadAvatarType enum
        avatar.set_size(Telerik.Web.UI.RadAvatarSize.Large);

        // Setting the Text
        avatar.set_text('JS');

        // Setting the border
        avatar.set_border(true);

        // Setting the FillMode using the Telerik.Web.UI.RadAvatarFillMode enum.
        // This time, accessing the Enum value by using the EnumName as string parameter
        avatar.set_fillMode(Telerik.Web.UI.RadAvatarFillMode['Outline']);

        // Set the Theme Color using the Telerik.Web.UI.RadAvatarThemeColor enum value
        // Telerik.Web.UI.RadAvatarThemeColor.Success = 4
        avatar.set_themeColor(4);
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````

## Kendo jQuery Avatar API

Since the WebForms Avatar is an ASP.NET WebForms wrapper over the Kendo jQuery widget, you can also access the Kendo object and use its APIs. The complete API reference for the Kendo jQuery Avatar can be found at [kendo.ui.Avatar](https://docs.telerik.com/kendo-ui/api/javascript/ui/avatar).

Example of using the underlying Kendo widget and achieving the same outcome as in the [Telerik RadAvatar API](#telerik-radavatar-api) example.

````ASP.NET
<telerik:RadAvatar runat="server" ID="RadAvatar1" Type="Icon" Icon="user" />

<script>
// Page Load Handler
function pageLoadHandler(sender, args) {
    // Get client-side reference
    var avatar = $find('<%= RadAvatar1.ClientID %>'); // Telerik.Web.UI.RadAvatar
    var kendoAvatar = avatar.get_kendoWidget(); // kendo.ui.Avatar

    kendoAvatar.setOptions({
        type: "text",
        size: "large",
        text: "JS",
        border: true,
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
<telerik:RadAvatar runat="server" ID="RadAvatar1" Type="Icon" Icon="user" />

<script>
    // The Object referencing all the Avatar Enums
    var MyObj = (function () {
        try {
            return {
                FillMode: Telerik.Web.UI.RadAvatarFillMode,
                Size: Telerik.Web.UI.RadAvatarSize,
                Type: Telerik.Web.UI.RadAvatarType,
                Rounded: Telerik.Web.UI.RadAvatarRounded,
                ThemeColor: Telerik.Web.UI.RadAvatarThemeColor
            }
        } catch (e) {
            // Oops, Telerik.Web.UI is not defined
        }
    })();

    // Page Load Handler
    function pageLoadHandler(sender, args) {
        // Get client-side reference
        var avatar = $find('<%= RadAvatar1.ClientID %>');

        avatar.set_type(MyObj.Type.Text);
        avatar.set_size(MyObj.Size.Large);

        avatar.set_text('JS');
        avatar.set_border(true);

        avatar.set_fillMode(MyObj.FillMode['Outline']);

        avatar.set_themeColor(4);
    }
    // Page Load event with handler
    Sys.Application.add_load(pageLoadHandler);
</script>
````

### Up next

- [Properties]({%slug avatar/client-side-programming/properties%})
- [Enums]({%slug avatar/client-side-programming/enums%})


## See Also

- [Properties]({%slug avatar/client-side-programming/properties%})
- [Enums]({%slug avatar/client-side-programming/enums%})
