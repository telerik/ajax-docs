---
title: Expand/Collapse Items
page_title: Expand/Collapse Items | RadTreeList for ASP.NET AJAX Documentation
description: Expand/Collapse Items
slug: treelist/items/expand-collapse-items
tags: expand,collapse,items
published: True
position: 4
---

# Expand/Collapse Items



The **RadTreeList** control supports different modes for expanding and collapsing items. There are three available modes - on the server, on the client, or a mix of the first two. The feature is supported with all databinding modes of **RadTreeList**.



## Configuring expand/collapse mode

In order to enable the feature you need to set the **ExpandCollapseMode** property of **RadTreeList**. You can use one of the following options:

* **Server** - Items are Expanded/Collapsed on the server. *This is the default setting.*

* **Client** - All items are loaded on the client. Expanding and collapsing is done on the client. 

* **Combined** - Only expanded items are loaded. By default the items are collapsed. Postback is performed only when an item is expanded for the first time. Any subsequent expand/collapse of this item is performed on the client side.   


````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="RadTreeList1"
	ExpandCollapseMode="Client">
</telerik:RadTreeList>
````


## Server-side API


| Name | Type | Description |
| ------ | ------ | ------ |
| **ClientExpandedIndexes** | property |Collection containing the **TreeListHierarchyIndexes** of the items that are expanded on the client-side. The collection is serialized back and forth to the client.|


>caution Modifying **ClientExpandedIndexes** can cause unexpected behavior. It is recommended not to modify the collection. Nevertheless, if you need to modify it you should execute caution. 
>



>note Have in mind that the **ClientExpandedIndexes** should be used when expand/collapse is performed on the client. If expand/collapse is done server-side you should use the **ExpandedIndexes** property.
>

## Client-side API

Below is a list of the properties and methods that can be used with the expand/collapse functionality.

| Name | Type | Description |
| ------ | ------ | ------ |
| **get_clientExpanded** | property | Returns boolean value indicating if an item is expanded. |
| **set_clientExpanded(value)** | property | Sets the expanded state of an item. Note that *changing the state of an item will not expand or collapse it*. |
| **toggleExpandCollapse** | method | Toggles the state of an item. |


## Item state persistance

The expanded/collapsed state of the items is persisted after postback by default.


# See Also

 * [TreeList Object]({%slug treelist/client-side-programming/treelist-object%})
 
 * [TreeList DataItem Object]({%slug treelist/client-side-programming/treelistdataitem-object%})


