---
title: OnClientItemCollapse
page_title: OnClientItemCollapse | UI for ASP.NET AJAX Documentation
description: OnClientItemCollapse
slug: panelbar/client-side-programming/onclientitemcollapse
tags: onclientitemcollapse
published: True
position: 9
---

# OnClientItemCollapse



## 

The __OnClientItemCollapse__ client-side event occurs after the user has collapsed a panel item.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadPanelItem__ that has been collapsed.

* __get_domEvent()__ returns the DOM event object.

````ASPNET
	    <script>
	        function OnClientItemCollapse(sender, args) {
	            alert("The " + args.get_item().get_text() + " item has been collapsed");
	        }           
	     </script>
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" onclientitemcollapse="OnClientItemCollapse">
	      ...
	      </telerik:radpanelbar>
````



# See Also

 * [OnClientItemExpand]({%slug panelbar/client-side-programming/onclientitemexpand%})
