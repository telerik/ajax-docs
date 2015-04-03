---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: rotator/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## 

__RadRotator for ASP.NET AJAX__ offers a rich Client-Side API that allows you to control the look and the behavior of the control on the client with JavaScript.




>caption  

| Method | Description |
| ------ | ------ |
| __add_buttonClick__ |Sets a name of a JavaScript function to be called when rotator's button is clicked|
| __add_buttonOut__ |Sets a name of a JavaScript function to be called when mouse's cursor hovers out of rotator's button|
| __add_buttonOver__ |Sets a name of a JavaScript function to be called when mouse's cursor is over rotator's button|
| __add_itemClicked(function_name)__ |Sets a name of a JavaScript function to be called after a item is clicked|
| __add_itemClicking(function_name)__ |Sets a name of a JavaScript function to be called when an item is clicked|
| __add_itemShowing(function_name)__ |Sets a reference to the JavaScript function to be called when an item is about to be shown.|
| __add_itemShown(function_name)__ |Sets a reference to the JavaScript function to be called after an item has been shown.|
| __add_load__ |Sets a name of a JavaScript function to be called when the rotator is loaded.|
| __add_mouseOut(function_name)__ |Sets a reference to the JavaScript function to be called after the mouse leaves a item.|
| __add_mouseOver(function_name)__ |Sets a reference to the JavaScript function to be called when the mouse hovers a item.|
| __addRotatorItem__ |Creates and adds a new item to the RadRotator's client-side item collection. The item will not exist in the rotator's items collection on the serverThis method accepts two parameters:

*  __radRotatorItemData__ - an object that has a property named *Html* . The HTML markup of the new item should be specified in this property. If this parameter is not set, an empty item will be added in the RadRotator.

*  __index__ - the position, in which the item will be added. If this parameter is not specified, the new item will be added at the last position.|
| __clearItems__ |Clears all items in the RadRotator's client-side items collection. The items will not be removed in the rotator's items collection on the server|
| __dataBind__ |Binds the data of the __RadRotator__ |
| __get_appendClientDataBoundItems__ |Gets whether data bound items will be appended to the Rotator|
| __get_clientDataSource__ |Gets the RadClientDataSource that is associated with the Rotator|
| __get_clientDataSourceID__ |Gets the ID of the RadClientDataSource that is associated with the Rotator|
| __get_clientTemplate__ |Gets the client template of the Rotator|
| __get_currentItem__ |Gets the current item.|
| __get_currentItemIndex__ |Gets the index of the currently shown item.|
| __get_dataSource__ |Gets the data source of the Rotator|
| __get_defaultAnimationDirection__ |Returns the default animation direction.|
| __get_frameDuration__ |Gets the time in milliseconds each frame will display in automatic scrolling scenarios.|
| __get_height__ |Gets rotator's height|
| __get_initialItemIndex__ |Gets rotator's initial item's index|
| __get_items__ |Returns rotator's item collection.|
| __get_rotatorType__ |Gets rotator's type|
| __get_scrollDuration__ |Gets the speed in milliseconds for scrolling rotator items.|
| __get_width__ |Gets rotator's width|
| __get_wrapFrames__ |Returns true if RadRotator is set to start scrolling the rotator frames from the beginning, once the rotator shows the last frame.|
| __isAutomaticAdvance__ |Returns a Boolean that indicates if the rotator is set in AutomaticAdvance mode.|
| __isScrollingForward__ |Returns a Boolean that indicates if the rotator is scrolling forwards.|
| __isScrollingLeft__ |Returns a Boolean that indicates if the rotator is scrolling to the left.|
| __isScrollingUp__ |Returns a Boolean that indicates if the rotator is scrolling upward.|
| __isSlideShow__ |Returns a Boolean that indicates if the rotator is set in SlideShow mode|
| __isVertical__ |Returns a Boolean that indicates if the rotator is verticalr|
| __isViewportScrollMode__ |Returns a Boolean that indicates if the rotator is scrolling item by item or it is scrolling the whole viewport|
| __isVisible__ |Returns a Boolean that indicates if the rotator is visible.|
| __loadItemsFromWebService__ |Manually requests new data for a RadRotator that uses[load-on-demand]({%slug rotator/functionality/load-on-demand%}).|
| __pause__ |Pauses the animation|
| __remove_buttonClick__ |Removes the reference|
| __remove_buttonOut__ |Removes the reference|
| __remove_buttonOver__ |Removes the reference|
| __remove_itemClicked(function_name)__ |Removes the Javascript function identified by function_reference.|
| __remove_itemClicking(function_name)__ |Removes the Javascript function identified by function_reference.|
| __remove_itemShowing(function_name)__ |Removes the Javascript function identified by function_reference.|
| __remove_itemShown(function_name)__ |Removes the Javascript function identified by function_reference.|
| __remove_load__ |Removes the reference.|
| __remove_mouseOut(function_name)__ |Removes the Javascript function identified by function_reference.|
| __remove_mouseOver(function_name)__ |Removes the Javascript function identified by function_reference.|
| __removeRotatorItem__ |Removes an item from the RadRotator's client-side items collection. The removed item will exist in the rotator's items collection on the serverThis method accepts one parameter:

*  __index__ - the position of the item that will be removed. If this parameter is not specified, the last item from the collection will be removed.|
| __repaint__ |Redraw the rotator|
| __resume__ |Resumes the paused animation|
| __set_appendClientDataBoundItems(value)__ |Sets whether data bound items will be appended to the Rotator|
| __set_clientDataSourceID(id)__ |Sets the ID of the RadClientDataSource that is associated with the Rotator|
| __set_clientTemplate(value)__ |Sets the client template of the Rotator|
| __set_currentItemIndex__ |Sets currently shown item by its index|
| __set_dataSource(data)__ |Sets a custom data source for the RadRotator|
| __set_frameDuration__ |Sets the time in milliseconds each frame will display in automatic scrolling scenarios.|
| __set_height__ |Sets the RadRotator height in pixels.|
| __set_rotatorType__ |Sets rotator's type|
| __set_scrollDuration__ |Sets the speed in milliseconds for scrolling rotator items.|
| __set_width__ |Sets the RadRotator width in pixels.|
| __set_wrapFrames__ |Accepts true or false as an argument. When set to true, RadRotator will start scrolling the rotator frames from the beginning, once the last frame is shown.|
| __showNext__ |scrolls the rotator in the specified direction and shows the next frame. The direction parameter must be of type __Telerik.Web.UI.RotatorScrollDirection__ , e.g. __rotator1.showNext(Telerik.Web.UI.RotatorScrollDirection.Right);__ |
| __start__ |Starts the animation|
| __stop__ |Stops the animation|
| __stopViewportAnimation__ |If an item is partially shown and the rotator is paused, calling this function will force the rotator to fully display the item.|



__RadTicker for ASP.NET AJAX__ methods:


>caption  

| Method | Description |
| ------ | ------ |
| __get_autoAdvance__ |Gets whether __RadTicker__ will begin ticking the next tickerline (if any) after it has finished ticking the current one. Returns true or false.|
| __get_lineDuration__ |Gets time in milliseconds the of pause __RadTicker__ makes before starting to tick the next line (if __AutoAdvance=True__ ).|
| __get_loop__ |Gets whether __RadTicker__ will repeat the first tickerline after displaying the last one. Returns true or false.|
| __get_tickSpeed__ |Gets the duration in milliseconds between ticking each character of a tickerline.|
| __set_autoAdvance__ |Sets whether __RadTicker__ will begin ticking the next tickerline (if any) after it has finished ticking the current one. Accepts true or false.|
| __set_lineDuration__ |Sets time in milliseconds the of pause __RadTicker__ makes before starting to tick the next line (if __AutoAdvance=True__ ).|
| __set_loop__ |Sets whether __RadTicker__ will repeat the first tickerline after displaying the last one. Accepts true or false.|
| __set_tickSpeed__ |Sets the duration in milliseconds between ticking each character of a tickerline.|
| __startTicker__ |Starts the ticker|
| __stopTicker__ |Stops the ticker|
| __tickNextLine__ |forces the ticker to tick to the next line|

>note The main idea of the methods __pause__ , __resume__ , __start__ , __stop__ is to be used in combination. Their functionality can be compared to that of a player - when stopped, the animation will be reset on a new start and when paused, the animation will continue from the same moment if rotation is resumed.
>These methods are designed to be used with a RadRotator control that includes automatic advance. This means the following modes: __AutomaticAdvance__ , __Carousel__ , __CoverFlow__ , __SlideShow__ .
>



