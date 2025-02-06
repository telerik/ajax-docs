---
title: Overview
page_title: AIPrompt Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms AIPrompt Control."
slug: aiprompt/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Chip Control.

## Creating the AIPrompt in the Markup

To create a Chip in the markup, add the `RadAIPrompt` element to the page and set its properties accordingly. You can find the properties in the following article: 

- [Properties]({%slug aiprompt/server-side-programming/properties%})

Example

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1" Width="300px" />
````

## Creating the AIPrompt dynamically

To create the AIPrompt on the server, create a new instance of the `RadAIPrompt` object, set its properties and add it to the Controls collection of another control (e.g. `PlaceHolder1`).  

Example.

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAIPrompt aiPrompt = new RadAIPrompt()
    {
        Width = Unit.Pixel(400)
    };

    PlaceHolder1.Controls.Add(chip);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    Dim aiPrompt As RadAIPrompt = New RadAIPrompt() With {
        .Width = Unit.Pixel(400)
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

- [Properties]({%slug aiprompt/server-side-programming/properties%})
- [Enums]({%slug aiprompt/server-side-programming/enums%})
