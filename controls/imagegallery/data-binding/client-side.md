---
title: Client-side
page_title: Client-side | RadImageGallery for ASP.NET AJAX Documentation
description: Client-side
slug: imagegallery/data-binding/client-side
tags: client-side
published: True
position: 1
---

# Client-side



**RadImageGallery** allows you to have an entirely client-side data-binding scenario or apartial client-side binding in combination with one of the other binding methods. This is achieved by creating instances of **Telerik.Web.UI.ImageGalleryItem** object andadding those objects to the items collection of **RadImageGallery**.

## 

The code bellow demonstrates how to create and add an instanceof **Telerik.Web.UI.ImageGalleryItem** object to the items collection:

````ASPNET
<telerik:RadCodeBlock runat="server">
	<script type="text/javascript">
		function pageLoad() {
			var item = new Telerik.Web.UI.ImageGalleryItem({
				title: "Image title",
				description: "Image description",
				thumbnailUrl: "tumbnail URL goes here",
				imageUrl: "image URL goes here"
			});

			$find("<%= RadImageGallery1.ClientID %>").get_items().add(item);
		}
	</script>
</telerik:RadCodeBlock>

<div>
	<telerik:RadImageGallery RenderMode="Lightweight" ID="RadImageGallery1" runat="server">
	</telerik:RadImageGallery>
</div>
````



Following is the complete list of properties that could be set when a new instance of**Telerik.Web.UI.ImageGalleryItem** is created:

* Owner

* Width

* Height

* Title

* Description

* ImageUrl

* ThumbnailUrl

The only mandatory property from the above list is the **ImageUrl**.If the **ThumbnailUrl** property is not specified, the **ImageUrl** will be	used for showing a scaled image in the thumbnail area.

>tip When items are created and added to the items collection of the **RadImageGallery** on the client, they will be lost after each postback.
>


## Partial Client-side Binding Specifics

When client-side binding is used in combination with server-side binding or	with a static collection of items, adding new items to the items collection	with the **add(item)** method will add them at the end of the collection.	This is due to the fact that all items created on the server are already in the	items collection. In scenarios when items created on the client have to be	placed before the other items (or at a particular position), the **insert(index, item)**	method should be used instead. Here is an example for inserting items before	the server-side created items:

````ASPNET
<telerik:RadCodeBlock runat="server">
	<script type="text/javascript">
		function pageLoad() {
			var items = $find("<%= RadImageGallery1.ClientID %>").get_items();
			var index = 0;
			var item = new Telerik.Web.UI.ImageGalleryItem({
				title: "Image title",
				description: "Image description",
				thumbnailUrl: "Thumbnail URL goes here",
				imageUrl: "Image URL goes here"
			});

			items.insert(index++, item);

			item = new Telerik.Web.UI.ImageGalleryItem({
				title: "Image title",
				description: "Image description",
				thumbnailUrl: "Thumbnail2 URL goes here",
				imageUrl: "Image2 URL goes here"
			});

			items.insert(index++, item);
		}
	</script>
</telerik:RadCodeBlock>
````



# See Also

 * [Binding to a Static Collection]({%slug imagegallery/data-binding/server-side/binding-radimagegallery-to-a-static-collection-of-items%})

 * [Binding to a Declarative Data Source]({%slug imagegallery/data-binding/server-side/declarative-data-source%})

 * [Advanced Data-binding]({%slug imagegallery/data-binding/server-side/advanced-via-needdatasource%})
