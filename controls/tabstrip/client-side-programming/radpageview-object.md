---
title: RadPageView Object
page_title: RadPageView Object | RadTabStrip for ASP.NET AJAX Documentation
description: RadPageView Object
slug: tabstrip/client-side-programming/radpageview-object
tags: radpageview,object
published: True
position: 4
---

# RadPageView Object

## 

The **RadPageView** object is returned by the **getPageView()** method of the RadPageView collection.

The following table lists the most important methods:

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **select** |none|none|Selects the PageView.|
| **unselect** |none|none|Deselects the PageView.|
| **get_selected** |none|Boolean|Returns true if the PageView is selected.|
| **set_selected** |Boolean|none|Selects/deselects the PageView.|
| **get_multiPage** |none|RadMultiPage|Gets the MultiPage containing the PageView.|
| **get_index** |none|Integer|Returns the index of the PageView.|
| **get_element** |none|DOM|Gets the DOM element for the PageView.|
| **get_id** |none|Integer|Gets the ID of the PageView. See **Example 1**.|
| **show** |none|none|Shows the PageView.|
| **hide** |none|none|Hides the PageView.|
| **get_contentUrl** |none|none|Gets the URL of the page that is opened in the PageView.|
| **set_contentUrl** |String|none|Sets the URL of the page that is opened in the PageView.|


>caption Example 1. Get the IDs of all PageViews in a RadMultiPage

````JavaScript
var multiPage = $find("<%=RadMultiPage1.ClientID %>");
for(var i = 0; i < multiPage.get_pageViews().get_count(); i++) {
	alert(multiPage.get_pageViews().getPageView(i).get_id());
}   	
````

