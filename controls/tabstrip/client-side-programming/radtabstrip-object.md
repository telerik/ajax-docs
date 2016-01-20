---
title: RadTabStrip Object
page_title: RadTabStrip Object | RadTabStrip for ASP.NET AJAX Documentation
description: RadTabStrip Object
slug: tabstrip/client-side-programming/radtabstrip-object
tags: radtabstrip,object
published: True
position: 1
---

# RadTabStrip Object

## 

The table below lists the most important methods of the client-side **RadTabStrip** object. Many significant methods for performing common tasks such as adding, inserting and removing tabs are actually performed using the [RadTabCollection object]({%slug tabstrip/client-side-programming/radtabcollection-object%}).


>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Begins tracking changes to the tabs. Only changes to the tabs that occur between a call to **trackChanges** and **commitChanges** persist after a postback.|
| **commitChanges** |none|none|Ends tracking changes to the tabs. Only changes to the tabs that occur between a call to **trackChanges** and **commitChanges** persist after a postback.|

Client side changes are available on the server side after postback. You can use the [ClientChanges]({%slug tabstrip/client-side-programming/accessing-client-changes-at-the-server%}) property to access them.

````JavaScript
function addNewTab()
{  
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	var tab = new Telerik.Web.UI.RadTab();
	tab.set_text("New Tab");
	tabStrip.trackChanges();
	tabStrip.get_tabs().add(tab);
	tabStrip.commitChanges();       
} 	
````


>caption  

|  **disable/set_enabled(false)**  | none | none | Disables all tabs in the tab strip. Clicking on any tab has no effect, child tabs cannot be opened. |
| ------ | ------ | ------ | ------ |

````JavaScript
function disableTabStrip()
{
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	tabStrip.disable();
	//or tabStrip.set_enabled(false);
} 				
````


>caption  

|  **enable/set_enabled(true)**  | none | none | Enables all tabs in the tab strip. |
| ------ | ------ | ------ | ------ |

````JavaScript
function enableTabStrip()
{
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	tabsStrip.enable();
	//or tabStrip.set_enabled(true);
} 			
````

>caption  

|  **get_enabled**  | none | boolean | True if the tab strip is enabled. To enable a tab strip, use the enable() or set_enabled(true) methods. |
| ------ | ------ | ------ | ------ |
| **findTabByValue** |(string value)|RadTab|Returns the first **RadTab** object whose **Value** property is equal to the passed parameter.|
| **findTabByText** |(string text)|RadTab|Returns the first **RadTab** object whose **Text** property is equal to the passed parameter.|
| **findTabByUrl** |(string URL)|RadTab|Returns the first **RadTab** object whose **NavigateUrl** property is equal to the passed parameter.|
| **findTabByAbsoluteUrl** |(string URL)|RadTab|Returns the first **RadTab** object whose **NavigateUrl** property is equal to the passed parameter. Note that the parameter should ends with '/' like:var item = sender.findTabByAbsoluteUrl('http://www.test.com/');|
| **findTabByAttribute** |(string attributeName, string value)|RadTab|Returns the first **RadTab** object with a custom attribute of the specified name that has the specified value.|
| **repaint** |none|none|Redraws the RadTabStrip control|
| **get_tabs** |none|RadTabCollection|Returns the collection of root level tabs.|

````JavaScript
function showRootTabs()
{
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	var tabs = tabStrip.get_tabs();
	for (var i=0; i < tabs.get_count(); i++)
	{
	   alert(tabs.getTab(i).get_text());
	}
} 				
````


>caption  

|  **get_allTabs**  | none | Array | Gets a linear collection of all tabs. This includes all root and child tabs in the tab strip. |
| ------ | ------ | ------ | ------ |

````JavaScript
function showAllTabs()
{
	var tabStrip = $find( "<%=RadTabStrip1.ClientID %>");
	for (var i=0; i< tabStrip.get_allTabs().length; i++)
	{
	   alert(tabStrip.get_allTabs()[i].get_text());
	}
} 			
````


>caption  

|  **get_selectedTab**  | none | RadTab | Returns the root level selected tab. Null if no root tab has been selected. |
| ------ | ------ | ------ | ------ |
| **get_multiPageID** |none|String|Returns the value of **MultiPageID** property, if any.|
| **set_multiPageID** |String|none|Returns **true** if the tab is visible or **false** otherwise.|
| **get_attributes** |none|Collection|Returns the collection of custom attributes for the tab strip.|
| **get_element** |none|HTML Element|Gets the DOM element for the tab strip.|

````JavaScript	     
// hide the tabstrip
// note this change does not persist after a postback
function hideTabStrip()
{
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	tabStrip.get_element().style.display = "none" ;
}

// show the tabstrip
function showTabStrip()
{
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	tabStrip.get_element().style.display = "" ;
} 				
````

>caption  

|  **get_childListElement**  | none | HTML Element | Gets the DOM element for the list of tabs in the tab strip. |
| ------ | ------ | ------ | ------ |
| **get_validationGroup** |none|String|Gets the name of the validation group to be used for the integrated validation controls.|
| **set_validationGroup** |String|none|Sets the name of the validation group to be used for the integrated validation controls.|
| **add_<EventName>** |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name <EventName>. Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug tabstrip/client-side-programming/events%}).|

````JavaScript	     
function OnClientTabSelectingHandler(sender, args)
{
	alert(args.get_tab().get_text() );
}
function AttachHandler()
{
	var tabStrip  = $find( "<%=RadTabStrip1.ClientID %>");
	tabStrip.add_tabSelecting( OnClientTabSelectingHandler);
} 			
````

>caption  

|  **remove_<EventName>**  | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name <EventName>.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see [Client-Side Events]({%slug tabstrip/client-side-programming/events%}). |
| ------ | ------ | ------ | ------ |

````JavaScript
function OnClientTabSelectingHandler(sender, args)
{
	alert(args.get_tab().get_text() );
}
function DetachHandler()
{
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	tabStrip.remove_tabSelecting(OnClientTabSelectingHandler);
} 			
````


# See Also

 * [Overview]({%slug tabstrip/client-side-programming/overview%})

 * [RadTabCollection Object]({%slug tabstrip/client-side-programming/radtabcollection-object%})

 * [RadTabCollection Object]({%slug tabstrip/client-side-programming/radtabcollection-object%})

 * [RadTab Object]({%slug tabstrip/client-side-programming/radtab-object%})

 * [Events]({%slug tabstrip/client-side-programming/events%})

 * [Working With Tabs at the Client]({%slug tabstrip/tabs/working-with-tabs-at-the-client%})
