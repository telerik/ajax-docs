---
title: Wizard Object
page_title: Wizard Object - RadWizard
description: Check our Web Forms article about Wizard Object.
slug: wizard/client-side-programming/wizard-object
tags: wizard,object
published: True
position: 1
---

# Wizard Object



## 

The **RadWizard** client-side object exposes the following public methods and properties to control its behavior:


>caption  RadWizard Client-Side Methods 

|  **Name**  |  **Parameters**  |  **Return Type**  |  **Description**  |
| ------ | ------ | ------ | ------ |
| **get_activeIndex** ||int|Returns the active step index.|
| **get_activeWizardStep** ||Telerik.Web.UI.RadWizardStep|Returns active RadWizardStep object.|
| **get_renderedSteps** ||Telerik.Web.UI.RadWizardStepCollection|Returns a collection of RadWizardStep contained in RadWizard control.|
| **get_cancelButtonElement** ||HTML element|Returns the cancel button HTML element.|
| **get_finishButtonElement** ||HTML element|Returns the finish button HTML element.|
| **get_previousButtonElement** ||HTML element|Returns previous button HTML element.|
| **get_nextButtonElement** ||HTML element|Returns next button HTML element.|
| **get_progressPercent** ||int|Returns the current RadWizard level of completion.|
| **get_history** ||Array|Returns an array of indexes of the steps that have been activated. They are also arranged in the same order they have been activated.|
| **set_activeIndex** |int||Sets an active step for the RadWizard with the same index as the one sent as parameter.|
| **set_activeWizardStep** |Telerik.Web.UI.RadWizardStep||Sets an active step for the RadWizard control.|
| **set_progressPercent** |int||Sets the RadWizard current value of the progress.|
