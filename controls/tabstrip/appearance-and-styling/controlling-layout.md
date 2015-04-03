---
title: Controlling Layout
page_title: Controlling Layout | UI for ASP.NET AJAX Documentation
description: Controlling Layout
slug: tabstrip/appearance-and-styling/controlling-layout
tags: controlling,layout
published: True
position: 8
---

# Controlling Layout



## Orientation

Use the __Orientation__ property to control the basic orientation of the tab strip:

* When __Orientation__ is "HorizontalTop" (the default), tabs appear to extend from below. When tabs are selected, any child tabs appear in a row below the row containing the parent tab: 

* When __Orientation__ "HorizontalBottom", tabs appear to extend from above. When tabs are selected, any child tabs appear in a row above the row containing the parent tab: !["Horizontal Bottom" Orientation](images/tabstrip_orientationhb.png)

* When __Orientation__ is "VerticalLeft", the tabs appear to extend from the right. When tabs are selected, any child tabs appear in a stack below the entire stack of parent tabs: !["VerticalLeft" Orientation](images/tabstrip_orientationvl.png)

* When __Orientation__ is "VerticalRight", the tabs appear to extend from the left. When tabs are selected, any child tabs appear in a stack below the entire stack of parent tabs: 

## Breaks

You can break up the layout of tabs in a tab strip into groups by using the __IsBreak__ property of the __RadTab__ objects in the tab strip.

When you set the __IsBreak__ property to __True__, the tab strip adds a break between that tab and the next tab in the tab strip. For tab strips with a horizontal orientation, this means that the remaining tabs appear on another row:

![Horizontal break](images/tabstrip_breakhorizontal.png)

For tab strips with a vertical orientation, a gap appears between the tabs, but they remain in the same stack:

![Vertical break](images/tabstrip_breakvertical.png)

When the tab strip includes tabs with the __IsBreak__ property set to __True__, you can use the __ReorderTabsOnSelect__ property to ensure that the group that contains the selected tab is always on the bottom. This happens for both horizontal orientations:

![Reorder tabs horizontally](images/tabstrip_reordertabsonselecthorizontal.png)

and for vertical orientations:

![Reorder tabs vertically](images/tabstrip_reordertabsonselectvertical.png)

## Separators

You can also break up the layout of the tabs in a tab strip by using separators.Separators are tabs that have the __IsSeparator__ property set to __True__. They display their text, but have an appearance that is distinct from the other tabs in the tab strip, and cannot be selected:

In a tab strip with a horizontal orientation, the separator divides the tabs into groups, but leaves them on the same row:

![Horizontal separator tabs](images/tabstrip_separatortabsh.png)

>tip In a horizontal tab strip, if you set the text of a separator to an empty string, it has no visual effect. To create a gap with no text, set the separator __Text__ property to "&nbsp;".
>


In a tab strip with a vertical orientation, the separator appears on its own row:

![Vertical separator tabs](images/tabstrip_separatortabsv.png)

>note In a vertical grid, if you set the text of a separator to an empty string, the tab strip looks the same as if the previous tab had __IsBreak__ set to __True__ .
>


You can add a separator with no text to the end of the tabs in a vertical tab strip to provide a gap between the parent tabs and the child tabs:

![Separator to the end](images/tabstrip_separatortabsvend.png)

# See Also

 * [Controlling Appearance]({%slug tabstrip/appearance-and-styling/controlling-appearance%})

 * [Structure]({%slug tabstrip/structure%})

 * [Overview]({%slug tabstrip/tabs/overview%})

 * [RTL support]({%slug tabstrip/appearance-and-styling/rtl-support%})
