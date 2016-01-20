---
title: RadTabCollection Object
page_title: RadTabCollection Object | RadTabStrip for ASP.NET AJAX Documentation
description: RadTabCollection Object
slug: tabstrip/client-side-programming/radtabcollection-object
tags: radtabcollection,object
published: True
position: 3
---

# RadTabCollection Object

## 

The **RadTabCollection** object is returned by the **get_tabs** method of the **RadTabStrip** or the **RadTab** object. The following table lists the most important methods.

>caution Changes to the tab collection made using these methods do not persist after a postback unless surrounded by a call to the **trackChanges** method of the tab strip object and the **commitChanges** method of the tab strip object.
>

>caption  

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **add** |RadTab|none|Adds a child tab to the collection.|

````JavaScript
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
tabStrip.trackChanges();
var tab = new Telerik.Web.UI.RadTab();
tab.set_text("tab1");
tabStrip.get_tabs().add(tab);
tabStrip.commitChanges(); 	
````


>caption  

|  **insert**  | int, RadTab | none | Inserts the tab into the collection at the position defined by the first (index) parameter. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
tabStrip.trackChanges();
var tab = new Telerik.Web.UI.RadTab();
tab.set_text("tab1");
tabStrip.get_tabs().insert(0,tab);
tabStrip.commitChanges(); 			
````

>caption  

|  **remove**  | RadTab | none | Removes the specified tab from the collection. |
| ------ | ------ | ------ | ------ |

````JavaScript	 
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
tabStrip.trackChanges();
var tab = tabStrip.get_tabs().getTab(0);
tabStrip.get_tabs().remove(tab);
tabStrip.commitChanges(); 	 
````


>caption  

|  **clear**  | none | none | Clears the Tabs collection of all the child tabs it contains. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
tabStrip.trackChanges();
tabStrip.get_tabs().clear();
tabStrip.commitChanges(); 			
````

>caption  

|  **getTab**  | int | RadTab | Returns the tab from the collection that resides at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
var tab = tabStrip.get_tabs().getTab(0); 		
````

>caption  

|  **indexOf**  | RadTab | int | Returns the index of a tab. |
| ------ | ------ | ------ | ------ |

````JavaScript	
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
var rootTab1 = tabStrip.get_tabs().getTab(0);
var index = tabStrip.get_tabs().indexOf(rootTab1);

//to get the index of the first root tab's child:
//var firstChild = tabStrip.get_tabs().getTab(0).get_tabs().getTab(0);
//tabStrip.get_tabs().indexOf(firstChild); 	
````


>caption  

|  **removeAt**  | int | none | Removes the tab at the specified index. |
| ------ | ------ | ------ | ------ |

````JavaScript
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
var tab = tabStrip.findTabByText("Child RadTab 1");
var tabs = tab.get_parent().get_tabs();
var index = tabs.indexOf(tab);
tabs.removeAt(index); 			
````

>caption  

|  **get_count**  | none | int | Returns the number of the tabs in the collection. |
| ------ | ------ | ------ | ------ |

````JavaScript 
var tabStrip = $find("<%=RadTabStrip1.ClientID %>");
var tabs = tabStrip.get_tabs();
for (var i=0; i < tabs.get_count(); i++)
{
	alert(tabs.getTab(i).get_text());
}   	 
````

# See Also

 * [Working With Tabs at the Client]({%slug tabstrip/tabs/working-with-tabs-at-the-client%})

 * [Accessing Tabs]({%slug tabstrip/server-side-programming/accessing-tabs%})

 * [Overview]({%slug tabstrip/client-side-programming/overview%})
