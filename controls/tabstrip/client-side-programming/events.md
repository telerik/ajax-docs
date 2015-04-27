---
title: Events
page_title: Client-side Events | RadTabStrip for ASP.NET AJAX Documentation
description: Events
slug: tabstrip/client-side-programming/events
tags: events
published: True
position: 7
---

# Events



__RadTabStrip__ supports a number of client-side events that let you customize the behavior of the tab strip:

* [OnClientLoad]({%slug tabstrip/client-side-programming/onclientload%}) occurs when the tab strip is first loaded

* [OnClientContextMenu]({%slug tabstrip/client-side-programming/onclientcontextmenu%}) occurs before a context menu is shown

* [OnClientDoubleClick]({%slug tabstrip/client-side-programming/onclientdoubleclick%}) occurs when the user double-clicks on tab

* [OnClientMouseOut]({%slug tabstrip/client-side-programming/onclientmouseout%}) occurs when the mouse moves off the tab strip

* [OnClientMouseOver]({%slug tabstrip/client-side-programming/onclientmouseover%}) occurs when the mouse moves over the tab strip

* [OnClientTabEnabled]({%slug tabstrip/client-side-programming/onclienttabenabled%}) occurs when a tab is enabled

* [OnClientTabDisabled]({%slug tabstrip/client-side-programming/onclienttabdisabled%}) occurs when a tab is disabled

* [OnClientTabSelected]({%slug tabstrip/client-side-programming/onclienttabselected%}) occurs immediately after a tab has been selected

* [OnClientTabUnSelected]({%slug tabstrip/client-side-programming/onclienttabunselected%}) occurs immediately after a tab has been unselected

* [OnClientTabSelecting]({%slug tabstrip/client-side-programming/onclienttabselecting%}) occurs immediately before a tab is selected

* [OnClientTabDragStart]({%slug tabstrip/client-side-programming/onclienttabdragstart%}) event is fired immediately after a drag operation is started

* [OnClientReordering]({%slug tabstrip/client-side-programming/onclientreordering%}) event is fired just before the reorder operation is completed and the dragged tab is removed from its initial index and place in the new one

* [OnClientReordered]({%slug tabstrip/client-side-programming/onclientreordered%}) event is fired after the reorder operation is completed and the dragged tab is being inserted into its new position

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding __RadTabStrip__ property.

````ASPNET
	 <script type="text/javascript">
	function OnClientTabSelectingHandler(sender, args)
	{
	  var tab = args.get_tab();
	  var navigateUrl = tab.get_navigateUrl();
	  if (navigateUrl != "#")
	  {
	     var proceed = confirm("Navigate to "+ navigateUrl + " ?");
	     if (!proceed)
	     {
	        args.set_cancel(true);
	     }
	  }
	}
	</script>
	
	<telerik:RadTabStrip
	        ID="RadTabStrip1"
	        runat="server"
	        OnClientTabSelecting="OnClientTabSelectingHandler">
	...
	</telerik:RadTabStrip> 
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
	var tabStrip = $find(<%=RadTabStrip1.ClientID%>);
	
	tabStrip.add_tabSelecting(Handler1);
	tabStrip.add_tabSelecting(Handler2);
	} 
			
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	  function removeOnClicked2()
	{
	var tabStrip = $find(<%=RadTabStrip1.ClientID%>);
	tabStrip.remove_tabSelecting(Handler2);
	} 		
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondence between client-side and server-side names:


>caption  

| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientLoad|load|add_load, remove_load|
|OnClientContextMenu|contextMenu|add_contextMenu, remove_contextMenu|
|OnClientDoubleClick|doubleClick|add_doubleClick, remove_doubleClick|
|OnClientMouseOver|mouseOver|add_mouseOver, remove_mouseOver|
|OnClientMouseOut|mouseOut|add_mouseOut, remove_mouseOut|
|OnClientTabDisabled|tabDisabled|add_tabDisabled, remove_tabDisabled|
|OnClientTabEnabled|tabEnabled|add_tabEnabled, remove_tabEnabled|
|OnClientTabSelected|tabSelected|add_tabSelected, remove_tabSelected|
|OnClientTabUnSelected|tabUnSelected|add_tabUnSelected, remove_tabUnSelected|
|OnClientTabSelecting|tabSelecting|add_tabSelecting, remove_tabSelecting|

## Enabling and disabling events

If you want for some reason to temporarily "mute" the control event emitting (or, respectively, to "unmute" the events again), you may use the __disableEvents()__ and __enableEvents()__ methods. Unlike adding and removing individual event handlers, __enableEvents()__ and __disableEvents()__ affect all events at once.

# See Also

 * [Overview]({%slug tabstrip/client-side-programming/overview%})

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})

 * [RadTabCollection Object]({%slug tabstrip/client-side-programming/radtabcollection-object%})

 * [RadTab Object]({%slug tabstrip/client-side-programming/radtab-object%})

 * [Events]({%slug tabstrip/server-side-programming/events%})
