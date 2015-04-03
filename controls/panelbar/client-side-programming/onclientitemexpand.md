---
title: OnClientItemExpand
page_title: OnClientItemExpand | UI for ASP.NET AJAX Documentation
description: OnClientItemExpand
slug: panelbar/client-side-programming/onclientitemexpand
tags: onclientitemexpand
published: True
position: 8
---

# OnClientItemExpand



## 

The __OnClientItemExpand__ client-side event occurs after the user has expanded a panel item.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadPanelItem__ that has been expanded.

* __get_domEvent()__ returns the DOM event object.

````ASPNET
	    <script>
	        function OnClientItemExpand(sender, args) {
	            alert("The " + args.get_item().get_text() + " item has been expanded");
	        }           
	    </script>
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" onclientitemexpand="OnClientItemExpand">
	      ...
	      </telerik:radpanelbar>
````



# See Also

 * [OnClientItemCollapse]({%slug panelbar/client-side-programming/onclientitemcollapse%})
