---
title: Resizing
page_title: Resizing | UI for ASP.NET AJAX Documentation
description: Resizing
slug: splitter/panes/resizing
tags: resizing
published: True
position: 0
---

# Resizing



When the user drags on a split bar, the panes in the splitter are resized. A number of properties affect the way in which this occurs:

## ResizeMode

Use the __ResizeMode__ property of __RadSplitter__ to define which panes are resized and how the sizes of panes changes. There are three possible resize modes:

* __AdjacentPane__ (default) - only the adjacent panes of the dragged split bar are affected. For example, if the split bar is moved to the left, the left adjacent pane is decreases its width and the right adjacent pane increases its width.

* __EndPane__ - only the pane immediately before the split bar and the rightmost (or bottom) pane are affected. For example, if the split bar is moved to the left, the left adjacent pane decreases its width and the rightmost pane in the splitter increases its width.

* __Proportional__ - the pane immediately before the split bar is resized and all panes that follow the split bar divide up the resulting space according to their current proportions. For example, if the split bar is moved to the left, the left adjacent pane decreases its width and all the panes to the right of the split bar increase their widths to maintain the same relative ratios in their widths.

>note  __ResizeMode__ also affects how other panes are resized when the user[expands or collapses]({%slug splitter/panes/collapsing%})a pane. When the user expands or collapses a pane that appears *before* a split bar, the other panes are resized as if the user had dragged the split bar to resize the pane. If the user expands or collapses a pane that appears *after* a split bar, the effect of the __EndPane__ and __Proportional__ resize modes reverses, so that the first pane or previous panes are resized.
>


## ResizeStep

Use the __ResizeStep__ property of __RadSplitBar__ to restrict resizes to fixed increments. __ResizeStep__ specifies the number of __pixels__ by which a pane can be resized. When the split bar is dragged, the panes "snap" to the nearest multiple of that number of pixels.

## MaxWidth, MinWidth, MaxHeight, and MinHeight

You can define the maximum and the minimum allowed size in __pixels__ of a __RadPane__ control using its __MaxWidth__, __MinWidth__, __MaxHeight__, and __MinHeight__ properties. When a user drags on a split bar, the panes resize until the resize operation would cause a pane to violate one of these limits. At that point, the split bar takes on a different appearance and stops moving.

* When the splitter has a __Vertical__[orientation]({%slug splitter/layout/orientation%}), resizes comply with the __MinWidth__ and __MaxWidth__ properties of the panes.

* When a splitter has a __Horizontal__[orientation]({%slug splitter/layout/orientation%}), resizes comply with the __MinHeight__ and __MaxHeight__ properties of the panes.

## Scrollbars

If the content of a pane exceeds its size, the __RadPane__ control displays scroll bars. You can control which scroll bars are displayed when this happens using the __Scrolling__ property.

* __None__ - __RadPane__ never displays scroll bars. If the content exceeds the size of the pane, it is cropped.

* __X__ - __RadPane__ displays only a horizontal scroll bar when the content exceeds its width. If the content exceeds the height of the pane, it is cropped.

* __Y__ - __RadPane__ displays only a vertical scroll bar when the content exceeds its height.If the content exceeds the width of the pane, it is cropped.

* __Both__ - __RadPane__ displays horizontal and vertical scroll bars when the content exceeds its width and height, respectively.

>note When a __RadPane__ control is displaying scrollbars, the user can scroll its content using the arrow keys.
>


## Locked Panes

Use the __Locked__ property of a __RadPane__ control to lock the pane. When a pane is locked, its size remains unchanged during any of these operations:

* Resize of the splitter.

* Resize of the panes, regardless of the __ResizeMode__.

* Collapse or expansion of other panes in the splitter.

>note The size of a locked pane can be changed only from the client-side API by using the __set_width()__ or __set_height()__ methods of the[RadPane client-side object]({%slug splitter/client-side-programming/radpane-object%}).
>


## LiveResize

By default __RadSplitter__ moves only the split bars when they are dragged. The panes are resized after the user releases the split bar. You can make __RadSplitter__ resize the panes during the drag operation by setting the __LiveResize__ property to __True__.

User experience is improved in when using __LiveResize__, but there is more CPU load associated with real-time redrawing of the content.

## Example

The following example demonstrates how to set some of these properties on __RadSplitter__, __RadPane__ and __RadSplitBar__:

````ASPNET
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



# See Also

 * [Specifying Size]({%slug splitter/layout/specifying-size%})
