---
title: Overview
page_title: Client-side Programming Overview | RadRotator for ASP.NET AJAX Documentation
description: Overview
slug: rotator/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

**RadRotator for ASP.NET AJAX** offers a rich Client-Side API that allows you to control the look and the behavior of the control on the client with JavaScript.

| Method | Description |
| ------ | ------ |
| **add_buttonClick** |Sets a name of a JavaScript function to be called when rotator's button is clicked|
| **add_buttonOut** |Sets a name of a JavaScript function to be called when mouse's cursor hovers out of rotator's button|
| **add_buttonOver** |Sets a name of a JavaScript function to be called when mouse's cursor is over rotator's button|
| **add_itemClicked(function_name)** |Sets a name of a JavaScript function to be called after a item is clicked|
| **add_itemClicking(function_name)** |Sets a name of a JavaScript function to be called when an item is clicked|
| **add_itemShowing(function_name)** |Sets a reference to the JavaScript function to be called when an item is about to be shown.|
| **add_itemShown(function_name)** |Sets a reference to the JavaScript function to be called after an item has been shown.|
| **add_load** |Sets a name of a JavaScript function to be called when the rotator is loaded.|
| **add_mouseOut(function_name)** |Sets a reference to the JavaScript function to be called after the mouse leaves a item.|
| **add_mouseOver(function_name)** |Sets a reference to the JavaScript function to be called when the mouse hovers a item.|
| **addRotatorItem** |Creates and adds a new item to the RadRotator's client-side item collection. The item will not exist in the rotator's items collection on the serverThis method accepts two parameters: **radRotatorItemData** - an object that has a property named *Html* . The HTML markup of the new item should be specified in this property. If this parameter is not set, an empty item will be added in the RadRotator.; **index** - the position, in which the item will be added. If this parameter is not specified, the new item will be added at the last position.|
| **clearItems** |Clears all items in the RadRotator's client-side items collection. The items will not be removed in the rotator's items collection on the server|
| **dataBind** |Binds the data of the **RadRotator** |
| **get_appendClientDataBoundItems** |Gets whether data bound items will be appended to the Rotator|
| **get_clientDataSource** |Gets the RadClientDataSource that is associated with the Rotator|
| **get_clientDataSourceID** |Gets the ID of the RadClientDataSource that is associated with the Rotator|
| **get_clientTemplate** |Gets the client template of the Rotator|
| **get_currentItem** |Gets the current item.|
| **get_currentItemIndex** |Gets the index of the currently shown item.|
| **get_dataSource** |Gets the data source of the Rotator|
| **get_defaultAnimationDirection** |Returns the default animation direction.|
| **get_frameDuration** |Gets the time in milliseconds each frame will display in automatic scrolling scenarios.|
| **get_height** |Gets rotator's height|
| **get_initialItemIndex** |Gets rotator's initial item's index|
| **get_items** |Returns rotator's item collection.|
| **get_rotatorType** |Gets rotator's type|
| **get_scrollDuration** |Gets the speed in milliseconds for scrolling rotator items.|
| **get_width** |Gets rotator's width|
| **get_wrapFrames** |Returns true if RadRotator is set to start scrolling the rotator frames from the beginning, once the rotator shows the last frame.|
| **isAutomaticAdvance** |Returns a Boolean that indicates if the rotator is set in AutomaticAdvance mode.|
| **isScrollingForward** |Returns a Boolean that indicates if the rotator is scrolling forwards.|
| **isScrollingLeft** |Returns a Boolean that indicates if the rotator is scrolling to the left.|
| **isScrollingUp** |Returns a Boolean that indicates if the rotator is scrolling upward.|
| **isSlideShow** |Returns a Boolean that indicates if the rotator is set in SlideShow mode|
| **isVertical** |Returns a Boolean that indicates if the rotator is verticalr|
| **isViewportScrollMode** |Returns a Boolean that indicates if the rotator is scrolling item by item or it is scrolling the whole viewport|
| **isVisible** |Returns a Boolean that indicates if the rotator is visible.|
| **loadItemsFromWebService** |Manually requests new data for a RadRotator that uses [load-on-demand]({%slug rotator/functionality/load-on-demand%}).|
| **pause** |Pauses the animation|
| **remove_buttonClick** |Removes the reference|
| **remove_buttonOut** |Removes the reference|
| **remove_buttonOver** |Removes the reference|
| **remove_itemClicked(function_name)** |Removes the Javascript function identified by function_reference.|
| **remove_itemClicking(function_name)** |Removes the Javascript function identified by function_reference.|
| **remove_itemShowing(function_name)** |Removes the Javascript function identified by function_reference.|
| **remove_itemShown(function_name)** |Removes the Javascript function identified by function_reference.|
| **remove_load** |Removes the reference.|
| **remove_mouseOut(function_name)** |Removes the Javascript function identified by function_reference.|
| **remove_mouseOver(function_name)** |Removes the Javascript function identified by function_reference.|
| **removeRotatorItem** |Removes an item from the RadRotator's client-side items collection. The removed item will exist in the rotator's items collection on the serverThis method accepts one parameter: **index** - the position of the item that will be removed. If this parameter is not specified, the last item from the collection will be removed.|
| **repaint** |Redraw the rotator|
| **resume** |Resumes the paused animation|
| **set_appendClientDataBoundItems(value)** |Sets whether data bound items will be appended to the Rotator|
| **set_clientDataSourceID(id)** |Sets the ID of the RadClientDataSource that is associated with the Rotator|
| **set_clientTemplate(value)** |Sets the client template of the Rotator|
| **set_currentItemIndex** |Sets currently shown item by its index|
| **set_dataSource(data)** |Sets a custom data source for the RadRotator|
| **set_frameDuration** |Sets the time in milliseconds each frame will display in automatic scrolling scenarios.|
| **set_height** |Sets the RadRotator height in pixels.|
| **set_rotatorType** |Sets rotator's type|
| **set_scrollDuration** |Sets the speed in milliseconds for scrolling rotator items.|
| **set_width** |Sets the RadRotator width in pixels.|
| **set_wrapFrames** |Accepts true or false as an argument. When set to true, RadRotator will start scrolling the rotator frames from the beginning, once the last frame is shown.|
| **showNext** |scrolls the rotator in the specified direction and shows the next frame. The direction parameter must be of type **Telerik.Web.UI.RotatorScrollDirection** , e.g. **rotator1.showNext(Telerik.Web.UI.RotatorScrollDirection.Right);** |
| **start** |Starts the animation|
| **stop** |Stops the animation|
| **stopViewportAnimation** |If an item is partially shown and the rotator is paused, calling this function will force the rotator to fully display the item.|

**RadTicker for ASP.NET AJAX** methods:

| Method | Description |
| ------ | ------ |
| **get_autoAdvance** |Gets whether **RadTicker** will begin ticking the next tickerline (if any) after it has finished ticking the current one. Returns true or false.|
| **get_lineDuration** |Gets time in milliseconds the of pause **RadTicker** makes before starting to tick the next line (if **AutoAdvance=True** ).|
| **get_loop** |Gets whether **RadTicker** will repeat the first tickerline after displaying the last one. Returns true or false.|
| **get_tickSpeed** |Gets the duration in milliseconds between ticking each character of a tickerline.|
| **set_autoAdvance** |Sets whether **RadTicker** will begin ticking the next tickerline (if any) after it has finished ticking the current one. Accepts true or false.|
| **set_lineDuration** |Sets time in milliseconds the of pause **RadTicker** makes before starting to tick the next line (if **AutoAdvance=True** ).|
| **set_loop** |Sets whether **RadTicker** will repeat the first tickerline after displaying the last one. Accepts true or false.|
| **set_tickSpeed** |Sets the duration in milliseconds between ticking each character of a tickerline.|
| **startTicker** |Starts the ticker|
| **stopTicker** |Stops the ticker|
| **tickNextLine** |forces the ticker to tick to the next line|

>note The main idea of the methods **pause** , **resume** , **start** , **stop** is to be used in combination. Their functionality can be compared to that of a player - when stopped, the animation will be reset on a new start and when paused, the animation will continue from the same moment if rotation is resumed.
>These methods are designed to be used with a RadRotator control that includes automatic advance. This means the following modes: **AutomaticAdvance** , **Carousel** , **CoverFlow** , **SlideShow** .
>



