---
title: OnClientCollapsing
page_title: OnClientCollapsing | RadSplitter for ASP.NET AJAX Documentation
description: OnClientCollapsing
slug: splitter/client-side-programming/events/onclientcollapsing
tags: onclientcollapsing
published: True
position: 7
---

# OnClientCollapsing

The **OnClientCollapsing** Client-Side event handler is called when a pane is about to be collapsed. The collapse can occur because the user clicks on a collapse button, or as the result of a call to a client-side method.

>note The **OnClientCollapsing** event is supported by **RadPane** and **RadSlidingPane** . It takes the place of the depricated OnClientBeforeCollapse event.

The following two parameters are passed to the event handler:

* **sender** is the pane that is about to be collapsed.
* **eventArgs** has the following methods:
	* **set_cancel()** lets you prevent the pane from being collapsed.
	* **get_cancel()** returns whether the operation was cancelled.

The following example uses the **OnClientCollapsing** event to show a confirmation dialog:

````ASP.NET	 
<script type="text/javascript">
	function confirmCollapse(sender, eventArgs) {
		eventArgs.set_cancel(!confirm("Are you sure you want to close " + sender.get_id() + "?"));
	}
</script>
<telerik:RadSplitter runat="server" id="RadSplitter1" Orientation="Horizontal" >
 <telerik:RadPane
	 runat="server"
	 id="RadPane1"
	 Height="80px"
	OnClientCollapsing="confirmCollapse" >
   <telerik:RadSlidingZone runat="server" id="RadSlidingZone1" >
	 <telerik:RadSlidingPane
	   runat="server"
	   Title="Sliding Pane 1"
	   id="SlidingPane1"
	   Height="50px"
	   OnClientCollapsing="confirmCollapse" >
	 </telerik:RadSlidingPane>
	 <telerik:RadSlidingPane
	   runat="server"
	   Title="Sliding Pane 2"
	   id="SlidingPane2"
	   Height="50px"
	   OnClientCollapsing="confirmCollapse" >
	 </telerik:RadSlidingPane>
   </telerik:RadSlidingZone>
 </telerik:RadPane>
 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
 <telerik:RadPane
   runat="server"
   id="RadPane2"
   Height="90px"
   OnClientCollapsing="confirmCollapse" >
 </telerik:RadPane>
</telerik:RadSplitter> 			
````



## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientExpanding]({%slug splitter/client-side-programming/events/onclientexpanding%})

 * [OnClientCollapsed]({%slug splitter/client-side-programming/events/onclientcollapsed%})
