---
title: RadMenuItemCollection Object
page_title: RadMenuItemCollection Object | UI for ASP.NET AJAX Documentation
description: RadMenuItemCollection Object
slug: menu/client-side-programming/objects/radmenuitemcollection-object
tags: radmenuitemcollection,object
published: True
position: 2
---

# RadMenuItemCollection Object



## 

The __RadMenuItemCollection__ object is returned by the __get_items__ method of the [RadMenu object]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%}) or the [RadMenuItem object]({%slug menu/client-side-programming/objects/radmenuitem-object%}). The following table lists the most important methods.

>note Changes to the item collection made using these methods do not persist after a postback unless surrounded by a call to the __trackChanges__ method of the menu object and the __commitChanges__ method of the menu object.
>



>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add__ |RadMenuItem|none|Adds a child item to the collection.|

````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    menu.trackChanges();
	    var childItem = new Telerik.Web.UI.RadMenuItem();
	    childItem.set_text("New");
	    menu.get_items().add(childItem);
	    menu.commitChanges();		
````




>caption  

|  __insert__  | int, RadMenuItem | none | Inserts the item into the collection at the position defined by the first (index) parameter. |
| ------ | ------ | ------ | ------ |

````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    menu.trackChanges();
	    var childItem = new Telerik.Web.UI.RadMenuItem();
	    childItem.set_text("New");
	    menu.get_items().insert(0, childItem);
	    menu.commitChanges();		
````




>caption  

|  __remove__  | RadMenuItem | none | Removes the specified item from the collection. |
| ------ | ------ | ------ | ------ |

````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var menuItem = menu.get_items().getItem(0);
	    menu.trackChanges();
	    menu.get_items().remove(menuItem);
	    menu.commitChanges();	
````




>caption  

|  __clear__  | none | none | Clears the Items collection of all the child items it contains. |
| ------ | ------ | ------ | ------ |



````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    menu.trackChanges();
	    menu.get_items().getItem(0).get_items().clear();
	    menu.commitChanges();	
````




>caption  

|  __getItem__  | int | RadMenuItem | Returns the item from the collection that resides at the specified index. |
| ------ | ------ | ------ | ------ |



````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var rootItem1 = menu.get_items().getItem(0);		
````




>caption  

|  __indexOf__  | RadMenuItem | int | Returns the index of an item. |
| ------ | ------ | ------ | ------ |



````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var rootItem2 = menu.get_items().getItem(1);
	    var index = menu.get_items().indexOf(rootItem2);		
````




>caption  

|  __removeAt__  | int | none | Removes the item at the specified index. |
| ------ | ------ | ------ | ------ |



````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var item = menu.findItemByText("victim");
	    var items = item.get_parent().get_items();
	    var index = items.indexOf(item);items.removeAt(index);		
````




>caption  

|  __get_count__  | none | int | Returns the number of the items in the collection. |
| ------ | ------ | ------ | ------ |



````JavaScript
	    var menu = $find("<%= RadMenu1.ClientID %>");
	    var items = menu.get_items();
	    for (var i = 0; i < items.get_count(); i++) {
	        alert(items.getItem(i).get_text());
	    }		
````



# See Also

 * [Working With Items at Client-side]({%slug menu/radmenu-items/working-with-items-at-client-side%})

 * [Methods and Properties]({%slug menu/server-side-programming/methods-and-properties%})

 * [Overview]({%slug menu/client-side-programming/overview%})
