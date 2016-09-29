---
title: RadMultiPage Object
page_title: RadMultiPage Object | RadTabStrip for ASP.NET AJAX Documentation
description: RadMultiPage Object
slug: tabstrip/client-side-programming/radmultipage-object
tags: radmultipage,object
published: True
position: 5
---

# RadMultiPage Object

## 

Telerik **RadMultiPage** exposes a client-side API to manage the switching of the pages. The client-side **RadMultiPage** object has a method named **get_pageViews**, which returns a RadPageViewCollection of all PageViews contained within the MultiPage.

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_visible** |none|Boolean|Returns true if the MultiPage is visible. See **Example 1**.|
| **set_visible** | Boolean | none | Shows/Hides the MultiPage. See **Example 2**. |
| **get_selectedPageView** | none | RadPageView | Returns the currently selected PageView. See **Example 3**. |
| **get_pageViews** | none | RadPageViewCollection | Returns a collection of all PageViews. See **Example 4**. |
| **findPageViewByID** | String | RadMultiPage | Gets the first RadMultiPage instance, whose id corresponds to the passed parameter. See **Example 5**. |
| **get_selectedIndex** | none | Integer | Returns the index of the selected PageView. |
| **set_selectedIndex** |Integer|none|Sets the SelectedIndex of the MultiPage.|
| **get_element** |none|HTML Element|Gets the DOM element for the MultiPage.|


>caption Example 1. Retrieve visibility status of RadMultiPage 

````JavaScript
var multiPage = $find("<%=RadMultiPage1.ClientID %>");
if(multiPage.get_visible()) {
   alert("visible");
} else {
   alert("invisible");
} 	  
````

>caption Example 2. Toggle visibility status of RadMultiPage 

````JavaScript	
var multiPage = $find("<%=RadMultiPage1.ClientID %>");
if(multiPage.get_visible()) {
   multiPage.set_visible(false);
} else {
   multiPage.set_visible(true);
} 			
````

>caption Example 3. Get selected PageView 

````JavaScript	
var multiPage = $find("<%=RadMultiPage1.ClientID %>");
var pageView = multiPage.get_selectedPageView();
if(pageView) {
   alert("The ID of the selected RadPageView is " + pageView.get_id());
} 	  
````

>caption  Example 4. Get all PageViews 

````JavaScript	
var multiPage = $find("<%=RadMultiPage1.ClientID %>");
var i;
for(i=0; i<multiPage.get_pageViews().get_count();i++)
{
   alert(multiPage.get_pageViews().getPageView(i).get_id());
}   
````

>caption  Example 5. Find a PageView by ID 

````JavaScript	
var multiPage = $find("<%=RadMultiPage1.ClientID %>");
var pageView = multiPage.findPageViewByID("Pageview2");
if(pageView)
   pageView.set_selected(true); 	
````

