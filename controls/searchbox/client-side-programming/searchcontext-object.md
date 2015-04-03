---
title: SearchContext Object
page_title: SearchContext Object | UI for ASP.NET AJAX Documentation
description: SearchContext Object
slug: searchbox/client-side-programming/searchcontext-object
tags: searchcontext,object
published: True
position: 1
---

# SearchContext Object



## SearchContext Client Object

The following table lists the most important methods of the client-side __SearchContext__ object:


|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_selectedItem__ |None|SearchContextItem|Returns the currently selected item of the SearchContext.|
| __get_items__ |None|SearchContextItemCollection|Returns the collection with all SearchContextItem.|
| __get_element__ |None|DOM element|Returns the DOM element for the SearchContext.|
| __get_dropDownElement__ |None|DOM element|Gets the root DOM element of the SearchContext's drop-down.|
| __get_childListElement__ |None|DOM element|Gets the UL DOM element of the SearchContext's drop-down.|
| __get_textElement__ |None|DOM element|Gets the DOM element of the SearchContext where the text of the currently selected item is shown.|
| __get_enabled__ |None|String|Gets a value indicating whether the SearchContext is enabled.|
| __set_enabled__ |Boolean|None|Toggles the enabled state of the SearchContext.|
