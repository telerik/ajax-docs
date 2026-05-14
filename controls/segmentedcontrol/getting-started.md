---
title: Getting Started
page_title: Getting Started with the WebForms SegmentedControl
description: "Get started with the Telerik WebForms SegmentedControl and learn how to create, initialize, and configure the component."
slug: segmentedcontrol/getting-started
tags: segmentedcontrol, getting started
published: True
position: 1
---

# Getting Started with the SegmentedControl

This guide demonstrates how to get up and running with the Telerik WebForms SegmentedControl.

## Create the SegmentedControl

To create the SegmentedControl in the markup, add a `telerik:RadSegmentedControl` element to the page and configure its `Items`, `SelectedValue`, `LayoutMode`, and `Size` properties.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" SelectedValue="week">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" Icon="calendar" />
        <telerik:SegmentedControlItem Text="Week" Value="week" Icon="clock" />
        <telerik:SegmentedControlItem Text="Month" Value="month" Icon="calendar-date" />
    </Items>
</telerik:RadSegmentedControl>
````

To create the SegmentedControl on the server, create a new instance of the `RadSegmentedControl` object, set its properties, and add it to the Controls collection of another control (e.g. `PlaceHolder1`).

````ASP.NET
<asp:PlaceHolder ID="PlaceHolder1" runat="server"></asp:PlaceHolder>
````

````C#
protected void Page_Init(object sender, EventArgs e)
{
    RadSegmentedControl segmentedControl = new RadSegmentedControl()
    {
        ID = "RadSegmentedControl1",
        SelectedValue = "week",
        LayoutMode = SegmentedControlLayoutMode.Compact,
        Size = SegmentedControlSize.Medium
    };

    segmentedControl.Items.Add(new SegmentedControlItem() { Text = "Day", Value = "day", Icon = "calendar" });
    segmentedControl.Items.Add(new SegmentedControlItem() { Text = "Week", Value = "week", Icon = "clock" });
    segmentedControl.Items.Add(new SegmentedControlItem() { Text = "Month", Value = "month", Icon = "calendar-date" });

    PlaceHolder1.Controls.Add(segmentedControl);
}
````
````VB
Protected Sub Page_Init(ByVal sender As Object, ByVal e As EventArgs)
    Dim segmentedControl As RadSegmentedControl = New RadSegmentedControl() With {
        .ID = "RadSegmentedControl1",
        .SelectedValue = "week",
        .LayoutMode = SegmentedControlLayoutMode.Compact,
        .Size = SegmentedControlSize.Medium
    }

    segmentedControl.Items.Add(New SegmentedControlItem() With { .Text = "Day", .Value = "day", .Icon = "calendar" })
    segmentedControl.Items.Add(New SegmentedControlItem() With { .Text = "Week", .Value = "week", .Icon = "clock" })
    segmentedControl.Items.Add(New SegmentedControlItem() With { .Text = "Month", .Value = "month", .Icon = "calendar-date" })

    PlaceHolder1.Controls.Add(segmentedControl)
End Sub
````

## Next Steps

- [Layout Modes]({%slug segmentedcontrol/layout-modes%})
- [Icons]({%slug segmentedcontrol/icons%})
- [Accessibility]({%slug segmentedcontrol/accessibility/overview%})
- [Keyboard Navigation]({%slug segmentedcontrol/accessibility/keyboard-navigation%})
- [Client-side Programming]({%slug segmentedcontrol/client-side-programming/overview%})
- [Server-side Programming]({%slug segmentedcontrol/server-side-programming/overview%})
