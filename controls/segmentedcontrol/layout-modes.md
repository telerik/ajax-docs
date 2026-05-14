---
title: Layout Modes
page_title: SegmentedControl Layout Modes
description: "Configure the compact and stretch layout modes of the Telerik WebForms SegmentedControl to control how segment widths are calculated."
slug: segmentedcontrol/layout-modes
tags: segmentedcontrol, layout, layoutmode
published: True
position: 3
---

# Layout Modes

The SegmentedControl supports two layout modes that determine how segment widths are calculated and how the component interacts with its container. Use the `LayoutMode` property to configure it.

## Compact Mode

`Compact` is the default layout mode. In this mode:

* Each segment's width is determined by its content (label, icon, and padding).
* Segments can have unequal widths.
* The total width of the component equals the combined widths of all segments.
* The component does not stretch to fill its container.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" LayoutMode="Compact" SelectedValue="day">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" />
        <telerik:SegmentedControlItem Text="Week" Value="week" />
        <telerik:SegmentedControlItem Text="Month" Value="month" />
    </Items>
</telerik:RadSegmentedControl>
````

## Stretch Mode

In `Stretch` mode:

* The component expands to fill the full width of its container.
* All segments are equal width, regardless of their label length.
* Each segment's width is calculated as the container width divided by the number of segments.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" LayoutMode="Stretch" SelectedValue="day">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" />
        <telerik:SegmentedControlItem Text="Week" Value="week" />
        <telerik:SegmentedControlItem Text="Month" Value="month" />
    </Items>
</telerik:RadSegmentedControl>
````

## See Also

* [Server-side Properties]({%slug segmentedcontrol/server-side-programming/properties%})
* [Getting Started with the Telerik WebForms SegmentedControl]({%slug segmentedcontrol/getting-started%})
