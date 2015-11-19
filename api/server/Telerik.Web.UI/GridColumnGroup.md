---
title: Telerik.Web.UI.GridColumnGroup
page_title: Telerik.Web.UI.GridColumnGroup
description: Telerik.Web.UI.GridColumnGroup
---

# Telerik.Web.UI.GridColumnGroup

The main class representing MultiColumn Headers in Telerik.Web.UI.RadGrid . 
            A Grid column group can contain grid columns as well as other Column 
            groups which form the hierarchical structure of the MultiColumn Headers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.GridColumnGroup : IComparable, IDisposable

## Properties

###  HeaderText `String`

Sets the displayed text in the header

###  Name `String`

Sets the name of the column group

###  ParentGroupName `String`

Sets the parent group name of the column group

###  HeaderStyle `TableItemStyle`

Style of the column group cell.

###  Columns `List`1`

For internal use. Holds a collection of the columns belonging to the group

###  ColSpan `Int32`

Gets the colSpan of the multiheader cell. Read only.

###  OrderIndex `Int32`

For internal use. Gets or sets the order index of the multiheader cell

###  Visible `Boolean`

Gets the visiblility of the multiheader cell. Read only.

###  Display `Boolean`

For internal use. Gets or sets the display of the multiheader cell.

###  ChildGroups `List`1`

For internal use. Holds a collection of the child groups of the current group

## Methods

###  CompareTo

Compares the current instance with another object of the same type and
            returns an integer that indicates whether the current instance precedes, follows,
            or occurs in the same position in the sort order as the other object.

#### Parameters

#### obj `System.Object`

An object to compare with this instance.

#### Returns

`System.Int32` A 32-bit signed integer that indicates the relative order of the objects
            being compared. The return value has these meanings: Value Meaning Less than
            zero This instance precedes  in the sort order. Zero This
            instance occurs in the same position in the sort order as .
            Greater than zero This instance follows  in the sort order.

###  Dispose

Performs application-defined tasks associated with freeing, releasing,
            or resetting unmanaged resources.

#### Returns

`System.Void` 

