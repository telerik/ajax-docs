---
title: RadTabCollection Object
page_title: RadTabCollection Object - RadTabStrip
description: Check our Web Forms article about RadTabCollection Object.
slug: tabstrip/client-side-programming/radtabcollection-object
tags: radtabcollection,object
published: True
position: 3
---

# RadTabCollection Object

## 

The **RadTabCollection** object is returned by the **get_tabs()** method of the **RadTabStrip** or the **RadTab** object. The following table lists the most important methods of the object.


|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **add** |RadTab|none|Adds a tab to the collection. See **Example 1**. |
| **insert** | int, RadTab | none | Inserts the tab into the collection at the position defined by the first (index) parameter. See **Example 2**. |
| **remove** | RadTab | none | Removes the specified tab from the collection. See **Example 3**.  |
| **clear** | none | none | Clears the Tabs collection of all the child tabs it contains. See **Example 4**. |
| **getTab** | int | RadTab | Returns the tab from the collection that resides at the specified index. See **Example 5**. |
| **indexOf** | RadTab | int | Returns the index of a tab. See **Example 6**. |
| **removeAt** | int | none | Removes the tab at the specified index. See **Example 7**. |
| **get_count** | none | int | Returns the number of the tabs in the collection. See **Example 8**. |


>caution Changes to the tab collection made using these methods do not persist after a postback unless surrounded by a call to the **trackChanges()** and the **commitChanges()** methods of the tab strip object.
>

>note Note that clearing the collection using the **clear()** method will not persist after postback even if implemented between **trackChanges()** and **commitChanges()** calls.
>

>caption Example 1. Add tab to the RadTabCollection

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


>caption Example 2. Insert tab at specific index

````JavaScript	
function insertNewTab() {
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	tabStrip.trackChanges();
	var tab = new Telerik.Web.UI.RadTab();
	tab.set_text("tab1");
	tabStrip.get_tabs().insert(0,tab);
	tabStrip.commitChanges();
} 			
````

>caption Example 3. Remove tab from the RadTabCollection 

````JavaScript	 
function removeTab() {
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	tabStrip.trackChanges();
	var tab = tabStrip.get_tabs().getTab(0);
	tabStrip.get_tabs().remove(tab);
	tabStrip.commitChanges();
}
````


>caption Example 4. Clear the RadTabCollection

````JavaScript	
function clearTabCollection() {
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	tabStrip.trackChanges();
	tabStrip.get_tabs().clear();
	tabStrip.commitChanges(); 			
}
````

>caption Example 5. Get tab at specific index

````JavaScript
function getTabAtPosition() {
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	var tab = tabStrip.get_tabs().getTab(0);
	alert(tab.get_text());
}
````

>caption Example 6. Get the index of a tab

````JavaScript
function getTabPosition() {	
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	var rootTab1 = tabStrip.get_tabs().getTab(0);
	var index = tabStrip.get_tabs().indexOf(rootTab1);

	//to get the index of the first child of the first root tab
	var firstChild = tabStrip.get_tabs().getTab(0).get_tabs().getTab(0);
	var firstChildIndex = tabStrip.get_tabs().getTab(0).get_tabs().indexOf(firstChild); 	
}
````


>caption Example 7. Remove tab at specific index

````JavaScript
function removeTabAtPosition() {
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	var tab = tabStrip.findTabByText("Child RadTab 1");
	var tabs = tab.get_parent().get_tabs();
	var index = tabs.indexOf(tab);
	tabs.removeAt(index); 			
}
````

>caption Example 8. Get count of tabs

````JavaScript 
function alertTabsText() {
	var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
	var tabs = tabStrip.get_tabs();
	for (var i=0; i < tabs.get_count(); i++) {
		alert(tabs.getTab(i).get_text());
	}
} 	 
````

# See Also

 * [Working With Tabs at the Client]({%slug tabstrip/tabs/working-with-tabs-at-the-client%})

 * [Accessing Tabs]({%slug tabstrip/server-side-programming/accessing-tabs%})

 * [Overview]({%slug tabstrip/client-side-programming/overview%})
