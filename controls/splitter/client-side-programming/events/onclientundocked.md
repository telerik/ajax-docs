---
title: OnClientUndocked
page_title: OnClientUndocked | RadSplitter for ASP.NET AJAX Documentation
description: OnClientUndocked
slug: splitter/client-side-programming/events/onclientundocked
tags: onclientundocked
published: True
position: 17
---

# OnClientUndocked

The **OnClientUndocked** client-side event handler is called when a pane has just been undocked. The event can occur because of the user clicks on the sliding pane's undock button, or as the result of a a call to a client-side method.

>note The **OnClientUndocked** event is supported by **RadSlidingPane** .

The following parameter is passed to the event handler:

* **sender** is the pane that is has just been undocked.

The following example uses the **OnClientUndocked** event to update the content of the pane:

````ASP.NET	 
<script type="text/javascript">
	function countUndocks(pane)
	{
		// undockCount is a custom variable
		var count = pane.undockCount;
		if (count)
			count = count + 1;
		else
			count = 1;
		pane.undockCount = count;
		pane.setContent("This pane has been undocked " + count + " times.");
	}
</script>
<telerik:RadSplitter RenderMode="Lightweight" runat="server" id="RadSplitter1" Width="90%" Orientation="Horizontal" >
 <telerik:RadPane runat="server" id="RadPane1" Height="80px" >
   <telerik:RadSlidingZone runat="server" id="RadSlidingZone1" >
	 <telerik:RadSlidingPane runat="server"
	   Title="Pane1"
	   id="RadSlidingPane1"
	   Height="50px"
	   OnClientUndocked="countUndocks" >
	   This pane has been undocked 0 times.
	 </telerik:RadSlidingPane>
	 <telerik:RadSlidingPane
	   runat="server"
	   Title="Pane2"
	   id="RadSlidingPane2"
	   Height="50px"
	   OnClientUndocked="countUndocks">
	   This pane has been undocked 0 times.
	 </telerik:RadSlidingPane>
   </telerik:RadSlidingZone>
 </telerik:RadPane>
 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
 <telerik:RadPane runat="server" id="RadPane2" Height="90px">
 </telerik:RadPane>
</telerik:RadSplitter> 			
````



## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientDocked]({%slug splitter/client-side-programming/events/onclientdocked%})
