---
title: RadBreadcrumb object
page_title: RadBreadcrumb object | RadBreadcrumb for ASP.NET AJAX Documentation
description: RadBreadcrumb object
slug: breadcrumb/client-side-programming/radbreadcrumb-object
tags: radbreadcrumb,object
published: True
position: 0
---

# RadBreadcrumb object

This article lists the client-side API of **RadBreadcrumb** and shows how to use it.

To use the API, you must first [get a reference to the control's client-side object]({%slug general-information/get-client-side-reference%}). For example:

````JavaScript
var breadcrumbObject = $find("<%=RadBreadcrumb1.ClientID %>");
````

RadBreadcrumb is a server-side wrapper over the Kendo UI Breadcrumb Widget. Thus, it exposes [the API of the underlying Kendo widget](https://docs.telerik.com/kendo-ui/api/javascript/ui/breadcrumb). To get a reference to the Kendo widget instance, you can do either of the following:

* Use the `get_kendoWidget()` method of the MS AJAX wrapper:

````JavaScript
var breadcrumbObject  = $find("<%=RadBreadcrumb1.ClientID %>"); //the standard script control object
var kendoBreadcrumb = breadcrumbObject.get_kendoWidget(); //the Kendo widget
````

* Get the Kendo Widget in its usual way. Make sure to use the `$telerik.$` jQuery reference:

````JavaScript
var kendoBreadcrumb = $telerik.$("#<%=RadBreadcrumb1.ClientID %>").data("kendoBreadcrumb"); 
````

In addition to using the Kendo methods directly, you can also use their wrappers that follow the MS AJAX convention through the RadBreadcrumb client object.

>caption Table1: Client-side methods exposed by the MS AJAX RadBreadcrumb object

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **dispose** |none|none|Destroys the underlying Kendo widget (calls its [destroy](https://docs.telerik.com/kendo-ui/api/javascript/ui/breadcrumb/methods/destroy) method). Once you call it, you will not be able to use the widget or control.|
| **get_items** |none|Array|Returns the collection of breadcrumb items. |
| **get_value** |none|String|Returns the value of the breadcrumb|
| **set_value** |String|none|Sets the value of the breadcrumb|
| **repaint** |Boolean|none| Repaints the control. The "force" argument determines whether the resizing routine should be executed even if the respective widget's outer dimensions have not changed.|



# See Also

 * [Live Demo - RadBreadcrumb Client-side API]()

 * [RadBreadcrumb Client-side Events]({%slug breadcrumb/client-side-programming/events%})


