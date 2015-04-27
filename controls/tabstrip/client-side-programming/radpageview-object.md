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



The **RadPageView**object is returned by the **getPageView** method of the RadPageView collection.

````JavaScript
	
	var multiPage = $find("<%=RadMultiPage1.ClientID %>");
	var i;
	for(i=0; i<multiPage.get_pageViews().get_count();i++)
	{
	   alert(multiPage.get_pageViews().getPageView(i).get_id());
	}   
	
````



## RadPageView client-side object

The following table lists the most important methods:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **select** |none|none|Selects the pageview.|
| **unselect** |none|none|Unselects the pageview.|
| **get_selected** |none|Boolean|Returns true if the pageview is selected.|
| **set_selected** |Boolean|none|Selects/Unselects the pageview.|
| **get_multiPage** |none|RadMultiPage|Gets the MultiPage containing the pageview.|
| **get_index** |none|Integer|Returns the index of the pageview.|
| **get_element** |none|DOM|Gets the DOM element for the pageview.|
| **get_id** |none|Integer|Gets the ID of the pageview.|
| **show** |none|none|Shows the pageview.|
| **hide** |none|none|Hides the pageview.|
| **get_contentUrl** |none|none|Gets the URL of the page that is opened in the pageview.|
| **set_contentUrl** |String|none|Sets the URL of the page that is opened in the pageview.|
