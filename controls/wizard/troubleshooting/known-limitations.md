---
title: Known Limitations
page_title: Known Limitations | RadWizard for ASP.NET AJAX Documentation
description: Known Limitations
slug: wizard/troubleshooting/known-limitations
tags: known,limitations
published: True
position: 0
---

# Known Limitations



The **RadWizard** control's known limitations are listed below:

* **RadWizard** is not supported in IE8, since its callouts are rendered by "transform" CSS property, which is supported in IE9+

* **WizardSteps.Insert() method should not be used for inserting new RadWizard steps**

	Using the RadWizard1.WizardSteps.Insert(index, newWizardStep) server-side method of the WizardSteps collection would lead to corruption of the control tree of the page. In consequence, it could prevent the viewstate to be loaded properly. As a result the application crashes after the postback. The WizardSteps collection's Add() server-side method (RadWizard1.WizardSteps.Add()) should be used instead, as demonstrated in the [Add/Remove Wizard Steps demo](https://demos.telerik.com/aspnet-ajax/wizard/application-scenarios/add-remove-wizardsteps/defaultcs.aspx).
