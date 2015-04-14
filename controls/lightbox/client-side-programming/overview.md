---
title: Overview
page_title:  Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: lightbox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



**RadLightBox** for ASP.NET AJAX offers a rich Client-Side API that allows you to control the look andthe behavior of the control on the client with JavaScript.

## RadLightBox Properties

**RadLightBox** exposes the following client-side properties:


| Property | Description |
| ------ | ------ |
| **show()** |Shows the LightBox control|
| **hide()** |Hides the LightBox control|
| **next()** |Navigates to the next page/image|
| **prev()** |Navigates backward to the previous page/image|
| **first()** |Shows the first page/image| 
| **last()** |Shows the last page/image|
| **get_items()** |Returns a collection of RadLightBox items|
| **get_currentItemIndex()** |Returns a number represents the current index of the Item|
| **get_loopItems()** |Returns a boolean variable which shows whether the slide show will begin from the start page after the last one has been reached|
| **get_modal()** |Returns a boolean variable which shows whether the window will close when click outside of the container|
| **get_navigationMode()** |Returns a value which represents the chosen navigation mode|
| **showCloseButton()** |Determines whether the close button will be displayed in the LightBox|
| **showNextButton()** |Determines whether the next button will be displayed in the LightBox|
| **showPrevButton()** |Determines whether the previous button will be displayed in the LightBox|

## RadLightBox Methods

**RadLightBox** provides the following client-side methods:


| Method | Description |
| ------ | ------ |
| **navigateTo(itemIndex)** |A method which navigate to an item having the provided index|
| **set_loopItems(boolean)** |Determines whether the slide show will begin from the start page after the last one has been reached|
| **set_currentItemIndex(index)** |A method which set an index to the current item.|
| **set_modal(boolean)** |Accepts true or false as an argument. When its enable the window can be closed by clicking outside of its frame.|
| **set_navigationMode(mode)** |A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxNavigationMode.Button or Telerik.Web.UI.LightBoxNavigationMode.Zone.|
| **set_animation(animationType)** |A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxAnimationType.(Fade, Resize, None)|

## RadLightBox Events

**RadLightBox** provides the following client-side events:


| Event | Description |
| ------ | ------ |
| **OnShowing** |Fires before opening the LightBox popup|
| **OnShowed** |Fires when the popup is opened|
| **OnClosing** |Fires before closing the LightBox popup|
| **OnClosed** |Fires when the popup is closed|
| **OnNavigating** |Fires when the user navigates out of the current page|
| **OnNavigating** |Fires when the user navigates out of the current page|
| **OnDestroying** |Fires before disposing the control|
| **OnLoad** |Fires when the control is loaded|
