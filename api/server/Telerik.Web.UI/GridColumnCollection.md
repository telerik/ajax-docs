---
title: Telerik.Web.UI.GridColumnCollection
page_title: Telerik.Web.UI.GridColumnCollection
description: Telerik.Web.UI.GridColumnCollection
---

# Telerik.Web.UI.GridColumnCollection

The collection of columns of RadGrid or its tables. Accessible through
            Columnsproperty of RadGrid and GridTableView (MasterTableView)
            classes.

#### Remarks
Its items are of the available Grid
            grdColumnTypes.html column
            types.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridColumnCollection

## Properties

###  IsFixedSize `Boolean`

Gets a value indicating whether the collection
            has a fixed size.

###  Count `Int32`

Gets the number of columns added programmatically or declaratively.

#### Remarks
Note that this is not the actual number of column in a
                . See also

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection
            is read-only.

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the collection
            is synchronized (thread safe).

###  Item `GridColumn`

#### Remarks
If the column/detail table structure is created after the control has been
            initialized (indicated by RadGrid.Init event ) the state of the
            columns/detail tables may have been lost. This happens when properties have been set to
            GridColumn/GridTableView instance before it has been
            added to the corresponding collection of
            Columns/DetailTables. Then a
            GridException is thrown with message: "Failed accessing
            GridColumn by index. Please verify that you have specified the structure of RadGrid
            correctly."

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the collection.

## Methods

###  Add

Adds a column object to the GridColumnCollection.

#### Parameters

#### column `Telerik.Web.UI.GridColumn`

The GridColumn object to add to the collection.

#### Returns

`System.Void` 

###  Add

Adds an item to the collection.

#### Returns

`System.Void` The position into which the new element was inserted.

###  Contains

Determines whether the CridColumnCollection contains the value specified
            by the given GridColumn object.

#### Parameters

#### Val `System.Object`

GridColumn object to locate in the GridColumnCollection.

#### Returns

`System.Boolean` true if the GridColumn is found in the
            GridColumnCollection; otherwise, false.

###  IndexOf

Determines the index of a specific column in the
            GridColumnCollection.

#### Parameters

#### Val `System.Object`

The object to locate in the GridColumnCollection.

#### Returns

`System.Int32` The index of value if found in the collection;
            otherwise, -1.

###  Insert

Inserts a column to the GridColumnCollectino at the specified
            index.

#### Parameters

#### Index `System.Int32`

The zero-based index at which column should be
            inserted.

#### Val `System.Object`

The  to insert into the collection.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of an object from the
            GridColumnCollection.

#### Parameters

#### Val `System.Object`

The object to remove from the collection.

#### Returns

`System.Void` 

###  AddAt

Adds a column in the collection at the specified index.

#### Parameters

#### index `System.Int32`

The index where the column will be inserted.

#### column `Telerik.Web.UI.GridColumn`

The column that will be inserted.

#### Returns

`System.Void` 

###  Clear

Removes all column from the collection.

#### Returns

`System.Void` 

###  CopyTo

Copies the columns of the collection
            to an , starting at a particular 
            index.

#### Parameters

#### array `System.Array`

The one-dimensional  that is
            the destination of the elements copied from .
            The  must have zero-based indexing.

#### index `System.Int32`

The zero-based index in  at which
            copying begins.

#### Returns

`System.Void` 

###  GetEnumerator

Returns an enumerator that iterates through a collection.

#### Returns

`System.Collections.IEnumerator` An  object that can be
            used to iterate through the collection.

###  IndexOf

Determines the index of a specific column in the
            GridColumnCollection.

#### Parameters

#### column `Telerik.Web.UI.GridColumn`

The  to locate in the
                GridColumnCollection.

#### Returns

`System.Int32` The index of value if found in the collection;
            otherwise, -1.

###  Remove

Removes the first occurrence of a column from the
            GridColumnCollection.

#### Parameters

#### column `Telerik.Web.UI.GridColumn`

The column to remove from the collection.

#### Returns

`System.Void` 

###  RemoveAt

Removes the GridColumnCollection item at the specified
            index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item(column) to remove.

#### Returns

`System.Void` 

###  FindByUniqueName

Gets the first column with UniqueName found. Throws GridException if no column is found.

#### Parameters

#### UniqueName `System.String`

#### Returns

`Telerik.Web.UI.GridColumn` 

###  FindByUniqueNameSafe

Gets the first column with UniqueName found. Returns null if no column is found.

#### Parameters

#### UniqueName `System.String`

#### Returns

`Telerik.Web.UI.GridColumn` 

###  FindByDataField

Gets the first column found bound to the DataField. Throws GridException if no column is bound to this DataField

#### Parameters

#### DataField `System.String`

#### Returns

`Telerik.Web.UI.GridColumn` 

###  FindByDataFieldSafe

Gets the first column found bound to the DataField. Returns null is no column is bound to this DataField

#### Parameters

#### DataField `System.String`

#### Returns

`Telerik.Web.UI.GridColumn` 

###  FindAllByDataField

Gets all columns found bound to the DataField specified. Returns null is no column is bound to this DataField

#### Parameters

#### DataField `System.String`

#### Returns

`Telerik.Web.UI.GridColumn[]` 

