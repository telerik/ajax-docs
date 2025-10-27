---
title: Overview
page_title: SpeechToTextButton Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms SpeechToTextButton Control."
slug: speechtotextbutton/server-side-programming/overview
tags: overview, speechtotextbutton, server-side
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms SpeechToTextButton control.

## Creating the SpeechToTextButton in the Markup

To create a SpeechToTextButton in the markup, add the `RadSpeechToTextButton` element to the page and set its properties. You can find the full list of properties in the [Properties]({%slug speechtotextbutton/server-side-programming/properties%}) article.

Example

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1" Icon="headset" StopIcon="pause-sm" Continuous="true" InterimResults="true" MaxAlternatives="5" Size="Large" Rounded="Full" FillMode="Outline" ThemeColor="Info">
	<Messages Start="Start" Stop="Stop" Unsupported="Not supported" NotInitialized="Initializing..." />
</telerik:RadSpeechToTextButton>
````

## Creating the SpeechToTextButton Dynamically

To create the SpeechToTextButton on the server, create a new instance of the `RadSpeechToTextButton` object, set its properties and add it to the Controls collection of another control (e.g. a `PlaceHolder`).  

You can find the properties and enums in the following articles:

- [Properties]({%slug speechtotextbutton/server-side-programming/properties%})
- [Enums]({%slug speechtotextbutton/client-side-programming/enums%})

Example

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSpeechToTextButton speechButton = new RadSpeechToTextButton()
    {
        Icon = "headset",
        StopIcon = "pause-sm",
        Continuous = true,
        InterimResults = true,
        MaxAlternatives = 5,
        Size = SpeechToTextButtonSize.Large,
        Rounded = SpeechToTextButtonRounded.Full,
        FillMode = SpeechToTextButtonFillMode.Outline,
        ThemeColor = SpeechToTextButtonThemeColor.Success
    };

    speechButton.Messages.NotInitialized = "Initializing...";
    speechButton.Messages.Start = "Start";
    speechButton.Messages.Stop = "Stop";
    speechButton.Messages.Unsupported = "Not supported";

    PlaceHolder1.Controls.Add(speechButton);
}

````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs)
    Dim speechButton As RadSpeechToTextButton = New RadSpeechToTextButton() With {
        .Icon = "headset",
        .StopIcon = "pause-sm",
        .Continuous = True,
        .InterimResults = True,
        .MaxAlternatives = 5,
        .Size = SpeechToTextButtonSize.Large,
        .Rounded = SpeechToTextButtonRounded.Full,
        .FillMode = SpeechToTextButtonFillMode.Outline,
        .ThemeColor = SpeechToTextButtonThemeColor.Success
    }

    speechButton.Messages.NotInitialized = "Initializing..."
    speechButton.Messages.Start = "Start"
    speechButton.Messages.[Stop] = "Stop"
    speechButton.Messages.Unsupported = "Not supported"

    PlaceHolder1.Controls.Add(speechButton)
End Sub
````

`PlaceHolder1` declaration

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably) or **Init**. For more details see the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Next Steps

- [Properties]({%slug speechtotextbutton/server-side-programming/properties%})
- [Enums]({%slug speechtotextbutton/client-side-programming/enums%})
