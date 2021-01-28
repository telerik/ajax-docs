---
title: NextButtonClick
page_title: NextButtonClick - RadWizard
description: Check our Web Forms article about NextButtonClick.
slug: wizard/server-side-programming/events/nextbuttonclick
tags: nextbuttonclick
published: True
position: 5
---

# NextButtonClick



## 

The server-side **OnNextButtonClick** event occurs when the next button is clicked.

The **OnNextButtonClick** event handler receives two arguments:

1. The **RadWizard** that contains the active step. This argument is of type object, but can be cast to the **RadWizard** type.

1. A **WizardEventArgs** object. This object has two properties:

	* **CurrentStepIndex** - the current step index.

	* **CurrentStep** - a reference the current step.

	* **NextStepIndex** - the next step index.

	* **NextStep** - a reference to the next step.

Use the **OnNextButtonClick** event handler to respond when the next button is clicked.





````C#
protected void RadWizard1_NextButtonClick(object sender, WizardEventArgs e)
{
	Label1.Text = "You clicked on NextButton button";
}
````
````VB.NET
Protected Sub RadWizard1_NextButtonClick(sender As Object, e As WizardEventArgs) Handles RadWizard1.NextButtonClick
	Label1.Text = "You clicked on NextButton button"
End Sub
````


