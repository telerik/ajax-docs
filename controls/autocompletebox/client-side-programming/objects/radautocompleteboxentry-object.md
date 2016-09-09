---
title: AutoCompleteBoxEntry Object
page_title: AutoCompleteBoxEntry Object | AutoCompleteBox for ASP.NET AJAX Documentation
description: AutoCompleteBoxEntry Object
slug: autocompletebox/client-side-programming/objects/autocompleteboxentry-object
tags: autocompletebox,object
published: True
position: 1
---

# AutoCompleteBoxEntry Client-Side Object Model



## 

This article explains about the properties and methods of the **AutoCompleteBoxEntry** client-side object. 

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_index()|none|number|Returns the index of the specified entry.|
|get_text()|none|string|Returns the text of the specified entry.|
|get_value()|none|string|Returns the value of the specified entry.|
|get_token()|none|DOM object|Returns a reference to the HTML element representing the specified entry. If the input type of RadAutoCompleteBox is set to "*Text*", the property will return nothing. See Example 1.|
|get_parent()|none|Telerik.Web.UI.RadAutoCompleteBox|Returns the parent object of the specified entry.|

**Example 1:** Create new entry, add it to the **RadAutoCompleteBox** entries collection and set the color of the new entry token DOM element to 'red':
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




# See Also

 * [RadAutoCompleteBox Object]({%slug autocompletebox/client-side-programming/objects/radautocompletebox-object%})
 
 * [AutoCompleteBoxEntryCollection Object]({%slug autocompletebox/client-side-programming/objects/autocompleteboxentrycollection-object%})

 
 