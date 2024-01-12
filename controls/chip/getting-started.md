---
title: Getting Started
page_title: Getting Started with the Chip
description: "Get started with the WebForms Chip by Telerik UI for ASP.NET AJAX and learn how to create, initialize, and enable the component."
slug: chip/getting-started
tags: chip,getting started
published: True
position: 1
---

# Getting Started with the Chip

This guide demonstrates how to get up and running with the Telerik WebForms Chip.

After the completion of this guide, you will be able to achieve the following end result:

!["Getting Started with the Chip"](images/chip-getting-started.png "Getting Started with the Chip")

## Create the Chip

To create the Chip in the markup, add a `telerik:RadChip` element to the page and configure its options, like `Icon`, and `Label`.

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Icon="save" Label="Save"></telerik:RadChip>
````

To create the Chip on the server, create a new instance of the `RadChip` object, like `Icon`, and `Label`, and add it to the Controls collection of another control (e.g. `PlaceHolder1`)

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChip chip = new RadChip() {
        Icon = "save",
        Label = "Save"
    };

    PlaceHolder1.Controls.Add(chip);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim chip As RadChip = New RadChip() With {
        .Icon = "save",
        .Label = "Save"
    }
    PlaceHolder1.Controls.Add(chip)
End Sub
````

The `PlaceHolder1`

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), and **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Change the Appearance]({%slug chip/appearance%})
- [Customize the Chip]({%slug chip/customization%})
- [Client-side Programming]({%slug chip/client-side-programming/overview%})
- [Server-side Programming]({%slug chip/server-side-programming/overview%})

## See Also

- [Overview]({%slug chip/overview%})
- [Change the Appearance]({%slug chip/appearance%})
- [Customize the Chip]({%slug chip/customization%})
- [Client-side Programming]({%slug chip/client-side-programming/overview%})
- [Server-side Programming]({%slug chip/server-side-programming/overview%})
 