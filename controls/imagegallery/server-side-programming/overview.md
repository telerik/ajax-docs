---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: imagegallery/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



__RadImageGallery__ provides a rich set of server-side properties and events that can help you configure thelook and behaviour of the control.

## General RadImageGallery Properties.

__Table 1__ demonstrates some general properties of the __RadImageGallery__:


| Property | Description |
| ------ | ------ |
| __AllowPaging__ |Gets/sets a value indicating whether paging should be enabled or not.|
| __AnimationSettings__ |Gets the animation settings for the __RadImageGallery__ . Inner properties determine the animations between items.|
| __AppendDataBoundItems__ |Gets/sets a value which indicates whether to append the newly data bound items.|
| __Culture__ |Gets/sets the control's culture.|
| __CurrentItemIndex__ |Gets/sets the current item index.|
| __CurrentPageIndex__ |Get/sets the current page index.|
| __DataDescriptionField__ |Gets/sets a value that points to a field that contains the description.|
| __DataImageField__ |Gets/sets a value that points to a field that contains the image.|
| __DataKeyNames__ |Gets or sets an array of data-field names that will be used to populate the __DataKeyValues__ collection.|
| __DataSource__ |Gets or sets the object from which the data-bound control retrieves its list of data items.|
| __DataSourceID__ |Gets or sets the ID of the control from which the data-bound control retrieves its list of data items.|
| __DataThumbnailField__ |Gets/sets a value that points to a field that contains the thumbnail images.|
| __DataTitleField__ |Gets/sets a value that points to a field that contains the title.|
| __DisplayAreaMode__ |Gets or sets a value determining the appearance and way the control will work. Possible values are:

*  __Image__ 

*  __Thumbnails__ 

*  __LightBox__ 

*  __ToolTip__ |
| __ImageAreaSettings__ |Gets the settings for the __ImageArea__ . Inner properties configure the look of the area where the main image will be displayed.|
| __ImagesFolderPath__ |Sets the path to the folder that contains the images that will be displayed.|
| __Items__ |Gets the __Items__ collection that holds the data associated with the thumbnail items and the items that will be shown in the current display area mode.|
| __LoadingPanel__ |Gets the __RadAjaxLoadingPanel__ that will be displayed when waiting for the image.|
| __LocalizationPath__ |Gets or sets a value indicating where __RadImageGallery__ will look for its __.resx__ localization files.|
| __PagerStyle__ |Gets the setting for the page. Inner properties configure the position and look of the pager.|
| __PageSize__ |Get/sets the number of images that will be displayed.|
| __ThumbnailsAreaSettings__ |Gets the settings for the __ThumbnailsArea__ . Inner properties configure the look of the area that holds the thumbnails.|

## Thumbnails Area Properties

__Table 2__ describes the properties you can set in order to configure the look of the thumbnails area:


| RadImageGallery.ThumbnailsAreaSettings Properties | Description |
| ------ | ------ |
| __EnableZoneScroll__ |Gets or sets a value determining if the __ThumbnailsArea__ will be automatically scrolledwhen the mouse is close enough from the left or right side of the area.|
| __Height__ |Gets or sets the height of the area that holds the thumbnails.|
| __Mode__ |Gets or sets an enumeration determining how the __ThumbnailsArea__ will look and function. It has three values:

*  __Thumbnails__ 

*  __ImageSlider__ 

*  __ImageSliderPreview__ |
| __ScrollNextButtonText__ |Gets or sets the text that is displayed for the __ScrollNextButton__ .|
| __ScrollPrevButtonText__ |Gets or sets the text that is displayed for the __ScrollPrevButton__ .|
| __ShowScrollbar__ |Gets or sets a value determining if a scrollbar will be displayed in the __ThumbnailsArea__ .|
| __ShowScrollButtons__ |Gets or sets a value indicating if the buttons that scroll the __ThumbnailsArea__ view will be visible.|
| __ThumbnailHeight__ |Gets or sets the height of each thumbnail.|
| __ThumbnailsSpacing__ |Gets or sets the padding between the items in the area.|
| __ThumbnailWidth__ |Gets or sets the width of each thumbnail.|
| __Width__ |Gets or sets the width of the area that holds the thumbnails.|

## Image Area Properties

To configure the look and feel of the area holding the main image, you can use the properties listed in __Table 3__:


| RadImageGallery.ImageAreaSettings Properties | Description |
| ------ | ------ |
| __Height__ |Gets or sets the height of the area that contains the main image.|
| __NavigationMode__ |Gets or sets a value indicating how the navigation will be performed. It has two values:

*  __Button__ - The user can navigate by clicking on the left/right buttons.

*  __Zone__ - Clicking on the left half of the image navigates backwards and clicking on the right half navigates forwards.|
| __NextImageButtonText__ |Gets or sets the text that is displayed for the next button.|
| __PrevImageButtonText__ |Gets or sets the text that is displayed for the previous button.|
| __ResizeMode__ |Gets or sets a value determining the way the image will be resized when placed in the __ImageArea__ . It has two values:

*  __Fit__ - Will scale the image so it is entirely visible.

*  __Fill__ - Will scale the image to fill the entire __ImageArea__ but will crop parts of the image.|
| __ShowDescriptionBox__ |Gets or set a value indicating whether to show a box with a description of the image.|
| __ShowNextPrevImageButtons__ |Gets or sets a value determining if the __Next__ / __Prev__ navigation buttons will be visible.|
| __Width__ |Gets or sets the width of the area that contains the main image.|

## PagerStyle Properties

__Table 4__ lists properties for configuring the styles of the Pager:


| RadImageGallery.PagerStyle Properties | Description |
| ------ | ------ |
| __AlwaysVisible__ |Gets or set a value indicating whether the pager will be visible regardless of the number of items.|
| __PageButtonCount__ |Gets or sets the number of page buttons that will be rendered if __GridPagerMode.NumericPages__ .|
| __PagerTextFormat__ |The string used to format the description text that appears in a pager item. Default value is __"Page {0} of {1}"__ .|
| __Position__ |Gets or sets the position of the pager item. It can be set to the following values:

*  __Bottom__ 

*  __Top__ 

*  __TopAndBottom__ |
| __ShowPagerText__ |Gets or sets a value indicating whether the pager text or only the pager buttons will be displayed.|

## AnimationSettings Properties

One of the most important features that __RadImageGallery__ provides is the animations performed when changingthe different images. __Table 5__ lists the properties that can help you configure the animation settings.


| RadImageGallery.ClientSettings.AnimationSettings Properties | Description |
| ------ | ------ |
| __NextImagesAnimation__ Inner properties

*  __Type__ 

*  __Speed__ 

*  __Easing__ |Gets or sets the animation settings for the animation performed when navigating to the next image.Inner properties

* Gets or sets the type of animation that will be performed.

* Gets or sets the period of time(in miliseconds) in which the animation will be performed.

* Gets or sets the easing type.|
| __PrevImagesAnimation__ Inner properties

*  __Type__ 

*  __Speed__ 

*  __Easing__ |Gets or sets the animation settings for the animation performed when navigating to the next image.Inner properties

* Gets or sets the type of animation that will be performed.

* Gets or sets the period of time(in miliseconds) in which the animation will be performed.

* Gets or sets the easing type.|
| __SlideshowSlideDuration__ |Gets or sets a value indicating how many milliseconds the __RadImageGallery__ control will wait until it switches to the next image when the slideshow functionality is turned on.|

## RadImageGallery Events

__Table 6__ lists common RadImageGallery events to which you can subscribe.


| Event | Description |
| ------ | ------ |
| __Command__ |Fired when the __RadImageGallery__ control fires a command event or when the client __fireCommand__ method is called.|
| __ImageRequested__ |Fired when server-side binding is used and an image is requested.|
| __ItemCreated__ |Fired when a __RadImageGallery__ item is created.|
| __ItemDataBound__ |Fired when a __RadImageGallery__ item is populated.|
| __NeedDataSource__ |Fired when __RadImageGallery__ needs a data source for binding.|
| __PageIndexChanged__ |Fired when one of the page selection elements is clicked.|
| __PageIndexChanged__ |Fired when the page size is changed through the advanced pager or manually in code.|

## RadImageGallery Methods

In __Table 7__ you can find the __RadImageGallery__ server-side methods.


| Method | Description |
| ------ | ------ |
| __Rebind()__ |Forces the control to recreate and repopulate.|

# See Also

 * [Overview]({%slug imagegallery/overview%})

 * [Getting Started]({%slug imagegallery/getting-started%})
