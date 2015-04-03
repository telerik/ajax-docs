---
title: OnClientItemDataBound
page_title: OnClientItemDataBound | UI for ASP.NET AJAX Documentation
description: OnClientItemDataBound
slug: dropdownlist/client-side-programming/events/onclientitemdatabound
tags: onclientitemdatabound
published: True
position: 4
---

# OnClientItemDataBound



## 

The __OnClientItemDataBound__ client-side event occurs for each item that is created during [WebService(including if ODataSource is used)](348DC4C7-D0C7-40DE-8982-1C4D6C8EA3E9).

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item()__ returns a RadDropDownListItem client-object

* __get_dataItem()__ returns a reference to the __DataItem__ that the current Item is being bound to.

The following example shows how a value is extracted from the __DataItem__ and set as a Custom Attribute to Items loaded via a Web Service:

````JavaScript
	
	            function onItemDataBound(sender, eventArgs) {
	                var item = eventArgs.get_item();
	                var dataItem = eventArgs.get_dataItem();
	                var phone = dataItem.Phone;
	                item.get_attributes().setAttribute("phone", phone);
	            }
	
````


