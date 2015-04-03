---
title: OnClientResizing
page_title: OnClientResizing | UI for ASP.NET AJAX Documentation
description: OnClientResizing
slug: splitter/client-side-programming/events/onclientresizing
tags: onclientresizing
published: True
position: 4
---

# OnClientResizing



## 

The __OnClientResizing__ client-side event handler is called when a control is about to be resized. The resize can occur because of a user action (such as dragging a split bar or resizing the window that contains a splitter), or as the result of a a call to a client-side method.

>note The __OnClientResizing__ event is supported by __RadSplitter__ , __RadPane__ , and __RadSlidingPane__ . It takes the place of the depricated OnClientBeforeResize event.
>


On __RadPane__ and __RadSlidingPane__, the following two parameters are passed to the event handler:

* __sender__ is the pane that is about to be resized.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the pane from being resized.

* __get_cancel()__ returns whether the resize operation was cancelled.

* __get_delta()__ returns the number of pixels by which the pane's size is changing. Negative values mean the pane is getting smaller; positive values mean the pane is getting larger.

* __get_resizeDirection()__ returns a value indicating which side of the pane is being resized:

* 1: The side on the top or left of the pane (depending on the splitter orientation).

* 2: The side on the bottom or right of the pane (depending on the splitter orientation).

>note Because sliding panes have only a single resizable border, for __RadSlidingPane__ , __get_resizeDirection()__ returns null.
>


On __RadSplitter__ the following two parameters are passed to the event handler:

* __sender__ is the splitter control that is being resized.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the splitter from being resized.

* __get_cancel()__ returns whether the resize operation was cancelled.

* __get_newHeight()__ returns the new height of the splitter, or null if the height is not changing.

* __get_newWidth()__ returns the new width of the splitter, or null if the width is not changing.

The following example uses the __OnClientResizing__ event to prevent resizes that decrease the size of a pane:

````JavaScript
	     
	<script type="text/javascript">
		function preventDecrease(sender, eventArgs) {
			if (eventArgs.get_delta() < 0)
				eventArgs.set_cancel(true);
		}
	</script>
	<telerik:RadSplitter runat="server" id="RadSplitter1" >
	 <telerik:RadPane runat="server" id="RadPane1" Height="80px"  >
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
	 <telerik:RadPane runat="server"
	     id="RadPane2"
	     Height="20px"
	     OnClientResizing="preventDecrease">
	   This Pane can only grow.
	 </telerik:RadPane>
	  <telerik:RadSplitBar runat="server" id="RadSplitBar2" CollapseMode="Both"  />
	 <telerik:RadPane runat="server" id="RadPane3" Height="90px" >
	 </telerik:RadPane>
	</telerik:RadSplitter> 
				
````



__OnClientResizing__

````ASPNET
	     
	<script type="text/javascript">
		function testHandler(sender, eventArgs) {
			var hChange = "";
			var wChange = "";
			if (eventArgs.get_newHeight()) {
				if (sender.get_height() != eventArgs.get_newHeight())
					hChange = "height from " + sender.get_height() +
	                 " to " + eventArgs.get_newHeight();
			}
			if (eventArgs.get_newWidth()) {
				if (sender.get_width() != eventArgs.get_newWidth())
					wChange = "width from " + sender.get_width() +
	                 " to " + eventArgs.get_newWidth();
			}
			if (hChange.length > 0) {
				if (wChange.length > 0)
					eventArgs.set_cancel(
	            !confirm("Do you want to allow the change of " +
	                     hChange + " and " + wChange + "?"));
				else
					eventArgs.set_cancel(
	            !confirm("Do you want to allow the change of " +
	                     hChange + "?"));
			}
			else if (wChange.length > 0)
				eventArgs.set_cancel(
	            !confirm("Do you want to allow the change of " +
	                     wChange + "?"));
		}
	</script>
	<telerik:RadSplitter
	  runat="server"
	  id="RadSplitter1"
	  Width="90%"
	  Height="90%"
	  OnClientResizing="testHandler">
	 <telerik:RadPane runat="server" id="RadPane1" Height="80px"   >
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
	 <telerik:RadPane runat="server" id="RadPane2" Height="90px">
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar2" CollapseMode="Both"  />
	 <telerik:RadPane runat="server" id="RadPane3" >
	 </telerik:RadPane>
	</telerik:RadSplitter> 
				
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSplitter Object]({%slug splitter/client-side-programming/radsplitter-object%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientResized]({%slug splitter/client-side-programming/events/onclientresized%})
