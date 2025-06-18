---
title: Overview
page_title: OTPInput Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms OTPInput Control."
slug: otpinput/server-side-programming/overview
tags: overview, otpinput, server-side
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms OTPInnput Control.

## Creating the OTPInput in the Markup

To create an OTPInput in the markup, add the `RadOTPInput` element to the page and set its properties accordingly. You can find the properties in [Properties]({%slug otpinput/server-side-programming/properties%}) article.

Example

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
</telerik:RadOTPInput>
````

## Creating the OTPInput dynamically

To create the OTPInput on the server, create a new instance of the `RadOTPInput` object, set its properties and add it to the Controls collection of another control (e.g. `PlaceHolder1`).  

You can find the properties and enums in the following articles:

- [Properties]({%slug otpinput/server-side-programming/properties%})
- [Enums]({%slug otpinput/server-side-programming/enums%})

Example

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadOTPInput otpInput = new RadOTPInput()
    {
        Space = true,
        Placeholder = "0-9",
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

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Properties]({%slug otpinput/server-side-programming/properties%})
- [Enums]({%slug otpinput/server-side-programming/enums%})
