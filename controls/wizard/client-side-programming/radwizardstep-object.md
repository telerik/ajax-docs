---
title: RadWizardStep Object
page_title: RadWizardStep Object | RadWizard for ASP.NET AJAX Documentation
description: RadWizardStep Object
slug: wizard/client-side-programming/radwizardstep-object
tags: radwizardstep,object
published: True
position: 2
---

# RadWizardStep Object


The **RadWizardStep** client-side object exposes the following public methods and properties to control its behavior:


>caption  RadWizardStep Client-Side Methods 

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_active** ||Boolean|Returns whether this RadWizardStep is current RadWizard active step.|
| **set_active** |Boolean||Sets a boolean value indicating whether the RadWizardRenderedStep is active.|
| **activate** |||Sets active the RadWizardRenderedStep.|
| **deactivate** |||Sets inactive the RadWizardRenderedStep.|
| **get_index** ||int|Returns the RadWizardStep index.|
| **get_id** ||String|Gets the id of the step.|
| **set_id** |String||Sets the id of the step.|
| **get_stepType** ||int|Returns the step type. The RadWizardStep type can be: 0 - Auto; 1 - Complete; 2 - Finish; 3 - Start; 4 - Step.|
| **set_stepType** |Telerik.Web.UI.WizardStepType||Sets WizardStepType of the step.|
| **get_title** ||string|Returns the text printed for the RadWizardStep.|
| **set_title** |String||Sets a string value of the title.|
| **get_wizard** ||RadWizard|Returns the instance of the RadWizard control.|
| **set_wizard** |RadWizard||Sets the parent RadWizard control.|
| **get_enabled** ||Bool|Gets a boolean value indicating whether the RadWizardRenderedStep is enabled.|
| **set_enabled** |Bool||Sets a boolean value indicating whether the RadWizardRenderedStep is enabled.|
| **disable** |||Disables the RadWizardStep.|
| **enable** |||Enables the RadWizardStep.|
| **hide** |||Hides the RadWizardStep content.|
| **show** |||Shows the RadWizardStep content.|
| **get_element** ||HTMLElement|Gets the HTMLElement of the step.|
| **get_navigationBarButtonElement** ||HTMLElement|Gets the HTMLElement of the corresponding navigationBar button.|
| **get_navigationBarLinkElement** ||HTMLElement|Gets the HTMLElement of the corresponding navigationBar link.|
| **get_imageElement** ||HTMLElement|Gets the HTMLElement of the corresponding image element.|
| **get_textElement** ||HTMLElement|Gets the HTMLElement of the corresponding text element.|
| **get_allowReturn** ||Boolean|Gets a boolean value indicating whether the RadWizardRenderedStep is allowed to be returned to.|
| **set_allowReturn** |Boolean||Sets a boolean value indicating whether the RadWizardRenderedStep is allowed to be returned to.|
| **get_displayCancelButton** ||Boolean|Gets a boolean value indicating whether the cancel button of the RadWizardRenderedStep should be displayed.|
| **set_displayCancelButton** |Boolean||Sets a boolean value indicating whether the cancel button of the RadWizardRenderedStep should be displayed.|
| **get_causesValidation** ||Bool|Gets a boolean value indicating whether the RadWizardRenderedStep should cause validation.|
| **set_causesValidation** |Bool||Sets a boolean value indicating whether the RadWizardRenderedStep should cause validation.|
| **get_validationGroup** ||String|Gets a string value of the validations group of the step.|
| **set_validationGroup** |String||Sets  a string value of the validations group of the step.|
| **get_cssClass** ||String|Gets a string value of the cssClass.|
| **set_cssClass** |String||Sets a string value of the cssClass.|
| **get_toolTip** ||String|Gets a string value of the toolTip.|
| **set_toolTip** |String||Sets a string value of the toolTip.|
| **get_imageUrl** ||String|Gets a string value of the ImageUrl.|
| **set_imageUrl** |String||Sets a string value of the ImageUrl.|
| **get_activeImageUrl** ||String|Gets a string value of the active ImageUrl.|
| **set_activeImageUrl** |String||Sets a string value of the active ImageUrl.|
| **get_disabledImageUrl** ||String|Gets a string value of the disabled ImageUrl.|
| **set_disabledImageUrl** |String||Sets a string value of the disabled ImageUrl.|
| **get_hoveredImageUrl** ||String|Gets a string value of the hovered ImageUrl.|
| **set_hoveredImageUrl** |String||Sets a string value of the hovered ImageUrl.|
