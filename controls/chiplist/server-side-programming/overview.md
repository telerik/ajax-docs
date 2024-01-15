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

To create a ChipList in the markup:
- add a `RadChipList` element to the page and set its properties, see [ChipList Properties]({%slug chiplist/server-side-programming/properties%}#chiplist)
- add two or more `ChipListItem` elements to the `Items` collection and set their properties, see [ChipListItem Properties]({%slug chiplist/server-side-programming/properties%}#chiplistitem)

Example

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" FillMode="Outline" Rounded="Full" Removable="true" ItemSize="Large">
    <Items>
        <telerik:ChipListItem Icon="info-circle" Label="Info" ThemeColor="Info" />
        <telerik:ChipListItem Icon="check-outline" Label="Success" ThemeColor="Success" />
        <telerik:ChipListItem Icon="exclamation-circle" Label="Warning" ThemeColor="Warning" />
        <telerik:ChipListItem Icon="x-outline" Label="Error" ThemeColor="Error" />
    </Items>
</telerik:RadChipList>
````

## Creating an ChipList dynamically

To create the ChipList on the server
- create a new instance of the `RadChipList` object and set its properties, see [ChipList Properties]({%slug chiplist/server-side-programming/properties%}#chiplist).
- add two or more `ChipListItem` objects to the `Items` collection and set their properties, see [ChipListItem Properties]({%slug chiplist/server-side-programming/properties%}#chiplistitem).
- add the ChipList to the Controls collection of another control (e.g. `PlaceHolder1`).

Example

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChipList chiplist = new RadChipList() { ID = "RadChipList1", FillMode = ChipListFillMode.Outline, Rounded = ChipListRounded.Full, Removable = true };

    chiplist.Items.Add(new ChipListItem() { Icon = "info-circle", Label = "Info", ThemeColor = ChipThemeColor.Info });
    chiplist.Items.Add(new ChipListItem() { Icon = "check-outline", Label = "Success", ThemeColor = ChipThemeColor.Success });
    chiplist.Items.Add(new ChipListItem() { Icon = "exclamation-circle", Label = "Warning", ThemeColor = ChipThemeColor.Warning });
    chiplist.Items.Add(new ChipListItem() { Icon = "x-outline", Label = "Error", ThemeColor = ChipThemeColor.Error });

    PlaceHolder1.Controls.Add(chiplist);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim chiplist As RadChipList = New RadChipList() With {
        .ID = "RadChipList1",
        .FillMode = ChipListFillMode.Outline,
        .Rounded = ChipListRounded.Full,
        .Removable = True
    }
    chiplist.Items.Add(New ChipListItem() With {
        .Icon = "info-circle",
        .Label = "Info",
        .ThemeColor = ChipThemeColor.Info
    })
    chiplist.Items.Add(New ChipListItem() With {
        .Icon = "check-outline",
        .Label = "Success",
        .ThemeColor = ChipThemeColor.Success
    })
    chiplist.Items.Add(New ChipListItem() With {
        .Icon = "exclamation-circle",
        .Label = "Warning",
        .ThemeColor = ChipThemeColor.Warning
    })
    chiplist.Items.Add(New ChipListItem() With {
        .Icon = "x-outline",
        .Label = "Error",
        .ThemeColor = ChipThemeColor.Error
    })
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
