---
title: OnClientShowing
page_title: OnClientShowing | UI for ASP.NET AJAX Documentation
description: OnClientShowing
slug: menu/client-side-programming/events/onclientshowing
tags: onclientshowing
published: True
position: 16
---

# OnClientShowing



## 

(__RadContextMenu__ only) The __OnClientShowing__ client-side event occurs when the context menu is about to appear, either in response to a right-click on one of its targets or a call to the __show__ method.

>caution The __OnClientShowing__ event does not occur when the context menu appears in response to a call its __showAt__ method.
>


The event handler receives two parameters:

1. The instance of the context menu firing the event.

1. An eventArgs parameter containing the following methods:

* __get_targetElement__ returns a reference to the DOM element that was right-clicked to show the context menu. If the menu appeared in response to a call to the __show__ method rather than a right-click on one of its targets, __get_targetElement__ returns null.

* __get_domEvent__ returns a reference to the DOM event that caused the context menu to appear. If the context menu appeared because one of its targets was right-clicked, this is an event of type "contextmenu". If the context menu appeared because of a call to its __show__ method, this is the DOM event that was passed as a parameter to the __show__ method.

* __set_cancel__ lets you prevent the menu from appearing.

* __get_cancel__ returns a boolean value indicating whether the context menu will appear after the event handler exits.

You can use this event to initialize the context menu before it appears or to conditionally prevent the context menu from appearing:

````ASPNET
	    <script type="text/javascript">
	        function showContextMenu(menu, args) {
	            var target = args.get_targetElement();
	            if (target) {
	                if (target.value == "")
	                    args.set_cancel(true);
	                else
	                    menu.get_items().getItem(1).disable();
	            }
	        }
	    </script>
	
	    <telerik:RadContextMenu ID="RadContextMenu1" runat="server" OnClientShowing="showContextMenu">
	        <Items>
	            ...
	        </Items>
	    </telerik:RadContextMenu>
````



# See Also

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})

 * [OnClientShown]({%slug menu/client-side-programming/events/onclientshown%})

 * [OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%})

 * [OnClientLoad]({%slug menu/client-side-programming/events/onclientload%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
