---
title: OnClientDocking
page_title: OnClientDocking - RadSplitter
description: Check our Web Forms article about OnClientDocking.
slug: splitter/client-side-programming/events/onclientdocking
tags: onclientdocking
published: True
position: 13
---

# OnClientDocking

The **OnClientDocking** client-side event handler is called when a sliding pane is about to be docked. The event can occur because the user clicks on the dock button, on page load, or as the result of a a call to a client-side method.

>note The **OnClientDocking** event is supported by **RadSlidingPane** . It takes the place of the deprecated OnClientBeforeDock event.

The following two parameters are passed to the event handler:

* **sender** is the pane that is about to be docked.
* **eventArgs** has the following methods:
	* **set_cancel()** lets you prevent the pane from being docked.
	* **get_cancel()** returns whether the operation was cancelled.

The following example uses the **OnClientDocking** event to show a confirmation dialog:

````ASP.NET	 
<script type="text/javascript">
	function confirmDock(sender, eventArgs) {
		eventArgs.set_cancel(!confirm("Are you sure you want to dock " + sender.get_title() + "?"));
	}
</script>
<telerik:RadSplitter RenderMode="Lightweight" runat="server" id="RadSplitter1" Orientation="Horizontal" >
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
	   OnClientDocking="confirmDock" >
	 </telerik:RadSlidingPane>
	 <telerik:RadSlidingPane
	   runat="server"
	   Title="Sliding Pane 2"
	   id="SlidingPane2"
	   Height="50px"
	   OnClientBeforeDock="confirmDock" >
	 </telerik:RadSlidingPane>
   </telerik:RadSlidingZone>
 </telerik:RadPane>
 <telerik:RadSplitBar runat="server" id="RadSplitBar1" />
 <telerik:RadPane runat="server" id="RadPane2" Height="90px" >
 </telerik:RadPane>
</telerik:RadSplitter> 			
````

## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientDocking]({%slug splitter/client-side-programming/events/onclientdocking%})

 * [OnClientUndocking]({%slug splitter/client-side-programming/events/onclientundocking%})
