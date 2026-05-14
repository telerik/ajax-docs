---
title: Events
page_title: SegmentedControl Client-side Events
description: "Client-side Events of the Telerik WebForms SegmentedControl component."
slug: segmentedcontrol/client-side-programming/events
tags: segmentedcontrol, javascript, events
published: True
position: 2
---

# Events

Client-side Events of the Telerik WebForms SegmentedControl component.

- [Load](#load)
- [Change](#change)

## Load

Fires when the SegmentedControl component and its Kendo widget are fully initialized.

#### Event data

- **sender** - `Telerik.Web.UI.RadSegmentedControl` - The **SegmentedControl** instance that triggered the event.

Example

````JavaScript
function onLoad(sender, args) {
    let segmentedControl = sender; // Telerik.Web.UI.RadSegmentedControl
    let kendoSegmentedControl = segmentedControl.get_kendoWidget(); // kendo.ui.SegmentedControl
}
````

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" SelectedValue="week">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" />
        <telerik:SegmentedControlItem Text="Week" Value="week" />
        <telerik:SegmentedControlItem Text="Month" Value="month" />
    </Items>
    <ClientEvents OnLoad="onLoad" />
</telerik:RadSegmentedControl>
````

##### On Client-side

````JavaScript
function pageLoadHandler() {
    let segmentedControl = $find("<%= RadSegmentedControl1.ClientID %>");

    segmentedControl.add_load(onLoad);
}

Sys.Application.add_load(pageLoadHandler);
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSegmentedControl1.ClientEvents.OnLoad = "onLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadSegmentedControl1.ClientEvents.OnLoad = "onLoad"
End Sub
````

## Change

Fires when the user changes the button selection in the SegmentedControl.

#### Event data

- **sender** - `Telerik.Web.UI.RadSegmentedControl` - The **SegmentedControl** instance that triggered the event.
- **args** - Provides access to the selected value.
  - `args.get_value()` - Returns the `value` of the newly selected segment.

Example

````JavaScript
function onChange(sender, args) {
    let segmentedControl = sender; // Telerik.Web.UI.RadSegmentedControl
    let selectedValue = args.get_value(); // e.g. "week"
}
````

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" SelectedValue="week">
    <Items>
        <telerik:SegmentedControlItem Text="Day" Value="day" />
        <telerik:SegmentedControlItem Text="Week" Value="week" />
        <telerik:SegmentedControlItem Text="Month" Value="month" />
    </Items>
    <ClientEvents OnChange="onChange" />
</telerik:RadSegmentedControl>
````

##### On Client-side

````JavaScript
function pageLoadHandler() {
    let segmentedControl = $find("<%= RadSegmentedControl1.ClientID %>");

    segmentedControl.add_change(onChange);
}

Sys.Application.add_load(pageLoadHandler);
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSegmentedControl1.ClientEvents.OnChange = "onChange";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadSegmentedControl1.ClientEvents.OnChange = "onChange"
End Sub
````

## See Also

- [Properties]({%slug segmentedcontrol/client-side-programming/properties%})
- [Enums]({%slug segmentedcontrol/client-side-programming/enums%})
