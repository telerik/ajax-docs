---
title: OnColumnShown
page_title: OnColumnShown | RadGrid for ASP.NET AJAX Documentation
description: OnColumnShown
slug: grid/client-side-programming/events/oncolumnshown
tags: oncolumnshown
published: True
position: 23
---

# OnColumnShown



## 

Telerik.Web.UI.GridColumnEventArgs OnColumnShowed Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after a column is shown.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **gridColumn** - returns a reference to the clicked [GridColumn]({%slug grid/client-side-programming/gridcolumn-object/gridcolumn-class-members%}) object **domEvent** - returns the DOM event that was raised for the current event|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnShown="ColumnShown" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnShown(sender, eventArgs) {
    alert("Column: " + eventArgs.get_gridColumn().get_element().cellIndex + " was shown");
}
````


