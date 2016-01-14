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

###  ColSpan `Int32`

Gets the colSpan of the multiheader cell. Read only.

###  HeaderStyle `TableItemStyle`

Style of the column group cell.

###  HeaderText `String`

Sets the displayed text in the header

###  Name `String`

Sets the name of the column group

###  ParentGroupName `String`

Sets the parent group name of the column group

###  Visible `Boolean`

Gets the visiblility of the multiheader cell. Read only.

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

