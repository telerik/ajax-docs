---
title: Telerik.Web.UI.ImageGalleryClientEvents
page_title: Telerik.Web.UI.ImageGalleryClientEvents
description: Telerik.Web.UI.ImageGalleryClientEvents
---

# Telerik.Web.UI.ImageGalleryClientEvents

RadImageGallery ClientEvents class
            See https://docs.telerik.com/devtools/aspnet-ajax/controls/imagegallery/client-side-programming/events Client-side Programming / Eventstopic for more information

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.ImageGallerySettings
* Telerik.Web.UI.ImageGalleryClientEvents

## Properties

###  OnFullScreenEntered `String`

Client-side event fired after the  have entered full screen mode.

###  OnFullScreenEntering `String`

Client-side event fired before the  enters full screen mode.
            Event could be canceled in order to prevent  from entering full screen mode.

###  OnFullScreenExited `String`

Client-side event fired after  have exited full screen mode.

###  OnImageGalleryCreated `String`

Client-side event fired when the  client-side object finishes initialization.

###  OnImageLoaded `String`

Client-side event fired after an image have been loaded.
            In the event handler you will have access to the image.

###  OnImageLoading `String`

Client-side event fired before an image is requested.
            Subscribe to the event in order to provide your custom image URL that you want to load.

###  OnNavigated `String`

Client-side event fired after a change in the selected item and navigation to a different one.

###  OnNavigating `String`

Client-side event fired before changing the selection of an item and navigating to different one.
            Event could be canceled in order to prevent navigation.

###  OnSlideshowPlay `String`

Client-side event fired just before the slideshow functionality is turned on.
            Event could be canceled in order to prevent the start of a slideshow.

###  OnSlideshowStop `String`

Client-side event fired just before the slideshow functionality is turned off.
            Event could be canceled in order to prevent the pause of a slideshow.

