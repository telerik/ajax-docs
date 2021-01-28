---
title: RadComboBoxItem Object
page_title: RadComboBoxItem Object - RadComboBox
description: Check our Web Forms article about RadComboBoxItem Object.
slug: combobox/client-side-programming/objects/radcomboboxitem-object
tags: radcomboboxitem,object
published: True
position: 1
---

# RadComboBoxItem Object



## 

The **RadComboBoxItem** object is returned by the **getItem** method of the **RadComboBoxItemCollection** object. It is also exposed by the eventArgs of many client-side events (**eventArgs.get_item()**). The following table lists the most important methods:

>caption 

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **highlight** |none|none|Highlights an item.|
| **unHighlight** |none|none|Unhighlights an item.|
| **select** |none|none|Selects an item.|
| **disable** |none|none|Disables an item.|
| **enable** |none|none|Enables an item.|
| **get_comboBox** |none|object|Gets the parent **RadComboBox** control. See **Example 1**. |
| **get_highlighted** |none|boolean| **True** if the item is highlighted. To highlight an item use the **highlight** method.|
| **get_index** |none|int|Gets the index of an item in the Items collection.|
| **get_enabled** |none|boolean| **True** if the item is enabled. To enable an item use the **enable** method.|
| **get_text** |none|string|Gets the text of an item.|
| **set_text** |string|none|Sets text of an item.|
| **get_value** |none|string|Gets the value of an item.|
| **set_value** |string|none|Sets the value of an item.|
| **get_checked** |none|boolean|True if an item is checked, False if not.|
| **set_checked** |boolean|none|Checks or unchecks an item.|
| **get_isSeparator** |none|boolean|True if an item is separator (IsSeparator="True").|
| **get_attributes** |none|collection|Returns a collection of custom attributes defined for an item.|
| **getAttribute** |String|String|Returns a specific attribute from the Attributes collection.|
| **setAttribute** |String, String|none|Adds an attribute to the Attributes collection. See **Example 2**. |
| **get_visible** |none|boolean|True if the item is visible.|
| **set_visible** |boolean|none|Sets the visibility of an item.|
| **show** |none|none|Makes the item visible, same as set_visible(true).|
| **hide** |none|none|Makes the item invisible, same as set_visible(false).|
| **get_imageUrl** |none|string|Returns the full path to an item's image.|
| **set_imageUrl** |string|none|Sets the **ImageUrl** property of an item.|
| **get_disabledImageUrl** |none|string|Returns the full path to the image of a disabled item.|
| **set_disabledImageUrl** |string|none|Sets the **DisabledImageUrl** property of an item.|
| **findControl** |string|object|Returns the object which is in the item template.|
| **get_element** |none|HTML element|Returns the `<LI>` HTML element of an item.|




>caption Example 1: Gets the parent **RadComboBox** control. 
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



>caption Example 2: Get an item's attribute and set a value to it.
````JavaScript

var combo = $find("<%= RadComboBox2.ClientID %>");
var item = combo.findItemByText("Apples");

//get a custom attribute called "Color"
item.get_attributes().getAttribute("Color");

//set new custom attribute called "Size"
item.get_attributes().setAttribute("Size", "2");
	
````



# See Also

 * [RadComboBox Object]({%slug combobox/client-side-programming/objects/radcombobox-object%})

 * [RadComboBoxItemCollection Object]({%slug combobox/client-side-programming/objects/radcomboboxitemcollection-object%})
