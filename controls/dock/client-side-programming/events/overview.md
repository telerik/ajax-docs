---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: dock/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

__RadDock__ supports a number of client-side events that let you customize the behavior of the control:

* [OnClientCommand]({%slug dock/client-side-programming/events/onclientcommand%}) occurs when the user clicks on a command in the __RadDock__ title bar, before the default handling of the command.

* [OnClientDockPositionChanging]({%slug dock/client-side-programming/events/onclientdockpositionchanging%}) occurs when the user tries to drop the __RadDock__ control.

* [OnClientDockPositionChanged]({%slug dock/client-side-programming/events/onclientdockpositionchanged%}) occurs immediately after the client-side __RadDock__ control is updated to reflect its new position after a drag-and-drop operation.

* [OnClientInitialize]({%slug dock/client-side-programming/events/onclientinitialize%}) occurs when the client-side object for the __RadDock__ control is initialized.

* [OnClientDragStart]({%slug dock/client-side-programming/events/onclientdragstart%}) occurs when the user starts a drag operation.

* [OnClientDrag]({%slug dock/client-side-programming/events/onclientdrag%}) occurs when the user moves the mouse during a drag operation.

* [OnClientDragEnd]({%slug dock/client-side-programming/events/onclientdragend%}) occurs when the user drops the __RadDock__ control after a drag operation.

* [OnClientResizeStart]({%slug dock/client-side-programming/events/onclientresizestart%}) occurs when __RadDock__'s resizing has started.

* [OnClientResizeEnd]({%slug dock/client-side-programming/events/onclientresizeend%}) occurs fires when __RadDock__'s resizing has finished.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the correspondingproperty.

````ASPNET
	    <script type="text/javascript">
	        function Undock(sender, eventArgs)
	        {
	            var cmd = eventArgs.command;
	            if (cmd.get_name() == "Undock" && sender.get_dockZoneID() != "")
	            {
	                sender.undock();
	            }
	        }
	    </script>
	    <telerik:raddocklayout id="RadDockLayout1" runat="server">  
	        <telerik:RadDockZone ID="RadDockZone1" runat="server">     
	        <telerik:RadDock ID="RadDock1" 
	            runat="server" 
	            Text="Undock, Expand/Collapse, and Close" 
	            Title="Commands"
	            OnClientCommand="Undock">       
	            <Commands>         
	                <telerik:DockCommand Name="Undock" Text="Undock" />         
	                <telerik:DockExpandCollapseCommand />         
	                <telerik:DockCloseCommand />       
	            </Commands>     
	        </telerik:RadDock>  
	    </telerik:RadDockZone></telerik:raddocklayout>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	     
	
	function DoCommand1()
	{  
	    alert("First handler called");
	}
	function DoCommand2()
	{  
	    alert("Second handler called");
	}
	function AddCommandHandlers()
	{  
	    var dock = $find(<%=RadDock1.ClientID%>);    
	    dock.add_command(DoCommand1);  
	    dock.add_command(DoCommand2);
	}
				
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	     
	
	function removeCommandHandler()
	{  
	    var dock = $find(<%=RadDock1.ClientID%>);   
	    dock.remove_command(DoCommand2);
	}
				
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondance between client-side and server-side names:


>caption  

| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientCommand|command|add_command, remove_command|
|OnClientDockPositionChanging|dockPositionChanging|add_dockPositionChanging, remove_dockPositionChanging|
|OnClientDockPositionChanged|dockPositionChanged|add_dockPositionChanged, remove_dockPositionChanged|
|OnClientInitialize|initialize|add_initialize, remove_initialize|
|OnClientDragStart|dragStart|add_dragStart, remove_dragStart|
|OnClientDrag|drag|add_drag, remove_drag|
|OnClientDragEnd|dragEnd|add_dragEnd, remove_dragEnd|
|OnClientResizeStart|resizeStart|add_resizeStart, remove_resizeStart|
|OnClientResizeEnd|resizeEnd|add_resizeEnd, remove_resizeEnd|

For a live example illustrating the RadDock client-side events, see [Client-side events](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/ClientEvents/DefaultCS.aspx).

# See Also

 * [Overview]({%slug dock/server-side-programming/overview%})
