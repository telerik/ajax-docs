---
title: RadAutoCompleteBox Object
page_title: RadAutoCompleteBox Object | AutoCompleteBox for ASP.NET AJAX Documentation
description: RadAutoCompleteBox Object
slug: autocompletebox/client-side-programming/objects/radautocompletebox-object
tags: autocompletebox,object
published: True
position: 0
---

# RadAutoCompleteBox Object



## 

This article explains about the properties and methods of the **RadAutoCompleteBox** client-side object. The **RadAutoCompleteBox** client API allows for complete control over the client object, giving the developer the opportunity to set the behavior of the control depending on the scenario.


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_text()|none|string|Returns a string containing the text of each entry, separated by a delimeter.|
|get_entries()|none|Telerik.Web.UI.AutoCompleteBoxEntryCollection|Returns a collection of all the entries. See **Example 1**.|
|get_inputElement()|none|DOM Object|Gets a reference to the HTML element representing the input area.|
|get_isUsingODataSource()|none|boolean|Returns **true** if RadAutoCompleteBox is bound to OData, **false** otherwise.|
|get_bindingMode()|none|Telerik.Web.UI.RadAutoCompleteBoxBinding Enum|Returns a number from the RadAutoCompleteBoxBinding enumeration. See **Example 2**.|
|get_allowCustomEntry()|none|boolean|Returns **true** if RadAutoCompleteBox creating entries which text does not match any of the items present in the drop-down container is allowed, **false** otherwise.|
|get_maxResultCount()|none|int|Gets how many results the RadAutoCompleteBox is allowed to be populated with|
|get_minFilterLength()|none|int|Gets the minimum length of the typed text before the control initiates a request for its DataSource.|
|get_delimiter()|none|string|Gets the character that is used to separate the entries.|
|set_allowCustomEntry()|boolean|none| Enables/disables creation of entries which text does not match any of the items present in the drop-down container.|
|set_maxResultCount()|int|none|Sets how many results will the RadAutoCompleteBox be populated with.|
|set_minFilterLength()|int|none|Sets the minimum length of the typed text before the control initiates a request for its DataSource.|
|set_delimiter()|string|none|Sets the character that is used to separate the entries.|
|set_requestDelay()|number (milliseconds)|undefined|Sets delay time in milliseconds, when a request to the datasource is being triggered. See **Example 3**.|
|clear()|none|none|Closes the drop-down container, deleting all the items present in it.|
|createEntry()|string,string|Telerik.Web.UI.AutoCompleteBoxEntry|Returns the created entry. See **Example 1**.|
|query()|string|none|Sends request to the server against the value passed as an argument. If no argument is passed, the request is made against the text currently present into the input area.|



>caption Example 1: Access the **RadAutoCompleteBox** entries collection, and add new entry:
````JavaScript
	
	function addEntry() {
		var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
		var newEntry = autoComplete.createEntry('Text', 'Value');
		var entries = autoComplete.get_entries();
		entries.add(newEntry);
    }
	
````


>caption Example 2: Telerik.Web.UI.RadAutoCompleteBoxBinding Enumeration:
````ASPNET
RadAutoCompleteBoxBinding:
{
	Callback: 0,
	WebService: 1,
	OData: 2
}
````

>caption Example 3: Set delay of 5 seconds when requesting data form the datasource:
````JavaScript
	
	function delayRequest() {
		var autoComplete = $find("<%= RadAutoCompleteBox1.ClientID %>");
		autoComplete.set_requestDelay(5000);
    }
	
````


# See Also

 * [AutoCompleteBoxEntry Object]({%slug autocompletebox/client-side-programming/objects/autocompleteboxentry-object%})
 
 * [AutoCompleteBoxEntryCollection Object]({%slug autocompletebox/client-side-programming/objects/autocompleteboxentrycollection-object%})

 
