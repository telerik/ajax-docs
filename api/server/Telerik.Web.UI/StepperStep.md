---
title: Telerik.Web.UI.StepperStep
page_title: Telerik.Web.UI.StepperStep
description: Telerik.Web.UI.StepperStep
---

# Telerik.Web.UI.StepperStep

Array of steps to be rendered in the Stepper. If the array contains objects, their fields will be used for each Step. If the array contains strings, those will be used as Step labels.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.StepperStep

## Properties

###  ClientIconTemplate `String`

The template used to render the icon in the indicator of the step.The fields which can be used in the template are: label String - the label set on the step; icon String - the icon specified for this step (if any); successIcon String - the successIcon specified for this step (if any); enabled Boolean - indicates whether the step is enabled (true) or disabled (false); error Boolean - indicates whether the step has error (true) or not (false); selected Boolean - indicates whether the step is selected; previous Boolean - indicates whether the step is before the currently selected or not; index Number - a zero-based index of the current step; isFirstStep Boolean - indicates whether the step is the initial one in the Stepper; isLastStep Boolean - indicates whether the step is the last one in the Stepper; indicatorVisible Boolean - indicates whether the indicator, which holds the icon should be displayed or not or labelVisible Boolean - indicates whether the label section of the step should be displayed or not.

###  Enabled `Boolean`

Defines whether the Step is enabled or not. By default all steps are enabled.

###  Error `Boolean`

Defines whether the Step is in error state (is invalid). By default all steps are valid.

###  Icon `String`

Defines a name of an existing icon in the Kendo UI theme sprite. The icon will be displayed in the indicator element of that Step. For a list of available icon names, please refer to the Web Font Icons article.

###  Label `String`

Defines the label (text) of the Step.

###  Selected `Boolean`

Defines whether the Step is selected.

###  SuccessIcon `String`

Defines a name of an existing icon in the Kendo UI theme sprite. The icon will be displayed in the indicator element of that Step, when the step is a previous one and it does not have an error. For a list of available icon names, please refer to the Web Font Icons article.

