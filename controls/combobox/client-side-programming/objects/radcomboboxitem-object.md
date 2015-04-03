---
title: RadComboBoxItem Object
page_title: RadComboBoxItem Object | UI for ASP.NET AJAX Documentation
description: RadComboBoxItem Object
slug: combobox/client-side-programming/objects/radcomboboxitem-object
tags: radcomboboxitem,object
published: True
position: 1
---

# RadComboBoxItem Object



## 

The __RadComboBoxItem__ object is returned by the __getItem__ method of the __RadComboBoxItemCollection__ object. It is also exposed by the eventArgs of many client-side events (__eventArgs.get_item()__). The following table lists the most important methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __highlight__ |none|none|Highlights an item.|
| __unHighlight__ |none|none|Unhighlights an item.|
| __select__ |none|none|Selects an item.|
| __disable__ |none|none|Disables an item.|
| __enable__ |none|none|Enables an item.|
| __get_comboBox__ |none|object|Gets the parent RadComboBox control.

````ASPNET
	    <script language="javascript" type="text/javascript">
	        function OnClientSelectedIndexChangingHandler(sender, eventArgs) {
	            var item = eventArgs.get_item();
	            var combo = item.get_comboBox();
	        }
	    </script>
	
	    <telerik:radcombobox id="RadComboBox1" 
	        runat="server" 
	        onclientselectedindexchanging="OnClientSelectedIndexChangingHandler">
	    </telerik:radcombobox>
````

|
| __get_highlighted__ |none|boolean| __True__ if the item is highlighted. To highlight an item use the __highlight__ method.|
| __get_index__ |none|int|Gets the index of an item in the Items collection.|
| __get_enabled__ |none|boolean| __True__ if the item is enabled. To enable an item use the __enable__ method.|
| __get_text__ |none|string|Gets the text of an item.|
| __set_text__ |string|none|Sets text of an item.|
| __get_value__ |none|string|Gets the value of an item.|
| __set_value__ |string|none|Sets the value of an item.|
| __get_checked__ |none|boolean|True if an item is checked, False if not.|
| __set_checked__ |boolean|none|Checks or unchecks an item.|
| __get_isSeparator__ |none|boolean|True if an item is separator (IsSeparator="True").|
| __get_attributes__ |none|collection|Returns a collection of custom attributes defined for an item.|
| __getAttribute__ |String|String|Returns a specific attribute from the Attributes collection.|
| __setAttribute__ |String, String|none|Adds an attribute to the Attributes collection.

````JavaScript
	     var combo = $find("<%= RadComboBox2.ClientID %>");
	     var item = combo.findItemByText("Apples");
	
	     //get a custom attribute called "Color"
	     item.get_attributes().getAttribute("Color");
	
	     //set new custom attribute called "Size"
	     item.get_attributes().setAttribute("Size", "2");
	
````

|
| __get_visible__ |none|boolean|True if the item is visible.|
| __set_visible__ |boolean|none|Sets the visibility of an item.|
| __show__ |none|none|Makes the item visible, same as set_visible(true).|
| __hide__ |none|none|Makes the item invisible, same as set_visible(false).|
| __get_imageUrl__ |none|string|Returns the full path to an item's image.|
| __set_imageUrl__ |string|none|Sets the __ImageUrl__ property of an item.|
| __get_disabledImageUrl__ |none|string|Returns the full path to the image of a disabled item.|
| __set_disabledImageUrl__ |string|none|Sets the __DisabledImageUrl__ property of an item.|
| __findControl__ |string|object|Returns the object which is in the item template.|
| __get_element__ |none|HTML element|Returns the <LI> HTML element of an item.|

# See Also

 * [RadComboBox Object]({%slug combobox/client-side-programming/objects/radcombobox-object%})

 * [RadComboBoxItemCollection Object]({%slug combobox/client-side-programming/objects/radcomboboxitemcollection-object%})
