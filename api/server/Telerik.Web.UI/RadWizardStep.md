---
title: Telerik.Web.UI.RadWizardStep
page_title: Telerik.Web.UI.RadWizardStep
description: Telerik.Web.UI.RadWizardStep
---

# Telerik.Web.UI.RadWizardStep

This Class defines the RadWizardStep in RadWizard.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWizardStep

## Properties

###  Active `Boolean`

Gets or sets a value indicating whether the current RadWizardStep is active.

#### Remarks
Use the Active property to activate a RadWizardStep object. There can be only one selected
            	RadWizardStep at a time within a RadWizard control.

###  ActiveImageUrl `Boolean`

Gets or sets the URL to an image which is displayed when the step is active.

#### Remarks
Use the ActiveImageUrl property to specify a custom image that will be
            		displayed when the current step is active. Setting the SelectedImageUrl
            		property required the ImageUrl property to be set beforehand. 
            	
            		If the ActiveImageUrl property is not set the value of the ImageUrl 
            		will be used instead.

###  AllowReturn `Boolean`

Gets or sets the allow return.

###  CausesValidation `Boolean`

###  DisabledImageUrl `String`

Gets or sets the URL to an image which is displayed when the step is disabled 
            	(its Enabled property is set to false).

#### Remarks
Use the DisabledImageUrl property to specify a custom image that will be
            		displayed when the current step is disabled. Setting the DisabledImageUrl
            		property required the ImageUrl property to be set beforehand. 
            	
            		If the DisabledImageUrl property is not set the value of the ImageUrl 
            		will be used instead.

###  DisplayCancelButton `Boolean`

Gets or sets the display cancel button.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  HoveredImageUrl `String`

Gets or sets the URL to an image which is displayed when the 
            	user hovers the current step with the mouse.

#### Remarks
Use the HoveredImageUrl property to specify a custom image that will be
            		displayed when the user hovers the step with the mouse. Setting the HoveredImageUrl
            		property required the ImageUrl property to be set beforehand. 
            	
            		If the HoveredImageUrl property is not set the value of the ImageUrl 
            		will be used instead.

###  ImageUrl `String`

Gets or sets the URL to an image which is displayed next to the text of a step.

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	displayed before the text of the current step.

###  Index `Int32`

Gets the zero-based index of the current RadWizardStep object.

###  SpriteCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class
            that contains the sprite image for this item and the positioning for it.

#### Remarks
By default, the image in an item is defined by the ImageUrl property.
            You can use SpriteCssClass to specify a class that will position a sprite
            instead of using image.

###  StepType `RadWizardStepType`

Gets or sets the type of the step.

###  Title `String`

Gets or sets the title.

###  ToolTip `String`

Gets or sets the tooltip of the wizard step.

###  ValidationGroup `String`

Gets or sets the validation group.

###  Width `Unit`

Gets or sets the width of the Web server control.

###  Wizard `RadWizard`

Gets the wizard.

