---
title: Getting Started
page_title: Getting Started with the OTPInput
description: "Get started with the WebForms OTPInput by Telerik UI for ASP.NET AJAX and learn how to create, initialize, and enable the component."
slug: otpinput/getting-started
tags: otpinput,getting started
published: True
position: 1
---

# Getting Started with the OTPInput

This guide demonstrates how to get up and running with the Telerik WebForms OTPInput.

After the completion of this guide, you will be able to achieve the following end result:

!["Getting Started with the OTPInput"](images/otpinput-getting-started.png "Getting Started with the OTPInput")

## Create the OTPInput

To create the OTPInput in the markup, add a `telerik:RadOTPInput` element to the page and configure properties like `Space`, and `Placeholder` and `Type`.

````ASP.NET
<telerik:RadOTPInput ID="OTPInput1" runat="server" Space="true" Type="Number" Placeholder="0-9" Separator="-">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

To create the OTPInput on the server, create a new instance of the `RadOTPInput` object, and add it to the Controls collection of another control (e.g. `PlaceHolder1`)

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadOTPInput otpInput = new RadOTPInput()
    {
        Space = true,
        Placeholder = "0-9",
        Separator = "-",
        Type = OTPInputType.Number
    };

    OTPInputItem item1 = new OTPInputItem()
    {
        GroupLength = 3
    };

    otpInput.ItemsCollection.Add(item1);

    OTPInputItem item2 = new OTPInputItem()
    {
        GroupLength = 3
    };

    otpInput.ItemsCollection.Add(item2);

    PlaceHolder1.Controls.Add(otpInput);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs)
    Dim otpInput As RadOTPInput = New RadOTPInput() With {
        .Space = True,
        Placeholder = "0-9",
        Separator = "-",
        .Type = OTPInputType.Number
    }

    Dim item1 As OTPInputItem = New OTPInputItem() With {
        .GroupLength = 3
    }

    otpInput.ItemsCollection.Add(item1)

    Dim item2 As OTPInputItem = New OTPInputItem() With {
        .GroupLength = 3
    }

    otpInput.ItemsCollection.Add(item2)

    PlaceHolder1.Controls.Add(otpInput)
End Sub
````

The `PlaceHolder1`

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), and **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Change the Appearance]({%slug otpinput/appearance%})
- [Separator]({%slug otpinput/separator%})
- [Adaptiveness]({%slug otpinput/adaptiveness%})
- [Accessibility]({% slug otpinput/accessibility/overview%}) 
- [Client-side Programming]({%slug otpinput/client-side-programming/overview%})
- [Server-side Programming]({%slug otpinput/server-side-programming/overview%})
