---
title: Telerik.Web.UI.TreeListDateTimeColumnEditor
page_title: Telerik.Web.UI.TreeListDateTimeColumnEditor
description: Telerik.Web.UI.TreeListDateTimeColumnEditor
---

# Telerik.Web.UI.TreeListDateTimeColumnEditor

Represents an editor for DateTime values, used as the default editor for the TreeListDateTimeColumn.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.TreeListColumnEditor : ITreeListColumnEditor
* Telerik.Web.UI.TreeListDateTimeColumnEditor

## Properties

###  Column `TreeListEditableColumn`

Gets the column for which the column editor is created.

###  DateInputControl `RadDateInput`

Gets a reference to the RadDateInput control used for editing the column.

###  DatePickerControl `RadDatePicker`

Gets a reference to the RadDatePicker control used for editing the column.

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

Initializes the editor control.

#### Parameters

#### editItem `Telerik.Web.UI.TreeListEditableItem`

The TreeListEditableItem where the editor will be added.

#### container `System.Web.UI.Control`

The container Control to which Controls collection the editor control will be added.

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

