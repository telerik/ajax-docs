---
title: OnClientExpanding
page_title: OnClientExpanding | RadSplitter for ASP.NET AJAX Documentation
description: OnClientExpanding
slug: splitter/client-side-programming/events/onclientexpanding
tags: onclientexpanding
published: True
position: 10
---

# OnClientExpanding

The **OnClientExpanding** client-side event handler is called when a pane is about to be expanded. The expansion can occur because of a user action such as clicking an expand button or sliding zone tab, on page load, or as the result of a a call to a client-side method.

>tip The **OnClientExpanding** event is supported by **RadPane** and **RadSlidingPane** . It takes the place of the deprecated OnClientBeforeExpand event.

The following two parameters are passed to the event handler:

* **sender** is the pane that is about to be expanded.
* **eventArgs** has the following methods:
	* **set_cancel()** lets you prevent the pane from being expanded.
	* **get_cancel()** returns whether the operation was cancelled.

The following example uses the **OnClientExpanding** event to show a confirmation dialog:

````ASP.NET	 
<script type="text/javascript">
	function confirmExpand(sender, eventArgs)
	{
		eventArgs.set_cancel(!confirm("Are you sure you want to open " + sender.get_id() + "?"));
	}
</script>
<telerik:RadSplitter RenderMode="Lightweight" runat="server" id="RadSplitter1" Orientation="Horizontal" >
 <telerik:RadPane
	 runat="server"
	 id="RadPane1"
	 Height="80px"
	OnClientBeforeExpand="confirmExpand" >
   <telerik:RadSlidingZone runat="server" id="RadSlidingZone1" >
	 <telerik:RadSlidingPane
	   runat="server"
	   Title="Sliding Pane 1"
	   id="SlidingPane1"
	   Height="50px"
	   OnClientBeforeExpand="confirmExpand" >
	 </telerik:RadSlidingPane>
	 <telerik:RadSlidingPane
	   runat="server"
	   Title="Sliding Pane 2"
	   id="SlidingPane2"
	   Height="50px"
	   OnClientBeforeExpand="confirmExpand" >
	 </telerik:RadSlidingPane>
   </telerik:RadSlidingZone>
 </telerik:RadPane>
 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
 <telerik:RadPane
   runat="server"
   id="RadPane2"
   Height="90px"
   OnClientBeforeExpand="confirmExpand" >
 </telerik:RadPane>
</telerik:RadSplitter> 			
````



## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientCollapsing]({%slug splitter/client-side-programming/events/onclientcollapsing%})

 * [OnClientExpanded]({%slug splitter/client-side-programming/events/onclientexpanded%})
