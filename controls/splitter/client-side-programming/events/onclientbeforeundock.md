---
title: OnClientBeforeUndock
page_title: OnClientBeforeUndock | RadSplitter for ASP.NET AJAX Documentation
description: OnClientBeforeUndock
slug: splitter/client-side-programming/events/onclientbeforeundock
tags: onclientbeforeundock
published: False
position: 15
---

# OnClientBeforeUndock



## 

>caution  **OnClientBeforeUndock** Client-Side event has been deprecated. Please, use the[OnClientUndocking]({%slug splitter/client-side-programming/events/onclientundocking%})instead.
>


The **OnClientBeforeUndock** client-side event handler is called when a sliding pane is about to be undocked. The event can occur because the user clicks on the undock button, or as the result of a a call to a client-side method.

>note The **OnClientBeforeUndock** event is supported by **RadSlidingPane** .
>


The following two parameters are passed to the event handler:

* **sender** is the pane that is about to be undocked.

* **eventArgs** has the following methods:

* **set_cancel()** lets you prevent the pane from being undocked.

* **get_cancel()** returns whether the operation was cancelled.

The following example uses the **OnClientBeforeUndock** event to show a confirmation dialog:

````ASPNET
	     
	<script type="text/javascript">
		function confirmUndock(sender, eventArgs)
	    {
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
	       OnClientBeforeUndock="confirmUndock" >
	     </telerik:RadSlidingPane>
	     <telerik:RadSlidingPane
	       runat="server"
	       Title="Sliding Pane 2"
	       id="SlidingPane2"
	       Height="50px"
	       OnClientBeforeUndock="confirmUndock" >
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

 * [OnClientDocking]({%slug splitter/client-side-programming/events/onclientdocking%})

 * [OnClientUndocked]({%slug splitter/client-side-programming/events/onclientundocked%})
