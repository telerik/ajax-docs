---
title: RadListBoxItemCollection Object
page_title: RadListBoxItemCollection Object | RadListBox for ASP.NET AJAX Documentation
description: RadListBoxItemCollection Object
slug: listbox/client-side-programming/objects/radlistboxitemcollection-object
tags: radlistboxitemcollection,object
published: True
position: 2
---

# RadListBoxItemCollection Object

## 

The **RadListBoxItemCollection** object is returned by the **get_items** method of the **RadListBox** client object. The following table lists the most important methods:

>caption   

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |RadListBoxItem|none|Adds an item to the Items collection|

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>"); 
var items = list.get_items(); list.trackChanges();
var item = new Telerik.Web.UI.RadListBoxItem();
item.set_text("New");
item.set_value("Value");
items.add(item); 
list.commitChanges();	
````


>caption  

|  **insert**  | int, RadListBoxItem | none | Inserts an item into the Items collection at the position specified by the first (index) parameter |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items();
list.trackChanges();
var item = new Telerik.Web.UI.RadListBoxItem();
item.set_text("New");
item.set_value("Value");
items.insert(0, item); 
list.commitChanges();	
````

>caption  

|  **remove**  | RadListBoxItem | none | Removes an item from the Items collection |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items();
var item = list.get_selectedItem();
list.trackChanges();
items.remove(item);
list.commitChanges();	
````

>caption  

|  **clear**  | none | none | Clears the Items collection of RadListBox |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items(); 
items.clear();	
````

>caption  

|  **getItem**  | index | RadListBoxItem | Gets the item from the Items collection residing at the index specified by the parameter. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items(); 
var firstItem = items.getItem(0);	
````

>caption  

|  **indexOf**  | RadListBoxItem | int | Gets the index of an item. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items(); 
var index = items.indexOf(list.get_selectedItem());	
````

>caption  

|  **removeAt**  | int | none | Removes the item at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items();
var index = items.indexOf(list.get_selectedItem()); 
items.removeAt(index);	
````

>caption  

|  **get_count**  | none | int | Returns the number of items in the Items collection. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items();
for (var i = 0; i < items.get_count(); i++) {
	alert(list.getItem(i).get_text()); 
}	
````

>caption  

|  **forEach**  | handler | none | Iterates through the Items collection |
| ------ | ------ | ------ | ------ |

````JavaScript	
var list = $find("<%= RadListBox1.ClientID %>");
var items = list.get_items();
items.forEach(function (item) {
	alert(item.get_text());
});	
````

# See Also

 * [Overview]({%slug listbox/client-side-programming/overview%})

 * [RadListBox Object]({%slug listbox/client-side-programming/objects/radlistbox-object%})

 * [RadListBoxItem Object]({%slug listbox/client-side-programming/objects/radlistboxitem-object%})

 * [Add/Remove/Disable Items on the client Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/clientside/addremovedisable/defaultcs.aspx)
