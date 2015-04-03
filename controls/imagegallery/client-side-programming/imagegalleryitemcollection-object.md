---
title: ImageGalleryItemCollection Object
page_title: ImageGalleryItemCollection Object | UI for ASP.NET AJAX Documentation
description: ImageGalleryItemCollection Object
slug: imagegallery/client-side-programming/imagegalleryitemcollection-object
tags: imagegalleryitemcollection,object
published: True
position: 2
---

# ImageGalleryItemCollection Object



The __ImageGalleryItemCollection__ available through the __get_items()__ method of the __RadImageGallery__ object holds the different items of type __ImageGalleryItem__ containing data related to a certain image. The collection exposes methods listed in the table below.

## ImageGalleryItemCollection methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add(item)__ | __ImageGalleryItem__ |None|Adds an item to the collection.|
| __insert(index,item)__ | __ImageGalleryItem, Number__ |None|Adds an item at a given position.|
| __remove(item)__ | __ImageGalleryItem__ |None|Removes an item from the collection.|
| __removeAt(index)__ | __Number__ |None|Removes an item at a given position.|
| __clear()__ ||None|Clears the items collection.|
| __get_count()__ ||Number|Returns the number of items.|
| __getItem(index)__ | __Number__ | __ImageGalleryItem__ |Returns the __ImageGalleryItem__ positioned at a given index.|
| __indexOf(item)__ | __ImageGalleryItem__ |Number|Returns the index of the given item. If such does not exist returns -1.|
| __forEach(lamda)__ | __Function expression__ |None|Applies the expression for every item in the collection.|
| __toArray()__ ||Array|Returns a JavaScript Array containing items of type __ImageGalleryItem.__ |

The example below illustrates how you can add a __RadImageGalleryItem__ to the collection using the __add()__ method.

````ASPNET
	    <telerik:RadImageGallery runat="server" ID="RadImageGallery1" ></telerik:RadImageGallery>
````



````JavaScript
	        function pageLoad() {
	            var item = new Telerik.Web.UI.ImageGalleryItem({
	                title: "Red Rose",
	                description: "The beauty of the Red Rose",
	                thumbnailUrl: "Images/Rose.jpg",
	                imageUrl: "Images/Rose.jpg"
	            });
	            $find('<%=RadImageGallery1.ClientID%>').get_items().add(item);
	        }
````


