---
title: Telerik.Web.UI.MaskedTextBoxSetting
page_title: Telerik.Web.UI.MaskedTextBoxSetting
description: Telerik.Web.UI.MaskedTextBoxSetting
---

# Telerik.Web.UI.MaskedTextBoxSetting

Class holding settings which are used to determine the masked input behavior

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.InputSetting : IStateManager
* Telerik.Web.UI.MaskedTextBoxSetting

## Properties

###  DisplayMask `String`

Gets or sets the display mask which is shown when the 
            is not focused.

###  Mask `String`

Gets or sets the  mask.

###  PromptChar `String`

Gets or sets the prompt char.

###  DisplayPromptChar `String`

Gets or sets the prompt character used in the display mask.

###  AllowEmptyEnumerations `Boolean`

Gets or sets a value which determines if empty mask parts are allowed.

###  ZeroPadNumericRanges `Boolean`

Gets or sets if the values of numeric range parts of the mask to have a fixed width.

###  NumericRangeAlign `NumericRangeAlign`

Gets or sets alignment of numeric ranges.

###  RoundNumericRanges `Boolean`

Gets or sets if the numberic ranges will be rounded.

###  HideOnBlur `Boolean`

Gets or sets if the prompt will be hidden when
             is blurred.

###  InvalidStyleDuration `Int32`

Gets or sets the time, in milliseconds, the InvalidStyle should be displayd. Must be a positive integer.

###  TargetControls `TargetControlCollection`

Gets a collection of TargetInput objects that allows for
            specifying the objects for which input will be created on the client-side.

#### Remarks
Use the TargetControls collection to programmatically control
            which objects should be inputtipified on the client-side.

###  ClientEvents `InputManagerClientEvents`

Gets or sets an instance of the InputManagerClientEvents class
            which defines the JavaScript functions (client-side event handlers) that are invoked
            when specific client-side events are raised.

###  Validation `InputSettingValidation`

Gets an instance of the InputSettingValidation class
            which defines the validation behavior.

###  EnabledCssClass `String`

Gets or sets the css style for enabled TextBox control.

###  BehaviorID `String`

Gets or sets a value to access the client-side behavior.

#### Remarks
In cases where you would like to access the client-side behavior for
            your setting from script code in the client, you can set this BehaviorID to simplify
            the process. See example below:

###  HoveredCssClass `String`

Gets or sets the css style for hovered TextBox control.

###  InvalidCssClass `String`

Gets or stes the css style for invalid state of TextBox control.

###  FocusedCssClass `String`

Gets or sets the css style for invalid state of TextBox control.

###  ReadOnlyCssClass `String`

Gets or sets the css style for Read Only state of TextBox control.

###  DisabledCssClass `String`

Gets or sets the css style for TextBox when when the control is disabled.

###  EmptyMessageCssClass `String`

Gets or sets the css style for TextBox when when the control is empty.

###  EmptyMessage `String`

Gets or sets a value message shown when the control is empty.

#### Remarks
Shown when the control is empty and loses focus. You can set the empty message
            text through EmptyMessage property.

###  ErrorMessage `String`

Gets or sets the text for the error message displayed in the control when validation fails.

###  SelectionOnFocus `SelectionOnFocus`

Gets or sets whether the text in the control selected on focus and how.

###  InitializeOnClient `Boolean`

Gets or sets a value indicating the control should be initialized on client or not.

###  ClearValueOnError `Boolean`

Gets or sets a value indicating whether the value entered into the textbox should be cleared on error.

###  IsValid `Boolean`

Gets if the TargetControls in the InputSettings 
            are successfully validated.

## Methods

###  Validate

Validates the specified  control.

#### Parameters

#### input `System.Web.UI.WebControls.TextBox`

The  control.

#### Returns

`System.Void` 

###  Validate

Validates the specified  control with supplied context.

#### Parameters

#### input `System.Web.UI.WebControls.TextBox`

The  control.

#### context `System.Object`

The context.

#### Returns

`System.Void` 

###  Validate

Validates the specified  control.

#### Parameters

#### input `System.Web.UI.WebControls.TextBox`

The  control.

#### Returns

`System.Void` 

###  Validate

Validates the specified  control with supplied context.

#### Parameters

#### input `System.Web.UI.WebControls.TextBox`

The  control.

#### context `System.Object`

The context.

#### Returns

`System.Void` 

