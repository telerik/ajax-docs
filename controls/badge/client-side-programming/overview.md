---
title: Overview
page_title: Badge Client-side Programming
description: "Overview of the Client-side APIs you can use to create and configure the Telerik WebForms Badge Control."
slug: badge/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms Badge Control.

>important The Client-side APIs only allow making changes to a rendered `Badge` element. As an ASP.NET WebForms Component, it can only be created on the server, see [Server-side Programming Overview]({%slug badge/server-side-programming/overview%})

## Get Client-side reference

Example of getting Client-side reference to the `Telerik.Web.UI.RadBadge` object at Page Load.

````ASP.NET
<telerik:RadBadge runat="server" ID="RadBadge1" Icon="user" />
````

````JavaScript
function pageLoadHandler(sender, args) {
    var badge = $find('<%= RadBadge1.ClientID %>'); // Telerik.Web.UI.RadBadge
    var kendoBadge = badge.get_kendoWidget(); // kendo.ui.Badge
}

Sys.Application.add_load(pageLoadHandler);
````

For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms Badge API

The WebForms Badge exposes a few Client-side properties and enums that can be used to change the appearance on the client.

For a list of available Properties and Enums, you can refer to the following articles:
- [Properties]({%slug badge/client-side-programming/properties%})
- [Enums]({%slug badge/client-side-programming/enums%})

Example of changing the appearance on Page Load

````ASP.NET
<telerik:RadBadge runat="server" ID="RadBadge1" />
````

````JavaScript
function pageLoadHandler(sender, args) {
    var badge = $find('<%= RadBadge1.ClientID %>');

    var align = Telerik.Web.UI.RadBadgeAlign.BottomStart;
    var fillMode = Telerik.Web.UI.RadBadgeFillMode.Outline;
    var position = Telerik.Web.UI.RadBadgePosition.Edge;
    var rounded = Telerik.Web.UI.RadBadgeRounded.Full;
    var size = Telerik.Web.UI.RadBadgeSize.Large;
    var themeColor = Telerik.Web.UI.RadBadgeThemeColor.Error;

    badge.set_align(align); 
    badge.set_fillMode(fillMode);
    badge.set_position(position);
    badge.set_rounded(rounded);
    badge.set_size(size);
    badge.set_themeColor(themeColor); 
    badge.set_text('Badge Label');
}

Sys.Application.add_load(pageLoadHandler);
````

## Tips & Tricks

You can create a JavaScript object containing all the Enums in one place for easier access.

Example

````ASP.NET
<telerik:RadBadge runat="server" ID="RadBadge1" Icon="user" />
````

````JavaScript
var BadgeEnums = (function () {
    try {
        return {
            Align: Telerik.Web.UI.RadBadgeAlign,
            FillMode: Telerik.Web.UI.RadBadgeFillMode,
            Position: Telerik.Web.UI.RadBadgePosition,
            Rounded: Telerik.Web.UI.RadBadgeRounded,
            Size: Telerik.Web.UI.RadBadgeSize,
            ThemeColor: Telerik.Web.UI.RadBadgeThemeColor
        };
    } catch (e) {
        // Oops, Telerik.Web.UI is not defined
    }
})();

function pageLoadHandler(sender, args) {
    var badge = $find('<%= RadBadge1.ClientID %>');

    badge.set_align(BadgeEnums.Align.BottomStart);
    badge.set_fillMode(BadgeEnums.FillMode.Outline);
    badge.set_position(BadgeEnums.Position.Edge);
    badge.set_rounded(BadgeEnums.Rounded.Full);
    badge.set_size(BadgeEnums.Size.Large);
    badge.set_themeColor(BadgeEnums.ThemeColor.Warning);
    badge.set_text('Badge Label');
}

Sys.Application.add_load(pageLoadHandler);
````

## Next Steps

- [Properties]({%slug badge/client-side-programming/properties%})
- [Enums]({%slug badge/client-side-programming/enums%})
