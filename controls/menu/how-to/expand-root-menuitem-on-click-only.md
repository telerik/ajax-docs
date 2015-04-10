---
title: Expand Root MenuItem on Click Only
page_title: Expand Root MenuItem on Click Only | UI for ASP.NET AJAX Documentation
description: Expand Root MenuItem on Click Only
slug: menu/how-to/expand-root-menuitem-on-click-only
tags: expand,root,menuitem,on,click,only
published: True
position: 3
---

# Expand Root MenuItem on Click Only





## 

You can use the __ClickToOpen__ property to specify that menu items do not expand when the mouse hovers over them until the user clicks the menu with the mouse. When __ClickToOpen__ is __True__, the menu does not expand until the user clicks on a root item, at which point the root item expands. Once clicked, the menu expands and collapses as normal, until the user clicks again (either on a menu item or outside the menu).

This example will show how to prevent expanding of the other root items on hover.

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" ClickToOpen="True" 
	        OnClientMouseOver="OnClientMouseOverHandler">
````



````JavaScript
	    function OnClientMouseOverHandler(sender, eventArgs) {
	        if (eventArgs.get_item().get_parent() == sender) {
	                sender.set_clicked(false);
	            }
	    }		
````



# See Also

 * [Displaying Child Items]({%slug menu/accessibility-and-internationalization/displaying-child-items%})
