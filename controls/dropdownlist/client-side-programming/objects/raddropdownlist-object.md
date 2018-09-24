---
title: RadDropDownList Object
page_title: RadDropDownList Object | RadDropDownList for ASP.NET AJAX Documentation
description: RadDropDownList Object
slug: dropdownlist/client-side-programming/objects/raddropdownlist-object
tags: raddropdownlist,object
published: True
position: 0
---

# RadDropDownList Object


The following table lists the methods of the client-side **RadDropDownList** object:




|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_items** |none|Telerik.Web.UI.DropDownListItemCollection|Gets a collection with all items.|
| **getItem** |Number|Telerik.Web.UI.DropDownListItem|Gets the item from the Items collection residing at the index specified by the parameter. See **Example 1**.|
| **findItemByText** |String|Telerik.Web.UI.DropDownListItem|Gets the first item with the given text. See **Example 1**.|
| **findItemByValue** |String|Telerik.Web.UI.DropDownListItem|Gets the first item with the given value. See **Example 1**.|
| **get_selectedItem** |none|Telerik.Web.UI.DropDownListItem|Gets the selected item. See **Example 3**.|
| **repaint** |none|none|Refreshes the RadDropDownList UI.|
| **set_enabled** |Boolean|none|Enables RadDropDownList.|
| **get_childListElement** |none|HTMLElement|Gets the UL element of the RadDropDownList.|
| **get_dropDownElement** |none|HTMLElement|Gets the root DOM element of the RadDropDownList.|
| **get_textElement** |none|HTMLElement|Gets the DOM element of the RadDropDownList where the text of the currently selected item is shown.|
| **openDropDown** |none|none|Opens the DropDown.|
| **closeDropDown** |none|none|Closes the DropDown.|
| **toggleDropDown** |none|none|Toggles the DropDown state between opened and closed.|
| **get_clientTemplate** |none|String|Returns the value of the RadDropDownList's ClientItemTemplate property.|
| **set_clientTemplate** |String|none|Sets the value of the RadDropDownList's ClientItemTemplate property.|
| **get_emptySelectionMessage** |none|String|Returns the value of the RadDropDownList's EmptySelectionMessage property.|
| **set_emptySelectionMessage** |String|none|Sets the value of the RadDropDownList's EmptySelectionMessage property.|
| **trackChanges** |none|none|Starts tracking changes made to **RadDropDownList** that will be preserved over postbacks. See **Example 4**.|
| **commitChanges** |none|none|Writes the changes to **RadDropDownList** that were made since a previous call to **trackChanges**, so that they are preserved over postbacks. Client-side changes are available on the server after postback. You can use the [ClientChanges]({%slug dropdownlist/client-side-programming/accessing-client-changes-at-the-server%}) property to access them. See **Example 4**.|
| **saveClientState** |none|none|Saves the client state to the client state hidden field.|
| **get_webServiceSettings** |none|Telerik.Web.UI.WebServiceSettings|Gets the Web service settings of the **RadDropDownList**.|
| **set_webServiceSettings** |Telerik.Web.UI.WebServiceSettings|none|Sets the Web service settings of the **RadDropDownList**.|
| **get_expandAnimation** |none|Telerik.Web.UI.AnimationSettings|Gets the expand animation settings of the **RadDropDownList**.|
| **set_expandAnimation** |Telerik.Web.UI.AnimationSettings|none|Sets the expand animation settings of the **RadDropDownList**.|
| **get_collapseAnimation** |none|Telerik.Web.UI.AnimationSettings|Gets the collapse animation settings of the **RadDropDownList**.|
| **set_collapseAnimation** |Telerik.Web.UI.AnimationSettings|none|Gets the collapse animation settings of the **RadDropDownList**.|
| **get_enableScreenBoundaryDetection** |none|Boolean|Gets the value of the EnableScreenBoundaryDetection property of the **RadDropDownList**.|
| **set_enableScreenBoundaryDetection** |Boolean|none|Sets the value of the EnableScreenBoundaryDetection property of the **RadDropDownList**.|
| **get_enableDirectionDetection** |none|Boolean|Gets the value of the EnableDirectionDetection property of the **RadDropDownList**.|
| **set_enableDirectionDetection** |Boolean|none|Sets the value of the EnableDirectionDetection property of the **RadDropDownList**.|
| **get_expandDirection** |none|Telerik.Web.UI.DropDownListExpandDirection|Gets the expand direction of the dropdown. DropDownListExpandDirection.Up = 0; DropDownListExpandDirection.Down = 1.|
| **set_expandDirection** |Telerik.Web.UI.DropDownListExpandDirection|none|Sets the expand direction of the dropdown. DropDownListExpandDirection.Up = 0; DropDownListExpandDirection.Down = 1.|
| **get_rippleZonesConfiguration** |none|Array|Returns an array with two objects with "element" and "rippleConfigurations" properties. The first object has the configuration of the DropDownList element and the second object - for the dropdown element of the DropDownList. |

>caption  Example 1: Find an item by index, text, value.
````JavaScript
var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
var itemsList = dropwdownlist.get_items();
var itemByIndex = itemsList.getItem(0);
var itemByText = itemsList.findItemByText("Item 1");
var itemByValue = itemsList.findItemByValue("1");
````

>caption  Example 2: Select an item.
````JavaScript
var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
var itemsList = dropwdownlist.get_items();
var itemByIndex = itemslist.getItem(0);
itemByIndex.select();
````

>caption  Example 3: Clear selection.
````JavaScript
var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
var itemsList = Itemslist.get_items();
var selectedItem = dropdownlist.get_selectedItem();
if(selectedItem){
    selectedItem.unselect();
}
````

>caption Example 4: Add a new item and persist it after a postback. 
````JavaScript
		
function AddNewItem() {
    var dropdownlist = $find("<%= RadDropDownList1.ClientID %>");
    var dropdownlistItem = new Telerik.Web.UI.DropDownListItem();
    dropdownlistItem.set_text("item");
    dropdownlist.trackChanges();
    dropdownlist.get_items().add(dropdownlistItem);
    dropdownlistItem.select();
    dropdownlist.commitChanges();
}
	
````



