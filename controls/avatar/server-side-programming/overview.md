---
title: Overview
page_title: Avatar Server-side Programming
description: Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Avatar Control.
slug: avatar/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms Avatar Control.

## Creating an Avatar in the Markup

To create an Avatar in the markup, add the Avatar element to the page and set its properties accordingly. You can find the properties in the following article: 
- [Properties]({%slug avatar/server-side-programming/properties%})

Example

````ASP.NET
<telerik:RadAvatar runat="server" Type="Text" Size="Large" Text="JS" Border="true" FillMode="Outline"  ThemeColor="Success"  />
````

## Creating an Avatar dynamically

To create the Avatar on the server, create a new instance of the RadAvatar object, set its properties and add it to the Controls collection of another control (e.g. PlaceHolder1).  You can find the properties and enums in the following articles:
- [Properties]({%slug avatar/server-side-programming/properties%})
- [Enums]({%slug avatar/server-side-programming/enums%})

Example

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAvatar avatar = new RadAvatar() {
        Type = Telerik.Web.UI.AvatarType.Text,
        Size = AvatarSize.Large,
        Text = "JS",
        Border = true,
        FillMode = AvatarFillMode.Outline,
        ThemeColor = AvatarThemeColor.Success
    };
    PlaceHolder1.Controls.Add(avatar);
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs)
    Dim avatar As RadAvatar = New RadAvatar() With {
        .Type = Telerik.Web.UI.AvatarType.Text,
        .Size = AvatarSize.Large,
        .Text = "JS",
        .Border = True,
        .FillMode = AvatarFillMode.Outline,
        .ThemeColor = AvatarThemeColor.Success
    }
    PlaceHolder1.Controls.Add(avatar)
End Sub
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

### Up next

- [Properties]({%slug avatar/server-side-programming/properties%})
- [Enums]({%slug avatar/server-side-programming/enums%})

## See Also

- [Properties]({%slug avatar/server-side-programming/properties%})
- [Enums]({%slug avatar/server-side-programming/enums%})
