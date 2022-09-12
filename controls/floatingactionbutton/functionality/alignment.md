---
title: Alignment
page_title: Alignment - RadFloatingActionButton
description: Check our Web Forms article about the Alignment of RadFloatingActionButton.
slug: floatingactionbutton/functionality/alignment
published: True
position: 1
---

# Alignment

The RadFloatingActionButton exposes the `Align` and `PositionMode` properties and the `AlignOffsetSettings` inner tag as configuration options. These three options work together and allow you to position the FloatingActionButton component precisely as per the application requirements.

Test the different positioning options in the **[Alignment Demo for the RadFloatingActionButton](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/alignment/defaultcs.aspx)**

## Align

The `Align` property specifies the position of the FloatingActionButton relative to its container. When using this option it is important to ensure that the FloatingActionButton container has a CSS position other than static and allows overflow content. The available alignment options are:

 - "TopStart": positions the button at top left corner of the container.
 - "TopCenter": positions the button at top center of the container.
 - "TopEnd": positions the button at top right corner of the container.
 - "MiddleStart": positions the button at middle left of the container.
 - "MiddleEnd": positions the button at middle right of the container.
 - "BottomStart": positions the button at bottom left corner of the container.
 - "BottomCenter": positions the button at top center of the container.
 - "BottomEnd": (Default Value) positions the button at bottom right corner of the container.

>note In Right-To-Left (RTL) mode of Control the the Start positions will be processed as right instead of left, and respectively End positions will align to the left instead of right. E.g Align="TopStart" in RTL mode will result in button aligned to the top right corner.

`Align` works in conjunction with `PositionMode` and the `AlignOffset`.

>note When using align, make sure the FloatingActionButton container has css position other than "static".

## PositionMode

The `PositionMode` property specifies the CSS position of the FloatingActionButton in the document. You can position the RadFloatingActionButton relative to the closest ancestor or position it relative to the viewport. The `PositionMode` can be set to:

 - "Absolute" - positions the button relative to the nearest positioned ancestor.
 - "Fixed" - (Default Value) positions the button relative to the viewport. 


## AlignOffsetSettings

The `AlignOffsetSettings` configuration option specifies the horizontal and vertical offset of the RadFloatingActionButton relative to the Align configuration defined.

````ASPX
<telerik:RadFloatingActionButton runat="server" ID="RadFloatingActionButton1" Text="Add to Queue" PositionMode="Absolute" Align="TopStart">
    <AlignOffsetSettings X="50" Y="50" />
</telerik:RadFloatingActionButton>
````

# See Also

 * [Alignment Demo for the RadFloatingActionButton](https://demos.telerik.com/aspnet-ajax/floatingactionbutton/alignment/defaultcs.aspx)


