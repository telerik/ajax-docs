---
title: OnClientLoad
page_title: OnClientLoad | RadSplitter for ASP.NET AJAX Documentation
description: OnClientLoad
slug: splitter/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad



## 

>caution  **OnClientLoaded** Client-side event has been deprecated. Please, use the[OnClientLoad]({%slug splitter/client-side-programming/events/onclientexpanding%})instead.
>


The **OnClientLoad** client-side event handler is called when a **RadSplitter** or **RadSlidingZone** control is loaded on the client.

>note The **OnClientLoad** event is supported by **RadSplitter** and **RadSlidingZone** .
>


One parameters is passed to the event handler:

* **sender** is the **RadSplitter** or **RadSlidingZone** that has just been loaded.

The following example uses the **OnClientLoad** event to set the height of a splitter:

````ASPNET
	     
	<script type="text/javascript">
		function loadSplitter(sender) {
			sender.set_height(2 * sender.get_width());
		}
	</script>
	<telerik:RadSplitter
	    runat="server"
	    id="RadSplitter2"
	    Orientation="Horizontal"
	    width="90%"
	    OnClientLoad="loadSplitter">
	 <telerik:RadPane runat="server" id="RadPane3"
	    ContentUrl="http://www.telerik.com" />
	 <telerik:RadSplitBar runat="server" id="RadSplitBar2"
	    CollapseMode="Both"  />
	 <telerik:RadPane runat="server" id="RadPane4"
	    ContentUrl="http://www.google.com" />
	</telerik:RadSplitter> 
				
````



**OnClientLoad**

````ASPNET
	     
	<script type="text/javascript">
		function hideTabs(sender, Args) {
			var panes = sender.getPanes();
			for (i = 0; i < panes.length; i++) {
				if (panes[i].get_id() != sender.get_dockedPaneId())
					panes[i].hideTab();
			}
		}
	</script>
	 <telerik:RadSplitter runat="server" id="RadSplitter3" Orientation="Horizontal">
	 <telerik:RadPane runat="server" id="RadPane5" Height="80px" >
	 <telerik:RadSlidingZone
	     runat="server"
	     id="RadSlidingZone2"
	     OnClientLoad="hideTabs"
	     DockedPaneId="RadSlidingPane2" >
	   <telerik:RadSlidingPane runat="server" Title="Pane1" id="RadSlidingPane4" Height="50px">
	     The content of Sliding Pane 1
	   </telerik:RadSlidingPane>
	   <telerik:RadSlidingPane runat="server" Title="Pane2" id="RadSlidingPane5" Height="50px">
	     The content of sliding pane 2
	   </telerik:RadSlidingPane>
	    <telerik:RadSlidingPane runat="server" Title="Pane3" id="RadSlidingPane6" Height="50px">
	     The content of sliding pane 3
	   </telerik:RadSlidingPane>
	</telerik:RadSlidingZone>
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar3" />
	 <telerik:RadPane runat="server" id="RadPane6">
	 </telerik:RadPane>
	</telerik:RadSplitter>   
				
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSplitter Object]({%slug splitter/client-side-programming/radsplitter-object%})

 * [RadSlidingZone Object]({%slug splitter/client-side-programming/radslidingzone-object%})
