---
title: SearchContext Object
page_title: SearchContext Object - RadSearchBox
description: Check our Web Forms article about SearchContext Object.
slug: searchbox/client-side-programming/searchcontext-object
tags: searchcontext,object
published: True
position: 1
---

# SearchContext Client Object



The following table lists the most important methods of the client-side **SearchContext** object:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_selectedItem** |None|SearchContextItem|Returns the currently selected item of the SearchContext.|
| **get_items** |None|SearchContextItemCollection|Returns the collection with all SearchContextItem.|
| **get_element** |None|DOM element|Returns the DOM element for the SearchContext.|
| **get_dropDownElement** |None|DOM element|Gets the root DOM element of the SearchContext's drop-down.|
| **get_childListElement** |None|DOM element|Gets the UL DOM element of the SearchContext's drop-down.|
| **get_textElement** |None|DOM element|Gets the DOM element of the SearchContext where the text of the currently selected item is shown.|
| **get_enabled** |None|String|Gets a value indicating whether the SearchContext is enabled.|
| **set_enabled** |Boolean|None|Toggles the enabled state of the SearchContext.|
