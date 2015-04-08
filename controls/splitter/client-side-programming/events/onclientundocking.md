---
title: OnClientUndocking
page_title: OnClientUndocking | UI for ASP.NET AJAX Documentation
description: OnClientUndocking
slug: splitter/client-side-programming/events/onclientundocking
tags: onclientundocking
published: True
position: 16
---

# OnClientUndocking



## 

The __OnClientUndocking__ client-side event handler is called when a sliding pane is about to be undocked. The event can occur because the user clicks on the undock button, or as the result of a a call to a client-side method.

>note The __OnClientUndocking__ event is supported by __RadSlidingPane__ . It takes the place of the depricated OnClientBeforeUndock event.
>


The following two parameters are passed to the event handler:

* __sender__ is the pane that is about to be undocked.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the pane from being undocked.

* __get_cancel()__ returns whether the operation was cancelled.

The following example uses the __OnClientUndocking__ event to show a confirmation dialog:

````ASPNET
	     
	<script type="text/javascript">
		function confirmUndock(sender, eventArgs) {
			eventArgs.set_cancel(!confirm("Are you sure you want to undock " + sender.get_title() + "?"));
		}
	</script>
	<telerik:RadSplitter runat="server" id="RadSplitter1" Orientation="Horizontal" >
	 <telerik:RadPane
	     runat="server"
	     id="RadPane1"
	     Height="80px" >
	   <telerik:RadSlidingZone runat="server" id="RadSlidingZone1" >
	     <telerik:RadSlidingPane
	       runat="server"
	       Title="Sliding Pane 1"
	       id="SlidingPane1"
	       Height="50px"
	       OnClientUndocking="confirmUndock" >
	     </telerik:RadSlidingPane>
	     <telerik:RadSlidingPane
	       runat="server"
	       Title="Sliding Pane 2"
	       id="SlidingPane2"
	       Height="50px"
	       OnClientUndocking="confirmUndock" >
	     </telerik:RadSlidingPane>
	   </telerik:RadSlidingZone>
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" />
	 <telerik:RadPane runat="server" id="RadPane2" Height="90px" >
	 </telerik:RadPane>
	</telerik:RadSplitter> 
				
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientUndocked]({%slug splitter/client-side-programming/events/onclientundocked%})
