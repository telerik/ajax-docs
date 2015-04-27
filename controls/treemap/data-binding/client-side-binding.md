---
title: Client-side Binding
page_title: Client-side Binding | RadTreeMap for ASP.NET AJAX Documentation
description: Client-side Binding
slug: treemap/data-binding/client-side-binding
tags: client-side,binding
published: True
position: 1
---

# Client-side Binding



The following article, demonstrates the technique to bind the **RadTreeMap** at client-side.

## 

The RadTreeMap control could be bound entirely at client-side. This scenario can be achieved, by supplying the RadTreeMap with a data, using the **set_dataSource()** function. The function accepts two parameters, which are as follows:

* **data** - the data, with witch the control will be supplied with. (see **Example 1** for a structure reference)

* **fields** - the data fields, which presents the mapping between the values of the data source and the control: **textField, valueField and colorField**. In addition, you could specify the name for the sub-items collection from the data source, using the **childrenField**. The **childrenField** has a default value - **items**. (see **Example 1** for a structure reference)

**Example 1** - demonstrates the technique for achieving a client-side data-binding for **RadTreeMap**.



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

