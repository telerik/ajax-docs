---
title: Resizing
page_title: Resizing | RadSplitter for ASP.NET AJAX Documentation
description: Resizing
slug: splitter/panes/resizing
tags: resizing
published: True
position: 0
---

# Resizing

When the user drags on a split bar, the panes in the splitter are resized. A number of properties affect the way in which this occurs:

## ResizeMode

Use the **ResizeMode** property of **RadSplitter** to define which panes are resized and how the sizes of panes changes. There are three possible resize modes:

* **AdjacentPane** (default) - only the adjacent panes of the dragged split bar are affected. For example, if the split bar is moved to the left, the left adjacent pane is decreases its width and the right adjacent pane increases its width.

* **EndPane** - only the pane immediately before the split bar and the rightmost (or bottom) pane are affected. For example, if the split bar is moved to the left, the left adjacent pane decreases its width and the rightmost pane in the splitter increases its width.

* **Proportional** - the pane immediately before the split bar is resized and all panes that follow the split bar divide up the resulting space according to their current proportions. For example, if the split bar is moved to the left, the left adjacent pane decreases its width and all the panes to the right of the split bar increase their widths to maintain the same relative ratios in their widths.

>tip  **ResizeMode** also affects how other panes are resized when the user [expands or collapses]({%slug splitter/panes/collapsing%}) a pane. When the user expands or collapses a pane that appears *before* a split bar, the other panes are resized as if the user had dragged the split bar to resize the pane. If the user expands or collapses a pane that appears *after* a split bar, the effect of the **EndPane** and **Proportional** resize modes reverses, so that the first pane or previous panes are resized.

## ResizeStep

Use the **ResizeStep** property of **RadSplitBar** to restrict resizes to fixed increments. **ResizeStep** specifies the number of **pixels** by which a pane can be resized. When the split bar is dragged, the panes "snap" to the nearest multiple of that number of pixels.

## MaxWidth, MinWidth, MaxHeight, and MinHeight

You can define the maximum and the minimum allowed size in **pixels** of a **RadPane** control using its **MaxWidth**, **MinWidth**, **MaxHeight**, and **MinHeight** properties. When a user drags on a split bar, the panes resize until the resize operation would cause a pane to violate one of these limits. At that point, the split bar takes on a different appearance and stops moving.

* When the splitter has a **Vertical** [orientation]({%slug splitter/layout/orientation%}), resizes comply with the **MinWidth** and **MaxWidth** properties of the panes.

* When a splitter has a **Horizontal** [orientation]({%slug splitter/layout/orientation%}), resizes comply with the **MinHeight** and **MaxHeight** properties of the panes.

## Scrollbars

If the content of a pane exceeds its size, the **RadPane** control displays scroll bars. You can control which scroll bars are displayed when this happens using the **Scrolling** property.

* **None** - **RadPane** never displays scroll bars. If the content exceeds the size of the pane, it is cropped.

* **X** - **RadPane** displays only a horizontal scroll bar when the content exceeds its width. If the content exceeds the height of the pane, it is cropped.

* **Y** - **RadPane** displays only a vertical scroll bar when the content exceeds its height.If the content exceeds the width of the pane, it is cropped.

* **Both** - **RadPane** displays horizontal and vertical scroll bars when the content exceeds its width and height, respectively.

>tip When a **RadPane** control is displaying scrollbars, the user can scroll its content using the arrow keys.

## Locked Panes

Use the **Locked** property of a **RadPane** control to lock the pane. When a pane is locked, its size remains unchanged during any of these operations:

* Resize of the splitter.

* Resize of the panes, regardless of the **ResizeMode**.

* Collapse or expansion of other panes in the splitter.

>tip The size of a locked pane can be changed only from the client-side API by using the **set_width()** or **set_height()** methods of the [RadPane client-side object]({%slug splitter/client-side-programming/radpane-object%}).

## LiveResize

By default **RadSplitter** moves only the split bars when they are dragged. The panes are resized after the user releases the split bar. You can make **RadSplitter** resize the panes during the drag operation by setting the **LiveResize** property to **True**.

User experience is improved in when using **LiveResize**, but there is more CPU load associated with real-time redrawing of the content.

## Example

The following example demonstrates how to set some of these properties on **RadSplitter**, **RadPane** and **RadSplitBar**:

````ASP.NET
<telerik:radsplitter runat="server" id="RadSplitter1" resizemode="Proportional" orientation="Horizontal">  
	<telerik:RadPane runat="server" ID="TopPane" Scrolling="Both" MinHeight="30" MaxHeight="300">    
		Top pane<br />    
		More content here to demonstrate    the scrolling functionality of this pane<br />    
		Even more content...  
	</telerik:RadPane>  
	<telerik:RadSplitBar runat="server" ID="RadSplitBar1" ResizeStep="10" Collapsemode="Backward" />  
	<telerik:RadPane runat="server" id="MiddlePane">    
		Middle pane  
	</telerik:RadPane>  
	<telerik:RadSplitBar runat="server" ID="RadSplitBar2" CollapseMode="Forward" />  
	<telerik:RadPane runat="server" ID="BottomPane" MinHeight="30">    
		Bottom pane  
	</telerik:RadPane>
</telerik:radsplitter>
````


## See Also

 * [Specifying Size]({%slug splitter/layout/specifying-size%})
