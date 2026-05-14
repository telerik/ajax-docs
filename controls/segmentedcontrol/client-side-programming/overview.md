---
title: Overview
page_title: SegmentedControl Client-side Programming
description: "Overview of the Client-side APIs you can use to configure the Telerik WebForms SegmentedControl."
slug: segmentedcontrol/client-side-programming/overview
tags: client-side, client-side programming
published: True
position: 0
---

# Client-side Programming Overview

Overview of the Client-side APIs you can use to configure the Telerik WebForms SegmentedControl.

>important The Client-side APIs only allow making changes to a rendered `SegmentedControl` element. As an ASP.NET WebForms component, it can only be created on the server — see [Server-side Programming Overview]({%slug segmentedcontrol/server-side-programming/overview%}).

## Get Client-side Reference

Example of getting a client-side reference to the `Telerik.Web.UI.RadSegmentedControl` object at Page Load.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" SelectedValue="week">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" Icon="calendar" />
        <telerik:SegmentedControlItem Text="Week" Value="week" Icon="clock" />
        <telerik:SegmentedControlItem Text="Month" Value="month" Icon="calendar-date" />
    </Items>
</telerik:RadSegmentedControl>
````

````JavaScript
function pageLoadHandler(sender, args) {
    let segmentedControl = $find('<%= RadSegmentedControl1.ClientID %>'); // Telerik.Web.UI.RadSegmentedControl
    let kendoSegmentedControl = segmentedControl.get_kendoWidget(); // kendo.ui.SegmentedControl
}

Sys.Application.add_load(pageLoadHandler);
````

For more details about referencing Telerik Controls on the client-side, refer to the [Getting Client-Side References]({%slug general-information/get-client-side-reference%}) article.

## Telerik WebForms SegmentedControl API

The WebForms SegmentedControl exposes client-side properties and enums that can be used to interact with the component at runtime.

For a list of available Properties and Enums, refer to the following articles:

- [Properties]({%slug segmentedcontrol/client-side-programming/properties%})
- [Events]({%slug segmentedcontrol/client-side-programming/events%})
- [Enums]({%slug segmentedcontrol/client-side-programming/enums%})

Example of reading and changing the selected value on Page Load.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" SelectedValue="week">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" Icon="calendar" />
        <telerik:SegmentedControlItem Text="Week" Value="week" Icon="clock" />
        <telerik:SegmentedControlItem Text="Month" Value="month" Icon="calendar-date" />
    </Items>
</telerik:RadSegmentedControl>
````

````JavaScript
function pageLoadHandler(sender, args) {
    let segmentedControl = $find('<%= RadSegmentedControl1.ClientID %>');

    let currentValue = segmentedControl.get_selectedValue(); // "week"
    segmentedControl.set_selectedValue("month");
}

Sys.Application.add_load(pageLoadHandler);
````
