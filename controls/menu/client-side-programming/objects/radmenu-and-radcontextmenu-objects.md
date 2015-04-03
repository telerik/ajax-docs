---
title: RadMenu and RadContextMenu Objects
page_title: RadMenu and RadContextMenu Objects | UI for ASP.NET AJAX Documentation
description: RadMenu and RadContextMenu Objects
slug: menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects
tags: radmenu,and,radcontextmenu,objects
published: True
position: 0
---

# RadMenu and RadContextMenu Objects



## Common API

Both the __RadMenu__ and the __RadContextMenu__ client-side objects have many of the same methods. The following table lists the most important of these common client-side methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __trackChanges__ |none|none|Begins tracking changes to the menu items. Only changes to the items that occur between a call to __trackChanges__ and __commitChanges__ persist after a postback.|
| __commitChanges__ |none|none|Ends tracking changes to the menu items. Only changes to the items that occur between a call to __trackChanges__ and __commitChanges__ persist after a postback.|

>note Client side changes are available on the server side after postback. You can use the[ClientChanges]({%slug menu/client-side-programming/accessing-client-changes-at-the-server%})property to access them.
>


````JavaScript
	function AddNewItem()
	{     
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var menuItem = new Telerik.Web.UI.RadMenuItem();  
	    menuItem.set_text("New Item");  
	    menu.trackChanges();  
	    menu.get_items().add(menuItem);  
	    menu.commitChanges();  
	}			
````




>caption  

|  __disable__  | none | none | Disables all items in the menu. Clicking on any item has no effect, child items cannot be opened. |
| ------ | ------ | ------ | ------ |

````JavaScript
	function DisableMenu()
	{  
	    var menu = $find("<%= RadMenu1.ClientID %>"); 
	    menu.disable();
	}		
````




>caption  

|  __enable__  | none | none | Enables all items in the menu. |
| ------ | ------ | ------ | ------ |

````JavaScript
	function EnableMenu()
	{  
	    var menu = $find("<%= RadMenu1.ClientID %>");  
	    menu.enable();
	}		
````




>caption  

|  __get_enabled__  | none | boolean | True if the menu is enabled. To enable a menu, use the enable() method. |
| ------ | ------ | ------ | ------ |
| __close__ |none|none|Closes all opened items|
| __findItemByValue__ |(string value)|RadMenuItem|Returns the first __RadMenuItem__ object whose __Value__ property is equal to the passed parameter.|
| __findItemByText__ |(string text)|RadMenuItem|Returns the first __RadMenuItem__ object whose __Text__ property is equal to the passed parameter.|
| __findItemByUrl__ |(string URL)|RadMenuItem|Returns the first __RadMenuItem__ object whose __NavigateUrl__ property is equal to the passed parameter.|
| __findItemByAbsoluteUrl__ |(string URL)|RadMenuItem|Returns the first __RadMenuItem__ object whose __NavigateUrl__ property is equal to the passed parameter. Note that the parameter should ends with '/' like:var item = sender.findItemByAbsoluteUrl('http://www.test.com/');|
| __findItemByAttribute__ |(string attributeName, string value)|RadMenuItem|Returns the first __RadMenuItem__ object with a custom attribute of the specified name that has the specified value.|
| __get_items__ |none|RadMenuItemCollection|Returns the collection of root level items.|

````JavaScript
	function showRootItems()
	{  
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var items = menu.get_items();
	    for (var i=0; i < items.get_count(); i++)  
	    {    
	        alert(items.getItem(i).get_text());
	    }
	}
				
````




>caption  

|  __get_allItems__  | none | Array | Gets a linear collection of all items. This includes all root and child items in the menu. |
| ------ | ------ | ------ | ------ |

````JavaScript
	function showAllItems()
	{  
	    var menu = $find("<%=RadMenu1.ClientID %>");  
	    for (var i=0; i< menu.get_allItems().length; i++)  
	    {    
	        alert(menu.get_allItems()[i].get_text());  
	    }
	}		
````




>caption  

|  __focus__  | none | none | Brings the focus to the menu so that it can be controlled via the keyboard. |
| ------ | ------ | ------ | ------ |
| __get_focusedItem__ |none|RadMenuItem|Returns the focused root level item. Null if no item has focus.|
| __get_openedItem__ |none|RadMenuItem|Returns the opened root level item. If no item is opened at the root level returns null.|
| __get_selectedItem__ |none|RadMenuItem|Returns the selected menu item. If no item is selected returns null.|
| __get_attributes__ |none|Collection|Returns the collection of custom attributes for the menu.|
| __get_clicked__ |none|Boolean|True if the user has clicked on a root menu item to expand it when ClickToOpen is True.|
| __set_clicked__ |Boolean|none|Sets whether the user has clicked on a root menu item to expand it when ClickToOpen is True. See example[here]({%slug menu/application-scenarios/expand-root-menuitem-on-click-only%}).|
| __get_contextMenuElement__ |none|HTML Element|Gets the DOM element for the menu.|

````JavaScript
	// hide the menu
	// note this change does not persist after a postback
	function hidemenu()
	{  
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    menu.get_element().style.display = "none";
	}
	
	// show the menu
	function showmenu()
	{  
	    var menu = $find("<%= RadMenu1.ClientID %>");  
	    menu.get_element().style.display = "";
	}		
````




>caption  

|  __get_childListElement__  | none | HTML Element | Gets the DOM element for the list of items in the menu. |
| ------ | ------ | ------ | ------ |
| __enableEvents__ |none|none|Enables the control client-side event emitting. Events are enabled by default.|
| __disableEvents__ |none|none|Disables the control client-side event emitting.|
| __add_<EventName>__ |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name <EventName>. Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug menu/client-side-programming/events/overview%}).|

````JavaScript
	function OnClientItemBlurHandler()
	{   
	alert( "goodbye");
	}
	
	function AttachBlurHandler()
	{   
	    var menu = $find("<%=RadMenu1.ClientID %>");
	    menu.add_itemBlur(OnClientItemBlurHandler);
	}		
````




>caption  

|  __remove_<EventName>__  | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name <EventName>.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug menu/client-side-programming/events/overview%}). |
| ------ | ------ | ------ | ------ |

````JavaScript
	function OnClientItemBlurHandler()
	{   
	    alert( "goodbye");
	}
	
	function DetachBlurHandler()
	{   
	    var menu = $find("<%=RadMenu1.ClientID %>");
	    menu.remove_itemBlur(OnClientItemBlurHandler);
	}			
````



## RadContextMenu-specific API

The __[RadContextMenu]({%slug menu/context-menus/radcontextmenu-object%})__ client-side object has some additional methods that are specific to it:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __show__ |(event)|none|Displays the menu as a pop-up, using the position in the DOM event that is passed as a parameter.|
| __showAt__ |(int X, int Y)|none|Displays the menu as a pop-up at the coordinates specified by the parameters.|

>note When calling showAt from in response to a client-side event, it is a good idea to call $telerik.cancelRawEvent(event) afterwards in order to prevent the default event processing from hiding the context menu you just displayed.
>



>caption  

|  __hide__  | none | none | Hides the menu. |
| ------ | ------ | ------ | ------ |
| __get_targets__ |none|Array|Returns the array of targets to which the context menu is attached. Each target identifies an element or family of elements that cause the menu to appear when right-clicked.|
| __addTargetElement__ |element|none|Attaches the context menu to the specified target element.|
| __removeTargetElement__ |element|none|Detaches the context menu from the specified target element.|

## RadContextMenu static objects and methods

* The __Telerik.Web.UI.RadContextMenu.contextMenus__ holds a static collection with references to all __[RadContextMenu]({%slug menu/context-menus/radcontextmenu-object%})__s on the page.

````JavaScript
	function iterateThroughAllContextMenus() 
	{    
	    var contextMenus = Telerik.Web.UI.RadContextMenu.contextMenus;     
	    for (var contextMenuId in contextMenus) 
	    {        
	        var contextMenu = contextMenus[contextMenuId];
	        ...    
	    }
	}			
````



* The __Telerik.Web.UI.RadContextMenu.hideAll__ method hides all visible [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})s on the page.

* __addTargetElement__(element), __removeTargetElement__(element) methods to dynamically add/remove targets to the context menu.

# See Also

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [Overview]({%slug menu/client-side-programming/events/overview%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})
