---
title: Overview
page_title: Server-side Programming Overview | RadLightBox for ASP.NET AJAX Documentation
description: Overview
slug: lightbox/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## RadLightBox Properties

**RadLightBox** for ASP.NET AJAX offers the following properties:


| Properties | Description |
| ------ | ------ |
| **AppendDataBoundItems** |Allows you to append a data bound items to a currently set static collection of items.|
| **AccessKey** |Allows you to quickly navigate to the LightBox control.|
| **Modal** |Allows you to use a modality.|
| **CurrentItemIndex** |Allows you to specify an index of an item which will be displayed when LightBox is opened.|
| **ShowCloseButton** |Determines whether the close button will be displayed in the LightBox|
| **ShowNextButton** |Determines whether the next button will be displayed in the LightBox|
| **ShowPrevButton** |Determines whether the previous button will be displayed in the LightBox|
| **ShowLoadingPanel** |Determines whether the LoadingPanel will be displayed when navigating between the page/image|
| **ShowRestoreButton** |Determines whether the restore button will be displayed in the LightBox|
| **ShowMaximizeButton** |Determines whether the maximize button will be displayed in the LightBox|
| **DataDescriptionField** |Determines the description field when server data binding is used|
| **DataImageUrlField** |Determines the image URL field when server data binding is used|
| **DataImageUrlFormatString** |You can combine the image URL fields by specifying a format string as the value of the this property.|
| **DataNavigateUrlField** |Determines the navigation URL field when server data binding is used|
| **DataTitleField** |Determines the image title field when server data binding is used|
| **DataSourceID** |Determines the id of the data source|
| **DescriptionPosition** |Specify the position of the description and the title.|
| **EnableGlowEffect** |When this property is enabled it adds an outer transparent border around the control.|
| **ODataDataSourceID** |Determines the id of the ODataDataSource|
| **ItemsCounterFormatString** |You could use this property to set a custom format of the items counter. It is mandatory to use one of the both placeholders -{0} for current item or {1} for the total number of items.|
| **Width** |Determines the horizontal size of the LightBox|
| **Height** |Determines the vertical size of the LightBox|
| **ZIndex** |Determines the Z-Index of the LightBox|
| **PreserveCurrentItemTemplates** |Determines whether the template should be disposed after closing the LightBox or after navigating to another item.|
| **ClientSettings-AllowKeyboardNavigation** |Allows to use a keyboard to navigate within RadLightBox|
| **ClientSettings-AutoResize** |Allows you to automatically resize the image in RadLightBox control based on the dimension of the viewport.|
| **ClientSettings-ContentResizeMode** |This property has to options: *Fill* and *Fit* . When the first one is setthat means the displayed image will fill the whole viewport, while the second one will proportionally resize the image in order to fit the container.|
| **ClientSettings-NavigationMode** |Allows you to switch between two type of navigation - Button and Zone. Zone navigation mode allows you to navigatebetween the images by clicking on the left or right area of the RadLightBox, while the Button navigation is performing only byclicking on the arrow buttons.|
| **ClientSettings-PreventOverlayClose** |Determines whether the overlay (modality) should close after you click outside the LightBox container. Applicable only with enabled *Modal* property.|
| **ClientSettings-ShowItemsCounter** |Determines whether the item counter will be displayed in the LightBox|
| **ClientSettings-AnimationSettings**| Property group for the animation settings|
| **ClientSettings-AnimationSettings-ShowAnimation**| Allows you to choose the type of animation that will be displayed during showing RadLigthBox|
| **ClientSettings-AnimationSettings-HideAnimation**| Allows you to choose the type of animation that will be displayed during hiding RadLigthBox|
| **ClientSettings-AnimationSettings-PrevAnimation**| Allows you to choose the type of animation that will be displayed during navigating to the previous item|
| **ClientSettings-AnimationSettings-NextAnimation**| Allows you to choose the type of animation that will be displayed during navigating to the next item|
| **ClientSettings-AnimationSettings-HideAnimationSettings**| **Easing** - Gets or sets the easing function. **Speed** - Gets or sets the period of time(in miliseconds) in which the animation will be performed.|
| **ClientSettings-AnimationSettings-NextAnimationSettings**| **Easing** - Gets or sets the easing function. **Speed** - Gets or sets the period of time(in miliseconds) in which the animation will be performed.|
| **ClientSettings-AnimationSettings-PrevAnimationSettings**| **Easing** - Gets or sets the easing function. **Speed** - Gets or sets the period of time(in miliseconds) in which the animation will be performed.|
| **ClientSettings-AnimationSettings-ShowAnimationSettings**| **Easing** - Gets or sets the easing function. **Speed** - Gets or sets the period of time(in miliseconds) in which the animation will be performed.|
| **ClientSettings-FullscreenMode-Emulation**| This mode is an emulation of fullscreen and it's the default value.|
| **ClientSettings-FullscreenMode-Native**| This mode uses the HTML 5 fullscreen capability.|
| **Items**| Static collection containing a list of images|
| **Items-Title**| The title text of the item|
| **Items-Description**|The image description of the item|
| **Items-ImageUrl**|The image URL of the item|
| **Items-NavigateUrl**| Get/set the URL when using the iframe mode|
| **Items-TargetControlID**| Specifies the control which triggers the **RadLightBox**|
| **Items-Width**| The width of the item|
| **Items-Height**| The height of the item|
