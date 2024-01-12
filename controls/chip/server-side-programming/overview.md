---
title: Overview
page_title: Chip Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Chip Control."
slug: chip/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Chip Control.

## Creating the Chip in the Markup

To create a Chip in the markup, add the `RadChip` element to the page and set its properties accordingly. You can find the properties in the following article: 
- [Properties]({%slug chip/server-side-programming/properties%})

Example

````ASP.NET
<telerik:RadChip runat="server" Label="Chip Text" Size="Large" FillMode="Outline" ThemeColor="Success"  />
````

## Creating an Chip dynamically

To create the Chip on the server, create a new instance of the `RadChip` object, set its properties and add it to the Controls collection of another control (e.g. `PlaceHolder1`).  

You can find the properties and enums in the following articles:

- [Properties]({%slug chip/server-side-programming/properties%})
- [Enums]({%slug chip/server-side-programming/enums%})

Example

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChip chip = new RadChip()
    {
        Label = "Success",
        Size = ChipSize.Large,
        Rounded = ChipRounded.Full,
        FillMode = ChipFillMode.Outline,
        ThemeColor = ChipThemeColor.Success
    };
    PlaceHolder1.Controls.Add(chip);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim chip As RadChip = New RadChip() With {
        .Label = "Success",
        .Size = ChipSize.Large,
        .Rounded = ChipRounded.Full,
        .FillMode = ChipFillMode.Outline,
        .ThemeColor = ChipThemeColor.Success
    }
    PlaceHolder1.Controls.Add(chip)
End Sub
````

The `PlaceHolder1`

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Properties]({%slug chip/server-side-programming/properties%})
- [Enums]({%slug chip/server-side-programming/enums%})

## See Also

- [Properties]({%slug chip/server-side-programming/properties%})
- [Enums]({%slug chip/server-side-programming/enums%})
