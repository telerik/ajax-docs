---
title: OnColumnSwapping
page_title: OnColumnSwapping | RadGrid for ASP.NET AJAX Documentation
description: OnColumnSwapping
slug: grid/client-side-programming/events/oncolumnswapping
tags: oncolumnswapping
published: True
position: 24
---

# OnColumnSwapping



## 

Sys.EventArgs OnColumnSwapping Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before two columns are swapped.


|  **Fired by**  | RadGridTable |
| ------ | ------ |
| **Arguments** |gridSourceColumn - returns reference to the source columngridTargetColumn - returns reference to the target column|
| **Can be canceled** |Yes, set eventArgs.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnSwapping="ColumnSwapping" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnSwapping(sender, eventArgs) {
    alert("Swapping columns with indices: " + eventArgs.get_gridSourceColumn().get_element().cellIndex + " and " + eventArgs.get_gridTargetColumn().get_element().cellIndex);
}
//OR
function ColumnSwapping(sender, eventArgs) {
    eventArgs.set_cancel(true) //cancel event
}
````


