---
title: Working With Tabs at thr Client
page_title: Working With Tabs at thr Client | RadTabStrip for ASP.NET AJAX Documentation
description: Working With Tabs at thr Client
slug: tabstrip/tabs/working-with-tabs-at-thr-client
tags: working,with,tabs,at,thr,client
published: True
position: 6
---

# Working With Tabs at thr Client

**RadTabStrip** provides a client-side API for adding, deleting and disabling tabs. By using the **trackChanges** and **commitChanges** methods of the client-side **RadTabStrip** object, these changes can persist after a postback.

## Adding tabs

To add a tab, use the **add** or **insert** method of the tabs collection:

````JavaScript
function AddNewTabs()
{ 
	var tabstrip = $find("<%= RadTabStrip1.ClientID %>");
	var roottab = new Telerik.Web.UI.RadTab();
	roottab.set_text("New Root Tab");
	var childTab = new Telerik.Web.UI.RadTab();
	childTab.set_text("New Child Tab");
	var firstChild = new Telerik.Web.UI.RadTab();
	firstChild.set_text("New First Child");
	
	tabstrip.trackChanges();
	tabstrip.get_tabs().add(roottab);
	roottab.get_tabs().add(childTab);
	roottab.get_tabs().insert(0, firstChild);
	tabstrip.commitChanges();
}				
````

## Removing tabs

Use the **remove** or **removeAt** method of the tabs collection to remove tabs:

````JavaScript
function RemoveTab()
{
  var tabStrip = $find("<%= RadTabStrip1.ClientID %>");
  var tab = tabStrip.findTabByText("delete me");
  if (tab)
  {
    var parentTab = tab.get_parent();
    tabStrip.trackChanges();
    parentTab.get_tabs().remove(tab);
    // or
	parentTab.get_tabs().removeAt(tab.get_index());
    tabStrip.commitChanges();
  }
}				
````

## Enabling and Disabling items

Use the **disable** and **enable** methods of the tabs collection to disable or enable items:

````JavaScript
function DisableItem()
{     
	var tabStrip = $find("<%= RadTabStrip1.ClientID%>");
	var tab = tabStrip.findTabByText("disable me");
	if(tab)
	{
		tabStrip.trackChanges();
		tab.disable();         
		tabStrip.commitChanges();
	}
}

function EnableItem()
{
   var tabStrip = $find("<%= RadTabStrip1.ClientID%>");
   var tab = tabStrip.findTabByText("enable me");
   if(tab && !tab.get_isEnabled())
   {
     	tabStrip.trackChanges();
		tab.enable();         
     	tabStrip.commitChanges();
   }
}		
````

# See Also

 * [Working With Tabs at the Server]({%slug tabstrip/tabs/working-with-tabs-at-the-server%})

 * [Overview]({%slug tabstrip/tabs/overview%})

 * [Overview]({%slug tabstrip/client-side-programming/overview%})
