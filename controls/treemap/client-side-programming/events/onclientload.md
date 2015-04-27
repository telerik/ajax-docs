---
title: OnClientLoad
page_title: OnClientLoad | RadTreeMap for ASP.NET AJAX Documentation
description: OnClientLoad
slug: treemap/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 0
---

# OnClientLoad



The article bellow, focuses on the usage of the **OnClientLoad** client-side event of the **RadTreeMap**.

## 

The **OnClientLoad** client-side event occurs after the **RadTreeMap** has been fully initialized on the client-side.

The event handler receives one parameter:

* The instance of the **RadTreeMap** control firing the event.

Hook the **OnClientLoad** event and get the client-side instance of the **RadTreeMap** as demonstrated in the example below. This technique can be used to retrieve the **RadTreeMap** instance for use elsewhere.

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


