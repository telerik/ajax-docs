---
title: Overview
page_title: Client-side Events Overview | RadSplitter for ASP.NET AJAX Documentation
description: Overview
slug: splitter/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

The following table lists the client-side events for **RadSplitter**, **RadPane**, **RadSlidingZone**, and **RadSlidingPane**:

| Event | Applies to | Description |
| ------ | ------ | ------ |
|[OnClientLoad]({%slug splitter/client-side-programming/events/onclientload%})| **RadSplitter** , **RadSlidingZone** |Occurs when the control is first loaded on the client.|
|[OnClientResizing]({%slug splitter/client-side-programming/events/onclientresizing%})| **RadSplitter** , **RadPane** , **RadSlidingPane** |Occurs before the control is resized.|
|[OnClientResized]({%slug splitter/client-side-programming/events/onclientresized%})| **RadSplitter** , **RadPane** , **RadSlidingPane** |Occurs when the control has just been resized.|
|[OnClientCollapsing]({%slug splitter/client-side-programming/events/onclientcollapsing%})| **RadPane** , **RadSlidingPane** |Occurs when the pane is about to be collapsed.|
|[OnClientCollapsed]({%slug splitter/client-side-programming/events/onclientcollapsed%})| **RadPane** , **RadSlidingPane** |Occurs when the pane has just been collapsed.|
|[OnClientExpanding]({%slug splitter/client-side-programming/events/onclientexpanding%})| **RadPane** , **RadSlidingPane** |Occurs when the pane is about to be expanded|
|[OnClientExpanded]({%slug splitter/client-side-programming/events/onclientexpanded%})| **RadPane** , **RadSlidingPane** |Occurs when the pane has just been expanded.|
|[OnClientDocking]({%slug splitter/client-side-programming/events/onclientdocking%})| **RadSlidingPane** |Occurs when the pane is about to be docked.|
|[OnClientDocked]({%slug splitter/client-side-programming/events/onclientdocked%})| **RadSlidingPane** |Occurs when the pane has just been docked.|
|[OnClientUndocking]({%slug splitter/client-side-programming/events/onclientundocking%})| **RadSlidingPane** |Occurs when the pane is about to be undocked.|
|[OnClientUndocked]({%slug splitter/client-side-programming/events/onclientundocked%})| **RadSlidingPane** |Occurs when the pane has just been undocked.|

````ASP.NET
<script type="text/javascript">
	function confirmDock(sender, eventArgs)
	{
		if (!confirm("Are you sure you want to dock " + sender.get_title() + "?"))
			eventArgs.set_cancel(true);
	}
</script>
<telerik:RadSplitter runat="server" id="RadSplitter1">
 <telerik:RadPane runat="server" id="RadPane1">
 <telerik:RadSlidingZone runat="server" id="RadSlidingZone1">
   <telerik:RadSlidingPane runat="server" Title="Pane1" id="RadSlidingPane1" OnClientBeforeDock="confirmDock" >
	 The content of Sliding Pane 1
   </telerik:RadSlidingPane>
   <telerik:RadSlidingPane runat="server" Title="Pane2" id="RadSlidingPane2" OnClientBeforeDock="confirmDock" >
	 The content of sliding pane 2
   </telerik:RadSlidingPane>
 </telerik:RadSlidingZone>
 </telerik:RadPane>
 <telerik:RadSplitBar runat="server" id="RadSplitBar1" />
 <telerik:RadPane runat="server" id="RadPane2" >
 </telerik:RadPane>
</telerik:RadSplitter>\
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
function Handler1()
{
	alert("First handler called");
}
function Handler2()
{
	alert("Second handler called");
}

function pageLoad()
{
	var splitter = $find("<%=RadSplitter1.ClientID%>");
	splitter.add_resized(Handler1);
	splitter.add_resized(Handler2);
}		
````


Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
function removeHandler2()
{
	var splitter = $find("<%=RadSplitter1.ClientID%>");   
	splitter.remove_added(Handler2);
}
````

Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondence between client-side and server-side names:

| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientLoaded|loaded|add_loaded, remove_loaded|
|OnClientBeforeResize|beforeResize|add_beforeResize, remove_beforeResize|
|OnClientResized|resized|add_resized, remove_resized|
|OnClientBeforeCollapse|beforeCollapse|add_beforeCollapse, remove_beforeCollapse|
|OnClientCollapsed|collapsed|add_collapsed, remove_collapsed|
|OnClientBeforeExpand|beforeExpand|add_beforeExpand, remove_beforeExpand|
|OnClientExpanded|expanded|add_expanded, remove_expanded|
|OnClientBeforeDock|beforeDock|add_beforeDock, remove_beforeDock|
|OnClientDocked|docked|add_docked, remove_docked|
|OnClientBeforeUndock|beforeUndock|add_beforeUndock, remove_beforeUndock|
|OnClientUndocked|undocked|add_undocked, remove_undocked|

## See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})
