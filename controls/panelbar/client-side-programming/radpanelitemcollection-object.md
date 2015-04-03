---
title: RadPanelItemCollection Object
page_title: RadPanelItemCollection Object | UI for ASP.NET AJAX Documentation
description: RadPanelItemCollection Object
slug: panelbar/client-side-programming/radpanelitemcollection-object
tags: radpanelitemcollection,object
published: True
position: 3
---

# RadPanelItemCollection Object



## 

The __RadPanelItemCollection__ object is returned by the __get_items__ method of the __RadPanelBar__ or __RadPanelItem__ object. The following table lists the most important methods.

>note Changes to the item collection made using these methods do not persist after a postback unless surrounded by a call to the __trackChanges__ method of the panel bar object and the __commitChanges__ method of the panel bar object.
>



>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __add__ |[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|none|Adds a child item to the end of the collection.|
|

````JavaScript
	
	
	        function AddNewItem() {
	            var panelbar = $find("<%= RadPanelBar1.ClientID %>");
	            var panelItem = new Telerik.Web.UI.RadPanelItem();
	            panelItem.set_text("New Item");
	            panelbar.trackChanges();
	            panelbar.get_items().add(panelItem); 
	            panelbar.commitChanges();
	        }
	
````

||||
| __insert__ |int,[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|none|Inserts the item into the collection at the position specified by the first (index) parameter.|
|

````JavaScript
	
	
	        function InsertAtStart() {
	            var panelbar = $find("<%= RadPanelBar1.ClientID %>");
	            var panelItem = new Telerik.Web.UI.RadPanelItem();
	            panelItem.set_text("New Item");
	            panelbar.trackChanges();
	            panelbar.get_items().insert(0, panelItem); 
	            panelbar.commitChanges();
	        }
	
````

||||
| __remove__ |[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|none|Removes the specified item from the collection.|
|

````JavaScript
	
	
	        function deleteItem() {
	            var panelbar = $find("<%= RadPanelBar1.ClientID %>");
	            var panelItem = panelbar.findItemByText("victim");
	            if (panelItem) {
	                panelbar.trackChanges();
	                panelbar.get_items().remove(panelItem);
	                panelbar.commitChanges(); 
	            }
	        }
	
````

||||
| __removeAt__ |int|none|Removes the item at the specified index.|
|

````JavaScript
	
	
	        function removeLastItem() {
	            var panelbar = $find("<%= RadPanelBar1.ClientID %>");
	            var items = panelbar.get_items();
	            if (items.get_count() > 0) {
	                panelbar.trackChanges();
	                items.removeAt(items.get_count() - 1);
	                panel.commitChanges();
	            } 
	         }
	
````

||||
| __clear__ |none|none|Clears the Items collection of all the child items it contains.|
|

````JavaScript
	
	
	         var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	         panelBar.trackChanges();
	         panelBar.get_items().getItem(0).get_items().clear(); 
	         
	         panelBar.commitChanges();
	
````

||||
| __getItem__ |int|[RadPanelItem]({%slug panelbar/client-side-programming/radpanelitem-object%})|Returns the item from the collection that resides at the specified index.|
|

````JavaScript
	
	         var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	         var rootItem1 = panelBar.get_items().getItem(0);
	
````

||||
| __indexOf__ |RadPanelItem|int|Returns the index of an item.|
|

````JavaScript
	
	
	         var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	         var item = panelBar.findItemByText("target");
	         if (item) {
	             var index = item.get_parent().get_items().indexOf(item); 
	        }
	
````

||||
| __get_count__ |none|int|Returns the number of the items in the collection.|
|

````JavaScript
	
	
	         var panelBar = $find("<%= RadPanelBar1.ClientID %>");
	         var items = panelBar.get_items();
	         for (var i = 0; i < items.get_count(); i++) {
	             alert(items.getItem(i).get_text());
	         }
	
````

||||

# See Also

 * [Working With Items at the Client]({%slug panelbar/radpanelbar-items/working-with-items-at-the-client%})

 * [Overview]({%slug panelbar/client-side-programming/overview%})

 * [RadPanelBar Object]({%slug panelbar/client-side-programming/radpanelbar-object%})
