---
title: Recursive Selection
page_title: Recursive Selection | RadTreeList for ASP.NET AJAX Documentation
description: Recursive Selection
slug: treelist/functionality/selecting/recursive-selection
tags: recursive,selection
published: True
position: 2
---

# Recursive Selection

As part of its server-side selection **RadTreeList** gives you the ability toselect items recursively. To enable the RadTreeList recursive selection, set the **AllowRecursiveSelection** property to true.

>note When AllowRecursiveSelection is set to true, this implicitly enables multi-item selection for the RadTreeList.
>


To select an item/items, you can either use the TreeListSelectColumn or set the Selected propertyof the item/items to true (see [this article]({%slug treelist/functionality/selecting/server-side-selection%})).

When recursive selection is enabled for the RadTreeList and you select an item, its all nested itemsare selected, no matter on which nested level they are on (visible or not). Also, if selecting an item makesall items on the same level selected, their parent item will be marked as selected as well. The opposite istrue as well, deselecting item from a nested level will invoke deselecting of its parent item in case it ispreviously selected.

However, for the recursive selection to work and all items' state to be updated properly, a postback isrequired. Thus if client-side selection is enabled, it is automatically turned off. Also when items areselected/deselected, an implicit rebind is invoked for the RadTreeList control.

To deselect all items, you can call the **ClearSelectedItems()** method of theRadTreeList. As a result all selected items will be deselected, be they on the current page or not, visible or not.

>note Note that, if you want to traverse the RadTreeList items in a foreach loop and change their selectedstate in the loop while recursive selection is enabled, you need to rebind the RadTreeList first.
>

>note When recursive selection is enabled (`AllowRecursiveSelection="true"`), [client selection]({%slug treelist/functionality/selecting/client-side-selection%}) is disabled and selection is done on the server with a .Rebind(). This can result in loss of user input because of the rebind operation, so you may want to implement the recursive selection on the client as shown in the following code library sample [Recursive selection on the client when paging is disabled](https://www.telerik.com/support/code-library/recursive-selection-on-the-client-when-paging-is-disabled).

