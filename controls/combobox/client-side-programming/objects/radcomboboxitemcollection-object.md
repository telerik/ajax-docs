---
title: RadComboBoxItemCollection Object
page_title: RadComboBoxItemCollection Object - RadComboBox
description: Check our Web Forms article about RadComboBoxItemCollection Object.
slug: combobox/client-side-programming/objects/radcomboboxitemcollection-object
tags: radcomboboxitemcollection,object
published: True
position: 2
---

# RadComboBoxItemCollection Object



## 

The **RadComboBoxItemCollection** object is returned by the **get_items** method of the **RadComboBox** object. The following table lists the most important methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |RadComboBoxItem|none|Adds an item to the Items collection. See **Example 1**. |
| **insert** |int, RadComboBoxItem|none|Inserts an item into the Items collection at the position specified by the first (index) parameter. See **Example 2**. |
| **remove** |RadComboBoxItem|none|Removes a child item from the Items collection. See **Example 3**. |
| **clear** |none|none|Clears the Items collection of RadComboBox. See **Example 4**. |
| **getItem** |int|RadComboBoxItem|Gets the item from the Items collection residing at the index specified by the parameter. See **Example 5**. |
| **indexOf** |RadComboBoxItem|int|Gets the index of an item. See **Example 6**. |
| **removeAt** |int|none|Removes the item at the specified index. See **Example 7**. |
| **get_count** |none|int|Returns the number of items in the Items collection. See **Example 8**. |





>caption Example 1: Add an item to the Items collection.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items();
combo.trackChanges();
var comboItem = new Telerik.Web.UI.RadComboBoxItem();
comboItem.set_text("New");
comboItem.set_value("Value");

items.add(comboItem); 
combo.commitChanges();
	
````



>caption Example 2: Insert a new item into the Items collection at index 0.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items();

combo.trackChanges();
var comboItem = new Telerik.Web.UI.RadComboBoxItem();
comboItem.set_text("New");
comboItem.set_value("Value");
items.insert(0, comboItem); 
combo.commitChanges();
	
````



>caption Example 3: Find an item by its text value and remove it from the Items collection. 
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items();
var comboItem = combo.findItemByText("Paris");
combo.trackChanges();
items.remove(comboItem); 
combo.commitChanges();
	
````



>caption Example 4: Clear the Items collection.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items(); 
items.clear();
	
````


>caption Example 5: Get the item at index 1 from the Items collection.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items();
//Gets the second item from the Items collection 
var comboItem = items.getItem(1);
	
````



>caption Example 6: Find an item by its text value and get its index in the Items collection.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items();
var comboItem = combo.findItemByText("Paris"); 
var index = items.indexOf(comboItem);
	
````



>caption Example 7: Remove the item at the specified index.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>"); 
var items = combo.get_items();
var comboItem = combo.findItemByText("Paris"); 
var index = items.indexOf(comboItem);
items.removeAt(index);
	
````



>caption Example 8: Get the number of items in the Items collection and display their text value.
````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var items = combo.get_items(); 
for (i = 0; i < items.get_count(); i++) 
{
    alert(items.getItem(i).get_text());
}
	
````



# See Also

 * [RadComboBox Object]({%slug combobox/client-side-programming/objects/radcombobox-object%})

 * [RadComboBoxItem Object]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%})
