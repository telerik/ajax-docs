---
title: OnGridDestroying
page_title: OnGridDestroying - RadGrid
description: Check our Web Forms article about OnGridDestroying.
slug: grid/client-side-programming/events/ongriddestroying
tags: ongriddestroying
published: True
position: 34
---

# OnGridDestroying



## 

Sys.EventArgs OnGridDestroying Property

>note To get or set property values for client API properties, you must call property accessor methods that are named with the get_ and set_ prefixes. For example, to get or set a value for a property such as [cancel](https://msdn.microsoft.com/en-us/library/bb310859.aspx), you call the get_cancel or set_cancel.
>


This event is fired when RadGrid object is destroyed, i.e. on each *window.onunload*


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** |N/A|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <ClientSettings>
        <ClientEvents OnGridDestroying="GridDestroying" />
    </ClientSettings>
</telerik:RadGrid>
````

````JavaScript
function GridDestroying(sender, eventArgs) {
    alert("Destroying grid with ClientID: " + sender.get_id());
}
````


