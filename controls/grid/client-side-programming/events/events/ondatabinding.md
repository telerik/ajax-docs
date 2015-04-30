---
title: OnDataBinding
page_title: OnDataBinding | RadGrid for ASP.NET AJAX Documentation
description: OnDataBinding
slug: grid/client-side-programming/events/events/ondatabinding
tags: ondatabinding
published: True
position: 27
---

# OnDataBinding



## 

Telerik.Web.UI.OnDataBinding Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event will be raised when the grid is about to be bound to data client-side. Can be used to change dynamically any of the grid declarative client-side binding properties if needed.

>note Meaningful with client-side data-binding only!
>


>note This event will be raised twice by default - the first call will retrieve the data and the second call will fetch the total items count.
>



|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **location** - the physical location of the web service/page method which retrieves the data for the grid **methodName** - the name of the method which collects the data **methodArguments** - the arguments that will be passed to the method which gets the data (start row index, maximum rows, sort parameter, filter parameter)|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnDataBinding="RadGrid1_DataBinding" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RadGrid1_DataBinding(sender, args)
	        {
	            sender.ClientSettings.DataBinding.SelectMethod = "MyGetDataMethodName";
	            sender.ClientSettings.DataBinding.SelectCountMethod = "MyGetCountMethodName";
	        }
````


