---
title: Gesture Support
page_title: Gesture Support
description: "Learn about the gesture support provided by Telerik UI for ASP.NET AJAX controls."
slug: introduction/radcontrols-for-asp.net-ajax-fundamentals/mobile-support/gestures-support
tags: telerik, aspnet, ajax, mobile, support, gestures
published: True
position: 4
---

# Gesture Support

By default, some Telerik UI for ASP.NET AJAX controls support touch gestures for performing certain actions. 

All clickable elements support tap gestures. Scrollable controls support scrolling gestures. 

The following table lists the controls that handle specific gestures, and the actions they perform.

|Control|Gesture and Action
|:---|:---
|[Grid]({%slug grid/mobile-support/mobile-rendering/overview%})|<ul><li>Drag to scroll the table view.</li> <li>Swipe with two active points to go to the next or previous page.</li></ul>
|[Editor]({%slug editor/mobile-support/overview%})|<ul><li>Tap or double-tap to activate a button (tool) or choose an item from a list.</li> <li>Drag to scroll (for example, the content area or the list of tools). Double-tap acts like a single tap.</li> <li>Pinch gestures are cancelled by the control to prevent zooming, both in the main editor view and in the dialogs.</li></ul>
|[ImageGallery]({%slug imagegallery/mobile-support/gestures%})|<ul><li>Swipe to navigate the images, thumbnails, and show or hide the thumbnails area.</li> <li>Tap and hold to toggle the slideshow feature.</li> <li>Double-tap to enter or exit the full screen mode.</li> <li>Tap on an image to navigate to the page pointed by the `NavigateUrl` property.</li></ul>
|[LightBox]({%slug lightbox/mobile-support/gestures-support%})|Swipe to navigate the images or tap on the image to hide the navigation arrows (if visible) and the description box (when the overlay mode is enabled).
|[Map]({%slug map/mobile-support/gestures-support%})|<ul><li>Drag the layer to pan.</li> <li>Spread or pinch to zoom in or zoom out.</li></ul>
|Rotator|Drag an item to scroll the rotator.
|Slider|Simultaneously drag both drag handles of the Slider to change its selected region.
|TileList|<ul><li>Drag a tile to move it.</li> <li>Perform a short vertical drag to select a tile.</li></ul>
|Window|Drag the title bar to move the window.
|[Drawer]({%slug drawer/functionality/gestures%})|Swipe to reveal the full content of the Drawer.