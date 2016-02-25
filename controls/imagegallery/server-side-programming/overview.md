---
title: Overview
page_title: Server-side Programming Overview | RadImageGallery for ASP.NET AJAX Documentation
description: Overview
slug: imagegallery/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



**RadImageGallery** provides a rich set of server-side properties and events that can help you configure thelook and behaviour of the control.

## General RadImageGallery Properties.

**Table 1** demonstrates some general properties of the **RadImageGallery**:


| Property | Description |
| ------ | ------ |
| **AllowPaging** |Gets/sets a value indicating whether paging should be enabled or not.|
| **AnimationSettings** |Gets the animation settings for the **RadImageGallery** . Inner properties determine the animations between items.|
| **AppendDataBoundItems** |Gets/sets a value which indicates whether to append the newly data bound items.|
| **Culture** |Gets/sets the control's culture.|
| **CurrentItemIndex** |Gets/sets the current item index.|
| **CurrentPageIndex** |Get/sets the current page index.|
| **DataDescriptionField** |Gets/sets a value that points to a field that contains the description.|
| **DataImageField** |Gets/sets a value that points to a field that contains the image.|
| **DataKeyNames** |Gets or sets an array of data-field names that will be used to populate the **DataKeyValues** collection.|
| **DataSource** |Gets or sets the object from which the data-bound control retrieves its list of data items.|
| **DataSourceID** |Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.|
| **DataThumbnailField** |Gets/sets a value that points to a field that contains the thumbnail images.|
| **DataTitleField** |Gets/sets a value that points to a field that contains the title.|
| **DisplayAreaMode** |Gets or sets a value determining the appearance and way the control will work. Possible values are: **Image**, **Thumbnails**, **LightBox**, **ToolTip** |
| **ImageAreaSettings** |Gets the settings for the **ImageArea** . Inner properties configure the look of the area where the main image will be displayed.|
| **ImagesFolderPath** |Sets the path to the folder that contains the images that will be displayed.|
| **Items** |Gets the **Items** collection that holds the data associated with the thumbnail items and the items that will be shown in the current display area mode.|
| **LoadingPanel** |Gets the **RadAjaxLoadingPanel** that will be displayed when waiting for the image.|
| **LocalizationPath** |Gets or sets a value indicating where **RadImageGallery** will look for its **.resx** localization files.|
| **PagerStyle** |Gets the setting for the page. Inner properties configure the position and look of the pager.|
| **PageSize** |Get/sets the number of images that will be displayed.|
| **ThumbnailsAreaSettings** |Gets the settings for the **ThumbnailsArea** . Inner properties configure the look of the area that holds the thumbnails.|
| **LoopItems** |Specifies whether the slideshow should start over after the last item is shown.|

## Thumbnails Area Properties

**Table 2** describes the properties you can set in order to configure the look of the thumbnails area:


| RadImageGallery.ThumbnailsAreaSettings Properties | Description |
| ------ | ------ |
| **EnableZoneScroll** |Gets or sets a value determining if the **ThumbnailsArea** will be automatically scrolledwhen the mouse is close enough from the left or right side of the area.|
| **Height** |Gets or sets the height of the area that holds the thumbnails.|
| **Mode** |Gets or sets an enumeration determining how the **ThumbnailsArea** will look and function. It has three values: **Thumbnails**, **ImageSlider**, **ImageSliderPreview** |
| **ScrollNextButtonText** |Gets or sets the text that is displayed for the **ScrollNextButton** .|
| **ScrollPrevButtonText** |Gets or sets the text that is displayed for the **ScrollPrevButton** .|
| **ShowScrollbar** |Gets or sets a value determining if a scrollbar will be displayed in the **ThumbnailsArea** .|
| **ShowScrollButtons** |Gets or sets a value indicating if the buttons that scroll the **ThumbnailsArea** view will be visible.|
| **ThumbnailHeight** |Gets or sets the height of each thumbnail.|
| **ThumbnailsSpacing** |Gets or sets the padding between the items in the area.|
| **ThumbnailWidth** |Gets or sets the width of each thumbnail.|
| **Width** |Gets or sets the width of the area that holds the thumbnails.|

## Image Area Properties

To configure the look and feel of the area holding the main image, you can use the properties listed in **Table 3**:


| RadImageGallery.ImageAreaSettings Properties | Description |
| ------ | ------ |
| **Height** |Gets or sets the height of the area that contains the main image.|
| **NavigationMode** |Gets or sets a value indicating how the navigation will be performed. It has two values: **Button** - The user can navigate by clicking on the left/right buttons. **Zone** - Clicking on the left half of the image navigates backwards and clicking on the right half navigates forwards.|
| **NextImageButtonText** |Gets or sets the text that is displayed for the next button.|
| **PrevImageButtonText** |Gets or sets the text that is displayed for the previous button.|
| **ResizeMode** |Gets or sets a value determining the way the image will be resized when placed in the **ImageArea** . It has two values: **Fit** - Will scale the image so it is entirely visible. **Fill** - Will scale the image to fill the entire **ImageArea** but will crop parts of the image.|
| **ShowDescriptionBox** |Gets or set a value indicating whether to show a box with a description of the image.|
| **ShowNextPrevImageButtons** |Gets or sets a value determining if the **Next** / **Prev** navigation buttons will be visible.|
| **Width** |Gets or sets the width of the area that contains the main image.|

## PagerStyle Properties

**Table 4** lists properties for configuring the styles of the Pager:


| RadImageGallery.PagerStyle Properties | Description |
| ------ | ------ |
| **AlwaysVisible** |Gets or set a value indicating whether the pager will be visible regardless of the number of items.|
| **PageButtonCount** |Gets or sets the number of page buttons that will be rendered if **GridPagerMode.NumericPages** .|
| **PagerTextFormat** |The string used to format the description text that appears in a pager item. Default value is **"Page {0} of {1}"** .|
| **Position** |Gets or sets the position of the pager item. It can be set to the following values: **Bottom**, **Top**, **TopAndBottom** |
| **ShowPagerText** |Gets or sets a value indicating whether the pager text or only the pager buttons will be displayed.|

## AnimationSettings Properties

One of the most important features that **RadImageGallery** provides is the animations performed when changingthe different images. **Table 5** lists the properties that can help you configure the animation settings.


| RadImageGallery.ClientSettings.AnimationSettings Properties | Description |
| ------ | ------ |
| **NextImagesAnimation** | Gets or sets the animation settings for the animation performed when navigating to the next image.Inner properties |
| **NextImagesAnimation-Type** | Gets or sets the type of animation that will be performed. |
| **NextImagesAnimation-Speed** | Gets or sets the period of time(in miliseconds) in which the animation will be performed. |
| **NextImagesAnimation-Easing** | Gets or sets the easing type.|
| **PrevImagesAnimation** | Gets or sets the animation settings for the animation performed when navigating to the next image.Inner properties | 
| **PrevImagesAnimation-Type** | Gets or sets the type of animation that will be performed. |
| **PrevImagesAnimation-Speed** | Gets or sets the period of time(in miliseconds) in which the animation will be performed. |
| **PrevImagesAnimation-Easing** | Gets or sets the easing type.|
| **SlideshowSlideDuration** |Gets or sets a value indicating how many milliseconds the **RadImageGallery** control will wait until it switches to the next image when the slideshow functionality is turned on.|


## ImageGalleryItem Properties

The table below list the properties available for the *ImageGalleryItems**.

| ImageGalleryItem Property | Description |
| ------ | ------ |
| **Title** |Sets the title of the item.|
| **Description** |Sets the description of the item.|
| **ImageUrl** |Sets the URL from where  the image will be retrieved.|
| **ThumbnailUrl** |Sets the URL from where the thumbnail of the item will be retrieved.|
| **NavigateUrl** |Sets the URL where the browser will be redirected after.|
| **PreventDefaultGestures** |Determines whether gestures are enabled for the currently viewed item.|


## RadImageGallery Events

**Table 6** lists common RadImageGallery events to which you can subscribe.


| Event | Description |
| ------ | ------ |
| **Command** |Fired when the **RadImageGallery** control fires a command event or when the client **fireCommand** method is called.|
| **ImageRequested** |Fired when server-side binding is used and an image is requested.|
| **ItemCreated** |Fired when a **RadImageGallery** item is created.|
| **ItemDataBound** |Fired when a **RadImageGallery** item is populated.|
| **NeedDataSource** |Fired when **RadImageGallery** needs a data source for binding.|
| **PageIndexChanged** |Fired when one of the page selection elements is clicked.|
| **PageIndexChanged** |Fired when the page size is changed through the advanced pager or manually in code.|

## RadImageGallery Methods

In **Table 7** you can find the **RadImageGallery** server-side methods.


| Method | Description |
| ------ | ------ |
| **Rebind()** |Forces the control to recreate and repopulate.|

# See Also

 * [Overview]({%slug imagegallery/overview%})

 * [Getting Started]({%slug imagegallery/getting-started%})
