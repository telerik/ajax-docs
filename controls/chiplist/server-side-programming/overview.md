---
title: Overview
page_title: ChipList Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms ChipList Control."
slug: chiplist/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms ChipList Control.

## Creating the ChipList in the Markup

To create a ChipList in the markup, add the `RadChipList` element to the page and set its properties accordingly. You can find the properties in the following article: 
- [Properties]({%slug chiplist/server-side-programming/properties%})

Example

````ASP.NET
<telerik:RadChipList runat="server" Label="ChipList Text" Size="Large" FillMode="Outline" ThemeColor="Success"  />
````

## Creating an ChipList dynamically

To create the ChipList on the server, create a new instance of the `RadChipList` object, set its properties and add it to the Controls collection of another control (e.g. `PlaceHolder1`).  

You can find the properties and enums in the following articles:

- [Properties]({%slug chiplist/server-side-programming/properties%})
- [Enums]({%slug chiplist/server-side-programming/enums%})

Example

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChipList chiplist = new RadChipList()
    {
        Label = "Success",
        Size = ChipListSize.Large,
        Rounded = ChipListRounded.Full,
        FillMode = ChipListFillMode.Outline,
        ThemeColor = ChipListThemeColor.Success
    };
    PlaceHolder1.Controls.Add(chiplist);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim chiplist As RadChipList = New RadChipList() With {
        .Label = "Success",
        .Size = ChipListSize.Large,
        .Rounded = ChipListRounded.Full,
        .FillMode = ChipListFillMode.Outline,
        .ThemeColor = ChipListThemeColor.Success
    }
    PlaceHolder1.Controls.Add(chiplist)
End Sub
````

The `PlaceHolder1`

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Properties]({%slug chiplist/server-side-programming/properties%})
- [Enums]({%slug chiplist/server-side-programming/enums%})

## See Also

- [Properties]({%slug chiplist/server-side-programming/properties%})
- [Enums]({%slug chiplist/server-side-programming/enums%})
