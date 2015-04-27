---
title: Overview
page_title: Client-side Programming Overview | RadRating for ASP.NET AJAX Documentation
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
| **repaint** |||Repaints the rating control and forces it to recalculate the size of its elements. Use this method when the control is in an initially hidden element|
| **get_itemCount** |Number|Number|Gets the number of items (stars) in the rating control|
| **get_value** ||Number|Gets the current value of the rating control|
| **set_value** |Number||Sets the current value of the rating control|
| **get_selectionMode** ||Telerik.Web.UI.RatingSelectionMode|Gets the selection mode of the rating control|
| **set_selectionMode** |Telerik.Web.UI.RatingSelectionMode||Sets the selection mode of the rating control|
| **get_precision** ||Telerik.Web.UI.RatingPrecision|Gets the rate precision of the rating control|
| **set_precision** |Telerik.Web.UI.RatingPrecision||Sets the rate precision of the rating control|
| **get_orientation** ||Telerik.Web.UI.Orientation|Gets the orientation of the rating control|
| **get_isDirectionReversed** ||Boolean|Returns a value, indicating whether the direction of the rating control is revered|
| **get_enableToolTips** ||Boolean|Returns a value, indicating whether the rating control will display a browser toolip for its values|
| **get_readOnly** ||Boolean|Returns a value, indicating whether the rating control is in read-only mode|
| **set_readOnly** |Boolean||Sets a value, indicating whether the rating control is in read-only mode|
| **get_enabled** ||Boolean|Returns a value, indicating whether the rating control is enabled|
| **set_enabled** |Boolean||Sets whether the slider is enabled|
| **get_itemData** ||Array|Gets information about the items of the rating|




>caption Methods of the RadRating client-side object for modifying client-side event handlers dynamically.

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add_load** |Function||Adds a handler for the load event|
| **remove_load** |Function||Removes a handler for the load event|
| **add_rating** |Function||Adds a handler for the rating event|
| **remove_rating** |Function||Removes a handler for the rating event|
| **add_rated** |Function||Adds a handler for the rated event|
| **remove_rated** |Function||Removes a handler for the rated event|


