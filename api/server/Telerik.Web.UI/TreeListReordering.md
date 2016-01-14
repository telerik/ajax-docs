---
title: Telerik.Web.UI.TreeListReordering
page_title: Telerik.Web.UI.TreeListReordering
description: Telerik.Web.UI.TreeListReordering
---

# Telerik.Web.UI.TreeListReordering

Contains settings for TreeList resizing.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListReordering

## Properties

###  AllowColumnsReorder `Boolean`

Gets or sets a value indicating whether column reodering is allowed.

###  ColumnsReorderMethod `TreeListColumnsReorderMethod`

Gets or sets a value indicating the method that will be used when reordering columns: Swap or Reorder

###  ReorderColumnsOnClient `Boolean`

Gets or sets a value indicating whether columns will be reordered on the client.
                This property is meaningful when used in conjunction with
                 set to true.

#### Remarks
False by default, which means that each time you try to reorder columns a
                postback will be performed.Note that in case this property is true the order changes will be persisted
                on the server only after postback.

