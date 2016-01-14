---
title: Telerik.Web.UI.RadFilterDataFieldEditor
page_title: Telerik.Web.UI.RadFilterDataFieldEditor
description: Telerik.Web.UI.RadFilterDataFieldEditor
---

# Telerik.Web.UI.RadFilterDataFieldEditor

Represents the base class for all field editors in Telerik.Web.UI.RadFilter .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.RadFilterDataFieldEditor

## Properties

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the Field.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

###  DefaultFilterFunction `RadFilterFunction`

Gets or sets the default filter function that will be set to the editor item
            when it is first created.

###  DisplayName `String`

Gets or sets DisplayName for the editor.

###  FieldName `String`

Gets or sets FieldName for the editor.

###  Owner `RadFilter`

Keeps reference to the owner RadFilter control.

###  PreviewDataFormat `String`

Gets or sets PreviewDataFormat for the editor. This property will be used
                to format the value per editor when ExpressionPreviewPosition is different than RadFilterExpressionPreviewPosition.None

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

