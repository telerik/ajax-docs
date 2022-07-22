---
title: Sync thumbnail area with displayed image
description: Make the thumbnail area of the ImageGallery show the currently selected thumb image on page load and upon selection
type: how-to
page_title: Sync thumbnail area with selected image
slug: imagegallery-show-selected-image-in-thumbnail-area
position: 
tags: 
ticketid: 1573125
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadImageGallery for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
How to display the currently displayed image in the thumbnail image on page load? 
How can I force the Thumbnail Area to display the selected/displayed image in the ImageArea? When selecting a new image, the thumbnail does not sync with the selected image.

````ASP.NET
<telerik:RadImageGallery RenderMode="Lightweight" runat="server" ID="RadImageGallery2" DisplayAreaMode="Image" Width="600px"
    Visible="true" ImagesFolderPath="~/images">
    <ClientSettings>
        <ClientEvents OnImageGalleryCreated="OnImageGalleryCreated" />
    </ClientSettings>
    <ImageAreaSettings Height="500px" />
    <ThumbnailsAreaSettings Mode="Thumbnails" ShowScrollButtons="true" />
</telerik:RadImageGallery>
````

````JavaScript
function OnImageGalleryCreated(sender, args) {
    sender.get_thumbnailsArea()._move(-1 * sender.get_selectedIndex() * sender.get_thumbnailsArea().get_thumbnailWidth())
}
           
function OnNavigated(sender, args) {
    var newPosition = -1 * sender.get_selectedIndex() * sender.get_thumbnailsArea().get_thumbnailWidth();
    var oldPosition = sender._thumbnailsArea._currentScrollPosition;
    sender.get_thumbnailsArea()._move(newPosition + oldPosition) // reset thumbs scroll
}

````

## Solution
To show selected thumbnail image on page load, use the OnLoad client-side event. To keep the thumbnail images in sync with the selected images, use the OnNavigated client-side event:


## See Also
* [ImageGallery Client-side events ]({%slug imagegallery/client-side-programming/events%}) article
* [ImageGallery Functionality - Modes]({%slug imagegallery/functionality/modes%}) article
