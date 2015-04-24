---
title: Events
page_title: Client-side Events | RadPanelBar for ASP.NET AJAX Documentation
description: Events
slug: panelbar/client-side-programming/events
tags: events
published: True
position: 5
---

# Events



## 

__RadPanelBar__ supports a number of client-side events that let you customize the behavior of the panel bar:

* [OnClientItemClicking]({%slug panelbar/client-side-programming/onclientitemclicking%}) occurs when the user clicks on an item before the panel bar responds to the click

* [OnClientItemClicked]({%slug panelbar/client-side-programming/onclientitemclicked%}) occurs immediately after the panel bar responds to an item click

* [OnClientItemExpand]({%slug panelbar/client-side-programming/onclientitemexpand%}) occurs immediately after an item is expanded

* [OnClientItemCollapse]({%slug panelbar/client-side-programming/onclientitemcollapse%}) occurs immediately after an item is collapsed

* [OnClientItemFocus]({%slug panelbar/client-side-programming/onclientitemfocus%}) occurs when an item gets focus.

* [OnClientItemBlur]({%slug panelbar/client-side-programming/onclientitemblur%}) occurs when an item loses focus.

* [OnClientLoad]({%slug panelbar/client-side-programming/onclientload%}) occurs when the panel bar loads on the client.

* [OnClientMouseOver]({%slug panelbar/client-side-programming/onclientmouseover%}) occurs when the mouse moves over an item in the panel bar.

* [OnClientMouseOut]({%slug panelbar/client-side-programming/onclientmouseout%}) occurs when the mouse moves off of an item in the panel bar.

* [OnClientContextMenu]({%slug panelbar/client-side-programming/onclientcontextmenu%}) occurs when the user right-clicks on an item in the panel bar.

To use these events, simply write a javascript function that can be called when the event occurs. Then assign the name of the javascript function as the value of the the corresponding __RadPanelBar__ property.

````ASPNET
	    <script> 
	    function OnClientItemClicking(sender, args) 
	    {    
	    var item = eventArgs.get_item();    
	    var navigateUrl = item.get_navigateUrl();    
	    if (navigateUrl && navigateUrl != "#")    
	    {       
	    var proceed = confirm("Navigate to "+ navigateUrl + " ?");       
	    if (!proceed)       
	    {          
	        eventArgs.set_cancel(true);       
	    }       
	    else       
	    {         
	     eventArgs.set_cancel(false);       
	     } 
	     }
	     </script>
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" onclientitemclicking="OnClientItemClicking">
	    ...
	    </telerik:radpanelbar>
````



You can also assign event handlers in client-side code. When using the client-side API, pass a reference to the event handler rather than its name. One advantage of using the client-side API is that you can attach multiple event handlers to one event using the standard MS AJAX convention:

````JavaScript
	     
		function onClickedHandler1()
	    { 
	        alert("First handler called");
	    }
	    
	    function onClickedHandler2()
	    {
	        alert("Second handler called");
	    }
	    
	    function pageLoad()
	    { 
	        var panelBar = $find("<%=RadPanelBar1.ClientID%>");  
	        panelBar.add_itemClicked(OnClickedHandler1);
	        panelBar.add_itemClicked(OnClickedHandler2);
	    }
				
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	     
		function removeOnClicked2()
	    {
	         var panelBar = $find("<%=RadPanelBar1.ClientID%>"); 
	         panelBar.remove_itemClicked(OnClickedHandler2);
	     }
				
````



Note that on the client-side, the names of events are slightly different than on the server side. The following table shows the correspondance between client-side and server-side names:


| Server-Side Name | Client-SideName | Methods to add and Remove |
| ------ | ------ | ------ |
|OnClientLoad|load|add_load, remove_load|
|OnClientItemClicking|itemClicking|add_itemClicking, remove_itemClicking|
|OnClientItemClicked|itemClicked|add_itemClicked, remove_itemClicked|
|OnClientItemExpand|itemExpand|add_itemExpand, remove_itemExpand|
|OnClientItemCollapse|itemCollapse|add_itemCollapse, remove_itemCollapse|
|OnClientItemBlur|itemBlur|add_itemBlur, remove_itemBlur|
|OnClientItemFocus|itemFocus|add_itemFocus, remove_itemFocus|
|OnClientMouseOver|mouseOver|add_mouseOver, remove_mouseOver|
|OnClientMouseOut|mouseOut|add_mouseOut, remove_mouseOut|
|OnClientContextMenu|contextMenu|add_contextMenu, remove_contextMenu|

# See Also

 * [Overview]({%slug panelbar/client-side-programming/overview%})

 * [RadPanelBar Object]({%slug panelbar/client-side-programming/radpanelbar-object%})

 * [RadPanelItemCollection Object]({%slug panelbar/client-side-programming/radpanelitemcollection-object%})

 * [RadPanelItem Object]({%slug panelbar/client-side-programming/radpanelitem-object%})

 * [Events]({%slug panelbar/server-side-programming/events%})
