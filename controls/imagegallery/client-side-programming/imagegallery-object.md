---
title: ImageGallery Object
page_title: ImageGallery Object | UI for ASP.NET AJAX Documentation
description: ImageGallery Object
slug: imagegallery/client-side-programming/imagegallery-object
tags: imagegallery,object
published: True
position: 0
---

# ImageGallery Object



__RadImageGallery__ for ASP.NET AJAX offers a rich client-side API that lets you access and configure the different elements of the control as well as perform certain actions using JavaScript.

## RadImageGallery properties


| Property | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_allowPaging()__ ||Bool|Gets a value indicating if the __RadImageGallery__ paging functionality is turned on.|
| __get_displayAreaMode()__ || __Telerik.Web.UI.ImageGallery.DisplayAreaMode__ |Gets the type of the __DisplayAreaMode__ .|
| __get_imageArea()__ || __Telerik.Web.UI.ImageGalleryImageArea__ |Gets the __ImageGalleryImageArea__ client-side object which is associated with the area element and its functionality.|
| __get_items()__ ||A collection of __Telerik.Web.UI.ImageGalleryItemBase__ items|Gets the collection of __Telerik.Web.UI.ImageGalleryItemBase__ items which are part of the __RadImageGallery__ .|
| __get_lightBox()__ || __Telerik.Web.UI.RadLightBox__ |Gets the __RadLightBox__ client-side object for the __RadImageGallery__ when __DisplayAreaMode="LightBox"__ .|
| __get_loadingPanel()__ || __Telerik.Web.UI.RadAjaxLoadingPanel__ |Gets the __RadAjaxLoadingPanel__ client-side object for the __RadImageGallery__ which is shown when waiting for the image from a request.|
| __get_pageSize()__ ||Number|Gets the __RadImageGallery.PageSize__ value.|
| __get_selectedItem()__ || __Telerik.Web.UI.ImageGalleryItemBase__ |Gets __ImageGalleryItemBase__ client-side object for the current selected item.|
| __get_thumbnailsArea()__ || __Telerik.Web.UI.ImageGalleryThumbnailsArea__ |Gets the __ImageGalleryThumbnailsArea__ client-side object which is associated with the thumbnail area element and its functionality.|
| __get_toolTip()__ || __Telerik.Web.UI.RadToolTip__ |Gets the __RadToolTip__ client-side object for the __RadImageGallery__ when __DisplayAreaMode="ToolTip"__ .|
| __isInFullScreen()__ ||Bool|Gets a value indicating if the control is in full screen mode.|
| __isPaused()__ ||Bool|Gets a value indicating if the __RadImageGallery__ slideshow feature is currently (paused) turned off.|
| __isPlaying()__ ||Bool|Gets a value indicating if the __RadImageGallery__ slideshow feature is currently (playing) turned on.|

## RadImageGallery methods

__RadImageGallery__ offers the following methods


| Method | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __enterFullScreen()__ |||Causes the __RadImageGallery__ control to enter full screen mode.|
| __exitFullScreen()__ |||Causes the __RadImageGallery__ control to exit full screen mode.|
| __exitFullScreen()__ |||Causes the __RadImageGallery__ control to exit full screen mode.|
| __fireCommand(commandName, commandArgument)__ |String,String|Bool|Triggers a specific command for the __RadImageGallery__ |
| __next()__ |||Selects the next item or selects the first if the currently selected item is the last.|
| __page(command)__ |String|Bool|Fires a page command.|
| __playSlideshow()__ |||Turns on the __RadImageGallery__ slideshow feature that navigates to the next image in a predefined amount of time determined by __RadImageGallery.AnimationSettings.SlideshowSlideDuration__ property.|
| __prev()__ |||Selects the previous item or selects the last if the currently selected item is the first.|
| __selectItem(itemOrItemIndex)__ | __Telerik.Web.UI.ImageGalleryItemBase__ ||Selects and animates (if animations are turned on) to the next item by specifying __Telerik.Web.UI.ImageGalleryItem__ or itemIndex.|
| __set_currentPageIndex(pageIndex)__ |Number|Bool|Sets a value indicating the index of the current active page in case paging is enabled.|
| __set_pageSize(pageSize)__ |Number|Bool|Sets the current page size.|
| __stopSlideshow()__ |||Turns off the __RadImageGallery__ slideshow feature.|
| __toggleFullScreen()__ |||Toggles __RadImageGallery__ current full screen state. It will exit the full screen mode if it is in full screen mode and vice versa.|
| __toggleSlideshow()__ |||Toggles the __RadImageGallery__ slideshow feature.|

# See Also

 * [ImageGalleryItemCollection Class Members]({%slug imagegallery/client-side-programming/imagegalleryitemcollection-object%})

 * [ImageGalleryItem Class Members]({%slug imagegallery/client-side-programming/imagegalleryitem-object%})

 * [Client-Side Events]({%slug imagegallery/client-side-programming/events%})
