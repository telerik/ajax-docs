---
title: OnClientItemClicked
page_title: OnClientItemClicked | UI for ASP.NET AJAX Documentation
description: OnClientItemClicked
slug: panelbar/client-side-programming/onclientitemclicked
tags: onclientitemclicked
published: True
position: 7
---

# OnClientItemClicked



## 

The __OnClientItemClicked__ client-side event occurs when the user clicks on an item in the panel bar, after the panel bar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadPanelItem__ that was clicked.

* __get_domEvent()__ returns the DOM event object.

You can use this event to respond when the user clicks on a panel bar item:

````ASPNET
	    <script>
	        function OnClientItemClicked(sender, args) {
	            alert("The " + args.get_item().get_text() + " item has been clicked");
	        }            
	    </script>
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" onclientitemclicked="OnClientItemClicked"> 
	     ...
	     </telerik:radpanelbar>
````



# See Also

 * [OnClientItemClicking]({%slug panelbar/client-side-programming/onclientitemclicking%})
