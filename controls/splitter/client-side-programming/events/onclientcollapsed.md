---
title: OnClientCollapsed
page_title: OnClientCollapsed | UI for ASP.NET AJAX Documentation
description: OnClientCollapsed
slug: splitter/client-side-programming/events/onclientcollapsed
tags: onclientcollapsed
published: True
position: 8
---

# OnClientCollapsed



## 

The __OnClientCollapsed__ client-side event handler is called when a pane has just been collapsed. The collapse can occur because the user clicks on a collapse button, or as the result of a a call to a client-side method.

>note The __OnClientCollapsed__ event is supported by __RadPane__ and __RadSlidingPane__ .
>


The following parameter is passed to the event handler:

* __sender__ is the pane that is has just been collapsed.

The following example uses the __OnClientCollapsed__ event to update the content of the pane:

````ASPNET
	     
	<script type="text/javascript">
	    function countCollapses(pane)
	    {
	        // collapseCount is a custom variable
	        var count = pane.collapseCount;
	        if (count)
	            count = count + 1;
	        else
	            count = 1;
	        pane.collapseCount = count;
	        var id = pane.get_id();
	        if (id == "RadPane2") // RadPane
	            pane.set_content("This pane has collapsed " + count + " times.");
	        else // RadSlidingPane
	            pane.setContent("This pane has collapsed " + count + " times.");
	    }
	</script>
	<telerik:RadSplitter runat="server" id="RadSplitter1" Width="90%" Orientation="Horizontal" >
	 <telerik:RadPane runat="server" id="RadPane1" Height="80px" >
	   <telerik:RadSlidingZone runat="server" id="RadSlidingZone1" >
	     <telerik:RadSlidingPane runat="server"
	       Title="Pane1"
	       id="SlidingPane1"
	       Height="50px"
	       OnClientCollapsed="countCollapses" >
	       This pane has collapsed 0 times.
	     </telerik:RadSlidingPane>
	     <telerik:RadSlidingPane
	       runat="server"
	       Title="Pane2"
	       id="SlidingPane2"
	       Height="50px"
	       OnClientCollapsed="countCollapses">
	       This pane has collapsed 0 times.
	     </telerik:RadSlidingPane>
	   </telerik:RadSlidingZone>
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
	 <telerik:RadPane
	   runat="server"
	   id="RadPane2"
	   Height="90px"
	   OnClientCollapsed="countCollapses">
	     This pane has collapsed 0 times.
	 </telerik:RadPane>
	</telerik:RadSplitter> 
				
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientBeforeCollapse]({%slug splitter/client-side-programming/events/onclientbeforecollapse%})

 * [OnClientExpanded]({%slug splitter/client-side-programming/events/onclientexpanded%})
