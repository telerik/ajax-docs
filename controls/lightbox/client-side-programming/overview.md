---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: lightbox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadLightBox__ for ASP.NET AJAX offers a rich Client-Side API that allows you to control the look andthe behavior of the control on the client with JavaScript.

## RadLightBox Properties

__RadLightBox__ exposes the following client-side properties:


| Property | Description |
| ------ | ------ |
| __show()__ |Shows the LightBox control|
| __hide()__ |Hides the LightBox control|
| __next()__ |Navigates to the next page/image|
| __prev()__ |Navigates backward to the previous page/image|
| __first()__ |Shows the first page/image|
| __last()__ |Shows the last page/image|
| __get_items()__ |Returns a collection of RadLightBox items|
| __get_currentItemIndex()__ |Returns a number represents the current index of the Item|
| __get_loopItems()__ |Returns a boolean variable which shows whether the slide show will begin from the start page after the last one has been reached|
| __get_modal()__ |Returns a boolean variable which shows whether the window will close when click outside of the container|
| __get_navigationMode()__ |Returns a value which represents the chosen navigation mode|
| __showCloseButton()__ |Determines whether the close button will be displayed in the LightBox|
| __showNextButton()__ |Determines whether the next button will be displayed in the LightBox|
| __showPrevButton()__ |Determines whether the previous button will be displayed in the LightBox|

## RadLightBox Methods

__RadLightBox__ provides the following client-side methods:


| Method | Description |
| ------ | ------ |
| __navigateTo(itemIndex)__ |A method which navigate to an item having the provided index|
| __set_loopItems(boolean)__ |Determines whether the slide show will begin from the start page after the last one has been reached|
| __set_currentItemIndex(index)__ |A method which set an index to the current item.|
| __set_modal(boolean)__ |Accepts true or false as an argument. When its enable the window can be closed by clicking outside of its frame.|
| __set_navigationMode(mode)__ |A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxNavigationMode.Button or Telerik.Web.UI.LightBoxNavigationMode.Zone.|
| __set_animation(animationType)__ |A method which accept an enumeration value. You could pass on of the following values Telerik.Web.UI.LightBoxAnimationType.(Fade, Resize, None)|

## RadLightBox Events

__RadLightBox__ provides the following client-side events:


| Event | Description |
| ------ | ------ |
| __OnShowing__ |Fires before opening the LightBox popup|
| __OnShowed__ |Fires when the popup is opened|
| __OnClosing__ |Fires before closing the LightBox popup|
| __OnClosed__ |Fires when the popup is closed|
| __OnNavigating__ |Fires when the user navigates out of the current page|
| __OnNavigating__ |Fires when the user navigates out of the current page|
| __OnDestroying__ |Fires before disposing the control|
| __OnLoad__ |Fires when the control is loaded|
