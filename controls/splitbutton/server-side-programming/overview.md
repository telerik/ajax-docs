---
title: Overview
page_title: Server-side Programming Overview - RadSplitButton
description: Check our Web Forms article about Overview.
slug: splitbutton/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

You can configure the settings of RadSplitButton and create its items in the code-behind via the Server-Side API of the control.

## RadSplitButton Public Properties and Methods

For a list with the server-side properties and methods of the control, see the [Server-Side API of the RadSplitButton class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadSplitButton). You can also find it in the IntelliSense in Visual Studio.

Information about the Server-side APIs of the embedded ContextMenu you can find in the dedicated articles:

 - [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})

 - [Telerik.Web.UI.RadContextMenu](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadContextMenu)


## RadSplitButton Server-side Events

| Property | Description |
| ------ | ------ |
| **OnClick** |raised when the RadSplitButton or one of its ContextMenu Items is clicked. (AutoPostBack=true)|
| **OnCommand** |raised on Postback triggered by the SplitButton. The CommandArgument and CommandName are passed as event arguments.|


## Create a RadSplitButton in the Code-behind

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    var splitButton = new RadSplitButton();
    splitButton.ID = "RadSplitButton1";
    splitButton.Skin = "Silk";
    splitButton.Text = "SplitButton";
    splitButton.CommandArgument = "CustomCommandArgument";
    splitButton.CommandName = "Command1";

    var menuItem = new RadMenuItem("SplitButton");
    menuItem.Value = "Command1";
    splitButton.ContextMenu.Items.Add(menuItem);
    menuItem = new RadMenuItem("Action2");
    menuItem.Value = "Command2";
    splitButton.ContextMenu.Items.Add(menuItem);
    menuItem = new RadMenuItem("Action3");
    menuItem.Value = "Command3";
    splitButton.ContextMenu.Items.Add(menuItem);

    PlaceHolder1.Controls.Add(splitButton);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim splitButton = New RadSplitButton()
    splitButton.ID = "RadSplitButton1"
    splitButton.Skin = "Silk"
    splitButton.Text = "SplitButton"
    splitButton.CommandArgument = "CustomCommandArgument"
    splitButton.CommandName = "Command1"
    Dim menuItem = New RadMenuItem("SplitButton")
    menuItem.Value = "Command1"
    splitButton.ContextMenu.Items.Add(menuItem)
    menuItem = New RadMenuItem("Action2")
    menuItem.Value = "Command2"
    splitButton.ContextMenu.Items.Add(menuItem)
    menuItem = New RadMenuItem("Action3")
    menuItem.Value = "Command3"
    splitButton.ContextMenu.Items.Add(menuItem)

    PlaceHolder1.Controls.Add(splitButton)
End Sub
````
 

# See Also

 * [Server-Side API of the RadSplitButton class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadSplitButton)
 
 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})

 * [Telerik.Web.UI.RadContextMenu](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadContextMenu)


