---
title: Client-side Binding
page_title: Client-side Binding | UI for ASP.NET AJAX Documentation
description: Client-side Binding
slug: treemap/data-binding/client-side-binding
tags: client-side,binding
published: True
position: 1
---

# Client-side Binding



The following article, demonstrates the technique to bind the __RadTreeMap__ at client-side.

## 

The RadTreeMap control could be bound entirely at client-side. This scenario can be achieved, by supplying the RadTreeMap with a data, using the __set_dataSource()__ function. The function accepts two parameters, which are as follows:

* __data__ - the data, with witch the control will be supplied with. (see __Example 1__ for a structure reference)

* __fields__ - the data fields, which presents the mapping between the values of the data source and the control: __textField, valueField and colorField__. In addition, you could specify the name for the sub-items collection from the data source, using the __childrenField__. The __childrenField__ has a default value - __items__. (see __Example 1__ for a structure reference)

__Example 1__ - demonstrates the technique for achieving a client-side data-binding for __RadTreeMap__.



````ASPNET
	        <telerik:radtreemap runat="server" id="RadTreeMap1"
	            onclientload="OnClientLoad">
	        </telerik:radtreemap>
	        <script type="text/javascript">
	            function OnClientLoad(sender) {
	                var data = [{
	                    name: "item 1",
	                    value: 1,
	                    items: [{ name: "item 1.1", value: 10 },
	                            { name: "item 1.2", value: 11 },
	                            { name: "item 1.3", value: 12 }]
	                }];
	
	                var fields = { textField: "name", valueField: "value" };
	
	                sender.set_dataSource(data, fields);
	            }
	        </script>
````

