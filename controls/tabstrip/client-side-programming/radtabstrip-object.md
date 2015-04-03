---
title: RadTabStrip Object
page_title: RadTabStrip Object | UI for ASP.NET AJAX Documentation
description: RadTabStrip Object
slug: tabstrip/client-side-programming/radtabstrip-object
tags: radtabstrip,object
published: True
position: 1
---

# RadTabStrip Object



## 

The table below lists the most important methods of the client-side __RadTabStrip__ object. Many significant methods for performing common tasks such as adding, inserting and removing tabs are actually performed using the [RadTabCollection object]({%slug tabstrip/client-side-programming/radtabcollection-object%}).


>caption  

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __trackChanges__ |none|none|Begins tracking changes to the tabs. Only changes to the tabs that occur between a call to __trackChanges__ and __commitChanges__ persist after a postback.|
| __commitChanges__ |none|none|Ends tracking changes to the tabs. Only changes to the tabs that occur between a call to __trackChanges__ and __commitChanges__ persist after a postback.|

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

|  __disable/set_enabled(false)__  | none | none | Disables all tabs in the tab strip. Clicking on any tab has no effect, child tabs cannot be opened. |
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

|  __enable/set_enabled(true)__  | none | none | Enables all tabs in the tab strip. |
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

|  __get_enabled__  | none | boolean | True if the tab strip is enabled. To enable a tab strip, use the enable() or set_enabled(true) methods. |
| ------ | ------ | ------ | ------ |
| __findTabByValue__ |(string value)|RadTab|Returns the first __RadTab__ object whose __Value__ property is equal to the passed parameter.|
| __findTabByText__ |(string text)|RadTab|Returns the first __RadTab__ object whose __Text__ property is equal to the passed parameter.|
| __findTabByUrl__ |(string URL)|RadTab|Returns the first __RadTab__ object whose __NavigateUrl__ property is equal to the passed parameter.|
| __findTabByAbsoluteUrl__ |(string URL)|RadTab|Returns the first __RadTab__ object whose __NavigateUrl__ property is equal to the passed parameter. Note that the parameter should ends with '/' like:var item = sender.findTabByAbsoluteUrl('http://www.test.com/');|
| __findTabByAttribute__ |(string attributeName, string value)|RadTab|Returns the first __RadTab__ object with a custom attribute of the specified name that has the specified value.|
| __repaint__ |none|none|Redraws the RadTabStrip control|
| __get_tabs__ |none|RadTabCollection|Returns the collection of root level tabs.|

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

|  __get_allTabs__  | none | Array | Gets a linear collection of all tabs. This includes all root and child tabs in the tab strip. |
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

|  __get_selectedTab__  | none | RadTab | Returns the root level selected tab. Null if no root tab has been selected. |
| ------ | ------ | ------ | ------ |
| __get_multiPageID__ |none|String|Returns the value of __MultiPageID__ property, if any.|
| __set_multiPageID__ |String|none|Returns __true__ if the tab is visible or __false__ otherwise.|
| __get_attributes__ |none|Collection|Returns the collection of custom attributes for the tab strip.|
| __get_element__ |none|HTML Element|Gets the DOM element for the tab strip.|

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

|  __get_childListElement__  | none | HTML Element | Gets the DOM element for the list of tabs in the tab strip. |
| ------ | ------ | ------ | ------ |
| __get_validationGroup__ |none|String|Gets the name of the validation group to be used for the integrated validation controls.|
| __set_validationGroup__ |String|none|Sets the name of the validation group to be used for the integrated validation controls.|
| __add_<EventName>__ |(mixed eventHandler)|none|Attaches an eventHandler to the event with the name <EventName>. Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug tabstrip/client-side-programming/events%}).|

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

|  __remove_<EventName>__  | (mixed eventHandler) | Boolean | Detaches an eventHandler from the event with the name <EventName>.Returns "True" if the eventHandler is found and detached, false otherwise.Note that client-side event names differ from their server-side counterparts. For more information, see[Client-Side Events]({%slug tabstrip/client-side-programming/events%}). |
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

 * [Working With Tabs at thr Client]({%slug tabstrip/tabs/working-with-tabs-at-thr-client%})
