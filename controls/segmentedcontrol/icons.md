---
title: Icons
page_title: SegmentedControl Icons
description: "Configure icons and text labels for the individual segment buttons of the Telerik WebForms SegmentedControl."
slug: segmentedcontrol/icons
tags: segmentedcontrol, icons
published: True
position: 4
---

# Icons

Each segment button in the SegmentedControl can display a text label, an icon, or both. Use the `Icon`, `IconClass`, and `Text` properties on each `SegmentedControlItem` to control the button's appearance.

## Text Labels

Set the `Text` property on each item to show a visible label inside the button.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server">
    <Items>
        <telerik:SegmentedControlItem Text="Option 1" Value="option1" />
        <telerik:SegmentedControlItem Text="Option 2" Value="option2" />
        <telerik:SegmentedControlItem Text="Option 3" Value="option3" />
    </Items>
</telerik:RadSegmentedControl>
````

## Icons from the Kendo UI Theme

Use the `Icon` property to render a named icon from the built-in Kendo UI icon set inside a segment button. When no `Text` is provided, the item's `Value` is used as the button's accessible label.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server">
    <Items>
        <telerik:SegmentedControlItem Icon="bold" Value="bold" />
        <telerik:SegmentedControlItem Icon="italic" Value="italic" />
        <telerik:SegmentedControlItem Icon="underline" Value="underline" />
    </Items>
</telerik:RadSegmentedControl>
````

## Icons with Text

Combine `Icon` and `Text` to display both inside the same segment button.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server" SelectedValue="home">
    <Items>
        <telerik:SegmentedControlItem Text="Settings" Icon="gear" Value="settings" />
        <telerik:SegmentedControlItem Text="Home" Icon="home" Value="home" />
        <telerik:SegmentedControlItem Text="Profile" Icon="user" Value="profile" />
    </Items>
</telerik:RadSegmentedControl>
````

## Custom Icon Classes

Use `IconClass` to append one or more CSS class names to the icon element. This allows you to apply custom styles or integrate icons from external icon libraries.

````ASP.NET
<telerik:RadSegmentedControl ID="RadSegmentedControl1" runat="server">
    <Items>
        <telerik:SegmentedControlItem Text="Settings" Icon="gear" IconClass="custom-icon" Value="settings" />
        <telerik:SegmentedControlItem Text="Home" Icon="home" Value="home" />
    </Items>
</telerik:RadSegmentedControl>
````

## See Also

* [Server-side Properties]({%slug segmentedcontrol/server-side-programming/properties%})
* [Getting Started with the Telerik WebForms SegmentedControl]({%slug segmentedcontrol/getting-started%})
