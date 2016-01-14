---
title: Telerik.Web.UI.GridDropDownColumnEditor
page_title: Telerik.Web.UI.GridDropDownColumnEditor
description: Telerik.Web.UI.GridDropDownColumnEditor
---

# Telerik.Web.UI.GridDropDownColumnEditor

Summary description for GridDropDownColumnEditor.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.GridColumnEditorBase : IGridColumnEditor
* Telerik.Web.UI.GridDropDownColumnEditor

## Properties

###  ContainerControl `Control`

Gets the instance of the Container control (generally a TableCell), after the last call of InstantiateInControl method

###  DataMember `String`

Gets or sets the DataMember property of the drop down list control.

###  DataSource `Object`

Gets or sets the DataSource property of the drop down list control.

###  DataTextField `String`

Gets or sets the DataTextField property of the drop down list control.

###  DataTextFormatString `String`

Gets or sets the DataTextFormatString property of the drop down list control.

###  DataValueField `String`

Gets or sets the DataValueField property of the drop down list control.

###  IsInEditMode `Boolean`

Get a value indicating whether the current row/column editor is in edit mode.

###  IsInitialized `Boolean`

Get value if the editor has been initialized after an InitializeInControl or InitializeFromControl method call

###  SelectedIndex `Int32`

Gets or sets the selected index of the drop down list control.

###  SelectedText `String`

Gets or sets the selected text of the drop down list control.

###  SelectedValue `String`

Gets or sets the selected value of the drop down list control.

## Methods

###  AddControlsToContainer

Implement this member to create the edit controls in the grid cell.
            This method is called from each column's InitializeCell method, when a  initializes its cells.

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

###  LoadControlsFromContainer

This method should recrteate the state of the column editor (edit controls, etc) from the container.
            This method is called when  method is called, or when
            GridEditableItem.EditManager.GetColumnEditor is called.

#### Remarks
This method is should prepare the column editor to extract values from the edit controls residign in a TableCell of the grid.

#### Returns

`System.Void` 

