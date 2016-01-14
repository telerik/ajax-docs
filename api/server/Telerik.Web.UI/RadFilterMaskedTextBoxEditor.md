---
title: Telerik.Web.UI.RadFilterMaskedTextBoxEditor
page_title: Telerik.Web.UI.RadFilterMaskedTextBoxEditor
description: Telerik.Web.UI.RadFilterMaskedTextBoxEditor
---

# Telerik.Web.UI.RadFilterMaskedTextBoxEditor

Represents an editor for filtering values using a Telerik.Web.UI.RadMaskedTextBox control.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadFilterDataFieldEditor
* Telerik.Web.UI.RadFilterMaskedTextBoxEditor

## Properties

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the Field.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

###  DefaultFilterFunction `RadFilterFunction`

Gets or sets the default filter function that will be set to the editor item
            when it is first created.

###  DisplayMask `String`

Gets or sets the DisplayMask property of the  control.

###  DisplayName `String`

Gets or sets DisplayName for the editor.

###  DisplayPromptChar `String`

Gets or sets the DisplayPromptChar property of the  control.

###  FieldName `String`

Gets or sets FieldName for the editor.

###  Mask `String`

Gets or sets the Mask property of the  control.

###  Owner `RadFilter`

Keeps reference to the owner RadFilter control.

###  PreviewDataFormat `String`

Gets or sets PreviewDataFormat for the editor. This property will be used
                to format the value per editor when ExpressionPreviewPosition is different than RadFilterExpressionPreviewPosition.None

###  PromptChar `String`

Gets or sets the PromptChar property of the  control.

###  ToolTip `String`

Gets or sets the ToolTip property of the editor control.

## Methods

###  ExtractValues

Extracts an ArrayList with the values from the editor.

#### Returns

`System.Collections.ArrayList` An ArrayList holding the editor values.

###  InitializeEditor

Initializes the control rendered by the field editor.

#### Parameters

#### container `System.Web.UI.Control`

The container Control where the editor control will be added.

#### Returns

`System.Void` 

###  SetEditorValues

Populates the field editor using the first values from the passed ArrayList.

#### Parameters

#### values `System.Collections.ArrayList`

An ArrayList holding a boolean value.

#### Returns

`System.Void` 

