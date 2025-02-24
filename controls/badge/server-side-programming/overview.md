---
title: Overview
page_title: Badge Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Badge Control."
slug: badge/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Badge Control.

## Creating the Badge in the Markup

To create a Badge in the markup, add the `RadBadge` element to the page and set its properties accordingly. You can find the properties in the following article: 
- [Properties]({%slug badge/server-side-programming/properties%})

Example

````ASP.NET
<telerik:RadBadge runat="server" ID="RadBadge1" Icon="user" ThemeColor="Success" Rounded="Large" FillMode="Outline" />
````

## Creating the Badge dynamically

To create the Badge on the server, create a new instance of the `RadBadge` object, set its properties and add it to the Controls collection of another control (e.g. `PlaceHolder1`).  

You can find the properties and enums in the following articles:

- [Properties]({%slug badge/server-side-programming/properties%})
- [Enums]({%slug badge/server-side-programming/enums%})

Example

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadBadge badge = new RadBadge()
    {
        Text = "Badge",
        Size = BadgeSize.Large,
        Rounded = BadgeRounded.Full,
        FillMode = BadgeFillMode.Outline,
        ThemeColor = BadgeThemeColor.Success,
        Position = BadgePosition.Edge,
        Align = BadgeAlign.BottomStart
    };

    PlaceHolder1.Controls.Add(badge); 
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim badge As RadBadge = New RadBadge() With {
        .Text = "Badge",
        .Size = BadgeSize.Large,
        .Rounded = BadgeRounded.Full,
        .FillMode = BadgeFillMode.Outline,
        .ThemeColor = BadgeThemeColor.Success,
        .Position = BadgePosition.Edge,
        .Align = BadgeAlign.BottomStart
    }

    PlaceHolder1.Controls.Add(badge)
End Sub
````

The `PlaceHolder1`

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Properties]({%slug badge/server-side-programming/properties%})
- [Enums]({%slug badge/server-side-programming/enums%})
