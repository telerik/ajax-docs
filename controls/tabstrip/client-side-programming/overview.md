---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: tabstrip/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadTabStrip__ provides a flexible client-side API. You can easily interact with the tab strip in the browser using the tab strip client-side object. In addition to a variety of [client-side events]({%slug tabstrip/client-side-programming/events%}), the client-side object model lets you achieve complicated tasks while avoiding unnecessary post-backs.

## Getting the RadTabStrip client-side object

__RadTabStrip__ creates a client-side object with the ClientID of the tab strip. You can obtain the reference using the following JavaScript code:

````JavaScript
	     
	var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
				
````



## Getting the instance of a particular RadTab

Once you have the client-side object of __RadTabStrip__, you can use the __findTabByText()__ method to get the instance of a particular tab:

````JavaScript
	     
	var tabStrip= $find("<%= RadTabStrip1.ClientID %>");
	var tab = tabStrip.findTabByText(text);
				
````



You can also use the __findTabByValue()__ method to get a specific tab by its value.

## Cancelling an action

Several client side events occur immediately before the tab strip performs some action. Most of these events all have names that end in "-ing". You can use these events to cancel the tab strip action by using the cancel property of the __eventArgs__ passed to the handler:

````JavaScript
	     
	
	function OnClientTabSelecting(sender, eventArgs)
	{
	 eventArgs.set_cancel(true);
	} 
				
````



## Calling a client-side method

When you get the instance of the __RadTabStrip__ object, you can call client-side methods to perform certain tasks. Consider the following examples:

* __select()__

````JavaScript
	     
	function selectTab(text)
	{
	 var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	 var tab = tabStrip.findTabByText(text);
	 if (tab)
	 {
	   tab.select();
	 }
	 else
	 {
	   alert("Tab with text '" + text + "' not found.");
	 }
	} 
				
````



* __unselect()__

````JavaScript
	     
	function unSelectTab(text)
	{
	 var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	 var tab = tabStrip.findTabByText(text);
	 if (tab)
	 {
	   tab.unselect();
	 }
	 else
	 {
	   alert( "Tab with text '" + text + "' not found.");
	 }
	} 
				
````



* __disable()__

````JavaScript
	     
	function disableTab(text)
	{
	 var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	 var tab = tabStrip.findTabByText(text);
	 if (tab)
	 {
	   tab.disable();
	 }
	 else
	 {
	   alert("Tab with text '" + text + "' not found.");
	 }
	} 
				
````



* __enable()__

````JavaScript
	     
	function enableAll()
	{
	 var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
	 for (var i = 0; i < tabStrip.get_allTabs().length; i++)
	 {
	   tabstrip.get_allTabs()[i].enable();
	 }
	} 
				
````



## Preserving Changes

By default, changes made in client-side code do not persist over a post-back to the server. To preserve changes, you must use the __trackChanges__ and __commitChanges__ methods:

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



# See Also

 * [RadTabStrip Object]({%slug tabstrip/client-side-programming/radtabstrip-object%})

 * [RadTabCollection Object]({%slug tabstrip/client-side-programming/radtabcollection-object%})

 * [RadTab Object]({%slug tabstrip/client-side-programming/radtab-object%})

 * [Working With Tabs at thr Client]({%slug tabstrip/tabs/working-with-tabs-at-thr-client%})
