---
title: Telerik.Web.UI.TreeListCheckBoxColumnEditor
page_title: Telerik.Web.UI.TreeListCheckBoxColumnEditor
description: Telerik.Web.UI.TreeListCheckBoxColumnEditor
---

# Telerik.Web.UI.TreeListCheckBoxColumnEditor

Represents the default editor for the Telerik.Web.UI.TreeListCheckBoxColumn

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.TreeListColumnEditor
* Telerik.Web.UI.TreeListCheckBoxColumnEditor

## Properties

###  CheckBoxControl `CheckBox`

Gets a reference to the CheckBox created for the editor.

###  Column `TreeListEditableColumn`

Gets the column for which the column editor is created.

## Methods

###  Initialize

Initializes the TreeListCheckBoxColumn editor.

#### Parameters

#### editItem `Telerik.Web.UI.TreeListEditableItem`

The  which will hold the edit control.

#### container `System.Web.UI.Control`

The container control to which the editor will be added.

#### Returns

`System.Void` 

###  SetValues

Sets the Checked state of the CheckBox editor.

#### Parameters

#### values `System.Collections.IEnumerable`

An object containing the value to be assigned to the CheckBox editor.

#### Returns

`System.Void` 

###  GetValues

Gets the value of the CheckBox column editor.

#### Returns

`System.Collections.IEnumerable` A boolean value indicating the checked state of the CheckBox editor.

###  GetFirstValueFromEnumerable

Returns the first value from an object implementing IEnumerable, passed as argument. 
            If the collection is empty, returns null.

#### Parameters

#### enumerable `System.Collections.IEnumerable`

An instance of a class that implements IEnumerable.

#### Returns

`System.Object` The first value form the enumerable collection.

###  GetFirstValue

Get the first value from the values of the current .
            This method returns the first item from , if any.

#### Returns

`System.Object` 

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

Sets the edit values in the column editor.

#### Parameters

#### values `System.Collections.IEnumerable`

A collection of the values which will be used to populate the editor control.

#### Returns

`System.Void` 

###  GetValues

Returns a collection of the values in the editor control.

#### Returns

`System.Collections.IEnumerable` 

