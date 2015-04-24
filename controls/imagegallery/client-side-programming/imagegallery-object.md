---
title: ImageGallery Object
page_title: ImageGallery Object | RadImageGallery for ASP.NET AJAX Documentation
description: ImageGallery Object
slug: imagegallery/client-side-programming/imagegallery-object
tags: imagegallery,object
published: True
position: 0
---

# ImageGallery Object



**RadImageGallery** for ASP.NET AJAX offers a rich client-side API that lets you access and configure the different elements of the control as well as perform certain actions using JavaScript.

## RadImageGallery properties


| Property | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_allowPaging()** ||Bool|Gets a value indicating if the **RadImageGallery** paging functionality is turned on.|
| **get_displayAreaMode()** || **Telerik.Web.UI.ImageGallery.DisplayAreaMode** |Gets the type of the **DisplayAreaMode** .|
| **get_imageArea()** || **Telerik.Web.UI.ImageGalleryImageArea** |Gets the **ImageGalleryImageArea** client-side object which is associated with the area element and its functionality.|
| **get_items()** ||A collection of **Telerik.Web.UI.ImageGalleryItemBase** items|Gets the collection of **Telerik.Web.UI.ImageGalleryItemBase** items which are part of the **RadImageGallery** .|
| **get_lightBox()** || **Telerik.Web.UI.RadLightBox** |Gets the **RadLightBox** client-side object for the **RadImageGallery** when **DisplayAreaMode="LightBox"** .|
| **get_loadingPanel()** || **Telerik.Web.UI.RadAjaxLoadingPanel** |Gets the **RadAjaxLoadingPanel** client-side object for the **RadImageGallery** which is shown when waiting for the image from a request.|
| **get_pageSize()** ||Number|Gets the **RadImageGallery.PageSize** value.|
| **get_selectedItem()** || **Telerik.Web.UI.ImageGalleryItemBase** |Gets **ImageGalleryItemBase** client-side object for the current selected item.|
| **get_thumbnailsArea()** || **Telerik.Web.UI.ImageGalleryThumbnailsArea** |Gets the **ImageGalleryThumbnailsArea** client-side object which is associated with the thumbnail area element and its functionality.|
| **get_toolTip()** || **Telerik.Web.UI.RadToolTip** |Gets the **RadToolTip** client-side object for the **RadImageGallery** when **DisplayAreaMode="ToolTip"** .|
| **isInFullScreen()** ||Bool|Gets a value indicating if the control is in full screen mode.|
| **isPaused()** ||Bool|Gets a value indicating if the **RadImageGallery** slideshow feature is currently (paused) turned off.|
| **isPlaying()** ||Bool|Gets a value indicating if the **RadImageGallery** slideshow feature is currently (playing) turned on.|

## RadImageGallery methods

**RadImageGallery** offers the following methods


| Method | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **enterFullScreen()** |||Causes the **RadImageGallery** control to enter full screen mode.|
| **exitFullScreen()** |||Causes the **RadImageGallery** control to exit full screen mode.|
| **exitFullScreen()** |||Causes the **RadImageGallery** control to exit full screen mode.|
| **fireCommand(commandName, commandArgument)** |String,String|Bool|Triggers a specific command for the **RadImageGallery** |
| **next()** |||Selects the next item or selects the first if the currently selected item is the last.|
| **page(command)** |String|Bool|Fires a page command.|
| **playSlideshow()** |||Turns on the **RadImageGallery** slideshow feature that navigates to the next image in a predefined amount of time determined by **RadImageGallery.AnimationSettings.SlideshowSlideDuration** property.|
| **prev()** |||Selects the previous item or selects the last if the currently selected item is the first.|
| **selectItem(itemOrItemIndex)** | **Telerik.Web.UI.ImageGalleryItemBase** ||Selects and animates (if animations are turned on) to the next item by specifying **Telerik.Web.UI.ImageGalleryItem** or itemIndex.|
| **set_currentPageIndex(pageIndex)** |Number|Bool|Sets a value indicating the index of the current active page in case paging is enabled.|
| **set_pageSize(pageSize)** |Number|Bool|Sets the current page size.|
| **stopSlideshow()** |||Turns off the **RadImageGallery** slideshow feature.|
| **toggleFullScreen()** |||Toggles **RadImageGallery** current full screen state. It will exit the full screen mode if it is in full screen mode and vice versa.|
| **toggleSlideshow()** |||Toggles the **RadImageGallery** slideshow feature.|

# See Also

 * [ImageGalleryItemCollection Class Members]({%slug imagegallery/client-side-programming/imagegalleryitemcollection-object%})

 * [ImageGalleryItem Class Members]({%slug imagegallery/client-side-programming/imagegalleryitem-object%})

 * [Client-Side Events]({%slug imagegallery/client-side-programming/events%})
