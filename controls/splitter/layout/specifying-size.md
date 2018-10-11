---
title: Specifying Size
page_title: Specifying Size | RadSplitter for ASP.NET AJAX Documentation
description: Specifying Size
slug: splitter/layout/specifying-size
tags: specifying,size
published: True
position: 2
---

# Specifying Size

When configuring the size of splitters and the panes that they contain, you can use one of the three possible value types:

* **Absolute Size** - When you set the **Width** or **Height** property to an integer value or a string that ends in "px", the size of the splitter or initial size of the pane is set absolutely:
	* Width="500"
	* Height="500px"

* **Percent Size** - When you set the **Width** or **Height** property to a string that ends in "%", the size of the splitter or pane is set to a percentage of the size of its container:
	* Width="80%"
	* Height="60%"

* **Free size** - When you do not set the **Width** or **Height** property, the size of the splitter or pane is calculated automatically. Use this option when you don't need absolute size control or you want a pane to allocate all of the free size when the splitter is resized:
	* When you use free size on a splitter control, the splitter size is calculated automatically from the browser (or container) when the control is rendered.
	* When you use free size on a pane control, the splitter calculates the pane size based on what space is remaining after allocating space to absolutely-sized or percent-sized panes. If all panes are free-sized, then they all start initially the same size.

>tip When using **Percent Size** on a splitter's **Height** property, the **HeightOffset** property specifies a number of pixels that are subtracted from the splitter height.


You can also set the width of the split bars by setting the **SplitBarsSize** property. This property can only be set as an absolute values.

For a live example showing the effects of various combinations of absolute, percent, and free size settings, see [Initial Size](http://demos.telerik.com/aspnet-ajax/Splitter/Examples/InitialSize/DefaultCS.aspx).

## See Also

 * [Filling the Entire Page]({%slug splitter/layout/filling-the-entire-page%})

 * [Resizing]({%slug splitter/panes/resizing%})
