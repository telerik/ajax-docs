---
title: OnDataSourceResolved
page_title: OnDataSourceResolved | RadGrid for ASP.NET AJAX Documentation
description: OnDataSourceResolved
slug: grid/client-side-programming/events/ondatasourceresolved
tags: ondatasourceresolved
published: True
position: 30
---

# OnDataSourceResolved



## 

Telerik.Web.UI.OnDataSourceResolved Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event will be raised when the grid source is retrieved from a page method or a web service and before it is processed by the internal RadGrid's data binding logic. Can be used to modify the source or include additional data prior to the grid client binding.

>note Meaningful with declarative client-side data-binding only!
>



|  **Fired by**  | GridTableView |
| ------ | ------ |
| **Arguments** | **data** - the data retrieved from the page method or web service (getter and setter available)|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnDataSourceResolved="RadGrid1_DataSourceResolved" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function RadGrid1_DataSourceResolved(sender, eventArgs)
{
    var gridData = eventArgs.get_data();
    //perform some custom actions prior to the binding being processed
    eventArgs.set_data(gridData);     
}
````


