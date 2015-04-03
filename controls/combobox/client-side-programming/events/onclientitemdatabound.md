---
title: OnClientItemDataBound
page_title: OnClientItemDataBound | UI for ASP.NET AJAX Documentation
description: OnClientItemDataBound
slug: combobox/client-side-programming/events/onclientitemdatabound
tags: onclientitemdatabound
published: True
position: 8
---

# OnClientItemDataBound



## 

The __OnClientItemDataBound__ client-side event occurs for each item that is created during [WebService Load on Demand]({%slug combobox/load-on-demand/loading-items-from-a-web-service%}). This event is added in 2008 Q3 SP2 release (Telerik.Web.UI.dll v.2008.3.1314).

The event handler receives two parameters:

1. The instance of the combobox firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item()__ returns a RadComboBoxItem client-object

* __get_dataItem()__ returns a reference to the __DataItem__ (__RadComboBoxItemData__ or any other serializable custom class) that the current Item is being bound to.

* __get_domEvent()__ is __undefined__for this event.

The following example shows how a value is extracted from the __DataItem__ and set as a Custom Attribute to Items loaded via a Web Service:

````JavaScript
	
	
	        function onItemDataBound(sender, eventArgs) 
	        {
	            var item = eventArgs.get_item();
	            var dataItem = eventArgs.get_dataItem(); 
	            var phone = dataItem.Phone;
	            item.get_attributes().setAttribute("phone", phone);
	        }
	
````



>tip Another usage of the DataItem object is in __client-side Templates__ that are about to be introduced with the next version of ASP.NET AJAX. See the following blog post for more details -[RadComboBox and ASP.NET AJAX 4.0 Preview – using client-side templates and webservice load on demand]( http://blogs.telerik.com/veselinvasilev/posts/09-01-15/RadComboBox-and-ASP-NET-AJAX-4-0-Preview-ndash-using-client-side-templates-and-webservice-load-on-demand.aspx).
>


# See Also

 * [Loading Items from a Web Service]({%slug combobox/load-on-demand/loading-items-from-a-web-service%})

 * [RadComboBox and ASP.NET AJAX 4.0 Preview – using client-side templates and webservice load on demand](http://blogs.telerik.com/veselinvasilev/posts/09-01-15/RadComboBox_and_ASP_NET_AJAX_4_0_Preview_ndash_using_client-side_templates_and_webservice_load_on_demand.aspx)
