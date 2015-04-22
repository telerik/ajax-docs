---
title: get_editFormItem()
page_title: get_editFormItem() | RadGrid for ASP.NET AJAX Documentation
description: get_editFormItem()
slug: grid/client-side-programming/griddataitem-object/properties/get_editformitem()
tags: get_editformitem()
published: True
position: 1
---

# get_editFormItem()



## 

Property which retrieves the HTML element for the edit form of a particular GridDataItem when EditMode is EditForms or PopUp..


|  **get_editFormItem()**  |
| ------ |
||

Example:

````JavaScript
	        function getEditFormFromItem() {
	            var masterTable = $find("<%= RadGrid1.ClientID %>").get_masterTableView();
	            var editedItemsArray = masterTable.get_editItems();
	            //get the HTML of the edit form of the first edited data item
	            var editFormItem = editedItemsArray[0].get_editFormItem();
	        }
````


