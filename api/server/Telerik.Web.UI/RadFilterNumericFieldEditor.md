---
title: Telerik.Web.UI.RadFilterNumericFieldEditor
page_title: Telerik.Web.UI.RadFilterNumericFieldEditor
description: Telerik.Web.UI.RadFilterNumericFieldEditor
---

# Telerik.Web.UI.RadFilterNumericFieldEditor

Represents an editor used for filtering fields of numeric type.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager
* Telerik.Web.UI.RadFilterDataFieldEditor
* Telerik.Web.UI.RadFilterNumericFieldEditor

## Properties

###  NumericType `NumericType`

Gets or sets the NumericType property of the  control.

###  AllowRounding `Boolean`

Gets or sets the NumberFormat.AllowRounding property of the  control.

###  KeepNotRoundedValue `Boolean`

Gets or sets the NumberFormat.KeepNotRoundedValue property of the  control.

###  DecimalDigits `Int32`

Gets or sets the NumberFormat.DecimalDigits property of the  control.

###  FieldName `String`

Gets or sets FieldName for the editor.

###  DisplayName `String`

Gets or sets DisplayName for the editor.

###  ToolTip `String`

Gets or sets the ToolTip property of the editor control.

###  PreviewDataFormat `String`

Gets or sets PreviewDataFormat for the editor. This property will be used
                to format the value per editor when ExpressionPreviewPosition is different than RadFilterExpressionPreviewPosition.None

###  DataType `Type`

Gets or sets (see the Remarks) the type of the data from the Field.

#### Remarks
The DataType property supports the following base .NET Framework data
                types:BooleanByteCharDateTimeDecimalDoubleInt16Int32Int64SByteSingleStringTimeSpanUInt16UInt32UInt64

###  DefaultFilterFunction `RadFilterFunction`

Gets or sets the default filter function that will be set to the editor item
            when it is first created.

###  Owner `RadFilter`

Keeps reference to the owner RadFilter control.

## Methods

###  InitializeEditor

Initializes the default RadNumericTextBox control used in the field editor.

#### Parameters

#### container `System.Web.UI.Control`

The container Control where the CheckBox will be added.

#### Returns

`System.Void` 

###  ExtractValues

Extracts an ArrayList with the values from the editor.

#### Returns

`System.Collections.ArrayList` An ArrayList holding the editor values.

###  SetEditorValues

Populates the field editor using the first values from the passed ArrayList.

#### Parameters

#### values `System.Collections.ArrayList`

An ArrayList holding a boolean value.

#### Returns

`System.Void` 

###  InitializeEditor

Initializes the control rendered by the field editor.

#### Parameters

#### container `System.Web.UI.Control`

The container Control where the editor control will be added.

#### Returns

`System.Void` 

###  ExtractValues

Extracts an ArrayList with the values from the editor.

#### Returns

`System.Collections.ArrayList` An ArrayList holding the editor values.

###  SetEditorValues

Populates the field editor using the first values from the passed ArrayList.

#### Parameters

#### values `System.Collections.ArrayList`

An ArrayList holding a boolean value.

#### Returns

`System.Void` 

