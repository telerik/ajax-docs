---
title: ImageGalleryItemCollection Object
page_title: ImageGalleryItemCollection Object | RadImageGallery for ASP.NET AJAX Documentation
description: ImageGalleryItemCollection Object
slug: imagegallery/client-side-programming/imagegalleryitemcollection-object
tags: imagegalleryitemcollection,object
published: True
position: 2
---

# ImageGalleryItemCollection Object



The **ImageGalleryItemCollection** available through the **get_items()** method of the **RadImageGallery** object holds the different items of type **ImageGalleryItem** containing data related to a certain image. The collection exposes methods listed in the table below.

## ImageGalleryItemCollection methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add(item)** | **ImageGalleryItem** |None|Adds an item to the collection.|
| **insert(index,item)** | **ImageGalleryItem, Number** |None|Adds an item at a given position.|
| **remove(item)** | **ImageGalleryItem** |None|Removes an item from the collection.|
| **removeAt(index)** | **Number** |None|Removes an item at a given position.|
| **clear()** ||None|Clears the items collection.|
| **get_count()** ||Number|Returns the number of items.|
| **getItem(index)** | **Number** | **ImageGalleryItem** |Returns the **ImageGalleryItem** positioned at a given index.|
| **indexOf(item)** | **ImageGalleryItem** |Number|Returns the index of the given item. If such does not exist returns -1.|
| **forEach(lamda)** | **Function expression** |None|Applies the expression for every item in the collection.|
| **toArray()** ||Array|Returns a JavaScript Array containing items of type **ImageGalleryItem.** |

The example below illustrates how you can add a **RadImageGalleryItem** to the collection using the **add()** method.

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


