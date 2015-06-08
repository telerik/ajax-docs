---
title: RadTab Object
page_title: RadTab Object | RadTabStrip for ASP.NET AJAX Documentation
description: RadTab Object
slug: tabstrip/client-side-programming/radtab-object
tags: radtab,object
published: True
position: 2
---

# RadTab Object

## 

The **RadTab** object is returned by the **getTab** method of the [RadTabCollection object]({%slug tabstrip/client-side-programming/radtabcollection-object%}). It is also exposed by the eventArgs of many [client-side events]({%slug tabstrip/client-side-programming/events%}). The following table lists the most important methods:


>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **findControl** |String|Object|Returns the client-side object of the Control with the specified ID nested in the Tab's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| **disable** |none|none|Disables the tab.|

````JavaScript	 
var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
var tab = tabStrip.findTabByText( "Paris");
tab.disable(); 	 
````


>caption  

|  **enable**  | none | none | Enables the tab if it is disabled. |
| ------ | ------ | ------ | ------ |

````JavaScript	 
var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
var tab = tabStrip.findTabByText( "Paris");
tab.enable(); 	 
````

>caption  

|  **get_isEnabled**  | none | Boolean | Returns true if both the tab and the tabstrip are enabled. If one of them is disabled, get_isEnabled() will return false. |
| ------ | ------ | ------ | ------ |
| **get_enabled** |none|Boolean|Same as get_isEnabled.|
| **set_enabled** |Boolean|none|Sets the enabled state of the tab.|
| **get_tabs** |none|RadTabCollection|Gets the child tabs of the current tab.|
| **get_nextSibling** |none|RadTab|Returns the next sibling of the tab. If the tab is last, returns null.|
| **get_previousSibling** |none|RadTab|Returns the previous sibling of the tab. If the tab is first, returns null.|
| **get_parent** |none|RadTabStrip or RadTab|Returns an instance of the parent object. RadTabStrip if this is a root tab, RadTab if it is a child tab.|
| **get_tabStrip** |none|RadTabStrip|Returns an instance of the tabstrip that contains the tab.|
| **get_pageView** |none|RadPageView|Returns the pageview associated with the tab.|
| **get_pageViewID** |none|string|Returns the ID of the pageview.|
| **set_pageViewID** |string|none|Sets the ID of the pageview.|
| **get_index** |none|Integer|Gets the zero based index of the tab inside the parent tabs collection.|
| **get_level** |none|Integer|Gets the level of the tab. Root level tabs are first level.|
| **get_attributes** |(none)|Collection|Returns the collection of custom attributes for the tab.|

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

|  **get_visible**  | none | boolean | Returns **true** if the tab is visible or **false** otherwise. |
| ------ | ------ | ------ | ------ |
| **set_visible** |boolean|none|Shows/Hides a tab.|
| **set_text** |string text|none|Sets the text of the tab.|
| **get_text** |none|string text|Returns the text of the tab.|
| **set_value** |string value|none|Sets the Value property of the tab.|
| **get_value** |none|string value|Returns the Value property of the tab.|
| **get_isSeparator** |none|boolean|Returns **true** the tab is a separator (sever-side property IsSeparator = true)|
| **get_selected** |none|boolean|Returns whether the tab is selected.|
| **set_selected** |boolean|none|Selects or de-selects the tab.|
| **select** |none|none|Selects the tab.|
| **unselect** |none|none|De-selects the tab.|
| **get_navigateUrl** |none|string|Gets the URL of the Web page the tab launches.|
| **set_navigateUrl** |string|none|Sets the navigateURL property of the tab. This is the URL of the Web page the tab launches.

>caution The **navigateUrl** property must be an absolute URL on the client side: e.g., `http://mydomain.com/default.aspx" not `default.aspx`. 
>
|
| **get_imageUrl** |none|(string imageUrl)|Gets the URL of the image.|
| **set_imageUrl** |(string imageUrl)|none|Sets the URL of the image.|
| **get_hoveredImageUrl** |none|(string imageUrl)|Gets the URL of the image displayed when the mouse if over the tab.|
| **set_hoveredImageUrl** |(string imageUrl)|none|Sets the URL of the image displayed when the mouse if over the tab.|
| **get_element** |none|HTML Element|Gets the root DOM element of the tab (LI).|
| **get_linkElement** |none|HTML Element|Gets the anchor DOM element of the tab(A).|
| **get_imageElement** |none|HTML Element|Gets the image DOM element of the tab. If the server side ImageUrl property is not set,returns null.|
| **get_textElement** |none|HTML Element|Gets the DOM element of the tab text (SPAN).|
| **get_childListElement** |none|HTML Element|Gets the DOM element of the list of child tabs (UL).|
| **scrollIntoView** |none|none|Scrolls to the tab.|
| **click** |none|none|Simulate user click on a tab.|

````JavaScript	
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
tabStrip.get_tabs().getTab(tabStrip.get_tabs().get_count()-1).scrollIntoView(); 			
````


# See Also

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})

 * [Overview]({%slug tabstrip/client-side-programming/overview%})

 * [Overview]({%slug tabstrip/tabs/overview%})

 * [Working With Tabs at thr Client]({%slug tabstrip/tabs/working-with-tabs-at-thr-client%})
