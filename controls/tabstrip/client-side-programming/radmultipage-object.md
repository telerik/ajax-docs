---
title: RadMultiPage Object
page_title: RadMultiPage Object | UI for ASP.NET AJAX Documentation
description: RadMultiPage Object
slug: tabstrip/client-side-programming/radmultipage-object
tags: radmultipage,object
published: True
position: 5
---

# RadMultiPage Object



Telerik RadMultiPage exposes a client-side API to manage the switching of the pages. The client-side __RadMultiPage__ object has a method named __get_pageViews__, which returns a RadPageViewCollection of all pageviews contained within the multipage.



## RadMultiPage client-side object






>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_visible__ |none|Boolean|Returns true if the multipage is visible.|

````JavaScript
	
	var multiPage = $find("<%=RadMultiPage1.ClientID %>");
	if(multiPage.get_visible())
	{
	   alert("visible");
	}
	else
	{
	   alert("invisible");
	} 
	  
````




>caption  

|  __set_visible__  | Boolean | none | Shows/Hides the multipage. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	var multiPage = $find("<%=RadMultiPage1.ClientID %>");
	if(multiPage.get_visible())
	{
	   multiPage.set_visible(false);
	}
	else
	{
	   multiPage.set_visible(true);
	} 
			
````




>caption  

|  __get_selectedPageView__  | none | RadPageView | Returns the currently selected pageview. |
| ------ | ------ | ------ | ------ |

````XML
	
	var multiPage = $find("<%=RadMultiPage1.ClientID %>");
	var pageView = multiPage.get_selectedPageView();
	if(pageView)
	{
	   alert("The ID of the selected RadPageView is " + pageView.get_id());
	} 
	  
````




>caption  

|  __get_pageViews__  | none | RadPageViewCollection | Returns a collection of all pageviews. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	var multiPage = $find("<%=RadMultiPage1.ClientID %>");
	var i;
	for(i=0; i<multiPage.get_pageViews().get_count();i++)
	{
	   alert(multiPage.get_pageViews().getPageView(i).get_id());
	}   
	
````




>caption  

|  __findPageViewByID__  | String | RadMultiPage | Gets the first RadMultiPage instance, whose id corresponds to the passed parameter. |
| ------ | ------ | ------ | ------ |

````JavaScript
	
	var multiPage = $find("<%=RadMultiPage1.ClientID %>");
	var pageView = multiPage.findPageViewByID("Pageview2");
	if(pageView)
	   pageView.set_selected(true); 
	
````




>caption  

|  __get_selectedIndex__  | none | Integer | Returns the index of the selected pageview. |
| ------ | ------ | ------ | ------ |
| __set_selectedIndex__ |Integer|none|Sets the SelectedIndex of the multipage.|
| __get_element__ |none|HTML Element|Gets the DOM element for the multipage.|
