---
title: Dock Zone Orientation
page_title: Dock Zone Orientation | UI for ASP.NET AJAX Documentation
description: Dock Zone Orientation
slug: dock/getting-started/dock-zone-orientation
tags: dock,zone,orientation
published: True
position: 2
---

# Dock Zone Orientation



__RadDockZone__ controls can lay out their children horizontally (by rows) or vertically (in a single column).You can set the orientation using the __Orientation__ property. By default the value of the __Orientation__ property is "Vertical". The __Orientation__ property interacts with the __Height__ property and the __FitDocks__ property, as shown below.

## Vertical Orientation

When the value of the __Orientation__ property is "Vertical" (the default), __RadDock__ controls are docked in a single column.

## Height property (Vertical Orientation)

If the __Height__ property is set, scrollbars appear in the __RadDockZone__ if it cannot fit all docked __RadDock__ controls:
>caption 

![](images/dock-verticalfixedheight.png)

If the __Height__ property is not set, __RadDockZone__ resizes vertically to fit all docked __RadDock__ controls:
>caption 

![](images/dock-verticalnoheight.png)

## FitDocks property (Vertical Orientation)

If the __FitDocks__ property is __True__ (the default) docked controls are widened to fit the __Width__ of the __RadDockZone__:
>caption 

![](images/dock-fitdockstrue.png)

If the __FitDocks__ property is __False__, docked controls retain their own __Width__:
>caption 

![](images/dock-fitdocksfalse.png)

If the docked controls are wider than the __RadDockZone__, the docking zone expands to accommodate the docked controls.

## Horizontal Orientation

When the value of the __Orientation__ property is "Horizontal", RadDock controls are docked in rows. The RadDock controls are ordered horizontally until they reach the __RadDockZone__ width, after which they are ordered horizontally on the next row.

__Height property (Horizontal Orientation)__

If the __Height__ property is set, Scrollbars appear in __RadDockZone__ if it cannot fit all the rows of __RadDock__ controls:
>caption 

![](images/dock-horizontalfixedheight.png)

If the __Height__ property is not set, __RadDockZone__ resizes vertically to fit all the rows of docked __RadDock__ controls:
>caption 

![](images/dock-horizontalnoheight.png)



## FitDocks property (Horizontal Orientation)

The __FitDocks__ property has no effect if the __RadDockZone__ has a horizontal orientation.

# See Also

 * [Drag And Drop]({%slug dock/getting-started/drag-and-drop%})
