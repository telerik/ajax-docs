---
title: get_clientDataKeyNames()
page_title: get_clientDataKeyNames() | UI for ASP.NET AJAX Documentation
description: get_clientDataKeyNames()
slug: grid/client-side-programming/gridtableview-object/properties/get_clientdatakeynames()
tags: get_clientdatakeynames()
published: True
position: 2
---

# get_clientDataKeyNames()



## 

One-dimensional array which holds the key fields set through the __ClientDataKeyNames__ property of __GridTableView__ on the server. To extract the key values you can use the *eventArgs.getDataKeyValue()* inside any row-related client event handler of RadGrid.

>caution You should set __ClientDataKeyNames__ server-side in order to access the key values client-side!
>


Example:

````JavaScript
	<ClientSettings>
	  <ClientEvents OnHierarchyExpanded="HierarchyExpanded" />
	</ClientSettings>
	
	function HierarchyExpanded(sender, args)
	{  
	    var firstClientDataKeyName = args.get_tableView().get_clientDataKeyNames()[0];
	    alert("Item with " + firstClientDataKeyName + ":'" + args.getDataKeyValue(firstClientDataKeyName) + "' expanded.");
	}
````


