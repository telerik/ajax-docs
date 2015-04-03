---
title: Server-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: lightbox/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



## RadLightBox Properties

__RadLightBox__ for ASP.NET AJAX offers the following properties:


| Properties | Description |
| ------ | ------ |
| __AppendDataBoundItems__ |Allows you to append a data bound items to a currently set static collection of items.|
| __AccessKey__ |Allows you to quickly navigate to the LightBox control.|
| __Modal__ |Allows you to use a modality.|
| __CurrentItemIndex__ |Allows you to specify an index of an item which will be displayed when LightBox is opened.|
| __ShowCloseButton__ |Determines whether the close button will be displayed in the LightBox|
| __ShowNextButton__ |Determines whether the next button will be displayed in the LightBox|
| __ShowPrevButton__ |Determines whether the previous button will be displayed in the LightBox|
| __ShowLoadingPanel__ |Determines whether the LoadingPanel will be displayed when navigating between the page/image|
| __ShowRestoreButton__ |Determines whether the restore button will be displayed in the LightBox|
| __ShowMaximizeButton__ |Determines whether the maximize button will be displayed in the LightBox|
| __DataDescriptionField__ |Determines the description field when server data binding is used|
| __DataImageUrlField__ |Determines the image URL field when server data binding is used|
| __DataImageUrlFormatString__ |You can combine the image URL fields by specifying a format string as the value of the this property.|
| __DataNavigateUrlField__ |Determines the navigation URL field when server data binding is used|
| __DataTitleField__ |Determines the image title field when server data binding is used|
| __DataSourceID__ |Determines the id of the data source|
| __DescriptionPosition__ |Specify the position of the description and the title.|
| __EnableGlowEffect__ |When this property is enabled it adds an outer transparent border around the control.|
| __ODataDataSourceID__ |Determines the id of the ODataDataSource|
| __ItemsCounterFormatString__ |You could use this property to set a custom format of the items counter. It is mandatory to use one of the both placeholders -{0} for current item or {1} for the total number of items.|
| __Width__ |Determines the horizontal size of the LightBox|
| __Height__ |Determines the vertical size of the LightBox|
| __ZIndex__ |Determines the Z-Index of the LightBox|
| __PreserveCurrentItemTemplates__ |Determines whether the template should be disposed after closing the LightBox or after navigating to another item.|
| __ClientSettings-AllowKeyboardNavigation__ |Allows to use a keyboard to navigate within RadLightBox|
| __ClientSettings-AutoResize__ |Allows you to automatically resize the image in RadLightBox control based on the dimension of the viewport.|
| __ClientSettings-ContentResizeMode__ |This property has to options: *Fill* and *Fit* . When the first one is setthat means the displayed image will fill the whole viewport, while the second one will proportionally resize the image in order to fit the container.|
| __ClientSettings-NavigationMode__ |Allows you to switch between two type of navigation - Button and Zone. Zone navigation mode allows you to navigatebetween the images by clicking on the left or right area of the RadLightBox, while the Button navigation is performing only byclicking on the arrow buttons.|
| __ClientSettings-PreventOverlayClose__ |Determines whether the overlay (modality) should close after you click outside the LightBox container. Applicable only with enabled *Modal* property.|
| __ClientSettings-ShowItemsCounter__ |Determines whether the item counter will be displayed in the LightBox|
| __ClientSettings-AnimationSettings__ 

*  __ShowAnimation__ 

*  __HideAnimation__ 

*  __PrevAnimation__ 

*  __NextAnimation__ |Property group for the animation settings

* Allows you to choose the type of animation that will be displayed during showing RadLigthBox

* Allows you to choose the type of animation that will be displayed during hiding RadLigthBox

* Allows you to choose the type of animation that will be displayed during navigating to the previous item

* Allows you to choose the type of animation that will be displayed during navigating to the next item|
| __ClientSettings-AnimationSettings__ 

*  __HideAnimationSettings__ 

*  __NextAnimationSettings__ 

*  __PrevAnimationSettings__ 

*  __ShowAnimationSettings__ |Sub properties applicable for all of the animation settings properties.

* Easing - Gets or sets the easing function.

* Speed - Gets or sets the period of time(in miliseconds) in which the animation will be performed.|
| __Items__ 

*  __Title__ 

*  __Description__ 

*  __ImageUrl__ 

*  __NavigateUrl__ 

*  __TargetControlID__ 

*  __Width__ 

*  __Height__ |Static collection containing a list of images

* The title text of the item

* The image description of the item

* The image URL of the item

* Get/set the URL when using the iframe mode

* Specifies the control which triggers the RadLightBox

* The width of the item

* The height of the item|
