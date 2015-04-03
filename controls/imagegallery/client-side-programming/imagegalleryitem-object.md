---
title: ImageGalleryItem Object
page_title: ImageGalleryItem Object | UI for ASP.NET AJAX Documentation
description: ImageGalleryItem Object
slug: imagegallery/client-side-programming/imagegalleryitem-object
tags: imagegalleryitem,object
published: True
position: 1
---

# ImageGalleryItem Object



__RadImageGallery__ exposes an __ImageGalleryItemCollection__ available through the __get_items()__ method. It contains the different __RadImageGalleryItems__ which hold data related to a certain image. The properties for every__RadImageGalleryItem__ are listed in the table below.

## RadImageGalleryItem properties


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_description()__ ||String|Gets the related description.|
| __get_height()__ ||String|Returns the height of the image.|
| __get_imageUrl()__ ||String|Returns the URL of the image.|
| __get_itemIndex()__ ||Number|Gets the index of the particular item.|
| __get_owner()__ || __Telerik.Web.UI.RadImageGallery__ |Gets the parent of the current object.|
| __get_thumbnailElement()__ ||HTML Element|Returns the related thumbnail element.|
| __get_thumbnailUrl()__ ||String|Returns the URL of the thumbnail.|
| __get_title()__ ||String|Gets the title of the image.|
| __get_width()__ ||String|Returns the width of the image.|

The example below illustrates how you can use a property to extract a value from the __RadImageGalleryItem__. The logic shown traverses all the items and stores the titles in a collection.

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
