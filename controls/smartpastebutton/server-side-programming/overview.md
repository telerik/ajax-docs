---
title: Overview
page_title: SmartPasteButton Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms SmartPasteButton Control."
slug: smartpastebutton/server-side-programming/overview
tags: overview, smartpastebutton, server-side
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms SmartPasteButton control.

## Creating the SmartPasteButton in the Markup

To create a SmartPasteButton in the markup, add the `RadSmartPasteButton` element to the page and set its properties. You can find the full list of properties in the [Properties]({%slug smartpastebutton/server-side-programming/properties%}) article. 

The Telerik UI for ASP.NET AJAX Controls support the `SmartPasteDescription` property, which provides context to the AI service about what data should be pasted into each field.

Example

````ASP.NET
<telerik:RadTextBox runat="server" ID="RadtextBox1" EmptyMessage="Full Name" SmartPasteDescription="Name" />
<telerik:RadTextBox runat="server" ID="RadtextBox2" EmptyMessage="City" SmartPasteDescription="City" />
<telerik:RadMaskedTextBox runat="server" ID="RadMaskedTextBox1" Mask="(###) ###-####" SmartPasteDescription="Phone Number" />

<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Icon="clipboard-code" CancelIcon="cancel" Text="Smart Paste" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste" />
````

You can also use the `FormFields` collection to explicitly define target controls and their descriptions:

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" Icon="clipboard-code" CancelIcon="cancel" Text="Smart Paste"  ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <FormFields>
        <telerik:SmartPasteButtonFormField ControlID="txtName" Description="Customer's full name" />
        <telerik:SmartPasteButtonFormField ControlID="txtEmail" Description="Email address" />
        <telerik:SmartPasteButtonFormField ControlID="ddlCountry" Description="Country of residence" AllowedValues="USA,Canada,Mexico" />
    </FormFields>
</telerik:RadSmartPasteButton>
````

## Creating the SmartPasteButton Dynamically

To create the SmartPasteButton on the server, create a new instance of the `RadSmartPasteButton` object, set its properties and add it to the Controls collection of another control (e.g. a `PlaceHolder`).  

You can find the properties and enums in the following articles:

- [Properties]({%slug smartpastebutton/server-side-programming/properties%})
- [Enums]({%slug smartpastebutton/server-side-programming/enums%})

### Example with SmartPasteDescription on Target Controls

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadTextBox textBox1 = new RadTextBox()
    {
        ID = "RadtextBox1",
        EmptyMessage = "Full Name",
        SmartPasteDescription = "Name"
    };

    PlaceHolder1.Controls.Add(textBox1);

    RadTextBox textBox2 = new RadTextBox()
    {
        ID = "RadtextBox2",
        EmptyMessage = "City",
        SmartPasteDescription = "City"
    };

    PlaceHolder1.Controls.Add(textBox2);

    RadMaskedTextBox maskedTextBox = new RadMaskedTextBox()
    {
        ID = "RadMaskedTextBox",
        Mask = "(###) ###-####",
        SmartPasteDescription = "Phone Number"
    };

    PlaceHolder1.Controls.Add(maskedTextBox);

    RadSmartPasteButton smartPasteButton = new RadSmartPasteButton()
    {
        ID = "SmartPasteButton1",
        Icon = "clipboard-code",
        CancelIcon = "cancel",
        Text = "Smart Paste",
        ServiceUrl = "https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste"
    };

    PlaceHolder1.Controls.Add(smartPasteButton);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs)
    Dim textBox1 As RadTextBox = New RadTextBox() With {
        .ID = "RadtextBox1",
        .EmptyMessage = "Full Name",
        .SmartPasteDescription = "Name"
    }

    PlaceHolder1.Controls.Add(textBox1)

    Dim textBox2 As RadTextBox = New RadTextBox() With {
        .ID = "TextBox2",
        .EmptyMessage = "City",
        .SmartPasteDescription = "City"
    }

    PlaceHolder1.Controls.Add(textBox2)

    Dim maskedTextBox As RadMaskedTextBox = New RadMaskedTextBox() With {
        .ID = "RadMaskedTextBox",
        .Mask = "(###) ###-####",
        .SmartPasteDescription = "Phone Number"
    }

    PlaceHolder1.Controls.Add(maskedTextBox)

    Dim smartPasteButton As RadSmartPasteButton = New RadSmartPasteButton() With {
        .ID = "SmartPasteButton1",
        .Icon = "clipboard-code",
        .CancelIcon = "cancel",
        .Text = "Smart Paste",
        .ServiceUrl = "https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste"
    }

    PlaceHolder1.Controls.Add(smartPasteButton)
End Sub
````

### Example with FormFields Collection

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSmartPasteButton smartPasteButton = new RadSmartPasteButton()
    {
        Icon = "clipboard-code",
        CancelIcon = "cancel",
        Text = "Smart Paste",
        ServiceUrl = "https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste"
    };

    SmartPasteButtonFormField nameField = new SmartPasteButtonFormField()
    {
        ControlID = "txtName",
        Description = "Customer's full name"
    };

    smartPasteButton.FormFields.Add(nameField);

    SmartPasteButtonFormField emailField = new SmartPasteButtonFormField()
    {
        ControlID = "txtEmail",
        Description = "Email address"
    };

    smartPasteButton.FormFields.Add(emailField);

    SmartPasteButtonFormField countryField = new SmartPasteButtonFormField()
    {
        ControlID = "ddlCountry",
        Description = "Country of residence",
        AllowedValues = new string[] { "USA", "Canada", "Mexico" }
    };

    smartPasteButton.FormFields.Add(countryField);

    PlaceHolder1.Controls.Add(smartPasteButton);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs)
    Dim smartPasteButton As RadSmartPasteButton = New RadSmartPasteButton() With {
        .Icon = "clipboard-code",
        .CancelIcon = "cancel",
        .Text = "Smart Paste",
        .ServiceUrl = "https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste"
    }

    smartPasteButton.Service.Headers = "Authorization: Bearer YOUR_TOKEN"

    Dim nameField As SmartPasteButtonFormField = New SmartPasteButtonFormField() With {
        .ControlID = "txtName",
        .Description = "Customer's full name"
    }

    smartPasteButton.FormFields.Add(nameField)

    Dim emailField As SmartPasteButtonFormField = New SmartPasteButtonFormField() With {
        .ControlID = "txtEmail",
        .Description = "Email address"
    }

    smartPasteButton.FormFields.Add(emailField)

    Dim countryField As SmartPasteButtonFormField = New SmartPasteButtonFormField() With {
        .ControlID = "ddlCountry",
        .Description = "Country of residence",
        .AllowedValues = New String() {"USA", "Canada", "Mexico"}
    }

    smartPasteButton.FormFields.Add(countryField)

    PlaceHolder1.Controls.Add(smartPasteButton)
End Sub
````

`PlaceHolder1` declaration

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably) or **Init**. For more details see the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Properties]({%slug smartpastebutton/server-side-programming/properties%})
- [Enums]({%slug smartpastebutton/server-side-programming/enums%})
