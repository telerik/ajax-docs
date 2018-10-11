---
title: RadMenu and RadContextMenu Objects
page_title: RadMenu and RadContextMenu Objects | RadMenu for ASP.NET AJAX Documentation
description: RadMenu and RadContextMenu Objects
slug: menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects
tags: radmenu,and,radcontextmenu,objects
published: True
position: 0
---

# RadMenu and RadContextMenu Objects



## Common API

Both the **RadMenu** and the **RadContextMenu** client-side objects have many of the same methods. The following table lists the most important of these common client-side methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Begins tracking changes to the Menu items. Only changes to the items that occur between a call to **trackChanges** and **commitChanges** persist after a postback. See **Example 1**.|
| **commitChanges** |none|none|Ends tracking changes to the Menu items. Only changes to the items that occur between a call to **trackChanges** and **commitChanges** persist after a postback.|
| **disable** | none | none | Disables all items in the Menu. Clicking on any item has no effect, child items cannot be opened. See **Example 2**. |
| **enable** | none | none | Enables all items in the Menu. See **Example 3**. |
| **get_enabled**  | none | boolean | True if the Menu is enabled. To enable a Menu, use the enable() method. |
| **close** |none|none|Closes all opened items. In Mobile renderMode it closes the Menu too. See **Example 8** below.|
| **findItemByValue** |(string value)|RadMenuItem|Returns the first **RadMenuItem** object whose **Value** property is equal to the passed parameter.|
| **findItemByText** |(string text)|RadMenuItem|Returns the first **RadMenuItem** object whose **Text** property is equal to the passed parameter.|
| **findItemByUrl** |(string URL)|RadMenuItem|Returns the first **RadMenuItem** object whose **NavigateUrl** property is equal to the passed parameter.|
| **findItemByAbsoluteUrl** |(string URL)|RadMenuItem|Returns the first **RadMenuItem** object whose **NavigateUrl** property is equal to the passed parameter. Note that the parameter should end with '/' like:var item = sender.findItemByAbsoluteUrl('http://www.test.com/');|
| **findItemByAttribute** |(string attributeName, string value)|RadMenuItem|Returns the first **RadMenuItem** object with a custom attribute of the specified name that has the specified value.|
| **get_items** |none|RadMenuItemCollection|Returns the collection of root level items. See **Example 4**. |
| **get_allItems** | none | Array | Gets a linear collection of all items. This includes all root and child items in the Menu. See **Example 5**. |
| **focus** | none | none | Brings the focus to the Menu so that it can be controlled via the keyboard. |
| **get_focusedItem** |none|RadMenuItem|Returns the focused root level item. Null if no item has focus.|
| **get_openedItem** |none|RadMenuItem|Returns the opened root level item. If no item is opened at the root level returns null.|
| **get_selectedItem** |none|RadMenuItem|Returns the selected Menu item. If no item is selected returns null.|
| **get_attributes** |none|Collection|Returns the collection of custom attributes for the Menu.|
| **get_clicked** |none|Boolean|True if the user has clicked on a root Menu item to expand it when ClickToOpen is True.|
| **set_clicked** |Boolean|none|Sets whether the user has clicked on a root Menu item to expand it when ClickToOpen is True. See example [here]({%slug menu/how-to/expand-root-menuitem-on-click-only%}).|
| **get_element** |none|HTML Element|Gets the DOM element for the Menu.|
| **get_contextMenuElement** |none|HTML Element|Gets the DOM element for the Menu.|
| **get_childListElement** | none | HTML Element | Gets the DOM element for the list of items in the Menu. |
| **enableEvents** |none|none|Enables the control client-side event emitting. Events are enabled by default.|
| **disableEvents** |none|none|Disables the control client-side event emitting.|
| **add_<EventName>** |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name &lt;EventName&gt;. Note that client-side event names differ from their server-side counterparts. For more information, see [Client-Side Events]({%slug menu/client-side-programming/events/overview%}). See **Example 6**. |
| **remove_<EventName>** | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name &lt;EventName&gt;. Returns "true" if the eventHandler is found and detached, "false" otherwise. For more information, see [Client-Side Events]({%slug menu/client-side-programming/events/overview%}). See **Example 7**. |


>tip Client side changes are available on the server side after postback. You can use the [ClientChanges]({%slug menu/client-side-programming/accessing-client-changes-at-the-server%}) property to access them.
>

>caption Example 1: Add a new Menu item and persist it after a postback.
````JavaScript
function AddNewItem()
{     
    var menu = $find("<%= RadMenu1.ClientID %>");
    // items in Mobile render mode are of type MobileMenuItem while in other render modes it is RadMenuItem
    var menuItemClass = Telerik.Web.UI.RadMenuItem || Telerik.Web.UI.MobileMenuItem;
    var menuItem = new menuItemClass();  
    menuItem.set_text("New Item");  
    menu.trackChanges();  
    menu.get_items().add(menuItem);  
    menu.commitChanges();  
}			
````


>caption Example 2: Disable the Menu.
````JavaScript
function DisableMenu()
{  
    var menu = $find("<%= RadMenu1.ClientID %>"); 
    menu.disable();
}		
````


>caption Example 3: Enable the Menu.
````JavaScript
function EnableMenu()
{  
    var menu = $find("<%= RadMenu1.ClientID %>");  
    menu.enable();
}		
````


>caption Example 4: Get a collection with the root items and display each item's text.
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


>caption Example 5: Get a collection with all Menu items and display each item's text.
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


>caption Example 6: Attach a client-side event handler to the Menu.
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


>caption Example 7: Remove a client-side event handler from the Menu.
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


>caption Example 7: Close menu when its item is clicked.
````ASP.NET
<telerik:RadMenu runat="server" ID="RadMenu1" RenderMode="Lightweight" OnClientItemClicking="closeMenu">
	<Items>
		<telerik:RadMenuItem Text="hover for submenu">
			<Items>
				<telerik:RadMenuItem Text="click to close menu"></telerik:RadMenuItem>
			</Items>
		</telerik:RadMenuItem>
	</Items>
</telerik:RadMenu>
<script>
	function closeMenu(sender, args) {
		args.set_cancel(true);//prevent default postback/navigation. Not needed for OnClientClicked event
		//do work here
		setTimeout(function () {
			sender.close();//close the menu
		}, 0);
	}
</script>		
````


## RadContextMenu-specific API

The **[RadContextMenu]({%slug menu/context-menus/radcontextmenu-object%})** client-side object has some additional methods that are specific to it:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **show** |(event)|none|Displays the menu as a pop-up, using the position in the DOM event that is passed as a parameter.|
| **showAt** |(int X, int Y)|none|Displays the menu as a pop-up at the coordinates specified by the parameters. Note that when calling showAt from in response to a client-side event, it is a good idea to call $telerik.cancelRawEvent(event) afterwards in order to prevent the default event processing from hiding the context menu you just displayed.|
|  **hide**  | none | none | Hides the menu. |
| **get_targets** |none|Array|Returns the array of targets to which the context menu is attached. Each target identifies an element or family of elements that cause the menu to appear when right-clicked.|
| **addTargetElement** |element|none|Attaches the context menu to the specified target element.|
| **removeTargetElement** |element|none|Detaches the context menu from the specified target element.|

## RadContextMenu static objects and methods

* The **Telerik.Web.UI.RadContextMenu.contextMenus** holds a static collection with references to all **[RadContextMenu]** ({%slug menu/context-menus/radcontextmenu-object%})s on the page.

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


* The **Telerik.Web.UI.RadContextMenu.hideAll** method hides all visible [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})s on the page.

* **addTargetElement**(element), **removeTargetElement**(element) methods to dynamically add/remove targets to the context menu.

# See Also

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [Overview]({%slug menu/client-side-programming/events/overview%})

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})
