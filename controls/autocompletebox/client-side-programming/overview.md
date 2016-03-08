---
title: Overview
page_title: Client-Side Programming Overview | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Telerik's ASP.NET AutoCompleteBox Client-Side Programming Overview
slug: autocompletebox/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-Side Programming Overview



## RadAutoCompleteBox Client-Side Object Model


>caption Properties

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_text()|none|string|Returns a string containing the text of each entry, separated by a delimeter.|
|get_entries()|none|Telerik.Web.UI.AutoCompleteBoxEntryCollection|Returns a collection of all the entries.|
|get_inputElement()|none|DOM Object|Gets a reference to the HTML element representing the input area.|
|get_isUsingODataSource()|none|boolean|Returns *true* if RadAutoCompleteBox is bound to OData, *false* otherwise.|
|get_bindingMode()|none|Telerik.Web.UI.RadAutoCompleteBoxBinding Enum|Returns a number from the RadAutoCompleteBoxBinding enumeration.|
|set_requestDelay()|int (milliseconds)|undefined|Sets delay time in milliseconds, when a request to the datasource is being triggered.|


````ASPNET
RadAutoCompleteBoxBinding:
{
	Callback: 0,
	WebService: 1,
	OData: 2
}
````

>caption Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|clear()|none|none|Closes the drop-down container, deleting all the items present in it.|
|createEntry()|string,string|Telerik.Web.UI.AutoCompleteBoxEntry|Returns the created entry.|
|query()|string|none|Sends request to the server against the value passed as an argument. If no argument is passed, the request is made against the text currently present into the input area.|

## AutoCompleteBoxEntry Client-Side Object Model


>caption Properties

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_index()|none|number|Returns the index of the specified entry.|
|get_text()|none|string|Returns the text of the specified entry.|
|get_value()|none|string|Returns the value of the specified entry.|
|get_token()|none|DOM object|Returns a reference to the HTML element representing the specified entry. If the input type of RadAutoCompleteBox is set to " *Text* ", the property will return nothing.|
|get_parent()|none|Telerik.Web.UI.RadAutoCompleteBox|Returns the parent object of the specified entry.|

## AutoCompleteBoxEntryCollection Client-Side Object Model


>caption Properties

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add()|Telerik.Web.UI.AutoCompleteBoxEntry|none|Adds the specified entry into the Entry collection.|
|insert()|number,Telerik.Web.UI.AutoCompleteBoxEntry|none|Inserts an entry in the Entry collection with the specified index.|
|remove()|Telerik.Web.UI.AutoCompleteBoxEntry|none|Removes the specified entry from the Entry collection.|
|clear()|none|none|Clears all the entries from the Entry collection.|
|getEntry()|number|Telerik.Web.UI.AutoCompleteBoxEntry|Returns the entry with the specified index.|
|indexOf()|Telerik.Web.UI.AutoCompleteBoxEntry|number|Returns the index of the specified entry.|
|get_count()|None|Number|Returns the number of the entries present in the Entry collection.|

## RadAutoCompleteBox Client-Side Events


>caption  

| Event | Description |
| ------ | ------ |
|[OnClientDropDownOpening]({%slug autocompletebox/client-side-programming/events/onclientdropdownopening%})|Occurs right before the drop-down container is opened.|
|[OnClientDropDownOpened]({%slug autocompletebox/client-side-programming/events/onclientdropdownopened%})|Occurs right after the drop-down container is opened.|
|[OnClientDropDownClosing]({%slug autocompletebox/client-side-programming/events/onclientdropdownclosing%})|Occurs right before the drop-down container is closed.|
|[OnClientDropDownClosed]({%slug autocompletebox/client-side-programming/events/onclientdropdownclosed%})|Occurs right after the drop-down container is closed.|
|[OnClientEntryAdding]({%slug autocompletebox/client-side-programming/events/oncliententryadding%})|Occurs right before an entry is added into the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to " *Token* ".|
|[OnClientEntryAdded]({%slug autocompletebox/client-side-programming/events/oncliententryadded%})|Occurs right after an entry is added into the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to " *Token* ".|
|[OnClientEntryRemoving]({%slug autocompletebox/client-side-programming/events/oncliententryremoving%})|Occurs right before an entry is removed from the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to " *Token* ".|
|[OnClientEntryRemoved]({%slug autocompletebox/client-side-programming/events/oncliententryremoved%})|Occurs right after an entry is removed from the Entry collection. The event will be raised only if the input type of RadAutoCompleteBox is set to " *Token* ".|
|[OnClientTextChanged]({%slug autocompletebox/client-side-programming/events/onclienttextchanged%})|Occurs when the text currently present in the input area is changed and RadAutoComplete has lost its focus. The event will be raised only if the input type of RadAutoCompleteBox is set to " *Text* ".|
|[OnClientRequesting]({%slug autocompletebox/client-side-programming/events/onclientrequesting%})|Occurs right before a request for items is sent to the data source.|
|[OnClientRequested]({%slug autocompletebox/client-side-programming/events/onclientrequested%})|Occurs when the request for items is completed, and the items are loaded into the drop-down container.|
|[OnClientRequestFailed]({%slug autocompletebox/client-side-programming/events/onclientrequestfailed%})|Occurs in case of unsuccessful request sent to the data source.|
|[OnClientDropDownItemDataBound]({%slug autocompletebox/client-side-programming/events/onclientdropdownitemdatabound%})|Occurs for each item that is created during a request to a Web service.|
