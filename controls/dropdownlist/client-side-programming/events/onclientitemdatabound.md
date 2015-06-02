---
title: OnClientItemDataBound
page_title: OnClientItemDataBound | RadDropDownList for ASP.NET AJAX Documentation
description: OnClientItemDataBound
slug: dropdownlist/client-side-programming/events/onclientitemdatabound
tags: onclientitemdatabound
published: True
position: 4
---

# OnClientItemDataBound



## 

The **OnClientItemDataBound** client-side event occurs for each item that is created during [WebService(including if ODataSource is used)]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}).

The event handler receives two parameters:

1. The instance of the DropDownList firing the event.

2. An eventArgs parameter containing the following methods:

	* **get_item()** returns a RadDropDownListItem client-object

	* **get_dataItem()** returns a reference to the **DataItem** that the current Item is being bound to.

The following example shows how a value is extracted from the **DataItem** and set as a Custom Attribute to Items loaded via a Web Service:

````JavaScript
	
function onItemDataBound(sender, eventArgs) {
    var item = eventArgs.get_item();
    var dataItem = eventArgs.get_dataItem();
    var phone = dataItem.Phone;
    item.get_attributes().setAttribute("phone", phone);
}
	
````


