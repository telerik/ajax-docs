---
title: RadSearchBox Object
page_title: RadSearchBox Object | UI for ASP.NET AJAX Documentation
description: RadSearchBox Object
slug: searchbox/client-side-programming/radsearchbox-object
tags: radsearchbox,object
published: True
position: 0
---

# RadSearchBox Object



## RadSearchBox Client Object

The following table lists the most important methods of the client-side __RadSearchBox__ object:


|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __commitChanges__ |none|none|Writes the changes to the searchBox that were made since a previous call to trackChanges, so that they are preserved over post-backs.|
| __saveClientState__ |none|none|Saves the client state to the client state hidden field|
| __repaint__ |none|none|Refreshes the RadSearchBox UI|
| __get_enableAutoComplete__ |none|Boolean|Gets a value indicating whether the AutoComplete functionality of the SearchBox is enabled|
| __set_enableAutoComplete__ |Boolean|none|Sets whether the AutoComplete functionality of the SearchBox is enabled|
| __get_buttons__ |none|SearchBoxButtonCollection|Gets a collection with all buttons|
| __get_filter__ |none|SearchBoxFilter|Gets the Filter criteria of RadSearchBox.|
| __set_filter__ |SearchBoxFilter|none|Sets the Filter criteria of RadSearchBox.|
| __get_text__ |none|string|Gets the text in the input field.|
| __get_clientTemplate__ |none|string|Returns the value of the RadSearchBox's ClientTemplate property.|
| __set_clientTemplate__ |String|none|Sets the value of the RadSearchBox's ClientTemplate property.|
| __set_emptyMessage__ |String|none|Sets the value of the RadSearchBox's EmptyMessage property.|
| __get_emptyMessage__ |none|string|Returns the value of the RadSearchBox's EmptyMessage property.|
| __get_dropDownElement__ |none|none|Gets the root DOM element of the RadSearchBox's drop-down.|
| __get_inputElement__ |none|none|Gets the input DOM element of the RadSearchBox.|
| __get_childListElement__ |none|none|Gets the UL DOM element of the RadSearchBox's drop-down|
| __query__ |none|none|If AutoComplete is enabled,the search string exists and it is longer than the min filter length set, a search operation is performed. The second parameter defines whether all results should be shown in the drop-down.|
| __clear__ |none|none|Clears the search results and closes the drop-down.|
