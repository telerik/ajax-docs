---
title: Getting Started
page_title: Getting Started with the Badge
description: "Get started with the WebForms Badge by Telerik UI for ASP.NET AJAX and learn how to create, initialize, and enable the component."
slug: badge/getting-started
tags: badge,getting started
published: True
position: 1
---

# Getting Started with the Badge

This guide demonstrates how to get up and running with the Telerik WebForms Badge.

After the completion of this guide, you will be able to achieve the following end result:

!["Getting Started with the Badge"](images/badge-overview.png "Getting Started with the Badge")

## Create the Badge

To create the Badge in the markup, add a `telerik:RadBadge` element to the page and configure its options, like `Icon`, and `Text`.

````ASP.NET
<telerik:RadBadge runat="server" ID="Badge1" Text="Badge" ThemeColor="Primary" />
````

To create the Badge on the server, create a new instance of the `RadBadge` object, and add it to the Controls collection of another control (e.g. `PlaceHolder1`)

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadBadge badge = new RadBadge()
    {
        Text = "Badge",
        ThemeColor = BadgeThemeColor.Primary
    };

    PlaceHolder1.Controls.Add(badge);
}

````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim badge As RadBadge = New RadBadge() With {
        .Text = "Badge",
        .ThemeColor = BadgeThemeColor.Primary
    }

    PlaceHolder1.Controls.Add(badge)
End Sub
````

The `PlaceHolder1`

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), and **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Change the Appearance]({%slug badge/appearance%})
- [Client-side Programming]({%slug badge/client-side-programming/overview%})
- [Server-side Programming]({%slug badge/server-side-programming/overview%})
