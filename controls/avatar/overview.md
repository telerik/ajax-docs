---
title: Overview
page_title: Avatar Overview
description: "The Telerik WebForms Avatar is typically used to display images, icons or initials representing people or other entities. It also gives you the flexibility to customize its border radius, size, color, etc. This component is a server-side, ASP.NET WebForms wrapper over the Kendo UI Avatar widget."
slug: avatar/overview
tags: overview
published: True
position: 0
CTAControlName: WebForms Avatar
---

# WebForms Avatar Overview

The Telerik WebForms Avatar is typically used to display images, icons or initials representing people or other entities. It also gives you the flexibility to customize its border radius, size, color, etc. This component is an ASP.NET WebForms wrapper over the [Kendo UI Avatar widget](https://docs.telerik.com/kendo-ui/controls/avatar/overview).

To see the Avatar in action, you can check out the live examples at [WebForms Avatar demos](https://demos.telerik.com/aspnet-ajax/avatar/overview/defaultcs.aspx).

{% if site.has_cta_panels == true %}
{% include cta-panel-overview.html %}
{% endif %}

## Create the Avatar

To create the Avatar in the markup, add a `telerik:RadAvatar` element to the page and configure its options.

````ASP.NET
<telerik:RadAvatar runat="server" ID="RadAvatar1" Text="AA" />
````

To create the Avatar on the server, create a new instance of the RadAvatar object, set its options and add it to the Controls collection of another control (e.g. PlaceHolder1)


````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadAvatar avatar = new RadAvatar();
    avatar.ID = "RadAvatar1";
    avatar.Text = "AA";
    PlaceHolder1.Controls.Add(avatar);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Init
    Dim avatar As RadAvatar = New RadAvatar()
    avatar.ID = "RadAvatar1"
    avatar.Text = "AA"
    PlaceHolder1.Controls.Add(avatar)
End Sub
````

>important Creating controls programmatically must be done in an early event such as **PreInit** (preferably), **Init**. For more details you can check out the [ASP.NET Page Life-Cycle Events](https://learn.microsoft.com/en-us/previous-versions/aspnet/ms178472(v=vs.100)#life-cycle-events)

## Get Client-side reference

The following example demonstrates getting Client-side reference to the Avatar at Page Load.

````ASP.NET
<telerik:RadAvatar runat="server" ID="RadAvatar1" Skin="Default" Text="AA" />

<script>
    function pageLoadHandler(sender, args) {
        var avatar = $find('<%= RadAvatar1.ClientID %>');
    }
    Sys.Application.add_load(pageLoadHandler);
</script>
````

>note For more details about referencing Telerik Controls on the Client-side, you can check out the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Accessibility

You can set the alternate name for the Avatar image through the `Alt` property. Applicable when the Avatar is set to `Type="Image"`. This value will be used to populate the `alt` attribute of the `<img>` element.

The Avatar is a **non-focusable** element.
 
### Up next

- [Appearance]({%slug avatar/appearance%})
- [Client-side Programming]({%slug avatar/client-side-programming/overview%})
- [Server-side Programming]({%slug avatar/server-side-programming/overview%})
 
