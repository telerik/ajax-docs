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

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **trackChanges** |none|none|Begins tracking changes to the tabs. Only changes to the tabs that occur between a call to **trackChanges** and **commitChanges** persist after a postback. See **Example 1**.|
| **commitChanges** |none|none|Ends tracking changes to the tabs. Only changes to the tabs that occur between a call to **trackChanges** and **commitChanges** persist after a postback. See **Example 1**.|
| **enable** | none | none | Disables all tabs in the tab strip. Clicking on any tab has no effect, child tabs cannot be opened. See **Example 2**. |
| **disable** | none | none | Enables all tabs in the tab strip. See **Example 3**. |
| **set_enabled** | bool | none | Enables or disables all tabs in the tab strip. See **Example 2** and **Example 3**. |
| **get_enabled** | none | boolean | True if the tab strip is enabled. To enable a tab strip, use the enable() or set_enabled(true) methods. |
| **findTabByValue** |string|RadTab|Returns the first **RadTab** object whose **Value** property is equal to the passed parameter.|
| **findTabByText** |string|RadTab|Returns the first **RadTab** object whose **Text** property is equal to the passed parameter.|
| **findTabByUrl** |string|RadTab|Returns the first **RadTab** object whose **NavigateUrl** property is equal to the passed parameter.|
| **findTabByAbsoluteUrl** |string|RadTab|Returns the first **RadTab** object whose **NavigateUrl** property is equal to the passed parameter. Note that the parameter should end with '/' like: 'https://www.telerik.com/';|
| **findTabByAttribute** |string attributeName, string value)|RadTab|Returns the first **RadTab** object with a custom attribute of the specified name that has the specified value.|
| **repaint** |none|none|Redraws the RadTabStrip control|
| **get_tabs** |none|RadTabCollection|Returns the collection of root level tabs. See **Example 1** and **Example 4**.|
| **get_allTabs** | none | Array | Gets a linear collection of all tabs. This includes all root and child tabs in the tab strip. See **Example 5**. |
| **get_selectedTab** | none | RadTab | Returns the root level selected tab. Null if no root tab has been selected. |
| **get_multiPage** |none| RadMultiPage | Returns the associated **RadMultiPage**, if any.|
| **get_multiPageID** |none|String|Returns the value of **MultiPageID** property, if any.|
| **set_multiPageID** |String|none|Returns **true** if the tab is visible or **false** otherwise.|
| **get_attributes** |none|Collection|Returns the collection of custom attributes for the tab strip.|
| **get_element** |none|HTML Element|Gets the DOM element for the tab strip. See **Example 6** and **Example 7**. |
| **get_childListElement** | none | HTML Element | Gets the DOM element for the list of tabs in the tab strip. |
| **get_validationGroup** |none|String|Gets the name of the validation group to be used for the integrated validation controls.|
| **set_validationGroup** |String|none|Sets the name of the validation group to be used for the integrated validation controls.|
| **add_&lt;EventName&gt;** |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name <EventName>. Note that client-side event names differ from their server-side counterparts. For more information, see [Client-Side Events]({%slug tabstrip/client-side-programming/events%}). See **Example 8**. |
| **remove_&lt;EventName&gt;** | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name <EventName>.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see [Client-Side Events]({%slug tabstrip/client-side-programming/events%}). See **Example 9**. |


Client side changes are available on the server side after postback. You can use the [ClientChanges]({%slug tabstrip/client-side-programming/accessing-client-changes-at-the-server%}) property to access them.

>note Note that attached or removed events from the **RadTabStrip** object will not be persisted after postback even if implemented between **trackChanges()** and **commitChanges()** calls. Enabling an initially disabled **RadTabStrip** will also not persist.
>

>caption Example 1. Adding tab using trackChanges() and commitChanges()

````JavaScript
function addNewTab() {  
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	var tab = new Telerik.Web.UI.RadTab();
	tab.set_text("New Tab");
	tabStrip.trackChanges();
	tabStrip.get_tabs().add(tab);
	tabStrip.commitChanges();       
} 	
````

>caption Example 2. Disable RadTabStrip

````JavaScript
function disableTabStrip() {
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	tabStrip.disable();
	//or tabStrip.set_enabled(false);
} 				
````

>caption Example 3. Enable RadTabStrip

````JavaScript
function enableTabStrip() {
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	tabsStrip.enable();
	//or tabStrip.set_enabled(true);
} 			
````

>caption Example 4. Get the text of all root tabs of a RadTabStrip

````JavaScript
function alertRootTabsText() {
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	var tabs = tabStrip.get_tabs();
	for (var i=0; i < tabs.get_count(); i++) {
	   alert(tabs.getTab(i).get_text());
	}
} 				
````

>caption Example 5. Get the text of all tabs in a RadTabStrip

````JavaScript
function alertTabsText() {
	var tabStrip = $find( "<%=RadTabStrip1.ClientID %>");
	for (var i=0; i< tabStrip.get_allTabs().length; i++) {
	   alert(tabStrip.get_allTabs()[i].get_text());
	}
} 			
````

>caption Example 6. Hide the RadTabStrip

````JavaScript	     
// note this change does not persist after a postback
function hideTabStrip() {
	var tabStrip = $find( "<%= RadTabStrip1.ClientID %>");
	tabStrip.get_element().style.display = "none" ;
}
````

>caption Example 7. Show the RadTabStrip

````JavaScript
// note this change does not persist after a postback
function showTabStrip() {
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	tabStrip.get_element().style.display = "" ;
} 				
````

>caption Example 8. Attach client-side event handler to the RadTabStrip

````JavaScript	     
function OnClientTabSelectingHandler(sender, args) {
	alert(args.get_tab().get_text() );
}
function AttachHandler() {
	var tabStrip  = $find( "<%=RadTabStrip1.ClientID %>");
	tabStrip.add_tabSelecting( OnClientTabSelectingHandler);
} 			
````

>caption Example 9. Remove client-side event handler from the RadTabStrip

````JavaScript
function OnClientTabSelectingHandler(sender, args) {
	alert(args.get_tab().get_text() );
}
function DetachHandler() {
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
