---
title: OnGridCreating
page_title: OnGridCreating | RadGrid for ASP.NET AJAX Documentation
description: OnGridCreating
slug: grid/client-side-programming/events/ongridcreating
tags: ongridcreating
published: True
position: 32
---

# OnGridCreating



## 

Sys.EventArgs OnGridCreating Property

>tip To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](http://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired before grid creation.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGridCreating="GridCreating" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function GridCreating(sender, eventArgs) {
    alert("Creating grid with ClientID: " + sender.get_id());
}
````


