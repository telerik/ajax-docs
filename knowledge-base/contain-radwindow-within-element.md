---
title: Containing a RadWindow within an Element
description: Learn how to contain a RadWindow within a specific element using the RestrictionZoneID property.
type: how-to
page_title: How to Contain a RadWindow within an Element
slug: contain-radwindow-within-element
tags: radwindow, asp.net ajax, containment, restriction zone
res_type: kb
---
## Environment
| Property | Value |
| --- | --- |
| Product | RadWindow for ASP.NET AJAX |
| Version | 2024.1.131 |

## Description
I would like to know how to contain a RadWindow within a specific element so that the window cannot leave that area. I want to achieve the same behavior as 'KeepInScreenBounds' but for an element, not the screen.

## Solution
To achieve this behavior, you can use the `RestrictionZoneID` property of the RadWindow. This property allows you to specify the ID of an HTML element within which the RadWindow will be constrained. Here's how you can set it up:

1. Create a container element, such as a `<div>`, with the desired dimensions and a unique ID:
```html
<div id="radWindowContainer" style="width: 500px; height: 500px; border: 1px solid #000;">
    <!-- Your container element -->
</div>
```

2. Use the `RestrictionZoneID` property of the RadWindow to specify the ID of the container element:
```html
<telerik:RadWindowManager ID="RadWindowManager1" runat="server">
    <Windows>
        <telerik:RadWindow ID="RadWindow1" runat="server" NavigateUrl="default2.aspx" Title="My Window" VisibleOnPageLoad="true" VisibleStatusbar="false"
            RestrictionZoneID="radWindowContainer" Width="300" Height="200">
        </telerik:RadWindow>
    </Windows>
</telerik:RadWindowManager>
```

In this setup, the `radWindowContainer` `<div>` acts as the boundary for the RadWindow. The `RestrictionZoneID` property of the RadWindow is set to the ID of the container element (`radWindowContainer`), ensuring that the window stays within the confines of this div.

Now, the RadWindow will be contained within the specified element and cannot leave that area, providing the functionality you're looking for.

## Notes
- Make sure to adjust the dimensions and styles of the container element (`radWindowContainer`) to fit your specific requirements.
- The `RestrictionZoneID` property can only be used with elements that have a defined size, such as a `<div>` with a specified width and height.
 
