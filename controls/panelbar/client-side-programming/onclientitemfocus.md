---
title: OnClientItemFocus
page_title: OnClientItemFocus | UI for ASP.NET AJAX Documentation
description: OnClientItemFocus
slug: panelbar/client-side-programming/onclientitemfocus
tags: onclientitemfocus
published: True
position: 11
---

# OnClientItemFocus



## 

The __OnClientItemFocus__ client-side event occurs when an item in the panel bar receives focus.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadPanelItem__ that received focus.

* __get_domEvent()__ returns the DOM event object.

You can use this event to respond when an item receives focus. For example, the following event handler moves focus to the first child when a root level item receives focus:

````ASPNET
	    <script type="text/javascript">
	        function focusItem(panelbar, args) {
	            var item = args.get_item();
	            if (item.get_level() == 0)
	                item.focusFirstChild();
	        }
	    </script>
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" onclientitemfocus="focusItem">
	     <Items>
	       ... 
	      </Items>
	      </telerik:radpanelbar>
````



# See Also

 * [OnClientItemBlur]({%slug panelbar/client-side-programming/onclientitemblur%})
