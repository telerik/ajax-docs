---
title: OnClientLoaded
page_title: OnClientLoaded | RadSplitter for ASP.NET AJAX Documentation
description: OnClientLoaded
slug: splitter/client-side-programming/events/onclientloaded
tags: onclientloaded
published: False
position: 2
---

# OnClientLoaded



## 

>caution  **OnClientLoaded** Client-side event has been deprecated. Please, use the[OnClientLoad]({%slug splitter/client-side-programming/events/onclientload%})instead.
>


The **OnClientLoaded** client-side event handler is called when a **RadSplitter** or **RadSlidingZone** control is loaded on the client.

>note The **OnClientLoaded** event is supported by **RadSplitter** and **RadSlidingZone** .
>


One parameters is passed to the event handler:

* **sender** is the **RadSplitter** or **RadSlidingZone** that has just been loaded.

The following example uses the **OnClientLoaded** event to set the height of a splitter:

````ASPNET
	     
	<script type="text/javascript">
	    function loadSplitter(sender)
	    {
	        sender.set_height(2 * sender.get_width());
	    }
	</script>
	<telerik:RadSplitter
	    runat="server"
	    id="RadSplitter1"
	    Orientation="Horizontal"
	    width="90%"
	    OnClientLoaded="loadSplitter">
	 <telerik:RadPane runat="server" id="RadPane1"
	    ContentUrl="http://www.telerik.com" />
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1"
	    CollapseMode="Both"  />
	 <telerik:RadPane runat="server" id="RadPane2"
	    ContentUrl="http://www.google.com" />
	</telerik:RadSplitter> 
				
````



**OnClientLoaded**

````ASPNET
	     
	<script type="text/javascript">
	    function hideTabs(sender, Args)
	    {
	        var panes = sender.getPanes();
	        for (i = 0; i < panes.length; i++)
	        {
	            if (panes[i].get_id() != sender.get_dockedPaneId())
	                panes[i].hideTab();
	        }
	    }
	</script>
	 <telerik:RadSplitter runat="server" id="RadSplitter1" Orientation="Horizontal">
	 <telerik:RadPane runat="server" id="RadPane1" Height="80px" >
	 <telerik:RadSlidingZone
	     runat="server"
	     id="RadSlidingZone1"
	     OnClientLoaded="hideTabs"
	     DockedPaneId="RadSlidingPane2" >
	   <telerik:RadSlidingPane runat="server" Title="Pane1" id="RadSlidingPane1" Height="50px">
	     The content of Sliding Pane 1
	   </telerik:RadSlidingPane>
	   <telerik:RadSlidingPane runat="server" Title="Pane2" id="RadSlidingPane2" Height="50px">
	     The content of sliding pane 2
	   </telerik:RadSlidingPane>
	    <telerik:RadSlidingPane runat="server" Title="Pane3" id="RadSlidingPane3" Height="50px">
	     The content of sliding pane 3
	   </telerik:RadSlidingPane>
	</telerik:RadSlidingZone>
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" />
	 <telerik:RadPane runat="server" id="RadPane2">
	 </telerik:RadPane>
	</telerik:RadSplitter>   
				
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSplitter Object]({%slug splitter/client-side-programming/radsplitter-object%})

 * [RadSlidingZone Object]({%slug splitter/client-side-programming/radslidingzone-object%})
