---
title: OnClientResized
page_title: OnClientResized | RadSplitter for ASP.NET AJAX Documentation
description: OnClientResized
slug: splitter/client-side-programming/events/onclientresized
tags: onclientresized
published: True
position: 5
---

# OnClientResized



## 

The **OnClientResized** client-side event handler is called when a control has just been resized. The resize can occur because of a user action (such as dragging a split bar or resizing the window that contains a splitter), or as the result of a a call to a client-side method.

>note The **OnClientResized** event is supported by **RadSplitter** , **RadPane** , and **RadSlidingPane** .
>


The following two parameters are passed to the event handler:

* **sender** is the splitter or pane that was just resized.

* **eventArgs** has the following methods:

* **get_oldHeight()** returns the height of the control before the resize.

* **get_oldWidth()** returns the width of the control before the resize.

The following example uses the **OnClientResized** event to show an alert:

````ASPNET
	     
	<script type="text/javascript">
	    function afterResize(sender, Args)
	    {
	        if (Args.get_oldHeight() != sender.get_height())
	        {
	            alert(sender.get_id() + ": Height changed from " +
	           Args.get_oldHeight() + " to " + sender.get_height());
	        }
	        if (Args.get_oldWidth() != sender.get_width())
	        {
	            alert(sender.get_id() + ": Width changed from " +
	           Args.get_oldWidth() + " to " + sender.get_width());
	        }
	    }
	</script>
	<telerik:RadSplitter
	   runat="server"
	   id="RadSplitter1"
	   Width="90%"
	   Orientation="Horizontal"
	   OnClientResized="afterResize">
	 <telerik:RadPane
	    runat="server"
	    id="RadPane1"
	    Height="80px"
	    OnClientResized="afterResize"  >
	   <telerik:RadSlidingZone runat="server" id="RadSlidingZone1" >
	     <telerik:RadSlidingPane
	       runat="server"
	       Title="Pane1"
	       id="RadSlidingPane1"
	       Height="50px"
	       OnClientResized="afterResize" >
	    </telerik:RadSlidingPane>
	  </telerik:RadSlidingZone>
	 </telerik:RadPane>
	 <telerik:RadSplitBar runat="server" id="RadSplitBar1" CollapseMode="Both"  />
	 <telerik:RadPane
	   runat="server"
	   id="RadPane2"
	   OnclientResized="afterResize">
	 </telerik:RadPane>
	</telerik:RadSplitter> 
				
````



# See Also

 * [Overview]({%slug splitter/client-side-programming/overview%})

 * [RadSplitter Object]({%slug splitter/client-side-programming/radsplitter-object%})

 * [RadPane Object]({%slug splitter/client-side-programming/radpane-object%})

 * [RadSlidingPane Object]({%slug splitter/client-side-programming/radslidingpane-object%})

 * [OnClientResizing]({%slug splitter/client-side-programming/events/onclientresizing%})
