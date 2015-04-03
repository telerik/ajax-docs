---
title: RadTab Object
page_title: RadTab Object | UI for ASP.NET AJAX Documentation
description: RadTab Object
slug: tabstrip/client-side-programming/radtab-object
tags: radtab,object
published: True
position: 2
---

# RadTab Object



## 

The __RadTab__ object is returned by the __getTab__ method of the [RadTabCollection object]({%slug tabstrip/client-side-programming/radtabcollection-object%}). It is also exposed by the eventArgs of many [client-side events]({%slug tabstrip/client-side-programming/events%}). The following table lists the most important methods:


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __findControl__ |String|Object|Returns the client-side object of the Control with the specified ID nested in the Tab's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| __disable__ |none|none|Disables the tab.|

````JavaScript
	 
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	var tab = tabStrip.findTabByText( "Paris");
	tab.disable(); 
	 
````




>caption  

|  __enable__  | none | none | Enables the tab if it is disabled. |
| ------ | ------ | ------ | ------ |

````JavaScript
	 
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	var tab = tabStrip.findTabByText( "Paris");
	tab.enable(); 
	 
````




>caption  

|  __get_isEnabled__  | none | Boolean | Returns true if both the tab and the tabstrip are enabled. If one of them is disabled, get_isEnabled() will return false. |
| ------ | ------ | ------ | ------ |
| __get_enabled__ |none|Boolean|Same as get_isEnabled.|
| __set_enabled__ |Boolean|none|Sets the enabled state of the tab.|
| __get_tabs__ |none|RadTabCollection|Gets the child tabs of the current tab.|
| __get_nextSibling__ |none|RadTab|Returns the next sibling of the tab. If the tab is last, returns null.|
| __get_previousSibling__ |none|RadTab|Returns the previous sibling of the tab. If the tab is first, returns null.|
| __get_parent__ |none|RadTabStrip or RadTab|Returns an instance of the parent object. RadTabStrip if this is a root tab, RadTab if it is a child tab.|
| __get_tabStrip__ |none|RadTabStrip|Returns an instance of the tabstrip that contains the tab.|
| __get_pageView__ |none|RadPageView|Returns the pageview associated with the tab.|
| __get_pageViewID__ |none|string|Returns the ID of the pageview.|
| __set_pageViewID__ |string|none|Sets the ID of the pageview.|
| __get_index__ |none|Integer|Gets the zero based index of the tab inside the parent tabs collection.|
| __get_level__ |none|Integer|Gets the level of the tab. Root level tabs are first level.|
| __get_attributes__ |(none)|Collection|Returns the collection of custom attributes for the tab.|

````JavaScript
	
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	var foundTab = tabStrip.findTabByAttribute( "Population", "0");
	var attributes = foundTab.get_attributes();
	var size = attributes.getAttribute( "size");
	if (size)
	{
	attributes.setAttribute( "Population", size);
	attributes.removeAttribute( "size");
	}
	else
	{
	attributes.setAttribute( "Population", "Unknown" );
	} 
		
````




>caption  

|  __get_visible__  | none | boolean | Returns __true__ if the tab is visible or __false__ otherwise. |
| ------ | ------ | ------ | ------ |
| __set_visible__ |boolean|none|Shows/Hides a tab.|
| __set_text__ |string text|none|Sets the text of the tab.|
| __get_text__ |none|string text|Returns the text of the tab.|
| __set_value__ |string value|none|Sets the Value property of the tab.|
| __get_value__ |none|string value|Returns the Value property of the tab.|
| __get_isSeparator__ |none|boolean|Returns __true__ the tab is a separator (sever-side property IsSeparator = true)|
| __get_selected__ |none|boolean|Returns whether the tab is selected.|
| __set_selected__ |boolean|none|Selects or de-selects the tab.|
| __select__ |none|none|Selects the tab.|
| __unselect__ |none|none|De-selects the tab.|
| __get_navigateUrl__ |none|string|Gets the URL of the Web page the tab launches.|
| __set_navigateUrl__ |string|none|Sets the navigateURL property of the tab. This is the URL of the Web page the tab launches.

>caution The __navigateUrl__ property must be an absolute URL on the client side: e.g." *http://mydomain.com/default.aspx"* not *"default.aspx".* 
>
|
| __get_imageUrl__ |none|(string imageUrl)|Gets the URL of the image.|
| __set_imageUrl__ |(string imageUrl)|none|Sets the URL of the image.|
| __get_hoveredImageUrl__ |none|(string imageUrl)|Gets the URL of the image displayed when the mouse if over the tab.|
| __set_hoveredImageUrl__ |(string imageUrl)|none|Sets the URL of the image displayed when the mouse if over the tab.|
| __get_element__ |none|HTML Element|Gets the root DOM element of the tab (LI).|
| __get_linkElement__ |none|HTML Element|Gets the anchor DOM element of the tab(A).|
| __get_imageElement__ |none|HTML Element|Gets the image DOM element of the tab. If the server side ImageUrl property is not set,returns null.|
| __get_textElement__ |none|HTML Element|Gets the DOM element of the tab text (SPAN).|
| __get_childListElement__ |none|HTML Element|Gets the DOM element of the list of child tabs (UL).|
| __scrollIntoView__ |none|none|Scrolls to the tab.|
| __click__ |none|none|Simulate user click on a tab.|

````JavaScript
	
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	tabStrip.get_tabs().getTab(tabStrip.get_tabs().get_count()-1).scrollIntoView(); 
			
````



# See Also

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})

 * [Overview]({%slug tabstrip/client-side-programming/overview%})

 * [Overview]({%slug tabstrip/tabs/overview%})

 * [Working With Tabs at thr Client]({%slug tabstrip/tabs/working-with-tabs-at-thr-client%})
