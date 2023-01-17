---
title: Overview
page_title: Server-side Programming Overview - RadSignature
description: Check our Web Forms article about the Server API of RadSignature.
slug: signature/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server Side Programming Overview

You can configure the settings of RadSignature and create its items in the code-behind via the Server-Side API of the control.

## RadSignature Public Properties

For a list with the server-side properties of the control, see the [Server-Side API of the RadSignature class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadSignature). You can also find it in the IntelliSense in Visual Studio.

## Create a RadSignature in the Code-behind:

````ASPX
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var signature = new RadSignature();
    signature.ID = "RadSignature1";
    signature.Skin = "Silk";
    signature.Height = Unit.Pixel(200);
    signature.Width = Unit.Pixel(400);
    signature.BackColor = System.Drawing.Color.Wheat;
    signature.ForeColor = System.Drawing.Color.DarkBlue;
    signature.FillMode = RadSignatureFillMode.Outline;
    signature.HideLine = true;

    PlaceHolder1.Controls.Add(signature);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Dim signature = New RadSignature()
    signature.ID = "RadSignature1"
    signature.Skin = "Silk"
    signature.Height = Unit.Pixel(200)
    signature.Width = Unit.Pixel(400)
    signature.BackColor = System.Drawing.Color.Wheat
    signature.ForeColor = System.Drawing.Color.DarkBlue
    signature.FillMode = RadSignatureFillMode.Outline
    signature.HideLine = True
    PlaceHolder1.Controls.Add(signature)
End Sub
````

 
# See Also

 * [Server-Side API of the RadSignature class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadSignature)
 


