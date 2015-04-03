---
title: OnClientLoad
page_title: OnClientLoad | UI for ASP.NET AJAX Documentation
description: OnClientLoad
slug: treemap/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 0
---

# OnClientLoad



The article bellow, focuses on the usage of the __OnClientLoad__ client-side event of the __RadTreeMap__.

## 

The __OnClientLoad__ client-side event occurs after the __RadTreeMap__ has been fully initialized on the client-side.

The event handler receives one parameter:

* The instance of the __RadTreeMap__ control firing the event.

Hook the __OnClientLoad__ event and get the client-side instance of the __RadTreeMap__ as demonstrated in the example below. This technique can be used to retrieve the __RadTreeMap__ instance for use elsewhere.

````JavaScript
	        <script type="text/javascript">
	            var treemap;
	            function OnClientLoad(sender) {
	                treemap = sender;
	            }
	        </script>
	
	        <telerik:RadTreeMap runat="server" ID="TreeMap1" OnClientLoad="OnClientLoad">
	            <Items>
	                <telerik:TreeMapItem Text="Parent Item">
	                    <Items>
	                        .....
````


