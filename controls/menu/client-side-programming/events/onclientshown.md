---
title: OnClientShown
page_title: OnClientShown | UI for ASP.NET AJAX Documentation
description: OnClientShown
slug: menu/client-side-programming/events/onclientshown
tags: onclientshown
published: True
position: 17
---

# OnClientShown



## 

(__RadContextMenu__ only) The __OnClientShown__ client-side event occurs when the context menu first appears, either in response to a right-click on one of its targets or a call to its __show__ or __showAt__ method.

The event handler receives two parameters:

1. The instance of the context menu firing the event.

1. An eventArgs parameter containing the following methods:

* __get_targetElement__ returns a reference to the DOM element that was right-clicked to show the context menu. If the menu appeared in response to a call to the __show__ or __showAt__ method rather than a right-click on one of its targets, __get_targetElement__ returns null.

* __get_domEvent__ returns a reference to the DOM event.

You can use this event to initialize the context menu when it appears:

````ASPNET
	    <script type="text/javascript">
	        function initializeContextMenu(menu, args) {
	            var target = args.get_targetElement();
	            if (target)
	                menu.get_items().getItem(1).disable();
	        }
	    </script>
	
	    <telerik:RadContextMenu ID="RadContextMenu1" runat="server" OnClientShown="initializeContextMenu">
	        <Items>
	            ...
	        </Items>
	    </telerik:RadContextMenu>
````



# See Also

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})

 * [OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%})

 * [OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
