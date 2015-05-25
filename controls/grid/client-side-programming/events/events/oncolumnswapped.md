---
title: OnColumnSwapped
page_title: OnColumnSwapped | RadGrid for ASP.NET AJAX Documentation
description: OnColumnSwapped
slug: grid/client-side-programming/events/events/oncolumnswapped
tags: oncolumnswapped
published: True
position: 25
---

# OnColumnSwapped



## 

Sys.EventArgs OnColumnSwapped Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as[cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired after two columns are swapped.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |gridSourceColumn - returns reference to the source columngridTargetColumn - returns reference to the target column|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnColumnSwapped="ColumnSwapped" />
    </ClientSettings>
</telerik:RadGrid>
````



````JavaScript
function ColumnSwapped(sender, eventArgs) {
    alert("Columns with indices " + eventArgs.get_gridSourceColumn().get_element().cellIndex + " and " + eventArgs.get_gridTargetColumn().get_element().cellIndex + " were swapped");
}
````


