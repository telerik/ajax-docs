---
title: Events
page_title: Events | RadImageGallery for ASP.NET AJAX Documentation
description: Events
slug: imagegallery/client-side-programming/events
tags: events
published: True
position: 3
---

# Events



## 

**RadImageGallery** provides the following client-side events to which you can subscribe in order to perform additionalactions.


| Event | Description | Arguments | Can be cancelled |
| ------ | ------ | ------ | ------ |
| **OnCommand** |Fired when a command is about to be triggered.|commandName - String,commandArgument - String|Yes|
| **OnFullScreenEntered** |Fired after the **RadImageGallery** enters full screen mode.||No|
| **OnFullScreenEntering** |Fired before the **RadImageGallery** enters full screen mode.||Yes|
| **OnFullScreenExited** |Fired after **RadImageGallery** has exited full screen mode.||No|
| **OnImageGalleryCreated** |Fired when the **RadImageGallery** client-side object finishes initialization.||No|
| **OnImageLoaded** |Fired when the image is loaded.|item – **Telerik.Web.UI.ImageGalleryItemBase** ,	imageType – **Telerik.Web.UI.ImageGallery.ImageType** image - Image|No|
| **OnImageLoading** |Fired when an image starts loading.|item - **Telerik.Web.UI.ImageGalleryItemBase** , imageType – **Telerik.Web.UI.ImageGallery.ImageType** ,set_imageUrl - function|Yes|
| **OnNavigated** |Fired after navigating to a different item.|item - **Telerik.Web.UI.ImageGalleryItemBase** |No|
| **OnNavigating** |Fired before changing the selection of an item and navigating to a different one.|item - **Telerik.Web.UI.ImageGalleryItemBase** |Yes|
| **OnSlideshowPlay** |Fired just before the slideshow functionality is turned on.||Yes|
| **OnSlideshowStop** |Fired just before the slideshow functionality is turned off.||Yes|

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


The example below demonstrates how you can subscribe to the **RadImageGallery** events and extract values from the event arguments.In the scenario, the main image will not be loaded unless it has a title.

````ASPNET
<telerik:RadImageGallery RenderMode="Lightweight" ID="RadImageGallery1" runat="server" AllowPaging="true"
	DataSourceID="SqlDataSource1" Width="800px" DataTitleField="PhotoTitle" DataImageField="Photo" DataThumbnailField="Photo" ContentViewMode="ContentArea">
	<ClientSettings>
		<ClientEvents
			OnImageGalleryCreated="imageGalleryCreated" OnImageLoaded="imageLoaded" OnImageLoading="imageLoading" />
	</ClientSettings>
</telerik:RadImageGallery>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	ProviderName="<%$ ConnectionStrings:BaseConnectionString.ProviderName %>"
	SelectCommand="SELECT TOP 20 * FROM [CustomerPhotos]"></asp:SqlDataSource>
````



````JavaScript
function imageGalleryCreated(sender) {
	//Extract the id of the control
	var galleryID = sender.get_id();
}

function imageLoaded(sender, args) {
	var image = args.get_image(),
	imageItem = args.get_item();
}

function imageLoading(sender, args) {
	//checks if the event is canceled
	var isCanceled = args.get_cancel();
	//gets the image item
	var imageItem = args.get_item();
	if (imageItem.get_title() === "") {
		//cancels the event
		args.set_cancel(true);
	}
}
````



# See Also

 * [Client-Side Basics]({%slug imagegallery/client-side-programming/imagegallery-object%})

 * [ImageGalleryItemCollection Class Members]({%slug imagegallery/client-side-programming/imagegalleryitemcollection-object%})

 * [ImageGalleryItem Class Members]({%slug imagegallery/client-side-programming/imagegalleryitem-object%})
