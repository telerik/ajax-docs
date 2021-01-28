---
title: get_clientDataKeyNames()
page_title: get_clientDataKeyNames() - RadGrid
description: Check our Web Forms article about get_clientDataKeyNames().
slug: grid/client-side-programming/gridtableview-object/properties/get_clientdatakeynames()
tags: get_clientdatakeynames()
published: True
position: 2
---

# get_clientDataKeyNames()



## 

One-dimensional array which holds the key fields set through the **ClientDataKeyNames** property of **GridTableView** on the server. To extract the key values you can use the *eventArgs.getDataKeyValue()* inside any row-related client event handler of RadGrid.

>caution You should set **ClientDataKeyNames** server-side in order to access the key values client-side!
>


Example:

````ASP.NET
	<ClientSettings>
	  <ClientEvents OnHierarchyExpanded="HierarchyExpanded" />
	</ClientSettings>
````

````JavaScript
	function HierarchyExpanded(sender, args)
	{  
	    var firstClientDataKeyName = args.get_tableView().get_clientDataKeyNames()[0];
	    alert("Item with " + firstClientDataKeyName + ":'" + args.getDataKeyValue(firstClientDataKeyName) + "' expanded.");
	}
````


