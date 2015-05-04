---
title: SearchContextItemCollection Object
page_title: SearchContextItemCollection Object | RadSearchBox for ASP.NET AJAX Documentation
description: SearchContextItemCollection Object
slug: searchbox/client-side-programming/searchcontextitemcollection-object
tags: searchcontextitemcollection,object
published: True
position: 3
---

# SearchContextItemCollection Object


The following table lists the most important methods of the client-side **SearchContextItemCollection** object:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **add** |SearchContextItem|None|Adds a SearchContextItem to the Items collection.|
| **insert** |Int, SearchContextItem|SearchContextItemCollection|Inserts a SearchContextItem into the Items collection at the position specified by the first (index) parameter.|
| **remove** |SearchContextItem|None|Removes an item from the Items collection.|
| **removeAt** |Int|None|Removes the item at the specified index.|
| **clear** |None|None|Clears the Items collection of RadSearchBox's SearchContext.|
| **getItem** |Int|SearchContextItem|Gets the SearchContextItem from the Items collection residing at the index specified by the parameter.|
| **indexOf** |SearchContextItem|Int|Gets the index of an item.|
| **get_count** |None|Int|Returns the number of items in the Items collection.|
