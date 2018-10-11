---
title: OnDataBound
page_title: OnDataBound | RadGrid for ASP.NET AJAX Documentation
description: OnDataBound
slug: grid/client-side-programming/events/ondatabound
tags: ondatabound
published: True
position: 29
---

# OnDataBound



## 

Telerik.Web.UI.OnDataBound Property

>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event will be raised right after the grid is bound to data client-side.

>tip Meaningful with client-side data-binding only!
>



|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **N/A** - dom event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnDataBound="RadGrid1_DataBound" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function RadGrid1_DataBound(sender, args) {
    alert("Grid with id: " + sender.get_element().id + " bound on the client");
}
````


