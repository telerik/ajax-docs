---
title: OnClientHiding
page_title: OnClientHiding | RadMenu for ASP.NET AJAX Documentation
description: OnClientHiding
slug: menu/client-side-programming/events/onclienthiding
tags: onclienthiding
published: True
position: 18
---

# OnClientHiding





## 

(**RadContextMenu** only) The **OnClientHiding** client-side event occurs when the context menu is about to disappear.

The event handler receives two parameters:

1. The instance of the context menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_targetElement** returns a reference to the DOM element that was right-clicked to show the context menu. If the menu appeared in response to a call to the **show** method rather than a right-click on one of its targets, **get_targetElement** returns null.

* **get_domEvent** returns a reference to the DOM event that caused the context menu to disappear. **set_cancel** lets you prevent the menu from disappearing.

* **get_cancel** returns a boolean value indicating whether the context menu will disappear after the event handler exits.

You can use this event to control when context menu can disappear:

````ASPNET
	    <script type="text/javascript">
	        function OnClientHiding(menu, args) {
	            var target = args.get_targetElement();
	            if (target) {
	                if (target.value == "")
	                    args.set_cancel(true);
	            }
	        }
	     </script>
	
	    <telerik:RadContextMenu ID="RadContextMenu1" runat="server" OnClientHiding="OnClientHiding">
	        <Items>
	            ...
	        </Items>
	    </telerik:RadContextMenu>
````


