---
title: OnDataBindingFailed
page_title: OnDataBindingFailed | RadGrid for ASP.NET AJAX Documentation
description: OnDataBindingFailed
slug: grid/client-side-programming/events/events/ondatabindingfailed
tags: ondatabindingfailed
published: True
position: 28
---

# OnDataBindingFailed



## 

Telerik.Web.UI.OnDataBindingFailed Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event will be raised when the grid fails to bind to data client-side (after the [OnDataBinding]({%slug grid/client-side-programming/events/events/ondatabinding%}) and before the [OnDataBound]({%slug grid/client-side-programming/events/events/ondatabound%}) client events). Can be used to get message or the stack trace/exception type of the generated error when the client-side binding fails.

>note Meaningful with declarative client-side data-binding only!
>



|  **Fired by**  | GridTableView |
| ------ | ------ |
| **Arguments** | **message** - the exception message **exceptionType** - the type of the generated exception **stackTrace** - the stack trace of the generated exception|
| **Can be canceled** |No|

Example:

````ASP.NET
	    <telerik:RadGrid ID="RadGrid1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnDataBindingFailed="RadGrid1_DataBindingFailed" />
	        </ClientSettings>
	    </telerik:RadGrid>
````



````JavaScript
	        function RadGrid1_DataBindingFailed(sender, eventArgs)
	        {
	            var sb = new Sys.StringBuilder();
	            sb.appendLine("<b>RadGrid1_DataBindingFailed. Reason:</b><br />");
	            sb.appendLine(String.format("{0} : {1} : {2}", eventArgs.get_message(), eventArgs.get_stackTrace(), eventArgs.get_exceptionType()); 
	            alert(sb.toString());
	        }
````


