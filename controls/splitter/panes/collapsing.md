---
title: Collapsing
page_title: Collapsing | RadSplitter for ASP.NET AJAX Documentation
description: Collapsing
slug: splitter/panes/collapsing
tags: collapsing
published: True
position: 1
---

# Collapsing

You can configure the split bars of a **RadSplitter** control to allow the adjacent panes to be collapsed and (once collapsed) expanded.

## Setting CollapseMode

The **CollapseMode** property of the **RadSplitBar** control specifies whether it includes 0, 1, or 2 collapse buttons. Each collapse button contains a small arrow pointing to the pane it controls. When the user clicks the collapse button, the adjacent pane in the direction of the arrow is collapsed (resized to nothing). After a split bar collapses an adjacent pane, the collapse button is replaced by an expand button, which contains an arrow that points in the opposite direction (where the expanded pane will appear). Clicking on the expand button restores the collapsed pane.

>note A split bar can show only one expand button at a time. As a result, when an adjacent pane is collapsed, it does not show another collapse button, even if it showed two collapse buttons before collapsing the adjacent pane.

The CollapseMode property can be set to any of the following values:

* **None** - The split bar does not display any collapse buttons. The adjacent panes can only be collapsed by a split bar on the other side.

* **Forward** - The split bar displays a collapse button that points to the previous pane. When the user clicks this button, the pane immediately to the left or above the split bar is collapsed. The remaining panes to the right or below the split bar resize according to the [ResizeMode]({%slug splitter/panes/resizing%}) property.

* **Backward** - This split bar displays a collapse button that points to the next pane. When the user clicks this button, the pane immediately to the right or below the split bar is collapsed. The remaining panes to the left or above the split bar resize according to the [ResizeMode]({%slug splitter/panes/resizing%}) property.

* **Both** - The split bar displays two collapse buttons, one for the previous and one for the next pane.

>note If a pane is **locked** , it is not collapsed, even if the user clicks the collapse button of an adjacent split bar.

## Specifying the initial state of panes

By default, all panes start out in their expanded state when the page loads for the first time. You can make a pane appear initially in the collapsed state by setting its **Collapsed** property to **True**.

When a pane starts out as collapsed, the adjacent split bar shows an expand button. If the pane lies between two adjacent split bars, both of which have their **CollapseMode** property set so that they can collapse the pane, the split bar that appears *after* the pane is the one that gets its collapse buttons changed to an expand button.

## Example

The following example demonstrates how to set the **CollapseMode** property of the **RadSplitBar** controls and the **Collapsed** property of the **RadPane** controls:

````ASP.NET	 
<telerik:RadSplitter runat="server" id="RadSplitter1">
 <telerik:RadPane ID="RadPane1" runat="server" >
	Left Pane
 </telerik:RadPane>
 <telerik:RadSplitBar ID="RadSplitBar1" runat="server"
   CollapseMode="Forward" />
 <telerik:RadPane ID="RadPane2" runat="server" Scrolling="None"  >
   Left Middle Pane
 </telerik:RadPane>
 <telerik:RadSplitBar ID="RadSplitter2" runat="server"
   CollapseMode="Both"/>
 <telerik:RadPane ID="RadPane4" runat="server" Collapsed="True">
   Right Middle Pane
 </telerik:RadPane>
 <telerik:RadSplitBar ID="RadSplitBar3" runat="server"
   CollapseMode="Backward" />
 <telerik:RadPane ID="RadPane5" runat="server">
   Right Pane
 </telerik:RadPane>
</telerik:RadSplitter>			
````


