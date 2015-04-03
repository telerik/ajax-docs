---
title: Structure
page_title: Structure | UI for ASP.NET AJAX Documentation
description: Structure
slug: menu/structure
tags: structure
published: True
position: 1
---

# Structure



## 

The structure of the __RadMenu__ control is as follows:

![RadMenu structure](images/menu_structure.png)

The menu consists of a hierarchy of items. The items on one level are exposed when the parent item on the previous level is expanded. Each Item is represented by a __RadMenuItem__ instance.

* At the top level are the __root items__. These items are always visible. They are available using the Items property of the menu control (__RadMenu.Items__).

* Each root item may have, nested within it, a set of child items. Children of the root items are considered __level 1 items__. They are available using the Items property of the root item (__RadMenuItem.Items__)

* Child items may have, nested within them, their own sets of child items. Children of level 1 items are considered __level 2 items__; children of level 2 items are considered __level 3 items__; and so on.

If the items are created at design time, the hierarchy is reflected in the ASP.NET declaration of the menu:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" Flow="Horizontal">
	        <Items>
	            <telerik:RadMenuItem runat="server" Text="Root Item 1">
	                <Items>
	                    <telerik:RadMenuItem runat="server" Text="Child Item 1">
	                        <Items>
	                            <telerik:RadMenuItem runat="server" Text="Child Item 1.1" />
	                            <telerik:RadMenuItem runat="server" Text="Child Item 1.2" />
	                        </Items>
	                    </telerik:RadMenuItem>
	                    <telerik:RadMenuItem runat="server" Text="Child Item 2" />
	                </Items>
	            </telerik:RadMenuItem>
	            <telerik:RadMenuItem runat="server" Text="Root Item 2">
	                <Items>
	                    <telerik:RadMenuItem runat="server" Text="Child Item 2.1" />
	                </Items>
	            </telerik:RadMenuItem>
	        </Items>
	    </telerik:RadMenu>
````



# See Also

 * [Overview]({%slug menu/radmenu-items/overview%})

 * [Declaring Items Statically at Design Time]({%slug menu/radmenu-items/declaring-items-statically-at-design-time%})

 * [Overview]({%slug menu/data-binding/overview%})
