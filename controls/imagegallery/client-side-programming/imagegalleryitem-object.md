---
title: ImageGalleryItem Object
page_title: ImageGalleryItem Object | RadImageGallery for ASP.NET AJAX Documentation
description: ImageGalleryItem Object
slug: imagegallery/client-side-programming/imagegalleryitem-object
tags: imagegalleryitem,object
published: True
position: 1
---

# ImageGalleryItem Object



**RadImageGallery** exposes an **ImageGalleryItemCollection** available through the **get_items()** method. It contains the different **RadImageGalleryItems** which hold data related to a certain image. The properties for every **RadImageGalleryItem** are listed in the table below.

## RadImageGalleryItem properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_description()** ||String|Gets the related description.|
| **get_height()** ||String|Returns the height of the image.|
| **get_imageUrl()** ||String|Returns the URL of the image.|
| **get_itemIndex()** ||Number|Gets the index of the particular item.|
| **get_owner()** || **Telerik.Web.UI.RadImageGallery** |Gets the parent of the current object.|
| **get_thumbnailElement()** ||HTML Element|Returns the related thumbnail element.|
| **get_thumbnailUrl()** ||String|Returns the URL of the thumbnail.|
| **get_title()** ||String|Gets the title of the image.|
| **get_width()** ||String|Returns the width of the image.|

The example below illustrates how you can use a property to extract a value from the **RadImageGalleryItem**. The logic shown traverses all the items and stores the titles in a collection.

````ASPNET
<telerik:RadImageGallery ID="RadImageGallery1" runat="server" AllowPaging="true"
	DataSourceID="SqlDataSource1" Width="800px" DataTitleField="PhotoTitle" DataImageField="Photo" DataThumbnailField="Photo" >
</telerik:RadImageGallery>
````



````JavaScript
function pageLoad() {
	var imageGallery = $find('<%=RadImageGallery1.ClientID%>'),
	items = imageGallery.get_items(),
	count = items.get_count(),
	titles = [];
	for (var i = 0; i < count; i++) {
		titles.push(items.getItem(i).get_title());
	}
}
````



# See Also

 * [Client-Side Basics]({%slug imagegallery/client-side-programming/imagegallery-object%})

 * [ImageGalleryItemCollection Class Members]({%slug imagegallery/client-side-programming/imagegalleryitemcollection-object%})
