---
title: Wizard Object
page_title: Wizard Object | UI for ASP.NET AJAX Documentation
description: Wizard Object
slug: wizard/client-side-programming/wizard-object
tags: wizard,object
published: True
position: 1
---

# Wizard Object



## 

The __RadWizard__ client-side object exposes the following public methods and properties to control its behavior:


>caption  RadWizard Client-Side Methods 

|  __Name__  |  __Parameters__  |  __Return Type__  |  __Description__  |
| ------ | ------ | ------ | ------ |
| __get_activeIndex__ ||int|Returns the active step index.|
| __get_activeWizardStep__ ||Telerik.Web.UI.RadWizardStep|Returns active RadWizardStep object.|
| __get_renderedSteps__ ||Telerik.Web.UI.RadWizardStepCollection|Returns a collection of RadWizardStep contained in RadWizard control.|
| __get_cancelButtonElement__ ||HTML element|Returns the cancel button HTML element.|
| __get_finishButtonElement__ ||HTML element|Returns the finish button HTML element.|
| __get_previousButtonElement__ ||HTML element|Returns previous button HTML element.|
| __get_nextButtonElement__ ||HTML element|Returns next button HTML element.|
| __get_progressPercent__ ||int|Returns the current RadWizard level of completion.|
| __get_history__ ||Array|Returns an array of indexes of the steps that have been activated. They are also arranged in the same order they have been activated.|
| __set_activeIndex__ |int||Sets an active step for the RadWizard with the same index as the one sent as parameter.|
| __set_activeWizardStep__ |Telerik.Web.UI.RadWizardStep||Sets an active step for the RadWizard control.|
| __set_progressPercent__ |int||Sets the RadWizard current value of the progress.|
