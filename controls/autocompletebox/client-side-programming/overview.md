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


**RadAutoCompleteBox** provides a flexible client-side API. You can easily interact with **RadAutoCompleteBox** in the browser using its client-side object. In addition to a variety of [client-side events]({%slug autocompletebox/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks.


## Getting the RadAutoCompleteBox Client-side Object


**RadAutoCompleteBox** creates a client-side object with its **ClientID**. You can obtain the reference using the following JavaScript code:

````JavaScript
	
	var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
	
````


## Cancelling an Event

Several client-side events occur immediately before **RadAutoCompleteBox** performs some action. These events have names that end with "-ing". You can use these events to cancel the **RadAutoCompleteBox's** action by using the **set_cancel** method of the **eventArgs** passed to the handler:

````JavaScript
	
	function onDropDownClosing(sender, eventArgs) {
        eventArgs.set_cancel(true);
        alert('The DropDown remains open.');
    }
	
````


## RadAutoCompleteBox Client-Side Object Model


>caption Properties

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_text()|none|string|Returns a string containing the text of each entry, separated by a delimeter.|
|get_entries()|none|Telerik.Web.UI.AutoCompleteBoxEntryCollection|Returns a collection of all the entries. See Example 1.|
|get_inputElement()|none|DOM Object|Gets a reference to the HTML element representing the input area.|
|get_isUsingODataSource()|none|boolean|Returns *true* if RadAutoCompleteBox is bound to OData, *false* otherwise.|
|get_bindingMode()|none|Telerik.Web.UI.RadAutoCompleteBoxBinding Enum|Returns a number from the RadAutoCompleteBoxBinding enumeration. See Example 2.|
|set_requestDelay()|number (milliseconds)|undefined|Sets delay time in milliseconds, when a request to the datasource is being triggered. See Example 3.|

**Example 1:** Access the **RadAutoCompleteBox** entries collection, and add new entry:
````JavaScript
	
	function addEntry() {
		var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
		var newEntry = autoComplete.createEntry('Text', 'Value');
		var entries = autoComplete.get_entries();
		entries.add(newEntry);
    }
	
````


**Example 2:** Telerik.Web.UI.RadAutoCompleteBoxBinding Enumeration:
````ASPNET
RadAutoCompleteBoxBinding:
{
	Callback: 0,
	WebService: 1,
	OData: 2
}
````

**Example 3:** Set delay of 5 seconds when requesting data form the datasource:
````JavaScript
	
	function delayRequest() {
		var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
		autoComplete.set_requestDelay(5000);
    }
	
````

>caption Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|clear()|none|none|Closes the drop-down container, deleting all the items present in it.|
|createEntry()|string,string|Telerik.Web.UI.AutoCompleteBoxEntry|Returns the created entry. See Example 1.|
|query()|string|none|Sends request to the server against the value passed as an argument. If no argument is passed, the request is made against the text currently present into the input area.|

## AutoCompleteBoxEntry Client-Side Object Model


>caption Properties

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_index()|none|number|Returns the index of the specified entry.|
|get_text()|none|string|Returns the text of the specified entry.|
|get_value()|none|string|Returns the value of the specified entry.|
|get_token()|none|DOM object|Returns a reference to the HTML element representing the specified entry. If the input type of RadAutoCompleteBox is set to "*Text*", the property will return nothing. See Example 4.|
|get_parent()|none|Telerik.Web.UI.RadAutoCompleteBox|Returns the parent object of the specified entry.|

**Example 4:** Create new entry, add it to the **RadAutoCompleteBox** entries collection and set the color of the new entry token DOM element to 'red':
````JavaScript
	
	function changeTokenElementColor() {
		var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
		var newEntry = autoComplete.createEntry('Text', 'Value');
		var entries = autoComplete.get_entries();
		entries.add(newEntry);
		var tokenDomElement = newEntry.get_token();
		tokenDomElement.style.color = "red";
    }
	
````


## AutoCompleteBoxEntryCollection Client-Side Object Model


>caption Properties

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_count()|none|Number|Returns the number of the entries present in the Entry collection.|


>caption Methods

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|add()|Telerik.Web.UI.AutoCompleteBoxEntry|none|Adds the specified entry into the Entry collection. See Example 4.|
|insert()|number,Telerik.Web.UI.AutoCompleteBoxEntry|none|Inserts an entry in the Entry collection with the specified index.|
|remove()|Telerik.Web.UI.AutoCompleteBoxEntry|none|Removes the specified entry from the Entry collection.|
|clear()|none|none|Clears all the entries from the Entry collection.|
|getEntry()|number|Telerik.Web.UI.AutoCompleteBoxEntry|Returns the entry with the specified index.|
|indexOf()|Telerik.Web.UI.AutoCompleteBoxEntry|number|Returns the index of the specified entry.|
