---
title: OnClientItemClicking
page_title: OnClientItemClicking | UI for ASP.NET AJAX Documentation
description: OnClientItemClicking
slug: panelbar/client-side-programming/onclientitemclicking
tags: onclientitemclicking
published: True
position: 6
---

# OnClientItemClicking



## 

The __OnClientItemClicking__ client-side event occurs when the user clicks a panel item, before the the click action finishes.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadPanelItem__ that was clicked.

* __set_cancel__ lets you stop the default response to the click by passing *true* to the __set_cancel__ method.

* __get_domEvent()__ returns the DOM event object.

You can use this event to pre-process an item-click or to cancel the default response:

````ASPNET
	    <script> 
	    function OnClientItemClicking(sender, eventArgs)
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



# See Also

 * [OnClientItemClicked]({%slug panelbar/client-side-programming/onclientitemclicked%})
