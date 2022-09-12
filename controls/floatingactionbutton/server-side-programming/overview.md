---
title: Overview
page_title: Server-side Programming Overview - RadFloatingActionButton
description: Check our Web Forms article about the Server API of RadFloatingActionButton.
slug: floatingactionbutton/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server Side Programming Overview

You can configure the settings of RadFloatingActionButton and create its items in the code-behind via the Server-Side API of the control.

## RadFloatingActionButton Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadFloatingActionButton class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadFloatingActionButton). You can also find it in the IntelliSense in Visual Studio.

## Create a RadFloatingActionButton in the Code-behind:

````ASPX
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var floatingButton = new RadFloatingActionButton();
    floatingButton.ID = "RadFloatingActionButton1";
    floatingButton.Skin = "Silk";
    floatingButton.Text = "Go to MyProfile";
    floatingButton.Icon = "home";
    floatingButton.Align = RadFloatingActionButtonAlign.TopCenter;
    floatingButton.AlignOffsetSettings.X = 250;
    floatingButton.AlignOffsetSettings.Y = 15.0;

    PlaceHolder1.Controls.Add(floatingButton);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Dim floatingButton = New RadFloatingActionButton()
    floatingButton.ID = "RadFloatingActionButton1"
    floatingButton.Skin = "Silk"
    floatingButton.Text = "Go to MyProfile"
    floatingButton.Icon = "home"
    floatingButton.Align = RadFloatingActionButtonAlign.TopCenter
    floatingButton.AlignOffsetSettings.X = 250
    floatingButton.AlignOffsetSettings.Y = 15.0
    PlaceHolder1.Controls.Add(floatingButton)
End Sub
````

 
# See Also

 * [Server-Side API of the RadFloatingActionButton class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadFloatingActionButton)
 


