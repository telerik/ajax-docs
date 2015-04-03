---
title: SearchContextItemCollection Object
page_title: SearchContextItemCollection Object | UI for ASP.NET AJAX Documentation
description: SearchContextItemCollection Object
slug: searchbox/client-side-programming/searchcontextitemcollection-object
tags: searchcontextitemcollection,object
published: True
position: 3
---

# SearchContextItemCollection Object



## SearchContext Client Object

The following table lists the most important methods of the client-side __SearchContextItemCollection__ object:


|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __add__ |SearchContextItem|None|Adds a SearchContextItem to the Items collection.|
| __insert__ |Int, SearchContextItem|SearchContextItemCollection|Inserts a SearchContextItem into the Items collection at the position specified by the first (index) parameter.|
| __remove__ |SearchContextItem|None|Removes an item from the Items collection.|
| __removeAt__ |Int|None|Removes the item at the specified index.|
| __clear__ |None|None|Clears the Items collection of RadSearchBox's SearchContext.|
| __getItem__ |Int|SearchContextItem|Gets the SearchContextItem from the Items collection residing at the index specified by the parameter.|
| __indexOf__ |SearchContextItem|Int|Gets the index of an item.|
| __get_count__ |None|Int|Returns the number of items in the Items collection.|
