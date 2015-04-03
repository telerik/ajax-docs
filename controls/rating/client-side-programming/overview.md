---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: rating/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview





## Getting the RadRating client-side object:

RadRating creates a client-side object with the ClientID of the menu. You can obtain the reference using the following JavaScript code:

````JavaScript
	        var rating = $find("<%= RadRating1.ClientID %>");
````





Once you have a reference to the control, you could use the following methods:


>caption Methods of the RadRating client-side object.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __repaint__ |||Repaints the rating control and forces it to recalculate the size of its elements. Use this method when the control is in an initially hidden element|
| __get_itemCount__ |Number|Number|Gets the number of items (stars) in the rating control|
| __get_value__ ||Number|Gets the current value of the rating control|
| __set_value__ |Number||Sets the current value of the rating control|
| __get_selectionMode__ ||Telerik.Web.UI.RatingSelectionMode|Gets the selection mode of the rating control|
| __set_selectionMode__ |Telerik.Web.UI.RatingSelectionMode||Sets the selection mode of the rating control|
| __get_precision__ ||Telerik.Web.UI.RatingPrecision|Gets the rate precision of the rating control|
| __set_precision__ |Telerik.Web.UI.RatingPrecision||Sets the rate precision of the rating control|
| __get_orientation__ ||Telerik.Web.UI.Orientation|Gets the orientation of the rating control|
| __get_isDirectionReversed__ ||Boolean|Returns a value, indicating whether the direction of the rating control is revered|
| __get_enableToolTips__ ||Boolean|Returns a value, indicating whether the rating control will display a browser toolip for its values|
| __get_readOnly__ ||Boolean|Returns a value, indicating whether the rating control is in read-only mode|
| __set_readOnly__ |Boolean||Sets a value, indicating whether the rating control is in read-only mode|
| __get_enabled__ ||Boolean|Returns a value, indicating whether the rating control is enabled|
| __set_enabled__ |Boolean||Sets whether the slider is enabled|
| __get_itemData__ ||Array|Gets information about the items of the rating|




>caption Methods of the RadRating client-side object for modifying client-side event handlers dynamically.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add_load__ |Function||Adds a handler for the load event|
| __remove_load__ |Function||Removes a handler for the load event|
| __add_rating__ |Function||Adds a handler for the rating event|
| __remove_rating__ |Function||Removes a handler for the rating event|
| __add_rated__ |Function||Adds a handler for the rated event|
| __remove_rated__ |Function||Removes a handler for the rated event|


