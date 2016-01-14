---
title: Telerik.Web.UI.GridCheckBoxColumnEditor
page_title: Telerik.Web.UI.GridCheckBoxColumnEditor
description: Telerik.Web.UI.GridCheckBoxColumnEditor
---

# Telerik.Web.UI.GridCheckBoxColumnEditor

The editor for the Telerik.Web.UI.GridCheckBoxColumn .

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.GridColumnEditorBase : IGridColumnEditor
* Telerik.Web.UI.GridBoolColumnEditor
* Telerik.Web.UI.GridCheckBoxColumnEditor

## Properties

###  CheckBoxControl `CheckBox`

Provides a reference to the control in the corresponding grid cell of the current
            GridCheckBoxColumn.

###  CheckBoxStyle `Style`

Gets or sets the style defining the appearance of the corresponding
            check-box.

###  ContainerControl `Control`

Gets the instance of the Container control (generally a TableCell), after the last call of InstantiateInControl method

###  IsInEditMode `Boolean`

Get a value indicating whether the current row/column editor is in edit mode.

###  IsInitialized `Boolean`

Get value if the editor has been initialized after an InitializeInControl or InitializeFromControl method call

###  ToolTip `String`

The ToolTip that will be applied to the  control.

###  Value `Boolean`

Gets or sets the value for each cell in a
            GridCheckBoxColumn.

###  Value `Boolean`

Gets or sets the value for each cell in a
            GridCheckBoxColumn.

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

