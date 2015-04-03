---
title: Steps
page_title: Steps | UI for ASP.NET AJAX Documentation
description: Steps
slug: wizard/structure/steps
tags: steps
published: True
position: 1
---

# Steps



__RadWizardStep__ represents one of the child views that can be displayed in the RadWizard.

## RadWizard Properties:

Each RadWizardStep has the following properties:

* __Title__ - the text printed in RadWizardStep element.

* __ID__ - the id value that can be used in order to access this step on the server-side.

* __ToolTip__ - shows a text when user hovers on a RadWizardStep.

* __Enabled__ - enables/disables the RadWizardStep.

* __AllowReturn__ - allows/prevents the step from being activated more than once. The default value is __"True"__ and users are able to go back to this step as many times as they want.

* __DisplayCancel__ - shows/hides the cancel button for a step.

* __ValidationGroup__ - specifies which group of controls is validated on validation.

* __CausesValidation__ - enables/disables the validation functionality if user tries to change the current step.

* __ImageUrl__ - specifies an image to be displayed as an icon next to the RadWizardStep. The position of this image is controlled by the property __ImagePosition__ defined globally for the RadWizard control.

* __ActiveImageUrl, DisabledImageUrl, HoveredImageUrl__ - like __ImageUrl__ specifies an image to be displayed for the active, disabled and hovered step.

* __SpriteCssClass__ - replaces the step image element with a sized span for easier use of sprites. This property value is applied to the rendered span element as a class attribute. In this CSS class rule you can define the the path to the background image.

>note In order to use any of the following properties __ActiveImageUrl, DisabledImageUrl, HoveredImageUrl__ it requires setting the __ImageUrl__ as well.
>


Along with the already mentioned properties the __RadWizardStep__ provides a __StepType__ property.Different step types provide specific predefined layout and functionality ready to be used in real world scenarios.

The following types are:

* __Start__ - includes just a Next button.

* __Step__ - includes both a Next and Previous button.

* __Finish__ - includes Next, Previous, and Finish buttons

* __Complete__ - displays a summary of the task performed after the Finish button has been clicked from the Finish step.

* __Auto__ - (the default) the rendered navigation buttons are automatically determined based on the index of the step itself as follows: the first step in the wizard is assumed to be the Start step, the last step the Finish step, and all other steps are considered Step steps; no step is automatically considered a Complete step (if you want a Complete step, it must be explicitly specified).

## Navigation Buttons:
>caption Figure 1: RadWizard Navigation buttons

![wizard-navigation-buttons](images/wizard-navigation-buttons.png)

The __RadWizardStep__ navigation buttons are special buttons for navigation between the steps and by default are positioned at the bottom of the __RadWizard__ These buttons Next, Previous, Finish and Cancel navigation buttons are generated based on the current __RadWizard StepType__. Each of them can be localized and has a separate server and client event that can be handled.

As of Q3 2014 SP1 you are able to hide and position top the __RadWizardStep__ navigation buttons:

* You can set the __RadWizardStep__ DisplayNavigationButtons="false" to hide the navigation buttons.

* You can set the __RadWizardStep__ NavigationButtonsPosition="Top" to position top the navigation buttons as shown in the screen shot below:
>caption Figure 2: RadWizard Navigation buttons top positioned

![wizard-navigation-buttons-top](images/wizard-navigation-buttons-top.png)
