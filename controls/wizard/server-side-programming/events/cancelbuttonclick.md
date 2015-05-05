---
title: CancelButtonClick
page_title: CancelButtonClick | RadWizard for ASP.NET AJAX Documentation
description: CancelButtonClick
slug: wizard/server-side-programming/events/cancelbuttonclick
tags: cancelbuttonclick
published: True
position: 2
---

# CancelButtonClick



## 

The server-side **CancelButtonClick** event occurs when the cancel button is clicked.

The **CancelButtonClick** event handler receives two arguments:

1. The **RadWizard** that contains the active step. This argument is of type object, but can be cast to the **RadWizard** type.

1. A **WizardEventArgs** object. This object has two properties:

	* **CurrentStepIndex** - the current step index.

	* **CurrentStep** - a reference the current step.

	* **NextStepIndex** - the next step index.

	* **NextStep** - a reference to the next step.

Use the **CancelButtonClick** event handler to respond when the user clicks on the cancel button.





````C#
protected void RadWizard1_CancelButtonClick(object sender, WizardEventArgs e)
{
	Label1.Text = "You clicked on Cancel button";
}
````
````VB.NET
Protected Sub RadWizard1_CancelButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.CancelButtonClick
	Label1.Text = "You clicked on Cancel button"
End Sub
````


