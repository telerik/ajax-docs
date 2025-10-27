---
title: Getting Started
page_title: Getting Started with the SpeechToTextButton
description: "Get started with the WebForms SpeechToTextButton by Telerik UI for ASP.NET AJAX and learn how to create, initialize, and enable the component."
slug: speechtotextbutton/getting-started
tags: speechtotextbutton,getting started
published: True
position: 1
---

# Getting Started with the SpeechToTextButton

This guide demonstrates how to get up and running with the Telerik WebForms SpeechToTextButton.

After the completion of this guide, you will be able to achieve the following end result:

!["Getting Started with the SpeechToTextButton"](images/sttb-getting-started.png "Getting Started with the SpeechToTextButton")

## Create the SpeechToTextButton

To create the SpeechToTextButton in the markup, add a `telerik:RadSpeechToTextButton` element to the page and configure its properties configure properties like `Icon`, `StopIcon` and `Continuous`.

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="SpeechToTextButton1" Icon="headset" StopIcon="pause-sm" ThemeColor="Base" Continuous="true" />
````

To create the SpeechToTextButton on the server, create a new instance of the `RadSpeechToTextButton` object, set its options and add it to the Controls collection of another control (e.g. `PlaceHolder1`)

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadSpeechToTextButton speechToTextButton = new RadSpeechToTextButton()
    {
        ID = "RadSpeechToTextButton1",
        Icon = "headset",
        StopIcon = "pause-sm",
        ThemeColor="Base"
        Continuous = true
    };

    PlaceHolder1.Controls.Add(speechToTextButton);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Dim speechToTextButton As RadSpeechToTextButton = New RadSpeechToTextButton() With {
        .ID = "RadSpeechToTextButton1",
        .Icon = "headset",
        .StopIcon = "pause-sm",
        .ThemeColor="Base"
        .Continuous = true
    }

    Placeholder1.Controls.Add(speechToTextButton)
End Sub
````

## Next Steps

- [Change the Appearance]({%slug speechtotextbutton/appearance%})
- [Accessibility]({%slug speechtotextbutton/accessibility/overview%})
- [Client-side Programming]({%slug speechtotextbutton/client-side-programming/overview%})
- [Server-side Programming]({%slug speechtotextbutton/server-side-programming/overview%})
