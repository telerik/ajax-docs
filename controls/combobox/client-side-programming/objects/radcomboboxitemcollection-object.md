---
title: RadComboBoxItemCollection Object
page_title: RadComboBoxItemCollection Object | RadComboBox for ASP.NET AJAX Documentation
description: RadComboBoxItemCollection Object
slug: combobox/client-side-programming/objects/radcomboboxitemcollection-object
tags: radcomboboxitemcollection,object
published: True
position: 2
---

# RadComboBoxItemCollection Object



## 

The **RadComboBoxItemCollection** object is returned by the **get_items** method of the **RadComboBox** object. The following table lists the most important methods:


>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **add** |RadComboBoxItem|none|Adds an item to the Items collection.

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

|
| **insert** |int, RadComboBoxItem|none|Inserts an item into the Items collection at the position specified by the first (index) parameter.

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

|
| **remove** |RadComboBoxItem|none|Removes a child item from the Items collection.

````JavaScript
	
	        var combo = $find("<%= RadComboBox1.ClientID %>");
	        var items = combo.get_items();
	        var comboItem = combo.findItemByText("Paris");
	        combo.trackChanges();
	        items.remove(comboItem); 
	        combo.commitChanges();
	
````

|
| **clear** |none|none|Clears the Items collection of RadComboBox.

````JavaScript
	
	        var combo = $find("<%= RadComboBox1.ClientID %>");
	        var items = combo.get_items(); 
	        items.clear();
	
````

|
| **getItem** |int|RadComboBoxItem|Gets the item from the Items collection residing at the index specified by the parameter.

````JavaScript
	
	        var combo = $find("<%= RadComboBox1.ClientID %>");
	        var items = combo.get_items();
	        //Gets the second item from the Items collection 
	        var comboItem = items.getItem(1);
	
````

|
| **indexOf** |RadComboBoxItem|int|Gets the index of an item.

````JavaScript
	
	        var combo = $find("<%= RadComboBox1.ClientID %>");
	        var items = combo.get_items();
	        var comboItem = combo.findItemByText("Paris"); 
	        var index = items.indexOf(comboItem);
	
````

|
| **removeAt** |int|none|Removes the item at the specified index.

````JavaScript
	
	        var combo = $find("<%= RadComboBox1.ClientID %>"); 
	        var items = combo.get_items();
	        var comboItem = combo.findItemByText("Paris"); 
	        var index = items.indexOf(comboItem);
	        items.removeAt(index);
	
````

|
| **get_count** |none|int|Returns the number of items in the Items collection.

````JavaScript
	
	        var combo = $find("<%= RadComboBox1.ClientID %>");
	        var items = combo.get_items(); 
			for (i = 0; i < items.get_count(); i++) 
	        {
	            alert(items.getItem(i).get_text());
	        }
	
````

|

# See Also

 * [RadComboBox Object]({%slug combobox/client-side-programming/objects/radcombobox-object%})

 * [RadComboBoxItem Object]({%slug combobox/client-side-programming/objects/radcomboboxitem-object%})
