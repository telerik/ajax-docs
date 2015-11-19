---
title: Telerik.Web.UI.ExportInfrastructure.CellCollection
page_title: Telerik.Web.UI.ExportInfrastructure.CellCollection
description: Telerik.Web.UI.ExportInfrastructure.CellCollection
---

# Telerik.Web.UI.ExportInfrastructure.CellCollection

EI Cell Collection

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ExportInfrastructure.CellCollection : IEnumerable, IEnumerable`1

## Properties

###  Table `Table`

Provides a reference to the parent Table element

###  Count `Int32`

Returns the total number of populated cells

###  Item `Cell`

Gets/Sets a cell object by given column and row. If no such cell exists, it will be created automatically.

###  Item `Cell`

Gets/Sets a cell object by given Excel-style index. If no such cell exists, it will be created automatically.

###  Item `Cell`

Gets/Sets a cell object by given Point value. If no such cell exists, it will be created automatically.

## Methods

###  GetEnumerator

Method to get the generic enumerator of the collection

#### Returns

`System.Collections.Generic.IEnumerator`1` 

###  System.Collections.IEnumerable.GetEnumerator

Method to get the enumerator of the collection

#### Returns

`System.Collections.IEnumerator` 

###  ChangeCellIndex

Changing the cell index of an existing cell is not supported publicly because this requires changing

#### Parameters

#### cell `Telerik.Web.UI.ExportInfrastructure.Cell`

#### newIndex `System.Drawing.Point`

#### Returns

`System.Void` 

