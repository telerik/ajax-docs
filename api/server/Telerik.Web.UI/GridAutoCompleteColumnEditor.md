---
title: Telerik.Web.UI.GridAutoCompleteColumnEditor
page_title: Telerik.Web.UI.GridAutoCompleteColumnEditor
description: Telerik.Web.UI.GridAutoCompleteColumnEditor
---

# Telerik.Web.UI.GridAutoCompleteColumnEditor

The editor for the Telerik.Web.UI.GridAutoCompleteColumn column.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.GridColumnEditorBase : IGridColumnEditor
* Telerik.Web.UI.GridAutoCompleteColumnEditor

## Properties

###  IsInitialized `Boolean`

Get value if the editor has been initialized after an InitializeInControl or InitializeFromControl method call

###  Text `String`

Gets or sets the text of the AutoCompleteBox control.

###  DataSource `Object`

Gets or sets the DataSource property of the AutoCompleteBox control.

###  AutoCompleteBox `RadAutoCompleteBox`

Gets the  instance for the current column editor.

###  InputType `RadAutoCompleteInputType`

Gets or sets a value indicating how the RadAutoCompleteBox items should be displayed - as tokens or as text.

###  Filter `RadAutoCompleteFilter`

Gets or sets a value indicating whether the RadAutoCompleteBox should apply “Contains” or “StartsWith” filter logic.

###  AllowCustomEntry `Boolean`

Gets or sets a value indicating whether the user will be able to add a custom text not present 
            within the raw data in order to create a custom entry.

###  SelectionMode `RadAutoCompleteSelectionMode`

Gets a value indicating whether the user can select multiple entries.

###  AllowTokenEditing `Boolean`

Gets a value indicating whether the text of the RadAutoComplete Tokens can be edited when user double clicks on it.

###  Delimiter `String`

Gets or sets a value indicating what delimiter should be used when the control displays the selected items as text (InputType = Text)

###  DataTextField `String`

Gets or sets the DataTextField.

###  DataValueField `String`

Gets or sets the DataValueField.

###  ContainerControl `Control`

Gets the instance of the Container control (generally a TableCell), after the last call of InstantiateInControl method

###  IsInitialized `Boolean`

Get value if the editor has been initialized after an InitializeInControl or InitializeFromControl method call

###  IsInEditMode `Boolean`

Get a value indicating whether the current row/column editor is in edit mode.

## Methods

###  SetOwner

#### Returns

`System.Void` 

###  DataBind

#### Returns

`System.Void` 

###  SetOwner

#### Returns

`System.Void` 

###  InitializeInControl

#### Returns

`System.Void` 

###  InitializeFromControl

#### Returns

`System.Void` 

###  CopySettingsFrom

Copy setting from given column editor

#### Parameters

#### editor `Telerik.Web.UI.IGridColumnEditor`

#### Returns

`System.Void` 

###  CreateControls

Create the input/edit controls belonging to the editor and prepare for AddControlsToContainer call.

#### Returns

`System.Void` 

###  AddControlsToContainer

Implement this member to create the edit controls in the grid cell.
            This method is called from each column's InitializeCell method, when a  initializes its cells.

#### Returns

`System.Void` 

###  LoadControlsFromContainer

This method should recrteate the state of the column editor (edit controls, etc) from the container.
            This method is called when  method is called, or when
            GridEditableItem.EditManager.GetColumnEditor is called.

#### Remarks
This method is should prepare the column editor to extract values from the edit controls residign in a TableCell of the grid.

#### Returns

`System.Void` 

