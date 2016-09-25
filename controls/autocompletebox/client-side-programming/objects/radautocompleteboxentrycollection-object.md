---
title: AutoCompleteBoxEntryCollection Object
page_title: AutoCompleteBoxEntryCollection Object | AutoCompleteBox for ASP.NET AJAX Documentation
description: AutoCompleteBoxEntryCollection Object
slug: autocompletebox/client-side-programming/objects/autocompleteboxentrycollection-object
tags: autocompletebox,object
published: True
position: 2
---

# AutoCompleteBoxEntryCollection Object



## 

The **AutoCompleteBoxEntryCollection** object is returned by the **get_items** method of the **RadAutoCompleteBox** object. The following table lists the most important methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_count()|none|Number|Returns the number of the entries present in the Entry collection.|
|add()|Telerik.Web.UI.AutoCompleteBoxEntry|none|Adds the specified entry into the Entry collection. See **Example 1**.|
|insert()|number,Telerik.Web.UI.AutoCompleteBoxEntry|none|Inserts an entry in the Entry collection with the specified index.|
|remove()|Telerik.Web.UI.AutoCompleteBoxEntry|none|Removes the specified entry from the Entry collection.|
|clear()|none|none|Clears all the entries from the Entry collection.|
|getEntry()|number|Telerik.Web.UI.AutoCompleteBoxEntry|Returns the entry with the specified index.|
|indexOf()|Telerik.Web.UI.AutoCompleteBoxEntry|number|Returns the index of the specified entry.|


>caption Example 1: Create new entry, add it to the **RadAutoCompleteBox** entries collection and set the color of the new entry token DOM element to 'red':
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

 * [AutoCompleteBoxEntry Object]({%slug autocompletebox/client-side-programming/objects/autocompleteboxentry-object%})
 
