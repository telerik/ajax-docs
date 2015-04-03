---
title: OnClientItemClosing
page_title: OnClientItemClosing | UI for ASP.NET AJAX Documentation
description: OnClientItemClosing
slug: menu/client-side-programming/events/onclientitemclosing
tags: onclientitemclosing
published: True
position: 9
---

# OnClientItemClosing



## 

The __OnClientItemClosing__ client-side event occurs when the menu item is about to contract, hiding its child items.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadMenuItem__ that is about to close.

* __set_cancel__ lets you prevent the menu item from closing.

* __get_cancel__ returns a boolean value indicating whether the menu item will close after the event handler exits.

* __get_domEvent__ returns a reference to the DOM event that caused the closing.

You can use this event to control when menu items can contract, or reset the child items to a known state as the menu closes:

````ASPNET
	    <script type="text/javascript">
	        function ItemClosing(menu, args) {
	            var status = $get("hdCurrentStatus");
	            var item = args.get_item();
	            if (status.value == "")
	                args.set_cancel(true);    
	     }
	    </script>
	
	    <telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal" OnClientItemClosing="ItemClosing">
	        <Items>
	            ...
	        </Items>
	    </telerik:RadMenu>
	    <input type="hidden" id="hdCurrentStatus" />
````



# See Also

 * [OnClientItemClosed]({%slug menu/client-side-programming/events/onclientitemclosed%})

 * [OnClientItemOpening]({%slug menu/client-side-programming/events/onclientitemopening%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})
