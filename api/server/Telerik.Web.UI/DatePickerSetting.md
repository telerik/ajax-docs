---
title: Telerik.Web.UI.DatePickerSetting
page_title: Telerik.Web.UI.DatePickerSetting
description: Telerik.Web.UI.DatePickerSetting
---

# Telerik.Web.UI.DatePickerSetting

The class holding the settings for the Telerik.Web.UI.RadDateInput control which
            are used to determine the date input behavior.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.InputSetting : IStateManager
* Telerik.Web.UI.DateInputSetting : IRadDateInput
* Telerik.Web.UI.DatePickerSetting

## Properties

###  BehaviorID `String`

Gets or sets a value to access the client-side behavior.

#### Remarks
In cases where you would like to access the client-side behavior for
            your setting from script code in the client, you can set this BehaviorID to simplify
            the process. See example below:

###  ClearValueOnError `Boolean`

Gets or sets a value indicating whether the value entered into the textbox should be cleared on error.

###  ClientEvents `InputManagerClientEvents`

Gets or sets an instance of the InputManagerClientEvents class
            which defines the JavaScript functions (client-side event handlers) that are invoked
            when specific client-side events are raised.

###  Culture `CultureInfo`

Gets or sets the culture used by RadDateSetting to format the
            date.

###  DateFormat `String`

Gets or sets the date and time format used by
            RadDateSetting.

###  DisabledCssClass `String`

Gets or sets the css style for TextBox when when the control is disabled.

###  DisplayDateFormat `String`

Gets or sets the display date format used by
            RadDateSetting.(Visible when the control is not on focus.)

###  EmptyMessage `String`

Gets or sets a value message shown when the control is empty.

#### Remarks
Shown when the control is empty and loses focus. You can set the empty message
            text through EmptyMessage property.

###  EmptyMessageCssClass `String`

Gets or sets the css style for TextBox when when the control is empty.

###  EnabledCssClass `String`

Gets or sets the css style for enabled TextBox control.

###  EnableScreenBoundaryDetection `Boolean`

Gets or sets whether the screen boundaries should be taken into consideration
            when the Calendar or TimeView are displayed.

###  EnableShadows `Boolean`

Gets or sets whether popup shadows will appear.

###  ErrorMessage `String`

Gets or sets the text for the error message displayed in the control when validation fails.

###  FocusedCssClass `String`

Gets or sets the css style for invalid state of TextBox control.

###  HoveredCssClass `String`

Gets or sets the css style for hovered TextBox control.

###  InitializeOnClient `Boolean`

Gets or sets a value indicating the control should be initialized on client or not.

###  InvalidCssClass `String`

Gets or stes the css style for invalid state of TextBox control.

###  IsValid `Boolean`

Gets if the TargetControls in the InputSettings 
            are successfully validated.

###  MaxDate `DateTime`

Gets or sets the largest date value allowed by
            RadDateSetting.

###  MinDate `DateTime`

Gets or sets the smallest date value allowed by
            RadDateSetting.

###  Overlay `Boolean`

Gets or sets a value indicating whether the picker will create an overlay element to ensure popups are over a flash element or Java applet.

###  PopupDirection `DatePickerPopupDirection`

Gets or sets the direction in which the popup Calendar is displayed,
            with relation to the DatePicker control.

###  ReadOnlyCssClass `String`

Gets or sets the css style for Read Only state of TextBox control.

###  SelectionOnFocus `SelectionOnFocus`

Gets or sets whether the text in the control selected on focus and how.

###  SharedCalendarID `String`

Gets or sets the ID of the calendar that will be used for picking dates. This
            property allows you to configure several datepickers to use a single RadCalendar
            instance.

###  ShortYearCenturyEnd `Int32`

Gets or sets a value that indicates the end of the century that is used to
            interpret the year value when a short year (single-digit or two-digit year) is entered
            in the input.

###  TargetControls `TargetControlCollection`

Gets a collection of TargetInput objects that allows for
            specifying the objects for which input will be created on the client-side.

#### Remarks
Use the TargetControls collection to programmatically control
            which objects should be inputtipified on the client-side.

###  Validation `InputSettingValidation`

Gets an instance of the InputSettingValidation class
            which defines the validation behavior.

## Methods

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

