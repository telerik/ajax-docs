---
title: Telerik.Web.UI.TreeListNumericColumnEditor
page_title: Telerik.Web.UI.TreeListNumericColumnEditor
description: Telerik.Web.UI.TreeListNumericColumnEditor
---

# Telerik.Web.UI.TreeListNumericColumnEditor

Represents the default column editor for the Telerik.Web.UI.TreeListNumericColumn .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.TreeListColumnEditor : ITreeListColumnEditor
* Telerik.Web.UI.TreeListNumericColumnEditor

## Properties

###  Column `TreeListEditableColumn`

Gets the column for which the column editor is created.

###  NumericTextBoxControl `RadNumericTextBox`

Gets a reference to the RadNumericTextBox created by the editor.

## Methods

###  GetFirstValue

Get the first value from the values of the current .
            This method returns the first item from , if any.

#### Returns

`System.Object` 

###  GetFirstValueFromEnumerable

Returns the first value from an object implementing IEnumerable, passed as argument.
            If the collection is empty, returns null.

#### Parameters

#### enumerable `System.Collections.IEnumerable`

An instance of a class that implements IEnumerable.

#### Returns

`System.Object` The first value form the enumerable collection.

###  GetValues

Returns a collection of the edit values contained in the editor.

#### Returns

`System.Collections.IEnumerable` An enumerable object holding the values.

###  GetValues

Returns a collection of the values in the editor control.

#### Returns

`System.Collections.IEnumerable` 

###  Initialize

Initializes the TreeListNumericColumnEditor object.

#### Parameters

#### editItem `Telerik.Web.UI.TreeListEditableItem`

The TreeListEditableItem which will hold the current editor.

#### container `System.Web.UI.Control`

The Control where the editor controls will be added.

#### Returns

`System.Void` 

###  Initialize

Initializes the column editor for the TreeListColumn.

#### Parameters

#### editItem `Telerik.Web.UI.TreeListEditableItem`

The  which will hold the edit control.

#### container `System.Web.UI.Control`

The container control to which the editor will be added.

#### Returns

`System.Void` 

###  SetValues

Sets the edit values to the edit control.

#### Parameters

#### values `System.Collections.IEnumerable`

An enumerable collection containing the edit values.

#### Returns

`System.Void` 

###  SetValues

Sets the edit values in the column editor.

#### Parameters

#### values `System.Collections.IEnumerable`

A collection of the values which will be used to populate the editor control.

#### Returns

`System.Void` 

