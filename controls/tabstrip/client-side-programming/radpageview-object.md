---
title: RadPageView Object
page_title: RadPageView Object | UI for ASP.NET AJAX Documentation
description: RadPageView Object
slug: tabstrip/client-side-programming/radpageview-object
tags: radpageview,object
published: True
position: 4
---

# RadPageView Object



The __RadPageView__object is returned by the __getPageView__ method of the RadPageView collection.

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
| __select__ |none|none|Selects the pageview.|
| __unselect__ |none|none|Unselects the pageview.|
| __get_selected__ |none|Boolean|Returns true if the pageview is selected.|
| __set_selected__ |Boolean|none|Selects/Unselects the pageview.|
| __get_multiPage__ |none|RadMultiPage|Gets the MultiPage containing the pageview.|
| __get_index__ |none|Integer|Returns the index of the pageview.|
| __get_element__ |none|DOM|Gets the DOM element for the pageview.|
| __get_id__ |none|Integer|Gets the ID of the pageview.|
| __show__ |none|none|Shows the pageview.|
| __hide__ |none|none|Hides the pageview.|
| __get_contentUrl__ |none|none|Gets the URL of the page that is opened in the pageview.|
| __set_contentUrl__ |String|none|Sets the URL of the page that is opened in the pageview.|
