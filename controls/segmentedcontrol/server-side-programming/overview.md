---
title: Overview
page_title: SegmentedControl Server-side Programming
description: "Overview of the Server-side APIs you can use to create and configure the Telerik WebForms SegmentedControl."
slug: segmentedcontrol/server-side-programming/overview
tags: overview, segmentedcontrol, server-side
published: True
position: 0
---

# Server-side Programming Overview

Overview of the Server-side APIs you can use to create and configure the Telerik WebForms SegmentedControl.

## Creating the SegmentedControl in the Markup

To create a SegmentedControl in the markup, add the `RadSegmentedControl` element to the page and set its properties. You can find the full list of properties in the [Properties]({%slug segmentedcontrol/server-side-programming/properties%}) article.

Example

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" LayoutMode="Compact" Size="Medium" SelectedValue="settings">
    <Items>
        <telerik:SegmentedControlItem Text="Home" Value="home" Icon="home" />
        <telerik:SegmentedControlItem Text="Settings" Value="settings" Icon="gear" />
        <telerik:SegmentedControlItem Text="Profile" Value="profile" Icon="user" Enabled="false" />
    </Items>
</telerik:RadSegmentedControl>
````

## Creating the SegmentedControl Dynamically

To create the SegmentedControl on the server, create a new instance of the `RadSegmentedControl` object, set its properties, and add it to the Controls collection of another control (e.g. a `PlaceHolder`).

You can find the properties and enums in the following articles:

- [Properties]({%slug segmentedcontrol/server-side-programming/properties%})
- [Enums]({%slug segmentedcontrol/server-side-programming/enums%})

Example

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadSegmentedControl segmentedControl = new RadSegmentedControl()
    {
        ID = "RadSegmentedControl1",
        SelectedValue = "settings",
        LayoutMode = SegmentedControlLayoutMode.Compact,
        Size = SegmentedControlSize.Medium
    };

    segmentedControl.Items.Add(new SegmentedControlItem() { Text = "Home", Value = "home", Icon = "home" });
    segmentedControl.Items.Add(new SegmentedControlItem() { Text = "Settings", Value = "settings", Icon = "gear" });
    segmentedControl.Items.Add(new SegmentedControlItem() { Text = "Profile", Value = "profile", Icon = "user", Enabled = false });

    PlaceHolder1.Controls.Add(segmentedControl);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim segmentedControl As RadSegmentedControl = New RadSegmentedControl() With {
        .ID = "RadSegmentedControl1",
        .SelectedValue = "settings",
        .LayoutMode = SegmentedControlLayoutMode.Compact,
        .Size = SegmentedControlSize.Medium
    }

    segmentedControl.Items.Add(New SegmentedControlItem() With { .Text = "Home", .Value = "home", .Icon = "home" })
    segmentedControl.Items.Add(New SegmentedControlItem() With { .Text = "Settings", .Value = "settings", .Icon = "gear" })
    segmentedControl.Items.Add(New SegmentedControlItem() With { .Text = "Profile", .Value = "profile", .Icon = "user", .Enabled = False })

    PlaceHolder1.Controls.Add(segmentedControl)
End Sub
````
