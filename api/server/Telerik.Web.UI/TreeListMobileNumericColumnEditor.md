---
title: Telerik.Web.UI.TreeListMobileNumericColumnEditor
page_title: Telerik.Web.UI.TreeListMobileNumericColumnEditor
description: Telerik.Web.UI.TreeListMobileNumericColumnEditor
---

# Telerik.Web.UI.TreeListMobileNumericColumnEditor

The editor for the Telerik.Web.UI.GridNumericColumn when grid's RenderMode is set to Mobile.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.TreeListColumnEditor
* Telerik.Web.UI.TreeListMobileColumnEditorBase
* Telerik.Web.UI.TreeListMobileNumericColumnEditor

## Properties

###  MobileEditor `TextBox`

Gets a reference to the RadNumericTextBox created by the editor.

###  Column `TreeListEditableColumn`

Gets the column for which the column editor is created.

## Methods

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

Initializes the TreeListNumericColumnEditor object.

#### Parameters

#### editItem `Telerik.Web.UI.TreeListEditableItem`

The TreeListEditableItem which will hold the current editor.

#### container `System.Web.UI.Control`

The Control where the editor controls will be added.

#### Returns

`System.Void` 

###  SetValues

Sets the edit values to the edit control.

#### Parameters

#### values `System.Collections.IEnumerable`

An enumerable collection containing the edit values.

#### Returns

`System.Void` 

###  GetValues

Returns a collection of the edit values contained in the editor.

#### Returns

`System.Collections.IEnumerable` An enumerable object holding the values.

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

