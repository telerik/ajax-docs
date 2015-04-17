---
title: RadDropDownListItemCollection Object
page_title: RadDropDownListItemCollection Object | UI for ASP.NET AJAX Documentation
description: RadDropDownListItemCollection Object
slug: dropdownlist/client-side-programming/objects/raddropdownlistitemcollection-object
tags: raddropdownlistitemcollection,object
published: True
position: 2
---

# RadDropDownListItemCollection Object



## 

The **RadDropDownListItemCollection** object is returned by the **get_items** method of the **RadDropDownList** client object. The following table lists the most important methods:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **add** |DropDownListItem|none|Adds an item at the end of the Items' collection|
| **insert** |Number|none|Inserts an item into the Items' collection at the position, specified by the first (index) parameter|
| **remove** |none|none|Removes an item from the Items collection|
| **removeAt** |Number|none|Removes the item at the specified index.|
| **clear** |none|none|Clears the Items collection of RadDropDownList|
| **getItem** |index|DropDownListItem|Gets the item from the Items collection residing at the index specified by the parameter.|
| **indexOf** |none|Number|Gets the index of an item.|
| **forEach** |Function|none|Iterates through the Items collection|
| **toArray** |none|none|Returns the collection represented as array|
| **get_count** |none|Number|Returns the number of items in the Items collection.|
