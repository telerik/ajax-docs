---
title: OnClientCollapsing
page_title: OnClientCollapsing | UI for ASP.NET AJAX Documentation
description: OnClientCollapsing
slug: splitter/client-side-programming/events/onclientcollapsing
tags: onclientcollapsing
published: True
position: 7
---

# OnClientCollapsing



## 

The __OnClientCollapsing__ Client-Side event handler is called when a pane is about to be collapsed. The collapse can occur because the user clicks on a collapse button, or as the result of a call to a client-side method.

>note The __OnClientCollapsing__ event is supported by __RadPane__ and __RadSlidingPane__ . It takes the place of the depricated OnClientBeforeCollapse event.
>


The following two parameters are passed to the event handler:

* __sender__ is the pane that is about to be collapsed.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the pane from being collapsed.

* __get_cancel()__ returns whether the operation was cancelled.

The following example uses the __OnClientCollapsing__ event to show a confirmation dialog:

````ASPNET
	     
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



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientExpanding]({%slug splitter/client-side-programming/events/onclientexpanding%})

 * [OnClientCollapsed]({%slug splitter/client-side-programming/events/onclientcollapsed%})
