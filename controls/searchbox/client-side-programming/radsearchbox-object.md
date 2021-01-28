---
title: RadSearchBox Object
page_title: RadSearchBox Object - RadSearchBox
description: Check our Web Forms article about RadSearchBox Object.
slug: searchbox/client-side-programming/radsearchbox-object
tags: radsearchbox,object
published: True
position: 0
---

# RadSearchBox Client Object



The following table lists the most important methods of the client-side **RadSearchBox** object:


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **commitChanges** |none|none|Writes the changes to the searchBox that were made since a previous call to trackChanges, so that they are preserved over post-backs.|
| **saveClientState** |none|none|Saves the client state to the client state hidden field|
| **repaint** |none|none|Refreshes the RadSearchBox UI|
| **get_enableAutoComplete** |none|Boolean|Gets a value indicating whether the AutoComplete functionality of the SearchBox is enabled|
| **set_enableAutoComplete** |Boolean|none|Sets whether the AutoComplete functionality of the SearchBox is enabled|
| **get_buttons** |none|SearchBoxButtonCollection|Gets a collection with all buttons|
| **get_filter** |none|SearchBoxFilter|Gets the Filter criteria of RadSearchBox.|
| **set_filter** |SearchBoxFilter|none|Sets the Filter criteria of RadSearchBox.|
| **get_text** |none|string|Gets the text in the input field.|
| **get_clientTemplate** |none|string|Returns the value of the RadSearchBox's ClientTemplate property.|
| **set_clientTemplate** |String|none|Sets the value of the RadSearchBox's ClientTemplate property.|
| **set_emptyMessage** |String|none|Sets the value of the RadSearchBox's EmptyMessage property.|
| **get_emptyMessage** |none|string|Returns the value of the RadSearchBox's EmptyMessage property.|
| **get_dropDownElement** |none|none|Gets the root DOM element of the RadSearchBox's drop-down.|
| **get_inputElement** |none|none|Gets the input DOM element of the RadSearchBox.|
| **get_childListElement** |none|none|Gets the UL DOM element of the RadSearchBox's drop-down|
| **get_maxResultCount** |none|int|Gets the MaxResultsCount of RadSearchBox so you can [pass it to the web service]({%slug searchbox/functionality/passing-additional-information-to-the-server%}).|
| **query** |none|none|If AutoComplete is enabled,the search string exists and it is longer than the min filter length set, a search operation is performed. The second parameter defines whether all results should be shown in the drop-down.|
| **clear** |none|none|Clears the search results and closes the drop-down.|
| **get_requestDelay** |none|number|Returns the time in milliseconds before a request is initiated by the control after the user enters a keystroke.|
| **set_requestDelay** |number|none|Sets the time in milliseconds before a request is initiated by the control after the user enters a keystroke. Useful when requests overlap each other due to slower networks or when users with varying typing speeds encounter issues with the returned results for old searches.|
